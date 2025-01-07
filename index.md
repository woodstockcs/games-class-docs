---
title: Home
nav_order: 1
layout: home
---

# elevator
[elevator code](https://github.com/woodstockcs/games-class-docs/blob/main/elevator-saga.js)

# terrain

```javascript
/** This version has random values shown in grayscale. */

let zoomFactor = 100;

function setup() {
  createCanvas(600, 600);
  background(200);
  noLoop();
}

function draw() {
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      set(x, y, color(255 * Math.random()));
    }
  }
  updatePixels();
}
```
