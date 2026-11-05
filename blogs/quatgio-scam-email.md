---
title: "Quatgio scam email aimed at web agencies | N&D Co."
description: "An email from quatgio.com offered us a client project, then sent a booking link that leads to a fake Google sign-in. What it looks like and what to do."
url: "https://ndcompany.in/blogs/quatgio-scam-email"
type: "BlogPosting"
author: "Nakshatra Ranjan Saha"
published: "2026-11-05T00:00:00+05:30"
modified: "2026-11-05T00:00:00+05:30"
image: "https://ndcompany.in/assets/blog/quatgio-scam-email-16x9.png"
---

[Websites](https://ndcompany.in/blogs/topic/websites) · News

# The Quatgio email: a fake client brief that ends at a fake Google sign-in

A "vendor sourcing" firm offered us a US client, answered our reply in 2 minutes 34 seconds, and sent a booking link that ends at a page made to look like Google sign-in.

By [Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha), CEO & Founder Published 5 November 2026 8 min read

Yes, treat it as a scam. On 5 November 2026 an email signed "Alice Green" from quatgio.com offered us a web and SEO project for a US homebuilder. When we replied, the answer came back in 2 minutes and 34 seconds with a booking link. That link opens a fake meeting calendar that asks you to "sign in with Google" on a page that is not Google. We read the pages' code without running it and never signed in. Here is what happened, what each step does, and what to do if the same email reaches you.

Key takeaways

- The first message arrived through our website's contact form: Quatgio, it said, was "sourcing a web development and SEO partner" for a client, a real homebuilder in the US.
- Its reply to our answer came 2 minutes 34 seconds later, said there were no fees, and asked us to book through the client's own "scheduling flow".
- The booking link sat on the homebuilder's real website, which had been hacked. It loaded a calendar from api-gdrive-goo.click, which sends you to auth-gstage-identify.click to "sign in with Google".
- A real Google sign-in never happens on a .click domain. If you entered your password there, change it from another device and check your Google account's security page.

## What the first message said

It came in through the contact form on this site at 7:06 PM India time, with a US phone number and a quatgio.com email address. The brief was short and believable: Quatgio was sourcing a partner for one of its clients, a homebuilder, and the work covered "website optimization, technical performance, organic and local search visibility, UX, content structure, and conversion improvements". It asked to learn more about our team.

Nothing in it was odd on its own. Agencies get briefs like this from brokers all the time, and the client was real: a homebuilder in the US with a one-page WordPress site that clearly needed work. Quatgio's own website says it is in Tampa, Florida and helps US businesses find development, SEO and marketing firms. It names no one who works there.

We don't know who runs Quatgio, or whether the business behind that website knows how its name is being used. What we can show is what the emails from quatgio.com sent us, and where that link goes.

## Our reply, and an answer 2 minutes 34 seconds later

We did what we would do for any lead. We looked at the homebuilder's website, wrote three specific problems we saw, asked four questions (budget, platform, who we would work with, and whether the broker charges agencies a fee) and offered a call. We sent it at 8:27:57 PM India time.

The answer arrived at 8:30:31 PM, from alice.green@mail1.quatgio.com. It was long, warm and well organised. It praised our review point by point, answered all four questions, said there was "no vendor-side registration, referral, sourcing, placement, or participation fee", and said the client "has not set a rigid budget range". It also said meetings go through the client's own "scheduling flow rather than external agency booking pages", gave a link, and asked us to send back "the exact email address used for the reservation".

That last request, and the speed, are what stopped us. No person reads a careful email, writes 500 words in reply and sends it in two and a half minutes. A script that fills a template with your own points can. And a broker has no reason to need the address you booked with, unless that address is what it is collecting.

## Where the booking link actually goes

We fetched each page with a command-line tool that downloads the code but runs none of it, so nothing on those pages could act on our computers. This is the chain:

**The booking link, step by step (checked 5 November 2026)**

| Step | Address | What it does |
| --- | --- | --- |
| 1. The link in the email | The homebuilder's own website, at /calendly/ with a code on the end | Without the code the page refuses to open. With it, a blank page titled "Schedule a meeting" fills the whole screen with a page from another site. |
| 2. The calendar | api-gdrive-goo.click | A booking calendar titled "Discovery Call". Its server says the page was last changed on 30 October 2026. To confirm a time, it asks you to sign in with Google. |
| 3. The sign-in | auth-gstage-identify.click (the address also contains "youtube") | A page built to look like Google's sign-in, with an email field named the way Google names its own. Its script is 334 KB and scrambled so it is hard to read, and it gives page elements random names, which makes the page harder for scanners to recognise. |
| 4. After sign-in | Back on the calendar | The calendar's own code checks with its server which email address signed in, logs it, and then "books" the meeting. |

We did not type anything into the sign-in page, so we can't tell you exactly what it does with a password. A fake Google sign-in exists to collect Google accounts, and the scrambled script mentions two-step verification, so assume it asks for your verification code as well. A code typed into a fake page helps the person running it, not you.

The homebuilder had no part in this. Someone broke into its website and added the hidden page, so the first link in the chain looked like it belonged to the client. We wrote to the homebuilder the same evening to tell them. We are not naming them here while their site is being fixed.

## Why a scam like this aims at agencies

An agency's Google account is worth more than most. Ours, like most agencies', is how we reach clients' Google Analytics, Search Console, Google Ads and Business Profiles, and sometimes their YouTube channels. Whoever takes over one agency account can reach many businesses.

A client brief is also the one email an agency will always answer. It asks for exactly what we want to show: that we read the site, that we have ideas, that we are quick. The reply to us did not try to rush us or ask for money. It flattered the work and made the next step sound like normal procedure. If you hire agencies yourself, our guide to [outsourcing web development to an agency](https://ndcompany.in/blogs/outsource-web-development-india) covers the checks that cut the other way, from the client's side.

## Signs that a client brief is a trap

1. The reply arrives within minutes and answers everything in full. People take longer than that, and brokers rarely write 500 words to an agency they have not met.
2. You must book through a page they choose, not by email or on your own booking page.
3. A booking page asks you to sign in with Google or Microsoft just to pick a time. Booking a call normally takes a name and an email address, typed in.
4. The address in the browser bar is not the company it claims to be. A real Google sign-in is never on a .click, .top or other domain that isn't Google's.
5. They ask which email address you used, after asking you to sign in with it.
6. The client's own website has a page you cannot reach from its menu. Hacked sites often hide pages like this, and they only open with a code in the link.

None of these signs proves a scam alone, but two together should stop you. The cheapest check is to type the address of the service yourself rather than follow the link, which is what [Gmail's own phishing advice](https://support.google.com/mail/answer/8253) says to do.

## If you already signed in on that page

Act from a different device, one you are sure is clean, in this order:

1. Change the Google account's password and sign out of every other session from the account's Security page.
2. Check the account's recovery email and phone number, and remove any you don't recognise. An attacker who changes them can take the account back later.
3. Check which apps have access to the account and remove anything you did not add.
4. Tell your clients if your account can reach theirs, so they can check their own access lists.
5. Sign in with a passkey from now on. Google says passkeys are "more secure against phishing" than passwords ([Google's passkey help page](https://support.google.com/accounts/answer/13548313)).

## If the hidden page is on your website

If your business's name appears in emails like this, check your own site for a page you never made. In the homebuilder's case the page sat at /calendly/, while the homepage looked normal, so the owner would not see it by browsing. Google's guides [How do I know if my site was hacked?](https://web.dev/articles/how-do-i-know-if-my-site-was-hacked) and [Help, I think I've been hacked](https://web.dev/articles/hacked) walk through the checks, and WordPress has its own [FAQ for a hacked WordPress site](https://wordpress.org/documentation/article/faq-my-site-was-hacked/).

In short: change the hosting, WordPress and email passwords, remove admin users and files you don't recognise, update WordPress and every plugin, and ask your host to scan the site. The [Hardening WordPress handbook](https://developer.wordpress.org/advanced-administration/security/hardening/) covers locking it down afterwards. A site that only holds a few pages and a gallery can also be rebuilt from scratch, which removes anything an attacker left behind. That is the kind of work our [website design and development service](https://ndcompany.in/services/website-design-development) covers.

## How to report it

In Gmail, open the message, choose More and then Report phishing, as [Google describes in its Gmail help](https://support.google.com/mail/answer/8253). You can report the fake pages themselves to [Google Safe Browsing](https://safebrowsing.google.com/safebrowsing/report_phish/), which feeds the red warning Chrome shows on dangerous pages.

## What we do with leads now

We still answer every brief that comes through our contact form, and most are real. This one changed two habits. We never sign in to anything to book a call: we use our own [booking page](https://ndcompany.in/book-a-call) or a plain email. And before we put work into a reply, we check that the person and the client are who they say they are, through a channel they did not give us. Our [security policy](https://ndcompany.in/security-policy) sets out how we handle client data and accounts.

If an email from quatgio.com, or one like it, has reached you, compare it with the steps above before you click anything. And if you are not sure about a link, send it to us and we will look at the page's code the same way, without opening it.

- [Website security](https://ndcompany.in/tags#website-security)
- [Working with an agency](https://ndcompany.in/tags/working-with-an-agency)

## Share this post

- [Share on X](https://twitter.com/intent/tweet?text=The%20Quatgio%20email%3A%20a%20fake%20client%20brief%20that%20ends%20at%20a%20fake%20Google%20sign-in&url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fquatgio-scam-email&via=NDCoofficial)
- [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fndcompany.in%2Fblogs%2Fquatgio-scam-email)
- [Share on LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fquatgio-scam-email)
- [Share on WhatsApp](https://wa.me/?text=The%20Quatgio%20email%3A%20a%20fake%20client%20brief%20that%20ends%20at%20a%20fake%20Google%20sign-in%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fquatgio-scam-email)
- [Share on Telegram](https://t.me/share/url?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fquatgio-scam-email&text=The%20Quatgio%20email%3A%20a%20fake%20client%20brief%20that%20ends%20at%20a%20fake%20Google%20sign-in)
- [Share on Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fquatgio-scam-email&title=The%20Quatgio%20email%3A%20a%20fake%20client%20brief%20that%20ends%20at%20a%20fake%20Google%20sign-in)
- [Share on Threads](https://www.threads.net/intent/post?text=The%20Quatgio%20email%3A%20a%20fake%20client%20brief%20that%20ends%20at%20a%20fake%20Google%20sign-in%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fquatgio-scam-email)
- [Share on Bluesky](https://bsky.app/intent/compose?text=The%20Quatgio%20email%3A%20a%20fake%20client%20brief%20that%20ends%20at%20a%20fake%20Google%20sign-in%20https%3A%2F%2Fndcompany.in%2Fblogs%2Fquatgio-scam-email)
- [Share on Pinterest](https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Fquatgio-scam-email&media=https%3A%2F%2Fndcompany.in%2Fassets%2Fblog%2Fquatgio-scam-email-16x9.png&description=The%20Quatgio%20email%3A%20a%20fake%20client%20brief%20that%20ends%20at%20a%20fake%20Google%20sign-in)
- [Share by email](mailto:?subject=The%20Quatgio%20email%3A%20a%20fake%20client%20brief%20that%20ends%20at%20a%20fake%20Google%20sign-in&body=An%20email%20from%20quatgio.com%20offered%20us%20a%20client%20project%2C%20then%20sent%20a%20booking%20link%20that%20leads%20to%20a%20fake%20Google%20sign-in.%20What%20it%20looks%20like%20and%20what%20to%20do.%0A%0Ahttps%3A%2F%2Fndcompany.in%2Fblogs%2Fquatgio-scam-email)

[Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha)

CEO & Founder of N&D Co., a brand and growth agency in Barrackpore, Kolkata. Nakshatra has worked in SEO since July 2025 and writes our guides on SEO, websites and branding.

## Keep reading

Websites

Insight · 5 Nov 2026

### [Arabic websites in Dubai: what 40 agencies offer, and what bilingual costs](https://ndcompany.in/blogs/bilingual-websites-dubai)

20 of 37 Dubai agencies say they build Arabic websites; only 7 have an Arabic version of their own. What they charge, what Arabic adds to the price, and what a bilingual site needs.

Read the post

Websites

Insight · 30 Oct 2026

### [How healthy are Kolkata small-business websites? We checked 901 businesses](https://ndcompany.in/blogs/kolkata-small-business-websites)

52% of Kolkata businesses on Google Maps list no website, more than one listed link in ten is dead, and only 13% of working sites score 90 or more on mobile speed. What we found and what to fix first.

Read the post

Websites

Guide · 25 Oct 2026

### [How much does a website cost in India in 2026?](https://ndcompany.in/blogs/website-cost-india)

The build price, then the running costs most quotes leave out: domain and hosting renewals, Shopify and gateway fees, the new UPI charge above ₹2,000, email and GST, with a two-year example.

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
      "@id": "https://ndcompany.in/blogs/quatgio-scam-email#article",
      "headline": "The Quatgio email: a fake client brief that ends at a fake Google sign-in",
      "description": "An email from quatgio.com offered us a client project, then sent a booking link that leads to a fake Google sign-in. What it looks like and what to do.",
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/quatgio-scam-email-16x9.png",
          "width": 1200,
          "height": 675
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/quatgio-scam-email-4x3.png",
          "width": 1200,
          "height": 900
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/quatgio-scam-email-1x1.png",
          "width": 1200,
          "height": 1200
        }
      ],
      "datePublished": "2026-11-05T00:00:00+05:30",
      "dateModified": "2026-11-05T00:00:00+05:30",
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
        "@id": "https://ndcompany.in/blogs/quatgio-scam-email#webpage"
      },
      "isPartOf": {
        "@id": "https://ndcompany.in/blogs#blog"
      },
      "articleSection": "Websites",
      "keywords": "Website security, Working with an agency",
      "genre": "News",
      "wordCount": 1720,
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/blogs/quatgio-scam-email#webpage",
      "url": "https://ndcompany.in/blogs/quatgio-scam-email",
      "name": "Quatgio scam email aimed at web agencies | N&D Co.",
      "description": "An email from quatgio.com offered us a client project, then sent a booking link that leads to a fake Google sign-in. What it looks like and what to do.",
      "isPartOf": {
        "@id": "https://ndcompany.in/#website"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/blogs/quatgio-scam-email#breadcrumb"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/blog/quatgio-scam-email-16x9.png",
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
      "@id": "https://ndcompany.in/blogs/quatgio-scam-email#breadcrumb",
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
          "name": "Quatgio scam email"
        }
      ]
    }
  ]
}
```
