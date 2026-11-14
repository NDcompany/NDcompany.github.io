---
title: "AI Crawler Blocking: 4,564 Small Business Sites | N&D Co."
description: "We read the robots.txt of 4,564 small business websites in 10 countries: 3.4% block an AI crawler, two thirds through Cloudflare. 20% have an llms.txt."
url: "https://ndcompany.in/blogs/ai-crawler-blocking-study"
type: "BlogPosting"
author: "Nakshatra Ranjan Saha"
published: "2026-11-14T00:00:00+05:30"
modified: "2026-11-14T00:00:00+05:30"
image: "https://ndcompany.in/assets/blog/ai-crawler-blocking-study-16x9.png"
---

[SEO](https://ndcompany.in/blogs/topic/seo) · Insight

# How many small business websites block AI crawlers? A study of 4,564 sites

Only 3 in 100 small business websites that let Google in block an AI crawler, and two thirds of those blocks come from one Cloudflare setting. ChatGPT search is blocked by 3 in 1,000.

By [Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha), CEO & Founder Published 14 November 2026 11 min read

Very few do. On 14 November 2026 we read the robots.txt files of 4,564 independent restaurants, cafes, dentists, law firms and hair salons in ten countries. Of the 4,482 sites that let Google's crawler in, 154 (3.4%) blocked at least one AI crawler, and 105 of those 154 (68%) were not written by the business or its web designer: they were the managed robots.txt that Cloudflare adds when a site owner switches it on. ChatGPT's training crawler, GPTBot, was blocked by 3.0% of those sites. ChatGPT's search crawler, OAI-SearchBot, was blocked by 0.3%, about 3 sites in 1,000.

Key takeaways

- 3.4% of the small business sites that let Google in blocked any of the 14 AI crawlers we checked. Each training crawler was blocked by 2.7% to 3.1% of them; each AI search crawler by 0.2% to 0.3%.
- 105 of the 154 sites that blocked an AI crawler (68%) used Cloudflare's managed robots.txt, which blocks training crawlers and leaves search crawlers alone.
- 38 sites (0.8%) blocked every crawler, Google's included, and 44 (1.0%) answered the robots.txt request with a server error.
- 935 sites (20.5%) had an llms.txt file. Most were made by the website platform or an SEO plugin: 322 on Wix, 202 on Shopify and 167 from Yoast, Rank Math or All in One SEO. Google says its search does not use the file.
- 139 sites (3.0%) carried a Content-Signal line, and 106 of those came from Cloudflare's managed file.

If you want the background first, our guide to [optimizing content for LLMs](https://ndcompany.in/blogs/optimize-content-for-llms) explains what each AI company says its crawlers do and what robots.txt can and cannot control.

## How we did the study

We used the same method as our [study of 385 US small business websites](https://ndcompany.in/blogs/small-business-website-accessibility-study). The sample came from [OpenStreetMap](https://www.openstreetmap.org/), the open map anyone can edit. In ten countries (the US, the UK, Canada, Australia, Ireland, New Zealand, Germany, the Netherlands, the UAE and Singapore) we asked for every restaurant, cafe, dentist, lawyer's office and hairdresser in the main cities that lists a website and carries no brand tag, which OpenStreetMap uses to mark chains. We dropped social media profiles and link pages, removed duplicate websites, and drew up to 120 sites at random for each country and industry, with a fixed seed so the draw can be repeated. Singapore and the UAE had fewer listed sites than that.

That gave 5,144 websites. On 14 November 2026 we made two requests to each one, for `/robots.txt` and `/llms.txt`, and nothing else: no homepage, no forms, and a user agent that named us and this study rather than pretending to be a crawler. 4,564 sites answered at least one request, and every figure below is a share of those 4,564 unless it says otherwise.

We read each robots.txt the way the standard says a crawler should, [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309): a crawler follows the group that names it, falls back to the `*` group only when none does, and the longest matching rule wins. We used the open-source parser Protego for this. For each site we asked whether each crawler may fetch the homepage. Googlebot and Bingbot were our controls: a site that blocks them as well as the AI crawlers is blocking everything, not making a choice about AI.

The limits matter. Robots.txt is a request, not a lock, and we only read what it asks for. A site can also block crawlers at its server or CDN, as Cloudflare does with its bot settings, with nothing in robots.txt, and our check cannot see that. We checked the homepage rule only. And with 219 to 559 sites per country, a difference of a point or two between countries is not meaningful.

## How many small business websites block AI crawlers?

About 3 in 100. 3,483 of the 4,564 sites (76%) had a robots.txt file and 1,037 (23%) had none, which allows every crawler. Of the 4,482 sites that let Googlebot in, 154 (3.4%) disallowed at least one of the 14 AI crawlers we checked. 139 of them (90%) named the crawler in their file rather than blocking it through a general rule.

The split between training and search is the clearest result. The crawlers that collect content to train AI models were each blocked by roughly 3% of sites. The crawlers that fetch pages for AI search answers, and the ones that visit when a person asks a chatbot to read a page, were each blocked by well under half a percent.

Sites that let Google in but block each AI crawler

**Sites that let Google in but block each AI crawler**

| Category | Value (%) |
| --- | --- |
| CCBot (Common Crawl) | 3.1 |
| GPTBot (OpenAI, training) | 3 |
| Bytespider (ByteDance) | 3 |
| Google-Extended (Gemini training) | 2.9 |
| meta-externalagent (Meta) | 2.9 |
| ClaudeBot (Anthropic, training) | 2.8 |
| Amazonbot (Amazon) | 2.8 |
| Applebot-Extended (Apple training) | 2.7 |
| ChatGPT-User (on request) | 0.4 |
| OAI-SearchBot (ChatGPT search) | 0.3 |
| PerplexityBot (Perplexity search) | 0.3 |
| Claude-SearchBot (Claude search) | 0.2 |

*Share of sites whose robots.txt disallows the crawler from the homepage under RFC 9309 rules. Claude-User and Perplexity-User were blocked by the same share as ChatGPT-User or less. Source: N&D Co. study of 4,482 small business websites that allow Googlebot, 14 November 2026.*

That difference matters because the companies say the two kinds of crawler do different jobs. [OpenAI's crawler page](https://developers.openai.com/api/docs/bots) says disallowing GPTBot indicates a site's content should not be used to train its models, while sites that opt out of OAI-SearchBot will not be shown in ChatGPT search answers. [Anthropic draws the same line](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) between ClaudeBot and Claude-SearchBot. So almost every small business that blocks AI is saying "do not train on my site" and still letting AI search find it.

Google-Extended is a token, not a separate crawler. Google's [list of its crawlers](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers) says it does not affect a site's inclusion in Google Search, and AI Overviews and AI Mode are part of Search. Blocking it, as 2.9% of sites did, keeps content out of Gemini's training and grounding, not out of Google's AI answers.

## Why do most of the blocks come from Cloudflare?

Because Cloudflare writes them. 105 of the 154 sites that blocked an AI crawler had robots.txt files that start with Cloudflare's marker, `# BEGIN Cloudflare Managed content`. [Cloudflare's documentation](https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/) says it adds this managed file only when the site owner turns on its bot preference setting and sets one of its AI policies to block; otherwise a site's robots.txt is served unchanged. When it is on, Cloudflare puts its own rules above the site's own file: a `Content-signal` line saying the site allows search but not AI training, and a `Disallow: /` group for each of eight training crawlers (Amazonbot, Applebot-Extended, Bytespider, CCBot, ClaudeBot, Google-Extended, GPTBot and meta-externalagent).

That explains the shape of our chart. All 106 Cloudflare-managed files we found blocked GPTBot, and none blocked OAI-SearchBot. Only 49 sites in the whole sample, about 1 in 90 of the sites that let Google in, blocked an AI crawler with rules that did not come from Cloudflare.

**Sites that let Google in but block an AI crawler, by where the robots.txt came from**

| Source of the robots.txt | Sites | Share of the 154 |
| --- | --- | --- |
| Cloudflare managed robots.txt | 105 | 68% |
| WordPress site, rules added by hand or by a plugin | 9 | 6% |
| Squarespace | 1 | 1% |
| Any other file | 39 | 25% |
| All | 154 | 100% |

Cloudflare can also block AI crawlers at its network edge, before they reach the site, and that leaves nothing in robots.txt. Since July 2025 Cloudflare [asks every new domain whether it wants to allow AI crawlers](https://www.cloudflare.com/press-releases/2025/cloudflare-just-changed-how-ai-crawlers-scrape-the-internet-at-large/), and its [AI crawler settings](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/) can block them by request rather than by robots.txt. Sites blocked that way are not in our 3.4%, so the real share of small business sites that keep AI crawlers out is higher than robots.txt shows. If you use Cloudflare, check its AI crawler settings: they decide more than your robots.txt does.

## Which countries block AI crawlers most?

The differences are small. Singapore had the highest share, 5.2% of sites that let Google in, and the Netherlands the lowest, 2.2%. With 219 to 559 sites per country, only the gap between those two ends is worth noting, and even that rests on a dozen or so sites each.

Sites that let Google in but block any AI crawler, by country

**Sites that let Google in but block any AI crawler, by country**

| Category | Value (%) |
| --- | --- |
| Singapore | 5.2 |
| New Zealand | 4.4 |
| UAE | 4.2 |
| Ireland | 4.1 |
| US | 3.5 |
| Australia | 3.4 |
| Canada | 3.3 |
| UK | 3.1 |
| Germany | 2.7 |
| Netherlands | 2.2 |

*Sites per country: US 554, Germany 559, UK 551, Canada 545, Netherlands 516, Australia 486, Ireland 482, New Zealand 411, Singapore 241, UAE 219. Share of those that allow Googlebot. Source: N&D Co. study of 4,564 small business websites in ten countries, 14 November 2026.*

By industry the range was narrower still: cafes 4.0%, law firms 3.9%, hair salons 3.3%, dentists 3.1% and restaurants 2.9%. No kind of business stands out.

## Which sites block Google too?

A small group of sites shut out every crawler, often without meaning to. 38 sites (0.8%) had a robots.txt that disallowed Googlebot and Bingbot as well as every AI crawler. The simplest way to do that is two lines, `User-agent: *` and `Disallow: /`, a rule often used while a site is being built and easy to forget at launch. Such a site cannot have its pages crawled for Google Search at all.

Another 44 sites (1.0%) answered the robots.txt request with a server error, a 5xx status. RFC 9309 says that when a robots.txt is unreachable because of a server error, crawlers [must assume complete disallow](https://www.rfc-editor.org/rfc/rfc9309#section-2.3.1.4). [Google's robots.txt guide](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) says that for the first 12 hours of such errors Google stops crawling the site, and after that it uses the last good copy of the file it has for up to 30 days. A missing robots.txt is fine; a broken one is not. You can see how Google last fetched yours in Search Console's robots.txt report, which our [technical SEO checklist](https://ndcompany.in/blogs/technical-seo-checklist) covers.

## How many small business sites have an llms.txt?

More than we expected: 935 of 4,564 (20.5%). llms.txt is a proposed file, described at [llmstxt.org](https://llmstxt.org/), that lists a site's main pages in plain text for AI tools. We counted a file only when it answered with a normal page that was not HTML and looked like an llms.txt (a Markdown title on the first line, or a first line that names the file), because many servers answer any unknown address with their homepage or a copy of robots.txt.

Few of the 935 were written by the business. The platform or an SEO plugin made most of them:

**Who made the 935 llms.txt files we found**

| Made by | Files | How we could tell |
| --- | --- | --- |
| Wix | 322 | Wix robots.txt; 95% of Wix sites in the sample had one |
| Shopify | 202 | Opens with "# Agent Instructions"; 99% of Shopify sites had one |
| Yoast SEO | 95 | The plugin's name in the file |
| Rank Math | 37 | The plugin's name in the file |
| All in One SEO | 35 | The plugin's name in the file |
| Other WordPress sites | 48 | WordPress robots.txt, no plugin named |
| Squarespace | 6 | Squarespace robots.txt |
| No known maker | 190 | Written by hand or by a tool we could not identify |

Wix's help centre says it [generates and maintains the llms.txt file automatically](https://support.wix.com/en/article/understanding-your-sites-llms-txt-file) for sites on a premium plan with their own domain, and owners can edit it or switch it off. Shopify's developer documentation says [it manages an agents.md file for every store](https://shopify.dev/docs/storefronts/themes/architecture/templates/agents-md-liquid) and that /llms.txt mirrors it by default; merchants can replace it with their own. Only 6 of the 373 Squarespace sites (1.6%) had one, which is what a platform that does not make the file looks like. So the 20.5% says more about which website builders small businesses use than about what they chose to publish.

Does it help? For Google, no: its [guide to AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says you do not need AI text files to appear in Google Search and that Google Search does not use them. We found no statement from OpenAI, Anthropic or Perplexity that their crawlers read it either. If your platform makes one for you, there is no reason to remove it, and no reason to pay anyone to write one.

Sites with an llms.txt file, by country

**Sites with an llms.txt file, by country**

| Category | Value (%) |
| --- | --- |
| Singapore | 29.9 |
| Canada | 25.7 |
| UAE | 25.1 |
| Australia | 24.9 |
| UK | 23.6 |
| US | 23.6 |
| New Zealand | 18.7 |
| Ireland | 15.4 |
| Germany | 12.9 |
| Netherlands | 12.2 |

*A file counted when /llms.txt answered with plain text that opened with a Markdown title or named the file. Most were made by the website platform or an SEO plugin, so the share follows which platforms are popular in each country. Source: N&D Co. study of 4,564 small business websites in ten countries, 14 November 2026.*

## Do small businesses use Content Signals?

Hardly, and mostly not by choice. [Content Signals](https://contentsignals.org/) are a line in robots.txt that says what the site allows its content to be used for: `search`, `ai-input` (answers built from the page in real time) and `ai-train`. 139 sites (3.0%) had a `Content-signal` line, and 106 of them were Cloudflare's managed file, which writes `search=yes, ai-train=no` for the site. None of the 3,483 files used `__usage_ai-training`, the training preference token that [Google says it intends to support in early 2027](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers) and [Microsoft says it will honour from 1 February 2027](https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/). Neither had started on the day we checked.

## What should a small business do about AI crawlers?

Make two decisions, separately, and then check that your site says what you decided.

1. **Do you want to appear in AI search answers?** If yes, let `OAI-SearchBot`, `Claude-SearchBot` and `PerplexityBot` in, and keep letting Googlebot in, since Google's AI Overviews and AI Mode use its normal Search crawl. For a restaurant or a dentist trying to be found, there is little reason to say no.
2. **Do you mind your pages being used to train AI models?** If you do, disallow the training crawlers: `GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `meta-externalagent`, `CCBot`, `Bytespider` and `Amazonbot`. This is what most of the blocking sites in our study did, and it does not take you out of AI search.
3. **Check what your site actually says.** Open `yourdomain.com/robots.txt` in a browser. If it shows `Disallow: /` under `User-agent: *` and you are not a site in progress, fix it today. If it shows Cloudflare's marker, the rules came from your Cloudflare settings, so change them there. If the address shows an error page with a 5xx code, ask whoever hosts your site to fix it.
4. **Do not pay for an llms.txt.** If your platform makes one, leave it. If it does not, it is optional, and Google says its search ignores it.

Our [free SEO audit](https://ndcompany.in/free-seo-audit) checks robots.txt, whether pages are blocked from crawlers and how ready a site is for AI search, and emails the report as a PDF. For the rest of the basics, see our [technical SEO checklist](https://ndcompany.in/blogs/technical-seo-checklist).

## The data

The rows for all 4,564 sites that answered are in [a CSV file (ai-crawlers-2026.csv)](https://ndcompany.in/assets/data/ai-crawlers-2026.csv): country, industry, whether the site had a robots.txt (or a server error in its place), which platform made the file when we could tell, whether it carried a Content-Signal line, whether it had an llms.txt and who made it, and for each of the 16 crawlers whether the file names it and whether it allows the homepage. Sites are numbered, not named, and we do not share which number is which business. We plan to repeat the study each year with the same method, so the change can be measured as Google's and Microsoft's 2027 training controls arrive.

## How to cite this study

Please cite it as: N&D Co., "How many small business websites block AI crawlers? A study of 4,564 sites", November 2026, https://ndcompany.in/blogs/ai-crawler-blocking-study, with a link to this page. If you quote a single figure, give the base with it, for example "3.4% of 4,482 small business websites that allow Googlebot", and say that it counts robots.txt rules only, not blocks at the server or CDN.

## How we can help

We are a brand and growth agency in Kolkata, India, working with clients in the US, the Netherlands, the UAE and elsewhere. Our [SEO services](https://ndcompany.in/services/seo-services) start with an audit that covers crawling and robots.txt, and we set up AI crawler rules to match what the business has decided, not a default. Agencies that resell SEO under their own name can order the same audit unbranded from our [white label SEO](https://ndcompany.in/white-label/seo) page.

- [AI search](https://ndcompany.in/tags#ai-search)
- [Technical SEO](https://ndcompany.in/tags/technical-seo)

## Share this post

- [Share on X](https://twitter.com/intent/tweet?text=How%20many%20small%20business%20websites%20block%20AI%20crawlers%3F%20A%20study%20of%204%2C564%20sites&url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fai-crawler-blocking-study&via=NDCoofficial)
- [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fndcompany.in%2Fblogs%2Fai-crawler-blocking-study)
- [Share on LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fai-crawler-blocking-study)
- [Share on WhatsApp](https://wa.me/?text=How%20many%20small%20business%20websites%20block%20AI%20crawlers%3F%20A%20study%20of%204%2C564%20sites%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fai-crawler-blocking-study)
- [Share on Telegram](https://t.me/share/url?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fai-crawler-blocking-study&text=How%20many%20small%20business%20websites%20block%20AI%20crawlers%3F%20A%20study%20of%204%2C564%20sites)
- [Share on Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fai-crawler-blocking-study&title=How%20many%20small%20business%20websites%20block%20AI%20crawlers%3F%20A%20study%20of%204%2C564%20sites)
- [Share on Threads](https://www.threads.net/intent/post?text=How%20many%20small%20business%20websites%20block%20AI%20crawlers%3F%20A%20study%20of%204%2C564%20sites%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fai-crawler-blocking-study)
- [Share on Bluesky](https://bsky.app/intent/compose?text=How%20many%20small%20business%20websites%20block%20AI%20crawlers%3F%20A%20study%20of%204%2C564%20sites%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fai-crawler-blocking-study)
- [Share on Pinterest](https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fai-crawler-blocking-study&media=https%3A%2F%2Fndcompany.in%2Fassets%2Fblog%2Fai-crawler-blocking-study-16x9.png&description=How%20many%20small%20business%20websites%20block%20AI%20crawlers%3F%20A%20study%20of%204%2C564%20sites)
- [Share by email](mailto:?subject=How%20many%20small%20business%20websites%20block%20AI%20crawlers%3F%20A%20study%20of%204%2C564%20sites&body=We%20read%20the%20robots.txt%20of%204%2C564%20small%20business%20websites%20in%2010%20countries%3A%203.4%25%20block%20an%20AI%20crawler%2C%20two%20thirds%20through%20Cloudflare.%2020%25%20have%20an%20llms.txt.%0A%0Ahttps%3A%2F%2Fndcompany.in%2Fblogs%2Fai-crawler-blocking-study)

[Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha)

CEO & Founder of N&D Co., a brand and growth agency in Barrackpore, Kolkata. Nakshatra has worked in SEO since July 2025 and writes our guides on SEO, websites and branding.

## Keep reading

SEO

Guide · 11 Nov 2026

### [White label SEO explained: how agencies resell SEO safely](https://ndcompany.in/blogs/white-label-seo-explained)

We read 16 white label SEO provider websites. 15 offer reports under your brand, 3 publish a monthly price and none says who keeps the client's Google accounts. How the model works and what to put in writing.

Read the guide

SEO

Guide · 6 Nov 2026

### [How to choose an SEO agency in India: what 37 agency websites show](https://ndcompany.in/blogs/choose-seo-agency-india)

Dollar prices, ranking promises, links sold by count, lock-in contracts and account ownership on 37 Indian SEO agency websites, with a checklist for your first call.

Read the guide

SEO

Guide · 31 Oct 2026

### [How much does SEO cost in India in 2026?](https://ndcompany.in/blogs/seo-cost-india)

Fifteen agencies published monthly SEO prices: a median of ₹15,000 for the cheapest tier and ₹25,000 across 37 packages. What the fee buys, which quotes to doubt, GST, and what you can do for free.

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
      "@id": "https://ndcompany.in/blogs/ai-crawler-blocking-study#article",
      "headline": "How many small business websites block AI crawlers? A study of 4,564 sites",
      "description": "We read the robots.txt of 4,564 small business websites in 10 countries: 3.4% block an AI crawler, two thirds through Cloudflare. 20% have an llms.txt.",
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/ai-crawler-blocking-study-16x9.png",
          "width": 1200,
          "height": 675
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/ai-crawler-blocking-study-4x3.png",
          "width": 1200,
          "height": 900
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/ai-crawler-blocking-study-1x1.png",
          "width": 1200,
          "height": 1200
        }
      ],
      "datePublished": "2026-11-14T00:00:00+05:30",
      "dateModified": "2026-11-14T00:00:00+05:30",
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
        "@id": "https://ndcompany.in/blogs/ai-crawler-blocking-study#webpage"
      },
      "isPartOf": {
        "@id": "https://ndcompany.in/blogs#blog"
      },
      "articleSection": "SEO",
      "keywords": "AI search, Technical SEO",
      "genre": "Insight",
      "wordCount": 2461,
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/blogs/ai-crawler-blocking-study#webpage",
      "url": "https://ndcompany.in/blogs/ai-crawler-blocking-study",
      "name": "AI Crawler Blocking: 4,564 Small Business Sites | N&D Co.",
      "description": "We read the robots.txt of 4,564 small business websites in 10 countries: 3.4% block an AI crawler, two thirds through Cloudflare. 20% have an llms.txt.",
      "isPartOf": {
        "@id": "https://ndcompany.in/#website"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/blogs/ai-crawler-blocking-study#breadcrumb"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/blog/ai-crawler-blocking-study-16x9.png",
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
      "@id": "https://ndcompany.in/blogs/ai-crawler-blocking-study#breadcrumb",
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
          "name": "AI crawler study"
        }
      ]
    }
  ]
}
```
