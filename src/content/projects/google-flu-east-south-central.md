---
title: "Google Flu Trends Replication: East South Central ILI"
description: "Predicting weekly influenza-like illness in the U.S. East South Central region using Google search query fractions and CDC ILI data."
date: 2026-02-04
role: "Data Scientist"
stack: ["Python", "Pandas", "Jupyter", "Time Series", "Public Health Data"]
featured: false
---

This project replicates the Google Flu Trends approach for the U.S. East South Central
region by linking Google search query fractions with CDC ILI (influenza-like illness)
percentages. The goal is a transparent, reproducible workflow that aligns search data
and clinical surveillance into a single weekly time series for modeling.

## Data sources

- **Google query fractions (XLS)**: Query fractions for the top 100 search terms from the
  Nature 2008/2009 supplemental data.
- **CDC ILI data (CSV)**: Weighted ILI activity levels downloaded from the FluView
  dashboard and merged across seasons for the East South Central region.

References used for methodology and replication:

- [Lecture notes: Google Flu study walkthrough](https://chengjun.github.io/mybook/09-09-googleflustudy.html)
- [Replication notebook: code structure and preprocessing logic](https://github.com/SocratesAcademy/replicate_google_flu_study/blob/main/google_flu_mid_atlantic.ipynb)
- [Original supplemental data: query fractions by U.S. region](https://static-content.springer.com/esm/art%3A10.1038%2Fnature07634/MediaObjects/41586_2009_BFnature07634_MOESM271_ESM.xls)

## Method

1. Read the supplemental XLS and extract the East South Central column from each query
   sheet to build a query matrix aligned on the shared Date column.
2. Download CDC FluView ILI data for East South Central, then merge multiple seasons
   into a single weekly series.
3. Align the dates between the query matrix and ILI series, keeping only overlapping
   weeks.
4. Fit a regression model (with regularization) to predict ILI from query fractions.

## Alignment notes

- The query data is indexed by week-ending dates (Sundays). For example, week 23 in
  2003 corresponds to **2003-06-01**. Keep the CDC data on the same weekly date scale.
- The CDC download is provided by season (week 40 to week 20). Concatenate those
  seasons and keep only rows for East South Central before merging.

## Outputs

- A clean, aligned dataset with weekly query fractions (X) and ILI values (y).
- A reproducible notebook that trains and evaluates the model.

## Downloads

<div class="button-row">
  <a class="button" href="/projects/41586_2009_BFnature07634_MOESM271_ESM.xls" download>
    Download Google Query Data (XLS)
  </a>
  <a class="button" href="/projects/ILINet.csv" download>
    Download CDC ILI (CSV)
  </a>
  <a class="button primary" href="/projects/google_flu_east_south.ipynb" download>
    Download Notebook (IPYNB)
  </a>
</div>
