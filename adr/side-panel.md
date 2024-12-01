---
title: Side Panel
nav_order: 3
parent: A Dark Room
layout: default
---

# ADR Side Panel

## Purpose

<table>
  <tr>
    <th>Learning:</th>
    <td style="width:100%">how to talk about functions</td>
  </tr>
  <tr>
    <th>Creating:</th>
    <td style="width:100%">display text on the ADR Side Panel</td>
  </tr>
</table>

## Sandbox

| Code                            | Output                        |
| :------------------------------ | :---------------------------- |
| `addToPanel("freezing")`        | shows _freezing_ in the panel |
| `addToPanel(3 < 4)`             |                               |
| `addToPanel("3 < 4")`           |                               |
| `addToPanel(10 > 50)`           | shows _false_ in the panel    |
| `addToPanel("10 > 50")`         |                               |
| `addToPanelAfter(5, "burning")` |                               |

## Walkthrough

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSHhbi4COq4KbhGGg6uNqkj2_QMZ3YKg2Z9dAprlKm3h_INEZMGUCTNFH2qFBPe8jFWK7X-hkfptIM-/embed" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Exercises

<!-- prettier-ignore-start -->

### 1. Changing Messages 
{: .d-inline-block}
Approaching
{: .label .label-green }

```javascript
// This code shows "cold":
addToPanel("cold");

// Change the argument to show "freezing" instead

```



### 2. More Messages 
{: .d-inline-block}
Approaching
{: .label .label-green }

```javascript
// Call addToPanel three times to show:
// 1. "the fire is dying"
// 2. "you gather wood"
// 3. "the room is warm"

```



### 3. Stranger Sequence
{: .d-inline-block}
Proficient
{: .label .label-blue }

```javascript
// Create this sequence:
// 1. call the addToPanel function with this argument: "a stranger arrives" 
// 2. call the addToPanelAfter function with 2 arguments: 3 and "they carry wood"
```



### 4. Day and Night
{: .d-inline-block}
Proficient
{: .label .label-blue }

```javascript
// The sun rises, then sets after 5 seconds
// Show these messages:
// 1. "light filters in" immediately
// 2. "darkness falls" after 5 seconds
```



### 5. Footsteps 
{: .d-inline-block}
Distinguished
{: .label .label-red }

```javascript
// Someone is walking closer...
// Show these messages 1 second apart:
// "footsteps in the distance"
// "getting closer"
// "closer still"
// "almost here"
// "at the door"
// "knock"
// "knock"
// "knock"
// "door creaks open"
// "a stranger enters"
```



### 6. Trading Stories
{: .d-inline-block}
Distinguished
{: .label .label-red }

```javascript
// A stranger shares news from their village
// Show these messages:
//
// First immediately:
// 1. "the stranger clears their throat"
// 2. "their village needs help"
//
// Then after 5 seconds:
// 3. "they have no wood"
// 4. "their children are cold"
```
<!-- prettier-ignore-end -->
