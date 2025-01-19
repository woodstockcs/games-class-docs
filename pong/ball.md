---
title: Ball
nav_order: 2
parent: Pong
layout: default
---

# Ball

## Purpose

Learn how to tell the computer where to put dots on the screen. Just like finding places on a map, we'll use a coordinate system to place points exactly where we want them in our game.

## Warmup

1. When you play Battleship, how do you tell your opponent where you're attacking? What two pieces of information do you need?
2. In Minecraft, what do the three numbers mean that appear when you press F3? Which two will we care about for 2D games?
3. [Draw coordinate plane] If you go right 3 and up 2 from the origin, what point do you reach?
4. When you're looking at a seating chart, how do you know which seat is yours? What information do you need?
5. In Chess, how do you tell someone which square you're moving to? What system does Chess use?
6. On your graph paper, plot these points from different contexts:
   - A battleship attack at B4
   - A chess knight at (2,3)
   - A Minecraft player at X:50 Y:30
7. What's similar about all these coordinate systems?
8. What's different about them?
9. In your notebook, create a coordinate system for:
   - A phone's number pad
   - A vending machine's selection grid
10. If you were writing code to press "5" on a phone, what coordinates would you use?
11. If you wanted item B3 from a vending machine, what coordinates would that be?
12. In the grid below, what are the coordinates of point A? [Teacher note: Draw a 5x5 grid with point A at (2,3)]
13. If you're giving directions to a friend in Minecraft, what two pieces of information do they need to find your exact location?
14. Complete the pattern: (0,0), (10,0), (20,0), **\_**, **\_**
15. If our game screen is 100 pixels wide, what would be the coordinate of a dot exactly in the middle?

## Problem

Our pong ball is lost in space! We need to learn how to tell the computer exactly where to place points on the screen, or our ball will never find its way home.

## Ideas

Here are some beginning attempts at drawing a paddle from students who are just starting to learn p5.js:

Maria says: "Maybe we can write something like: ball.right(50) ball.up(30)"
James suggests: "What if we do: putBall(right edge)"
Alex thinks: "Let's try: moveBall(over=middle, down=bottom)"

## Examples

```javascript
// Single points at different locations
dot(50, 50);
dot(0, 0);
dot(100, 100);
dot(25, 75);
```

Here's how dots are used in a simple star field:

```javascript
// Draw some stars
dot(20, 15); // top left star
dot(80, 25); // top right star
dot(50, 90); // bottom star
```

Here's how dots are used in a connect-the-dots game:

```javascript
// Draw dots to connect
dot(10, 10); // first dot
dot(30, 30); // second dot
dot(50, 10); // third dot
```

Starter code for our Pong ball:

```javascript
// Draw ball in corner
dot(100, 100);
```

## Notes

The p5.js coordinate grid works like a giant piece of graph paper. The top-left corner is (0,0).

- Moving right increases the first number (x-coordinate)
- Moving down increases the second number (y-coordinate)
- Both numbers together make up a coordinate pair: (x,y)

When we place a dot, we always need exactly two numbers to tell p5 WHERE to draw it.

1. A side-by-side comparison showing:

   - A blank Battleship grid (letters/numbers)
   - A math coordinate plane (positive quadrant only)
   - A p5.js 100x100 grid
     This could spark great discussions about why (0,0) is in different places and why some use letters while others use numbers.

2. Screenshots from popular games showing coordinate displays:

   - Minecraft's F3 debug screen with coordinates
   - Terraria's depth meter showing position
   - Chess notation on a digital chess board
     Students could analyze why games need coordinates and how they display them differently.

3. A "spot the difference" image between:

   - A traditional math grid (y increases going up)
   - A computer screen grid (y increases going down)
     This often generates great "wait, why?" moments when students notice the flip.

4. Real-world grid systems like:
   - Stadium seating charts
   - Shopping mall directory maps
   - Excel spreadsheet headers
     These could lead to discussions about why we sometimes use letter-number combinations instead of number-number.

Vocabulary:
**Coordinate pair**: Two numbers that tell us exactly where a point is on the grid

- Like an address for a point on the screen
- Like GPS coordinates that tell you where something is on Earth
- Like the row and column of a seat in a movie theater

