---
title: "High ROAS but Losing Money? Check Your Ads Report | N&D Co."
description: "Why Google Ads and Meta can report a high ROAS while you lose money: revenue not profit, attribution windows, double counting, brand searches. How to check."
url: "https://ndcompany.in/blogs/check-ads-agency-report"
type: "BlogPosting"
author: "Nakshatra Ranjan Saha"
published: "2026-11-25T00:00:00+05:30"
modified: "2026-11-25T00:00:00+05:30"
image: "https://ndcompany.in/assets/blog/check-ads-agency-report-16x9.png"
---

[Marketing](https://ndcompany.in/blogs/topic/marketing) · Guide

# Your ads report shows a high return but you are losing money: how to check it

ROAS is revenue divided by ad cost, counted by each platform's own rules. Here is how to work out the return you need to break even, and how to check an agency's report against your own orders in 30 minutes.

By [Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha), CEO & Founder Published 25 November 2026 8 min read

An ads report can show a high return while your business loses money, because the ROAS in Google Ads and Meta Ads Manager is revenue divided by ad cost, counted by each platform's own rules. It leaves out your product costs, it credits sales up to 30 days after a click, it can include modelled and view-through sales, and two platforms can both claim the same order. To check a report, compare the platform's sales with your own orders for the same dates, work out the return you need to break even on your margin, and look at how the conversions are counted. This guide shows how, from Google's and Meta's own documentation, read on 15 November 2026.

Key takeaways

- Google defines its return as "Conv. value / cost" and Meta as "purchase conversion value divided by amount spent". Both are revenue, not profit.
- The return you need to break even is 1 divided by your margin. At a 25% margin after product, shipping and fees, a ROAS of 4 only covers the ad spend.
- Google Ads counts a sale up to 30 days after a click by default. Meta's default is 7 days after a click, 1 day after a view and 1 day after an engagement such as a 5-second video view.
- Each platform claims sales by its own rules. Shopify says that when a customer saw both an email and a Google ad, "each platform can count the same sale."
- Google says differences between Google Ads and Analytics of "often up to 20%" are expected. Much larger gaps point to a counting problem.

## What does ROAS in an ads report actually measure?

Google Ads calls it conversion value per cost: "Conversion value per cost = Conv. value / cost" ([Google Ads help: conversion value per cost](https://support.google.com/google-ads/answer/13405059?hl=en)). Meta calls it purchase ROAS: "The metric is calculated as purchase conversion value divided by amount spent" ([Meta Business Help Centre: purchase ROAS](https://www.facebook.com/business/help/274294333328345)). Conversion value is usually the order total. So a report showing a 600% return, or a ROAS of 6, says that for every 1 spent on ads the platform credited 6 in sales. It says nothing about what those sales cost you to fulfil.

That is why the return you need depends on your margin. If you keep 25 of every 100 in sales after the cost of the product, shipping, payment fees and returns, you need 4 in sales for every 1 spent just to cover the ads. The table shows the same sum at other margins.

**The ROAS you need to break even on ad spend, by margin (1 divided by the margin)**

| Margin after product, shipping and fees | Break-even ROAS | Result of a reported ROAS of 4, per 1,000 spent |
| --- | --- | --- |
| 50% | 2 | 4,000 in sales, 2,000 margin: 1,000 left after the ads |
| 35% | 2.9 | 4,000 in sales, 1,400 margin: 400 left |
| 25% | 4 | 4,000 in sales, 1,000 margin: nothing left |
| 15% | 6.7 | 4,000 in sales, 600 margin: 400 lost |

Those figures also assume every reported sale is real and caused by the ads. The next sections cover why that is often not quite true.

Google does offer a profit view. With cart data and the cost of goods sold from your Merchant Center feed, Google Ads can report "revenue and gross profit" ([Google Ads help: conversions with cart data](https://support.google.com/google-ads/answer/9028254?hl=en)), and conversion value rules let you adjust values for things such as margin, which Smart Bidding then uses ([Google Ads help: conversion value rules](https://support.google.com/google-ads/answer/10518330?hl=en)). If your agency bids on revenue alone, ask whether either is set up.

## Why do the ad platforms show more sales than your shop?

### They credit sales long after the click

Google Ads counts a conversion within a window after the ad interaction. For clicks "the default window is 30 days", for views of a display or video ad 1 day, and the window can be set anywhere from 1 to 90 days ([Google Ads help: conversion windows](https://support.google.com/google-ads/answer/3123169?hl=en)). Meta's default is "7-day click, 1-day view and 1-day engagement conversion", where an engagement includes a video played for 5 seconds ([Meta: about attribution settings](https://www.facebook.com/business/help/611432918970668)). A customer who saw your Instagram ad, ignored it and bought from a Google search the next day can be counted by both.

### Each platform counts the same sale

Shopify puts it simply: "Each platform credits sales by using its own rules", and in its example of a customer who clicked an email and a Google ad, "each platform can count the same sale" ([Shopify help: marketing performance](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/marketing-performance)). Add up the sales Google, Meta and your email tool each claim, and the total can be larger than your shop's real sales.

### Some sales are estimated

Both platforms model sales they cannot observe. Google says modelled conversions "estimate conversions that Google is unable to observe directly", and "Many cross-device conversions are also modeled" ([Google Ads help: modeled conversions](https://support.google.com/google-ads/answer/10081327?hl=en)). Meta says "statistical modelling may be used to account for some events, as well as for the values assigned to those events." Modelling is not wrong, but it means the report is partly an estimate.

### The dates do not line up

Google's main conversion columns are "calculated based on the time of the click, not the time of the conversion" ([Google Ads help: comparing Google Ads and Analytics data](https://support.google.com/google-ads/answer/6270625?hl=en)). A sale on 3 March from a click on 25 February shows in February in Google Ads and in March in your shop. The same page says differences, "often up to 20%, are expected due to different attribution models", and suggests the "All conv. (by conv. time)" column for a closer comparison with Analytics.

## Is the account counting some sales twice?

This is the most common real error, and the easiest to check.

- **Every or One.** Google says to select "'Every' for sales to track each purchase and 'One' for leads to prevent duplicate counts from page refreshes." A lead form counted as Every can count one enquiry several times ([Google Ads help: count settings](https://support.google.com/google-ads/answer/3438531?hl=en)).
- **Two actions for one purchase.** A Google Ads purchase tag and a purchase imported from Google Analytics, both counted, record each order twice. Google only removes duplicates "within a single conversion action", so "a single transaction may be counted twice" ([Google Ads help: duplicate conversions](https://support.google.com/google-ads/answer/16542291)). Imported Analytics events are set as secondary by default for this reason.
- **No transaction ID.** Without an order ID on the tag, a customer who reloads the thank-you page can be counted again. With one, "Google Ads will know the second conversion is a duplicate" ([Google Ads help: transaction IDs](https://support.google.com/google-ads/answer/6386790?hl=en)).
- **The wrong column.** "All conversions" includes actions you chose not to count in the main column, and view-through conversions are not in "Conversions" at all ([Google Ads help: conversion columns](https://support.google.com/google-ads/answer/3419678?hl=en)). Ask which column the report uses.

Google Ads also has a diagnostic that can warn "Your conversions may be overcounted". If it shows, ask your agency what it found.

## Are the ads taking credit for people who searched your name?

Someone who types your shop's name into Google was probably going to buy from you anyway. Ads on those searches look very profitable in a report, because the buyer already decided. Performance Max campaigns can serve on your brand name unless the account excludes it; Google says "Campaign-level brand exclusions are a better option for blocking brand traffic" ([Google Ads help: Performance Max and brand searches](https://support.google.com/google-ads/answer/14587068?hl=en)). Google does not say that brand searches inflate results; that is our reading. But a report that splits brand from non-brand searches shows you what the ads add, and a report that does not, does not.

## Are returns and cancellations taken out?

A conversion is recorded when the order is placed. If the customer returns it, the ad report still counts the sale unless someone corrects it. Google lets advertisers "Retract conversions that should no longer be counted" and "Reduce (restate) the value of conversions when you receive partial returns" ([Google Ads help: conversion adjustments](https://support.google.com/google-ads/answer/7686447?hl=en)). If you have many returns, ask whether this is done, or take your return rate off the reported sales yourself.

## How do you check a report in 30 minutes?

1. **Pick one whole month.** Note the ad spend and the sales each platform claims.
2. **Pull your own orders** for the same month from your shop, after returns and cancellations.
3. **Compare.** If Google and Meta together claim more sales than your shop took, the platforms are double counting between them. If one platform alone is far above your orders, check its conversion actions for duplicates.
4. **Work out your break-even ROAS** from your real margin, as in the table above, and compare it with the reported ROAS.
5. **Check the settings:** the conversion window, Every or One, the column the report uses, and whether brand searches are separated.
6. **Test without the ads.** If you can, pause a campaign on non-brand searches for two weeks and see what happens to your own orders. That tells you more than any attribution model.

## What are you entitled to from your ads agency?

Google's advice to advertisers who use an agency is that "The third party agency must set up a separate Ads account for you", that "At a minimum, you have the right to know the number of clicks, impressions, and the total cost of your Google ads", and to get "an official copy of your agreement in writing" ([Google Ads: working with a third party](https://support.google.com/adspolicy/answer/9457109?hl=en)). Ask for admin access to your own account too; our guide to [what access to give an agency](https://ndcompany.in/blogs/agency-access-guide) covers Google Ads, Meta and the rest. Our guide to [contracts and ownership when you outsource](https://ndcompany.in/blogs/outsourcing-nda-ip-ownership) covers what to put in writing.

## How we report on ads

Our [digital marketing service](https://ndcompany.in/services/digital-marketing) runs Google Ads and Meta ads in accounts you own, sets up conversion tracking first, and sends a monthly report on spend, clicks, cost per lead and what we change next. You pay the ad spend to Google or Meta directly, so the platform's invoice shows exactly what was spent. We do not promise a return on ad spend. If you sell online, our [Shopify marketing](https://ndcompany.in/shopify-marketing) page shows how ads fit with SEO, and our [restaurant ad ideas](https://ndcompany.in/blogs/restaurant-ad-ideas) show what we make for food businesses.

- [Online advertising](https://ndcompany.in/tags#online-advertising)
- [Working with an agency](https://ndcompany.in/tags/working-with-an-agency)

## Share this post

- [Share on X](https://twitter.com/intent/tweet?text=Your%20ads%20report%20shows%20a%20high%20return%20but%20you%20are%20losing%20money%3A%20how%20to%20check%20it&url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fcheck-ads-agency-report&via=NDCoofficial)
- [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fndcompany.in%2Fblogs%2Fcheck-ads-agency-report)
- [Share on LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fcheck-ads-agency-report)
- [Share on WhatsApp](https://wa.me/?text=Your%20ads%20report%20shows%20a%20high%20return%20but%20you%20are%20losing%20money%3A%20how%20to%20check%20it%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fcheck-ads-agency-report)
- [Share on Telegram](https://t.me/share/url?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fcheck-ads-agency-report&text=Your%20ads%20report%20shows%20a%20high%20return%20but%20you%20are%20losing%20money%3A%20how%20to%20check%20it)
- [Share on Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fcheck-ads-agency-report&title=Your%20ads%20report%20shows%20a%20high%20return%20but%20you%20are%20losing%20money%3A%20how%20to%20check%20it)
- [Share on Threads](https://www.threads.net/intent/post?text=Your%20ads%20report%20shows%20a%20high%20return%20but%20you%20are%20losing%20money%3A%20how%20to%20check%20it%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fcheck-ads-agency-report)
- [Share on Bluesky](https://bsky.app/intent/compose?text=Your%20ads%20report%20shows%20a%20high%20return%20but%20you%20are%20losing%20money%3A%20how%20to%20check%20it%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fcheck-ads-agency-report)
- [Share on Pinterest](https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fcheck-ads-agency-report&media=https%3A%2F%2Fndcompany.in%2Fassets%2Fblog%2Fcheck-ads-agency-report-16x9.png&description=Your%20ads%20report%20shows%20a%20high%20return%20but%20you%20are%20losing%20money%3A%20how%20to%20check%20it)
- [Share by email](mailto:?subject=Your%20ads%20report%20shows%20a%20high%20return%20but%20you%20are%20losing%20money%3A%20how%20to%20check%20it&body=Why%20Google%20Ads%20and%20Meta%20can%20report%20a%20high%20ROAS%20while%20you%20lose%20money%3A%20revenue%20not%20profit%2C%20attribution%20windows%2C%20double%20counting%2C%20brand%20searches.%20How%20to%20check.%0A%0Ahttps%3A%2F%2Fndcompany.in%2Fblogs%2Fcheck-ads-agency-report)

[Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha)

CEO & Founder of N&D Co., a brand and growth agency in Barrackpore, Kolkata. Nakshatra has worked in SEO since July 2025 and writes our guides on SEO, websites and branding.

## Keep reading

Marketing

Tips · 11 Nov 2026

### [12 restaurant ad examples and ideas, with food ads from our own work](https://ndcompany.in/blogs/restaurant-ad-ideas)

Twelve restaurant ad ideas for Instagram, Facebook and Google, from a one-dish price post to a free Google offer, shown with our own food creatives and each platform's sizes.

Read the post

Business

Guide · 27 Nov 2026

### [Outsourcing content writing to India: what 21 agency websites tell a buyer](https://ndcompany.in/blogs/outsource-content-writing-india)

We read the websites of 27 agencies on Semrush's India content lists. Of the 21 that sell writing, 4 publish a price, 3 mention ownership and none offers a sample, so here is what to ask.

Read the guide

SEO

Guide · 26 Nov 2026

### [How long does SEO take? What Google says, and our own first weeks](https://ndcompany.in/blogs/how-long-does-seo-take)

SEO takes months, not weeks. Here is what Google itself says about crawling, indexing and core updates, what a study of a million new pages found, and what our own new site saw in its first three weeks.

Read the guide

[More on Marketing](https://ndcompany.in/blogs/topic/marketing)

## How we can help

If you would rather have this handled for you, these are the services that cover it.

### [Digital Marketing & Performance Marketing](https://ndcompany.in/services/digital-marketing)

Google Ads and Meta ads run in your own accounts, with conversion tracking and a monthly report on spend and results.

Learn more

### [E-commerce Solutions](https://ndcompany.in/services/ecommerce-solutions)

Shopify, WooCommerce or custom stores with the catalog, payments, shipping and tax set up and tested before launch.

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
      "@id": "https://ndcompany.in/blogs/check-ads-agency-report#article",
      "headline": "Your ads report shows a high return but you are losing money: how to check it",
      "description": "Why Google Ads and Meta can report a high ROAS while you lose money: revenue not profit, attribution windows, double counting, brand searches. How to check.",
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/check-ads-agency-report-16x9.png",
          "width": 1200,
          "height": 675
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/check-ads-agency-report-4x3.png",
          "width": 1200,
          "height": 900
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/check-ads-agency-report-1x1.png",
          "width": 1200,
          "height": 1200
        }
      ],
      "datePublished": "2026-11-25T00:00:00+05:30",
      "dateModified": "2026-11-25T00:00:00+05:30",
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
        "@id": "https://ndcompany.in/blogs/check-ads-agency-report#webpage"
      },
      "isPartOf": {
        "@id": "https://ndcompany.in/blogs#blog"
      },
      "articleSection": "Marketing",
      "keywords": "Online advertising, Working with an agency",
      "genre": "Guide",
      "wordCount": 1721,
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/blogs/check-ads-agency-report#webpage",
      "url": "https://ndcompany.in/blogs/check-ads-agency-report",
      "name": "High ROAS but Losing Money? Check Your Ads Report | N&D Co.",
      "description": "Why Google Ads and Meta can report a high ROAS while you lose money: revenue not profit, attribution windows, double counting, brand searches. How to check.",
      "isPartOf": {
        "@id": "https://ndcompany.in/#website"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/blogs/check-ads-agency-report#breadcrumb"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/blog/check-ads-agency-report-16x9.png",
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
      "@id": "https://ndcompany.in/blogs/check-ads-agency-report#breadcrumb",
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
          "name": "Marketing",
          "item": "https://ndcompany.in/blogs/topic/marketing"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Checking an ads report"
        }
      ]
    }
  ]
}
```
