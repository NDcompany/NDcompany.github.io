---
title: "Core Web Vitals explained: LCP, INP and CLS | N&D Co."
description: "What LCP, INP and CLS measure, the marks a page must hit to pass, how websites score on phones in India and what to ask your developer to fix."
url: "https://ndcompany.in/blogs/core-web-vitals-explained"
type: "BlogPosting"
author: "Nakshatra Ranjan Saha"
published: "2026-10-23T00:00:00+05:30"
modified: "2026-10-23T00:00:00+05:30"
image: "https://ndcompany.in/assets/blog/core-web-vitals-explained-16x9.png"
---

[Websites](https://ndcompany.in/blogs/topic/websites) · Guide

# Core Web Vitals explained for business owners

September 2026 data on how websites score on phones for visitors in India, what LCP, INP and CLS measure, why pages load slowly and what to ask your developer.

By [Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha), CEO & Founder Published 23 October 2026 13 min read

Core Web Vitals are three measurements Google takes from real visits to a website. Largest Contentful Paint (LCP) is how long the main content takes to appear, Interaction to Next Paint (INP) is how quickly the page responds to a tap, click or key press, and Cumulative Layout Shift (CLS) is how much the layout jumps unexpectedly during a visit. A page passes when [each of the three is good for at least three out of four visits](https://web.dev/articles/vitals), with phones and computers judged separately. Most websites measured for visitors in India fail on phones: in September 2026, [32% of the websites in Google's Chrome data for India passed](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL), against [53% worldwide](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL).

Key takeaways

- [Google's targets](https://web.dev/articles/vitals): main content within 2.5 seconds (LCP), responses to taps and clicks within 200 milliseconds (INP) and layout shift of 0.1 or less (CLS).
- Pass or fail comes from [real Chrome visits over 28 days](https://developers.google.com/speed/docs/insights/v5/about), not from the 0 to 100 PageSpeed score.
- On phones, [32% of websites visited from India passed in September 2026](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL), against [53% worldwide](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL). Slow loading (LCP) is the most common failure.
- On slow sites, most of the wait is the server and a late start on the main image, [not the image download](https://web.dev/blog/common-misconceptions-lcp).
- Google [uses Core Web Vitals in ranking](https://developers.google.com/search/docs/appearance/page-experience) but puts relevance first. Fix them for your visitors.

## What are the three Core Web Vitals?

These are the thresholds [Search Console's Core Web Vitals report](https://support.google.com/webmasters/answer/9205520?hl=en) uses:

**Core Web Vitals thresholds in Google Search Console**

| Metric | Good | Needs improvement | Poor |
| --- | --- | --- | --- |
| Largest Contentful Paint (LCP) | 2.5 s or less | 2.5 s to 4 s | Over 4 s |
| Interaction to Next Paint (INP) | 200 ms or less | 200 ms to 500 ms | Over 500 ms |
| Cumulative Layout Shift (CLS) | 0.1 or less | 0.1 to 0.25 | Over 0.25 |

LCP is the time until [the largest image, text block or video on screen](https://web.dev/articles/lcp) has been drawn. In 2025 that element was an image, such as a banner, on [76% of mobile pages](https://almanac.httparchive.org/en/2025/performance) and text on nearly all the rest.

INP looks at every click, tap and key press in a visit and reports roughly the slowest response. Scrolling, hovering and zooming [do not count](https://web.dev/articles/inp).

CLS scores unexpected movement, such as text jumping down when an advert loads above it. It is based on [the largest burst of unexpected shifts](https://web.dev/articles/cls) in a visit, and movement within half a second of a tap or click does not count, so opening a menu is fine.

INP [replaced First Input Delay (FID) as a Core Web Vital on 12 March 2024](https://web.dev/blog/inp-cwv-march-12), so a guide that still lists FID is out of date.

## How Google decides whether a page passes

Google judges each metric at the 75th percentile of visits, [separately for phones and desktop computers](https://web.dev/articles/vitals). LCP is good when at least 75% of visits see the main content within 2.5 seconds, and INP and CLS are tested the same way. A page passes only when all three are good. When there are too few taps, clicks and key presses to measure INP, the page passes or fails on LCP and CLS alone. PageSpeed Insights looks at [the previous 28 days of visits](https://developers.google.com/speed/docs/insights/v5/about).

The data comes from the Chrome User Experience Report (CrUX): opted-in Chrome users on Android and desktop. It [leaves out Chrome on iPhone, Android apps that open pages in a WebView and other Chromium browsers such as Microsoft Edge](https://developer.chrome.com/docs/crux/methodology). Most page views in India come from the devices and browser CrUX draws on: in September 2026, phones made up [77.3% of page views in India](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india), Android accounted for [93.89% of mobile page views](https://gs.statcounter.com/os-market-share/mobile/india) and Chrome had [88.61% of page views across all devices](https://gs.statcounter.com/browser-market-share/all/india).

Search Console groups pages with a similar experience, gives each group [the status of its slowest metric](https://support.google.com/webmasters/answer/9205520?hl=en) and only includes indexed pages (our [technical SEO checklist](https://ndcompany.in/blogs/technical-seo-checklist) covers indexing). PageSpeed Insights falls back to the whole site when a page has too few visits, and shows [no real-user data](https://developers.google.com/speed/docs/insights/v5/about) when the site has too few. Google does not publish [how many visits that takes](https://developer.chrome.com/docs/crux/methodology), so treat any "visits per day" figure you read as a guess.

Search Console also [combines visits from all locations](https://support.google.com/webmasters/answer/9205520?hl=en), so heavy traffic from a country with slow connections pulls your results down.

## How websites visited from India score on phones

We pulled the figures in this section from [HTTP Archive's Technology Report](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL), which is built on CrUX. In September 2026 it covered about 746,000 websites with enough Chrome visits from India on phones to be measured (sites with too few visitors are left out). CrUX sets each visit's country [from the visitor's IP address](https://developer.chrome.com/docs/crux/methodology/dimensions), so the sites themselves can be based anywhere.

Websites passing all three Core Web Vitals on phones

**Websites passing all three Core Web Vitals on phones**

| Period | Visited from India (%) | Worldwide (%) |
| --- | --- | --- |
| Sep 2024 | 25 | 48 |
| Sep 2025 | 25 | 51 |
| Sep 2026 | 32 | 53 |

*Websites whose real Chrome visits on mobile were good for LCP, INP and CLS at the 75th percentile, each August; a site without enough INP data is judged on LCP and CLS. Visits from India are located by IP address; worldwide figures come from the same report with Geo set to ALL. Source: [HTTP Archive Technology Report (Chrome UX Report data), September 2024 to September 2026](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL).*

On phones, the share of websites visited from India passing all three rose from 25% in September 2024 to 32% in September 2026. Worldwide it rose from 48% to 53%, so the gap only narrowed from 23 points to 21.

**Share of websites rated good on phones, September 2026**

| Measure | Visited from India | Worldwide |
| --- | --- | --- |
| Loading (LCP) | 41% | 66% |
| Response to taps and clicks (INP) | 69% | 79% |
| Layout stability (CLS) | 85% | 83% |
| Server response (TTFB, not a Core Web Vital) | 22% | 46% |
| All three Core Web Vitals | 32% | 53% |

Source: the same report's [India figures](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL) and [worldwide figures](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL), and server response from its TTFB view ([India TTFB](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL&good-cwv-over-time=TTFB), [worldwide TTFB](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL&good-cwv-over-time=TTFB)).

Loading is the weak point, and server response, the wait before anything can load, is the weakest number in the table. Layout stability is fine, slightly better than worldwide. INP is the second concern. Across all the websites in CrUX it slipped for several months, and in its notes on the August 2026 data Google's CrUX team called the continued slide ["a cause for concern"](https://developer.chrome.com/docs/crux/release-notes). In September it held level: 85.4% of websites had good INP, 0.1 points more than in August.

Desktop does better: [51% of websites visited from India passed](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL), against [61% worldwide](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL). If your customers are in India, a site that passes on phones is ahead of about two in three of the websites in this data.

## How to check your site's Core Web Vitals in four steps

1. Run [PageSpeed Insights](https://pagespeed.web.dev/) on your homepage and your main enquiry page, on the mobile tab. The section headed "Discover what your real users are experiencing" [shows real Chrome visits over the last 28 days](https://web.dev/articles/optimize-cwv-business). Note which metric fails, and whether the figures are for the page or the whole site.
2. If that section is missing, either Google has too few visits to the page and the site in its data (CrUX covers [millions of popular websites, but not all of them](https://web.dev/articles/optimize-cwv-business)) or the page is [blocked from crawling or indexing](https://developers.google.com/speed/docs/insights/v5/about). Use the lab test lower down the same report, which [simulates a slow mobile connection](https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md), and a mid-range Android phone on mobile data. A developer can also collect real visitors' figures with Google's [web-vitals library](https://github.com/GoogleChrome/web-vitals) and send them to Google Analytics 4, though reading the 75th percentile there needs GA4's BigQuery export or Data API, not its built-in reports.
3. Open the [Core Web Vitals report](https://support.google.com/webmasters/answer/9205520?hl=en) in Google Search Console, one of [the tools we use](https://ndcompany.in/tools-we-use). Verify the site from an account the business owns, not your developer's (our checklist covers [setting up Search Console](https://ndcompany.in/blogs/technical-seo-checklist)). Fix groups marked Poor first, as Google recommends; a group usually shares one template, so one fix can move many pages. Once the fix is live, start validation, and Search Console watches the pages for 28 days.
4. Write down the date, the three field numbers and the element that counts as LCP, which [the lab report shows](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint), so you can tell later whether the work changed anything.

### What the PageSpeed score means

The 0 to 100 number in the lab section blends five lab measurements: [Total Blocking Time 30%, LCP 25%, CLS 25%, First Contentful Paint 10% and Speed Index 10%](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring). Total Blocking Time [stands in for INP](https://web.dev/articles/vitals), because nobody taps during a lab test. The score does not decide whether a page passes. PageSpeed Insights calls 90 or more good, but warns that good lab data ["does not necessarily mean real-user experiences will also be good"](https://developers.google.com/speed/docs/insights/v5/about). Lighthouse's documentation calls a perfect 100 "extremely challenging to achieve and not expected", and Google Search Central says chasing one just for SEO ["may not be the best use of your time"](https://developers.google.com/search/docs/appearance/page-experience).

## Why is my website slow to load? It is rarely the image file

Google's Chrome team measured where the time goes on real Chrome visits to pages whose main element is an image, and [published the results in 2024](https://web.dev/blog/common-misconceptions-lcp).

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

Server response, or time to first byte (TTFB), is [good at 0.8 seconds or less](https://web.dev/articles/ttfb). When a site is hosted in one country and its visitors are elsewhere, [the distance adds to the wait](https://web.dev/articles/optimize-cwv-business), and a content delivery network (CDN) keeps copies of the site closer to them. With good server response on only [22% of websites visited from India](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL&good-cwv-over-time=TTFB), question the hosting first.

The 1,290 milliseconds is time lost before the browser even starts the download, often because it has not found the image yet or does not know it matters most. The browser finds the image soonest when it is [a plain img tag in the HTML](https://web.dev/blog/common-misconceptions-lcp), so for the main image on every template, ask for four things:

- An img element in the HTML, not a CSS background or a slider built by a script.
- Width and height set, so its space is reserved and the text below does not jump (that protects CLS).
- No lazy-loading. Google's guidance is blunt: ["Never lazy-load your LCP image"](https://web.dev/articles/optimize-lcp).
- The attribute `fetchpriority="high"`, which tells the browser to [start loading it straight away](https://web.dev/blog/common-misconceptions-lcp).

Few sites do all four: in 2025, [16 to 17% of pages lazy-loaded their main image, 17% of mobile pages with an image as the main element used `fetchpriority="high"`, and 62% of mobile pages had at least one image without set dimensions](https://almanac.httparchive.org/en/2025/performance). Forward this line to your developer:

```html
<img src="/images/hero-1600.webp" width="1600" height="900" alt="Describe what the photo shows" fetchpriority="high">
```

## Business decisions that slow a site down

Many slow pages come from decisions made outside the code. Google's [guide for business decision makers](https://web.dev/articles/optimize-cwv-business) lists causes that owners and marketing teams control:

- Video at the top of the page, and carousels, which can make the browser download several large images at once.
- Print-quality images from media partners or design agencies. Ask for web-optimised versions.
- Code from expired campaigns left in a tag manager, which is still downloaded and compiled on every page.
- A/B testing tools that hold back the page until the test changes apply. Run them only on the pages being tested, briefly, and remove finished tests.
- Campaign links that pass through redirects or chains of link shorteners. Link to the final address, and ask whoever runs your CDN to ignore UTM parameters when caching.
- Widgets loaded on every page, such as a map that only the contact page needs. In 2025, [at least 90% of pages used one or more third parties](https://almanac.httparchive.org/en/2025/third-parties).
- Cookie notices and offer bars inserted above the content after loading. Show them as overlays instead. The consent tool matters too: in April 2024 Google's CrUX team wrote that Google had been working with consent management platforms, including OneTrust, Complianz and Axeptio, and that this had ["resulted in much improved INP for sites using these platforms"](https://developer.chrome.com/docs/crux/release-notes).

Keep the platform, theme and plugins updated too, or choose a host that does it for you, so the site gets [the improvements platforms keep making](https://web.dev/articles/optimize-cwv-business).

### Does the platform matter?

Websites visited from India passing Core Web Vitals on phones, by platform

**Websites visited from India passing Core Web Vitals on phones, by platform**

| Category | Value (%) |
| --- | --- |
| Wix | 56 |
| Shopify | 53 |
| Webflow | 39 |
| All websites | 32 |
| WordPress | 29 |
| WooCommerce (on WordPress) | 25 |
| Drupal | 21 |
| Next.js (custom builds) | 21 |
| Blogger | 7 |

*Websites visited from India, on phones, September 2026. Smaller platforms move several points from month to month (the report counts 5,454 Webflow sites against 186,717 on WordPress). Results also reflect hosting, themes, plugins and build quality. Source: [HTTP Archive Technology Report (Chrome UX Report data), September 2026](https://httparchive.org/reports/techreport/tech?tech=ALL,WordPress,Shopify,Wix,Webflow,WooCommerce,Drupal,Next.js,Blogger&geo=India&rank=ALL).*

Somewhat. WordPress runs [40.2% of all websites](https://w3techs.com/technologies/overview/content_management) (W3Techs, October 2026), so it is the platform most owners meet. Of the WordPress sites visited from India, [29% passed on phones in September 2026](https://httparchive.org/reports/techreport/tech?tech=ALL,WordPress,Shopify,Wix,Webflow,WooCommerce,Drupal,Next.js,Blogger&geo=India&rank=ALL). In the same report about half of Wix and Shopify sites passed, and only 21% of sites built with Next.js, a framework for custom JavaScript builds, so a custom build is not automatically faster.

The Web Almanac's chapter on content management systems says figures like these ["capture the combined effects of platform defaults, hosting choices, themes, plugins, and page builders"](https://almanac.httparchive.org/en/2025/cms). Choose the platform for what the site has to do (see our guide to [planning a business website](https://ndcompany.in/blogs/plan-a-business-website)), then hold whoever builds it to field results on phones. We build [online stores on Shopify, WooCommerce or custom code](https://ndcompany.in/services/ecommerce-solutions), and the same test applies to each.

## What to ask your developer or agency

These work for a new build or an existing site. Ask for specific answers, in writing.

1. Will you show me field data on mobile before and after the work, not just the PageSpeed score?
2. Where is the site hosted, and does a CDN serve visitors in India from nearby?
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

Watch out

You may read 2026 articles claiming that Google cut the good LCP threshold to 2 seconds, added new Core Web Vitals or marks down a whole domain when a quarter of its pages are slow. Google's documentation says none of this. Search Central's Core Web Vitals page still gives [2.5 seconds, 200 milliseconds and 0.1](https://developers.google.com/search/docs/appearance/core-web-vitals). The web.dev guide says stable metrics ["won't change more than once per year"](https://web.dev/articles/vitals) and that changes are announced in the documentation. Google's notice for the March 2026 core update says only that it rolled out and [was complete as of 8 April 2026](https://status.search.google.com/incidents/7eTbAa2jWdToLkraZj5y). If someone quotes a new rule, ask for the Google page that states it.

## Do Core Web Vitals affect Google rankings and sales?

Google's page experience documentation says ["Core Web Vitals are used by our ranking systems"](https://developers.google.com/search/docs/appearance/page-experience), but also that good reports do not guarantee top rankings, and that Google "always seeks to show the most relevant content, even if the page experience is sub-par". Where many helpful pages compete for a search, a great page experience "can contribute to success in Search". Google's ranking systems generally judge pages one by one, with "some site-wide assessments".

On sales, two Indian companies published results on web.dev in 2023. The bus booking site redBus reported [a 7% increase in sales](https://web.dev/case-studies/redbus-inp) after improving INP. The Economic Times cut INP nearly fourfold from close to 1,000 milliseconds, while also moving to Next.js, and reported [a 50% decrease in bounce rate and a 43% rise in pageviews on topic pages](https://web.dev/case-studies/economic-times-inp). These are the companies' own figures from several changes made at once, so do not read them as a forecast for your site.

Our reading: fix Core Web Vitals because they describe what your visitors go through, and count any ranking gain as a bonus. Faster loading will not lift a page that does not answer the search, which is why our [SEO services](https://ndcompany.in/services/seo-services) work on content and speed together. There is more on search in our [SEO guides](https://ndcompany.in/blogs/topic/seo).

## Where to start this month

1. Measure with PageSpeed Insights, Search Console and a mid-range phone on mobile data, and write the numbers down.
2. Fix the cheap things: the hero image, images without dimensions, unused scripts and widgets, and banners that push content down.
3. If server response is slow, look at hosting and a CDN before paying for anything else.
4. Start validation in Search Console as soon as the fix is live. It then watches the pages for 28 days; when it finishes, compare the field numbers with the ones you wrote down.

If you would rather hand the work over, our [website design and development service](https://ndcompany.in/services/website-design-development) checks page speed on phones and desktop browsers before a site goes live. There are [more website guides](https://ndcompany.in/blogs/topic/websites) on the blog.

- [Core Web Vitals](https://ndcompany.in/tags/core-web-vitals)
- [Google Search Console](https://ndcompany.in/tags#google-search-console)

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
- [Share by email](mailto:?subject=Core%20Web%20Vitals%20explained%20for%20business%20owners&body=What%20LCP%2C%20INP%20and%20CLS%20measure%2C%20the%20marks%20a%20page%20must%20hit%20to%20pass%2C%20how%20websites%20score%20on%20phones%20in%20India%20and%20what%20to%20ask%20your%20developer%20to%20fix.%0A%0Ahttps%3A%2F%2Fndcompany.in%2Fblogs%2Fcore-web-vitals-explained)
- 
- 

[Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha)

CEO & Founder of N&D Co., a brand and growth agency in Barrackpore, Kolkata. Clients work with the founder directly. Nakshatra has worked in SEO since July 2025 and writes our guides on SEO, websites and branding.

## Keep reading

Websites

Guide · 25 Oct 2026

### [How much does a website cost in India in 2026?](https://ndcompany.in/blogs/website-cost-india)

The build price, then the running costs most quotes leave out: domain and hosting renewals, Shopify and gateway fees, the new UPI charge above ₹2,000, email and GST, with a two-year example.

Read the guide

Websites

Guide · 25 Oct 2026

### [What does a small business website cost in 2026?](https://ndcompany.in/blogs/small-business-website-cost)

The build price, then the running costs: .com renewals, hosting after the introductory term, Shopify and card fees, business email and the ADA, with a two-year example in US dollars.

Read the guide

Websites

Guide · 23 Oct 2026

### [How to plan a business website before you hire anyone](https://ndcompany.in/blogs/plan-a-business-website)

Decide the site's one job, sketch it at phone width, keep the domain and logins in the business's name, and send every provider one brief with speed and accessibility targets.

Read the guide

[More on Websites](https://ndcompany.in/blogs/topic/websites)

## How we can help

If you would rather have this handled for you, these are the services that cover it.

### [Website Design & Development](https://ndcompany.in/services/website-design-development)

Responsive websites, e-commerce development, and SEO-optimized web solutions.

Learn more

### [SEO Services](https://ndcompany.in/services/seo-services)

On-page, off-page, and technical SEO to improve rankings and drive organic traffic.

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
      "description": "What LCP, INP and CLS measure, the marks a page must hit to pass, how websites score on phones in India and what to ask your developer to fix.",
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
      "dateModified": "2026-10-23T00:00:00+05:30",
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
      "wordCount": 2831,
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/blogs/core-web-vitals-explained#webpage",
      "url": "https://ndcompany.in/blogs/core-web-vitals-explained",
      "name": "Core Web Vitals explained: LCP, INP and CLS | N&D Co.",
      "description": "What LCP, INP and CLS measure, the marks a page must hit to pass, how websites score on phones in India and what to ask your developer to fix.",
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
