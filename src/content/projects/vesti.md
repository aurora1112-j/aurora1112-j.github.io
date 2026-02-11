---
title: "Vesti"
description: "A local-first browser extension that auto-captures AI conversations into one searchable, private memory timeline."
date: 2026-02-11
role: "Product Designer & Full-Stack Engineer"
stack: ["React", "TypeScript", "Plasmo", "Tailwind CSS", "Dexie.js", "IndexedDB"]
links:
  live: "https://vesti-landing-page0211.vercel.app/"
  repo: "https://github.com/aurora1112-j/vesti"
  caseStudy: "https://modelscope.cn/studios/aurorasein/Vesti/summary"
coverImage: "/projects/vesti/landing-page-preview.png"
gallery:
  - "/projects/vesti/screenshot.jpg"
featured: true
---

<section class="project-landing-navbar">
  <a class="project-landing-brand" href="#top">
    <img src="/projects/vesti/logo.svg" alt="Vesti logo" />
    <span>Vesti</span>
  </a>
  <div class="project-landing-inline-links">
    <a href="https://github.com/aurora1112-j/vesti" target="_blank" rel="noreferrer">GitHub</a>
    <a href="#download">Download</a>
  </div>
</section>

<section class="project-landing-hero" id="top">
  <p class="project-landing-overline">Local-first AI memory</p>
  <h1>Every thought deserves a home.</h1>
  <p class="project-landing-subtitle">
    Vesti auto-captures your chatbot (ChatGPT, Claude, Gemini, and DeepSeek)
    conversations — searchable, quantified, and stored entirely in your browser.
  </p>
  <div class="project-landing-actions">
    <a class="project-landing-btn primary" href="#download">Download</a>
    <a class="project-landing-btn" href="#demo">Watch Demo</a>
    <a class="project-landing-btn" href="https://github.com/aurora1112-j/vesti" target="_blank" rel="noreferrer">Repository</a>
  </div>
</section>

<section class="project-landing-screenshot">
  <div class="project-landing-media-frame">
    <img
      src="/projects/vesti/screenshot.jpg"
      alt="Vesti extension panel and conversation timeline inside Claude"
      loading="eager"
    />
  </div>
</section>

<section class="project-landing-platforms">
  <p>One extension. Four platforms. Zero cloud.</p>
  <div class="project-landing-chip-row">
    <span class="project-landing-chip chatgpt">ChatGPT</span>
    <span class="project-landing-chip claude">Claude</span>
    <span class="project-landing-chip gemini">Gemini</span>
    <span class="project-landing-chip deepseek">DeepSeek</span>
  </div>
</section>

<section class="project-landing-features">
  <article>
    <p class="project-landing-overline">Capture</p>
    <h2>It records so you don’t have to.</h2>
    <p>
      Vesti watches for new messages on your chatbot pages. When a conversation
      finishes, it is saved automatically and silently, with zero manual steps.
    </p>
  </article>

  <article>
    <p class="project-landing-overline">Timeline</p>
    <h2>Every conversation, one scroll away.</h2>
    <p>
      A unified feed sorted by time. Platform labels tell you where each thread
      happened, and one click opens the full conversation detail.
    </p>
  </article>

  <article>
    <p class="project-landing-overline">Search</p>
    <h2>Find anything you have ever asked.</h2>
    <p>
      Full-text search runs across all saved conversations. Filter by platform or
      date range and get instant results because everything stays local.
    </p>
  </article>

  <article>
    <p class="project-landing-overline">Privacy</p>
    <h2>Your data never leaves your machine.</h2>
    <p>
      No server. No account. No cloud sync by default. Vesti stores your data in
      browser IndexedDB, with export and deletion always under your control.
    </p>
  </article>
</section>

<section id="demo" class="project-landing-demo">
  <p class="project-landing-overline">Demo</p>
  <h2>See it in action</h2>
  <div class="project-landing-media-frame video-frame">
    <video
      class="project-landing-video"
      controls
      loop
      muted
      playsinline
      preload="metadata"
      poster="/projects/vesti/screenshot.jpg"
    >
      <source src="/projects/vesti/vesti-demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>

<section id="download" class="project-landing-download">
  <h2>Get Started</h2>
  <p>Install Vesti in under a minute.</p>

  <div class="project-landing-download-grid">
    <article class="project-landing-download-card">
      <p class="project-landing-overline">Recommended</p>
      <h3>Official Landing Page</h3>
      <p>Visit the live Vesti page for the latest release updates.</p>
      <a
        class="project-landing-btn primary"
        href="https://vesti-landing-page0211.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        Open Landing Page
      </a>
    </article>

    <article class="project-landing-download-card">
      <p class="project-landing-overline">Developer</p>
      <h3>Manual Install</h3>
      <p>Download the packaged build and load it from Chrome extensions.</p>
      <a
        class="project-landing-btn project-landing-btn-download"
        href="/projects/vesti/Vesti_MVP.zip"
        download="Vesti_MVP.zip"
      >
        Download .zip
      </a>
      <ol class="project-landing-steps">
        <li>Download and unzip the package.</li>
        <li>Open <code>chrome://extensions</code> in your browser.</li>
        <li>Enable Developer mode.</li>
        <li>Click Load unpacked and select the unzipped folder.</li>
      </ol>
    </article>
  </div>

  <p class="project-landing-compatibility">
    Compatible with Chrome, Edge, Arc, Brave, and Chromium-based browsers.
  </p>
</section>

<section class="project-landing-footer-note">
  <a href="https://github.com/aurora1112-j/vesti" target="_blank" rel="noreferrer">View on GitHub</a>
  <span>·</span>
  <a href="https://modelscope.cn/studios/aurorasein/Vesti/summary" target="_blank" rel="noreferrer">ModelScope Mirror</a>
  <span>·</span>
  <span>Built for those who think with AI.</span>
</section>
