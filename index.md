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

# experiments

- [ocr from video](./experiments/ocr-test.html)
- [video-code sync](./experiments/test.html)
- [p5 widget](./experiments/widget.html)

# puzzles
- https://logsandroots.wordpress.com/2025/01/13/differences/?utm_source=substack&utm_medium=email
