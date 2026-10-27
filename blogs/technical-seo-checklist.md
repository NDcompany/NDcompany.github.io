---
title: "Technical SEO checklist for small business sites | N&D Co."
description: "Twelve technical SEO checks for a small business website, in priority order: Search Console, indexing, robots.txt, sitemap, HTTPS, phones, speed and schema."
url: "https://ndcompany.in/blogs/technical-seo-checklist"
type: "BlogPosting"
author: "Nakshatra Ranjan Saha"
published: "2026-10-23T00:00:00+05:30"
modified: "2026-10-23T00:00:00+05:30"
image: "https://ndcompany.in/assets/blog/technical-seo-checklist-16x9.png"
---

[SEO](https://ndcompany.in/blogs/topic/seo) · Guide

# Technical SEO checklist for small business websites

Twelve checks in priority order, built on Google's own rules and 2025 and 2026 data: Search Console ownership, indexing, robots.txt, HTTPS, phones, speed in India and schema.

By [Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha), CEO & Founder Published 23 October 2026 13 min read

A technical SEO checklist for a small business website covers the checks that decide whether Google can find, read, index and show your pages: Search Console access, indexing, robots.txt, the sitemap, one address per page, HTTPS, phones, speed, JavaScript, errors and redirects, structured data, and page titles. Work through it in that order, because the later checks only matter once the early ones pass. Run the full list at launch or after a rebuild, then check the main Search Console reports once a month.

Key takeaways

- Google's [minimum for indexing](https://developers.google.com/search/docs/essentials/technical) is three things: Googlebot is not blocked, the page returns HTTP 200, and it has indexable content.
- Make the business a verified owner in Search Console, so your access never depends on someone else.
- robots.txt controls crawling, not indexing. To keep a page out of Google, put noindex on a page Google can crawl.
- Chrome 154, stable since [22 September 2026](https://developer.chrome.com/release-notes/154), asks visitors before their first visit to a public site without HTTPS.
- In September 2026, [77.3% of page views in India](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india/#monthly-202609-202609-bar) came from phones, and only [31.6% of sites](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL&client=mobile&start=2026-09-01&end=2026-09-01) gave phone visitors there a good Core Web Vitals experience.

## What is a technical SEO checklist?

Google's [Search Essentials](https://developers.google.com/search/docs/essentials/technical) set three technical requirements for indexing: Googlebot isn't blocked, the page returns an HTTP 200 status code, and it has indexable content. Meeting them does not guarantee indexing. Every check below protects those three or helps Google pick and show the right page.

You can usually skip crawl budget. Google wrote its [crawl budget guide](https://developers.google.com/crawling/docs/crawl-budget) mainly for sites with a million or more pages that change weekly, sites with 10,000 or more that change daily, and sites where Search Console lists a large share of URLs as discovered but not indexed. If Google crawls your new pages on the day you publish them, the guide says you don't need to read it.

Some basics are often missing, though. HTTP Archive's [2025 Web Almanac](https://almanac.httparchive.org/en/2025/seo) found a title on 98.5% of mobile pages but a canonical tag on only 67% and a meta description on 67.2%, and half of home pages had no structured data.

How often the technical basics are in place, mobile pages, 2025

**How often the technical basics are in place, mobile pages, 2025**

| Category | Value (%) |
| --- | --- |
| Title element | 98.5 |
| Viewport meta tag | 95.2 |
| Served over HTTPS | 91.5 |
| Meta description | 67.2 |
| Canonical tag | 67 |
| Structured data (home pages) | 50 |

*Share of mobile pages in HTTP Archive's July 2025 crawl. The structured data bar is a share of home pages. Source: [HTTP Archive, Web Almanac 2025, SEO chapter](https://almanac.httparchive.org/en/2025/seo).*

## The checklist at a glance

Each row matches a numbered section below. After the first pass, the last column is your routine.

**The twelve checks, where to look and how often**

| Check | Where to look | How often |
| --- | --- | --- |
| 1. Business is a verified owner | Search Console: Settings, Users and permissions | Once, and when staff or agencies change |
| 2. Important pages are indexed | Page indexing report, URL Inspection | Monthly |
| 3. robots.txt blocks nothing important | yoursite.com/robots.txt | After any change |
| 4. Sitemap lists canonical URLs | Sitemaps report | When pages change |
| 5. One address per page | URL Inspection | After launches and redesigns |
| 6. HTTPS everywhere | HTTPS report | Monthly |
| 7. Works on a phone | Your phone, URL Inspection screenshot | When templates change |
| 8. Core Web Vitals | Core Web Vitals report, PageSpeed Insights | Monthly |
| 9. Content visible after JavaScript | URL Inspection live test | After rebuilds |
| 10. No broken pages or bad redirects | Page indexing report | Monthly, and at relaunch |
| 11. Structured data valid and true | Rich Results Test | When templates change |
| 12. Titles, descriptions, links, favicon | Page source, search results | When you add pages |

## 1. Own your Search Console property

Search Console is [free](https://support.google.com/webmasters/answer/9128668), and most checks below use its reports. Add a [Domain property](https://support.google.com/webmasters/answer/34592), which includes all subdomains and both http and https. You verify it with a DNS record at your domain provider, and the record must [stay in place](https://support.google.com/webmasters/answer/9008080) afterwards.

Every property needs at least one verified owner, and if all of them are removed, the [other users lose access](https://support.google.com/webmasters/answer/7687615) after a grace period. If your freelancer or agency is the only verified owner, your access depends on them. Verify ownership from a Google account the business controls, then add your freelancer or agency as a Full user under Settings, Users and permissions. The business should [own its domain name and accounts](https://ndcompany.in/blogs/plan-a-business-website) for the same reason.

## 2. Check that Google has indexed your important pages

The [Page indexing report](https://support.google.com/webmasters/answer/7440203) lists the reasons pages are not indexed, such as noindex tags, redirects and duplicates. Google says not to expect every URL to be indexed, so duplicates there are normal, but important pages should not be on the list. After a fix, click Validate fix. Validation typically takes up to about two weeks.

For one page, the [URL Inspection tool](https://support.google.com/webmasters/answer/9012289) shows whether it is indexed, which canonical Google chose and, in a live test, how Google sees it now. You can request indexing there, but a request guarantees nothing, there is a daily limit, and indexing typically takes a day or so, sometimes much longer. A site: search is no way to count indexed pages, because the [site: operator](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site) doesn't necessarily return every indexed URL.

On WordPress, check Settings, Reading. The "Discourage search engines" box [adds a noindex,nofollow tag](https://wordpress.org/documentation/article/settings-reading-screen/) to your pages and [turns off the built-in sitemaps](https://make.wordpress.org/core/2020/07/22/new-xml-sitemaps-functionality-in-wordpress-5-5/). Untick it when the site goes live.

## 3. Read your robots.txt file

Open yoursite.com/robots.txt in a browser. The file is [mainly there to stop crawlers overloading your site](https://developers.google.com/search/docs/crawling-indexing/robots/intro), and it does not keep pages out of Google: a disallowed page can still be indexed if other sites link to it. To keep a page out, use noindex, which [only works](https://developers.google.com/search/docs/crawling-indexing/block-indexing) if robots.txt lets Google fetch the page.

A missing file is fine: Google treats a 4xx response (other than 429) as [no crawl restrictions](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec). A server error is worse, because Google stops crawling for the first 12 hours, then uses the last good copy for up to 30 days. Most small sites need no more than this:

```plaintext
User-agent: *
# Optional: a folder you want crawlers to skip
Disallow: /admin/

Sitemap: https://www.example.com/sitemap.xml
```

**Which control does what**

| Control | Use it to | It will not |
| --- | --- | --- |
| robots.txt Disallow | Stop crawlers fetching a path | Keep the URL out of search results |
| noindex | Keep a page out of the index | Work if robots.txt blocks the page |
| rel="canonical" | Name the preferred version of duplicate pages | Force Google's choice (it is a strong signal) |
| 301 or 308 redirect | Move a page for good | Suit a short-term move (use 302 or 307) |

### Decide what AI crawlers may fetch

You don't need llms.txt or special AI markup for Google: its [guide to AI features in Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says Google Search ignores such files. [Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers) controls whether Gemini models may use your content, and blocking it does not affect inclusion or ranking in Google Search. [OpenAI](https://developers.openai.com/api/docs/bots) says disallowing GPTBot tells it not to use your content for training, while sites that block OAI-SearchBot are not shown in ChatGPT search answers. So blocking GPTBot or Google-Extended is a choice about how AI models may use your content. Few sites have acted either way: in the [2025 Web Almanac](https://almanac.httparchive.org/en/2025/seo), 4.2% of mobile sites named GPTBot in robots.txt and 2.1% had a valid llms.txt file.

How many sites address AI crawlers, mobile sites, 2025

**How many sites address AI crawlers, mobile sites, 2025**

| Category | Value (%) |
| --- | --- |
| robots.txt answers 200 | 84.9 |
| Names GPTBot | 4.2 |
| Names ClaudeBot | 3.4 |
| Names Google-Extended | 3 |
| Names PerplexityBot | 2.7 |
| Has a valid llms.txt file | 2.1 |

*Share of mobile sites in HTTP Archive's July 2025 crawl. A crawler counts when robots.txt names it at all, to allow it or to block it. The first bar, sites whose robots.txt request succeeded, is there for scale. Source: [HTTP Archive, Web Almanac 2025, SEO chapter](https://almanac.httparchive.org/en/2025/seo).*

## 4. Submit a clean XML sitemap to Google

A sitemap lists the pages you want Google to find. A site of about 500 pages or fewer, with every important page reachable through links from the home page and few videos, images or news articles you want in search results, [may not need one](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview). We would still have one. On Shopify and WordPress it is automatic: [Shopify](https://help.shopify.com/en/manual/promoting-marketing/seo/find-site-map) generates a sitemap.xml for every store, and WordPress has made one at /wp-sitemap.xml since [version 5.5](https://make.wordpress.org/core/2020/07/22/new-xml-sitemaps-functionality-in-wordpress-5-5/). Google's [sitemap rules](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), in short:

- List only the canonical URLs you want in search results, as full addresses.
- Keep `lastmod` accurate, because Google uses it only when it is. Google ignores `priority` and `changefreq`.
- Submit the sitemap in the Sitemaps report and add a Sitemap line to robots.txt, as above.

## 5. Give every page one address

One page often loads at several addresses, for example [http and https versions, sorting and filtering options, or a demo copy of the site left open to crawlers](https://developers.google.com/search/docs/crawling-indexing/canonicalization). Some duplication is normal and not spam, but Google will pick one version as canonical. A redirect or a `rel="canonical"` link is a [strong signal](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) for the version you prefer, and a sitemap entry a weak one. Don't use robots.txt or noindex for this: noindex blocks the page from Search completely. URL Inspection shows the canonical you declared next to the one Google selected.

Online stores need the most care, because sorting and filters can give one category page many addresses. Clean URLs are part of our [online store builds](https://ndcompany.in/services/ecommerce-solutions).

## 6. Finish the move to HTTPS

Chrome 154 became the stable release on 22 September 2026. It [prompts users by default](https://developer.chrome.com/release-notes/154) when they connect to a site over http. The Chrome team's [announcement](https://blog.google/security/https-by-defau/) explains that Chrome asks for permission before the first visit to any public site without HTTPS. Nothing is blocked, but a first-time visitor sees a warning. Most traffic has moved already: the same announcement, dated 28 October 2025, put HTTPS at 98% of Chrome visits to public sites on Windows and over 99% on Android and Mac.

Check that the [HTTPS report](https://support.google.com/webmasters/answer/11396518) shows no HTTP URLs, that every http address redirects permanently to https, and that your canonical tags, sitemap and internal links use https. Keep the certificate renewing automatically: Google [prefers HTTPS pages as canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) unless there are problems such as an invalid certificate.

## 7. Check the site on a phone

Since 5 July 2024, Google has [crawled and indexed with only Googlebot Smartphone](https://developers.google.com/search/blog/2024/06/mobile-indexing-vlast-final-final.doc), and content that is not accessible at all on a mobile device can no longer be indexed. Because Google [indexes the mobile version](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing), give phones the same content, headings, titles and meta descriptions as desktop. It also won't load content that needs a swipe, a click or typing to appear.

The Mobile-Friendly Test was [retired on 1 December 2023](https://developers.google.com/search/blog/2016/05/a-new-mobile-friendly-testing-tool), so use a real phone. Try the menu, forms and call buttons, and look for anything cut off or too small to tap. A URL Inspection live test adds a screenshot of what Google rendered. This matters even more if your customers are in India, where StatCounter counted [77.3% of page views](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india/#monthly-202609-202609-bar) from phones in September 2026, against [58.99% worldwide](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/#monthly-202609-202609-bar).

## 8. Measure speed with real-user data

Google [rates a page's Core Web Vitals as good](https://web.dev/articles/vitals) when loading (LCP) takes 2.5 seconds or less, response to taps and clicks (INP) takes 200 milliseconds or less, and layout shift (CLS) is 0.1 or less. Each is measured at the 75th percentile of page loads, on mobile and desktop separately. Google's ranking systems use these measures, but Search [always aims to show the most relevant content](https://developers.google.com/search/docs/appearance/page-experience), even when the page experience is sub-par. So fix poor results without chasing a perfect score.

[PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about) shows field data from real visits over the last 28 days beside a simulated lab test, and the two can differ. When they do, go by the field data. A site with little traffic may have no field data at all.

Visitors in India get a slower web. In September 2026, HTTP Archive's Core Web Vitals report showed that [31.6% of sites](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL&client=mobile&start=2026-09-01&end=2026-09-01) gave phone visitors in India a good experience, against [52.8% worldwide](https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL&client=mobile&start=2026-09-01&end=2026-09-01). Loading was the biggest gap: 41.2% of sites had a good LCP for those visitors, against 65.6% worldwide. In the 2025 Web Almanac, an image was the largest element in view on [76% of mobile pages](https://almanac.httparchive.org/en/2025/performance), so start with your main image. Our guide explains [what LCP, INP and CLS measure and how to fix each one](https://ndcompany.in/blogs/core-web-vitals-explained).

## 9. Make sure JavaScript is not hiding content

Google can run JavaScript, but it still [calls server-side rendering or pre-rendering a great idea](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), because it makes a site faster for users and crawlers and not all bots can run JavaScript. It also warns that using JavaScript to remove a noindex tag may not work.

Links should be `<a>` elements with an `href`, which Google says is [generally the only kind it can crawl](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), so a menu built from scripted buttons can hide pages. [Googlebot](https://developers.google.com/search/docs/crawling-indexing/googlebot) reads only the first 2MB of an HTML file, uncompressed, so keep large inline scripts out of the HTML, where they could push your content and links past that point. To check, open the rendered HTML in a URL Inspection live test.

## 10. Fix errors and use the right redirects

Google [doesn't index URLs that return a 4xx code](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes) and removes ones already indexed. It slows its crawling on 5xx and 429 errors and follows up to 10 redirect hops. In the Page indexing report, watch Not found (404), Server error (5xx), Redirect error and Soft 404, which means an empty or error page that returns a success code.

When a page moves for good, use a permanent redirect (301 or 308): Google [uses it as a signal that the new URL should be canonical](https://developers.google.com/search/docs/crawling-indexing/301-redirects), and does not use a temporary one (302 or 307) that way. Before a redesign, map every old URL to its new address. Keep the redirects [for at least a year](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), and don't send many old URLs to one irrelevant page such as the home page. To close the site for a day or two, [serve a 503](https://developers.google.com/search/docs/crawling-indexing/pause-online-business). Check the [Security issues report](https://support.google.com/webmasters/answer/9044101) monthly too, because hacked pages can carry a warning label in search results.

## 11. Add structured data that matches the page

Structured data is a standard format for telling Google what a page is about, and Google [recommends JSON-LD](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data). On the home page, start with [Organization](https://developers.google.com/search/docs/appearance/structured-data/organization), which has no required properties, and [WebSite](https://developers.google.com/search/docs/appearance/site-names), which tells Google your preferred site name. A logo, if you add one, must be at least 112 by 112 pixels. Replace the placeholders with your own details:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Your Business Name",
      "url": "https://www.example.com/",
      "logo": "https://www.example.com/logo.png",
      "sameAs": ["https://www.instagram.com/yourbusiness"]
    },
    {
      "@type": "WebSite",
      "name": "Your Business Name",
      "url": "https://www.example.com/"
    }
  ]
}
</script>
```

[LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business) markup requires an address, so use it only if you have a real street address to show. If you travel to customers, keep Organization and set up a [service-area Google Business Profile](https://ndcompany.in/blogs/google-business-profile-guide). Whatever you add must be a [true representation of the visible page](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), and even correct markup does not guarantee a rich result. Two old tactics do not work: a business that controls the reviews about itself is [ineligible for review stars](https://developers.google.com/search/docs/appearance/structured-data/review-snippet), and FAQ rich results [stopped appearing](https://developers.google.com/search/updates) on 7 May 2026.

## 12. Tidy titles, descriptions, links and favicon

- Give every page its own `<title>`, as Google [asks](https://developers.google.com/search/docs/appearance/title-link).
- Write a meta description for each important page. There is [no length limit](https://developers.google.com/search/docs/appearance/snippet), but Google truncates snippets to fit the device, so put the useful part first.
- Link every page you care about from [at least one other page](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), with link text that says where it leads.
- Use a square [favicon of at least 8 by 8 pixels](https://developers.google.com/search/docs/appearance/favicon-in-search) (Google recommends larger than 48 by 48), and don't block Google from crawling it.

## Outdated advice you can skip

Each row links to the Google page that retired or rules out the advice.

**Advice about things Google has retired or ignores**

| Advice you may still see | What Google says now |
| --- | --- |
| Use the Mobile-Friendly Test | [Retired](https://developers.google.com/search/blog/2016/05/a-new-mobile-friendly-testing-tool) on 1 December 2023 |
| Improve your FID score | [Replaced by INP](https://web.dev/blog/inp-cwv-march-12) on 12 March 2024 |
| Add FAQ markup for rich results | [No longer shown](https://developers.google.com/search/updates) since 7 May 2026 |
| Set sitemap priority and changefreq | [Google ignores both](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) |
| Fill in the keywords meta tag | [Not used](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) by Google Search |
| Add llms.txt for Google's AI features | [Ignored by Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) |

## What to ask your developer or SEO provider

Whoever you hire, us included, ask these before work starts and get the answers in writing:

- Will the business be a verified owner in Search Console?
- Can you show [Core Web Vitals field data](https://ndcompany.in/blogs/core-web-vitals-explained) on phones for sites you have built, and which platform, theme or page builder will you use?
- At relaunch, will every old URL redirect to its new address?
- Who removes the staging noindex at launch, and who checks that it has gone?
- What will robots.txt block, and which structured data will you add?

Google's [guide to hiring an SEO](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) lists questions to ask, among them whether they follow the Google Search Essentials and what results they expect, in what timeframe. It says no one can guarantee a #1 ranking, and warns against claims of a "special relationship" with Google or a "priority submit". Ask us the same about [website design and development](https://ndcompany.in/services/website-design-development) or the [technical SEO audit in our SEO services](https://ndcompany.in/services/seo-services).

## Where to start

This week, make the business a verified owner in Search Console, run your home page through URL Inspection to confirm it is indexed and the live test finds no noindex, and submit your sitemap. Then give it time. Google's [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) suggests waiting a few weeks before judging changes, [Page indexing validation](https://support.google.com/webmasters/answer/7440203) typically takes up to about two weeks, and the [Core Web Vitals report](https://support.google.com/webmasters/answer/9205520) tracks a fix for 28 days. If you would rather hand the list over, ask us for a free SEO audit: [how our free SEO audit works](https://ndcompany.in/blogs/free-seo-audit-how-it-works) explains what it checks and what the report contains. More guides are on our [SEO topic page](https://ndcompany.in/blogs/topic/seo).

- [Technical SEO](https://ndcompany.in/tags#technical-seo)
- [Google Search Console](https://ndcompany.in/tags#google-search-console)
- [Core Web Vitals](https://ndcompany.in/tags/core-web-vitals)

## Share this post

- [Share on X](https://twitter.com/intent/tweet?text=Technical%20SEO%20checklist%20for%20small%20business%20websites&url=https%3A%2F%2Fndcompany.in%2Fblogs%2Ftechnical-seo-checklist&via=NDCoofficial)
- [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fndcompany.in%2Fblogs%2Ftechnical-seo-checklist)
- [Share on LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Ftechnical-seo-checklist)
- [Share on WhatsApp](https://wa.me/?text=Technical%20SEO%20checklist%20for%20small%20business%20websites%20https%3A%2F%2Fndcompany.in%2Fblogs%2Ftechnical-seo-checklist)
- [Share on Telegram](https://t.me/share/url?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Ftechnical-seo-checklist&text=Technical%20SEO%20checklist%20for%20small%20business%20websites)
- [Share on Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Ftechnical-seo-checklist&title=Technical%20SEO%20checklist%20for%20small%20business%20websites)
- [Share on Threads](https://www.threads.net/intent/post?text=Technical%20SEO%20checklist%20for%20small%20business%20websites%20https%3A%2F%2Fndcompany.in%2Fblogs%2Ftechnical-seo-checklist)
- [Share on Bluesky](https://bsky.app/intent/compose?text=Technical%20SEO%20checklist%20for%20small%20business%20websites%20https%3A%2F%2Fndcompany.in%2Fblogs%2Ftechnical-seo-checklist)
- [Share on Pinterest](https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Ftechnical-seo-checklist&media=https%3A%2F%2Fndcompany.in%2Fassets%2Fblog%2Ftechnical-seo-checklist-16x9.png&description=Technical%20SEO%20checklist%20for%20small%20business%20websites)
- [Share by email](mailto:?subject=Technical%20SEO%20checklist%20for%20small%20business%20websites&body=Twelve%20technical%20SEO%20checks%20for%20a%20small%20business%20website%2C%20in%20priority%20order%3A%20Search%20Console%2C%20indexing%2C%20robots.txt%2C%20sitemap%2C%20HTTPS%2C%20phones%2C%20speed%20and%20schema.%0A%0Ahttps%3A%2F%2Fndcompany.in%2Fblogs%2Ftechnical-seo-checklist)

[Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha)

CEO & Founder of N&D Co., a brand and growth agency in Barrackpore, Kolkata. Clients work with the founder directly. Nakshatra has worked in SEO since July 2025 and writes our guides on SEO, websites and branding.

## Keep reading

SEO

Guide · 26 Oct 2026

### [How to run a local SEO audit: a checklist for small businesses](https://ndcompany.in/blogs/local-seo-audit)

Seven checks in order, each with the Google or Bing rule behind it: search like a customer and size up competitors, the profile, matching details everywhere, your site, reviews, links and a baseline to measure against.

Read the guide

SEO

Guide · 25 Oct 2026

### [How our free SEO audit works, from request to report](https://ndcompany.in/blogs/free-seo-audit-how-it-works)

From the four-field form to the PDF in your inbox: the checks before we read your site, the ten pages we audit, how findings are scored and ranked, and what happens to your details.

Read the guide

SEO

Guide · 23 Oct 2026

### [Google Business Profile: a setup and upkeep guide for local businesses](https://ndcompany.in/blogs/google-business-profile-guide)

Who should own your profile, how verification works, what to fill in, how to ask for reviews within Google's rules, and what to check every few days and every month.

Read the guide

[More on SEO](https://ndcompany.in/blogs/topic/seo)

## How we can help

If you would rather have this handled for you, these are the services that cover it.

### [SEO Services](https://ndcompany.in/services/seo-services)

On-page, off-page, and technical SEO to improve rankings and drive organic traffic.

Learn more

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
      "@id": "https://ndcompany.in/blogs/technical-seo-checklist#article",
      "headline": "Technical SEO checklist for small business websites",
      "description": "Twelve technical SEO checks for a small business website, in priority order: Search Console, indexing, robots.txt, sitemap, HTTPS, phones, speed and schema.",
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/technical-seo-checklist-16x9.png",
          "width": 1200,
          "height": 675
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/technical-seo-checklist-4x3.png",
          "width": 1200,
          "height": 900
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/technical-seo-checklist-1x1.png",
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
        "@id": "https://ndcompany.in/blogs/technical-seo-checklist#webpage"
      },
      "isPartOf": {
        "@id": "https://ndcompany.in/blogs#blog"
      },
      "articleSection": "SEO",
      "keywords": "Technical SEO, Google Search Console, Core Web Vitals",
      "genre": "Guide",
      "wordCount": 2869,
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/blogs/technical-seo-checklist#webpage",
      "url": "https://ndcompany.in/blogs/technical-seo-checklist",
      "name": "Technical SEO checklist for small business sites | N&D Co.",
      "description": "Twelve technical SEO checks for a small business website, in priority order: Search Console, indexing, robots.txt, sitemap, HTTPS, phones, speed and schema.",
      "isPartOf": {
        "@id": "https://ndcompany.in/#website"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/blogs/technical-seo-checklist#breadcrumb"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/blog/technical-seo-checklist-16x9.png",
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
      "@id": "https://ndcompany.in/blogs/technical-seo-checklist#breadcrumb",
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
          "name": "SEO",
          "item": "https://ndcompany.in/blogs/topic/seo"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Technical SEO checklist"
        }
      ]
    }
  ]
}
```
