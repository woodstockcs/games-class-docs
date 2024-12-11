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

### <u>Mission Timer 🚀</u>
{: .d-inline-block}
Practice
{: .label .label-green }

You're building the display screens for Mission Control. Create a program that tracks multiple mission timelines and alerts.

```javascript
// Mission timers
let missionTime = 0;      // Main mission clock
let fuelCheck = 0;        // Fuel system checks
let lifeSupport = 0;      // Life support pings
let alertBlink = true;    // For blinking effect

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);  // Space black
  
  // Update all our timers
  missionTime = round(millis() / 1000);         // Main clock - seconds
  fuelCheck = round(millis() / 2000);           // Fuel - every 2 seconds
  lifeSupport = round(millis() / 500);          // Life support - twice per second
  
  // Blink effect - switch every second
  if (missionTime % 2 === 0) {
    alertBlink = !alertBlink;
  }

  // See the blink value change
  textSize(10);
  text("blink is: " + alertBlink, 250, 50);
  
  // Style for displays
  textSize(20);
  
  // Main mission clock - white
  fill(255);
  text("MISSION TIME: " + missionTime, 50, 100);
  
  // Fuel check timer - green
  fill(0, 255, 0);
  text("FUEL CHECK: " + "REPLACEME", 50, 200);
  
  // Life support pings - blue
  fill(0, 150, 255);
  text("LIFE SUPPORT: " + "REPLACEME", 50, 300);
  
  // TASKS for you:
  //
  // 1. Fill in the "REPLACEME" spots above
  //    to show the fuelCheck and lifeSupport variables
  //
  // 2. Add "ALERT!" in red (255,0,0) at x:50 y:150 
  //    HINT:
  //    if (alertBlink == true) {
  //      fill(...)
  //      text(...)
  //    }
}
```

{: .note-title}

> Before continuing:
>
> Rename the sketch `Mission Timer` and save it.
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
