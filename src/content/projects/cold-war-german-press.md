---
title: "Cold War Press Corpus: German Newspaper Scraper"
description: "A notebook pipeline that collects German newspaper pages and stores them in MongoDB for Cold War media research."
date: 2025-10-21
role: "Researcher, Data Engineer"
stack: ["Python", "Jupyter", "Pandas", "MongoDB", "Web Scraping"]
coverImage: "/images/security-layer.png"
featured: false
---

This project supports my Cold War research by building a reproducible data-collection
pipeline for German newspapers. The notebook queries the DDB newspaper API in daily
slices, saves page-level records into MongoDB, and skips duplicates for stability.
Date ranges, query terms, and collection names are configurable.

## What it does

- Pulls newspaper pages by time window (daily batches).
- Normalizes records into MongoDB for downstream analysis.
- Supports optional proxy settings for more reliable requests.

## Download

- [German newspaper scraping notebook (.ipynb)](/projects/cold-war/german-newspaper-scraper.ipynb)
