---
title: Side Panel
nav_order: 3
parent: A Dark Room
layout: default
---

# Side Panel

<br><br>

# Purpose

<table>
  <tr>
    <th>Learning:</th>
    <td style="width:100%">how to talk about functions</td>
  </tr>
  <tr>
    <th>Making ADR:</th>
    <td style="width:100%">display text on the Side Panel</td>
  </tr>
</table>
<br><br>

# Sandbox

| Code                            | Output                        |
| :------------------------------ | :---------------------------- |
| `addToPanel("freezing")`        | shows _freezing_ in the panel |
| `addToPanel(3 < 4)`             |                               |
| `addToPanel("3 < 4")`           |                               |
| `addToPanel(10 > 50)`           | shows _false_ in the panel    |
| `addToPanel("10 > 50")`         |                               |
| `addToPanelAfter(5, "burning")` |                               |

{: .note-title}

> Write in your sprint notes...
>
> what goes in the blanks from the table above.

<br><br>

# Walkthrough

1. Browse these slides. (push the arrows to make sure you don't miss any)

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSHhbi4COq4KbhGGg6uNqkj2_QMZ3YKg2Z9dAprlKm3h_INEZMGUCTNFH2qFBPe8jFWK7X-hkfptIM-/embed" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

1. Grab the [walkthrough paper](https://drive.google.com/file/d/1mpaXqkwU3-C0AHbNOb3VR6HaiARYG3Yd/view?usp=sharing) from the classroom.
1. Copy the slides onto your paper.
1. Add your own observations in the `Patterns` boxes on your paper.

{: .note-title}

> Before continuing:
>
> Drop the paper in the INBOX, then check the box in your sprint notes.

<br><br>

# Exercises

<!-- prettier-ignore-start -->
### Freezing
{: .d-inline-block}
Approaching
{: .label .label-green }

1. Duplicate this [Side Panel Distro Code](https://editor.p5js.org/woodstock-cs/sketches/Gy08H5COb).
1. Run the sketch.
1. Update the code according to the comments below.

```javascript
// This code shows "cold"
addToPanel("cold");
//
// Change the argument to "freezing".
//
// And remove the now-incorrect comment above that line of code.
//
// For now we're only working inside the definition of the setup() function.
// 
// Call addToPanel three more times with these arguments:
// "the fire is dying"
// "you gather wood"
// "the room will be warm soon"
```

{: .note-title}

> Before continuing:
>
> Rename the sketch `Freezing` and save it.
>
> Then write that name in your sprint notes.

<br><br>


### Footsteps 
{: .d-inline-block}
Proficient
{: .label .label-blue }

1. Duplicate this [Side Panel Distro Code](https://editor.p5js.org/woodstock-cs/sketches/Gy08H5COb).
1. Run the sketch.
1. Update the code according to the comments below.

```javascript
// Still only working inside the definition of the setup() function.
//
// Someone is walking closer...
// Show these messages 2 seconds apart:
// "footsteps in the distance"
// "getting closer"
// "almost here"
// "at the door"
// "knock"
// "knock"
// "knock"
// "door creaks open"
// "a stranger enters"
```

{: .note-title}

> Before continuing:
>
> Do what the comments ask for.
>
> Rename the sketch `Footsteps` and save it.
>
> Then write that name in your sprint notes.

<br><br>


### Stranger
{: .d-inline-block}
Distinguished
{: .label .label-red }

1. Duplicate this [Side Panel Distro Code](https://editor.p5js.org/woodstock-cs/sketches/Gy08H5COb).
1. Run the sketch.
1. Update the code according to the comments below.

```javascript
// Create this sequence:
// 1. call the addToPanel function with this argument: "a stranger arrives" 
// 2. call the addToPanelAfter function with 2 arguments: 3 and "they carry wood"
// 3. at the same time as the last message, show "light filters in"
// 4. show "darkness falls" 3 seconds after the light filters in
```

{: .note-title}

> Before continuing:
>
> Do what the comments ask for.
>
> Rename the sketch `Stranger` and save it.
>
> Then write that name in your sprint notes.

<br><br>

<!-- prettier-ignore-end -->
