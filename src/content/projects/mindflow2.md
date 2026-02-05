---
title: "MindFlow 2: CBT Micro-Practice Companion"
description: "A collaborative CBT micro-journey app that helps users name emotions, reframe thoughts, and take small actions with AI-guided prompts."
date: 2026-02-05
role: "Collaborator, Frontend Engineer"
stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Framer Motion"]
coverImage: "/projects/mindflow2/og-image.png"
featured: false
---

MindFlow 2 is a collaborative, mobile-first CBT companion designed to guide users
through a short emotional reset. The flow moves from emotion naming, to cognitive
restructuring with Socratic prompts, to a concrete micro-action that can be completed
in minutes. The interface and prompts are in Simplified Chinese.

## Highlights

- Step-by-step CBT flow with emotion labeling, intensity slider, and body sensations.
- Automatic cognitive distortion detection using keyword heuristics.
- AI-generated Socratic questions and a supportive chat bubble (Supabase Edge Functions).
- Crisis keyword detection that surfaces hotline resources.
- Session history with calendar + emotion trend chart, plus profile and avatar management.
- Shareable completion card summarizing the session.

## Tech notes

- React + Vite with Tailwind UI and Framer Motion transitions.
- Supabase Auth, Storage, and Postgres-backed session history.
- PWA-ready configuration for installable web app behavior.

## Download

<div class="button-row">
  <a class="button primary" href="/projects/mindflow2/mindflow2-source.zip" download>
    Download Source (ZIP)
  </a>
</div>
