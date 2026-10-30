---
title: "Optimize Content for LLMs and AI Search | N&D Co."
description: "What Google, OpenAI, Anthropic and Perplexity say about their crawlers, robots.txt, llms.txt and content, and how to check your own site for AI search."
url: "https://ndcompany.in/blogs/optimize-content-for-llms"
type: "BlogPosting"
author: "Nakshatra Ranjan Saha"
published: "2026-10-30T00:00:00+05:30"
modified: "2026-10-30T00:00:00+05:30"
image: "https://ndcompany.in/assets/blog/optimize-content-for-llms-16x9.png"
---

[SEO](https://ndcompany.in/blogs/topic/seo) · Guide

# How do you optimize content for LLMs?

Optimizing for AI answers is still SEO. What each company states about its crawlers, and how a small business should set up robots.txt, content and measurement.

By [Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha), CEO & Founder Published 30 October 2026 11 min read

To optimize content for LLMs, do what you would do for search, then check three things the AI products add. Make sure the search crawler behind each product can fetch your pages, answer the question near the top of the page in text that sits in the HTML, and say something other pages don't, under a named author and with real dates. Google states that [optimizing for generative AI search is still SEO](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide). Nobody outside these companies knows exactly how an answer picks its sources, so this guide sticks to what each one says in its own documentation.

Key takeaways

- Google says a page must be [indexed and eligible to be shown with a snippet](https://developers.google.com/search/docs/appearance/ai-features) to appear in AI Overviews or AI Mode, and that there are no additional technical requirements.
- OpenAI, Anthropic and Perplexity each run a search crawler separate from the crawler they describe as collecting training data. You can allow one and block the other.
- Google-Extended [does not affect inclusion or ranking in Google Search](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers).
- Google says you don't need an llms.txt file, special markup or content cut into small pieces to appear in Google Search.
- Google's Search Console has a report for [impressions in generative AI features](https://support.google.com/webmasters/answer/16984139).

## Is optimizing for LLMs different from SEO?

Mostly not, according to the companies that run the search products. Google's guide says that optimizing for generative AI search is optimizing for the search experience. Its list of things to do is familiar: create content that is not a copy of what everyone else says, keep a clear technical structure, and keep local business and shop details accurate.

The same guide has a "what you don't need to do" list. It says you don't need new machine readable files, AI text files, special markup or Markdown to appear in Google Search, no requirement to break content into tiny pieces, no need to write in a specific way just for generative AI search, and that seeking inauthentic mentions across the web is not as helpful as it might seem.

That does not mean nothing is new. ChatGPT, Claude and Perplexity each use their own crawlers, with their own robots.txt names. If a crawler is blocked by mistake, the product has nothing to show. That part is a technical check, and it is the first thing to do.

## Why does being crawled and indexed come first?

Each company below describes a search crawler that fetches pages for its product. Google says its AI features need a page that is indexed and eligible to show in Google Search with a snippet. It also says both features may use a technique called query fan-out, which issues several related searches across subtopics and data sources, so one question can pull in pages for several narrower searches.

OpenAI says OAI-SearchBot is used to surface websites in ChatGPT's search features, and that sites opted out of it will not be shown in ChatGPT search answers. Perplexity says PerplexityBot is designed to surface and link websites in Perplexity's search results. Anthropic says that blocking Claude-SearchBot stops content being indexed for search and may reduce visibility and accuracy in search responses.

So the first job is the one in our [technical SEO checklist](https://ndcompany.in/blogs/technical-seo-checklist): robots.txt blocks nothing important, pages return a normal 200 status, and the pages you want shown are indexed. If you have never checked, our [free SEO audit](https://ndcompany.in/blogs/free-seo-audit-how-it-works) covers these basics, and [RankGuru](https://ndcompany.in/tools/rankguru) checks a single page's on-page basics for free. Our [study of Kolkata small business websites](https://ndcompany.in/blogs/kolkata-small-business-websites) shows how often even those basics are missing.

## Which AI crawlers are there, and what does each one do?

Each company publishes more than one crawler, and the purposes differ. This table lists what each says in its own documentation.

**Crawlers named by Google, OpenAI, Anthropic and Perplexity, with their stated purpose and robots.txt token**

| Company | Crawler | What the company says it does | robots.txt token |
| --- | --- | --- | --- |
| Google | Googlebot | Google's Search crawler. A page must be indexed in Google Search to appear in AI Overviews and AI Mode | `Googlebot` |
| Google | Google-Extended | A standalone token that manages whether content Google crawls may be used for AI training and grounding. It has no separate user agent | `Google-Extended` |
| OpenAI | OAI-SearchBot | Surfaces sites in ChatGPT's search features | `OAI-SearchBot` |
| OpenAI | GPTBot | Makes OpenAI's generative AI foundation models more useful and safe | `GPTBot` |
| OpenAI | ChatGPT-User | Visits pages for certain actions a user starts in ChatGPT. OpenAI says robots.txt rules may not apply | None listed |
| Anthropic | Claude-SearchBot | Crawls the web to improve search result quality | `Claude-SearchBot` |
| Anthropic | ClaudeBot | Collects web content that could contribute to model training | `ClaudeBot` |
| Anthropic | Claude-User | Visits a site when a Claude user asks a question that needs web retrieval | `Claude-User` |
| Perplexity | PerplexityBot | Surfaces and links websites in Perplexity's search results. Perplexity says it is not used to crawl content for AI foundation models | `PerplexityBot` |
| Perplexity | Perplexity-User | Supports user actions in Perplexity. Perplexity says it generally ignores robots.txt because a user asked for the visit | `Perplexity-User` |

Sources: Google's [crawler documentation](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers), OpenAI's [bots page](https://developers.openai.com/api/docs/bots), Anthropic's [crawler help article](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) and Perplexity's [bots guide](https://docs.perplexity.ai/guides/bots). Crawlers and names change, so check those pages before you edit your file.

## What should robots.txt say about AI crawlers?

That is a business decision, and the documents give you the pieces for it. OpenAI says each of its settings is independent of the others, so a site can allow OAI-SearchBot and disallow GPTBot. It also says a change can take about 24 hours to take effect in its search systems. Disallowing GPTBot, OpenAI says, indicates that a site's content should not be used in training its generative AI foundation models. Anthropic describes the same split: blocking ClaudeBot signals that future content should be left out of training datasets.

The practical choice is between two positions:

- **Allow the search crawlers.** Allow `OAI-SearchBot`, `Claude-SearchBot` and `PerplexityBot` so your pages can be found and linked in those products. Blocking them has the effects the companies describe above.
- **Decide on the training crawlers separately.** Disallow `GPTBot` and `ClaudeBot` if you don't want your content used for training. Each company says this affects training, not its search crawler.

Google-Extended works a little differently. Google says it is a standalone token with no separate user agent, and that it does not affect a site's inclusion in Google Search or work as a ranking signal. Google's AI features page points to Google-Extended for limiting AI training and grounding in other Google systems, and to snippet controls (below) for AI Overviews and AI Mode.

Two limits matter. Robots.txt only controls crawling. [Google's robots.txt guide](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) notes that Google can't index the content of a disallowed page but may still index its URL, so use noindex on a page Google can crawl to keep it out of results. And the user-triggered visits, ChatGPT-User and Perplexity-User, are treated differently: OpenAI and Perplexity both say robots.txt rules may not apply to them.

## What kind of content do these products use?

No company publishes a recipe for being picked. What exists is Google's guidance, and it is mostly the people-first advice that predates AI answers. Google's [helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) asks whether a page provides original information, reporting, research or analysis, and says that crediting other sources does not replace the need for original effort. Google's AI guide adds a plainer version: create the content yourself, based on what you know, and don't recycle what others have said.

For a small business, that means writing what only you can write. Your prices and how you arrive at them, the steps in your own process, your local rules, results you measured on your own work. A page that restates the top ten search results adds nothing to an answer that already reads them. Our [content creation](https://ndcompany.in/services/content-creation) work starts from this question: what does this business know that a competitor's page doesn't say?

### Answer the question early

Neither Google nor the other companies we cite give a rule for page layout. We write the answer in the first paragraph because it serves a reader who wants it, and because any system that quotes a passage needs that passage to make sense alone. Use clear headings that say what the section answers. Keep one topic to a page. This is ordinary good writing, and Google says you don't need to write differently for generative AI search.

### Show who wrote it and when

Google's helpful content page says it is helpful to make it obvious to visitors who wrote a page, and it encourages accurate bylines. It also warns against changing the date of a page to look fresh when the content has not substantially changed, and against inventing author profiles. Put a real author, a published date and an updated date on guides, and change the updated date only when the page changed.

## Does structured data help with AI answers?

Google says it isn't required for generative AI search, and that there is no special schema.org markup to add. What it does ask is that structured data matches the visible text on the page. So mark up what is really there, such as your organization, an article's author and date, or product details, and don't add fields the page doesn't show. The markup still serves its older job of making pages eligible for rich results in Google Search. Treat it as housekeeping, not a lever for AI visibility.

## Does the text need to be in the HTML?

Google says it can process content in JavaScript as long as it isn't blocked, though JavaScript-heavy sites are generally more complex to optimize. OpenAI, Anthropic and Perplexity don't say in the pages we read whether their crawlers run JavaScript. We therefore can't tell you what they do, and we won't guess.

The safe habit costs little: make sure your headings, answers, prices and contact details are in the HTML the server sends, not added after load by a script. To check, open the page source (not the inspector) and search for a sentence from the page. If it isn't there, a crawler that doesn't run scripts won't see it either. Our [technical SEO checklist](https://ndcompany.in/blogs/technical-seo-checklist) has a step for checking what Google sees after JavaScript runs. Slow pages also lose visitors whatever else you do, which our [Core Web Vitals guide](https://ndcompany.in/blogs/core-web-vitals-explained) covers.

## Do you need an llms.txt file?

For Google, no. Its AI guide says you don't need new machine readable files or AI text files to appear in Google Search, and that Google Search itself doesn't use them. We found no statement in OpenAI's, Anthropic's or Perplexity's crawler documentation that they read llms.txt, so we can't say any of them does. If you publish one anyway, it costs little, but it should not take time from the page itself. (Our own site publishes an llms.txt as an extra. Nothing we have read says it has any effect on rankings or answers.)

## How can you limit what AI features show from your pages?

Google's [robots meta tag documentation](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) describes four controls that apply to its search results, AI Overviews and AI Mode included:

- `nosnippet` stops a text or video snippet being shown for the page, and Google says it also stops the content being used as direct input for AI Overviews and AI Mode.
- `data-nosnippet`, on a `span`, `div` or `section`, keeps that part of the page out of snippets.
- `max-snippet` caps the snippet length, and Google says it limits how much can be used as direct input for those features, unless you have granted permission another way.
- `noindex` keeps the page out of search results altogether.

Each has a cost: a page with `nosnippet` or `noindex` gives up the visibility you were trying to earn. Use them for pages with content you don't want excerpted, not as a default.

## How do you measure AI visibility?

Start with Google, because it gives you numbers. Its AI features page says that sites appearing in AI features are included in your overall search traffic in Search Console, in the Performance report under the Web search type. Its AI guide also points to a separate generative AI performance report, which Search Console's help describes as showing organic impressions from Google Search generative AI features over time, the pages with the most and fewest impressions, and where they come from, such as device or country. It shows data once the site has enough impressions.

For the other products, we found no documentation of a report you can pull yourself. Look at the referral sources in your analytics for visits from the AI products' own sites, and treat the numbers as a rough count, since no company we read documents how its visits show up in analytics.

If Bing matters to your customers, look at [IndexNow](https://www.indexnow.org/documentation), which lets you tell participating search engines when a URL is added, updated or deleted. Its documentation says a 200 response only means the engine received the URL, not that it will index it, and it doesn't mention Google. We send it after deploys that add or change pages, and treat it as a courtesy notice, not a guarantee. We did not cite Microsoft's own guidance on Copilot here, because we could not read its page in full.

## What do we do on ndcompany.in?

Our robots.txt allows the answer-engine crawlers by name and blocks CCBot and Bytespider. It also carries a `Content-Signal` line: `search=yes, ai-input=yes, ai-train=no`. [contentsignals.org](https://contentsignals.org/) shows how the line is written in robots.txt, with yes or no for each of three signals. Cloudflare, which introduced them, [defines them in its announcement](https://blog.cloudflare.com/content-signals-policy/): search is building a search index and providing results (not AI summaries), ai-input is feeding content into AI models, such as for generative AI search answers, and ai-train is training or fine-tuning models.

Read that line as a statement of preference. Cloudflare says the signals are not technical countermeasures against scraping, and that some companies may ignore them. We keep it because it states in a standard place what we want, and the named crawler rules above do the work for the companies that honour them.

## Where should a small business start?

1. Open `yoursite.com/robots.txt` and confirm it doesn't block Googlebot, OAI-SearchBot, Claude-SearchBot or PerplexityBot by accident.
2. Decide on GPTBot, ClaudeBot and Google-Extended as a business choice, knowing that for Google-Extended the answer does not change your Search rankings.
3. In Search Console, confirm your important pages are indexed.
4. View the source of your top pages and confirm the answer, price and contact details are in the HTML.
5. Rewrite one page that only repeats what others say, adding the facts only you have, with an author and a real date.
6. Check the generative AI performance report in Search Console after a few weeks.

If you'd like a second pair of eyes on any of this, our [SEO services](https://ndcompany.in/services/seo-services) include the technical checks above and the content work that follows them.

- [Technical SEO](https://ndcompany.in/tags/technical-seo)
- [Google Search Console](https://ndcompany.in/tags/google-search-console)

## Share this post

- [Share on X](https://twitter.com/intent/tweet?text=How%20do%20you%20optimize%20content%20for%20LLMs%3F&url=https%3A%2F%2Fndcompany.in%2Fblogs%2Foptimize-content-for-llms&via=NDCoofficial)
- [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fndcompany.in%2Fblogs%2Foptimize-content-for-llms)
- [Share on LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Foptimize-content-for-llms)
- [Share on WhatsApp](https://wa.me/?text=How%20do%20you%20optimize%20content%20for%20LLMs%3F%20https%3A%2F%2Fndcompany.in%2Fblogs%2Foptimize-content-for-llms)
- [Share on Telegram](https://t.me/share/url?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Foptimize-content-for-llms&text=How%20do%20you%20optimize%20content%20for%20LLMs%3F)
- [Share on Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Foptimize-content-for-llms&title=How%20do%20you%20optimize%20content%20for%20LLMs%3F)
- [Share on Threads](https://www.threads.net/intent/post?text=How%20do%20you%20optimize%20content%20for%20LLMs%3F%20https%3A%2F%2Fndcompany.in%2Fblogs%2Foptimize-content-for-llms)
- [Share on Bluesky](https://bsky.app/intent/compose?text=How%20do%20you%20optimize%20content%20for%20LLMs%3F%20https%3A%2F%2Fndcompany.in%2Fblogs%2Foptimize-content-for-llms)
- [Share on Pinterest](https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Foptimize-content-for-llms&media=https%3A%2F%2Fndcompany.in%2Fassets%2Fblog%2Foptimize-content-for-llms-16x9.png&description=How%20do%20you%20optimize%20content%20for%20LLMs%3F)
- [Share by email](mailto:?subject=How%20do%20you%20optimize%20content%20for%20LLMs%3F&body=What%20Google%2C%20OpenAI%2C%20Anthropic%20and%20Perplexity%20say%20about%20their%20crawlers%2C%20robots.txt%2C%20llms.txt%20and%20content%2C%20and%20how%20to%20check%20your%20own%20site%20for%20AI%20search.%0A%0Ahttps%3A%2F%2Fndcompany.in%2Fblogs%2Foptimize-content-for-llms)

[Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha)

CEO & Founder of N&D Co., a brand and growth agency in Barrackpore, Kolkata. Nakshatra has worked in SEO since July 2025 and writes our guides on SEO, websites and branding.

## Keep reading

SEO

Guide · 30 Oct 2026

### [How do schools and colleges do SEO?](https://ndcompany.in/blogs/seo-for-educational-institutions)

Parents search on phones and Google rewards clear pages, not tricks. What an institution should publish, fix and avoid, with our Kolkata data on schools and coaching centres.

Read the guide

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

[More on SEO](https://ndcompany.in/blogs/topic/seo)

## How we can help

If you would rather have this handled for you, these are the services that cover it.

### [SEO Services](https://ndcompany.in/services/seo-services)

On-page, off-page, and technical SEO to improve rankings and drive organic traffic.

Learn more

### [Content Creation](https://ndcompany.in/services/content-creation)

SEO content, blogs, and social media content.

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
      "@id": "https://ndcompany.in/blogs/optimize-content-for-llms#article",
      "headline": "How do you optimize content for LLMs?",
      "description": "What Google, OpenAI, Anthropic and Perplexity say about their crawlers, robots.txt, llms.txt and content, and how to check your own site for AI search.",
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/optimize-content-for-llms-16x9.png",
          "width": 1200,
          "height": 675
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/optimize-content-for-llms-4x3.png",
          "width": 1200,
          "height": 900
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/optimize-content-for-llms-1x1.png",
          "width": 1200,
          "height": 1200
        }
      ],
      "datePublished": "2026-10-30T00:00:00+05:30",
      "dateModified": "2026-10-30T00:00:00+05:30",
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
        "@id": "https://ndcompany.in/blogs/optimize-content-for-llms#webpage"
      },
      "isPartOf": {
        "@id": "https://ndcompany.in/blogs#blog"
      },
      "articleSection": "SEO",
      "keywords": "Technical SEO, Google Search Console",
      "genre": "Guide",
      "wordCount": 2470,
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/blogs/optimize-content-for-llms#webpage",
      "url": "https://ndcompany.in/blogs/optimize-content-for-llms",
      "name": "Optimize Content for LLMs and AI Search | N&D Co.",
      "description": "What Google, OpenAI, Anthropic and Perplexity say about their crawlers, robots.txt, llms.txt and content, and how to check your own site for AI search.",
      "isPartOf": {
        "@id": "https://ndcompany.in/#website"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/blogs/optimize-content-for-llms#breadcrumb"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/blog/optimize-content-for-llms-16x9.png",
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
      "@id": "https://ndcompany.in/blogs/optimize-content-for-llms#breadcrumb",
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
          "name": "Optimize content for LLMs"
        }
      ]
    }
  ]
}
```
