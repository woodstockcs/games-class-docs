---
title: Paddles
nav_order: 3
parent: Pong
layout: default
---

# Paddles

## Purpose

Learn how basic shapes are drawn on a computer screen so we can create and control the paddles and ball in our Pong game.

## Warmup

1. On a coordinate grid, what are the coordinates of point A? [Show a simple grid with a point marked "A" at (3,2)]

2. Fill in the blanks: A rectangle needs ** and ** to describe its size.
3. If you move 3 units right and 4 units up from (0,0), where do you end up? Plot it on your mini-whiteboard.

4. True or False: On a coordinate grid, moving up increases the y-coordinate.

## Problem

Our Pong game needs a ball and two paddles, but right now our screen is completely empty! We need to learn how to draw shapes in specific places so we can create these game elements.

## Ideas

Here are some beginning attempts at drawing a paddle from students who are just starting to learn p5.js:

```javascript
// Maria's idea:
paddle(left, tall)

// Jackson's idea:
rectangle = [50 pixels, 200 pixels]
putOnScreen(rectangle)

// Devon's idea:
draw rectangle x=20 y=100 width=10 height=60
```

## Examples

Single shape examples:

```javascript
rect(30, 20, 55, 55);
rect(200, 100, 20, 150);
circle(100, 100, 50);
circle(250, 250, 30);
```

Example of paddle and ball in a different game (Breakout):

```javascript
// Draw the player's paddle at bottom of screen
rect(mouseX, 350, 80, 20);

// Draw the bouncing ball
circle(150, ballY, 15);
```

Example of a basic spaceship game paddle:

```javascript
// Draw player's ship that moves left/right
rect(shipX, 380, 40, 20);
```

STARTER CODE for our Pong paddle (needs improvement):

```javascript
// Draw left paddle
rect(0, 0, 20, 100);
```

## Notes

When we draw shapes in p5.js, we need to tell the computer exactly where to put them and how big to make them. Here's how the numbers work:

For rectangles (like our paddles):

- First number: how far from the left edge (x position)
- Second number: how far from the top edge (y position)
- Third number: how wide to make it
- Fourth number: how tall to make it

For circles (like our ball):

- First number: how far from the left edge (x position)
- Second number: how far from the top edge (y position)
- Third number: how big to make it (diameter)

Key Vocabulary:
**Coordinates**: Numbers that tell us exactly where something is on the screen

- Like a GPS location for your house
- Like seat numbers in a movie theater
- Like the street address of your favorite restaurant

## Practice

1. Look at the starter code. What's wrong with putting the paddle at (0,0)? Where would be a better position for the left paddle in Pong?

2. Our paddle is 20 pixels wide and 100 pixels tall. Would these be good dimensions for a Pong paddle? Why or why not?

3. Improve the starter code by:

   - Moving the paddle to a better position
   - Adjusting the size if needed
   - Adding a clear comment that explains what each number does

4. CHALLENGE: The right paddle in Pong is a mirror of the left paddle. How would you change the starter code to draw the right paddle instead? (Hint: the game screen is 400 pixels wide)
