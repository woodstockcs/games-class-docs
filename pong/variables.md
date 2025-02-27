---
title: 3.1 Variables
nav_order: 310
parent: Pong
layout: default
---

# Variables

## Purpose

Learn how to make computers remember numbers.

## Learning Objectives

By the end of this activity, you should be able to:

- Explain what a variable is and why it is useful in programming
- Create and use variables to store numeric values
- Use the built-in variables mouseX and mouseY to create interactive elements
- Predict how changing variable values affects the visual output

## Model 1

```javascript
let circleX = 100;
let circleY = 150;

let squareX = 300;
let squareY = 200;

let shapeSize = 50;
let shapeColor = 100;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);

  //
  fill(255, 0, 0);
  circle(circleX, circleY, shapeSize);

  //
  fill(shapeColor);
  square(squareX, squareY, shapeSize);

  //
  fill(0, 0, 255);
  rect(150, 100, shapeSize, shapeSize + 50);

  //
  fill(shapeColor);
  circle(350, 50, shapeSize);

  //
  stroke(shapeColor);
  line(150, 250, 250, 250);
}
```

### Part 1: (PAPER) Exploration

1. How many variables are defined at the top of the code?
2. What values are stored in the variables `circleX` and `circleY`?
3. What does the variable `shapeSize` represent?
4. Find where `circleX` and `circleY` are used in the code. What function uses these variables?
5. What do you think would happen if we changed `circleX` from 100 to 200?
6. How many times is the `shapeColor` variable used in the code?
7. Which functions use the `shapeColor` variable?
8. What would happen if we changed the value of `shapeColor` from 100 to 255?

### Part 2: (PAPER) Concept Invention

9. Why do you think the programmer created variables instead of just using numbers?
10. Why do you think the variable for the circle's x-position is named `circleX` rather than just `x`?
11. What is the advantage of using the `shapeColor` variable instead of repeating the number 100 three times in the code?
12. If you wanted to change the color of all three shapes that use `shapeColor`, how many lines of code would you need to change?

### Part 3: (ON YOUR COMPUTER) Practice

13. [Click here](https://editor.p5js.org/woodstock-cs/sketches/I23f3iMrZ) to open the code.
14. Make your own copy of the code (File > Duplicate).
15. Do at least one of these exercises:
    - EASY: Change the red circle to green
    - MEDIUM: Create a new variable called `outlineThickness` and use it to set the `strokeWeight` for all shapes
    - HARD: Add a new rectangle that uses `circleX` and `circleY` for its position, but has a width and height that are half of `squareSize`

## Model 2

```javascript
let size = 30;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);

  //
  fill(0);
  textSize(20);
  text(mouseX, 30, 30);
  text(mouseY, 30, 60);

  //
  fill(255, 0, 0);
  circle(mouseX, mouseY, size);

  //
  fill(0, 0, 255);
  rect(300, 200, size, size);
}
```

### Exploration

1. Which variables in this code were not explicitly defined at the top?
2. Where are `mouseX` and `mouseY` used in the code?
3. [Click here](https://editor.p5js.org/woodstock-cs/sketches/FbzO9PaXu) to open the code and run it:
   - What happens when you move your mouse around the canvas?
   - What information is displayed at the top of the canvas?
   - How does the red circle behave compared to the blue square?

### Concept Invention

4. What do the variables `mouseX` and `mouseY` represent?
5. How are `mouseX` and `mouseY` different from the variables we created in Model 1?
6. Why do you think these variables are useful in p5.js?

### Practice

7. Predict what would happen if you made these changes:
   - Change the circle's y-coordinate to be `mouseY` but keep its x-coordinate fixed at 200
   - Use `mouseY` for the width of the rectangle instead of 80
   - Change the circle's diameter to be based on `mouseX` (hint: use `mouseX/4` to keep a reasonable size)
8. [Click here](https://editor.p5js.org/woodstock-cs/sketches/FbzO9PaXu) to open the code.
9. Make your own copy of the code (File > Duplicate), and update the code to test each prediction you just made.
10. For each prediction, write what actually happened.
