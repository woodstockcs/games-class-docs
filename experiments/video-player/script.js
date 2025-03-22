// Debounce utility function
function debounce(func, wait, immediate = false) {
  let timeout;

  return function executedFunction(...args) {
    const context = this;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

// Global variables
let player;
let sections = videoData.sections;
let currentSectionIndex = 0;
let timeUpdateInterval;
let pausePoints = [];
let completedSections = new Set();
let skipNonContent = false;
let answeredQuizzes = {}; // Object to track which quizzes have been answered and if they were correct

// Initialize YouTube player when API is ready
function onYouTubeIframeAPIReady() {
  try {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: videoData.videoId,
      playerVars: {
        playsinline: 1,
        controls: 0,
        rel: 0,
        modestbranding: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
        onError: onPlayerError,
      },
    });
  } catch (error) {
    console.error('Error initializing YouTube player:', error);
    showErrorMessage(
      'Failed to load video player. Please refresh the page.'
    );
  }
}

// Handle player errors
function onPlayerError(event) {
  const errorMessages = {
    2: 'Invalid video ID',
    5: 'HTML5 player error',
    100: 'Video not found or removed',
    101: 'Video embedding not allowed',
    150: 'Video embedding not allowed',
  };

  const errorMessage =
    errorMessages[event.data] || 'An unknown error occurred';
  showErrorMessage(`Video playback error: ${errorMessage}`);
}

// Show error message
function showErrorMessage(message) {
  const statusMessage = document.getElementById('statusMessage');
  statusMessage.textContent = message;
  statusMessage.style.display = 'block';
  statusMessage.style.backgroundColor = '#e74c3c';
}

// When player is ready
function onPlayerReady(event) {
  // Add a small delay to ensure the player is fully initialized
  setTimeout(() => {
    setupSections();
    setupPausePoints();
    loadSavedQuizAnswers();

    // Force an initial update
    if (player && typeof player.getCurrentTime === 'function') {
      updateTimeDisplay();
      updateCurrentSection();
      updateProgressBars();
    }

    // Create debounced versions of our update functions
    const debouncedTimeUpdate = debounce(updateTimeDisplay, 10);
    const debouncedSectionUpdate = debounce(updateCurrentSection, 10);
    const debouncedProgressUpdate = debounce(updateProgressBars, 10);

    // Start time tracking with more frequent updates initially
    clearInterval(timeUpdateInterval); // Clear any existing interval
    timeUpdateInterval = setInterval(() => {
      if (!player || typeof player.getCurrentTime !== 'function')
        return;

      try {
        const currentTime = player.getCurrentTime();

        // Check pause points on every interval - this needs to be responsive
        checkPausePoints(currentTime);

        // These UI updates can be debounced
        debouncedTimeUpdate();
        debouncedSectionUpdate();
        debouncedProgressUpdate();
      } catch (error) {
        console.error('Error in time update interval:', error);
      }
    }, 250);

    // Setup event handlers for buttons
    setupEventHandlers();
  }, 1000); // Wait 1 second for player to fully initialize
}

// Move button setup to a separate function
function setupEventHandlers() {
  document
    .getElementById('playPauseBtn')
    .addEventListener('click', debounce(togglePlayPause, 300));
  document
    .getElementById('prevSectionBtn')
    .addEventListener('click', debounce(goToPreviousSection, 300));
  document
    .getElementById('nextSectionBtn')
    .addEventListener('click', debounce(goToNextSection, 300));
  document
    .getElementById('playbackSpeed')
    .addEventListener('change', debounce(changePlaybackSpeed, 300));
  document
    .getElementById('skipNonContentBtn')
    .addEventListener('click', debounce(toggleSkipNonContent, 300));

  // Setup quiz buttons
  document.getElementById('trueBtn').addEventListener(
    'click',
    debounce(() => answerQuiz(true), 300)
  );
  document.getElementById('falseBtn').addEventListener(
    'click',
    debounce(() => answerQuiz(false), 300)
  );
  document
    .getElementById('continueBtn')
    .addEventListener('click', debounce(hideQuiz, 300));
}

// Handle player state changes
function onPlayerStateChange(event) {
  // Update play/pause button text
  const playPauseBtn = document.getElementById('playPauseBtn');

  if (event.data === YT.PlayerState.PLAYING) {
    playPauseBtn.textContent = 'Pause';
    document.getElementById('statusMessage').style.display = 'none';
  } else if (event.data === YT.PlayerState.PAUSED) {
    playPauseBtn.textContent = 'Play';
  }
}

