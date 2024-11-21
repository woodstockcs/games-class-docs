---
title: Mouse Variables
nav_order: 2
has_children: true
layout: default
---

# Mouse Variables

## Sandbox

Open and duplicate [this sandbox sketch](https://editor.p5js.org/woodstock-cs/sketches/0B_2WK4j8/).




## Notes
[1. What happens when you first start the game? What can and can't you do?
1. What numbers or quantities does the game keep track of?
1. How does the game's screen change as you play?
1. What actions become available or unavailable based on your resources?](https://www.youtube.com/watch?v=7A5tKW9HGoM)

## Practice

```javascript
if (hasStranger === true && wood >= 5) {
    showBuilderOption = true;
    woodNeeded = 5;
}
```

6. Check if trap can be built:
```javascript
if (wood >= 10 && builderUnlocked === true) {
    canBuildTrap = true;
} else {
    canBuildTrap = false;
}
```

7. Time passing in the room:
```javascript
if (fireIntensity === "flickering") {
    timePassed = timePassed + 1;
    if (timePassed > 100) {
        fireIntensity = "dark";
    }
}
```

8. Visual state of fire:
```javascript
let fireEmoji = "🔥";
if (fireIntensity === "roaring") {
    fireEmoji = "🔥🔥🔥";
} else if (fireIntensity === "flickering") {
    fireEmoji = "🔥";
} else {
    fireEmoji = "❄️";
}
```

9. Basic inventory check:
```javascript
if (wood < 0) {
    wood = 0;
}
if (food < 0) {
    food = 0;
}
```

10. Stoke fire button:
```javascript
let canStokeFire = false;
if (wood >= 1 && fireIntensity !== "roaring") {
    canStokeFire = true;
}
```

11. Energy system:
```javascript
let energy = 100;
if (isGatheringWood === true && energy > 0) {
    energy = energy - 10;
} else {
    isGatheringWood = false;
}
```

12. Room description:
```javascript
let roomStatus = "";
if (fireIntensity === "dark") {
    roomStatus = "the room is dark";
} else if (fireIntensity === "flickering") {
    roomStatus = "the room is warm";
} else if (fireIntensity === "roaring") {
    roomStatus = "the room is hot";
}
```
