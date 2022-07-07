# Architecture

- [Architecture](#architecture)
  - [1. Introduction and Goals](#1-introduction-and-goals)
    - [1.1. Requirements Overview](#11-requirements-overview)
    - [1.2. Quality Goals](#12-quality-goals)
    - [1.3. Stakeholders](#13-stakeholders)
  - [2. Architecture Constraints](#2-architecture-constraints)
  - [3. Solution Strategy](#3-solution-strategy)
  - [4. Architecture Decisions](#4-architecture-decisions)
    - [4.1. ADR 1: CSS Vars for Theming](#41-adr-1-css-vars-for-theming)
      - [4.1.1. Context](#411-context)
      - [4.1.2. Decision](#412-decision)
      - [4.1.3. Status](#413-status)
      - [4.1.4. Consequences](#414-consequences)
    - [4.2. ADR 2: Astro for building static HTML pages](#42-adr-2-astro-for-building-static-html-pages)
      - [4.2.1. Context](#421-context)
      - [4.2.2. Decision](#422-decision)
      - [4.2.3. Status](#423-status)
  - [5. Risks and Technical Debts](#5-risks-and-technical-debts)

## 1. Introduction and Goals

Delivering my resume build with web technologies, giving me an opportunity to learn and showcase skills.

### 1.1. Requirements Overview

| ID  | Title                      | Details                                                                                                                                                                                                                                                                                                                                                        |
| --- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R1  | Display Resume Information | <div><div>**Recruiters and potential employers must** be able to **see** the **usual information** found on a resume:</div><ul><li>Picture</li><li>Short description (about me)</li><li>Contact information</li><li>Skills</li><li>Certificates</li><li>Job history</li><li>Education history</li><li>Private Projects</li><li>Other interests</li></ul></div> |
| R2  | PDF Export                 | **Recruiters and potential employers must** be able to **export** the core information of the resume as a **PDF** with one click on a Button.                                                                                                                                                                                                                  |

### 1.2. Quality Goals

This project should give a learning and showcase opportunity for skills needed for web development.

| ID  | Title                               | Type            | Details                                                                                                                   |
| --- | ----------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Q1  | Styling can be changed quickly      | Maintainability | **Changing the styling** (font, colors, borders, shadows) of the resume **must** take **less than 1 man-day**.            |
| Q2  | Quick visual feedback during update | Maintainability | **Updating the content** of the resume, the updated styled resume **must be visible** locally in **less than 5 seconds**. |

### 1.3. Stakeholders

[Tobias Belch](https://www.linkedin.com/in/tobias-belch) (Owner and Developer)

## 2. Architecture Constraints

| ID  | Title               | Details                                                                                                                                       |
| --- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| C1  | No Development Cost | **Development** of the resume application (ignoring the completed content) **must** take **less than 3 man-days** and **must cost no money**. |
| C2  | No Operational Cost | **Deploying** and **hosting** the resume **must cost no money**.                                                                              |

## 3. Solution Strategy

| Quality Goal / Constraint                | Solution                                                                                                                                               |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Q1 - Styling can be changed quickly      | Using a theming system where general styling information (font, colors, borders, shadows, ...) are extracted from the code and can be changed quickly. |
| Q2 - Quick visual feedback during update | Using a development environment with a live preview feature, that reacts to changes in the code or theme.                                              |
| C1 - No Development Cost                 | Using a well known OpenSource tech stack (JavaScript & React)                                                                                          |
| C2 - No Operational Cost                 | Build static html pages as the main software artifact and host them with a free service                                                                |

## 4. Architecture Decisions

### 4.1. ADR 1: CSS Vars for Theming

#### 4.1.1. Context

- [R1 - Display Resume Information](#11-requirements-overview)
- [Q1 - Styling can be changed quickly](#12-quality-goals)
- [C1 - No Development Costs](#2-architecture-constraints)
- [Learning Opportunity](#12-quality-goals)

#### 4.1.2. Decision

I will be using vanilla [CSS Variables](https://www.w3schools.com/css/css3_variables.asp) they enable a very simple solution to [Themes](#3-solution-strategy), are part of the Browser API (no extra Frameworks needed) and give me a good opportunity practising web fundamentals.

#### 4.1.3. Status

_accepted_

#### 4.1.4. Consequences

Older Browsers, like the Internet Explorer [are not supported](https://caniuse.com/css-variables). I expect the vast majority of people to use modern Browsers and am willing to live with the risk.

To make the resume still usable for those users, there will be a base styling applied without CSS Vars first. That will result in a usable, but decreased experience.

### 4.2. ADR 2: Astro for building static HTML pages

#### 4.2.1. Context

- [R1 - Display Resume Information](#11-requirements-overview)
- [Q2 - Quick visual feedback during update](#12-quality-goals)
- [C1 - No Development Costs](#2-architecture-constraints)
- [C2 - No Operational Costs](#2-architecture-constraints)
- [Learning Opportunity](#12-quality-goals)

#### 4.2.2. Decision

I will be using [Astro](https://astro.build/) to build static HTML pages, based on [React.js](https://reactjs.org/). It offers a [static build](https://docs.astro.build/en/reference/cli-reference/#astro-build) and a [automatic live reloading](https://docs.astro.build/en/install/auto/#2-start-astro-) for quick feedback during development.

[Next.js](https://nextjs.org/) would have been the more mature and versatile option. But because a resume is quite static, Next.js' features that [enable more dynamic web applications](https://docs.astro.build/en/comparing-astro-vs-other-tools/#nextjs-vs-astro) aren't needed.

This decision leans into the [quality goal, to learn new skills](#12-quality-goals).

#### 4.2.3. Status

_accepted_

## 5. Risks and Technical Debts

1. Users with older Browsers, like the Internet Explorer, will have a decreased user experience ([ADR 1: CSS Vars for Theming](#414-consequences))
