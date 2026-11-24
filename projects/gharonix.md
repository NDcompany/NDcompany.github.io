---
title: "Gharonix case study: a Lucknow property portal web app"
description: "How we built Gharonix, a property portal for Lucknow: listings, a live map, listing checks and UP stamp duty tools. It now logs 4,500 to 5,300 leads a month."
url: "https://ndcompany.in/projects/gharonix"
type: "CreativeWork"
image: "https://ndcompany.in/assets/projects/gharonix-16x9.png"
---

Software · Gharonix

# Gharonix: a property marketplace built for Lucknow

A property marketplace for Lucknow: listings checked before they go live, 62 locality pages, a live map, buyer tools and an admin console. Gharonix counts 4,500 to 5,300 leads a month.

- **Client:** Gharonix
- **Place:** Lucknow, Uttar Pradesh
- **Services:** [Software Development](https://ndcompany.in/services/software-development), [Website Design & Development](https://ndcompany.in/services/website-design-development), [Brand Identity Design](https://ndcompany.in/services/brand-identity-design), [SEO Services](https://ndcompany.in/services/seo-services), [Content Creation](https://ndcompany.in/services/content-creation)
- **Categories:** [Software](https://ndcompany.in/projects/category/software), [Websites](https://ndcompany.in/projects?category=web), [Branding](https://ndcompany.in/projects/category/branding), [SEO](https://ndcompany.in/projects?category=seo)
- **Leads:** 4,500 to 5,300 a month, by Gharonix's count
- **Locality pages:** 62
- **Built with:** Next.js, PostgreSQL, Prisma, Vercel

## Overview

Gharonix is a property marketplace for one city, Lucknow. Its founder, Mumtaz Ahmad, wanted what the site now calls "Lucknow ki apni property website", Lucknow's own property website, and before it the business had nothing online. N&D Co. built the whole product: the web app, the logo and brand, the search and content work, and the hosting, which we still run; the site's own [About page](https://www.gharonix.com/about) says it is developed and maintained by N&D Co. The live site is at [gharonix.com](https://www.gharonix.com/).

Buyers search homes, flats, plots, villas and commercial property by type, locality and budget, see them on a live map of the city, save and compare them, and contact the seller by chat or WhatsApp. Sellers list for free. Every listing is checked by Gharonix's team before it goes live. A valuation estimator, a home loan EMI calculator, an Uttar Pradesh stamp duty calculator and a land area converter answer the money questions on the same site.

Gharonix's team now counts 4,500 to 5,300 leads a month across every channel: WhatsApp, calls, the site's chat and forms, and walk-ins. That is their own count, and the website is one part of the business that produces it. The work covers [software development](https://ndcompany.in/services/software-development), [website design and development](https://ndcompany.in/services/website-design-development), [brand identity design](https://ndcompany.in/services/brand-identity-design), [SEO](https://ndcompany.in/services/seo-services) and [content creation](https://ndcompany.in/services/content-creation).

[Open it](https://www.gharonix.com/)

## About Gharonix

Gharonix describes itself as a Lucknow focused marketplace for buyers, sellers and investors looking at flats, homes, plots and commercial property in the city. It charges no brokerage to buyers, lets sellers list for free, and says each listing is reviewed before it is published, usually within 1 to 4 hours.

Its listings are written the way Lucknow sells property. Titles mix Hindi and English ("Vijayant Khand-3, Gomti Nagar mein 1250 Sqft ka shandar North Facing, Park Facing Makan"), and they name the things local buyers ask about first: LDA or Nagar Nigam approval, the nearest chauraha, park facing, the road a plot sits on.

Sources: [Gharonix: About](https://www.gharonix.com/about), [Gharonix: Frequently asked questions](https://www.gharonix.com/faq).

## The problem we were solving

Gharonix started with nothing online, and its listings travelled by WhatsApp, phone calls and the big national portals. Each of those leaves a gap for one city's buyers and sellers:

- A WhatsApp forward has no search. A buyer cannot filter forty forwarded flats by budget or locality, and the photos and details scatter across chats.
- A national portal is built for every city at once. Lucknow is one filter among hundreds, and nothing on the listing explains the locality, its prices or the local paperwork.
- Buyers have to leave to do the maths. EMI, Uttar Pradesh stamp duty and bigha or biswa conversions each meant another site.
- Trust is thin. Without a check before publishing, nothing stops the same property appearing twice at two prices, or a photo being copied into another listing.
- Sellers had nowhere of their own to list, and the business had no single place to see listings, enquiries and users together.

So the brief was a marketplace that starts from Lucknow's map and localities, keeps search, shortlist, maths and contact in one place, checks every listing, and gives Gharonix's team one console to run it.

## What we did

Each part of the work, with the service behind it.

[Software Development](https://ndcompany.in/services/software-development)

### A marketplace web app for buyers, sellers and its own team

Gharonix is a Next.js and React app written in TypeScript, with a PostgreSQL database reached through Prisma, hosted on Vercel. Buyers and sellers share one account dashboard, administrators get a console of their own, and everyone signs in with Google, so nobody has to make up another password. Chat between buyers and sellers is live, through Pusher, and every property page also has a WhatsApp button, so a seller can answer from the app they already use.

The admin console is where the trust comes from. A new listing waits as Pending until the team approves it, rejects it or marks it Featured; photos get a Gharonix watermark so they cannot be lifted to another site as easily; and each listing shows a check result before it is published. The same console holds the enquiry and lead inbox, user roles and suspensions, and review moderation.

- Property search with type, locality and budget filters, property pages and featured listings
- Buyer dashboard: saved properties, comparison, enquiries sent and activity
- Seller listing flow: 5 to 10 photos, a chosen cover photo and a 4:3 crop at upload
- Admin console: listing approval, rejection and featuring, photo watermarking, lead inbox, user roles and review moderation
- A live property map of Lucknow with price markers and a locality selector
- Valuation estimator, home loan EMI calculator, UP stamp duty calculator and land area converter
- Google sign-in, live chat through Pusher and WhatsApp contact on every listing
- Hosting on Vercel, security headers and ongoing maintenance

*Every listing passes through this queue before buyers see it. Lister names are removed from this capture.*

*The four parts of the admin console.*

*A buyer's dashboard keeps the shortlist and enquiries together.*

*The dashboard on a phone.*

[Website Design & Development](https://ndcompany.in/services/website-design-development)

### A design that starts from the city

The look comes from Lucknow itself: deep maroon and gold on a warm cream, serif headings, and Lucknow's Nawabi skyline behind the banners. On a phone the home page opens on the search box, with type and locality filters and a bottom bar for Home, Search, Localities and Account, so the first tap is a search.

Search works two ways because people do. Some start from a home, so listing cards lead with the photo, the price, the locality and the BHK. Others start from a part of the city, so the home page shows popular localities next to featured properties, and the map shows where everything sits.

- Responsive design for phones, tablets and desktops
- Home page, listings, property pages, locality directory, map, tools, guides, FAQ and legal pages
- A sign-in page that explains what an account is for before asking for it
- A cookie notice with an essential only choice

*On a phone, the home page opens on search.*

*Two ways in: a property, or a part of the city.*

*Listing cards lead with what buyers compare first.*

*The live map puts every listing on the city.*

*Sign-in says what an account gives before asking for it.*

[Brand Identity Design](https://ndcompany.in/services/brand-identity-design)

### The GharOnix logo

Ghar is Hindi and Urdu for home, and the logo says it twice: a G and an O joined into one mark, under a gold roof with a chimney and a four pane window. The gold and black mark works on the site's maroon and cream, and the wordmark spells the name GharOnix so the two halves read at a glance.

- The GharOnix logo and wordmark
- Colours and type for the site: maroon, gold and cream, with serif headings

*The GharOnix mark: G and O under one roof.*

[SEO Services](https://ndcompany.in/services/seo-services)

### Pages for every part of Lucknow

People search property in Lucknow by locality: flats in Gomti Nagar, plots on Sitapur Road, houses in Jankipuram. So the site has a page for each one, 62 of them in its sitemap on 21 November 2026, from Aashiana Colony and Alambagh to Sushant Golf City and the roads out of the city (Faizabad Road, Kursi Road, Raebareli Road). Each locality page lists the property in it and links to the map.

The rest is groundwork. Property addresses carry the type, size, locality and price in words, such as /properties/2200-sqft-premium-3bhk-lda-house-for-sale-sector-a-jankipuram-7137. The sitemap lists the public pages, robots.txt keeps search engines out of the dashboards, admin and API, and the site describes itself to search engines as an organisation serving Lucknow, Uttar Pradesh.

- 62 locality pages and a locality directory
- Readable property addresses with type, size, locality and price
- A sitemap, a robots.txt that closes private areas, and organisation structured data
- Titles and descriptions for every page type

[Content Creation](https://ndcompany.in/services/content-creation)

### Guides and tools for the money questions

The guides library is sorted the way a buyer's questions come: buyer advice, legal and taxes, locality comparisons and finance. It starts with a Lucknow buying guide (LDA approvals and RERA), a guide to Uttar Pradesh stamp duty and registration fees, Gomti Nagar Extension against Sushant Golf City, and home loan eligibility.

The four tools sit on one page. The valuation estimator takes a locality, the area, the type of property and its age, and gives an estimated range. The EMI calculator takes the loan, rate and term. The stamp duty calculator takes the property value and whether the buyer is a man, a woman or a joint owner, because Uttar Pradesh charges them differently. The land converter turns square feet into gaj, bigha, biswa and square metres, the units Lucknow sellers actually use.

- A guides library in four themes
- Copy for the four calculators, the FAQ, About and the legal pages

*EMI, stamp duty and land units on one page.*

*The valuation estimator gives a range, not a price.*

*Guides sorted by the questions buyers ask.*

## Results

Gharonix's team counts 4,500 to 5,300 leads a month. A lead is a person asking about a property, by any route: WhatsApp, a call, the site's chat or forms, or a walk-in. Before the site the business had no online presence at all, so there is no earlier online figure to compare with. The count is Gharonix's own, not audited by us, and the site is one part of a business that also answers calls and meets buyers in person.

- **Leads a month, by Gharonix's count:** 4,500 to 5,300
- **Locality pages across Lucknow:** 62
- **Buyer tools: valuation, EMI, stamp duty, land units:** 4
- **Listing review time, as Gharonix states it:** 1 to 4 hours

The site's own enquiry inbox counts only messages sent through its forms and chat, so it holds a small part of that figure; the team counts WhatsApp chats, calls and walk-ins itself. That is why every listing carries a chat button and a WhatsApp button.

## How a property gets from a seller to a buyer

Here is the path one listing takes on Gharonix, as the app runs it today:

1. A seller signs in with Google and fills in the listing: type, locality, price, size, rooms and 5 to 10 photos, cropped to 4:3 and with one chosen as the cover.
2. The listing is saved as Pending. Buyers cannot see it yet.
3. Gharonix's team opens it in the admin console, checks the price, the photos and the locality, and approves, rejects or features it. Gharonix says this usually takes 1 to 4 hours.
4. Once published, the listing appears in search, on its locality page and on the live map, and its photos carry the Gharonix watermark.
5. A buyer finds it, saves or compares it, runs the EMI or stamp duty numbers, and contacts the seller by chat or WhatsApp.
6. The enquiry lands in the seller's account and in the admin lead inbox, where the team can follow it up.

**Why each part of the stack is there**

| Part | What it does for Gharonix |
| --- | --- |
| Next.js and React | Property and locality pages arrive as finished HTML, so search engines and slow phones read them without waiting for scripts. |
| TypeScript | Catches mistakes between the listing form, the database and the pages before they reach a buyer. |
| PostgreSQL and Prisma | Listings, users, enquiries and reviews live in one database with fixed fields, which is what filters by type, locality and budget need. |
| Vercel | Hosting with HTTPS and an edge network that serves pages from close to the visitor, and every change goes live in one deploy. |
| Pusher | Live chat between a buyer and a seller without building a socket server. |
| Google sign-in | No new password to forget, and a real email address behind every seller. |

## Could this work for another city?

Yes. Nothing in Gharonix is tied to Lucknow except its data: the locality list, the map's starting point, the stamp duty rules and the land units. A property portal for Kolkata, Pune or Dubai would swap those (West Bengal's stamp duty and kottah, or Dubai's transfer fee and square feet) and keep the rest: the listing check, the dashboards, the tools page and the map.

What changes the cost is scope, not the city: payments for featured listings, an app in the stores, or a feed from other portals each add work. Our [software development](https://ndcompany.in/services/software-development) page lists starting prices, and a written quote sets the final one.

## What the client said

Gharonix in their own words, from a public Google review.

Google review

"they genuinely helped me to scale the business and brought my idea to live. we are getting leads now. definitely recommended"

Mumtaj Ahmad

4 days ago

## Frequently asked questions

**What did N&D Co. build for Gharonix?**

The whole product: a property marketplace web app for Lucknow with listings, search, a live map, buyer and seller accounts, an admin console and four buyer tools, plus the GharOnix logo, 62 locality pages, the guides and the hosting, which we still run.

**How many leads does Gharonix get?**

Gharonix's team counts 4,500 to 5,300 leads a month across every channel: WhatsApp, calls, the site's chat and forms, and walk-ins. That is their own count, not audited by us, and the website is one part of the business that produces it. Before the site, Gharonix had nothing online.

**What features does a property portal like Gharonix need?**

On Gharonix: search by property type, locality and budget, property pages, a page for each locality, a live map, saved properties and comparison, a seller listing flow with photo upload, chat and WhatsApp contact, an admin console to approve listings and handle leads, and calculators for EMI, stamp duty, land units and an estimated value.

**How are listings checked before they go live on Gharonix?**

A new listing is saved as Pending, and Gharonix's team reviews its price, photos and locality in the admin console before approving, rejecting or featuring it. Gharonix says this usually takes 1 to 4 hours. Published photos carry a Gharonix watermark.

**Which tech stack does Gharonix use?**

Next.js and React in TypeScript, a PostgreSQL database through Prisma, hosting on Vercel, live chat through Pusher and Google sign-in. Next.js sends property and locality pages as finished HTML, which helps search engines and slow phones.

**Do locality pages help a property website rank on Google?**

They match how people search, by area: flats in Gomti Nagar or plots on Sitapur Road. Gharonix has 62. A locality page helps only when it lists real property in that area and says something specific about it; a page that only swaps the area name is thin and unlikely to rank.

**Can you build a property portal like this for another city?**

Yes. Only the data is tied to Lucknow: the locality list, the map, the stamp duty rules and the land units. Another city keeps the listing check, dashboards, tools and map and swaps those. Our software development page lists starting prices, and a written quote sets the final one.

**Is a clone script cheaper than a custom property portal?**

Often at the start, because a script for a 99acres or MagicBricks style site is sold ready made. A custom build includes what a generic script may not, which for Gharonix meant Lucknow's localities, Uttar Pradesh stamp duty and land units, Hindi and English listings and its own listing check.

## Related reading

Guides from our blogs on the same kind of work.

Business

Guide · 24 Nov 2026

### [How much does app development cost in India? A guide for US and UK buyers](https://ndcompany.in/blogs/app-development-cost-india)

Our starting prices, what 22 Indian agencies publish, official US and UK developer pay, and the costs after launch: store fees, backend, SMS, maps, commissions and yearly updates.

Read the guide

Websites

Guide · 20 Nov 2026

### [How to run a free online store that takes orders on WhatsApp](https://ndcompany.in/blogs/free-online-store-whatsapp-orders)

A free Blogger store with an Order on WhatsApp button and a product code on every piece: the setup we built for a solo jewellery maker, step by step.

Read the guide

SEO

News · 17 Nov 2026

### [Google's November 2026 core update: what is happening and what to do](https://ndcompany.in/blogs/google-core-update-november-2026)

Google's November 2026 core update finished on 24 November. What Google says, what 51 pages claim, how to check a drop, and what recovery offers cost.

Read the post

## More projects

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

Software

Michael L., United States

### [Click-to-paste tool for Excel price lists](https://ndcompany.in/projects/excel-click-to-paste-tool)

A Windows tool for a US client who fills long supplier price lists in Excel: copy a value once, then one click pastes it into any cell. Five builds in three days, rated five stars on Freelancer.

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
      "@id": "https://ndcompany.in/projects/gharonix#webpage",
      "url": "https://ndcompany.in/projects/gharonix",
      "name": "Gharonix case study: a Lucknow property portal web app",
      "description": "How we built Gharonix, a property portal for Lucknow: listings, a live map, listing checks and UP stamp duty tools. It now logs 4,500 to 5,300 leads a month.",
      "isPartOf": {
        "@id": "https://ndcompany.in/#website"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/projects/gharonix#breadcrumb"
      },
      "inLanguage": "en-IN",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/projects/gharonix-16x9.png",
        "width": 1200,
        "height": 675
      },
      "mainEntity": {
        "@id": "https://ndcompany.in/projects/gharonix#work"
      }
    },
    {
      "@type": "CreativeWork",
      "@id": "https://ndcompany.in/projects/gharonix#work",
      "name": "Gharonix: a property marketplace built for Lucknow",
      "headline": "Gharonix: a property marketplace built for Lucknow",
      "description": "A property marketplace for Lucknow: listings checked before they go live, 62 locality pages, a live map, buyer tools and an admin console. Gharonix counts 4,500 to 5,300 leads a month.",
      "abstract": "Gharonix is a property marketplace for one city, Lucknow. Its founder, Mumtaz Ahmad, wanted what the site now calls \"Lucknow ki apni property website\", Lucknow's own property website, and before it the business had nothing online. N&D Co. built the whole product: the web app, the logo and brand, the search and content work, and the hosting, which we still run; the site's own About page says it is developed and maintained by N&D Co. The live site is at gharonix.com. Buyers search homes, flats, plots, villas and commercial property by type, locality and budget, see them on a live map of the city, save and compare them, and contact the seller by chat or WhatsApp. Sellers list for free. Every listing is checked by Gharonix's team before it goes live. A valuation estimator, a home loan EMI calculator, an Uttar Pradesh stamp duty calculator and a land area converter answer the money questions on the same site. Gharonix's team now counts 4,500 to 5,300 leads a month across every channel: WhatsApp, calls, the site's chat and forms, and walk-ins. That is their own count, and the website is one part of the business that produces it. The work covers software development, website design and development, brand identity design, SEO and content creation.",
      "url": "https://ndcompany.in/projects/gharonix",
      "image": [
        "https://ndcompany.in/assets/images/projects/gharonix-home-discovery.webp",
        "https://ndcompany.in/assets/images/projects/gharonix-listing-verification.webp",
        "https://ndcompany.in/assets/images/projects/gharonix-admin-portals.webp",
        "https://ndcompany.in/assets/images/projects/gharonix-buyer-dashboard.webp",
        "https://ndcompany.in/assets/images/projects/gharonix-buyer-dashboard-mobile.webp",
        "https://ndcompany.in/assets/images/projects/gharonix-home-mobile.webp",
        "https://ndcompany.in/assets/images/projects/gharonix-property-listings.webp",
        "https://ndcompany.in/assets/images/projects/gharonix-live-map.webp",
        "https://ndcompany.in/assets/images/projects/gharonix-sign-in.webp",
        "https://ndcompany.in/assets/images/projects/gharonix-logo.webp",
        "https://ndcompany.in/assets/images/projects/gharonix-calculators.webp",
        "https://ndcompany.in/assets/images/projects/gharonix-valuation-estimator.webp",
        "https://ndcompany.in/assets/images/projects/gharonix-guides.webp"
      ],
      "genre": "Software, Websites, Branding, SEO",
      "keywords": "Property portals, Local SEO, Logos",
      "creator": {
        "@id": "https://ndcompany.in/#ndco-organization"
      },
      "sourceOrganization": {
        "@type": "Organization",
        "name": "Gharonix",
        "sameAs": [
          "https://www.gharonix.com/about",
          "https://www.gharonix.com/faq"
        ]
      },
      "isPartOf": {
        "@type": "CollectionPage",
        "@id": "https://ndcompany.in/projects#webpage",
        "url": "https://ndcompany.in/projects"
      },
      "hasPart": [
        {
          "@type": "CreativeWork",
          "name": "A marketplace web app for buyers, sellers and its own team",
          "description": "Gharonix is a Next.js and React app written in TypeScript, with a PostgreSQL database reached through Prisma, hosted on Vercel. Buyers and sellers share one account dashboard, administrators get a console of their own, and everyone signs in with Google, so nobody has to make up another password. Chat between buyers and sellers is live, through Pusher, and every property page also has a WhatsApp button, so a seller can answer from the app they already use. The admin console is where the trust comes from. A new listing waits as Pending until the team approves it, rejects it or marks it Featured; photos get a Gharonix watermark so they cannot be lifted to another site as easily; and each listing shows a check result before it is published. The same console holds the enquiry and lead inbox, user roles and suspensions, and review moderation.",
          "about": {
            "@type": "Service",
            "@id": "https://ndcompany.in/services/software-development#service",
            "name": "Software Development",
            "url": "https://ndcompany.in/services/software-development"
          },
          "image": [
            "https://ndcompany.in/assets/images/projects/gharonix-listing-verification.webp",
            "https://ndcompany.in/assets/images/projects/gharonix-admin-portals.webp",
            "https://ndcompany.in/assets/images/projects/gharonix-buyer-dashboard.webp",
            "https://ndcompany.in/assets/images/projects/gharonix-buyer-dashboard-mobile.webp"
          ]
        },
        {
          "@type": "CreativeWork",
          "name": "A design that starts from the city",
          "description": "The look comes from Lucknow itself: deep maroon and gold on a warm cream, serif headings, and Lucknow's Nawabi skyline behind the banners. On a phone the home page opens on the search box, with type and locality filters and a bottom bar for Home, Search, Localities and Account, so the first tap is a search. Search works two ways because people do. Some start from a home, so listing cards lead with the photo, the price, the locality and the BHK. Others start from a part of the city, so the home page shows popular localities next to featured properties, and the map shows where everything sits.",
          "about": {
            "@type": "Service",
            "@id": "https://ndcompany.in/services/website-design-development#service",
            "name": "Website Design & Development",
            "url": "https://ndcompany.in/services/website-design-development"
          },
          "image": [
            "https://ndcompany.in/assets/images/projects/gharonix-home-mobile.webp",
            "https://ndcompany.in/assets/images/projects/gharonix-home-discovery.webp",
            "https://ndcompany.in/assets/images/projects/gharonix-property-listings.webp",
            "https://ndcompany.in/assets/images/projects/gharonix-live-map.webp",
            "https://ndcompany.in/assets/images/projects/gharonix-sign-in.webp"
          ]
        },
        {
          "@type": "CreativeWork",
          "name": "The GharOnix logo",
          "description": "Ghar is Hindi and Urdu for home, and the logo says it twice: a G and an O joined into one mark, under a gold roof with a chimney and a four pane window. The gold and black mark works on the site's maroon and cream, and the wordmark spells the name GharOnix so the two halves read at a glance.",
          "about": {
            "@type": "Service",
            "@id": "https://ndcompany.in/services/brand-identity-design#service",
            "name": "Brand Identity Design",
            "url": "https://ndcompany.in/services/brand-identity-design"
          },
          "image": [
            "https://ndcompany.in/assets/images/projects/gharonix-logo.webp"
          ]
        },
        {
          "@type": "CreativeWork",
          "name": "Pages for every part of Lucknow",
          "description": "People search property in Lucknow by locality: flats in Gomti Nagar, plots on Sitapur Road, houses in Jankipuram. So the site has a page for each one, 62 of them in its sitemap on 21 November 2026, from Aashiana Colony and Alambagh to Sushant Golf City and the roads out of the city (Faizabad Road, Kursi Road, Raebareli Road). Each locality page lists the property in it and links to the map. The rest is groundwork. Property addresses carry the type, size, locality and price in words, such as /properties/2200-sqft-premium-3bhk-lda-house-for-sale-sector-a-jankipuram-7137. The sitemap lists the public pages, robots.txt keeps search engines out of the dashboards, admin and API, and the site describes itself to search engines as an organisation serving Lucknow, Uttar Pradesh.",
          "about": {
            "@type": "Service",
            "@id": "https://ndcompany.in/services/seo-services#service",
            "name": "SEO Services",
            "url": "https://ndcompany.in/services/seo-services"
          }
        },
        {
          "@type": "CreativeWork",
          "name": "Guides and tools for the money questions",
          "description": "The guides library is sorted the way a buyer's questions come: buyer advice, legal and taxes, locality comparisons and finance. It starts with a Lucknow buying guide (LDA approvals and RERA), a guide to Uttar Pradesh stamp duty and registration fees, Gomti Nagar Extension against Sushant Golf City, and home loan eligibility. The four tools sit on one page. The valuation estimator takes a locality, the area, the type of property and its age, and gives an estimated range. The EMI calculator takes the loan, rate and term. The stamp duty calculator takes the property value and whether the buyer is a man, a woman or a joint owner, because Uttar Pradesh charges them differently. The land converter turns square feet into gaj, bigha, biswa and square metres, the units Lucknow sellers actually use.",
          "about": {
            "@type": "Service",
            "@id": "https://ndcompany.in/services/content-creation#service",
            "name": "Content Creation",
            "url": "https://ndcompany.in/services/content-creation"
          },
          "image": [
            "https://ndcompany.in/assets/images/projects/gharonix-calculators.webp",
            "https://ndcompany.in/assets/images/projects/gharonix-valuation-estimator.webp",
            "https://ndcompany.in/assets/images/projects/gharonix-guides.webp"
          ]
        }
      ],
      "sameAs": [
        "https://www.gharonix.com/"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ndcompany.in/projects/gharonix#breadcrumb",
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
          "name": "Gharonix"
        }
      ]
    }
  ]
}
```
