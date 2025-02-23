---
title: 1.1 Ball
nav_order: 110
parent: Pong
layout: exercises
---

# Ball

## Purpose

Learn to draw circles with different locations and sizes.

## Learning Objectives

By the end of this activity, you should be able to:

- Explain how coordinate systems work in p5.js
- Place points accurately on a digital canvas
- Predict the location of points given their coordinates
- Create simple patterns using coordinates

## Warmup

1. When you play Battleship, how do you tell your opponent where you're attacking? What two pieces of information do you need?
1. If you're giving directions to a friend in Minecraft, what two pieces of information do they need to find your exact location?
1. Complete the pattern: (0,0), (10,0), (20,0), **\_**, **\_**
1. If our game screen is 100 pixels wide, what would be the coordinate of a dot exactly in the middle?

## Problem

We need to learn how to tell the computer exactly where to place shapes on the screen.

## Ideas

Here are some beginning attempts at drawing a ball from students who are just starting to learn p5.js:

1. Maria says: "Maybe we can write something like: ball.right(50) ball.up(30)"
1. James suggests: "What if we do: putBall(right edge)"
1. Alex thinks: "Let's try: moveBall(over=middle, down=bottom)"

## Exploration

[paper](https://docs.google.com/document/d/1uC1XxmXw_N-SKf-kDHgNfXO2dvSkz0P6gOva7HLYfrk/edit?tab=t.0)

## Examples

[code](../ball-code.html)

## Notes

[slides](https://docs.google.com/presentation/d/1JG8f2rE-iB_o8YhYO2yhaa_qIzYbrRf4bP1SrnsyFcE/edit#slide=id.p)

The p5.js coordinate grid works like a giant piece of graph paper. The top-left corner is (0,0).

- Moving right increases the first number (x-coordinate)
- Moving down increases the second number (y-coordinate)
- Both numbers together make up a coordinate pair: (x,y)

When we place a dot, we always need exactly two numbers to tell p5 WHERE to draw it.

## Vocab

**Coordinate pair**: Two numbers that tell us exactly where a point is on the grid

- Like an address for a point on the screen
- Like GPS coordinates that tell you where something is on Earth
- Like the row and column of a seat in a movie theater

## Practice

1. Fix the Bug

```javascript
// Move this dot so it appears on the screen
dot(-10, 50);
```

2. Perfect Center

```javascript
// Move this dot to the exact center of the canvas
dot(20, 75);
```

3. Distance Game

```javascript
// Add two dots that are exactly 50 pixels apart.
```

4. Rectangle

```javascript
// These dots mark two corners. Add two more dots
// to make four corners of a rectangle.
dot(20, 20);
dot(80, 60);
```

5. Pattern Start

```javascript
// Add at least 3 dots to start a clear pattern.
// What makes a pattern "clear" to other coders?
dot(10, 10);
```

6. Cookie Sheet

```javascript
// Place 6 evenly-spaced dots like chocolate chips
// on the cookie sheet. No messy cookies allowed!
```

7. Raindrop Animation

```javascript
// These are frames of a raindrop falling.
// Add the next two positions - how far should
// each drop fall?
dot(50, 10); // frame 1
dot(50, 25); // frame 2
```

8. Basketball Shots

```javascript
// Plot a bunch of dots showing the arc of a perfect
// basketball shot from (10,90) to (90,90)
dot(10, 90); // player
dot(90, 90); // hoop
```

9. Secret Letter

```javascript
// These dots spell a letter.
// Add more dots to spell the next letter
dot(20, 20);
dot(20, 30);
dot(20, 40);
```

## Essential Knowledge

## Check Your Understanding
