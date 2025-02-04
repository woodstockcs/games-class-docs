---
title: Paddles
nav_order: 3
parent: Pong
layout: default
---

# Paddles

## Purpose

Learn how basic shapes are drawn on a computer screen.

## Warmup

1. On a 100x100 coordinate grid, what are the coordinates of some points near the edge?
2. Fill in the blanks: A rectangle needs __ and __ to describe its size.
3. True or False: On the p5js coordinate grid, the point (0,0) is in the upper-left.

## Problem

Our Pong game needs paddles.

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


## Notes

<iframe width="470" height="402" src="https://edpuzzle.com/embed/assignments/67a2622e35694a91716d114d/watch" frameborder="0" allowfullscreen></iframe>



## Practice

1. Look at the starter code. What's wrong with putting the paddle at (0,0)? Where would be a better position for the left paddle in Pong?

2. Our paddle is 20 pixels wide and 100 pixels tall. Would these be good dimensions for a Pong paddle? Why or why not?

3. Improve the starter code by:
   - Moving the paddle to a better position
   - Adjusting the size if needed
   - Adding a clear comment that explains what each number does

4. CHALLENGE: The right paddle in Pong is a mirror of the left paddle. How would you change the starter code to draw the right paddle instead? (Hint: the game screen is 400 pixels wide)
