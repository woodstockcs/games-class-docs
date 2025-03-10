---
title: 1.2 Flow
nav_order: 120
parent: Character
layout: default
---

# Flow

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/7A5tKW9HGoM?si=ebwys9AA1o1JN4Aw&amp;clip=Ugkxi9Js9i7qFeppExHn-vVg_bai0e3WIhHJ&amp;clipt=EMijFhjA8Bk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Code

This program creates a simple painting tool by moving the background to setup.

```
function setup() {
  createCanvas(400, 300);
  background(220);
}

function draw() {
  circle(mouseX, mouseY, 10);
}
```

## Check Your Understanding

- Moving background() from draw() to setup() means previously drawn shapes remain visible. (True or False?)
- The circle() function is identical to the ellipse() function. (True or False?)
- In this program, shapes will only be drawn when the mouse is clicked. (True or False?)

## Practice

Basic Modifications

Make the brush (circle) size twice as large.
Change the program so it draws squares instead of circles.

Extension Challenges

Modify the program so the circles only appear when the mouse is in the top half of the canvas.
