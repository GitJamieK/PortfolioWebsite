---
layout: page
title: Lightspeed
permalink: /projects/lightspeed/
---

## My contributions on Lightspeed

<div class="separator"></div>

![Lightspeed menu screenshot](/assets/images/home/Lightspeed/Lightspeedheader.jpg)

I implemented a procedural spline-based track generator in Unreal Engine 5 using C++.

The Class “ATrackGenerator” is as a Blueprint in the level and generates a full closed loop track when pressing the GenerateTrack button in the details panel.

This system supports:

- Randomized track shape

- SplineMesh track building

- Start/Finish line position

- Randomized obstacle spawning

 
# generate/Clear buttons 

2 buttons in details panel

![clear/generate buttons in details panel](/assets/images/projects/lightspeed/LightspeedImage-000.jpg)

```
UFUNCTION(CallInEditor, Category="Track Generator") 

void GenerateTrack(); 

  

UFUNCTION(CallInEditor, Category="Track Generator") 

void ClearTrack(); 
```
