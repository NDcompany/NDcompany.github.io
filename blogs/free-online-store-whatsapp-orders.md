---
title: "How to start a free online store that takes WhatsApp orders"
description: "No domain, no hosting, no monthly fee: how we built a free Blogger store where every WhatsApp order arrives with a product code, and how to copy it."
url: "https://ndcompany.in/blogs/free-online-store-whatsapp-orders"
type: "BlogPosting"
author: "Nakshatra Ranjan Saha"
published: "2026-11-20T00:00:00+05:30"
modified: "2026-11-20T00:00:00+05:30"
image: "https://ndcompany.in/assets/blog/free-online-store-whatsapp-orders-16x9.png"
---

[Websites](https://ndcompany.in/blogs/topic/websites) · Guide

# How to run a free online store that takes orders on WhatsApp

A free Blogger store with an Order on WhatsApp button and a product code on every piece: the setup we built for a solo jewellery maker, step by step.

By [Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha), CEO & Founder Published 20 November 2026 11 min read

You can run a small online store for nothing a month: publish each product as a post on Google's free Blogger, give every piece a short code, and put an Order on WhatsApp button on each page that opens a chat with the code already typed. Payment and delivery are agreed in the chat. We built exactly this for Sokher Alankar, a handmade jewellery brand run by one woman, and it went live with 42 products on 15 November 2026. This guide shows each step, with the settings and the button code, so you can copy it.

Key takeaways

- Blogger, the blogspot.com address, WhatsApp's click-to-chat links and the WhatsApp Business app are all free, so a catalogue store can run at ₹0 or $0 a month.
- A product code in every WhatsApp message (SA-005, AB-012) tells a one person business which piece a buyer means, even if the buyer edits the message.
- The button is one link: `https://wa.me/`, the number with its country code, then `?text=` and the message, URL-encoded.
- Change Blogger's default robots.txt: it blocks `/search`, which hides every label page, and label pages are your collections.
- In the first five days, Sokher Alankar's maker got 15 to 20 enquiries, against 10 to 12 a month before the store.
- A free store has no checkout. It suits made-to-order and small-batch sellers who want to talk to each buyer, not shops that need automatic payments and stock counts.

## Why we built a store with no monthly bill

Adrija Ghosh makes Bengali jewellery at home and runs [Sokher Alankar](https://ndcompany.in/projects/sokher-alankar) alone. When she came to us she had two constraints. There was no budget for a domain, hosting or a store plan. And because she is the whole business, she wanted every enquiry on WhatsApp, where she already talks to customers, with something in the message that told her at once which piece it was about.

Those constraints are common. Plenty of people who sell handmade goods, home baking, tailoring or art work the same way: one person, little cash to spare, and customers who would rather message than fill in a checkout form. Most guides to free online stores are written by platforms that sell a paid plan, so they skip the option that costs nothing. This is that option, written from a store that is live.

## Can you really run an online store for free?

Yes, if you accept what free leaves out. These parts cost nothing:

- **The site.** Blogger is Google's free publishing platform. Your store lives at yourname.blogspot.com, and you can [add a custom domain later](https://support.google.com/blogger/answer/1233387?hl=en) when you can afford one.
- **Ordering.** WhatsApp's [click-to-chat links](https://faq.whatsapp.com/5913398998672934/?locale=en_US) open a chat with your number, and they can carry a message.
- **Answering.** WhatsApp Business is [a free-to-download app](https://faq.whatsapp.com/641572844337957/?locale=en_US) with a business profile, quick replies and labels for chats.
- **Photos.** Upload them in the Blogger editor. (We hosted ours on GitHub and jsDelivr instead, for a reason explained below.)

What it does not include is a checkout. Nobody pays on the site. The buyer messages you, you confirm the price, and you agree payment and delivery in the chat, the way many small sellers already work. Your time is the real cost.

## What a store would cost you on Shopify, Squarespace or Etsy

We checked each platform's own pricing page on 20 November 2026. Prices change by country, and our checks were served Indian prices, so the comparison is in rupees except for Etsy, which publishes its fees in dollars.

**What a small store costs on each platform, checked 20 November 2026**

| Option | Published price | A year, before payment fees |
| --- | --- | --- |
| Blogger and WhatsApp | Free | ₹0 |
| [Squarespace Basic, India](https://www.squarespace.com/pricing) | ₹630 a month billed yearly, plus a 2% commerce fee | ₹7,560, plus 2% of sales |
| [Shopify Basic, India](https://www.shopify.com/in/pricing) | ₹1,499 a month billed yearly | ₹17,988 |
| [Etsy](https://help.etsy.com/hc/en-us/articles/360035902374-Etsy-Fee-Basics) | $0.20 a listing, renewed every four months, and 6.5% of each sale | About $25 to keep 42 listings live, plus 6.5% of every order |

Yearly plan cost for a small store in India

**Yearly plan cost for a small store in India**

| Category | Value |
| --- | --- |
| Blogger and WhatsApp | ₹0 |
| Squarespace Basic | ₹7,560 |
| Shopify Basic | ₹17,988 |

*Plan prices billed yearly, before payment processing and transaction fees. A domain, if you want one, is extra on every option: Porkbun listed a .com at $11.81 for the first year. Source: [Shopify and Squarespace pricing pages for India, checked 20 November 2026](https://www.shopify.com/in/pricing).*

The paid platforms earn their price once you sell enough: card payments, stock counts, shipping labels and abandoned cart emails all save time at volume. Before that point, the plan fee is money a new seller could spend on materials.

## Who this setup suits, and who should pay for a platform

It suits you if you sell made-to-order or small-batch pieces, you want to talk to each buyer, your customers already use WhatsApp, and you run the business alone or with one helper. That is Adrija's situation, and the situation of many women running a business from home in India, the Gulf, the UK or the US.

Pay for a platform instead if strangers need to buy at 2 AM without talking to you, you sell the same item in quantity, or your buyers do not use WhatsApp. The button in step 3 can open an email or another messenger instead, but at some volume a real cart is worth its fee.

## Step 1: set up Blogger as your store

Create a blog at [blogger.com](https://www.blogger.com/) with your Google account and pick an address that matches your brand. Then use Blogger's own pieces for store jobs:

- **Posts are products.** One post per piece, with its photos, description, code and button.
- **Labels are collections.** Give each product a label such as Necklaces or Earrings, and Blogger makes a page for each label at /search/label/Necklaces. Add a label like Shop to every product, so one page lists them all.
- **Pages are your fixed pages.** About, How to order, Delivery and Returns.

Any clean Blogger theme will work. For Sokher Alankar we wrote a theme from scratch that reads those labels and draws a product page, with Blogger's own stylesheet and scripts switched off for speed. You do not need to go that far to start.

*In the Blogger dashboard, each product post carries its collection, its code and Shop as labels.*

Now the setting almost everyone misses. Blogger's default robots.txt tells search engines not to crawl anything under /search, and every label page lives under /search/label/. So a store that uses labels as collections hides all of its collections from Google. In Settings, under Crawlers and indexing, switch on Enable custom robots.txt and use this, with your own address:

```plaintext
User-agent: *
Allow: /search/label/
Disallow: /search
Allow: /

Sitemap: https://yourstore.blogspot.com/sitemap.xml
Sitemap: https://yourstore.blogspot.com/sitemap-pages.xml
```

The Allow line for /search/label/ comes first and is more specific, so search engines may crawl the label pages while the search results pages stay blocked.

## Step 2: give every product a code

Pick two or three letters from your brand and number the pieces: SA-001, SA-002 and so on. Show the code on the product page, near the price note, and add it as a label too, so you can find the post from the code later. On Sokher Alankar each address also ends in the code, for example /pink-black-thread-choker-set-sa-005, which keeps it short and makes the piece easy to find when a buyer quotes it.

The code is what makes WhatsApp orders work for a one person business. A buyer may delete half of the message, write in another language or send a screenshot. The code survives all of that, and you can search your chats for it. WhatsApp's own catalogue has a product code field for the same reason ([WhatsApp blog](https://blog.whatsapp.com/introducing-catalogs-for-small-businesses)).

## Step 3: add an Order on WhatsApp button with the message typed in

WhatsApp documents the link format: `https://wa.me/`, then your full number in international format with no plus sign, zeros, brackets or dashes, then `?text=` and your message, URL-encoded ([WhatsApp Help Center](https://faq.whatsapp.com/5913398998672934/?locale=en_US)). URL-encoded means spaces become %20 and commas %2C. Put the code, the product's name, a question and the page's address in the message. Here is a button for a made-up product and a US number:

```html
<a href="https://wa.me/15551234567?text=Hi%2C%20I%20would%20like%20to%20order%20AB-012%20Blue%20silk%20scarf.%20Is%20it%20available%3F%20https%3A%2F%2Fyourstore.blogspot.com%2F2026%2F11%2Fblue-silk-scarf-ab-012.html"
   target="_blank" rel="noopener">Order on WhatsApp</a>
```

Paste it into each post in HTML view and change the code, name and address. If you are not sure about the encoding, type the message in any free URL encoder, or ask whoever helps you with the site to generate the links from the post title, as our theme does.

Adding the page's address does more than you might think. WhatsApp turns it into a preview with the product photo, so the first thing you see in the chat is the piece itself. This is the button on Sokher Alankar:

*The code sits above the price note, and the button opens a chat with the code, name and link.*

Write a How to order page that says what happens after the tap: the message opens, you reply with the price, you agree payment and delivery. First-time buyers relax when they know there is a person on the other end.

## Step 4: host product photos for free

If you add products by hand, upload photos in the Blogger editor and you are done. We published Sokher Alankar's 42 products through Blogger's API, which cannot upload images, so we put the photos in a public GitHub repository and served them through jsDelivr, a free CDN that says it has "no bandwidth limits" and is "completely free to use" ([jsDelivr](https://www.jsdelivr.com/)). Each address points at a fixed commit, so a replaced photo can never show an old copy from a cache. GitHub recommends keeping files small, under 1 MB each ([GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits)), which product photos should be anyway.

Whichever way you host them, resize before uploading. A photo straight off a phone is usually several megabytes, and a product page needs a square image around 1,200 pixels wide. Smaller files make the store faster on a phone, which is where most buyers will see it.

## Step 5: make the store findable

Beyond the robots.txt fix, a few settings decide whether Google can show your pieces:

- **Titles that say what the piece is.** "Pink and black thread choker with stud earrings and bangle" beats "Rani". Put the poetic name in the description.
- **Search descriptions.** Turn them on under Settings, Meta tags, then write one for each post in the editor's sidebar.
- **A unique description on every product.** The same paragraph pasted on 40 pages makes 40 thin pages. Say what the piece is made of, what comes in the set and what to wear it with.
- **No fake product markup.** Google's product rich results need a price, a review or a rating ([Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/product-snippet)). If you share prices in the chat, leave Product structured data out rather than invent an offer.
- **Search Console.** Add the blog in [Google Search Console](https://search.google.com/search-console) and submit the sitemap, so you see what Google indexes.

Then write for the people who search before they buy. Sokher Alankar's journal answers questions like how to care for fabric and jute jewellery and what a hasli necklace is. Each guide links to the pieces it mentions. Our [guide to planning a business website](https://ndcompany.in/blogs/plan-a-business-website) covers the same thinking for a larger site.

## Step 6: handle the order in the chat

The store's job ends when the chat opens. Yours starts there, and a little structure saves hours:

- Save quick replies in WhatsApp Business for price, delivery times, payment methods and care, so each answer is one tap.
- Label chats by stage (new enquiry, awaiting payment, to ship, delivered) so nothing slips while you are making the next piece.
- Send a written bill. Our free [invoice generator](https://ndcompany.in/tools/invoice-generator) makes a PDF invoice or quote in the browser, and for rupee invoices it can add a UPI QR code.
- Agree delivery and returns in writing in the chat, and put the same terms on your How to order page.

## WhatsApp catalogue or a website: which do you need?

Both, if you can. WhatsApp Business has a [catalogue](https://blog.whatsapp.com/introducing-catalogs-for-small-businesses) where you can list items with a price, description and product code, and it is the easiest way to show pieces to someone already chatting with you. But it lives inside the app. Google does not show it to a stranger searching for handmade cowrie necklaces, and it is clumsy to share on Instagram or in an email. A website page can be found, shared and linked from anywhere, and its button brings the buyer back into the same chat. Use the same codes in both.

## What a free store cannot do

- No checkout, so no payment while you sleep. Every sale needs a reply from you.
- No stock count. When a piece sells, edit or unpublish its post yourself.
- A blogspot.com address until you buy a domain. That looks fine to most buyers but less established to some.
- Blogger adds ?m=1 to addresses on phones and redirects to them, which costs a fraction of a second on the first page a visitor opens. No theme can remove it.
- Blogger's API cannot change themes or most settings, so some jobs are by hand in the dashboard.

None of these stops a new seller. They are the signs, later, that you have outgrown free.

## What happened with Sokher Alankar

The store went live on 15 November 2026 with 42 products, each with its own code, four collections and 25 journal posts, and it costs nothing a month to run. The number Adrija watches is enquiries: before the store she got 10 to 12 a month, and in its first five days she got 15 to 20, by her own count. Buyers pay her by UPI (Google Pay, PhonePe or Paytm) once they have agreed the price in the chat. A launch week brings its own attention, so we will report the count again at 30 and 90 days. A free store does not have to be slow, either: on Google's [PageSpeed Insights](https://pagespeed.web.dev/) its home page scored 100 in all four categories on phone and desktop. The [full case study](https://ndcompany.in/projects/sokher-alankar) shows every step with screenshots, the brand identity behind it and the exact WhatsApp link on a product.

If you would rather have it built for you, a store like this is part of our [website design and development](https://ndcompany.in/services/website-design-development) and [ecommerce](https://ndcompany.in/services/ecommerce-solutions) work. When a store is ready for a checkout, those pages cover what we build for that stage.

## Questions people ask

### Can you sell on Blogger?

Yes, as a catalogue. Blogger has no cart or payments of its own, but each post can be a product with a button that opens WhatsApp, email or a payment link. Its terms are worth reading for your country before you start.

### How do I create a WhatsApp link with a message already typed?

Use https://wa.me/ followed by your number in international format, then ?text= and the message with spaces written as %20. WhatsApp's Help Center documents the format. Anyone who taps it gets a chat with your number and the message ready to send.

### Do I need my own domain?

Not to start. A blogspot.com address works, and Blogger lets you connect a custom domain later. If you can afford one, a domain is the first thing worth paying for.

### Can I sell online without a website?

Yes, through Instagram, a WhatsApp catalogue or a marketplace. A free website adds the part those cannot: pages that Google can show to people who have never heard of you.

- [WhatsApp orders](https://ndcompany.in/tags#whatsapp-orders)
- [Blogger](https://ndcompany.in/tags#blogger)
- [Website costs](https://ndcompany.in/tags/website-costs)

## Share this post

- [Share on X](https://twitter.com/intent/tweet?text=How%20to%20run%20a%20free%20online%20store%20that%20takes%20orders%20on%20WhatsApp&url=https%3A%2F%2Fndcompany.in%2Fblogs%2Ffree-online-store-whatsapp-orders&via=NDCoofficial)
- [Share on Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fndcompany.in%2Fblogs%2Ffree-online-store-whatsapp-orders)
- [Share on LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Ffree-online-store-whatsapp-orders)
- [Share on WhatsApp](https://wa.me/?text=How%20to%20run%20a%20free%20online%20store%20that%20takes%20orders%20on%20WhatsApp%20https%3A%2F%2Fndcompany.in%2Fblogs%2Ffree-online-store-whatsapp-orders)
- [Share on Telegram](https://t.me/share/url?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Ffree-online-store-whatsapp-orders&text=How%20to%20run%20a%20free%20online%20store%20that%20takes%20orders%20on%20WhatsApp)
- [Share on Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Ffree-online-store-whatsapp-orders&title=How%20to%20run%20a%20free%20online%20store%20that%20takes%20orders%20on%20WhatsApp)
- [Share on Threads](https://www.threads.net/intent/post?text=How%20to%20run%20a%20free%20online%20store%20that%20takes%20orders%20on%20WhatsApp%20https%3A%2F%2Fndcompany.in%2Fblogs%2Ffree-online-store-whatsapp-orders)
- [Share on Bluesky](https://bsky.app/intent/compose?text=How%20to%20run%20a%20free%20online%20store%20that%20takes%20orders%20on%20WhatsApp%20https%3A%2F%2Fndcompany.in%2Fblogs%2Ffree-online-store-whatsapp-orders)
- [Share on Pinterest](https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fndcompany.in%2Fblogs%2Ffree-online-store-whatsapp-orders&media=https%3A%2F%2Fndcompany.in%2Fassets%2Fblog%2Ffree-online-store-whatsapp-orders-16x9.png&description=How%20to%20run%20a%20free%20online%20store%20that%20takes%20orders%20on%20WhatsApp)
- [Share by email](mailto:?subject=How%20to%20run%20a%20free%20online%20store%20that%20takes%20orders%20on%20WhatsApp&body=No%20domain%2C%20no%20hosting%2C%20no%20monthly%20fee%3A%20how%20we%20built%20a%20free%20Blogger%20store%20where%20every%20WhatsApp%20order%20arrives%20with%20a%20product%20code%2C%20and%20how%20to%20copy%20it.%0A%0Ahttps%3A%2F%2Fndcompany.in%2Fblogs%2Ffree-online-store-whatsapp-orders)

[Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha)

CEO & Founder of N&D Co., a brand and growth agency in Barrackpore, Kolkata. Nakshatra has worked in SEO since July 2025 and writes our guides on SEO, websites and branding.

## Keep reading

Websites

Guide · 25 Nov 2026

### [White label WordPress development: what 16 providers charge and how a build runs](https://ndcompany.in/blogs/white-label-wordpress-development)

What 16 white label WordPress providers publish about prices, staging, NDAs and plugin licences, plus the checks to run before you resell a site as your own.

Read the guide

Websites

Insight · 11 Nov 2026

### [How accessible are US small business websites? A study of 385 sites](https://ndcompany.in/blogs/small-business-website-accessibility-study)

87% of 385 US small business homepages we tested had a serious or critical accessibility failure. The most common errors by industry, what each means, how to fix it and what the ADA says.

Read the post

Websites

Guide · 7 Nov 2026

### [Shopify development in India: what partners charge, from Shopify's own directory](https://ndcompany.in/blogs/shopify-development-india)

What do Shopify partners in India charge? We read 160 profiles in Shopify's Partner Directory and compared starting prices, tiers, reviews and experience for India-based and US-based partners.

Read the guide

[More on Websites](https://ndcompany.in/blogs/topic/websites)

## How we can help

If you would rather have this handled for you, these are the services that cover it.

### [Website Design & Development](https://ndcompany.in/services/website-design-development)

Business websites, WordPress builds and landing pages, designed for phones first and set up for search before launch.

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
      "@id": "https://ndcompany.in/blogs/free-online-store-whatsapp-orders#article",
      "headline": "How to run a free online store that takes orders on WhatsApp",
      "description": "No domain, no hosting, no monthly fee: how we built a free Blogger store where every WhatsApp order arrives with a product code, and how to copy it.",
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/free-online-store-whatsapp-orders-16x9.png",
          "width": 1200,
          "height": 675
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/free-online-store-whatsapp-orders-4x3.png",
          "width": 1200,
          "height": 900
        },
        {
          "@type": "ImageObject",
          "url": "https://ndcompany.in/assets/blog/free-online-store-whatsapp-orders-1x1.png",
          "width": 1200,
          "height": 1200
        }
      ],
      "datePublished": "2026-11-20T00:00:00+05:30",
      "dateModified": "2026-11-20T00:00:00+05:30",
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
        "@id": "https://ndcompany.in/blogs/free-online-store-whatsapp-orders#webpage"
      },
      "isPartOf": {
        "@id": "https://ndcompany.in/blogs#blog"
      },
      "articleSection": "Websites",
      "keywords": "WhatsApp orders, Blogger, Website costs",
      "genre": "Guide",
      "wordCount": 2481,
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/blogs/free-online-store-whatsapp-orders#webpage",
      "url": "https://ndcompany.in/blogs/free-online-store-whatsapp-orders",
      "name": "How to start a free online store that takes WhatsApp orders",
      "description": "No domain, no hosting, no monthly fee: how we built a free Blogger store where every WhatsApp order arrives with a product code, and how to copy it.",
      "isPartOf": {
        "@id": "https://ndcompany.in/#website"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/blogs/free-online-store-whatsapp-orders#breadcrumb"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/blog/free-online-store-whatsapp-orders-16x9.png",
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
      "@id": "https://ndcompany.in/blogs/free-online-store-whatsapp-orders#breadcrumb",
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
          "name": "Free store with WhatsApp orders"
        }
      ]
    }
  ]
}
```
