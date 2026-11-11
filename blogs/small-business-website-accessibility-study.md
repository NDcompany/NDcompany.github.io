---
title: "Small Business Website Accessibility: 385 US Sites | N&D Co."
description: "We tested 385 US small business homepages: 87% had a serious or critical WCAG failure, dentists 96%, low contrast 60%. Common errors, fixes and the law."
url: "https://ndcompany.in/blogs/small-business-website-accessibility-study"
type: "BlogPosting"
author: "Nakshatra Ranjan Saha"
published: "2026-11-11T00:00:00+05:30"
modified: "2026-11-11T00:00:00+05:30"
image: "https://ndcompany.in/assets/blog/small-business-website-accessibility-study-16x9.png"
---

[Websites](https://ndcompany.in/blogs/topic/websites) · Insight

# How accessible are US small business websites? A study of 385 sites

87% of 385 US small business homepages we tested had a serious or critical accessibility failure. The most common errors by industry, what each means, how to fix it and what the ADA says.

By [Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha), CEO & Founder Published 11 November 2026 13 min read

Most US small business websites fail basic accessibility checks. In November 2026 we tested the homepages of 385 independent restaurants, cafes, dentists, law firms and hair salons in five US cities with axe-core, the open-source engine that, in Google's words, [powers the Lighthouse panel](https://developer.chrome.com/docs/devtools/accessibility/reference) in Chrome. 335 of the 385 (87%) had at least one failure that axe rates serious or critical for people with disabilities. Dentists fared worst, at 65 of 68 sites (96%). The most common problem was text with too little contrast against its background, on 232 sites (60%).

Key takeaways

- 335 of 385 homepages (87%) had at least one serious or critical failure of a WCAG 2.0, 2.1 or 2.2 level A or AA rule. 340 (88%) failed at least one rule of any impact, and the median site failed 2 rules.
- By industry: dentists 96%, hair salons 93%, cafes 86%, law firms 83% and restaurants 79%.
- Low contrast text was on 60% of sites, links with no readable name on 45%, images with no text alternative on 15% and untitled embedded frames, such as maps and booking widgets, on 15%.
- Automated tools find only part of the problems. Deque, which makes axe-core, says it finds on average 57% of WCAG issues. A site with no failures in our test may still have others.

If you are planning a new site or a rebuild, our guide to [what a small business website costs](https://ndcompany.in/blogs/small-business-website-cost) puts accessibility next to the other things you pay for.

## How we did the study

We drew the sample from [OpenStreetMap](https://www.openstreetmap.org/), the open map that anyone can edit. For each of five cities (Austin, Texas; Denver, Colorado; Columbus, Ohio; Portland, Oregon; and Atlanta, Georgia) we asked for every place inside the city boundary tagged as a restaurant, cafe, dentist, lawyer's office or hairdresser that lists a website. We left out places with a brand tag, which OpenStreetMap uses to mark chains, so the sample leans towards independent businesses. We removed duplicate websites, then drew up to 20 sites at random for each city and industry, with a fixed seed so the draw can be repeated.

That gave 492 websites. On 6 November 2026 (US time) we opened each homepage once in Google Chrome, at a desktop window size of 1280 by 800 pixels, waited for the page to load plus 2 seconds, and ran axe-core 4.14.0 with its rules for WCAG 2.0, 2.1 and 2.2 at levels A and AA. We recorded only the failures axe is certain about. We did not log in, fill in forms, click anything or contact any business. Our test browser was set to allow the test script on pages whose security settings would otherwise block an added script, which changes nothing on the site itself.

385 homepages loaded and could be tested. The other 107 could not be read: 33 domains (7% of the 492) no longer exist at all, and the rest refused our test browser, returned an error page or timed out. Every figure below is a share of the 385 readable sites.

The limits matter. We tested one page per site, the homepage, on a desktop screen, once. OpenStreetMap only lists businesses someone has mapped, and not every chain carries a brand tag. With 62 to 89 sites per city and 68 to 83 per industry, a difference of a few points between two groups is not meaningful. And axe reports only what code can check, which we come back to below.

## How accessible are US small business websites?

Not very, by the checks a machine can run. 335 of the 385 homepages (87%) failed at least one rule that axe rates serious or critical, the two highest of axe's four ratings (minor, moderate, serious, critical) of how much a problem affects people with disabilities. Counting every impact level, 340 sites (88%) failed at least one rule. Only 45 of 385 passed every automated check, and passing those checks does not mean a page is accessible.

The median site failed 2 different rules, and a single rule can fail on many elements of the same page.

For comparison, WebAIM's February 2026 scan of the top one million homepages, with a different tool and a different set of checks, found detectable WCAG 2 failures on [95.9% of home pages, with low contrast text the most common at 83.9%](https://webaim.org/projects/million/). The two numbers are not directly comparable, but they point the same way, and both put contrast first.

## Which industries have the least accessible websites?

In our sample, dentists had the least accessible homepages: 65 of 68 (96%) had a serious or critical failure, followed by hair salons at 93%. Restaurants did best, and still 79% failed.

US small business homepages with at least one serious or critical accessibility failure, by industry

**US small business homepages with at least one serious or critical accessibility failure, by industry**

| Category | Value (%) |
| --- | --- |
| Dentists (68 sites) | 96 |
| Hair salons (81 sites) | 93 |
| Cafes (83 sites) | 86 |
| Law firms (75 sites) | 83 |
| Restaurants (78 sites) | 79 |

*Share of readable homepages in Austin, Denver, Columbus, Portland and Atlanta with at least one WCAG 2.0, 2.1 or 2.2 A or AA failure that axe rates serious or critical. Chains left out. Source: N&D Co. study of 385 US small business homepages, axe-core 4.14.0, 6 November 2026.*

Our data cannot say why. Every industry we tested is far from clean, though, so no business should assume its site is fine because its customers are local or the site is simple.

By city the spread was narrower: Portland 91% (71 of 78), Austin 91% (81 of 89), Denver 86% (66 of 77), Atlanta 84% (66 of 79) and Columbus 82% (51 of 62).

## What are the most common WCAG errors on small business websites?

On the 385 homepages we tested, the most common failure was low contrast text (60% of sites), followed by links that a screen reader cannot name (45%). The chart shows the ten rules that failed most often, as a share of the 385 sites. A site can fail several.

Most common accessibility failures on 385 US small business homepages, share of sites

**Most common accessibility failures on 385 US small business homepages, share of sites**

| Category | Value (%) |
| --- | --- |
| Low contrast text | 60 |
| Links with no readable name | 45 |
| Images with no text alternative | 15 |
| Embedded frames with no title | 15 |
| Tap targets too small | 14 |
| Zoom turned off | 13 |
| Visible label missing from the name | 9 |
| Links shown by colour alone | 6 |
| Page language not set | 6 |
| Controls nested inside controls | 6 |

*axe-core rule ids, in order: color-contrast, link-name, image-alt, frame-title, target-size, meta-viewport, label-content-name-mismatch, link-in-text-block, html-has-lang, nested-interactive. Source: N&D Co. study of 385 US small business homepages, axe-core 4.14.0, 6 November 2026.*

## What each failure means and how to fix it

Many of these are a one-line change to the page's HTML or a setting in the theme. The table names each axe rule, the WCAG success criterion it tests (from [axe-core's rule descriptions](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)), how many sites failed it and what to change.

**The twelve most common failures on 385 US small business homepages**

| Failure (axe rule) | Sites | What it means | How to fix it |
| --- | --- | --- | --- |
| Low contrast text (color-contrast, WCAG 1.4.3) | 232 (60%) | Text is too pale against its background for people with low vision to read. | Darken the text or the background until the ratio is at least 4.5:1, or 3:1 for large text. |
| Links with no readable name (link-name, 2.4.4 and 4.1.2) | 173 (45%) | A screen reader announces "link" with nothing after it. Icon-only links, such as social media icons, and logo images without alt text inside a link cause it. | Give the link text, an alt attribute on the image inside it, or an aria-label such as "Our Instagram page". |
| Images with no text alternative (image-alt, 1.1.1) | 57 (15%) | A blind visitor gets no description of a photo, menu or offer shown as an image. | Add alt text that says what the image tells a sighted visitor. Use alt="" for images that are only decoration. |
| Embedded frames with no title (frame-title, 4.1.2) | 56 (15%) | A map, booking widget, video or review panel is announced only as "frame". | Add a title to the iframe, such as title="Map to our office". |
| Tap targets too small (target-size, 2.5.8) | 55 (14%) | Buttons or links are small and close together, so people with limited hand control tap the wrong one. | Make each target at least 24 by 24 CSS pixels, or leave enough space around it. |
| Zoom turned off (meta-viewport, 1.4.4) | 51 (13%) | The page stops visitors zooming in on phones. axe rates this moderate. | Remove user-scalable=no, or a low maximum-scale, from the page's viewport meta tag. |
| Visible label missing from the name (label-content-name-mismatch, 2.5.3) | 33 (9%) | A button reads "Book now" on screen but has a different hidden name, so voice control users who say what they see get nothing. | Make the hidden name start with the visible words, or remove the aria-label. |
| Links shown by colour alone (link-in-text-block, 1.4.1) | 25 (6%) | Links in a paragraph differ from the text around them only by colour, which colour-blind visitors may not see. | Underline links in body text. |
| Page language not set (html-has-lang, 3.1.1) | 24 (6%) | Screen readers guess the language and may read English with the wrong pronunciation. | Add lang="en" (or your language) to the page's html tag. |
| Controls nested inside controls (nested-interactive, 4.1.2) | 22 (6%) | A button sits inside a clickable card or another link, and screen readers may not announce it. | Keep each link or button separate, not inside another one. |
| Buttons with no name (button-name, 4.1.2) | 16 (4%) | Icon-only buttons, such as menu, search or close, are announced only as "button". | Give the button text or an aria-label such as "Open menu". |
| Image elements with no name (role-img-alt, 1.1.1) | 15 (4%) | An icon or graphic marked as an image has no description. | Add an aria-label that says what it shows, or remove the image role if it is decoration. |

Contrast is the one to fix first. W3C's [contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) asks for 4.5:1 for normal text and 3:1 for large text, about 24px or 18.5px bold. Text in a logo is exempt, but text colours chosen to match a brand are not. If you have brand guidelines, our guide to [writing a brand style guide](https://ndcompany.in/blogs/brand-style-guide) shows how to list approved text and background pairs once, so nobody has to test them again.

## What can automated accessibility testing not find?

A lot. axe-core's own documentation says it finds [on average 57% of WCAG issues automatically](https://github.com/dequelabs/axe-core), and it flags other elements as needing manual review because it cannot be certain. We counted only the failures it was certain about, so our 87% is a lower bound.

A machine can see that an image has alt text, but not whether the text is right. It cannot tell whether a visitor can reach every link and button with the Tab key in a sensible order, whether a video's captions match what is said, whether a form explains its errors clearly, or whether the page still works when text is enlarged. The Department of Justice lists barriers like these, including poor colour contrast, missing alt text, videos without captions, mouse-only navigation and inaccessible forms, and it warns that [a "clean" report does not necessarily mean everything is accessible](https://www.ada.gov/resources/web-guidance/). WebAIM's own help pages say the same of its WAVE tool: [the absence of errors does not mean a page is accessible or compliant](https://wave.webaim.org/help).

The 45 sites with no automated failures were not shown to be accessible, and the 335 with failures were not shown to be unusable. They had at least one problem that a machine can find in seconds.

## What does the law say about website accessibility in the US?

This section explains what official sources say. It is not legal advice, and we do not say whether any website meets the law. Ask a lawyer about your own business.

Title III of the Americans with Disabilities Act covers businesses open to the public, which the law calls public accommodations. The Department of Justice's [guidance on web accessibility and the ADA](https://www.ada.gov/resources/web-guidance/), published in March 2022, says the ADA's requirements apply to all the goods, services, privileges or activities offered by public accommodations, including those offered on the web. The same page says the department "does not have a regulation setting out detailed standards", that businesses can currently choose how they will make their online offerings accessible, and that existing technical standards, including WCAG, "provide helpful guidance".

In April 2024 the department published a rule with a fixed standard, but for a different group. Its [fact sheet on the Title II web rule](https://www.ada.gov/resources/2024-03-08-web-rule/) says it applies to state and local governments and sets WCAG 2.1 level AA as the technical standard. After an interim final rule in April 2026, the fact sheet gives compliance dates of 26 April 2027 for governments serving 50,000 people or more and 26 April 2028 for smaller ones and special districts. That rule does not set a standard for private businesses, whose position is still the Title III guidance above.

Our study tested WCAG rules, which is why we report failures of those rules and never "ADA compliance".

## What about the European Accessibility Act?

If you sell to consumers in the EU, the [European Accessibility Act (Directive 2019/882)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L0882) applies to services provided to consumers after 28 June 2025, including e-commerce services and consumer banking. Websites for those services must be made perceivable, operable, understandable and robust. Microenterprises that provide services, those with fewer than 10 staff and an annual turnover or balance sheet of no more than €2 million, are exempt from the accessibility requirements. The directive defines a service provider as anyone who provides a service on the EU market or offers one to consumers in the EU, so a business outside the EU that sells to EU consumers should check whether it is in scope. Ask an adviser in the country you sell to.

## How can a small business check its own website?

Start with the same kind of free automated check we ran, then test by hand. Three tools cover the first step:

- [WAVE](https://wave.webaim.org/), from WebAIM. Type your page address on its site, or install its extension for Chrome, Firefox or Edge. The [extension](https://wave.webaim.org/extension/) checks the page in your own browser and sends nothing to WAVE's server.
- The axe DevTools extension for Chrome, which Deque lists among its [free tools](https://www.deque.com/axe/devtools/). It runs the same axe-core engine we used.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview), built into Chrome. Open your page, open DevTools, choose the Lighthouse tab and run a report. Its [accessibility score](https://developer.chrome.com/docs/lighthouse/accessibility/scoring) is a weighted average of pass or fail audits, weighted by axe's impact ratings, and the manual checks it lists do not count towards the score. A score of 100 means the automated audits passed, and nothing more. The same report scores speed, which our guide to [Core Web Vitals](https://ndcompany.in/blogs/core-web-vitals-explained) explains.

Then spend fifteen minutes doing what the tools cannot:

1. Put the mouse away and press Tab through your homepage. Can you see where you are on every step, and reach the menu, phone number and booking button?
2. Zoom the page to 200% on a computer and pinch to zoom on a phone. Does the text grow, and does anything get cut off?
3. Read each image's alt text. Does it say what a sighted visitor would learn from the picture?
4. Play any video muted. Are there correct captions?
5. Fill in your contact or booking form with a mistake in it. Does the error say what went wrong, in words, not only in red?

Check the pages that earn you money first: the homepage, booking or contact page, menu or services page and checkout. If you are briefing a designer or developer, write the target into the brief. Our guide to [planning a business website](https://ndcompany.in/blogs/plan-a-business-website) has a sample brief with WCAG 2.2 level AA and the contrast and tap target figures in it.

Some vendors sell overlays, scripts added to a site to find or fix problems. The Department of Justice calls automated checkers and overlays "helpful tools" and pairs that with its warning about clean reports. Colours, labels and alt text fixed in the site itself reach every visitor, with or without a script.

## The data

The rows for all 385 readable sites are in [a CSV file (website-accessibility-2026.csv)](https://ndcompany.in/assets/data/website-accessibility-2026.csv): city, industry, whether the site had a serious or critical failure, how many rules it failed, and whether it failed each of nine common rules (color-contrast, link-name, image-alt, button-name, label, html-has-lang, frame-title, target-size and meta-viewport). Sites are numbered, not named, and we do not share which number is which business. We plan to repeat the study each year with the same method. For a similar check of businesses closer to home, see our study of [901 Kolkata business websites](https://ndcompany.in/blogs/kolkata-small-business-websites).

## How to cite this study

Please cite it as: N&D Co., "How accessible are US small business websites? A study of 385 sites", November 2026, https://ndcompany.in/blogs/small-business-website-accessibility-study, with a link to this page. If you quote a single figure, give the base with it, for example "87% of 385 homepages tested with axe-core 4.14.0", and say that automated testing finds only part of accessibility problems.

## How we can help

We are a brand and growth agency in Kolkata, India, working with clients in the US and abroad. Our [website design and development](https://ndcompany.in/services/website-design-development) page explains how we scope a new site or a rebuild in writing; if accessibility matters to you, ask for it in that scope by standard and level, and expect a manual check as well as an automated scan. To budget for a rebuild, try our [website cost calculator](https://ndcompany.in/tools/website-cost-calculator). US businesses can read our [page for clients in the USA](https://ndcompany.in/locations/usa) for hours and payment, or our guide to [outsourcing web development to India](https://ndcompany.in/blogs/outsource-web-development-india), and agencies that resell builds under their own name can see our [white label web development](https://ndcompany.in/white-label/web-development) page. We cannot tell you whether your site meets the ADA or any other law. Only a lawyer can do that.

- [Web accessibility](https://ndcompany.in/tags/web-accessibility)
- [Website planning](https://ndcompany.in/tags/website-planning)

## Share this post

- [Share on X](https://twitter.com/intent/tweet?text=How%20accessible%20are%20US%20small%20business%20websites%3F%20A%20study%20of%20385%20sites&url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fsmall-business-website-accessibility-study&via=NDCoofficial)
- [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fndcompany.in%2Fblogs%2Fsmall-business-website-accessibility-study)
- [Share on LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fsmall-business-website-accessibility-study)
- [Share on WhatsApp](https://wa.me/?text=How%20accessible%20are%20US%20small%20business%20websites%3F%20A%20study%20of%20385%20sites%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fsmall-business-website-accessibility-study)
- [Share on Telegram](https://t.me/share/url?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fsmall-business-website-accessibility-study&text=How%20accessible%20are%20US%20small%20business%20websites%3F%20A%20study%20of%20385%20sites)
- [Share on Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fsmall-business-website-accessibility-study&title=How%20accessible%20are%20US%20small%20business%20websites%3F%20A%20study%20of%20385%20sites)
- [Share on Threads](https://www.threads.net/intent/post?text=How%20accessible%20are%20US%20small%20business%20websites%3F%20A%20study%20of%20385%20sites%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fsmall-business-website-accessibility-study)
- [Share on Bluesky](https://bsky.app/intent/compose?text=How%20accessible%20are%20US%20small%20business%20websites%3F%20A%20study%20of%20385%20sites%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fsmall-business-website-accessibility-study)
- [Share on Pinterest](https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fsmall-business-website-accessibility-study&media=https%3A%2F%2Fndcompany.in%2Fassets%2Fblog%2Fsmall-business-website-accessibility-study-16x9.png&description=How%20accessible%20are%20US%20small%20business%20websites%3F%20A%20study%20of%20385%20sites)
- [Share by email](mailto:?subject=How%20accessible%20are%20US%20small%20business%20websites%3F%20A%20study%20of%20385%20sites&body=We%20tested%20385%20US%20small%20business%20homepages%3A%2087%25%20had%20a%20serious%20or%20critical%20WCAG%20failure%2C%20dentists%2096%25%2C%20low%20contrast%2060%25.%20Common%20errors%2C%20fixes%20and%20the%20law.%0A%0Ahttps%3A%2F%2Fndcompany.in%2Fblogs%2Fsmall-business-website-accessibility-study)

[Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha)

CEO & Founder of N&D Co., a brand and growth agency in Barrackpore, Kolkata. Nakshatra has worked in SEO since July 2025 and writes our guides on SEO, websites and branding.

## Keep reading

Websites

Guide · 7 Nov 2026

### [Shopify development in India: what partners charge, from Shopify's own directory](https://ndcompany.in/blogs/shopify-development-india)

What do Shopify partners in India charge? We read 160 profiles in Shopify's Partner Directory and compared starting prices, tiers, reviews and experience for India-based and US-based partners.

Read the guide

Websites

Guide · 7 Nov 2026

### [How do you hire a WordPress developer in India? What 30 agency websites show](https://ndcompany.in/blogs/hire-wordpress-developer-india)

We read the websites of 30 Indian web development agencies. Only 4 publish an hourly rate and only 8 say you own the code, so here is what to ask and put in writing.

Read the guide

Websites

News · 5 Nov 2026

### [The Quatgio email: a fake client brief that ends at a fake Google sign-in](https://ndcompany.in/blogs/quatgio-scam-email)

A "vendor sourcing" firm offered us a US client, answered our reply in 2 minutes 34 seconds, and sent a booking link that ends at a page made to look like Google sign-in.

Read the post

[More on Websites](https://ndcompany.in/blogs/topic/websites)

## How we can help

If you would rather have this handled for you, these are the services that cover it.

### [Website Design & Development](https://ndcompany.in/services/website-design-development)

Responsive websites, e-commerce development, and SEO-optimized web solutions.

Learn more

## Have a question about your own business?

Send a few lines about your business and what you are trying to fix. We will reply with questions or a quote.

[Get in touch](https://ndcompany.in/#contact)

## Structured data

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://ndcompany.in/blogs/small-business-website-accessibility-study#article",
      "headline": "How accessible are US small business websites? A study of 385 sites",
      "description": "We tested 385 US small business homepages: 87% had a serious or critical WCAG failure, dentists 96%, low contrast 60%. Common errors, fixes and the law.",
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/small-business-website-accessibility-study-16x9.png",
          "width": 1200,
          "height": 675
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/small-business-website-accessibility-study-4x3.png",
          "width": 1200,
          "height": 900
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/small-business-website-accessibility-study-1x1.png",
          "width": 1200,
          "height": 1200
        }
      ],
      "datePublished": "2026-11-11T00:00:00+05:30",
      "dateModified": "2026-11-11T00:00:00+05:30",
      "author": {
        "@type": "Person",
        "@id": "https://ndcompany.in/#founder",
        "name": "Nakshatra Ranjan Saha",
        "jobTitle": "CEO & Founder",
        "url": "https://ndcompany.in/team/nakshatra-ranjan-saha"
      },
      "publisher": {
        "@id": "https://ndcompany.in/#ndco-organization"
      },
      "mainEntityOfPage": {
        "@id": "https://ndcompany.in/blogs/small-business-website-accessibility-study#webpage"
      },
      "isPartOf": {
        "@id": "https://ndcompany.in/blogs#blog"
      },
      "articleSection": "Websites",
      "keywords": "Web accessibility, Website planning",
      "genre": "Insight",
      "wordCount": 2794,
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/blogs/small-business-website-accessibility-study#webpage",
      "url": "https://ndcompany.in/blogs/small-business-website-accessibility-study",
      "name": "Small Business Website Accessibility: 385 US Sites | N&D Co.",
      "description": "We tested 385 US small business homepages: 87% had a serious or critical WCAG failure, dentists 96%, low contrast 60%. Common errors, fixes and the law.",
      "isPartOf": {
        "@id": "https://ndcompany.in/#website"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/blogs/small-business-website-accessibility-study#breadcrumb"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/blog/small-business-website-accessibility-study-16x9.png",
        "width": 1200,
        "height": 675
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "Blog",
      "@id": "https://ndcompany.in/blogs#blog",
      "url": "https://ndcompany.in/blogs",
      "name": "N&D Co. Blogs",
      "publisher": {
        "@id": "https://ndcompany.in/#ndco-organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ndcompany.in/blogs/small-business-website-accessibility-study#breadcrumb",
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
          "name": "Blogs",
          "item": "https://ndcompany.in/blogs"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Websites",
          "item": "https://ndcompany.in/blogs/topic/websites"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Website accessibility study"
        }
      ]
    }
  ]
}
```
