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
    - [4.3. ADR 3: Extending JSON Resume Schema](#43-adr-3-extending-json-resume-schema)
      - [4.3.1. Context](#431-context)
      - [4.3.2. Decision](#432-decision)
        - [JSON Resume Changes](#json-resume-changes)
      - [4.3.3. Status](#433-status)
      - [4.3.4. Consequences](#434-consequences)
  - [5. Risks and Technical Debts](#5-risks-and-technical-debts)
  - [6. Domain Language](#6-domain-language)
    - [6.1. Contexts](#61-contexts)
    - [6.2. Glossary](#62-glossary)
      - [6.2.1. UI - Components](#621-ui---components)
      - [6.2.2. UI - Colors](#622-ui---colors)
      - [6.2.3. Resume](#623-resume)
        - [Basics](#basics)
        - [Skills](#skills)
        - [Languages](#languages)
        - [Work](#work)
        - [Certificates](#certificates)
        - [Education](#education)

## 1. Introduction and Goals

Delivering my resume build with web technologies, giving me an opportunity to learn and showcase skills and thought/work processes.

### 1.1. Requirements Overview

| ID  | Title                                        | Details                                                                                                                                                                                                                                                                                                                                                        |
| --- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R1  | Display Resume Information                   | <div><div>**Recruiters and potential employers must** be able to **see** the **usual information** found on a resume:</div><ul><li>Picture</li><li>Short description (about me)</li><li>Contact information</li><li>Skills</li><li>Certificates</li><li>Job history</li><li>Education history</li><li>Private Projects</li><li>Other interests</li></ul></div> |
| R2  | Print Resume                                 | **Recruiters and potential employers must** be able to **print** the resume                                                                                                                                                                                                                                                                                    |
| R3  | Allow multiple intro texts                   | **Resume writers must** be able to add **multiple summaries**, to set up different sections, instead of just one intro text                                                                                                                                                                                                                                    |
| R4  | Enable project lists within the work entries | **Resume writers can** connect their projects with their work entries, because **recruiters and potential employers** want to know more about the projects worked on for the different companies.                                                                                                                                                              |
| R5  | Enable skills lists within work entries      | **Resume writers can** add skills to their work entries, because **recruiters and potential employers** want to see which skills where used at which job.                                                                                                                                                                                                      |

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
| C1 - No Development Cost                 | Using a well known OpenSource tech stack around JavaScript                                                                                             |
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

### 4.3. ADR 3: Extending JSON Resume Schema

#### 4.3.1. Context

- [R1 - Display Resume Information](#11-requirements-overview)
- [R3 - Display Resume Information](#11-requirements-overview)
- [R4 - Display Resume Information](#11-requirements-overview)
- [R5 - Display Resume Information](#11-requirements-overview)
- [C1 - No Development Costs](#2-architecture-constraints)

#### 4.3.2. Decision

[JSON Resume](https://jsonresume.org/) is a somewhat known [JSON Schema](https://jsonresume.org/schema/) and a collection of tools to [build resumes quickly](https://jsonresume.org/getting-started/). It covers almost every datum we need for this resume. It helps that there is a plugin that let's you [export your linkedin profile](https://chrome.google.com/webstore/detail/json-resume-exporter/caobgmmcpklomkcckaenhjlokpmfbdec) into JSON Resume. This speeds up the gathering of data and the decision making process of how to structure our resume data.

While we'll make heavy use of JSON Resume and focus on staying true to their schema, we'll need a few extensions to fulfill every functional requirement (R3, R4, R5).

##### JSON Resume Changes

| Attribute                                                                 | In JSON Resume               | Description                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `summary = string \| [{ title: string, content: string }]`                | `summary = string `          | Enables summary sections                                                                                                                                                                                                                                                                            |
| `work[].projects = [string]`                                              |                              | Enables projects being listed for work entries.                                                                                                                                                                                                                                                     |
| `work[].skills = [string]`                                                |                              | Enables skills being listed for work entries.                                                                                                                                                                                                                                                       |
| `skills[].level = "beginner" \| "intermediate" \| "advanced" \| "expert"` | `skills[].level = string`    | Manifests the level of the particular skill                                                                                                                                                                                                                                                         |
| `langues[].fluency = "A" \| "B" \| "C" \| "native"`                       | `langues[].fluency = string` | Alines the level with other skills, while `A = beginner` , `B = intermediate` , `C = advanced` and `native = expert` . Based on [Common European Framework of Reference for Languages](https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels). |
| `education[].summary = string`                                            |                              | Enables describing that education experience.                                                                                                                                                                                                                                                       |

#### 4.3.3. Status

_accepted_

#### 4.3.4. Consequences

If JSON Resume ever changes its schema, we might want to adapt to those changes. This could create development cost down the road. But ultimately, the compatbility with JSON Resume schema is just an offer to make it easier to integrate content. This resume is not bound to JSON Resume for any other reason than convenience.

## 5. Risks and Technical Debts

1. Users with older Browsers, like the Internet Explorer, will have a decreased user experience ([ADR 1: CSS Vars for Theming](#414-consequences))
2. I might have to invest more development time down the road, in case the JSON Resume schema is changed. ([ADR3: Extending JSON Resume Schema](#434-consequences))

## 6. Domain Language

### 6.1. Contexts

![Domain Language Contexts: UI (Components & Colors), Resume](./images/domain_language_contexts.excalidraw.svg "Domain Language Contexts")

### 6.2. Glossary

#### 6.2.1. UI - Components

| Term              | Description                                                                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Link              | Navigates to another location on click                                                                                                                                          |
| Button            | Can react to the user clicking on it                                                                                                                                            |
| Resume            | Sets the layout for the resume and integrates the other components                                                                                                              |
| Header            | Displays the `Image`, `Label`, `Name`, `Url` and `Profiles` of the resume                                                                                                       |
| Section           | Displays a section of the resume. Consist of a Header and Content.                                                                                                              |
| Summary           | Is a `Section` that displays a `Summary` entry. The Header contains the `Title`. The Contant contains the `Content`.                                                            |
| Skills            | Is a `Section` that displays all `Skills`. The Content contains a `Word Cloud` with all `Skills`.                                                                               |
| Work Entry        | Displays a `Work` entry. Contains a Header with `Position`, `Name`, `Location`, `StartDate` and `EndDate`. The Content contains `Highlights`, related `Prtojects` and `Skills`. |
| Certificate Entry | Displays a `Certificate` entry. Contains a Header with `Name`, `StartDate`, `EndDate` and `Issuer`. The Content contains an optional Button to open the `Url`.                  |
| Education Entry   | Displays an `Education` entry. Contains a Header with `StudyType`, `Area`, `Institution`, `StartDate`, `EndDate`, `Score` and `Summary`.                                        |

#### 6.2.2. UI - Colors

| Term               | Description                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| Background         | The `Resume` components background color                                                                  |
| Foreground         | The main foreground color, having a strong contrast to the `Background` color.                            |
| Foreground Light   | A lighter foreground color which should have a lower contrast to the `Background` color than `Foreground` |
| Highlight          | A color that should pop compared to the `Background` color.                                               |
| Highlight Contrast | A color that has a strong contrast to `Highlight` color.                                                  |
| Link               | A foreground color to distiguish regular text from a `Link` component.                                    |

#### 6.2.3. Resume

**Based on [JSON Resume](https://jsonresume.org/) - see [ADR 3: Extending JSON Resume Schema](#43-adr-3-extending-json-resume-schema) for more information.**

##### Basics

| Term     | Description                                                                                                                                                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Resume   | A résumé, sometimes spelled resume, called a CV in English outside North America, is a document created and used by a person to present their background, skills, and accomplishments. _([Wikipedia](https://en.wikipedia.org/wiki/R%C3%A9sum%C3%A9))_ |
| Owner    | The person the `Resume` represents                                                                                                                                                                                                                     |
| Name     | Full name of the `Owner`                                                                                                                                                                                                                               |
| Label    | Something like a title, job position or super short summary for the `Resume`                                                                                                                                                                           |
| Image    | Url to and image representing the `Owner`                                                                                                                                                                                                              |
| Url      | A link to a website representing the `Owner`                                                                                                                                                                                                           |
| Summary  | A single text or a list of texts to give an introduction to or overview of the `Resume`. It can optionally contain a `Title`.                                                                                                                          |
| Profiles | A list of social network profiles, like linkedin and facebook. It contains a `Network` (e.g. linkedin, facebook, ...) and `Url` (to the `Owners` profile) property.                                                                                    |

##### Skills

| Term  | Description                                                                                                               |
| ----- | ------------------------------------------------------------------------------------------------------------------------- |
| Name  |                                                                                                                           |
| Level | Represents the experience with that particular skill. It can be either `beginner`, `intermediate`, `advanced` or `expert` |

##### Languages

| Term     | Description                                                                                                                                                                                                                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Language | The name of that language, like "German", "English" or "Spanish".                                                                                                                                                                                                                                                                                             |
| Fluency  | Represents the skill level with this particular language. Alines the level with other skills, while `A = beginner` , `B = intermediate` , `C = advanced` and `native = expert` . Based on [Common European Framework of Reference for Languages](https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels). |

##### Work

| Term       | Description                                                                           |
| ---------- | ------------------------------------------------------------------------------------- |
| Name       | Company of that particular job.                                                       |
| Position   | The job title of position during that job.                                            |
| Star Date  |                                                                                       |
| End Date   |                                                                                       |
| Highlights | A list of short texts, that the describes the focus points or best parts of that job. |
| Summary    | A text explaining the job, product worked on and `Position`.                          |
| Url        | A link to a website representing the company or job.                                  |
| Location   |                                                                                       |
| Projects   | A list of short texts to display which projects where part of that job.               |
| Skills     | A list of `Skill.Name` to display which skills where used during that job.            |

##### Certificates

| Term       | Description                                              |
| ---------- | -------------------------------------------------------- |
| Name       | Name or title of the certificate, or the related course. |
| Issuer     | Who issued that certificate.                             |
| Start Date |                                                          |
| Url        | Url of where the certicate can be downloaded or viewed.  |

##### Education

| Term        | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| Institution |                                                                       |
| Area        | The are, field of education, like "Computer Science".                 |
| Study Type  | The type of the education or certificate, like "Bachelor of Science". |
| Start Date  |                                                                       |
| End Date    |                                                                       |
| Score       | The final score of that education experience.                         |
| Summary     | Contains a brief summary of that particulare education experience.    |
