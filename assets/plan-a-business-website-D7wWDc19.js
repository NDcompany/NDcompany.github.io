var e=`import { Link } from 'react-router-dom';
import { Callout, Chart, Code } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>To plan a business website before you hire anyone, settle six things on paper: the one action the site must get visitors to take, a phone-sized sketch of each page, the content only you can supply, the accounts that must stay in the business's name, the speed and accessibility targets, and what the site collects from visitors. Put them in a one-page brief and send it to every provider, so the quotes describe the same job.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>In October 2026, <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide" target="_blank" rel="noopener noreferrer">StatCounter</a> put mobile at 59.9% of page views worldwide, 51.95% in the UK and 45.43% in the US. Check your own analytics, then sketch every page at phone width first.</li>
                    <li>In October 2026, 53% of websites gave visitors on phones good Core Web Vitals worldwide, 64% in the US and 68% in the UK (<a href="https://httparchive.org/reports/techreport/comparison?tech=ALL,WordPress,Shopify,Wix,Squarespace,Webflow&geo=ALL&rank=ALL" target="_blank" rel="noopener noreferrer">HTTP Archive</a>). Write speed targets into the brief.</li>
                    <li>In February 2026, 95.9% of the top million home pages had accessibility failures that automated tools can detect (<a href="https://webaim.org/projects/million/" target="_blank" rel="noopener noreferrer">WebAIM</a>). Ask for WCAG 2.2 level AA, and ask an adviser which accessibility law covers you.</li>
                    <li>Keep the domain, Search Console and Google Analytics in the business's name, and give your provider its own, limited access.</li>
                    <li>Send every provider the same written brief, so every quote prices the same job.</li>
                </ul>
            </Callout>

            <p>We are an agency based in India that builds websites for clients abroad, so this is the brief we wish more clients arrived with. Nothing here is legal advice. Where a law or rule differs by country, we give the US and UK position first and say when to ask a lawyer.</p>

            <h2 id="decide-the-one-job">Decide the one job the site must do</h2>
            <p>Start with what you want visitors to do: call, send a message or an enquiry, book, buy, or visit the shop. Choose the one action that matters most and write it as a sentence, for example: "A visitor who needs a plumber in our area can call us from any page in one tap." Give secondary actions less space than the main one.</p>
            <p>Decide now how you will measure it. Google Analytics 4 can record it as a key event, its term for an action "particularly important to the success of your business" (<a href="https://support.google.com/analytics/answer/13965727?hl=en" target="_blank" rel="noopener noreferrer">Google Analytics Help on key events</a>). Ask for key events for sent forms, taps on the phone number and any messaging button, and purchases, all set up before launch.</p>
            <p>If customers use WhatsApp, a link is <code>https://wa.me/</code> followed by the full number in international format, with no zeros, brackets or dashes (<a href="https://faq.whatsapp.com/5913398998672934/?locale=en_US" target="_blank" rel="noopener noreferrer">WhatsApp Help Center</a>).</p>

            <h2 id="plan-for-phones">Plan for the phone your customers use</h2>
            <p>The mix of phones and computers depends on where your customers are. In October 2026 <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide" target="_blank" rel="noopener noreferrer">StatCounter</a> recorded 59.9% of worldwide page views from mobile phones, against 51.95% in the <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/united-kingdom" target="_blank" rel="noopener noreferrer">United Kingdom</a>. In the <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/united-states-of-america" target="_blank" rel="noopener noreferrer">United States</a> desktop was still ahead, at 52.4%, with mobile on 45.43%.</p>
            <Chart
                type="bar"
                title="Share of web page views by device, October 2026"
                unit="%"
                series={[
                    { name: 'Mobile', data: [['Worldwide', 59.9], ['United Kingdom', 51.95], ['United States', 45.43]] },
                    { name: 'Desktop', data: [['Worldwide', 38.51], ['United Kingdom', 43.66], ['United States', 52.4]] },
                    { name: 'Tablet', data: [['Worldwide', 1.59], ['United Kingdom', 4.39], ['United States', 2.17]] },
                ]}
                source="StatCounter Global Stats, desktop vs mobile vs tablet market share, October 2026"
                sourceUrl="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide"
                note="Share of page views by device type in the month, measured across StatCounter's member sites. Your own site's mix can differ a lot, so read the device report in your analytics once the site has visitors."
            />
            <p>Even where desktop leads, nearly half of visits come from phones. Google also uses the mobile version of a site's content for indexing and ranking, and recommends responsive design as the easiest pattern to maintain. It will not load content that needs a swipe, click or typing to appear (<a href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" target="_blank" rel="noopener noreferrer">Google Search Central on mobile-first indexing</a>). Put these lines in the brief:</p>
            <ul>
                <li>Design every page at phone width first, then widen it.</li>
                <li>Keep the main action on the first screen of the phone layout.</li>
                <li>Make tap targets at least 24 by 24 CSS pixels, the minimum in <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html" target="_blank" rel="noopener noreferrer">WCAG 2.2 at level AA</a>.</li>
                <li>Leave out overlays that cover the content, which Google calls <a href="https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials" target="_blank" rel="noopener noreferrer">intrusive interstitials</a>.</li>
            </ul>

            <h2 id="sketch-pages-and-wireframes">Sketch the page list and a rough wireframe of each page</h2>
            <p>A typical page list for a service business:</p>
            <div className="blog-table" role="region" aria-label="Pages a business website usually needs" tabIndex={0}>
                <table>
                    <caption>Pages a business website usually needs</caption>
                    <thead>
                        <tr>
                            <th scope="col">Page</th>
                            <th scope="col">Its job</th>
                            <th scope="col">Must include</th>
                            <th scope="col">Who supplies it</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Home</th>
                            <td>Says what you do, for whom and where</td>
                            <td>The main action on the first screen, plus reviews or photos of real work</td>
                            <td>You (facts) and the designer (layout)</td>
                        </tr>
                        <tr>
                            <th scope="row">One page per service</th>
                            <td>Answers one need people search for</td>
                            <td>What is included, who it suits, how to start</td>
                            <td>You, or a writer using your notes</td>
                        </tr>
                        <tr>
                            <th scope="row">About</th>
                            <td>Shows who is behind the business</td>
                            <td>Real photos and facts</td>
                            <td>You</td>
                        </tr>
                        <tr>
                            <th scope="row">Contact</th>
                            <td>Makes getting in touch easy</td>
                            <td>Phone, email, form, area and hours, matching your <Link to="/blogs/google-business-profile-guide">Google Business Profile</Link></td>
                            <td>You</td>
                        </tr>
                        <tr>
                            <th scope="row">FAQ</th>
                            <td>Answers common questions</td>
                            <td>Short, direct answers</td>
                            <td>You</td>
                        </tr>
                        <tr>
                            <th scope="row">Privacy policy and terms</th>
                            <td>What happens to personal data; terms of sale</td>
                            <td>Text that matches what the site collects</td>
                            <td>You, checked by an adviser</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Give a service its own page when people search for it separately, and use words in its URL. Google's example of a descriptive address is <code>/pets/cats.html</code>, against a random string of characters that "is less helpful for users" (<a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">SEO starter guide</a>). Use <code>/services/logo-design</code> rather than <code>/page?id=7</code>.</p>
            <p>Then sketch each page on paper at phone width: boxes for the headline, proof and main action, in reading order.</p>
            <p>If you are replacing an old site, list every current URL and map each one to its new page with a permanent redirect. Google advises keeping redirects "generally at least 1 year" and says to expect temporary fluctuation in ranking during the move (<a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer">Google Search Central on site moves</a>). Our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> covers the launch checks.</p>

            <h2 id="gather-your-content">Gather the content only you can supply</h2>
            <p>Collect your words, photos and files before design starts. Our <Link to="/services/website-design-development">website design and development</Link> page says delays usually come from waiting on content, and that a typical site takes from 1 to 6 weeks depending on its size.</p>
            <h3 id="copy-notes">Copy notes</h3>
            <p>Write rough notes for each page: what you offer, for whom, where, how to start, and what customers ask on the phone. A writer can polish notes but cannot invent your knowledge of the business. If you want help with the writing, <Link to="/services/content-creation">our content creation service</Link> includes website copy.</p>
            <h3 id="photos-and-reviews">Photos and reviews</h3>
            <p>Use your own photos of the premises, products and finished work, shot in daylight, and keep the originals. Publish real reviews only, with the customer's permission; if you have none yet, leave the section out.</p>
            <h3 id="logo-and-brand-files">Logo and brand files</h3>
            <p>Find the vector logo files (SVG, EPS, AI or PDF), colour codes and font names; a logo copied from social media blurs when enlarged. If the logo is all you have, read <Link to="/blogs/logo-vs-brand-identity">what a brand identity includes beyond the logo</Link> and <Link to="/blogs/brand-style-guide">what goes into a brand style guide</Link>.</p>
            <h3 id="forms-and-privacy">Forms and privacy</h3>
            <p>An enquiry form collects personal data: a name, an email address, often a phone number. Decide before launch what you collect, why, who sees it and how long you keep it. The privacy section further down says what regulators expect you to tell visitors.</p>

            <h2 id="own-your-domain-and-accounts">Keep the domain and every account in the business's name</h2>
            <p>Whoever is named as the registrant holds the domain, so register it in the business's name with a business email address and keep the registrar login yourself.</p>
            <p>For .com and other ICANN-governed domains, the registrar must give the registrant the transfer code "within five (5) calendar days of your request", and changing the registrant's name, organisation or email address can block a move to another registrar for 60 days (<a href="https://www.icann.org/resources/pages/name-holder-faqs-2017-10-10-en" target="_blank" rel="noopener noreferrer">ICANN name holder FAQ</a>). Country domains such as .co.uk, .nl or .ae have their own registries and rules, so ask your registrar how a transfer works before you need one.</p>
            <Callout title="Watch out">
                <p>If a developer or agency registered the domain in their own name, getting it back usually depends on their cooperation. Move it to the business before the build starts; on a .com, that change can trigger the 60-day transfer lock.</p>
            </Callout>
            <p>Then settle who owns each account:</p>
            <div className="blog-table" role="region" aria-label="Who owns each website account" tabIndex={0}>
                <table>
                    <caption>Who owns each account</caption>
                    <thead>
                        <tr>
                            <th scope="col">Account</th>
                            <th scope="col">Owned by</th>
                            <th scope="col">Access for your provider</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Domain registrar</th>
                            <td>The business</td>
                            <td>None needed: you make DNS changes on their instructions and keep the main login and transfer code</td>
                        </tr>
                        <tr>
                            <th scope="row">Hosting or platform plan</th>
                            <td>The business, billed to it</td>
                            <td>Their own user account</td>
                        </tr>
                        <tr>
                            <th scope="row">Website admin</th>
                            <td>The business, as top administrator</td>
                            <td>Their own user account</td>
                        </tr>
                        <tr>
                            <th scope="row">Google Search Console</th>
                            <td>The business, as a verified owner</td>
                            <td>Full user: has view rights to all data and can take some actions (<a href="https://support.google.com/webmasters/answer/7687615?hl=en" target="_blank" rel="noopener noreferrer">Search Console Help</a>)</td>
                        </tr>
                        <tr>
                            <th scope="row">Google Analytics 4</th>
                            <td>The business, as Administrator</td>
                            <td>Editor: controls property settings but cannot manage users (<a href="https://support.google.com/analytics/answer/9305587?hl=en" target="_blank" rel="noopener noreferrer">Google Analytics Help on access roles</a>)</td>
                        </tr>
                        <tr>
                            <th scope="row">Payment gateway</th>
                            <td>The business, so money settles to its bank</td>
                            <td>Test access during the build</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>In Search Console only property owners can add or remove users and change permissions, and a property needs at least one verified owner (<a href="https://support.google.com/webmasters/answer/7687615?hl=en" target="_blank" rel="noopener noreferrer">Search Console Help</a>), so verify the business as an owner yourself. Our <Link to="/blogs/agency-access-guide">guide to access for developers and agencies</Link> lists the right role in each tool and how to take access back.</p>

            <h2 id="choose-a-platform">Which website platform should a small business choose?</h2>
            <p>When we read <a href="https://w3techs.com/technologies/overview/content_management" target="_blank" rel="noopener noreferrer">W3Techs</a> on 17 November 2026, WordPress was on 38.5% of all websites, Shopify on 5.5%, Wix on 4.2%, Squarespace on 2.4% and Webflow on 0.8%.</p>
            <p>Popularity does not settle it. Who will update the site and whether you sell online matter more. Speed on real phones also varies by platform:</p>
            <Chart
                type="bar"
                title="Websites with good Core Web Vitals on phones, October 2026"
                unit="%"
                series={[
                    { name: 'Worldwide', data: [['All sites', 53], ['WordPress', 49], ['Shopify', 77], ['Wix', 81], ['Squarespace', 71], ['Webflow', 72]] },
                    { name: 'United States', data: [['All sites', 64], ['WordPress', 63], ['Shopify', 86], ['Wix', 89], ['Squarespace', 83], ['Webflow', 81]] },
                    { name: 'United Kingdom', data: [['All sites', 68], ['WordPress', 67], ['Shopify', 84], ['Wix', 91], ['Squarespace', 85], ['Webflow', 80]] },
                ]}
                source="HTTP Archive Tech Report, Chrome UX Report data, October 2026"
                sourceUrl="https://httparchive.org/reports/techreport/comparison?tech=ALL,WordPress,Shopify,Wix,Squarespace,Webflow&geo=ALL&rank=ALL"
                note="Share of websites whose real Chrome users on phones had good LCP, INP and CLS at the 75th percentile. The US and UK figures count page loads by users in those countries; change Geo on the same report to see them. HTTP Archive notes that correlation does not equal causation. Sites measured on phones in the US: 1,231,797 in all, 330,180 on WordPress, 118,272 on Shopify, 34,241 on Wix, 40,344 on Squarespace and 15,239 on Webflow. In the UK: 396,913 in all, 107,418 on WordPress, 39,489 on Shopify, 10,901 on Wix, 7,460 on Squarespace and 3,792 on Webflow."
            />
            <p>Worldwide, 77% of Shopify sites and 81% of Wix sites had good Core Web Vitals on phones in October 2026, against 49% of WordPress sites (<a href="https://httparchive.org/reports/techreport/comparison?tech=ALL,WordPress,Shopify,Wix,Squarespace,Webflow&geo=ALL&rank=ALL" target="_blank" rel="noopener noreferrer">HTTP Archive Tech Report</a>). For visitors in the US and the UK every platform's share is higher. HTTP Archive warns that <a href="https://httparchive.org/reports/techreport/landing" target="_blank" rel="noopener noreferrer">correlation does not equal causation</a>: a WordPress site on good hosting with a light theme can pass, and a heavy Shopify theme can fail.</p>
            <div className="blog-table" role="region" aria-label="Website platforms compared" tabIndex={0}>
                <table>
                    <caption>Platforms compared by upkeep and cost</caption>
                    <thead>
                        <tr>
                            <th scope="col">Option</th>
                            <th scope="col">Suits</th>
                            <th scope="col">Running costs</th>
                            <th scope="col">Get at handover</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">WordPress</th>
                            <td>Sites your staff edit often, with freedom to move host</td>
                            <td>Hosting, paid plugins and themes, and regular updates</td>
                            <td>Admin and hosting logins, licence keys, a backup</td>
                        </tr>
                        <tr>
                            <th scope="row">Hosted builder such as Wix or Squarespace</th>
                            <td>Small sites the owner edits without a developer</td>
                            <td>The plan fee and any paid apps</td>
                            <td>The owner login</td>
                        </tr>
                        <tr>
                            <th scope="row">Shopify</th>
                            <td>Online stores with little technical upkeep</td>
                            <td>Plan fee, apps, and payment processing fees</td>
                            <td>The owner login and an app list</td>
                        </tr>
                        <tr>
                            <th scope="row">Custom code</th>
                            <td>Features no platform covers, such as a booking flow tied to your own systems</td>
                            <td>Hosting, and a developer for each change</td>
                            <td>Source code, repository access, documentation</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>For an online store, <Link to="/services/ecommerce-solutions">our e-commerce service</Link> includes a short written comparison of Shopify, WooCommerce and a custom build, with our recommendation. What each option costs to run is in <Link to="/blogs/small-business-website-cost">what a small business website costs</Link>, at each provider's own prices.</p>

            <h2 id="write-targets-into-the-brief">Write speed and accessibility targets into the brief</h2>
            <p>Google's thresholds for good Core Web Vitals are Largest Contentful Paint (LCP) within 2.5 seconds, Interaction to Next Paint (INP) of 200 milliseconds or less and Cumulative Layout Shift (CLS) of 0.1 or less, at the 75th percentile of page loads, on mobile and desktop separately (<a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">web.dev</a>). Our guide explains <Link to="/blogs/core-web-vitals-explained">what LCP, INP and CLS measure</Link>.</p>
            <p>A new site has no real-user data yet: PageSpeed Insights notes that a page may lack it if it "has been recently published" (<a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">PageSpeed Insights documentation</a>). Before launch, ask for a lab test in PageSpeed Insights, which runs Lighthouse on a simulated load, and a check on a real phone. Lighthouse cannot measure INP because it loads pages without a user, so Total Blocking Time (TBT) stands in for it (<a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">web.dev</a>).</p>
            <p>For accessibility, WebAIM's February 2026 test of the top million home pages found automatically detectable WCAG failures on 95.9% of them, with an average of 56.1 errors per page (<a href="https://webaim.org/projects/million/" target="_blank" rel="noopener noreferrer">The WebAIM Million 2026</a>).</p>
            <Chart
                type="bar"
                title="Most common accessibility failures on the top million home pages, 2026"
                unit="%"
                data={[['Low contrast text', 83.9], ['Missing alternative text for images', 53.1], ['Missing form input labels', 51], ['Empty links', 46.3], ['Empty buttons', 30.6], ['Missing document language', 13.5]]}
                source="WebAIM, The WebAIM Million 2026"
                sourceUrl="https://webaim.org/projects/million/"
                note="Share of the top 1,000,000 home pages with each failure, found by the WAVE engine in February 2026. Automated tools cannot detect every failure."
            />
            <p>These six failures made up 96% of all the errors WebAIM found, so name them in the brief. Ask for WCAG 2.2 level AA, including:</p>
            <ul>
                <li>Text contrast of at least 4.5:1, or 3:1 for large text (<a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">W3C</a>)</li>
                <li>Alt text for every image that carries information</li>
                <li>A label on every form field</li>
                <li>No empty links or buttons</li>
                <li>Tap targets of at least 24 by 24 CSS pixels</li>
                <li>The page language set in the code</li>
            </ul>
            <p>We tested 385 US small business home pages and found these same problems; the results are in <Link to="/blogs/small-business-website-accessibility-study">our accessibility study</Link>.</p>

            <h2 id="accessibility-duties">Does a private business website have to be accessible?</h2>
            <p>Often yes, but the rule depends on where you trade and who your customers are. We read the sources below on 17 November 2026. None of this is legal advice.</p>
            <ul>
                <li>United States. The Department of Justice says the ADA's requirements apply to the goods and services of businesses open to the public, "including those offered on the web". It also says it has no regulation setting detailed web standards, and names WCAG as helpful guidance (<a href="https://www.ada.gov/resources/web-guidance/" target="_blank" rel="noopener noreferrer">ADA.gov web guidance</a>). A separate rule covers state and local governments.</li>
                <li>United Kingdom. The Equality Act 2010 requires reasonable adjustments for disabled customers. The Equality and Human Rights Commission's draft code of practice for services, published on GOV.UK in 2026, says the obligation "also applies to the provision of services on a website" (<a href="https://www.gov.uk/government/publications/equality-act-2010-code-of-practice-for-services-public-functions-and-associations-2026/equality-act-2010-draft-code-of-practice-for-services-public-functions-and-associations-2026" target="_blank" rel="noopener noreferrer">GOV.UK code of practice</a>). Public sector bodies also have a fixed standard, WCAG 2.2 AA, under their own regulations, and GOV.UK notes that bodies exempt from those regulations still have to make reasonable adjustments (<a href="https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps" target="_blank" rel="noopener noreferrer">GOV.UK guidance for public sector bodies</a>).</li>
                <li>European Union. The European Accessibility Act applies to the services it lists, including e-commerce services, provided to consumers after 28 June 2025, and exempts microenterprises providing services: fewer than 10 people and a turnover or balance sheet total of at most EUR 2 million (<a href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L0882" target="_blank" rel="noopener noreferrer">Directive (EU) 2019/882 on EUR-Lex</a>). Each member state, the Netherlands included, writes it into its own law, so ask an adviser whether your shop is in scope.</li>
                <li>Australia, the UAE and most other countries have their own laws. We did not research them for this guide, so ask a local adviser.</li>
            </ul>
            <p>A fixed target in the brief protects you under every one of these. Put the level you want, WCAG 2.2 AA, in writing, so it is built in from the start rather than fixed after a complaint.</p>

            <h2 id="privacy-and-cookies">What do you have to tell visitors about their data?</h2>
            <p>Any site with a contact form, a booking tool, a shop or analytics collects personal data, so plan for it. Again, ask an adviser what applies to your business.</p>
            <ul>
                <li>United States. The FTC tells small businesses to honour the privacy promises they make: "reread your privacy policy to make sure you're honoring the promises you've pledged" (<a href="https://www.ftc.gov/business-guidance/privacy-security" target="_blank" rel="noopener noreferrer">FTC privacy and security guidance</a>). Its guide to protecting personal information says to "keep only what you need" (<a href="https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" target="_blank" rel="noopener noreferrer">FTC guide for business</a>).</li>
                <li>United Kingdom. GOV.UK tells businesses that they must tell people who they are and how they will use their information, and that people have rights to see, correct or delete their data (<a href="https://www.gov.uk/data-protection-your-business" target="_blank" rel="noopener noreferrer">GOV.UK data protection guidance</a>). It also says businesses must tell the Information Commissioner's Office how they use personal information.</li>
                <li>European Union. Under the GDPR you must clearly tell people who you are, why you process their data and on what legal basis, and consent must be "freely given, specific, informed and unambiguous". The rules also reach organisations outside the EU that offer goods or services to people there (<a href="https://europa.eu/youreurope/business/dealing-with-customers/data-protection/data-protection-gdpr/index_en.htm" target="_blank" rel="noopener noreferrer">Your Europe on GDPR</a>).</li>
            </ul>
            <p>Cookies and similar tools have their own EU rule. Storing information on a visitor's device, or reading it, needs their consent after clear and comprehensive information, unless it is strictly necessary for a service they asked for (<a href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02002L0058-20091219" target="_blank" rel="noopener noreferrer">Article 5(3) of the ePrivacy Directive</a>). The UK has its own cookie rules, so if you serve UK visitors, read the Information Commissioner's Office guidance on cookies.</p>
            <p>In the brief, ask the provider to list every tool that sets cookies or sends visitor data elsewhere: analytics, chat, ad pixels, embedded maps and videos. Your privacy policy has to match that list.</p>

            <h2 id="check-providers">How to choose a web designer: check past work first</h2>
            <p>Ask each web designer, developer or agency on your list for two or three live sites they built. Try the main action on your own phone, then run each address through <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a> and WebAIM's <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">WAVE</a> checker. If those sites fail, ask why.</p>
            <p>Google's questions to ask an SEO include examples of past work and whether they will share every change they make to your site (<a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">Google Search Central on whether you need SEO</a>). For a website, also ask:</p>
            <ol>
                <li>Who registers the domain, and in whose name?</li>
                <li>Who owns the code, design files and content once we have paid?</li>
                <li>How many revision rounds are included?</li>
                <li>Who fixes problems after launch, for how long and at what cost?</li>
                <li>Which yearly costs will we pay directly?</li>
                <li>Which accessibility level will you build to, and how will you show it?</li>
            </ol>
            <p>Be wary of anyone who guarantees rankings, because <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">Google says</a> "No one can guarantee a #1 ranking on Google." The same page calls a redesign or a new site a good time to hire for SEO, so bring <Link to="/services/seo-services">SEO help</Link> in while you plan, not after launch.</p>
            <p>If the provider is overseas, compare how they work as well as what they charge: time zones, who you speak to, and where the contract is governed.</p>

            <h2 id="put-it-in-writing">Put scope, ownership and handover in writing</h2>
            <p>Before work starts, get a written agreement that covers:</p>
            <ul>
                <li>The scope: pages, features, and who supplies copy and photos</li>
                <li>How many review rounds are included, and what counts as a new request</li>
                <li>That the domain, content, design files and code belong to the business once paid for</li>
                <li>The payment schedule</li>
                <li>Support after launch, and what it costs after that</li>
                <li>A handover list: logins, source files, licences for themes, plugins, fonts and photos, and documentation</li>
            </ul>
            <p>Who owns finished work depends on the contract and on the law that governs it, and the rules differ between the US, the UK, the Netherlands and India. Our guide to <Link to="/blogs/outsourcing-nda-ip-ownership">NDAs, IP and ownership when you outsource</Link> explains the main differences. Have a lawyer read any contract before you sign it.</p>
            <p>Our own <Link to="/services/website-design-development">website projects</Link> start with a scoping call, then a quote set in writing before work starts. Typical projects include two to three revision rounds, and at launch we deploy to your domain and hand over logins and source files, with a 7-day support window. Ownership of the final deliverables named in your quote passes to you on full payment.</p>

            <h2 id="budget-for-running-costs">Budget for the build and for every year after</h2>
            <p>Price follows scope: the number of pages, whether the site needs e-commerce or a content management system, how much custom functionality it involves, and whether the copy needs writing. Ask every provider to price design, build, content, running costs and support separately, in the currency you will pay in.</p>
            <p>Add the yearly costs as well: domain renewal, hosting or plan fees, paid themes, plugins or apps, payment fees and updates. On the online stores we build, you pay platform, domain, hosting and payment gateway fees directly to those providers, outside our quote. Providers' own prices change, so check them on the day; the <Link to="/blogs/small-business-website-cost">website cost guide</Link> shows where each one stood when we read it.</p>

            <h2 id="one-page-brief">Website brief template: a one-page brief you can copy</h2>
            <p>Fill this in, attach your wireframes and send the same copy to every provider.</p>
            <Code lang="plaintext" title="website-brief.txt">{\`WEBSITE BRIEF: [business name, contact]

1. The one job: [call / message / enquiry / booking / purchase / visit]
   Goal in one sentence: [ ]
   Key events to track: [form sent, call tap, message tap, purchase]
2. Visitors: [who, where, their questions and worries]
3. Pages (wireframes attached): [Home, one per service, About, Contact,
   FAQ, Privacy policy, Terms]
   Old URLs that need redirects: [attached / none]
4. Content we supply: [copy notes, photos, logo files (SVG or PDF), reviews]
   Help we need: [writing / photography / none]
5. Features: [enquiry form, messaging link, booking, payments, blog]
6. Accounts in the business's name: registrar, hosting or platform,
   email, Search Console (owner), Google Analytics (administrator)
7. Targets: Core Web Vitals on phones, 75th percentile:
   LCP 2.5 s or less, INP 200 ms or less, CLS 0.1 or less
   (lab test before launch, with TBT in place of INP;
   real-user data once Chrome has enough visits)
   WCAG 2.2 level AA: contrast 4.5:1, tap targets 24 by 24 CSS px,
   alt text, labelled form fields
8. Data: [what the site collects, tools that set cookies or send data
   elsewhere, privacy policy and consent banner, who writes them]
9. Who updates the site after launch: [us / you / both]
10. Budget range and launch date: [ ]
11. Price separately: design, build, content, running costs, support
    (currency: [ ])\`}</Code>

            <h2 id="mistakes-to-avoid">Mistakes that cost time later</h2>
            <ol>
                <li>Letting a developer register the domain in their own name</li>
                <li>Approving desktop mockups only</li>
                <li>Designing around placeholder text</li>
                <li>Hiding the main message in a homepage slider or behind a pop-up</li>
                <li>Replacing a site without redirects</li>
                <li>Launching with no key events</li>
                <li>Adding a form or analytics with no privacy notice</li>
                <li>Leaving accessibility out of the brief</li>
            </ol>

            <h2 id="where-to-start">Where to start</h2>
            <ol>
                <li>Write the one-sentence goal and its key events.</li>
                <li>Check whose name is on your domain, Search Console and Google Analytics.</li>
                <li>Sketch the home page and one service page at phone width.</li>
                <li>Start a folder for copy notes, photos, logo files and reviews.</li>
                <li>Fill in the brief and send it to every provider on your list.</li>
            </ol>

            <h2 id="how-we-work">How we work with clients abroad</h2>
            <p>N&D Co. is a brand and growth agency based in India. We build websites for clients in the <Link to="/locations/usa">United States</Link> and the <Link to="/locations/netherlands">Netherlands</Link>, among other countries, and take enquiries from the <Link to="/locations/uae">UAE</Link> too. If we are on your list, <Link to="/#contact">send us your brief</Link> and we will answer it point by point. There are more guides on our <Link to="/blogs/topic/websites">websites topic page</Link>.</p>
        </>
    );
}
`;export{e as default};