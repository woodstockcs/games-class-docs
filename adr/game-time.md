---
title: Game Time
nav_order: 5
parent: A Dark Room
layout: default
---

# Game Time

<br><br>

## Purpose

Today we'll learn how computer games keep track of time, and add a timer display to your game.

<br><br>

## Sandbox

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let elapsedTime = round(millis() / 1000);
  circle(200, 200, elapsedTime * 10);
  text(elapsedTime + ' seconds', 10, 20);
}
```

Try these experiments:

- Change the multiplication factor (10) to make the circle grow faster/slower
- Add a second circle that grows at a different rate
- Try using `elapsedTime` to change the circle's color
- What happens if you remove `round(...)` from `millis()/1000`?

{: .note-title}

> Write on your paper:
>
> - Why does the circle keep growing even when we're not doing anything?
> - What's the largest the circle can get before it goes off screen?

<br><br>

## Walkthrough

- _Elapsed time_ is how long something has been running, like a stopwatch.

- Games use elapsed time in three main ways:

  - Counting up (like score time)
  - Checking intervals (like enemy spawns)
  - Showing player progress (like speedruns)

- The `millis()` function tells us how many milliseconds since the program started.

- We usually divide by 1000 to get seconds instead.

{: .note-title}

> Write on your paper:
>
> The text immediately above in your own words.

<br><br>

<!-- prettier-ignore-start -->

## Exercises

### <u>Fading Square</u>
{: .d-inline-block}
Practice
{: .label .label-green }

Create a square that changes color every 2 seconds and shows how many changes have happened.

```javascript
// Keep track of important numbers
let colorChanges = 0;        // How many times color has changed
let lastChangeTime = 0;      // When did we last change color
let squareColor = 0;         // Current color (0-255)

function setup() {
  createCanvas(400, 400);
  // Start tracking time
  lastChangeTime = round(millis()/1000);
}

function draw() {
  background(220);

  // Get current time in seconds
  let currentTime = round(millis()/1000);

  // Check if 2 seconds have passed
  // HINT: currentTime - lastChangeTime tells us how long since last change
  if (???) {
    // Pick new random color (0-255)
    squareColor = random(255);

    // Count this color change
    colorChanges = colorChanges + 1;

    // Reset the timer
    lastChangeTime = currentTime;
  }

  // Draw square with current color
  fill(squareColor);
  rect(150, 150, 100, 100);

  // Show how many changes on screen
  fill(0);           // Black text
  textSize(16);      // Medium size
  text("Color changes: " + colorChanges, 20, 30);
  text("Seconds since last change: " + (currentTime - lastChangeTime), 20, 60);
}

function mousePressed() {
  // Reset all variables to starting values
  colorChanges = 0;
  lastChangeTime = round(millis()/1000);
  squareColor = 0;
}
```

{: .note-title}

> Before continuing:
>
> Rename the sketch `Fading Square` and save it.
>
> Then write that name in your sprint notes.

<br><br>

### <u>Updating Your Project</u>
{: .d-inline-block}
Proficient
{: .label .label-blue }
This exercise updates your ADR Clone code to make your game track and display time. This will let us see how long we've been playing.

<br>

#### 1. Add Time Variable

Find the game variables section at the top of your code. It should look like this:

```javascript
// game variables
let messages = [];
let buttons = [];
```

Add one new line right after:

```javascript
let gameTime = 0; // Current game time in seconds
```

> Run your code - it should work exactly the same as before.

<br><br>

#### 2. Add Update Function

Scroll to the very bottom of your code. After the showResources() function, add this new function:

```javascript
function updateGameTime() {
  gameTime = round(millis() / 1000);
}
```

> Run your code - it should work exactly the same as before.

<br><br>

#### 3. Show Time on Screen

Find your showResources() function. Add one more line to show the time:

```javascript
function showResources() {
  fill(0);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(16);
  text('wood: ' + wood, 440, 30);
  text('health: ' + health, 440, 60);
  text('game time: ' + gameTime, 440, 90); // Add this line
}
```

> Run your code - you should see "game time: 0" in the top right, but it's not counting up yet.

<br><br>

#### 4. Start the Timer

Find your draw() function. Add updateGameTime() near the top:

```javascript
function draw() {
  background(220);
  updateGameTime();         // Add this line
  showMessages();
  showButtons();
  showResources();
```

> Run your code - the time counter should start counting up!

<br><br>

#### 5. Testing Your Game

After making all these changes:

1. Your time should count up in seconds
2. The counter should appear in the top right
3. The time should keep counting even when you're not clicking anything

If anything's not working, go back through the steps and make sure you added each piece exactly as shown. Every semicolon and bracket matters!

{: .note-title}

> Before continuing:
>
> Write the name of your sketch in your sprint notes.

<br><br>

### <u>Customizing Your Project</u>
{: .d-inline-block}
Distinguished
{: .label .label-red }

#### Maybe... move the location?

```javascript
function showResources() {
  // ... other resource display ...
  text('time: ' + gameTime, 20, 20); // Upper left corner instead
}
```

<br>

#### Maybe... change the label?

```javascript
function showResources() {
  // ... other resource display ...
  text('Days in orbit: ' + gameTime, 440, 90); // Or "Days Growing:" etc.
}
```

<br>

#### Maybe... slow down the clock?

```javascript
function updateGameTime() {
  gameTime = floor(millis() / 2000); // Count every 2 seconds instead of every 1
}
```

<br>

#### Maybe... change the size?

```javascript
function showResources() {
  // ... other resource display ...

  textSize(24); // New size just for time
  text('time: ' + gameTime, 440, 98);
}
```

<br>

#### Maybe... change to a 'warning' color?

```javascript
function showResources() {
  // ... other resource display ...

  if (gameTime > 30) {  // After 30 seconds
    fill(255, 0, 0);    // Change to red
  }
  text("time: " + gameTime, 440, 90);
}
```

{: .note-title}

> Write in your sprint notes...
>
> What update(s) did you make?

<br><br>

<!-- prettier-ignore-end -->
