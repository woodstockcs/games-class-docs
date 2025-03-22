// Video data with sections and quiz questions
const videoData = {
  videoTitle: 'P5.js: Understanding Variables and Program Flow',
  videoId: '7A5tKW9HGoM', // P5.js: Understanding Variables and Program Flow
  sections: [
    {
      id: 1,
      title: 'Introduction',
      description: 'Welcome and context about the video',
      classification: 'non-content',
      startTime: '00:00',
      endTime: '00:36',
      durationSeconds: 36,
      quiz: {
        question:
          'This video is part of a series on p5.js programming.',
        answer: true,
        feedback: {
          correct:
            'Correct! This video is part of a series on programming in p5.js.',
          incorrect:
            'Incorrect. The video is indeed part of a series on programming in p5.js, as mentioned in the introduction.',
        },
      },
    },
    {
      id: 2,
      title: 'Program Flow in p5.js',
      description: 'Explaining setup and draw functions',
      classification: 'core content',
      startTime: '00:36',
      endTime: '01:22',
      durationSeconds: 46,
      quiz: {
        question:
          'In p5.js, the setup() function runs continuously in a loop.',
        answer: false,
        feedback: {
          correct:
            'Correct! The setup() function runs once at the beginning, while the draw() function is the one that loops continuously.',
          incorrect:
            "Incorrect. The setup() function runs only once when the program starts. It's the draw() function that runs continuously in a loop.",
        },
      },
    },
    {
      id: 3,
      title: 'Draw Loop Explanation',
      description: 'How draw function loops forever',
      classification: 'core content',
      startTime: '01:22',
      endTime: '02:22',
      durationSeconds: 60,
      quiz: {
        question:
          'The draw() function in p5.js repeats over and over until the program stops.',
        answer: true,
        feedback: {
          correct:
            'Correct! The draw() function loops continuously, executing its code repeatedly until the program ends.',
          incorrect:
            'Incorrect. The draw() function does indeed loop continuously until the program stops running.',
        },
      },
    },
    {
      id: 4,
      title: 'Simplifying the Example',
      description: 'Creating a minimal circle example',
      classification: 'important context',
      startTime: '02:22',
      endTime: '03:16',
      durationSeconds: 54,
      quiz: {
        question:
          'Using simpler examples helps understand programming concepts better.',
        answer: true,
        feedback: {
          correct:
            'Correct! Simplifying examples helps focus on the core concepts being taught without distractions.',
          incorrect:
            'Incorrect. The video emphasizes that starting with simpler examples makes it easier to understand the fundamental concepts.',
        },
      },
    },
    {
      id: 5,
      title: 'Introduction to Variables',
      description: 'Need for things that change in programs',
      classification: 'core content',
      startTime: '03:16',
      endTime: '03:57',
      durationSeconds: 41,
      quiz: {
        question:
          "Variables are used to store information that doesn't change during program execution.",
        answer: false,
        feedback: {
          correct:
            'Correct! Variables are specifically designed to store information that can change over time during program execution.',
          incorrect:
            "Incorrect. Variables are used to store information that DOES change over time. Constants would be used for values that don't change.",
        },
      },
    },
    {
      id: 6,
      title: 'What is a Variable',
      description: 'Explaining named entities that store values',
      classification: 'core content',
      startTime: '03:57',
      endTime: '04:47',
      durationSeconds: 50,
      quiz: {
        question:
          'A variable is a named entity that can store different values at different times.',
        answer: true,
        feedback: {
          correct:
            'Correct! Variables are named containers that can hold different values as the program runs.',
          incorrect:
            'Incorrect. Variables are indeed named entities that can store different values at different points during program execution.',
        },
      },
    },
    {
      id: 7,
      title: 'Using mouseX and mouseY',
      description: 'Demonstrating built-in mouse position variables',
      classification: 'core content',
      startTime: '04:47',
      endTime: '05:26',
      durationSeconds: 39,
      quiz: {
        question:
          'mouseX and mouseY are built-in variables in p5.js that store the current mouse position.',
        answer: true,
        feedback: {
          correct:
            'Correct! mouseX and mouseY are built-in variables that automatically update with the current mouse coordinates.',
          incorrect:
            'Incorrect. mouseX and mouseY are indeed built-in variables in p5.js that track the current position of the mouse cursor.',
        },
      },
    },
    {
      id: 8,
      title: 'Simple Painting Program',
      description: 'Setting up a basic drawing application',
      classification: 'important context',
      startTime: '05:26',
      endTime: '06:04',
      durationSeconds: 38,
      quiz: {
        question:
          'In a drawing application, mouseX and mouseY can be used to determine where to place shapes on the canvas.',
        answer: true,
        feedback: {
          correct:
            'Correct! Using mouseX and mouseY coordinates allows us to place shapes where the mouse cursor is located.',
          incorrect:
            'Incorrect. The mouseX and mouseY variables are essential for tracking the cursor position in drawing applications.',
        },
      },
    },
    {
      id: 9,
      title: 'Moving Background to Setup',
      description: 'Experiment with background placement',
      classification: 'core content',
      startTime: '06:04',
      endTime: '06:34',
      durationSeconds: 30,
      quiz: {
        question:
          "Moving the background() function from draw() to setup() has no effect on the program's visual output.",
        answer: false,
        feedback: {
          correct:
            'Correct! Moving background() to setup() creates a trail effect since the background is only drawn once at the beginning.',
          incorrect:
            'Incorrect. Moving the background() function does significantly change the visual output, creating a trail effect as shapes are drawn.',
        },
      },
    },
    {
      id: 10,
      title: 'Explaining the Trail Effect',
      description: 'Why circles persist when background moved',
      classification: 'core content',
      startTime: '06:34',
      endTime: '07:30',
      durationSeconds: 56,
      quiz: {
        question:
          'The trail effect occurs because the background is only drawn once, allowing new shapes to be drawn without erasing previous ones.',
        answer: true,
        feedback: {
          correct:
            'Correct! When background() is only called once in setup(), new shapes are drawn without erasing the previous ones, creating the trail effect.',
          incorrect:
            'Incorrect. The trail effect does occur because the background is only drawn once, allowing previous shapes to remain visible.',
        },
      },
    },
    {
      id: 11,
      title: 'Introduction to Events',
      description: 'Setup and draw as event functions',
      classification: 'core content',
      startTime: '07:30',
      endTime: '08:09',
      durationSeconds: 39,
      quiz: {
        question:
          'In p5.js, setup() and draw() are examples of event functions that respond to specific events.',
        answer: true,
        feedback: {
          correct:
            'Correct! setup() and draw() are event functions that respond to program initialization and the animation loop, respectively.',
          incorrect:
            'Incorrect. setup() and draw() are indeed event functions in p5.js, responding to specific program events.',
        },
      },
    },
    {
      id: 12,
      title: 'Using mousePressed',
      description: 'Creating a mouse click event handler',
      classification: 'core content',
      startTime: '08:09',
      endTime: '09:06',
      durationSeconds: 57,
      quiz: {
        question:
          'The mousePressed() function is called once when the mouse button is clicked.',
        answer: true,
        feedback: {
          correct:
            'Correct! The mousePressed() function is an event handler that runs once each time the mouse button is pressed.',
          incorrect:
            'Incorrect. The mousePressed() function does execute once each time the mouse button is clicked.',
        },
      },
    },
    {
      id: 13,
      title: 'Explaining Render Order',
      description: 'Why background at end hides shapes',
      classification: 'optional extra',
      startTime: '09:06',
      endTime: '10:10',
      durationSeconds: 64,
      quiz: {
        question:
          'If the background() function is called at the end of draw(), any shapes drawn earlier will still be visible.',
        answer: false,
        feedback: {
          correct:
            'Correct! If background() is called at the end of draw(), it will erase any shapes drawn earlier in that frame.',
          incorrect:
            'Incorrect. If background() is called at the end of draw(), it will cover all shapes drawn earlier in that frame, making them invisible.',
        },
      },
    },
    {
      id: 14,
      title: 'Conclusion',
      description: 'Final thoughts and next steps',
      classification: 'non-content',
      startTime: '10:10',
      endTime: '10:34',
      durationSeconds: 24,
      quiz: {
        question:
          'This video covered everything there is to know about p5.js programming.',
        answer: false,
        feedback: {
          correct:
            'Correct! This video only covered basic concepts of variables and program flow, with more topics planned for future videos.',
          incorrect:
            'Incorrect. This video only covers some basic concepts about variables and program flow, with more topics planned for future videos.',
        },
      },
    },
  ],
};
