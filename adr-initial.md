---
title: ADR Initial Gameplay
nav_order: 1
has_children: true
layout: default
---

# A Dark Room

## Initial Gameplay

Go to [https://adarkroom.doublespeakgames.com/](https://adarkroom.doublespeakgames.com/) and play A Dark Room for 10-20 minutes.

Then answer as many Notice & Wonder questions below as you can.

If you already have a game in progress, consider saving it (so you can get it back later) and starting a new game to think about while you answer these questions.

#### Notice: ####
1. What happens when you first start the game? What can and can't you do?
1. What numbers or quantities does the game keep track of?
1. How does the game's screen change as you play?
1. What actions become available or unavailable based on your resources?

#### Wonder: ####
1. How might the game be keeping track of whether the fire is "roaring" versus "flickering"?
1. How do you think the game decides when to reveal new options or locations?
1. Why do you think some buttons are visible but grayed out, while others are completely hidden?
1. How might the game be tracking time passing differently when you're gathering vs when you're idle?

## Code Reading

Below are code snippets that mimic parts of the game. For each one, read the code and then next to it translate the code to English as best you can. This is all new stuff -- it's okay to guess!

1. Basic fire state:
```javascript
let fireIntensity = "dark";
if (wood >= 1) {
    fireIntensity = "flickering";
    wood = wood - 1;
}
```

2. Check if room is warm enough:
```javascript
let roomTemperature = 0;
if (fireIntensity === "roaring") {
    roomTemperature = roomTemperature + 1;
} else if (fireIntensity === "flickering") {
    roomTemperature = roomTemperature - 1;
}
```

3. Stranger arrives condition:
```javascript
if (fireIntensity === "flickering" && timePassed > 60) {
    showMessage("a stranger appears");
    hasStranger = true;
}
```

4. Resource gathering:
```javascript
let wood = 0;
if (isGatheringWood === true) {
    wood = wood + 1;
    energy = energy - 1;
}
```

5. Builder becomes available:
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
