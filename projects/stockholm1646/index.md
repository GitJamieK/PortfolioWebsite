---
layout: page
title: Stockholm1646
permalink: /projects/stockholm1646/
---

## My contributions to Stockholm1646

<div class="separator"></div>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/V9DM5xWg7RI"
    title="Stockholm1646 Official Teaser Trailer"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"></iframe>
</div>

Stockholm1646 is a cinematic historical RPG we are making at **Ratter Studios**. You play Ingrid, a maid at the inn “Blå Örn” on Järntorget in 1646 Stockholm, where you man the bar, serve drinks and coax secrets out of the guests.

The game is built in Unreal Engine 5.8 with C++ and Blueprints, and I am the Programmer & Tech Lead on the project.

![Stockholm1646 key art](/assets/images/projects/stockholm1646/s1646screenshot1.jpg)

<div class="separator"></div>

### Interaction system

I built the interaction system in C++ as a component on the player. It scans for interactables in front of Ingrid, scores each one on how centered it is in view and how close it is, and checks line of sight so nothing can be used through walls. The best one gets an outline, and pressing interact calls into it through a C++ interface that each object implements in Blueprint. NPCs only get focus while right mouse is held, so talking to someone is always a choice.

[![BP_Player interact input](/assets/images/projects/stockholm1646/s1646blueprint1.jpg)](/assets/images/projects/stockholm1646/s1646blueprint1.jpg)

```cpp
// Aim still uses the direction to the probe's center.
const FVector ToCenter = ProbeCenter - Origin;
const float Dot = ToCenter.IsNearlyZero() ? 1.f : FVector::DotProduct(ViewDir, ToCenter.GetSafeNormal());
if (Dot < ConeCos)
{
	continue; // outside the interaction area
}

// Normalise both factors to 0 - 1, then weight them.
const float LookScore = (Dot - ConeCos) / (1.f - ConeCos);
const float DistScore = 1.f - (Dist / InteractRange);
const float Score = AimWeight * LookScore + ProximityWeight * DistScore;
```

<div class="separator"></div>

### AI-driven NPC dialogue

The goal is NPCs you can actually talk to. You walk up to a guest, open the dialogue and type (or speak) a message. An AI connected to that NPC then writes a reply based on our historical documents, and a small text-to-speech model voices it while the text is written out.

What I have built so far is the dialogue framework that the AI plugs into. You greet an NPC first and can then open a chat panel. Each NPC gets its personality from a data table, and a subsystem remembers who you have met and saves every conversation, so summaries of them can be given back to the NPC as long-term memory. The replies come from a swappable backend class, so the AI model can replace the current placeholder without touching the rest of the system.

[![BP_NPCBase greet and chat](/assets/images/projects/stockholm1646/s1646blueprint2.jpg)](/assets/images/projects/stockholm1646/s1646blueprint2.jpg)

```cpp
// Everything a backend gets when the player says something (UPROPERTY macros left out).
USTRUCT(BlueprintType)
struct FDialogueRequest
{
	GENERATED_BODY()

	FName NPCRowName;
	FDialoguePersona Persona;
	FText PlayerLine;

	// Lines from this conversation only.
	TArray<FDialogueLine> History;

	// Short summaries of past conversations with this NPC.
	TArray<FText> PriorSummaries;

	// Used to spot and ignore a reply that arrives too late.
	FGuid RequestId;
};
```

<div class="separator"></div>

### Other things I worked on

- The player character: movement, crouching and the camera setup.
- Beer pouring at the bar, driven by a timer-based C++ component.
- Cleaning the inn with the broom and its sweeping animation.
- The NPC data table with MetaHuman bodies, faces and grooms.
- Making the inn level playable, the lighting, and packaging the playtest builds.

-Jamie

<div class="separator"></div>

## Here are some Stockholm1646 images!

![Stockholm1646 Ingrid in the inn](/assets/images/projects/stockholm1646/s1646screenshot2.jpg)

![Stockholm1646 inn interior](/assets/images/projects/stockholm1646/s1646screenshot3.jpg)

![Stockholm1646 Ingrid at the tables](/assets/images/projects/stockholm1646/s1646screenshot4.jpg)

<div class="separator"></div>

Check out Stockholm1646 here:
[Stockholm1646 on Ratter Studios](https://ratterstudios.com/sthlm1646/)
