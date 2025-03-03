---
title: 2.3 Functions Vocab
nav_order: 230
parent: Pong
layout: default
---

# Functions Vocab

## Vocab

- noun "_function call_"
- verb "_to call a function_".

## Part 1: With a Partner

### 1.1 Finding Patterns (5 minutes)

Study these two sets of code. List things you ALWAYS see in Set 1 but NOT ALWAYS in Set 2.

```javascript
// Set 1
createCanvas(400, 400);
background(220);
circle(50, 50, 20);
fill(255, 0, 0);
rect(10, 10, 30, 30);
random(0, 100);
text('Score', 10, 30);
line(0, 0, 100, 100);
```

```javascript
// Set 2
let score = 0;
x = x + speed;
if (x > 100) {
width = 400;
function setup() {
// Draw a circle
{x: 100, y: 200}
[1, 2, 3]
```

A **function call** is how we tell the computer to do something.

Everything in Set 1 is a **function call** and everything in Set 2 is not. You can know when code is **calling a function** when you see:

1. At the start, there is exactly **\_** word.
2. Right after the word, we always see **\_**.
3. Inside the ( ), we often see **\_** separated by **\_**.
4. At the very end of the line, we always find **\_**.

### 1.2 Talking about Functions (10 minutes)

Look at this code:

```javascript
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  fill(0, 0, 0);
  circle(mouseX, mouseY, 20);
  fill(255, 0, 0);
  rect(200, 200, 50, 50);
}
```

Say each of these sentences out loud:

1. "We call the `createCanvas` function to set up our 400 by 300 drawing space."
1. "Inside the parentheses of the `circle` function, we put `mouseX` and `mouseY` and `20`."
1. "After calling `fill`, we call the `rect` function to draw a red circle."

Two of those have a small mistake. Fix each mistake.

1. Partner A picks a line of code from the last section and describes it using ONE of these "bad" ways:

   - Leave out the word "function"
   - Don't use the word "call"
   - Describe it like you (instead of the computer) are doing it ("let's make a circle...")

2. Partner B's job is to:
   - Listen carefully
   - Say "I hear you saying..." and repeat what they heard
   - Say "Here's another way..." and say a _good_ version
   - Check if Partner A agrees with the improvement

#### Examples:

- Bad: "We circle the mouse position with size 20"
- Good: "We call the circle function with mouseX and mouseY for position and 20 for size"

- Bad: "Let's background it to gray"
- Good: "We call the background function to make the canvas gray"

- Bad: "The createCanvas makes it 400 by 400"
- Good: "We call the createCanvas function to set up our 400 by 400 drawing space"

### 1.3: Common Confusions (5 minutes)

These might look like function calls but aren't:

```javascript
function setup() {    // Defines a function = not a call
if (x > 100) {        // Checks a condition = not a call
let y = mouseY;       // Sets a variable = not a call
```

These ARE function calls, even though they're a bit tricky:

```javascript
noStroke(); // No numbers inside!
fill(random(255)); // Function call inside another function call
text('Hello, ' + name, x, y); // Math/text inside is okay
```

Look at the code below. For each line:

1. Put a ✓ if it's a function call or ✗ if it's not
2. Write why you marked it that way

```javascript
random(100)           // ___ because ____________
function draw() {     // ___ because ____________
fill(255);           // ___ because ____________
if (score > 50) {    // ___ because ____________
circle(x, y, 20);    // ___ because ____________
let width = 400;     // ___ because ____________
```

Now try these tougher ones. Mark each line and explain your thinking:

```javascript
rect(50, random(height)); // Tricky because: ____________
background(); // Tricky because: ____________
text('Score: ' + points, 10, 30); // Tricky because: ____________
```

#### Pro Tips to Remember:

- Just because you see `()` doesn't mean it's a function call
- A function call DOES something when the code runs
- Function calls usually end with `;` (but not always)
- Function calls can contain _another_ function call inside their parentheses.

## Part 2: Your Own Code

### 2.1: Find Your Code (5 minutes)

- Open a p5.js project you've worked on recently.
- Take a screenshot of 5-10 lines, including their line numbers
- Paste the image into your google slide

### 2.2: Annotate (10 minutes)

- Circle 2-3 examples of _function calls_
- Alongside each, use today's vocab to write a _good_ sentence about it, describing any one of these things:
  - What it does
  - How you know it's a function call
  - What would happen if you removed it

## Check Your Understanding

1. Circle all the function calls:

```javascript

let x = 100;

circle(50, 50, 20);

function draw() {

background(220);

if (x > width) {

fill(255, 0, 0);

```

2. Pick any one of those lines you circled and write a sentence explaining how you know it is a function call.

3. Fix each of these:

```javascript
fill(300  0  0);
circle 200, 100, 30
write Text ("Score: " + score, 10, 30)
```

## Distinguished Challenge

Using any code above, write three _different_ _good_ ways to describe the same function call.
