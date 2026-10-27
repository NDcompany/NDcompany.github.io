---
title: "Security policy | N&D Co."
description: "Security policy for N&D Co.: how our static website runs, what loads only with your consent, how we handle client data and how to report a problem."
url: "https://ndcompany.in/security-policy"
type: "WebPage"
published: "2026-10-23"
modified: "2026-10-27"
image: "https://ndcompany.in/assets/share/home.png"
---

# Security policy

Effective date: 23 October 2026 · Last updated: 27 October 2026

This is a public summary of our security practices. It explains how our website works, what runs only with your consent, how we handle client data and how to report a security problem. It leaves out credentials and other details that could help an attacker.

## 1. How our website works

This website is static: we build each page as a file in advance, GitHub Pages hosts the files, and Cloudflare sits in front of it. The site does not run on a server of ours, and it has no accounts or logins. Its only databases hold the messages sent through our contact form and the requests sent through our free SEO audit form.

Cloudflare serves every page over HTTPS, with TLS 1.2 or later, so what passes between your browser and the site is encrypted in transit. It redirects a request for the plain http:// address to https:// and tells browsers to use only HTTPS for our site from then on (HSTS). Its responses also stop other websites from showing our pages inside theirs, keep our pages in a browsing context of their own and stop browsers from guessing a file's type. Every page also carries a Content Security Policy that lets only our own scripts run, and the ones they load.

The contact form on our homepage sends your message over HTTPS to our own address on ndcompany.in, where a small program that runs on Cloudflare (a Worker) checks it before anything is saved. It accepts messages only from our own pages, sits behind a Cloudflare rule that limits how many requests one visitor can send in a short time, refuses a message without a fresh Cloudflare Turnstile check that has not been used before, and drops messages from form-filling bots. Only then does it save the message in our Cloudflare database and email it to us through Resend, without your IP address or device details, and tell you it arrived. Messages are deleted 24 months after they arrive, unless you became our client. You can also reach us by email or phone.

The free SEO audit form works the same way, through a Worker of its own with the same checks and the same limit on requests, and saves each request in a separate database. Requests are deleted 24 months after they arrive, unless you became our client. The audit tool that prepares the reports runs on our own computer: it stores each request and report encrypted with a key of its own, keeps encrypted backups that its storage providers cannot read, and keeps security logs for a year.

Our fonts, scripts, styles, images and videos all load from ndcompany.in. Until you give consent, our pages load nothing from any other service, except Cloudflare Turnstile once you start filling in the contact form or the SEO audit form, and Google Analytics and Microsoft Clarity stay off.

Our free tools at ndcompany.in/tools are pages of this website and work the same way. They handle what you enter or add inside your browser and do not send it to us. RankGuru asks each website you name for its page straight from your browser.

When a page breaks with an error, it reports the error to Sentry so we can fix it. The code that sends the report loads from ndcompany.in only after an error, and the report goes through the same Worker, which passes on only reports for our own Sentry project and never your IP address. Our [privacy policy](https://ndcompany.in/privacy) says what a report holds.

## 2. What runs only with your consent

Our cookie box has three optional switches, for analytics cookies, marketing cookies and offline access. All three are off until you turn them on. "Accept" turns on all three, and "Reject all" keeps only the essential storage the site needs, such as your cookie choice and your light or dark theme. You can change your choice at any time with "Cookie settings" at the bottom of every page.

With analytics on, we use Google Analytics and Microsoft Clarity to see how people use the site. Clarity records clicks, scrolling and how pages looked, and masks what you type and the text our forms and free tools show. Google's advertising features (Google signals, remarketing and ad personalization) also need the marketing switch, and they start only when you first tap, click, press a key or turn the mouse wheel on a page.

Offline access lets pages open without a connection and load faster later. When you turn it on, the site registers a service worker (/sw.js). The worker keeps copies in your browser's Cache Storage, in caches named ndco-static-v1 and ndco-pages-v1: the offline page and its images, the site's icons and manifest, the homepage and each page you open, and the site files those pages use (scripts, styles, fonts and images, never videos). It refreshes these copies from ndcompany.in when you are online and sends nothing to us or to anyone else.

The copies stay until you turn offline access off, clear the site's data in your browser, or we change the worker's version. While offline access is off, our site registers no service worker, and if your browser still has one from an earlier visit, our site removes it and the copies it saved the next time you open a page.

Our [cookies policy](https://ndcompany.in/cookies-policy) and [privacy policy](https://ndcompany.in/privacy) give the details.

## 3. How we handle client data

We keep client records, project files and deliverables, and invoices in our own in-house system. We plan projects and track tasks in Notion, which can hold a client's name and project details. If a personal data breach affects you, we will tell you, and the authorities the law names, as the law requires.

We use a client's data, including any data the client holds about its own customers or members, only for that client's work and as our agreement with the client allows. We will require the freelancers and subcontractors who work on a client's project to agree in writing to protect its data.

Where practical, the accounts a project needs, such as ad, domain, hosting and payment gateway accounts, should be in the client's name, and we may manage them with the client's permission. When we manage a client's Google Business Profile, the client stays its owner, and when our work ends we help the client take back control and remove our own access within the time limits in our agreement and Google's policies.

If you ask us to delete your project data once the project is finished, we delete it and send you a PDF that confirms the deletion. Accounts and tax records stay for as long as the law requires.

Our [privacy policy](https://ndcompany.in/privacy) explains what personal data we keep, for how long, and your rights over it.

## 4. Reporting a security problem

If you think you have found a security problem on ndcompany.in, email us at [ceo@ndcompany.in](mailto:ceo@ndcompany.in). Describe what you found, the page or address it affects and the steps that show it. We reply to confirm we have your report, and we investigate it.

While you look into a problem, please do not access or change any data beyond what you need to show it. Please also give us time to fix it before you tell anyone else.

## 5. Changes to this policy

We review this policy as our systems, services and security practices change, and update it when they do. The effective date at the top of this page shows when the policy took effect. If we change it in an important way, the date of that change appears there too, as the last updated date.

## Who is responsible

Contact our grievance officer about anything on this page or about how we handle your data. We resolve grievances within one month of receiving them.

Grievance officer: [Nakshatra Ranjan Saha](https://ndcompany.in/team/nakshatra-ranjan-saha), CEO & Founder

Email: [ceo@ndcompany.in](mailto:ceo@ndcompany.in)

Phone: [+91 89021 09455](tel:+918902109455)

## Structured data

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ndcompany.in/security-policy#webpage",
      "name": "Security policy",
      "description": "Security policy for N&D Co.: how our static website runs, what loads only with your consent, how we handle client data and how to report a problem.",
      "url": "https://ndcompany.in/security-policy",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://ndcompany.in/#website"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://ndcompany.in/#ndco-organization"
      },
      "breadcrumb": {
        "@id": "https://ndcompany.in/security-policy#breadcrumb"
      },
      "inLanguage": "en-IN",
      "datePublished": "2026-10-23",
      "dateModified": "2026-10-27",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ndcompany.in/assets/share/home.png",
        "width": 1200,
        "height": 675
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ndcompany.in/security-policy#breadcrumb",
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
          "name": "Security policy"
        }
      ]
    }
  ]
}
```
