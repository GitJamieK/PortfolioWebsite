---
layout: page
title: Thornbound
permalink: /projects/thornbound/
---

## Thornbound

During the development of Thornbound/GP3, I was a programmer and tasked to create a major feature of the game, the interactive system. This enables the player to interact with things such as doors, statue pedestals/pillars and paper notes as well as picking up items such as healing items, ammo items, and of course the statues the player needs to progress through the game. 
 
My first thought was to make a system where the player has to go close to the desired item, then the player should need to look at or towards the item, of course be in a specific range to the item to enable the pickup, then a small indicator/widget shows that the player can pick up this item, then the player should be able to simply press E to interact with the item and pick it up. 

When we started the project, I wasn’t sure how to easily create this and have it work nicely with our game, I watched a YouTube tutorial abut how to achieve this and followed it, this made it, so the player had to look at the item to pick it up if the player did not look at or towards the item, it would not be possible to pick up. This worked with a Multi Sphere Trace by channel node inside a function on the player blueprint. 

![TB Sphere trace](/assets/images/projects/thornbound/Jamie_Kofler_IndividualHighlight_GP3.pdf-image-000.png)






![Thornbound screenshot](/assets/images/projects/thornbound/tbscreenshot1.jpg)