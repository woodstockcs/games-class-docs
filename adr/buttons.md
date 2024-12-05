---
title: Buttons
nav_order: 4
parent: A Dark Room
layout: default
---

# Buttons

<br><br>

# Purpose

<table>
  <tr>
    <th>Learning:</th>
    <td style="width:100%">understand boolean expressions and event handlers</td>
  </tr>
  <tr>
    <th>Making ADR:</th>
    <td style="width:100%">create interactive buttons that respond to game state</td>
  </tr>
</table>
<br><br>

# Sandbox

1. Open the [Buttons Distro Code](https://editor.p5js.org/woodstock-cs/sketches/TEzeoGPC7).
2. Run it and try these experiments.
   - Click each button several times
   - Wait for buttons to re-enable (watch the sweep animation)
   - Let your wood run out
   - Try clicking disabled buttons
   - Change the initial wood value in setup() to 1, then 20
   - Change the refresh time (last number) in addButton()

{: .note-title}

> Write in your sprint notes:
>
> - What makes buttons become disabled?
> - How long does each button take to refresh?
> - When do messages appear in the panel?

<br><br>

# Walkthrough

1. Browse these slides. (push the arrows to make sure you don't miss any)

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQC4sSzXsR8BVW8R8NBQdRqyjMUWYRxr3WIrNxLg_67RpZsA0Y7L0rWDhAhLSEPZ5yQAQszVQFu0U2C/embed" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

1. Grab the [vocab walkthrough paper](https://drive.google.com/file/d/1mpaXqkwU3-C0AHbNOb3VR6HaiARYG3Yd/view?usp=sharing) from the classroom.
1. Copy the terms and definitions on your paper, along with at least one simple example and non-example for each.
1. Add an observation in the `Patterns` boxes at the bottom of your paper.

{: .note-title}

> Before continuing:
>
> Make sure your name is on the paper, drop it in the INBOX, then check the box in your sprint notes.

<br><br>

<!-- prettier-ignore-start -->
# Exercises

### Get Wood
{: .d-inline-block}
Approaching
{: .label .label-green }

1. Duplicate this [Buttons Distro Code](https://editor.p5js.org/woodstock-cs/sketches/TEzeoGPC7).
2. Make these small changes to test your understanding:
   - Change the initial `wood` value in setup to 100
   - Update the "get wood" button to give 2 wood
   - Change the "fire is burning" message to something else
   - Move the "get wood" button down by changing its y-position

{: .note-title}

> Before continuing:
>
> Rename the sketch `Get Wood` and save it.
>
> Then write that name in your sprint notes.

### New Theme
{: .d-inline-block}
Proficient
{: .label .label-blue }

1. Duplicate your `Get Wood` sketch.
2. Pick a theme (space station, kitchen, garden, etc.)
3. Update the code to match your theme:
   - Rename the variables (e.g., 'oxygen' instead of 'wood')
   - Change button labels to fit your theme
   - Update the messages in addToPanel()
   - Change button positions if needed

Example themes:

- Space: oxygen/fuel, "refill tanks"/"check systems"
- Kitchen: ingredients/heat, "add ingredients"/"adjust temperature"
- Garden: water/seeds, "water plants"/"plant seeds"

{: .note-title}

> Before continuing:
>
> Rename the sketch `New Theme` and save it.
>
> Then write that name in your sprint notes.

### New Button
{: .d-inline-block}
Distinguished
{: .label .label-red }

1. Duplicate your `New Theme` sketch.
2. Add one new button that:
   - Has a different refresh time
   - Affects your resources in a new way
   - Shows themed messages
   - Gets disabled under certain conditions
3. Add a new resource variable that fits your theme
4. Update the `draw()` function to check your new conditions

Example features:

- Space: radiation levels affect oxygen consumption
- Kitchen: temperature affects ingredient quality
- Garden: seasons change resource availability

{: .note-title}

> Before continuing:
>
> Rename the sketch `New Button` and save it.
>
> Then write that name in your sprint notes.

### 🌟 5,000 Fake Bonus Points! 🌟

Done early? Try these challenges:

1. **Color Master**

   - Change button colors based on resource levels
   - Add visual feedback when resources are low

2. **Message Quest**

   - Write a story that unfolds through panel messages
   - Make buttons reveal different parts of the story

3. **Survival Mode**
   - Add difficulty levels that change resource consumption
   - Create special "emergency" buttons that appear when resources are critical

{: .note-title}

> Remember:
>
> Make sure you save each exercise with an appropriate name.

<!-- prettier-ignore-end -->
