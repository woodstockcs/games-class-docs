---
title: Mouse Variables
nav_order: 2
has_children: true
layout: default
---

# Mouse Variables

## Sandbox

1. Open and duplicate [this sandbox sketch](https://editor.p5js.org/woodstock-cs/sketches/0B_2WK4j8/).
2. Try the updates suggested at in the comments at the top.


## Think about
1. Why do we need both setup() and draw()?
2. What might happen if we remove background() entirely?
3. How does the computer know where the mouse is?

## Notes
Watch [this video](https://www.youtube.com/watch?v=7A5tKW9HGoM).

And annotate [these images](https://docs.google.com/document/d/1cSMQSWUJLECcQgc9xebWgl_oi982MgJ8RRtBLH9hloM/edit?tab=t.0).

## Exercises

#### 1. Mouse Following
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Complete this to make circle follow mouse
  circle(???, ???, 30);
}
```

#### 2. State Change
```javascript
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // Make circle RED when mouse is pressed
  // and BLUE when mouse is not pressed
  if (mouseIsPressed) {
    fill(???);
  } else {
    fill(???);
  }
  circle(mouseX, mouseY, 30);
}
```

#### 3. Location Check
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Make circle bigger when on right side of canvas
  if (??? > ???) {
    circle(mouseX, mouseY, 50);
  } else {
    circle(mouseX, mouseY, 20);
  }
}
```


#### 4. Opposite Circle
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // First circle follows mouse
  circle(mouseX, mouseY, 20);
  
  // Can you place a second circle that does the opposite?
  // Hint: Use width and height!
}
```

#### 5. Magic Marker
```javascript
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // Change size based on speed
  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);
  
  circle(???, ???, ???);
}
```

