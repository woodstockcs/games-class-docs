---
title: Mouse Variables
nav_order: 2
parent: A Dark Room
layout: default
---

# Mouse Variables

## Purpose

<table>
  <tr>
    <th>Learning:</th>
    <td style="width:100%">use `mouseX` and `mouseY` variables</td>
  </tr>
</table>

## Sandbox

1. Open and duplicate [this sandbox sketch](https://editor.p5js.org/woodstock-cs/sketches/0B_2WK4j8/).
2. Try the updates suggested at in the comments at the top.
3. Why do we need both setup() and draw()?
4. What might happen if we remove background() entirely?
5. How does the computer know where the mouse is?

## Walkthrough

Watch [this video](https://www.youtube.com/watch?v=7A5tKW9HGoM).

And annotate [these images](https://docs.google.com/document/d/1cSMQSWUJLECcQgc9xebWgl_oi982MgJ8RRtBLH9hloM/edit?tab=t.0).

## Exercises

<!-- prettier-ignore-start -->
### 1. Mouse Following
{: .d-inline-block}
Approaching
{: .label .label-green }

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



### 2. Color Change
{: .d-inline-block}
Approaching
{: .label .label-green }

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



### 3. Location Check
{: .d-inline-block}
Proficient
{: .label .label-blue }

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



### 4. Opposite Circle
{: .d-inline-block}
Distinguished
{: .label .label-red }

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

### 5. Magic Marker
{: .d-inline-block}
Distinguished
{: .label .label-red }

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
<!-- prettier-ignore-end -->
