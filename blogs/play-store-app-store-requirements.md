---
title: "Play Store and App Store requirements for apps | N&D Co."
description: "What Google Play and the App Store require from a business app in 2026: developer accounts, D-U-N-S, 12-tester closed testing, privacy forms and review times."
url: "https://ndcompany.in/blogs/play-store-app-store-requirements"
type: "BlogPosting"
author: "Nakshatra Ranjan Saha"
published: "2026-10-31T00:00:00+05:30"
modified: "2026-10-31T00:00:00+05:30"
image: "https://ndcompany.in/assets/blog/play-store-app-store-requirements-16x9.png"
---

[Business](https://ndcompany.in/blogs/topic/business) · Guide

# What do Google Play and the App Store require from a business app in 2026?

Developer accounts and fees, the D-U-N-S wait, the 12-tester closed test, API 36 and Xcode 26, privacy forms, account deletion and the Apple guidelines that reject business apps, with a timeline to launch.

By [Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha), CEO & Founder Published 31 October 2026 12 min read

To publish a business app you need a developer account on each store: Google Play charges US$25 once, and the Apple Developer Program charges US$99 for each membership year. Both stores then want the same set of things before a review: a build made with their current tools, a privacy policy page, a statement of what data the app collects, and a way to delete an account if the app has sign-up. Apple also checks the app against its written guidelines, and a business app that is only a website in a frame can be refused. Each requirement below is as Google and Apple state it on 31 October 2026.

Key takeaways

- Create both developer accounts in the business's own name, not in your developer's or agency's, and give the developer a team role.
- Apple needs a D-U-N-S number for an organisation account, and Google needs one for an organisation account too. Applying is free but can take up to 30 days, so start first.
- A new personal Google Play account must run a closed test with at least 12 testers for 14 days before it can apply for production access.
- Since 31 August 2026, new Android apps and updates must target Android 16 (API level 36). Since 28 April 2026, Apple uploads must be built with Xcode 26 or later.
- Have a live privacy policy page, the Data safety form (Google) and the privacy answers (Apple) ready before you submit.
- If the app has sign-up, build account deletion into it, and give Google a web page for deletion requests too.
- Apple can refuse a website wrapped as an app, or a template app not submitted by the content provider.
- Apple says it reviews at least 50% of submissions in under 24 hours and 90% in under 48 hours. Google states no standard time, and says some reviews take up to seven days or longer.

## What do you need to open the two developer accounts?

One account per store, each with its own fee, its own identity check and its own rules about who the account holder is. Before anyone writes code, decide which legal name goes on each. That name is public: Apple shows it as the seller name of your apps on the App Store.

**Developer accounts on Google Play and the App Store, as the stores state them, checked 31 October 2026**

| Topic | Google Play | Apple App Store |
| --- | --- | --- |
| Fee | US$25 once. Prepaid cards are not accepted. The fee is not refunded if your identity information is judged invalid. | US$99 per membership year, listed in local currency during enrolment. Nonprofits, accredited education and government can ask for a fee waiver. |
| D-U-N-S number | Required for an organization account. | Required for an organization, except government entities. |
| Identity check | During setup. A government ID and a credit card, both under your legal name, may be needed. Personal owners also verify an Android device. | An Apple Account with two-factor authentication and your legal name. Organizations also need a work email and a public website on their domain. |
| Testing before the first release | New personal accounts: a closed test with at least 12 testers for 14 days. | No tester rule on the pages we checked. |

Sources: Google on [creating a Play developer account](https://support.google.com/googleplay/android-developer/answer/6112435) and [choosing an account type](https://support.google.com/googleplay/android-developer/answer/13634885); Apple on [enrolling](https://developer.apple.com/programs/enroll/) and [program enrolment requirements](https://developer.apple.com/help/account/membership/program-enrollment).

## Personal or organisation account?

Google says to choose an organization account if you are creating it "for an organization or business", and a personal one for personal use. They have the same core functionality. Some apps need an organization account: financial products and services, health apps, VPN apps and government apps.

For a business, the organisation account is the natural choice, and it has a lead time. Google says you cannot create an organization account without a D-U-N-S number, and the legal name and address in your Google payments profile must match your Dun & Bradstreet profile, or the account can be restricted. Apple wants a D-U-N-S number and a legal entity too: it does not accept DBAs, trade names or branches, and it refuses a website that is a social media page or has minimal content.

If you are a sole proprietor, Apple's individual route covers "an individual or sole proprietor/single person business". Your personal legal name is then the seller name on the App Store.

### D-U-N-S numbers

A D-U-N-S number is a nine-digit business identifier from Dun & Bradstreet. Google states that applying "is a completely free process" and that it "can take up to 30 days so you should plan ahead". Apple says they are free in most jurisdictions. Google warns that some services charge high fees for this free registration. Make it the first task of the project.

### Apple enrolment in India

Apple's enrolment page carries one note for India: enrolment "is only available through the Apple Developer app". So whoever enrols the business needs a device that can run that app. Apple shows the rupee price during enrolment; its pages do not state the figure.

## What is the Play Store closed testing rule?

Google's page says a developer with a personal account created after 13 November 2023 must run a closed test with "a minimum of 12 testers who have been opted in continuously for at least 14 days" before applying for production access. You apply from the Dashboard in Play Console with "Apply for production". Because testers must stay opted in for the whole period, our advice is to recruit more than 12.

The same page does not mention organisation accounts. It states the rule for personal accounts only and does not say whether organisation accounts are exempt, so we cannot promise that they are. We check the Dashboard of each new account for what Google asks before we give a launch date. If a personal account is the only option, plan at least two weeks of testing before the first release.

## Which tools and API levels must the app be built with?

- **Google Play.** From 31 August 2026, new apps and app updates must target Android 16 (API level 36) or higher. Existing apps must target Android 15 (API level 35) or higher to stay available to new users on newer Android versions. Google's page also offered an extension request to 1 November 2026, but a new app should simply target API 36. See Google's [target API level requirements](https://developer.android.com/google/play/requirements/target-sdk).
- **Apple.** Since 28 April 2026, apps uploaded to App Store Connect must be built with Xcode 26 or later using the iOS 26 SDK. Since 9 September 2026, iOS and iPadOS apps must target iOS 13 or later. Apple's [upcoming requirements page](https://developer.apple.com/news/upcoming-requirements/) lists each date.

An app is not finished at launch: these minimums move, so ask in any quote who updates the app for them and what it costs. Our [mobile app development](https://ndcompany.in/services/mobile-app-development) service covers it.

## What privacy paperwork do the stores want?

Both stores ask for a privacy policy page and a description of the data the app handles.

### The privacy policy

Google requires a privacy policy link "on your store listing and within your app". It must be a standard web page, not a PDF, on a public http:// or https:// URL with a valid SSL certificate, open worldwide with no login. Apple's guideline 5.1.1(i) also wants a link in App Store Connect and inside the app, and it says the policy must identify what data the app collects and how, name third parties that receive it, such as analytics tools and SDKs, and explain how long data is kept and how a user can request deletion. Write one policy page per app, in the business's name. Our [website planning guide](https://ndcompany.in/blogs/plan-a-business-website) covers the same page for a site.

### The Data safety form and the privacy labels

On Google Play, "All developers that have an app published on Google Play must complete the Data safety form", and that includes apps that collect no data. Apps active only on the internal testing track are exempt. The form counts data sent by SDKs and libraries in your app, and by a webview whose content you control.

On Apple, every app must explain its data handling in App Store Connect, including what third-party partners whose code you integrate collect. These answers appear as the privacy label on the app's page. Both stores count third-party code inside your app, so list every SDK before you fill in either form. See Google's [Data safety help page](https://support.google.com/googleplay/android-developer/answer/10787469), its [App content page](https://support.google.com/googleplay/android-developer/answer/9859455) and Apple's [app privacy help page](https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy).

Google's App content page adds more declarations: ads, how reviewers reach restricted parts of the app, target audience, high-risk permissions and a content rating. Keep a test login ready: Apple's guideline 2.1(a) asks for demo account details if the app has a login, and your back-end service switched on.

## Do you have to let users delete their account?

If the app lets people create an account, yes, on both stores.

- **Google Play** asks you to "provide users with an in-app path to delete their app accounts and associated data" and also "a web link resource where users can request app account deletion". You also answer the deletion questions in the Data safety form. Google says apps that do not comply after 31 May 2024 may face additional enforcement, and gives removal from Google Play as an example. See Google's [account deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111).
- **Apple** says in guideline 5.1.1(v): "If your app supports account creation, you must also offer account deletion within the app". Without significant account-based features, people should be able to use the app without a login.

So decide early whether the app needs an account at all. If it does, the delete function and the web page belong in the first build.

## Which Apple guidelines reject business apps?

Apple publishes its [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) in full. Apple does not say which rules cause the most rejections, so this is our selection for a small business app.

**Apple App Review Guidelines that matter most for business apps, checked 31 October 2026**

| Guideline | What it says | What it means for a business app |
| --- | --- | --- |
| 4.2 Minimum functionality | The app should include features, content and UI that "elevate it beyond a repackaged website". Under 4.2.2, apps should not primarily be marketing material or a collection of links, catalogs aside. | A website in a frame, or a brochure with a phone number, risks rejection. Give the app a job the site cannot do: ordering, booking, an account, notifications. |
| 4.2.6 Template apps | Apps from a commercialized template or app-generation service are rejected unless the provider of the app's content submits them. | Publish under the business's own developer account, with its own content. Apple accepts one app that hosts many clients, such as a restaurant finder. |
| 3.1.1 In-app purchase | Unlocking features or functionality, such as subscriptions or premium content, must use in-app purchase. | Applies when the app sells digital features or content. |
| 3.1.3(e) Goods and services outside the app | For physical goods or services consumed outside the app, you must use purchase methods other than in-app purchase, such as Apple Pay or traditional credit card entry. | A restaurant order, a shop product or a salon booking can be paid through a payment gateway. Apple names Apple Pay and cards, not UPI. We read "purchase methods other than in-app purchase" as covering a UPI gateway, but confirm before you build. |
| 4.8 Login services | An app that uses a third-party or social login for the primary account must also offer an equivalent login service that limits data to name and email, lets users keep their email private and does not collect app interactions for advertising without consent. | Adding Google Sign-In means adding a second option with those three features. An app with only its own email or phone sign-in does not use a third-party login in the sense of this rule, in our reading. |

In-app purchase is Apple's route for unlocking digital features, and guideline 3.1.3(e) covers goods and services used outside the app. Selling a thali or a haircut falls under the second. Selling a premium membership that unlocks features in the app falls under the first. Say which one you need in your brief.

## How long do the reviews take?

Apple says "App Review works around the clock, typically reviewing at least 50% of submissions in less than 24 hours and 90% in less than 48 hours", on its [App Review page](https://developer.apple.com/distribute/app-review/). Those are typical figures, not a promise. Google's [publishing status page](https://support.google.com/googleplay/android-developer/answer/6334282) gives no standard time for normal apps. It says that for certain developer accounts the review "may result in review times of up to seven days or longer in exceptional cases". Do not fix a public launch date until the app is live.

## What is the timeline from account setup to launch?

The stores state only some of these durations. The table marks where they say nothing. The build takes as long as the app needs, which we set in the written quote.

**Steps from account setup to launch and the time the stores state for each**

| Step | Time the store states | Notes |
| --- | --- | --- |
| 1. Get a D-U-N-S number | Up to 30 days (Google) | Free. Needed for both organisation accounts. |
| 2. Open the Google Play account | Not stated | US$25 and an identity check. |
| 3. Enrol in the Apple Developer Program | Not stated | US$99 a year. In India, through the Apple Developer app. |
| 4. Build and test the app | Depends on the app | On API level 36 and Xcode 26 or later. Runs alongside steps 1 to 3. |
| 5. Closed test on Google Play | At least 14 days, with at least 12 testers (new personal accounts) | The page does not mention organisation accounts. |
| 6. Forms and listing | Not stated | Privacy policy page, Data safety form, Apple privacy answers, screenshots, test login. |
| 7. Store review | Apple: 50% under 24 hours, 90% under 48 hours. Google: no standard time, up to 7 days or longer for some accounts. | Fix and resubmit if a guideline is cited. |

The D-U-N-S wait, and the closed test if it applies, cannot be rushed. Everything else can run alongside the build, so start the paperwork in week one.

## Who should own the developer accounts?

The business, in its own legal name. If your agency or freelancer holds the account, the app is published under their name and you depend on them to change it. Our guide to [outsourcing web development in India](https://ndcompany.in/blogs/outsource-web-development-india) gives the same advice for websites: your domain, hosting and accounts belong in your name.

The workable arrangement is that you create the accounts, pay the fees, and invite the developer with a team role on Play Console and on App Store Connect. Apple says the privacy questions can be answered by the Account Holder, an Admin or an App Manager, so the developer needs one of those roles for that step.

On Apple, the person who enrols an organisation becomes the Account Holder and "must have the legal authority to bind your organization to legal agreements", so it is someone with that authority, not simply the developer you hired.

## How we handle this

Store submission is included in every tier of our [mobile app development](https://ndcompany.in/services/mobile-app-development) service: the listing, the privacy answers, the Data safety form and the screenshots. The client owns the developer accounts, we get a team role, and the written quote sets what is included and who pays the store fees. For apps that need a web back office or an admin panel, our [software development](https://ndcompany.in/services/software-development) service covers that part.

Rules change, so check Google's and Apple's pages again before you rely on any date here.

- [Working with an agency](https://ndcompany.in/tags/working-with-an-agency)

## Share this post

- [Share on X](https://twitter.com/intent/tweet?text=What%20do%20Google%20Play%20and%20the%20App%20Store%20require%20from%20a%20business%20app%20in%202026%3F&url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fplay-store-app-store-requirements&via=NDCoofficial)
- [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fndcompany.in%2Fblogs%2Fplay-store-app-store-requirements)
- [Share on LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fplay-store-app-store-requirements)
- [Share on WhatsApp](https://wa.me/?text=What%20do%20Google%20Play%20and%20the%20App%20Store%20require%20from%20a%20business%20app%20in%202026%3F%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fplay-store-app-store-requirements)
- [Share on Telegram](https://t.me/share/url?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fplay-store-app-store-requirements&text=What%20do%20Google%20Play%20and%20the%20App%20Store%20require%20from%20a%20business%20app%20in%202026%3F)
- [Share on Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fplay-store-app-store-requirements&title=What%20do%20Google%20Play%20and%20the%20App%20Store%20require%20from%20a%20business%20app%20in%202026%3F)
- [Share on Threads](https://www.threads.net/intent/post?text=What%20do%20Google%20Play%20and%20the%20App%20Store%20require%20from%20a%20business%20app%20in%202026%3F%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fplay-store-app-store-requirements)
- [Share on Bluesky](https://bsky.app/intent/compose?text=What%20do%20Google%20Play%20and%20the%20App%20Store%20require%20from%20a%20business%20app%20in%202026%3F%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fplay-store-app-store-requirements)
- [Share on Pinterest](https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fplay-store-app-store-requirements&media=https%3A%2F%2Fndcompany.in%2Fassets%2Fblog%2Fplay-store-app-store-requirements-16x9.png&description=What%20do%20Google%20Play%20and%20the%20App%20Store%20require%20from%20a%20business%20app%20in%202026%3F)
- [Share by email](mailto:?subject=What%20do%20Google%20Play%20and%20the%20App%20Store%20require%20from%20a%20business%20app%20in%202026%3F&body=What%20Google%20Play%20and%20the%20App%20Store%20require%20from%20a%20business%20app%20in%202026%3A%20developer%20accounts%2C%20D-U-N-S%2C%2012-tester%20closed%20testing%2C%20privacy%20forms%20and%20review%20times.%0A%0Ahttps%3A%2F%2Fndcompany.in%2Fblogs%2Fplay-store-app-store-requirements)

[Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha)

CEO & Founder of N&D Co., a brand and growth agency in Barrackpore, Kolkata. Nakshatra has worked in SEO since July 2025 and writes our guides on SEO, websites and branding.

## Keep reading

Business

Insight · 29 Oct 2026

### [What Indian agencies charge in 2026: prices from 108 agency websites](https://ndcompany.in/blogs/agency-prices-india)

Only 35 of 101 agency websites we could read show any price. The rest of what we found: website builds from a median ₹15,000, SEO from ₹15,000 a month, and GST that almost nobody mentions.

Read the post

Business

Guide · 27 Oct 2026

### [How to outsource web development to India: a guide for US businesses](https://ndcompany.in/blogs/outsource-web-development-india)

What you can hand over, what it costs, how the hours line up with the US, what to put in writing and how to check an agency before you pay anything.

Read the guide

SEO

Guide · 31 Oct 2026

### [How much does SEO cost in India in 2026?](https://ndcompany.in/blogs/seo-cost-india)

Fifteen agencies published monthly SEO prices: a median of ₹15,000 for the cheapest tier and ₹25,000 across 37 packages. What the fee buys, which quotes to doubt, GST, and what you can do for free.

Read the guide

[More on Business](https://ndcompany.in/blogs/topic/business)

## How we can help

If you would rather have this handled for you, these are the services that cover it.

### [Mobile App Development](https://ndcompany.in/services/mobile-app-development)

Android and iOS apps for restaurants, shops, and businesses, built once and published on both stores.

Learn more

### [Software Development](https://ndcompany.in/services/software-development)

Custom web applications, CRM systems, and internal business software.

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
      "@id": "https://ndcompany.in/blogs/play-store-app-store-requirements#article",
      "headline": "What do Google Play and the App Store require from a business app in 2026?",
      "description": "What Google Play and the App Store require from a business app in 2026: developer accounts, D-U-N-S, 12-tester closed testing, privacy forms and review times.",
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/play-store-app-store-requirements-16x9.png",
          "width": 1200,
          "height": 675
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/play-store-app-store-requirements-4x3.png",
          "width": 1200,
          "height": 900
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/play-store-app-store-requirements-1x1.png",
          "width": 1200,
          "height": 1200
        }
      ],
      "datePublished": "2026-10-31T00:00:00+05:30",
      "dateModified": "2026-10-31T00:00:00+05:30",
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
        "@id": "https://ndcompany.in/blogs/play-store-app-store-requirements#webpage"
      },
      "isPartOf": {
        "@id": "https://ndcompany.in/blogs#blog"
      },
      "articleSection": "Business",
      "keywords": "Working with an agency",
      "genre": "Guide",
      "wordCount": 2595,
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/blogs/play-store-app-store-requirements#webpage",
      "url": "https://ndcompany.in/blogs/play-store-app-store-requirements",
      "name": "Play Store and App Store requirements for apps | N&D Co.",
      "description": "What Google Play and the App Store require from a business app in 2026: developer accounts, D-U-N-S, 12-tester closed testing, privacy forms and review times.",
      "isPartOf": {
        "@id": "https://ndcompany.in/#website"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/blogs/play-store-app-store-requirements#breadcrumb"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/blog/play-store-app-store-requirements-16x9.png",
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
      "@id": "https://ndcompany.in/blogs/play-store-app-store-requirements#breadcrumb",
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
          "name": "Business",
          "item": "https://ndcompany.in/blogs/topic/business"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Play Store and App Store requirements"
        }
      ]
    }
  ]
}
```