// Set up sections in the sidebar
function setupSections() {
  const sectionsList = document.getElementById('sectionsList');
  sectionsList.innerHTML = ''; // Clear any existing content

  sections.forEach((section, index) => {
    // Validate section data
    if (
      !section.startTime ||
      !section.endTime ||
      convertTimeToSeconds(section.startTime) >=
        convertTimeToSeconds(section.endTime)
    ) {
      console.error(
        `Invalid section data at index ${index}:`,
        section
      );
      return; // Skip this section
    }

    const sectionEl = document.createElement('div');
    sectionEl.className = 'section';
    sectionEl.dataset.index = index;

    const classTag = getClassificationTag(section.classification);

    sectionEl.innerHTML = `
              <div class="section-title">${section.title}
                  <span class="section-classification ${classTag}">${section.classification}</span>
                  <span class="section-completion-indicator" id="completion-${index}">✓</span>
              </div>
              <div class="section-time">${section.startTime} - ${section.endTime} (${section.durationSeconds}s)</div>
              <div class="section-description">${section.description}</div>
              <div class="progress-container">
                  <div class="progress-bar" id="progress-${index}"></div>
              </div>
          `;

    // Debounce the click handler
    sectionEl.addEventListener(
      'click',
      debounce(() => {
        goToSection(index);
      }, 300)
    );

    sectionsList.appendChild(sectionEl);
  });
}

// Get CSS class for classification tag
function getClassificationTag(classification) {
  if (!classification) return '';

  switch (classification.toLowerCase()) {
    case 'core content':
      return 'core-content';
    case 'important context':
      return 'important-context';
    case 'optional extra':
      return 'optional-extra';
    case 'non-content':
      return 'non-content';
    default:
      return '';
  }
}

// Create array of times to pause at (end of each section)
function setupPausePoints() {
  pausePoints = sections.map((section) =>
    convertTimeToSeconds(section.endTime)
  );
}

// Convert time string (MM:SS) to seconds
function convertTimeToSeconds(timeString) {
  if (!timeString || typeof timeString !== 'string') return 0;

  const [minutes, seconds] = timeString.split(':').map(Number);
  return (
    (isNaN(minutes) ? 0 : minutes * 60) +
    (isNaN(seconds) ? 0 : seconds)
  );
}

