---
title: 2.3 Review Functions
nav_order: 230
parent: Pong
layout: default
---

# Review Functions

## Looking for Patterns

Look at these sets of code. What patterns do you notice?

```javascript
// Set A
createCanvas(400, 400);
background(220);
circle(50, 50, 20);
fill(255, 0, 0);
rect(10, 10, 30, 30);
```

```javascript
// Set B
function setup() {
function draw() {
function mousePressed() {
function makeCircle() {
function checkCollision() {
```

Take a minute to write down what's similar about the lines in each set, and what makes the two sets different from each other.

## The Vocabulary

Set A shows **function calls** - these are commands that tell the computer to do something right away.
Set B shows **function definitions** - these are containers where we put our code.

## More Examples to Compare

```javascript
// Function Calls
text('Score: 0', 10, 30);
random(0, 100);
ellipse(mouseX, mouseY, 25);
stroke(0, 255, 0);
triangle(10, 10, 20, 20, 30, 10);
```

```javascript
// Function Definitions
function reset() {
function displayMenu() {
function movePlayer() {
function calculateScore() {
function drawBackground() {
```

## Find the Patterns

Work with a partner. Looking at all the examples so far:

For Function Calls:

- What do you see at the end of each line?
- What comes right after the name?
- How many words are at the start of each line?

For Function Definitions:

- What word do they all start with?
- What comes after the name?
- What do you see at the end instead of a semicolon?

## Practice: Mixed Examples

Look at this code from a game. Label each line as either a function call or a function definition:

```javascript
function setup() {
  // Definition or Call?
  createCanvas(400, 400); // Definition or Call?
  background(220); // Definition or Call?
}

function draw() {
  // Definition or Call?
  fill(255, 0, 0); // Definition or Call?
  circle(mouseX, mouseY, 20); // Definition or Call?
}

function makeEnemy() {
  // Definition or Call?
  rect(random(width), 0, 20, 20); // Definition or Call?
}
```

## Your Code Investigation

1. Open one of your p5.js projects from before break
2. Take a screenshot of about 10 lines
3. Mark every function call with a red arrow
4. Mark every function definition with a blue arrow
5. Practice explaining each one:
   - For function calls: "Here we call the **\_** function to **\_**"
   - For function definitions: "This is where we define the **\_** function which **\_**"

## Vocabulary Check

When talking about your code:

- Use "call the **\_** function" when using commands like `circle()` or `background()`
- Use "inside the **\_** function" when talking about code that goes in `setup()` or `draw()`

## Common Confusions

Sometimes code can look similar but mean different things:

```javascript
function circle() {} // DEFINES a new function named circle
circle(50, 50, 20); // CALLS the circle function to draw

function setup() {} // DEFINES the setup function
setup(); // This would CALL setup (but we don't do this - p5 does it for us)
```
