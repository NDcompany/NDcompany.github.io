var e=`import { Link } from 'react-router-dom';\r
import { Callout, Chart, Code } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>To plan a business website before you hire anyone, settle five things on paper: the one action the site must get visitors to take, a phone-sized sketch of each page, the content only you can supply, the accounts that must stay in the business's name, and the speed and accessibility targets the site must meet. Put them in a one-page brief and send it to every provider, so the quotes describe the same job.</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>In 2025, 77.91% of the page views <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india/#yearly-2019-2025" target="_blank" rel="noopener noreferrer">StatCounter</a> tracked in India came from mobile phones. Sketch every page at phone width first.</li>\r
                    <li>In September 2026, only 32% of websites gave visitors in India good Core Web Vitals on phones, against 53% worldwide (HTTP Archive's <a href="https://httparchive.org/reports/techreport/comparison?tech=ALL,WordPress,Shopify,Wix,Webflow&geo=India&rank=ALL" target="_blank" rel="noopener noreferrer">India figures</a> and <a href="https://httparchive.org/reports/techreport/comparison?tech=ALL,WordPress,Shopify,Wix,Webflow&geo=ALL&rank=ALL" target="_blank" rel="noopener noreferrer">worldwide figures</a>). Write speed targets into the brief.</li>\r
                    <li>In February 2026, 95.9% of the top million home pages had accessibility failures that automated tools can detect (<a href="https://webaim.org/projects/million/" target="_blank" rel="noopener noreferrer">WebAIM</a>). Ask for WCAG 2.2 level AA.</li>\r
                    <li>Keep the domain, Search Console and Google Analytics in the business's name, and give your provider its own, limited access.</li>\r
                    <li>Send every provider the same written brief, so every quote prices the same job.</li>\r
                </ul>\r
            </Callout>\r
\r
            <h2 id="decide-the-one-job">Decide the one job the site must do</h2>\r
            <p>Start with what you want visitors to do: call, send a WhatsApp message or an enquiry, book, buy, or visit the shop. Choose the one action that matters most and write it as a sentence, for example: "A visitor who needs a plumber in our area can call us from any page in one tap." Give secondary actions less space than the main one.</p>\r
            <p>Decide now how you will measure it. Google Analytics 4 can record it as a key event, its term for an action "particularly important to the success of your business" (<a href="https://support.google.com/analytics/answer/13965727?hl=en" target="_blank" rel="noopener noreferrer">Google Analytics Help on key events</a>). Ask for key events for sent forms, taps on the phone number and the WhatsApp button, and purchases, all set up before launch.</p>\r
            <p>A WhatsApp link is <code>https://wa.me/</code> followed by the full number in international format, without zeros, brackets or dashes (<a href="https://faq.whatsapp.com/5913398998672934/?locale=en_US" target="_blank" rel="noopener noreferrer">WhatsApp Help Center</a>), so an Indian mobile number becomes <code>https://wa.me/91XXXXXXXXXX</code>.</p>\r
\r
            <h2 id="plan-for-phones">Plan for the phone your customers use</h2>\r
            <p>In 2025, 77.91% of the page views <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india/#yearly-2019-2025" target="_blank" rel="noopener noreferrer">StatCounter</a> recorded in India came from mobile phones and 21.55% from desktops, against a <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/#yearly-2019-2025" target="_blank" rel="noopener noreferrer">mobile share of 58.5% worldwide</a>. Mobile's share in India has stayed above 69% in every year since 2019.</p>\r
            <Chart\r
                type="line"\r
                title="Share of web page views in India by device, 2019 to 2025"\r
                unit="%"\r
                series={[\r
                    { name: 'Mobile', data: [['2019', 74.22], ['2020', 69.54], ['2021', 75.96], ['2022', 75.09], ['2023', 76.43], ['2024', 78.47], ['2025', 77.91]] },\r
                    { name: 'Desktop', data: [['2019', 25.37], ['2020', 29.97], ['2021', 23.56], ['2022', 24.47], ['2023', 23.15], ['2024', 21.01], ['2025', 21.55]] },\r
                ]}\r
                source="StatCounter Global Stats, desktop vs mobile vs tablet market share, India, 2019 to 2025"\r
                sourceUrl="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india/#yearly-2019-2025"\r
                note="Share of page views by device type each year, measured across StatCounter's 1 million+ member sites. Tablets stayed between 0.41% and 0.54% in every year shown."\r
            />\r
            <p>Google uses the mobile version of a site's content for indexing and ranking. It recommends responsive design and won't load content that needs a swipe, click or typing to load (<a href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" target="_blank" rel="noopener noreferrer">Google Search Central on mobile-first indexing</a>). Put these lines in the brief:</p>\r
            <ul>\r
                <li>Design every page at phone width first, then widen it.</li>\r
                <li>Keep the main action on the first screen of the phone layout.</li>\r
                <li>Make tap targets at least 24 by 24 CSS pixels, the minimum in <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html" target="_blank" rel="noopener noreferrer">WCAG 2.2 at level AA</a>.</li>\r
                <li>Leave out pop-ups that cover the content, which Google calls <a href="https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials" target="_blank" rel="noopener noreferrer">intrusive interstitials</a>.</li>\r
            </ul>\r
\r
            <h2 id="sketch-pages-and-wireframes">Sketch the page list and a rough wireframe of each page</h2>\r
            <p>A typical page list for a service business:</p>\r
            <div className="blog-table" role="region" aria-label="Pages a business website usually needs" tabIndex={0}>\r
                <table>\r
                    <caption>Pages a business website usually needs</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Page</th>\r
                            <th scope="col">Its job</th>\r
                            <th scope="col">Must include</th>\r
                            <th scope="col">Who supplies it</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">Home</th>\r
                            <td>Says what you do, for whom and where</td>\r
                            <td>The main action on the first screen, plus reviews or photos of real work</td>\r
                            <td>You (facts) and the designer (layout)</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">One page per service</th>\r
                            <td>Answers one need people search for</td>\r
                            <td>What is included, who it suits, how to start</td>\r
                            <td>You, or a writer using your notes</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">About</th>\r
                            <td>Shows who is behind the business</td>\r
                            <td>Real photos and facts</td>\r
                            <td>You</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Contact</th>\r
                            <td>Makes getting in touch easy</td>\r
                            <td>Phone, WhatsApp, email, form, area and hours, matching your <Link to="/blogs/google-business-profile-guide">Google Business Profile</Link></td>\r
                            <td>You</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">FAQ</th>\r
                            <td>Answers common questions</td>\r
                            <td>Short, direct answers</td>\r
                            <td>You</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Privacy policy and terms</th>\r
                            <td>What happens to personal data; terms of sale</td>\r
                            <td>Text that matches what the site collects</td>\r
                            <td>You, checked by an adviser</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Give a service its own page when people search for it separately, and use words in its URL. Google suggests URLs like its example <code>/pets/cats.html</code> over random identifiers (<a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">SEO starter guide</a>), so use <code>/services/logo-design</code> rather than <code>/page?id=7</code>.</p>\r
            <p>Then sketch each page on paper at phone width: boxes for the headline, proof and main action, in reading order.</p>\r
            <p>If you are replacing an old site, list every current URL and map each one to its new page with a permanent redirect. Google advises keeping redirects "generally at least 1 year" and warns of "temporary fluctuation in site ranking during the move" (<a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer">Google Search Central on site moves</a>). Our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> covers the launch checks.</p>\r
\r
            <h2 id="gather-your-content">Gather the content only you can supply</h2>\r
            <p>Collect your words, photos and files before design starts. Our <Link to="/services/website-design-development">website design and development</Link> page says a site takes 1 to 6 weeks, depending on its size, and that delays usually come from waiting on content.</p>\r
            <h3 id="copy-notes">Copy notes</h3>\r
            <p>Write rough notes for each page: what you offer, for whom, where, how to start, and what customers ask on the phone. A writer can polish notes but cannot invent your knowledge of the business. If you want help with the writing, <Link to="/services/content-creation">our content creation service</Link> includes website copy.</p>\r
            <h3 id="photos-and-reviews">Photos and reviews</h3>\r
            <p>Use your own photos of the premises, products and finished work, shot in daylight, and keep the originals. Publish real reviews only, with the customer's permission; if you have none yet, leave the section out.</p>\r
            <h3 id="logo-and-brand-files">Logo and brand files</h3>\r
            <p>Find the vector logo files (SVG, EPS, AI or PDF), colour codes and font names; a logo copied from social media blurs when enlarged. If the logo is all you have, read <Link to="/blogs/logo-vs-brand-identity">what a brand identity includes beyond the logo</Link> and <Link to="/blogs/brand-style-guide">what goes into a brand style guide</Link>.</p>\r
            <h3 id="forms-and-privacy">Forms and privacy</h3>\r
            <p>An enquiry form collects personal data. On 13 November 2025, India notified the Digital Personal Data Protection Rules, 2025 (<a href="https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf" target="_blank" rel="noopener noreferrer">Gazette of India</a>). The government says the Rules give organisations 18 months, in phases, to comply. They require "standalone, clear and simple consent notices" that explain why personal data is collected, and clear contact details for questions about it (<a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&reg=3&lang=2" target="_blank" rel="noopener noreferrer">Press Information Bureau</a>). Ask a qualified adviser what applies to you, and have the notice ready before launch.</p>\r
\r
            <h2 id="own-your-domain-and-accounts">Keep the domain and every account in the business's name</h2>\r
            <p>Whoever is named as the registrant holds the domain, so register it in the business's name with a business email address and keep the registrar login yourself.</p>\r
            <p>For .com and other ICANN-governed domains, the registrar must give the registrant the transfer code within five calendar days of a request, and changing the registrant's name, organisation or email can block a move to another registrar for 60 days (<a href="https://www.icann.org/resources/pages/name-holder-faqs-2017-10-10-en" target="_blank" rel="noopener noreferrer">ICANN</a>). For .in, registrars must give the code to the registrant on request, and a change of registrant goes through the sponsoring registrar, not the registry (<a href="https://www.registry.in/faqs" target="_blank" rel="noopener noreferrer">.IN Registry</a>).</p>\r
            <Callout title="Watch out">\r
                <p>If a developer or agency registered the domain in their own name, getting it back usually depends on their cooperation. Move it to the business before the build starts; on a .com, that change can trigger the 60-day transfer lock.</p>\r
            </Callout>\r
            <p>Google treats a country-code domain such as .in as "a strong signal" that a site is meant for that country, but says server location "is not a definitive signal" (<a href="https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites" target="_blank" rel="noopener noreferrer">Google Search Central on multi-regional sites</a>). So pick .in or .com for the market you serve, and pick hosting for speed and support.</p>\r
            <p>Then settle who owns each account:</p>\r
            <div className="blog-table" role="region" aria-label="Who owns each website account" tabIndex={0}>\r
                <table>\r
                    <caption>Who owns each account</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Account</th>\r
                            <th scope="col">Owned by</th>\r
                            <th scope="col">Access for your provider</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">Domain registrar</th>\r
                            <td>The business</td>\r
                            <td>None needed: you make DNS changes on their instructions and keep the main login and transfer code</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Hosting or platform plan</th>\r
                            <td>The business, billed to it</td>\r
                            <td>Their own user account</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Website admin</th>\r
                            <td>The business, as top administrator</td>\r
                            <td>Their own user account</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Google Search Console</th>\r
                            <td>The business, as a verified owner</td>\r
                            <td>Full user: sees all data, takes some actions (<a href="https://support.google.com/webmasters/answer/7687615?hl=en" target="_blank" rel="noopener noreferrer">Search Console Help</a>)</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Google Analytics 4</th>\r
                            <td>The business, as Administrator</td>\r
                            <td>Editor: changes settings, cannot manage users (<a href="https://support.google.com/analytics/answer/9305587?hl=en" target="_blank" rel="noopener noreferrer">Google Analytics Help on access roles</a>)</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Payment gateway</th>\r
                            <td>The business, so money settles to its bank</td>\r
                            <td>Test access during the build</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Search Console owners decide who else has access (<a href="https://support.google.com/webmasters/answer/7687615?hl=en" target="_blank" rel="noopener noreferrer">Search Console Help</a>), so verify the business as an owner yourself. Domain properties use DNS record verification (<a href="https://support.google.com/webmasters/answer/34592?hl=en" target="_blank" rel="noopener noreferrer">Search Console Help on adding a property</a>), another reason to keep the registrar login.</p>\r
\r
            <h2 id="choose-a-platform">Which website platform should a small business choose?</h2>\r
            <p>In October 2026, <a href="https://w3techs.com/technologies/overview/content_management" target="_blank" rel="noopener noreferrer">W3Techs</a> found WordPress on 40.2% of all websites, Shopify on 5.4%, Wix on 4.2% and Squarespace on 2.4%. Among .in sites whose content management system it could identify, WordPress had 63.8%, Shopify 14.4% and IndiaMART 4.5% (<a href="https://w3techs.com/technologies/segmentation/tld-in-/content_management" target="_blank" rel="noopener noreferrer">W3Techs, .in sites</a>).</p>\r
            <p>Popularity does not settle it. Who will update the site and whether you sell online matter more. Speed on real phones also varies by platform:</p>\r
            <Chart\r
                type="bar"\r
                title="Websites with good Core Web Vitals on phones, September 2026"\r
                unit="%"\r
                series={[\r
                    { name: 'Worldwide', data: [['All sites', 53], ['WordPress', 48], ['Shopify', 76], ['Wix', 81], ['Webflow', 71]] },\r
                    { name: 'Visitors in India', data: [['All sites', 32], ['WordPress', 29], ['Shopify', 53], ['Wix', 56], ['Webflow', 39]] },\r
                ]}\r
                source="HTTP Archive Tech Report, Chrome UX Report data, September 2026"\r
                sourceUrl="https://httparchive.org/reports/techreport/comparison?tech=ALL,WordPress,Shopify,Wix,Webflow&geo=India&rank=ALL"\r
                note="Share of websites whose real Chrome users on phones had good LCP, INP and CLS at the 75th percentile. The India figures count page loads by users in India; set Geo to ALL on the same report for the worldwide figures. HTTP Archive notes that correlation does not equal causation. Sites measured for visitors in India: 745,962 in all, 186,717 on WordPress, 44,514 on Shopify, 7,825 on Wix and 5,454 on Webflow."\r
            />\r
            <p>Worldwide, 76% of Shopify sites and 81% of Wix sites had good Core Web Vitals on phones in September 2026, against 48% of WordPress sites (<a href="https://httparchive.org/reports/techreport/comparison?tech=ALL,WordPress,Shopify,Wix,Webflow&geo=ALL&rank=ALL" target="_blank" rel="noopener noreferrer">HTTP Archive, worldwide</a>). For visitors in India every figure is lower (<a href="https://httparchive.org/reports/techreport/comparison?tech=ALL,WordPress,Shopify,Wix,Webflow&geo=India&rank=ALL" target="_blank" rel="noopener noreferrer">HTTP Archive, India</a>). HTTP Archive warns that <a href="https://httparchive.org/reports/techreport/landing" target="_blank" rel="noopener noreferrer">correlation does not equal causation</a>, and results vary within each platform: worldwide, about half of WordPress sites pass and about a quarter of Shopify sites do not.</p>\r
            <div className="blog-table" role="region" aria-label="Website platforms compared" tabIndex={0}>\r
                <table>\r
                    <caption>Platforms compared by upkeep and cost</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Option</th>\r
                            <th scope="col">Suits</th>\r
                            <th scope="col">Running costs</th>\r
                            <th scope="col">Get at handover</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">WordPress</th>\r
                            <td>Sites your staff edit often. Open source under the <a href="https://wordpress.org/about/" target="_blank" rel="noopener noreferrer">GPLv2 or later licence</a>, so no one company controls your hosting.</td>\r
                            <td>Hosting, paid plugins, and updates: WordPress says to <a href="https://wordpress.org/documentation/article/updating-wordpress/" target="_blank" rel="noopener noreferrer">"always update"</a></td>\r
                            <td>Admin and hosting logins, licence keys, a backup</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Hosted builder such as Wix or Squarespace</th>\r
                            <td>Small sites the owner edits without a developer</td>\r
                            <td>The plan fee and any paid apps</td>\r
                            <td>The owner login</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Shopify</th>\r
                            <td>Online stores with little technical upkeep. Hosting is <a href="https://www.shopify.com/in/domains" target="_blank" rel="noopener noreferrer">included with every plan</a>.</td>\r
                            <td>Plan fee, apps, and a fee for third-party payment providers</td>\r
                            <td>The owner login and an app list</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Custom code</th>\r
                            <td>Features no platform covers, such as a booking flow tied to your own systems</td>\r
                            <td>Hosting, and a developer for each change</td>\r
                            <td>Source code, repository access, documentation</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>For an online store, <Link to="/services/ecommerce-solutions">our e-commerce service</Link> includes a short written comparison of Shopify, WooCommerce and a custom build, with our recommendation.</p>\r
\r
            <h2 id="write-targets-into-the-brief">Write speed and accessibility targets into the brief</h2>\r
            <p>Google's thresholds for good Core Web Vitals are Largest Contentful Paint (LCP) within 2.5 seconds, Interaction to Next Paint (INP) of 200 milliseconds or less and Cumulative Layout Shift (CLS) of 0.1 or less, at the 75th percentile of page loads, on mobile and desktop separately (<a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">web.dev</a>). Our guide explains <Link to="/blogs/core-web-vitals-explained">what LCP, INP and CLS measure</Link>. Speed can affect sales: redBus, a bus ticketing site based in India, increased sales by 7% after improving its INP (<a href="https://web.dev/case-studies/redbus-inp" target="_blank" rel="noopener noreferrer">web.dev case study, 2023</a>).</p>\r
            <p>A new site has no real-user data yet: PageSpeed Insights notes that a page may lack it if it "has been recently published" (<a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">PageSpeed Insights documentation</a>). Before launch, ask for a lab test in PageSpeed Insights, which runs Lighthouse on a simulated load, and a check on a real phone. A lab test cannot measure INP, because nobody is using the page; Total Blocking Time (TBT) stands in for it (<a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">web.dev</a>).</p>\r
            <p>For accessibility, WebAIM's February 2026 test of the top million home pages found automatically detectable WCAG failures on 95.9% of them, up from 94.8% in 2025, and an average of 56.1 errors per page. The 12,655 home pages on .in domains averaged 58.3 errors (<a href="https://webaim.org/projects/million/" target="_blank" rel="noopener noreferrer">The WebAIM Million 2026</a>).</p>\r
            <Chart\r
                type="bar"\r
                title="Most common accessibility failures on the top million home pages, 2026"\r
                unit="%"\r
                data={[['Low contrast text', 83.9], ['Missing alternative text for images', 53.1], ['Missing form input labels', 51], ['Empty links', 46.3], ['Empty buttons', 30.6], ['Missing document language', 13.5]]}\r
                source="WebAIM, The WebAIM Million 2026"\r
                sourceUrl="https://webaim.org/projects/million/"\r
                note="Share of the top 1,000,000 home pages with each failure, found by the WAVE engine in February 2026. Automated tools cannot detect every failure."\r
            />\r
            <p>These six failures made up 96% of all the errors WebAIM found, so name them in the brief. Ask for WCAG 2.2 level AA, including:</p>\r
            <ul>\r
                <li>Text contrast of at least 4.5:1, or 3:1 for large text (<a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">W3C</a>)</li>\r
                <li>Alt text for every image that carries information</li>\r
                <li>A label on every form field</li>\r
                <li>No empty links or buttons</li>\r
                <li>Tap targets of at least 24 by 24 CSS pixels</li>\r
                <li>The page language set in the code</li>\r
            </ul>\r
            <p>If you sell online to consumers in the EU, the European Accessibility Act applies from 28 June 2025 and covers e-commerce services, with an exemption for microenterprises (<a href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L0882" target="_blank" rel="noopener noreferrer">EUR-Lex</a>). Ask an adviser whether your business is in scope.</p>\r
\r
            <h2 id="check-providers">How to choose a web designer: check past work first</h2>\r
            <p>Ask each web designer, developer or agency on your list for two or three live sites they built. Try the main action on your own phone, then run each address through <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a> and WebAIM's <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">WAVE</a> checker. If those sites fail, ask why.</p>\r
            <p>Google's list of questions to ask an SEO includes examples of previous work and whether they will share and explain every change they make (<a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">Google Search Central on whether you need SEO</a>). For a website, also ask:</p>\r
            <ol>\r
                <li>Who registers the domain, and in whose name?</li>\r
                <li>Who owns the code, design files and content once we have paid?</li>\r
                <li>How many revision rounds are included?</li>\r
                <li>Who fixes problems after launch, for how long and at what cost?</li>\r
                <li>Which yearly costs will we pay directly?</li>\r
            </ol>\r
            <p>Be wary of anyone who guarantees rankings, because <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">Google says</a> "No one can guarantee a #1 ranking on Google." The same page calls a redesign or a new site a great time to hire for SEO, so bring <Link to="/services/seo-services">SEO help</Link> in while you plan, not after launch.</p>\r
\r
            <h2 id="put-it-in-writing">Put scope, ownership and handover in writing</h2>\r
            <p>Before work starts, get a written agreement that covers:</p>\r
            <ul>\r
                <li>The scope: pages, features, and who supplies copy and photos</li>\r
                <li>How many review rounds are included, and what counts as a new request</li>\r
                <li>That the domain, content, design files and code belong to the business once paid for</li>\r
                <li>The payment schedule</li>\r
                <li>Support after launch, and what it costs after that</li>\r
                <li>A handover list: logins, source files, licences for themes, plugins, fonts and photos, and documentation</li>\r
            </ul>\r
            <p>Our own <Link to="/services/website-design-development">website projects</Link> begin with a discovery call or email exchange, then a written scope, timeline and fixed quote. A 50% upfront payment starts the work, and typical projects include two to three revision rounds. At launch we deploy to your domain and hand over logins and source files, with a 7-day support window. Ownership passes to you once the final payment clears.</p>\r
\r
            <h2 id="budget-for-running-costs">Budget for the build and for every year after</h2>\r
            <p>Price follows scope. Our own quotes depend on the number of pages, whether the site needs e-commerce or a content management system, how much custom functionality it involves, and whether the copy needs writing.</p>\r
            <p>Add the yearly costs as well: domain renewal, hosting or plan fees, paid themes, plugins or apps, payment fees and updates. On the online stores we build, you pay platform, domain, hosting and payment gateway fees directly to those providers, outside our quote.</p>\r
            <p>Shopify India's pricing page, checked in October 2026, listed the Basic plan at ₹1,499 a month on yearly billing (<a href="https://www.shopify.com/in/pricing" target="_blank" rel="noopener noreferrer">Shopify India</a>). For orders paid through a third-party payment provider, the same page listed a Shopify fee of 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus. The provider charges its own rates separately (<a href="https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/pricing-overview" target="_blank" rel="noopener noreferrer">Shopify Help Center on pricing plans</a>). A store based in India has to use such a provider, because India is not among the countries where a business can use Shopify Payments (<a href="https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries" target="_blank" rel="noopener noreferrer">Shopify Help Center on supported countries</a>).</p>\r
\r
            <h2 id="one-page-brief">Website brief template: a one-page brief you can copy</h2>\r
            <p>Fill this in, attach your wireframes and send the same copy to every provider.</p>\r
            <Code lang="plaintext" title="website-brief.txt">{\`WEBSITE BRIEF: [business name, contact]\r
\r
1. The one job: [call / WhatsApp / enquiry / booking / purchase / visit]\r
   Goal in one sentence: [ ]\r
   Key events to track: [form sent, call tap, WhatsApp tap, purchase]\r
2. Visitors: [who, where, their questions and worries]\r
3. Pages (wireframes attached): [Home, one per service, About, Contact,\r
   FAQ, Privacy policy, Terms]\r
   Old URLs that need redirects: [attached / none]\r
4. Content we supply: [copy notes, photos, logo files (SVG or PDF), reviews]\r
   Help we need: [writing / photography / none]\r
5. Features: [enquiry form, WhatsApp link, booking, payments, blog]\r
6. Accounts in the business's name: registrar, hosting or platform,\r
   email, Search Console (owner), Google Analytics (administrator)\r
7. Targets: Core Web Vitals on phones, 75th percentile:\r
   LCP 2.5 s or less, INP 200 ms or less, CLS 0.1 or less\r
   (lab test before launch, with TBT in place of INP;\r
   real-user data once Chrome has enough visits)\r
   WCAG 2.2 level AA: contrast 4.5:1, tap targets 24 by 24 CSS px,\r
   alt text, labelled form fields\r
8. Who updates the site after launch: [us / you / both]\r
9. Budget range and launch date: [ ]\r
10. Price separately: design, build, content, running costs, support\`}</Code>\r
\r
            <h2 id="mistakes-to-avoid">Mistakes that cost time later</h2>\r
            <ol>\r
                <li>Letting a developer register the domain in their own name</li>\r
                <li>Approving desktop mockups only</li>\r
                <li>Designing around placeholder text</li>\r
                <li>Hiding the main message in a homepage slider or behind a pop-up</li>\r
                <li>Replacing a site without redirects</li>\r
                <li>Launching with no key events</li>\r
                <li>Adding a form with no privacy notice</li>\r
            </ol>\r
\r
            <h2 id="where-to-start">Where to start</h2>\r
            <ol>\r
                <li>Write the one-sentence goal and its key events.</li>\r
                <li>Check whose name is on your domain, Search Console and Google Analytics.</li>\r
                <li>Sketch the home page and one service page at phone width.</li>\r
                <li>Start a folder for copy notes, photos, logo files and reviews.</li>\r
                <li>Fill in the brief and send it to every provider on your list.</li>\r
            </ol>\r
            <p>There are more guides on our <Link to="/blogs/topic/websites">websites topic page</Link>. If we are on your list, <Link to="/#contact">send us your brief</Link>.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};