## Practice

1. What are the coordinates of the center of a 100x100 screen? Draw a dot there.
2. Draw dots in each corner of the screen.
3. Draw a vertical line of 5 dots, each 10 pixels apart, starting at (50,10).
4. Improve the starter code:
   - Move the ball to the center of the screen
   - Add a second dot 10 pixels below it
5. "Fix the Bug" - Single solution

```javascript
// Why isn't this dot appearing on screen?
dot(-10, 50);
```

2. "Perfect Center" - Single solution

```javascript
// Move this dot to the exact center of the canvas
dot(20, 75);
```

3. "Mirror Match" - Single solution

```javascript
// Add a second dot that's the mirror image of this one
dot(25, 40);
```

4. "The Line Up" - Multiple valid solutions

```javascript
// Add three more dots to create a line.
// Is diagonal, vertical, or horizontal better? Why?
dot(20, 20);
```

5. "Distance Game" - Multiple valid solutions

```javascript
// Add two dots that are exactly 50 pixels apart.
// What's the most elegant way to make this clear?
```

6. "Grid Corners" - Multiple valid solutions

```javascript
// These dots mark two corners. Add two more dots
// to complete the rectangle. Which corners should
// you choose and why?
dot(20, 20);
dot(80, 60);
```

7. "Pattern Start" - Open-ended

```javascript
// Add three dots to start a clear pattern.
// What makes a pattern "clear" to other coders?
dot(10, 10);
```

8. "Symmetry Challenge" - Multiple approaches

```javascript
// Add dots to create perfect symmetry.
// What type of symmetry is best? Why?
dot(50, 25);
```

9. "Readable Coordinates" - Style discussion

```javascript
// Which is better and why? Edit to make it even better.
dot(0, 0);
dot(100, 100);
// or
dot(1, 1);
dot(99, 99);
```

10. "Grid Boundaries" - Edge case discussion

```javascript
// Some of these dots are risky - which ones and why?
dot(0, 50);
dot(100, 50);
dot(99, 50);
dot(1, 50);
```

1. "Emoji Eyes" - Style discussion

```javascript
// Move the eyes to make this emoji look different!
// Current emotion: surprised
// Make it: sleepy, suspicious, or crossed-eyed
dot(40, 40); // left eye
dot(60, 40); // right eye
```

2. "Connect the Stars" - Multiple solutions

```javascript
// Add three more stars to create your own constellation.
// Bonus: What real constellation could this become?
dot(50, 20); // first star
```

3. "Cookie Sheet" - Precision exercise

```javascript
// Place 6 evenly-spaced dots like chocolate chips
// on the cookie sheet. No messy cookies allowed!
```

4. "Dance Moves" - Multiple solutions

```javascript
// These dots are dancers on a stage (100x100).
// Add another dancer to balance the choreography.
dot(20, 80); // dancer 1
dot(80, 80); // dancer 2
```

5. "Multiplayer Spawn Points" - Strategy discussion

```javascript
// Place 4 player spawn points in fair starting positions.
// What makes spawn points "fair" in a game?
```

6. "Alien Message" - Pattern recognition

```javascript
// Some aliens sent us these coordinates. Complete
// the pattern to decode their message!
dot(10, 10);
dot(20, 20);
dot(30, 30);
```

7. "Whack-a-Mole" - Game design discussion

```javascript
// Place 5 mole holes on this whack-a-mole game.
// Think about player experience - what makes
// a fun but fair layout?
```

8. "Raindrop Animation" - Time concept intro

```javascript
// These are frames of a raindrop falling.
// Add the next two positions - how far should
// each drop fall?
dot(50, 10); // frame 1
dot(50, 25); // frame 2
```

9. "Basketball Shots" - Trajectory concept

```javascript
// Plot 5 points showing the arc of a perfect
// basketball shot from (10,90) to (90,90)
dot(10, 90); // player
dot(90, 90); // hoop
```

10. "Secret Code" - Coordinate encryption

```javascript
// These dots spell a letter.
// Add more dots to spell the next letter!
// Hint: stick to a 5x7 dot grid
dot(20, 20);
dot(20, 30);
dot(20, 40);
```
