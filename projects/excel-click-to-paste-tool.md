---
title: "Excel click-to-paste tool: a case study for a US client"
description: "How we built a Windows tool that pastes a value into any Excel cell with one click, for a US client filling long price lists: five builds in three days."
url: "https://ndcompany.in/projects/excel-click-to-paste-tool"
type: "CreativeWork"
image: "https://ndcompany.in/assets/projects/excel-click-to-paste-tool-16x9.png"
---

Software · Michael L.

# A one-click paste tool for Excel price lists, for a client in the US

A Windows tool for a US client who fills long supplier price lists in Excel: copy a value once, then one click pastes it into any cell. Five builds in three days, rated five stars on Freelancer.

- **Client:** Michael L.
- **Place:** United States
- **Service:** [Software Development](https://ndcompany.in/services/software-development)
- **Category:** [Software](https://ndcompany.in/projects/category/software)
- **Timeline:** 22 to 24 August 2024
- **Built with:** Python, packaged as one Windows .exe
- **Hired through:** Freelancer, at a fixed price

## Overview

Michael L., a client in the United States, works through supplier price lists in Excel. His team adds a blank column to each list and fills it with one value, such as 25%, row after row, on lists that run past 1,000 rows. In August 2024 he posted a job on Freelancer asking for a VBScript that would let a mouse click paste. Our founder, [Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha), took the job and built a small Windows program instead, ten months before he started N&D Co. on 8 June 2025: copy the value once, press End, and every left click on a cell pastes it and confirms it. He confirmed it worked, paid, and rated the job five stars: "Great job. Did what others couldn't do."

The tool runs as one .exe with nothing to install, comes with a manual, and has one key to pause it and another to close it, because a program that changes what a click does needs an easy way out. We sent five builds in three days, each with a manual or a screen recording. In November 2026 we ran the delivered build again on current Excel to make the screenshots on this page, on a made-up price list rather than his.

This page covers the problem, how the tool works, how we built it and why, the version history, what Excel allows and what it does not, and how we work with clients in the US from India. The work falls under our [software development](https://ndcompany.in/services/software-development) service.

## The job: one value, a thousand rows

Michael explained the work in the chat. Companies send his team their price lists as Excel files. The team adds a blank column, then scrolls down the list and pastes a number into that column, row by row. The usual way is to click a cell and paste, with Ctrl+V or with a right click and Paste. In his words, that is easy, "but not so great if you have 1000+ rows to look at."

He had already solved half of it. With Windows' own keyboard settings he had made the + key copy and the - key paste. "It's this Mouse click-paste thing that's so difficult," he wrote. His job post asked for a VBScript to do the rest.

- One left click on a cell should paste the copied value, with no Ctrl+V and no menu.
- It had to work in his copy of Excel on Windows, with nothing to install.
- A key should switch it off and on, so normal clicking could come back for a moment.
- It must never trap the mouse: one key had to close it at once.
- He was about to run a program from a stranger, so it had to show what it does.

**Filling 1,000 rows by hand and with the tool (our arithmetic, not a timed study)**

| Measure | By hand | With the tool |
| --- | --- | --- |
| Actions for each row | Two: a click on the cell, then Ctrl+V or a right click and Paste | One left click |
| Actions for 1,000 rows | About 2,000 | 1,000 |
| Hands | Mouse and keyboard, or two clicks through a menu | One hand on the mouse |

## What we did

[Software Development](https://ndcompany.in/services/software-development)

### A Windows program that turns a left click into a paste

We wrote every line of the tool by hand in Python, with no AI coding tools, and packaged it as a single automation.exe with PyInstaller, so it runs on a Windows PC with no Python and no installer. It listens to the mouse and keyboard across Windows with the pynput library, sends keystrokes with pyautogui, plays its sounds with pygame and writes a colour-coded log of everything it does to its console window with colorama.

When the tool is on, a left click on a cell does three things in a row: it presses F2 to open the cell for editing, pastes with Ctrl+V and presses Enter to confirm. The click itself has already selected the cell, so one click fills it. The keystrokes run in a thread of their own, which is how the second build got rid of the lag the first one put on the mouse.

- automation.exe: one file, no installer
- One left click to paste a copied value and confirm it
- The End key to switch the tool on and off, and Esc to close it
- A play sound and a pause sound, from sound files he supplied, so he knows the state without looking
- A console window that logs every action
- Documentation in PDF and Markdown, then a manual with each later build
- Screen recordings of the tool at work

*Page 1 of the manual delivered with the final build.*

## How the tool works, step by step

This is the whole routine, as the manual gives it and as the screenshots below show it. The screenshots come from our rerun on 23 November 2026, with the build we delivered and a made-up price list of 15 spray paint items. None of Michael's files appear on this page.

1. Double-click automation.exe. A console window opens and says Program started. The tool starts paused, so the mouse works as usual.
2. Open the price list in Excel and copy the value the new column needs, for example 25%.
3. Press End. The tool plays its play sound and the console says Program activated.
4. Click each cell that needs the value. Every click pastes it and confirms it, and the console logs each paste.
5. Press End again to pause, for example to copy a different value, then press End to carry on.
6. Press Esc to close the tool. Nothing keeps running in the background.

*Started and paused: clicks behave as usual.*

*After End: the tool is on, and it played its play sound.*

One rule makes it reliable: copy the value as text, not as a cell. The section on Excel below explains why.

## How we built it, and why

It was built by hand in August 2024, before N&D Co. existed. Each build was tested on a spreadsheet and recorded before it was sent. Most of the work was deciding how a program that takes over the mouse should behave, so that it saves time without ever costing a sheet. These are the choices, and the reason for each.

**The choices behind the tool**

| Choice | Why |
| --- | --- |
| Python, not VBScript | His post asked for a VBScript. VBScript cannot listen to mouse clicks across Windows on its own, which our bid said and he agreed with ("I think you are right about the limits here using VBS"). Python has libraries made for exactly this. |
| One .exe | He could run it like any other program, with nothing to install. We told him at the start that Windows Defender can be wary of a new .exe, and offered screenshots, a recording and the source code so he could see what it does before trusting it. |
| Starts paused | Nothing changes until he presses End, so opening it by mistake does no harm. |
| End to pause, Esc to close | A program that changes what a click does can lock a person out of their own PC, so Esc closes it at once. The on and off key was Michael's idea: it lets him click normally for a moment and then carry on. |
| Ctrl and a click first, a plain click second | The first build pasted only on Ctrl and a left click, so a stray click could not overwrite a cell. We explained the risk of a plain click; Michael wanted it anyway, so the second build pasted on a plain click, with End always one key away. |
| F2, Ctrl+V, Enter | Opening the cell for editing before pasting puts the value into the cell itself, and Enter confirms it at once. |
| A sound for each state | Michael pointed out that he watches the sheet, not the console, so he could not tell whether the tool was on. A play sound and a pause sound tell him. |
| A log of every action | The console lists each click and what the tool did with it, in colour, so anything odd can be traced. |
| The middle button left alone | He asked about using it as a second switch. Excel already uses it to scroll, so we kept it free. |

## Five builds in three days

Michael awarded the job on Thursday 22 August 2024, at a fixed price of $75 that he set and we accepted. We had promised delivery before Monday. The first build went out the same day.

**What we sent, and when (2024)**

| Date | What we sent | What changed |
| --- | --- | --- |
| 22 August | The first build, documentation in PDF and Markdown, and a recording | Ctrl and a left click to paste, Ctrl and a right click to copy, End to pause and Esc to close. |
| 23 August | The second build, a user manual and a recording | A plain left click pastes, as he asked once he had sent us a sample price list. The mouse lag is gone. |
| 24 August | His confirmation | "You got it to work." He released the $75 and rated the job five stars. |
| 24 August | The third, fourth and fifth builds, with a manual | A play and a pause sound, and three ways of copying with a right click. He paid $45 for this round. |

- **From the award to the last build:** 3 days
- **Builds, each with a manual or a recording:** 5
- **In all: the $75 job and $45 for the second round:** $120
- **His rating on Freelancer:** 5.0

## What Excel allows, and what we told him

Any tool that drives Excel from outside has to live with Excel's own rules. Two of them shaped this job, and knowing them is useful to anyone who fills spreadsheets this way.

### Copy the value as text, not as a cell

When you copy a cell in Excel, Excel marks it with a moving border and holds the copy until you edit another cell. The tool confirms each paste with Enter, which is an edit, so Excel drops its copy after the first paste and later clicks have nothing to paste. Text copied from inside a cell, or from anywhere else, stays on the clipboard. In our 2026 rerun a copied cell filled one row; the same value copied as text filled every row we clicked. Michael's second manual already told him to copy his text first.

### The right click belongs to Excel

In the second round Michael asked for a right click that copies a cell, so his whole routine would happen on the mouse. Excel opens its own menu on a right click, and a value copied from a cell runs into the rule above. We tried three approaches that afternoon and showed him each one. He chose to keep copying as an ordinary step, told us "You have been a great help", and paid for the round. We would rather say what a platform allows than promise what it does not.

*Seven clicks, seven pastes, with the value copied as text.*

## Running it again two years later

On 23 November 2026 we ran the build we delivered on 24 August 2024, unchanged, on Windows 10 with current Excel from Microsoft 365. It started paused, switched on with End, and pasted 25% into seven rows with seven clicks, logging each one.

One thing needed a setting on our test PC. The tool's sound library could not open that PC's default audio output, so it closed at start. Starting it with SDL_AUDIODRIVER set to directsound, a standard setting of the library, fixed it without touching the program. If it ever happens on a client's PC, that is the fix.

## Working with a client in the US from India

Michael is in the United States, and we work from Barrackpore, near Kolkata, many hours ahead of him. Most of our messages went out in the Indian evening, and every build came with a manual or a recording he could check on his own time, without waiting for us to be awake.

Here is what made a stranger on another continent comfortable enough to run our program and pay for it:

- A fixed price agreed before any work: $75, which he proposed and we accepted.
- Payment through Freelancer's milestones, which he released only after he had confirmed the tool worked.
- Extra work priced and paid separately, after he asked for it.
- A manual or a recording with every build, in plain English.
- An offer of screenshots, a recording and the source code before he ran a program from someone he had not met.
- A warning whenever a request could hurt his work, such as a plain click that pastes wherever it lands.
- A straight answer when Excel set a limit, instead of a promise.

His review is public on [our founder's Freelancer profile](https://www.freelancer.in/u/nakshatrasaha), and on our [reviews page](https://ndcompany.in/reviews) with the others.

If your team in the US, the UK or anywhere else repeats the same clicks every day, we can build a small tool like this one. We set the price in writing before we start, quote in your currency and work across your time zone. See [software development](https://ndcompany.in/services/software-development) and [our page for clients in the USA](https://ndcompany.in/locations/usa), or [book a 15 minute call](https://ndcompany.in/book-a-call).

## What the client said

Michael L. in their own words, from a public Freelancer review.

Freelancer review

"Great job. Did what others couldn't do."

Michael L.

2024

## Frequently asked questions

**What was built for Michael L.?**

A small Windows program for filling Excel price lists, built in August 2024 by our founder, before he started N&D Co. in June 2025. He copies a value once and presses End, and from then on every left click on a cell pastes the value and confirms it. End pauses the tool, Esc closes it, and a sound tells him which state it is in. It came as one .exe with a manual.

**Why Python and not the VBScript the job asked for?**

VBScript cannot listen to mouse clicks across Windows on its own, which is what a click that pastes needs. Python has libraries made for it, and PyInstaller packs the program into one .exe, so the client needed nothing installed.

**Was the tool written with AI?**

No. We wrote every line by hand in Python in August 2024, and tested each build ourselves on a spreadsheet, with a screen recording, before sending it.

**Is a tool that takes over the mouse safe to use?**

This one starts paused, so nothing changes until you press End. End switches it off again at any moment, and Esc closes it at once. The first build pasted only on Ctrl and a click, to rule out stray pastes; the client chose a plain click once we had explained the risk.

**Why does only the first click paste when I copy a cell in Excel?**

Because Excel holds a copied cell only until you edit another cell, and each paste is confirmed with Enter, which counts as an edit. Copy the value as text instead, from inside the cell or from anywhere else, and it stays on the clipboard for every click.

**How long did it take, and what did it cost?**

Three days, from 22 to 24 August 2024, with five builds. The job had a fixed price of $75, and a second round of changes the client asked for cost $45, so $120 in all, paid through Freelancer.

**Does the tool still work today?**

Yes. On 23 November 2026 we ran the build we delivered in 2024, unchanged, on Windows 10 with current Excel from Microsoft 365, and seven clicks pasted into seven rows. On our test PC the sound library needed one standard setting to open the audio output.

**Can you build a tool like this for a team in the US or UK?**

Yes. We build small Windows tools and internal software for clients abroad, agree the price in writing before we start, quote in your currency and send a manual or a recording with every build.

## Related reading

Guides from our blogs on the same kind of work.

Business

Guide · 24 Nov 2026

### [How much does app development cost in India? A guide for US and UK buyers](https://ndcompany.in/blogs/app-development-cost-india)

Our starting prices, what 22 Indian agencies publish, official US and UK developer pay, and the costs after launch: store fees, backend, SMS, maps, commissions and yearly updates.

Read the guide

Business

News · 11 Nov 2026

### [The Fiverr fake order scam: a case study of the files, pages and card form](https://ndcompany.in/blogs/fiverr-fake-order-scam)

The morning our new gig went live, seven brand-new buyers messaged us within an hour, most claiming an order and sending a "project file". We opened every file and page safely. Here is the code, the pages and where they lead.

Read the post

Business

Guide · 11 Nov 2026

### [NDAs, IP and ownership when you outsource to an agency](https://ndcompany.in/blogs/outsourcing-nda-ip-ownership)

Paying an agency does not make the code yours. What US, UK and Indian law say about ownership, the five-year default in India, what an NDA covers and a checklist to sign before work starts.

Read the guide

## More projects

Software

Gharonix, Lucknow, Uttar Pradesh

### [Property marketplace web app for Gharonix](https://ndcompany.in/projects/gharonix)

A property marketplace for Lucknow: listings checked before they go live, 62 locality pages, a live map, buyer tools and an admin console. Gharonix counts 4,500 to 5,300 leads a month.

See the project

Software

Bangali Oikya Manch, Madhyamgram, West Bengal

### [Case management platform for Bangali Oikya Manch](https://ndcompany.in/projects/bangali-oikya-manch)

An applicant portal and case management system for Bangali Oikya Manch, a community service organisation. Reported cases a day: about 5 to 6 by hand and 30 to 40 on a typical day with the platform.

See the project

Software

Axn Sony

### [Affidavit generator desktop app for an advocate's office](https://ndcompany.in/projects/affidavit-generator-software)

A Windows app for Axn Sony, an advocate with Bangali Oikya Manch: one form writes all three affidavits an applicant needs. His office went from 3 or 4 clients a day to 20 to 30.

See the project

[See all projects](https://ndcompany.in/projects)

## Want something like this?

Tell us about your business in a few lines and we will reply with questions or a quote. We work from Kolkata with clients across India and abroad.

[Get a quote](https://ndcompany.in/#contact)

## Structured data

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/projects/excel-click-to-paste-tool#webpage",
      "url": "https://ndcompany.in/projects/excel-click-to-paste-tool",
      "name": "Excel click-to-paste tool: a case study for a US client",
      "description": "How we built a Windows tool that pastes a value into any Excel cell with one click, for a US client filling long price lists: five builds in three days.",
      "isPartOf": {
        "@id": "https://ndcompany.in/#website"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/projects/excel-click-to-paste-tool#breadcrumb"
      },
      "inLanguage": "en-IN",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/projects/excel-click-to-paste-tool-16x9.png",
        "width": 1200,
        "height": 675
      },
      "mainEntity": {
        "@id": "https://ndcompany.in/projects/excel-click-to-paste-tool#work"
      }
    },
    {
      "@type": "CreativeWork",
      "@id": "https://ndcompany.in/projects/excel-click-to-paste-tool#work",
      "name": "A one-click paste tool for Excel price lists, for a client in the US",
      "headline": "A one-click paste tool for Excel price lists, for a client in the US",
      "description": "A Windows tool for a US client who fills long supplier price lists in Excel: copy a value once, then one click pastes it into any cell. Five builds in three days, rated five stars on Freelancer.",
      "abstract": "Michael L., a client in the United States, works through supplier price lists in Excel. His team adds a blank column to each list and fills it with one value, such as 25%, row after row, on lists that run past 1,000 rows. In August 2024 he posted a job on Freelancer asking for a VBScript that would let a mouse click paste. Our founder, Nakshatra Ranjan Saha, took the job and built a small Windows program instead, ten months before he started N&D Co. on 8 June 2025: copy the value once, press End, and every left click on a cell pastes it and confirms it. He confirmed it worked, paid, and rated the job five stars: \"Great job. Did what others couldn't do.\" The tool runs as one .exe with nothing to install, comes with a manual, and has one key to pause it and another to close it, because a program that changes what a click does needs an easy way out. We sent five builds in three days, each with a manual or a screen recording. In November 2026 we ran the delivered build again on current Excel to make the screenshots on this page, on a made-up price list rather than his. This page covers the problem, how the tool works, how we built it and why, the version history, what Excel allows and what it does not, and how we work with clients in the US from India. The work falls under our software development service.",
      "url": "https://ndcompany.in/projects/excel-click-to-paste-tool",
      "image": [
        "https://ndcompany.in/assets/images/projects/excel-click-to-paste-tool-pasting.webp",
        "https://ndcompany.in/assets/images/projects/excel-click-to-paste-tool-manual.webp",
        "https://ndcompany.in/assets/images/projects/excel-click-to-paste-tool-paused.webp",
        "https://ndcompany.in/assets/images/projects/excel-click-to-paste-tool-activated.webp"
      ],
      "genre": "Software",
      "keywords": "Microsoft Excel, Desktop automation",
      "creator": {
        "@id": "https://ndcompany.in/#ndco-organization"
      },
      "sourceOrganization": {
        "@type": "Organization",
        "name": "Michael L."
      },
      "isPartOf": {
        "@type": "CollectionPage",
        "@id": "https://ndcompany.in/projects#webpage",
        "url": "https://ndcompany.in/projects"
      },
      "hasPart": [
        {
          "@type": "CreativeWork",
          "name": "A Windows program that turns a left click into a paste",
          "description": "We wrote every line of the tool by hand in Python, with no AI coding tools, and packaged it as a single automation.exe with PyInstaller, so it runs on a Windows PC with no Python and no installer. It listens to the mouse and keyboard across Windows with the pynput library, sends keystrokes with pyautogui, plays its sounds with pygame and writes a colour-coded log of everything it does to its console window with colorama. When the tool is on, a left click on a cell does three things in a row: it presses F2 to open the cell for editing, pastes with Ctrl+V and presses Enter to confirm. The click itself has already selected the cell, so one click fills it. The keystrokes run in a thread of their own, which is how the second build got rid of the lag the first one put on the mouse.",
          "about": {
            "@type": "Service",
            "@id": "https://ndcompany.in/services/software-development#service",
            "name": "Software Development",
            "url": "https://ndcompany.in/services/software-development"
          },
          "image": [
            "https://ndcompany.in/assets/images/projects/excel-click-to-paste-tool-manual.webp"
          ]
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ndcompany.in/projects/excel-click-to-paste-tool#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ndcompany.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "https://ndcompany.in/projects"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Software",
          "item": "https://ndcompany.in/projects/category/software"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Michael L."
        }
      ]
    }
  ]
}
```