// Convert seconds to MM:SS format
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) seconds = 0;

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs
    .toString()
    .padStart(2, '0')}`;
}

// Check for pause points
function checkPausePoints(currentTime) {
  if (!player || typeof player.getPlayerState !== 'function') return;

  // Store the current player state to avoid repeated calls
  const playerState = player.getPlayerState();

  // Check if we've reached a pause point
  for (let i = 0; i < pausePoints.length; i++) {
    const pausePoint = pausePoints[i];

    // Skip pause points for quizzes that have already been answered
    if (answeredQuizzes[i] !== undefined) {
      continue;
    }

    // Only consider pause points we're approaching but haven't passed yet
    if (
      currentTime >= pausePoint - 0.5 &&
      currentTime <= pausePoint + 0.1 &&
      playerState === YT.PlayerState.PLAYING
    ) {
      // Mark the exact time we paused to avoid triggering twice
      const sectionKey = `section-${i}-paused`;
      if (
        sessionStorage.getItem(sectionKey) === pausePoint.toString()
      ) {
        // We've already paused at this exact point in this session
        continue;
      }

      // Store that we've paused at this point
      sessionStorage.setItem(sectionKey, pausePoint.toString());

      player.pauseVideo();
      currentSectionIndex = i;
      highlightCurrentSection();

      // Mark section as visited
      markSectionAsVisited(i);

      // Check if it's a non-content section and skip is enabled
      if (
        skipNonContent &&
        i < sections.length - 1 &&
        sections[i].classification &&
        sections[i].classification.toLowerCase() === 'non-content'
      ) {
        // Skip to the next section
        setTimeout(() => {
          goToNextSection();
          // Clear the pause marker when we auto-advance
          sessionStorage.removeItem(sectionKey);
        }, 500);
      } else {
        // Only show quiz for the current section
        showQuizForSection(i);

        // Show status message
        const statusMessage =
          document.getElementById('statusMessage');
        statusMessage.textContent = `Paused at end of section: ${sections[i].title}`;
        statusMessage.style.display = 'block';
      }

      break;
    }
  }
}

// Update the time display
function updateTimeDisplay() {
  if (!player) return;

  try {
    const currentTime = player.getCurrentTime() || 0;
    const duration = player.getDuration() || 0;

    // Make sure we have valid numbers before updating the display
    if (isNaN(currentTime) || isNaN(duration)) {
      console.warn('Invalid time values:', currentTime, duration);
      return;
    }

    document.getElementById(
      'currentTime'
    ).textContent = `${formatTime(currentTime)} / ${formatTime(
      duration
    )}`;
  } catch (error) {
    console.error('Error updating time display:', error);
  }
}

// Update progress bars for each section
function updateProgressBars() {
  if (!player) return;

  try {
    const currentTime = player.getCurrentTime() || 0;

    // Only proceed if currentTime is a valid number
    if (isNaN(currentTime)) {
      console.warn('Invalid current time value:', currentTime);
      return;
    }

    sections.forEach((section, index) => {
      const startTime = convertTimeToSeconds(section.startTime);
      const endTime = convertTimeToSeconds(section.endTime);
      const progressBar = document.getElementById(
        `progress-${index}`
      );

      if (!progressBar) return;

      // Make sure we have valid time values
      if (isNaN(startTime) || isNaN(endTime)) {
        console.warn(
          `Invalid section time values for section ${index}:`,
          startTime,
          endTime
        );
        return;
      }

      if (currentTime < startTime) {
        // Before this section
        progressBar.style.width = '0%';
      } else if (currentTime >= endTime) {
        // After this section
        progressBar.style.width = '100%';
      } else {
        // During this section
        const progress =
          ((currentTime - startTime) / (endTime - startTime)) * 100;
        progressBar.style.width = `${Math.max(
          0,
          Math.min(100, progress)
        )}%`;
      }
    });
  } catch (error) {
    console.error('Error updating progress bars:', error);
  }
}

// Determine and update current section based on time
function updateCurrentSection() {
  if (!player || typeof player.getCurrentTime !== 'function') return;

  const currentTime = player.getCurrentTime();
  let foundSection = false;

  // Find which section we're currently in
  for (let i = 0; i < sections.length; i++) {
    const startTime = convertTimeToSeconds(sections[i].startTime);
    const endTime = convertTimeToSeconds(sections[i].endTime);

    if (currentTime >= startTime && currentTime < endTime) {
      if (currentSectionIndex !== i) {
        currentSectionIndex = i;
        highlightCurrentSection();
      }
      foundSection = true;
      break;
    }
  }

  // If we're before the first section or after the last section
  if (!foundSection) {
    if (currentTime < convertTimeToSeconds(sections[0].startTime)) {
      currentSectionIndex = 0;
    } else if (
      currentTime >=
      convertTimeToSeconds(sections[sections.length - 1].endTime)
    ) {
      currentSectionIndex = sections.length - 1;
    }
    highlightCurrentSection();
  }
}

// Highlight the current section in the list
function highlightCurrentSection() {
  const allSections = document.querySelectorAll('.section');

  allSections.forEach((section) => {
    section.classList.remove('current-section');
  });

  const currentSection = document.querySelector(
    `.section[data-index="${currentSectionIndex}"]`
  );
  if (currentSection) {
    currentSection.classList.add('current-section');

    // Only scroll if not already visible
    const container = document.getElementById('sectionsList');
    const sectionRect = currentSection.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    if (
      sectionRect.top < containerRect.top ||
      sectionRect.bottom > containerRect.bottom
    ) {
      currentSection.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }
}

// Mark a section as visited (different from completed)
function markSectionAsVisited(index) {
  completedSections.add(index);

  const sectionElement = document.querySelector(
    `.section[data-index="${index}"]`
  );
  if (sectionElement) {
    sectionElement.classList.add('visited-section');
  }

  // Store that the section was visited
  sessionStorage.setItem(`section-${index}-visited`, 'true');
}

// Add function to update the section indicator based on quiz results
function updateSectionQuizIndicator(sectionIndex, isCorrect) {
  const completionIndicator = document.getElementById(
    `completion-${sectionIndex}`
  );
  if (completionIndicator) {
    completionIndicator.style.display = 'inline-block';
    completionIndicator.textContent = isCorrect ? '✓' : '✗';
    completionIndicator.style.backgroundColor = isCorrect
      ? '#2ecc71'
      : '#e74c3c';
  }

  const sectionElement = document.querySelector(
    `.section[data-index="${sectionIndex}"]`
  );
  if (sectionElement) {
    sectionElement.classList.add('completed-section');
    if (!isCorrect) {
      sectionElement.classList.add('incorrect-answer');
    }
  }
}

// Modify the answerQuiz function to track answers and add visual indicators
function answerQuiz(userAnswer) {
  if (
    currentSectionIndex < 0 ||
    currentSectionIndex >= sections.length ||
    !sections[currentSectionIndex].quiz
  )
    return;

  const quiz = sections[currentSectionIndex].quiz;
  const trueBtn = document.getElementById('trueBtn');
  const falseBtn = document.getElementById('falseBtn');
  const quizFeedback = document.getElementById('quizFeedback');
  const continueBtn = document.getElementById('continueBtn');

  if (!trueBtn || !falseBtn || !quizFeedback || !continueBtn) {
    console.error('Quiz DOM elements not found');
    return;
  }

  // Disable buttons
  trueBtn.disabled = true;
  falseBtn.disabled = true;

  // Check answer
  const isCorrect = userAnswer === quiz.answer;

  // Record this quiz as answered
  answeredQuizzes[currentSectionIndex] = isCorrect;

  // Update the section indicator
  updateSectionQuizIndicator(currentSectionIndex, isCorrect);

  // Show feedback
  quizFeedback.textContent = isCorrect
    ? quiz.feedback.correct
    : quiz.feedback.incorrect;
  quizFeedback.className = `quiz-feedback ${
    isCorrect ? 'correct' : 'incorrect'
  }`;
  quizFeedback.style.display = 'block';

  // Show continue button
  continueBtn.style.display = 'block';

  // Save quiz answer to sessionStorage to persist across page refreshes
  sessionStorage.setItem(
    `quiz-answer-${currentSectionIndex}`,
    isCorrect ? 'correct' : 'incorrect'
  );
}

// Toggle play/pause
function togglePlayPause() {
  if (!player) return;

  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  } else {
    player.playVideo();
    document.getElementById('statusMessage').style.display = 'none';

    // Hide quiz if visible when playing
    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer && quizContainer.style.display === 'block') {
      hideQuiz();
    }
  }
}

// Hide quiz
function hideQuiz() {
  const quizContainer = document.getElementById('quizContainer');
  if (quizContainer) {
    quizContainer.style.display = 'none';

    // Resume playback after a short delay
    setTimeout(() => {
      if (player) {
        player.playVideo();
        document.getElementById('statusMessage').style.display =
          'none';
      }
    }, 500);
  }
}

// Load saved quiz answers
function loadSavedQuizAnswers() {
  // Restore answeredQuizzes object from sessionStorage
  for (let i = 0; i < sections.length; i++) {
    const savedAnswer = sessionStorage.getItem(`quiz-answer-${i}`);
    if (savedAnswer) {
      answeredQuizzes[i] = savedAnswer === 'correct';
      updateSectionQuizIndicator(i, savedAnswer === 'correct');
    }
  }
}

// Change playback speed
function changePlaybackSpeed() {
  if (!player) return;

  const speedSelect = document.getElementById('playbackSpeed');
  if (!speedSelect) return;

  const speed = parseFloat(speedSelect.value);
  if (!isNaN(speed)) {
    player.setPlaybackRate(speed);
  }
}

// Toggle skip non-content sections
function toggleSkipNonContent() {
  skipNonContent = !skipNonContent;
  const skipBtn = document.getElementById('skipNonContentBtn');
  if (skipBtn) {
    skipBtn.textContent = skipNonContent
      ? "Don't Skip Non-Content"
      : 'Skip Non-Content';
    skipBtn.style.backgroundColor = skipNonContent
      ? '#e74c3c'
      : '#3498db';
  }
}

// Go to a specific section
function goToSection(index) {
  if (!player || index < 0 || index >= sections.length) return;

  // Clear any section pause markers when manually navigating
  Object.keys(sessionStorage).forEach((key) => {
    if (key.startsWith('section-') && key.endsWith('-paused')) {
      sessionStorage.removeItem(key);
    }
  });

  const startTimeInSeconds = convertTimeToSeconds(
    sections[index].startTime
  );
  // Add a small offset to avoid triggering pause points from previous sections
  player.seekTo(startTimeInSeconds + 0.2, true);
  currentSectionIndex = index;
  highlightCurrentSection();

  // Hide status message when navigating
  document.getElementById('statusMessage').style.display = 'none';

  // Hide quiz if visible
  hideQuiz();
}

function resetPlayer() {
  // Clear all session storage
  sessionStorage.clear();
  // Reset global variables
  answeredQuizzes = {};
  completedSections = new Set();
  // Reload the page to reset everything
  window.location.reload();
}

// Show quiz for a specific section
function showQuizForSection(index) {
  // Make sure the index is valid and the quiz exists
  if (index < 0 || index >= sections.length || !sections[index].quiz)
    return;

  const quiz = sections[index].quiz;
  const quizContainer = document.getElementById('quizContainer');
  const quizSectionTitle = document.getElementById(
    'quizSectionTitle'
  );
  const quizQuestion = document.getElementById('quizQuestion');
  const trueBtn = document.getElementById('trueBtn');
  const falseBtn = document.getElementById('falseBtn');
  const quizFeedback = document.getElementById('quizFeedback');
  const continueBtn = document.getElementById('continueBtn');

  // Set quiz content
  quizSectionTitle.textContent = sections[index].title;
  quizQuestion.textContent = quiz.question;

  // Reset quiz state
  trueBtn.disabled = false;
  falseBtn.disabled = false;
  quizFeedback.style.display = 'none';
  quizFeedback.className = 'quiz-feedback';
  continueBtn.style.display = 'none';

  // Show quiz
  quizContainer.style.display = 'block';
}
