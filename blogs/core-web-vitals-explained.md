---
title: "Core Web Vitals explained: LCP, INP and CLS | N&D Co."
description: "What LCP, INP and CLS measure, Google's thresholds, how websites score on phones in the US, UK and worldwide in October 2026, and how to check yours."
url: "https://ndcompany.in/blogs/core-web-vitals-explained"
type: "BlogPosting"
author: "Nakshatra Ranjan Saha"
published: "2026-10-23T00:00:00+05:30"
modified: "2026-11-17T00:00:00+05:30"
image: "https://ndcompany.in/assets/blog/core-web-vitals-explained-16x9.png"
---

[Websites](https://ndcompany.in/blogs/topic/websites) · Guide

# Core Web Vitals explained for business owners

October 2026 data on how websites score on phones in the US, UK and worldwide, what LCP, INP and CLS measure, what Google says about rankings and how to check yours.

By [Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha), CEO & Founder Published 23 October 2026 Updated 17 November 2026 17 min read

Core Web Vitals are three measurements Google takes from real visits to a website. Largest Contentful Paint (LCP) is how long the main content takes to appear, Interaction to Next Paint (INP) is how quickly the page responds to a tap, click or key press, and Cumulative Layout Shift (CLS) is how much the layout jumps unexpectedly during a visit. A page passes when [each of the three is good for at least 75% of visits](https://web.dev/articles/vitals), with phones and computers judged separately. Many sites still fall short on phones: in October 2026, [53% of the websites in Google's Chrome data passed worldwide](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL), 64% in the United States and 68% in the United Kingdom.

Key takeaways

- [Google's targets](https://web.dev/articles/vitals): main content within 2.5 seconds (LCP), responses to taps and clicks within 200 milliseconds (INP) and layout shift of 0.1 or less (CLS).
- Pass or fail comes from [real Chrome visits over the previous 28 days](https://developers.google.com/speed/docs/insights/v5/about), not from the 0 to 100 PageSpeed score.
- On phones in October 2026, 53% of websites passed worldwide, 64% in the US and 68% in the UK. Slow loading (LCP) is the most common failure everywhere.
- On slow sites, most of the wait is the server and a late start on the main image, [not the image download](https://web.dev/blog/common-misconceptions-lcp).
- Google says [Core Web Vitals are used by its ranking systems](https://developers.google.com/search/docs/appearance/page-experience), and also that there is no single page experience signal. Fix them for your visitors first.

## What are the three Core Web Vitals?

These are the thresholds [Search Console's Core Web Vitals report](https://support.google.com/webmasters/answer/9205520?hl=en) uses:

**Core Web Vitals thresholds in Google Search Console**

| Metric | Good | Needs improvement | Poor |
| --- | --- | --- | --- |
| Largest Contentful Paint (LCP) | 2.5 s or less | 2.5 s to 4 s | Over 4 s |
| Interaction to Next Paint (INP) | 200 ms or less | 200 ms to 500 ms | Over 500 ms |
| Cumulative Layout Shift (CLS) | 0.1 or less | 0.1 to 0.25 | Over 0.25 |

LCP is the time until [the largest image, text block or video on screen](https://web.dev/articles/lcp) has been drawn. In 2025 that element was an image, such as a banner, on [76% of mobile pages](https://almanac.httparchive.org/en/2025/performance) and text on nearly all the rest.

INP looks at every click, tap and key press in a visit and reports [the longest interaction, ignoring outliers](https://web.dev/articles/inp). Scrolling, hovering and zooming do not count.

CLS scores unexpected movement, such as text jumping down when an advert loads above it. It is based on [the largest burst of unexpected shifts](https://web.dev/articles/cls) in a visit, and movement within half a second of a tap or click does not count, so opening a menu is fine.

INP [replaced First Input Delay (FID) as a Core Web Vital on 12 March 2024](https://web.dev/blog/inp-cwv-march-12), so a guide that still lists FID is out of date.

## How Google decides whether a page passes

Google judges each metric at the 75th percentile of visits, [separately for phones and desktop computers](https://web.dev/articles/vitals). LCP is good when at least 75% of visits see the main content within 2.5 seconds, and INP and CLS are tested the same way. PageSpeed Insights says a page passes when [all three are good, or when LCP and CLS are good and there is too little data for INP](https://developers.google.com/speed/docs/insights/v5/about). It looks at the previous 28 days of visits.

The data comes from the Chrome User Experience Report (CrUX): Chrome on desktop and Android, from users who have turned on usage reporting. It [leaves out Chrome on iPhone, Android apps that open pages in a WebView and other Chromium browsers such as Microsoft Edge](https://developer.chrome.com/docs/crux/methodology). So the figures describe your Android and desktop Chrome visitors, which may not be a typical sample of your customers.

Search Console groups pages with a similar experience, gives each group [the status of its slowest metric](https://support.google.com/webmasters/answer/9205520?hl=en) and only includes indexed pages (our [technical SEO checklist](https://ndcompany.in/blogs/technical-seo-checklist) covers indexing). PageSpeed Insights falls back to the whole site when a page has too few visits, and shows [no real-user data](https://developers.google.com/speed/docs/insights/v5/about) when the site has too few. Google does not publish [how many visits that takes](https://developer.chrome.com/docs/crux/methodology), so treat any "visits per day" figure you read as a guess.

Search Console also [combines visits from all locations](https://support.google.com/webmasters/answer/9205520?hl=en), so if you sell in one country but get plenty of traffic from a country with slower connections, that traffic pulls your results down.

## Does Core Web Vitals affect Google rankings?

Yes, a little, and Google is careful about how much. Its page experience documentation says ["Core Web Vitals are used by our ranking systems"](https://developers.google.com/search/docs/appearance/page-experience), and also says:

- There is ["no single signal"](https://developers.google.com/search/docs/appearance/page-experience) for page experience. Google's guidance asks you to look at many aspects, including HTTPS, how the page displays on phones and intrusive interstitials.
- Good results in Search Console or a third-party tool [do not guarantee](https://developers.google.com/search/docs/appearance/page-experience) that a page ranks at the top.
- Google always seeks the most relevant content, ["even if the page experience is sub-par"](https://developers.google.com/search/docs/appearance/page-experience). Where many helpful pages compete for the same search, a great page experience ["can contribute to success in Search"](https://developers.google.com/search/docs/appearance/page-experience).
- Its core ranking systems ["generally evaluate content on a page-specific basis"](https://developers.google.com/search/docs/appearance/page-experience), so a slow page does not automatically drag down the rest of the site.

Search Central's Core Web Vitals page [highly recommends](https://developers.google.com/search/docs/appearance/core-web-vitals) good results for success in Search and says nothing about how large the effect is. Nobody outside Google can give you a number, so be wary of any agency that does.

On sales, two companies published results on web.dev. The bus booking site redBus reported [a 7% overall increase in sales](https://web.dev/case-studies/redbus-inp) after improving INP. The Economic Times cut INP nearly fourfold from over 1,000 milliseconds, while also moving to Next.js, and reported [a 50% decrease in bounce rate and a 43% rise in pageviews on topic pages](https://web.dev/case-studies/economic-times-inp). These are the companies' own figures from several changes made at once, so do not read them as a forecast for your site.

Our reading: fix Core Web Vitals because they describe what your visitors go through, and count any ranking gain as a bonus. Faster loading will not lift a page that does not answer the search, which is why our [SEO services](https://ndcompany.in/services/seo-services) work on content and speed together.

## How websites score on phones: worldwide, US and UK

We pulled the figures in this section on 17 November 2026 from [HTTP Archive's Technology Report](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL), which is built on CrUX, using its public data feed. The latest month is October 2026. It covers about 8.3 million websites worldwide with enough Chrome visits from phones to be measured (sites with too few visitors are left out), about 1.23 million in the United States and 397,000 in the United Kingdom. CrUX sets each visit's country [from the visitor's IP address](https://developer.chrome.com/docs/crux/methodology/dimensions), so a site based anywhere counts in the country its visitors are in.

Websites passing all three Core Web Vitals on phones

**Websites passing all three Core Web Vitals on phones**

| Period | Worldwide (%) | United States (%) | United Kingdom (%) |
| --- | --- | --- | --- |
| Oct 2024 | 48 | 59 | 60 |
| Oct 2025 | 52 | 62 | 65 |
| Oct 2026 | 53 | 64 | 68 |

*Websites whose real Chrome visits on mobile were good for LCP, INP and CLS at the 75th percentile; a site without enough INP data is judged on LCP and CLS. Visits are located by IP address; the United States and United Kingdom figures come from the same report with Geo set to those countries. Source: [HTTP Archive Technology Report (Chrome UX Report data), October 2024 to October 2026](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL).*

All three places improved every year. Worldwide the pass rate rose from 48% to 53% in two years, the United States from 59% to 64% and the United Kingdom from 60% to 68%. Loading is the weak point in all of them, and server response, the wait before anything can load, is weaker still.

**Share of websites rated good on phones, October 2026**

| Measure | Worldwide | United States | United Kingdom |
| --- | --- | --- | --- |
| Loading (LCP) | 66% | 76% | 80% |
| Response to taps and clicks (INP) | 79% | 87% | 86% |
| Layout stability (CLS) | 83% | 85% | 88% |
| Server response (TTFB, not a Core Web Vital) | 47% | 56% | 63% |
| All three Core Web Vitals | 53% | 64% | 68% |

Source: the same report's [Core Web Vitals and TTFB views](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL), October 2026, each country with its Geo filter. Server response is [good at 0.8 seconds or less and is not a Core Web Vital](https://web.dev/articles/ttfb).

**Share of websites passing all three Core Web Vitals, October 2026**

| Visitors from | Phones | Desktop | Websites measured on phones |
| --- | --- | --- | --- |
| Worldwide | 53% | 61% | 8,294,416 |
| United States | 64% | 66% | 1,231,797 |
| United Kingdom | 68% | 69% | 396,913 |
| Netherlands | 68% | 72% | 208,938 |
| Australia | 52% | 57% | 162,293 |
| United Arab Emirates | 38% | 49% | 69,637 |

The pattern is the same everywhere: phones pass less often than desktop computers, and visitors in the United Arab Emirates and Australia get fewer passing sites than visitors in the US, UK or Netherlands. In the UAE only 48% of websites had good LCP on phones and 24% good server response. The data does not say why, so we will not guess. It does show that a site that passes for your customers in London may not pass for customers in Dubai.

On desktop, response to clicks is almost never the problem (97% of websites worldwide had good INP) and layout shift is: only 75% had good CLS, against 83% on phones. If you test only on a laptop, expect different failures from the ones your phone visitors see.

INP is the metric to watch. Across all the websites in CrUX it slipped for several months, and in its notes on the August 2026 data Google's CrUX team called the continued regression ["a cause for concern"](https://developer.chrome.com/docs/crux/release-notes).

## How to check your site's Core Web Vitals in four steps

1. Run [PageSpeed Insights](https://pagespeed.web.dev/) on your homepage and your main enquiry page, on the mobile tab. The section headed "Discover what your real users are experiencing" [shows real Chrome visits over the last 28 days](https://web.dev/articles/optimize-cwv-business). Note which metric fails, and whether the figures are for the page or the whole site.
2. If that section is missing, either Google has too few visits to the page and the site in its data (CrUX covers [millions of popular websites, but not all of them](https://web.dev/articles/optimize-cwv-business)) or the page is [not publicly discoverable](https://developer.chrome.com/docs/crux/methodology), for example because it is set to noindex. Use the lab test lower down the same report, which [simulates a slow mobile connection](https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md), and a mid-range Android phone on mobile data. A developer can also collect real visitors' figures with Google's [web-vitals library](https://github.com/GoogleChrome/web-vitals) and send them to Google Analytics 4, though reading the 75th percentile there needs GA4's BigQuery export or Data API, not its built-in reports.
3. Open the [Core Web Vitals report](https://support.google.com/webmasters/answer/9205520?hl=en) in Google Search Console, one of [the tools we use](https://ndcompany.in/tools-we-use). Verify the site from an account the business owns, not your developer's (our checklist covers [setting up Search Console](https://ndcompany.in/blogs/technical-seo-checklist)). Fix groups marked Poor first; a group is pages with a similar experience, so one fix can move many pages. Once the fix is live, start tracking it in the report, and Search Console [monitors the issue for 28 days](https://support.google.com/webmasters/answer/9205520?hl=en).
4. Write down the date, the three field numbers and the element that counts as LCP, which [the lab report shows](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint), so you can tell later whether the work changed anything.

Our free [RankGuru on-page checker](https://ndcompany.in/tools/rankguru) covers the page's titles, headings and text, not its speed, so use it beside PageSpeed Insights, not instead of it.

*PageSpeed Insights on this guide, 28 October 2026. The site is new, so the real-visitor section says No Data and only the lab test shows. A lab score of 100 does not mean real visits pass.*

*The same site in Search Console's Core Web Vitals report: not enough visits yet for Google to judge it, so the lab test and a real phone are what we have to go on.*

### What the PageSpeed score means

The 0 to 100 number in the lab section blends five lab measurements. Lighthouse's documentation lists the weights for Lighthouse 10 as [Total Blocking Time 30%, LCP 25%, CLS 25%, First Contentful Paint 10% and Speed Index 10%](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring). Total Blocking Time [is a proxy for INP](https://web.dev/articles/vitals), because nobody taps during a lab test. The score does not decide whether a page passes. PageSpeed Insights calls 90 or more good, but warns that good lab data ["does not necessarily mean real-user experiences will also be good"](https://developers.google.com/speed/docs/insights/v5/about). Lighthouse's documentation calls a perfect 100 ["extremely challenging to achieve and not expected"](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring), and Google Search Central says chasing one just for SEO ["may not be the best use of your time"](https://developers.google.com/search/docs/appearance/page-experience).

## Why is my website slow to load? It is rarely the image file

Slow loading (LCP) is the usual failure, so it gets the most attention here. Google's Chrome team measured where the time goes on real Chrome visits to pages whose main element is an image, and [published the results in 2024](https://web.dev/blog/common-misconceptions-lcp).

Where the time goes on websites with slow loading

**Where the time goes on websites with slow loading**

| Category | Value (ms) |
| --- | --- |
| Server response (TTFB) | 2,270 |
| Wait before the main image starts loading | 1,290 |
| Main image download | 350 |
| Drawing it on screen | 360 |

*Real Chrome visits to pages whose largest element is an image, on sites with poor LCP (the median across sites of each site's 75th percentile). On sites with good LCP the four parts take 600, 350, 160 and 230 ms. Source: [web.dev, Common misconceptions about how to optimize LCP, 2024](https://web.dev/blog/common-misconceptions-lcp).*

On sites with poor LCP, the median site waits 2,270 milliseconds for the server and 1,290 more before the browser even starts fetching the main image. Most of these sites spend [less than 10% of their LCP time](https://web.dev/blog/common-misconceptions-lcp) on the download, so compressing the image, the usual first tip, rarely fixes a failing page by itself.

Server response, or time to first byte (TTFB), is good at 0.8 seconds or less, and only 47% of websites worldwide met that on phones in October 2026. Google lists [redirects, distant visitors, poor networks and uncacheable URL parameters](https://web.dev/articles/optimize-lcp) as common causes of a high TTFB. When a site is hosted in one country and its visitors are in another, [the distance adds to the wait](https://web.dev/articles/optimize-cwv-business), and a content delivery network (CDN) keeps copies of the site closer to them. If your server response is slow, question the hosting first.

The 1,290 milliseconds is time lost before the browser even starts the download, often because it has not found the image yet or does not know it matters most. The browser finds the image soonest when it is [a plain img tag in the HTML](https://web.dev/blog/common-misconceptions-lcp), so for the main image on every template, ask for four things:

- An img element in the HTML, not a CSS background or a slider built by a script.
- Width and height set, so its space is reserved and the text below does not jump (that protects CLS).
- No lazy-loading. Google's guidance is blunt: ["Never lazy-load your LCP image"](https://web.dev/articles/optimize-lcp).
- The attribute `fetchpriority="high"`, which tells the browser to [start loading it straight away](https://web.dev/blog/common-misconceptions-lcp).

Few sites do all four: in 2025, [16 to 17% of pages lazy-loaded their main image, 17% of mobile pages with an image as the main element used `fetchpriority="high"`, and 62% of mobile pages had at least one image without set dimensions](https://almanac.httparchive.org/en/2025/performance). Forward this line to your developer:

```html
<img src="/images/hero-1600.webp" width="1600" height="900" alt="Describe what the photo shows" fetchpriority="high">
```

## What usually fixes slow responses and layout shifts?

### Slow response to taps and clicks (INP)

An interaction has three parts: [input delay, processing duration and presentation delay](https://web.dev/articles/optimize-inp). Most fixes are for a developer: split long jobs into smaller tasks so the browser can respond in between (["Yielding indiscriminately is better than not yielding at all"](https://web.dev/articles/optimize-inp)), keep the page's structure small, because [rendering work usually finishes quickly on a small page](https://web.dev/articles/optimize-inp), and load less script. As an owner, you control the scripts: each widget, chat tool, tracker and testing tool adds work the browser must finish before it can answer a tap. Google's guide for decision makers says to [avoid expensive widgets and plugins](https://web.dev/articles/optimize-cwv-business).

Google's guidance says ["Ideally, your journey in optimizing INP will start with field data"](https://web.dev/articles/optimize-inp), meaning real visits, because a lab test cannot tap anything by itself. If the real-user section has no data, test the common paths yourself on a phone: open the menu, use the search, add to basket, send the form.

### Layout that jumps (CLS)

Google's [guide to layout shift](https://web.dev/articles/optimize-cls) names the usual fixes, and most are cheap:

- Set width and height, or a CSS aspect ratio, on every image and video so the browser reserves the space.
- Reserve space for adverts, embeds and iframes in the first layout, and keep that space even when no advert loads.
- Do not insert banners above content that is already showing. Reserve a slot or show cookie notices as an overlay.
- Match the fallback font to your web font and preload the fonts the first screen needs, so text does not change size when the font arrives.
- Animate with `transform`, not properties like `top` and `left`, which move other content.

## Business decisions that slow a site down

Many slow pages come from decisions made outside the code. Google's [guide for business decision makers](https://web.dev/articles/optimize-cwv-business) lists causes that owners and marketing teams control:

- Video at the top of the page, and carousels, which can make the browser download several large images at once.
- Print-quality images from media partners or design agencies. Ask for web-optimised versions.
- Code from expired campaigns left in a tag manager, which is still downloaded and compiled on every page.
- A/B testing tools that hold back the page until the test changes apply. Run them only on the pages being tested, briefly, and remove finished tests.
- Campaign links that pass through redirects or chains of link shorteners. Link to the final address, and ask whoever runs your CDN to ignore UTM parameters when caching.
- Widgets loaded on every page, such as a map that only the contact page needs. In 2025, [more than nine in ten pages used one or more third parties](https://almanac.httparchive.org/en/2025/third-parties).
- Cookie notices and offer bars inserted above the content after loading. Show them as overlays instead. The consent tool matters too: in March 2024 Google's CrUX team wrote that Google had been working with consent management platforms, including OneTrust, Complianz and Axeptio, and that this had ["resulted in much improved INP for sites using these platforms"](https://developer.chrome.com/docs/crux/release-notes).

Keep the platform, theme and plugins updated too, or choose a host that does it for you, so the site gets [the improvements platforms keep making](https://web.dev/articles/optimize-cwv-business).

### Does the platform matter?

Websites passing Core Web Vitals on phones, by platform

**Websites passing Core Web Vitals on phones, by platform**

| Category | Worldwide (%) | United States (%) | United Kingdom (%) |
| --- | --- | --- | --- |
| Wix | 81 | 89 | 91 |
| Shopify | 77 | 86 | 84 |
| Webflow | 72 | 81 | 80 |
| Squarespace | 71 | 83 | 85 |
| Drupal | 65 | 77 | 75 |
| All websites | 53 | 64 | 68 |
| WordPress | 49 | 63 | 67 |
| WooCommerce (on WordPress) | 41 | 55 | 58 |
| Next.js (custom builds) | 37 | 53 | 52 |

*Websites on phones, October 2026. Smaller platforms move several points from month to month: worldwide the report counts 2,513,839 WordPress sites against 56,474 on Webflow, and in the UK 3,792 Webflow sites. Results also reflect hosting, themes, plugins and build quality. Source: [HTTP Archive Technology Report (Chrome UX Report data), October 2026](https://httparchive.org/reports/techreport/tech?tech=ALL,WordPress,Shopify,Wix,Squarespace,Webflow,WooCommerce,Drupal,Next.js&geo=ALL&rank=ALL).*

Somewhat. WordPress runs [38.5% of all websites](https://w3techs.com/technologies/overview/content_management) (W3Techs, 17 November 2026), so it is the platform most owners meet. Worldwide, 49% of WordPress sites passed on phones in October 2026, 63% in the US and 67% in the UK, a little below all websites in each place. Hosted builders did better: Wix, Shopify and Squarespace sites passed on phones between 71% and 81% of the time worldwide, and more often in the US and UK. Sites built with Next.js, a framework for custom JavaScript builds, passed least often of the platforms in the chart (37% worldwide), so a custom build is not automatically faster. In the Netherlands, WordPress (69%) and all websites (68%) were level, and in Australia Shopify sites passed 78% of the time against 52% for WordPress.

The Web Almanac's chapter on content management systems says figures like these ["capture the combined effects of platform defaults, hosting choices, themes, plugins, and page builders"](https://almanac.httparchive.org/en/2025/cms). A platform that passes more often is a good sign, not a promise: a slow theme or a pile of plugins can sink any of them. Choose the platform for what the site has to do (see our guide to [planning a business website](https://ndcompany.in/blogs/plan-a-business-website)), then hold whoever builds it to field results on phones. We build [online stores on Shopify, WooCommerce or custom code](https://ndcompany.in/services/ecommerce-solutions), and the same test applies to each.

## What to ask your developer or agency

These work for a new build or an existing site. Ask for specific answers, in writing.

1. Will you show me field data on mobile before and after the work, not just the PageSpeed score?
2. Where is the site hosted, and does a CDN serve visitors in my main markets from nearby?
3. How is the main image loaded on each template: in the HTML, sized, not lazy-loaded and marked high priority?
4. Do images, videos, embeds and ad slots have space reserved?
5. Which scripts load on every page, and can maps, chat and video embeds load only where they are used?
6. How do the cookie banner and any A/B testing tool load, and do they delay the page or push content down?
7. Who updates the platform, theme and plugins after launch, and how often?
8. If Google has no field data for our site, how will we see real-visitor numbers? Lab tools [cannot measure INP](https://web.dev/articles/vitals).

## Mistakes to avoid

- Judging the site by the PageSpeed score, or paying for work whose only goal is 100.
- Testing only on office Wi-Fi with a new phone.
- Expecting results within a week. Field data covers 28 days, and so does Search Console's validation.
- Removing a feature customers use, such as booking or chat, instead of loading it only where it is needed.
- Checking only on a laptop. Desktop and phone fail on different metrics.

Watch out

You may read articles claiming that Google cut the good LCP threshold to 2 seconds, added new Core Web Vitals or marks down a whole domain when a quarter of its pages are slow. Google's documentation says none of this. Search Central's Core Web Vitals page still gives [2.5 seconds, 200 milliseconds and 0.1](https://developers.google.com/search/docs/appearance/core-web-vitals). The web.dev guide says stable metrics ["won't change more than once per year"](https://web.dev/articles/vitals). Google's status dashboard lists a [November 2026 core update that began on 10 November 2026](https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history), so a ranking move this month has many possible causes. If someone quotes a new speed rule or blames speed for a drop, ask for the Google page that states it.

## Where to start this month

1. Measure with PageSpeed Insights, Search Console and a mid-range phone on mobile data, and write the numbers down.
2. Fix the cheap things: the hero image, images without dimensions, unused scripts and widgets, and banners that push content down.
3. If server response is slow, look at hosting and a CDN before paying for anything else.
4. Start tracking the fix in Search Console as soon as it is live. It then monitors the issue for 28 days; when that ends, compare the field numbers with the ones you wrote down.

PageSpeed Insights also reports accessibility. In our [study of 385 US small business homepages](https://ndcompany.in/blogs/small-business-website-accessibility-study), 87% had a serious or critical accessibility failure, so it is worth reading that part of the report too.

## How we work with clients abroad

We are a brand and growth agency based in India, working with clients in the [United States](https://ndcompany.in/locations/usa), the [Netherlands](https://ndcompany.in/locations/netherlands) and other countries. Our [website design and development service](https://ndcompany.in/services/website-design-development) checks page speed on phones and desktop browsers before a site goes live. If you would like to know where your site stands first, ask for our [free SEO audit](https://ndcompany.in/free-seo-audit). There are [more website guides](https://ndcompany.in/blogs/topic/websites) and [SEO guides](https://ndcompany.in/blogs/topic/seo) on the blog.

- [Core Web Vitals](https://ndcompany.in/tags/core-web-vitals)
- [Google Search Console](https://ndcompany.in/tags/google-search-console)

## Share this post

- [Share on X](https://twitter.com/intent/tweet?text=Core%20Web%20Vitals%20explained%20for%20business%20owners&url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fcore-web-vitals-explained&via=NDCoofficial)
- [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fndcompany.in%2Fblogs%2Fcore-web-vitals-explained)
- [Share on LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fcore-web-vitals-explained)
- [Share on WhatsApp](https://wa.me/?text=Core%20Web%20Vitals%20explained%20for%20business%20owners%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fcore-web-vitals-explained)
- [Share on Telegram](https://t.me/share/url?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fcore-web-vitals-explained&text=Core%20Web%20Vitals%20explained%20for%20business%20owners)
- [Share on Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fcore-web-vitals-explained&title=Core%20Web%20Vitals%20explained%20for%20business%20owners)
- [Share on Threads](https://www.threads.net/intent/post?text=Core%20Web%20Vitals%20explained%20for%20business%20owners%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fcore-web-vitals-explained)
- [Share on Bluesky](https://bsky.app/intent/compose?text=Core%20Web%20Vitals%20explained%20for%20business%20owners%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fcore-web-vitals-explained)
- [Share on Pinterest](https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fcore-web-vitals-explained&media=https%3A%2F%2Fndcompany.in%2Fassets%2Fblog%2Fcore-web-vitals-explained-16x9.png&description=Core%20Web%20Vitals%20explained%20for%20business%20owners)
- [Share by email](mailto:?subject=Core%20Web%20Vitals%20explained%20for%20business%20owners&body=What%20LCP%2C%20INP%20and%20CLS%20measure%2C%20Google%27s%20thresholds%2C%20how%20websites%20score%20on%20phones%20in%20the%20US%2C%20UK%20and%20worldwide%20in%20October%202026%2C%20and%20how%20to%20check%20yours.%0A%0Ahttps%3A%2F%2Fndcompany.in%2Fblogs%2Fcore-web-vitals-explained)

[Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha)

CEO & Founder of N&D Co., a brand and growth agency in Barrackpore, Kolkata. Nakshatra has worked in SEO since July 2025 and writes our guides on SEO, websites and branding.

## Keep reading

Websites

Guide · 25 Nov 2026

### [White label WordPress development: what 16 providers charge and how a build runs](https://ndcompany.in/blogs/white-label-wordpress-development)

What 16 white label WordPress providers publish about prices, staging, NDAs and plugin licences, plus the checks to run before you resell a site as your own.

Read the guide

Websites

Guide · 20 Nov 2026

### [How to run a free online store that takes orders on WhatsApp](https://ndcompany.in/blogs/free-online-store-whatsapp-orders)

A free Blogger store with an Order on WhatsApp button and a product code on every piece: the setup we built for a solo jewellery maker, step by step.

Read the guide

Websites

Insight · 11 Nov 2026

### [How accessible are US small business websites? A study of 385 sites](https://ndcompany.in/blogs/small-business-website-accessibility-study)

87% of 385 US small business homepages we tested had a serious or critical accessibility failure. The most common errors by industry, what each means, how to fix it and what the ADA says.

Read the post

[More on Websites](https://ndcompany.in/blogs/topic/websites)

## How we can help

If you would rather have this handled for you, these are the services that cover it.

### [Website Design & Development](https://ndcompany.in/services/website-design-development)

Business websites, WordPress builds and landing pages, designed for phones first and set up for search before launch.

Learn more

### [SEO Services](https://ndcompany.in/services/seo-services)

A technical audit, keyword research, on-page fixes, content and link building, with a report on what changed each month.

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
      "@id": "https://ndcompany.in/blogs/core-web-vitals-explained#article",
      "headline": "Core Web Vitals explained for business owners",
      "description": "What LCP, INP and CLS measure, Google's thresholds, how websites score on phones in the US, UK and worldwide in October 2026, and how to check yours.",
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/core-web-vitals-explained-16x9.png",
          "width": 1200,
          "height": 675
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/core-web-vitals-explained-4x3.png",
          "width": 1200,
          "height": 900
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/core-web-vitals-explained-1x1.png",
          "width": 1200,
          "height": 1200
        }
      ],
      "datePublished": "2026-10-23T00:00:00+05:30",
      "dateModified": "2026-11-17T00:00:00+05:30",
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
        "@id": "https://ndcompany.in/blogs/core-web-vitals-explained#webpage"
      },
      "isPartOf": {
        "@id": "https://ndcompany.in/blogs#blog"
      },
      "articleSection": "Websites",
      "keywords": "Core Web Vitals, Google Search Console",
      "genre": "Guide",
      "wordCount": 3630,
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/blogs/core-web-vitals-explained#webpage",
      "url": "https://ndcompany.in/blogs/core-web-vitals-explained",
      "name": "Core Web Vitals explained: LCP, INP and CLS | N&D Co.",
      "description": "What LCP, INP and CLS measure, Google's thresholds, how websites score on phones in the US, UK and worldwide in October 2026, and how to check yours.",
      "isPartOf": {
        "@id": "https://ndcompany.in/#website"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/blogs/core-web-vitals-explained#breadcrumb"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/blog/core-web-vitals-explained-16x9.png",
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
      "@id": "https://ndcompany.in/blogs/core-web-vitals-explained#breadcrumb",
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
          "name": "Core Web Vitals explained"
        }
      ]
    }
  ]
}
```
