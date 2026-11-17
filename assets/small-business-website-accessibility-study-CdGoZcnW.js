var e=`import { Link } from 'react-router-dom';\r
import { Callout, Chart } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>Most US small business websites fail basic accessibility checks. In November 2026 we tested the homepages of 385 independent restaurants, cafes, dentists, law firms and hair salons in five US cities with axe-core, the open-source engine that, in Google's words, <a href="https://developer.chrome.com/docs/devtools/accessibility/reference" target="_blank" rel="noopener noreferrer">powers the Lighthouse panel</a> in Chrome. 335 of the 385 (87%) had at least one failure that axe rates serious or critical for people with disabilities. Dentists fared worst, at 65 of 68 sites (96%). The most common problem was text with too little contrast against its background, on 232 sites (60%).</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>335 of 385 homepages (87%) had at least one serious or critical failure of a WCAG 2.0, 2.1 or 2.2 level A or AA rule. 340 (88%) failed at least one rule of any impact, and the median site failed 2 rules.</li>\r
                    <li>By industry: dentists 96%, hair salons 93%, cafes 86%, law firms 83% and restaurants 79%.</li>\r
                    <li>Low contrast text was on 60% of sites, links with no readable name on 45%, images with no text alternative on 15% and untitled embedded frames, such as maps and booking widgets, on 15%.</li>\r
                    <li>Automated tools find only part of the problems. Deque, which makes axe-core, says it finds on average 57% of WCAG issues. A site with no failures in our test may still have others.</li>\r
                </ul>\r
            </Callout>\r
\r
            <p>If you are planning a new site or a rebuild, our guide to <Link to="/blogs/small-business-website-cost">what a small business website costs</Link> puts accessibility next to the other things you pay for.</p>\r
\r
            <h2 id="how-we-did-it">How we did the study</h2>\r
            <p>We drew the sample from <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>, the open map that anyone can edit. For each of five cities (Austin, Texas; Denver, Colorado; Columbus, Ohio; Portland, Oregon; and Atlanta, Georgia) we asked for every place inside the city boundary tagged as a restaurant, cafe, dentist, lawyer's office or hairdresser that lists a website. We left out places with a brand tag, which OpenStreetMap uses to mark chains, so the sample leans towards independent businesses. We removed duplicate websites, then drew up to 20 sites at random for each city and industry, with a fixed seed so the draw can be repeated.</p>\r
            <p>That gave 492 websites. On 6 November 2026 (US time) we opened each homepage once in Google Chrome, at a desktop window size of 1280 by 800 pixels, waited for the page to load plus 2 seconds, and ran axe-core 4.14.0 with its rules for WCAG 2.0, 2.1 and 2.2 at levels A and AA. We recorded only the failures axe is certain about. We did not log in, fill in forms, click anything or contact any business. Our test browser was set to allow the test script on pages whose security settings would otherwise block an added script, which changes nothing on the site itself.</p>\r
            <p>385 homepages loaded and could be tested. The other 107 could not be read: 33 domains (7% of the 492) no longer exist at all, and the rest refused our test browser, returned an error page or timed out. Every figure below is a share of the 385 readable sites.</p>\r
            <p>The limits matter. We tested one page per site, the homepage, on a desktop screen, once. OpenStreetMap only lists businesses someone has mapped, and not every chain carries a brand tag. With 62 to 89 sites per city and 68 to 83 per industry, a difference of a few points between two groups is not meaningful. And axe reports only what code can check, which we come back to below.</p>\r
\r
            <h2 id="headline">How accessible are US small business websites?</h2>\r
            <p>Not very, by the checks a machine can run. 335 of the 385 homepages (87%) failed at least one rule that axe rates serious or critical, the two highest of axe's four ratings (minor, moderate, serious, critical) of how much a problem affects people with disabilities. Counting every impact level, 340 sites (88%) failed at least one rule. Only 45 of 385 passed every automated check, and passing those checks does not mean a page is accessible.</p>\r
            <p>The median site failed 2 different rules, and a single rule can fail on many elements of the same page.</p>\r
            <p>For comparison, WebAIM's February 2026 scan of the top one million homepages, with a different tool and a different set of checks, found detectable WCAG 2 failures on <a href="https://webaim.org/projects/million/" target="_blank" rel="noopener noreferrer">95.9% of home pages, with low contrast text the most common at 83.9%</a>. The two numbers are not directly comparable, but they point the same way, and both put contrast first.</p>\r
\r
            <h2 id="by-industry">Which industries have the least accessible websites?</h2>\r
            <p>In our sample, dentists had the least accessible homepages: 65 of 68 (96%) had a serious or critical failure, followed by hair salons at 93%. Restaurants did best, and still 79% failed.</p>\r
            <Chart\r
                type="bar"\r
                unit="%"\r
                title="US small business homepages with at least one serious or critical accessibility failure, by industry"\r
                data={[\r
                    ['Dentists (68 sites)', 96],\r
                    ['Hair salons (81 sites)', 93],\r
                    ['Cafes (83 sites)', 86],\r
                    ['Law firms (75 sites)', 83],\r
                    ['Restaurants (78 sites)', 79],\r
                ]}\r
                source="N&D Co. study of 385 US small business homepages, axe-core 4.14.0, 6 November 2026"\r
                note="Share of readable homepages in Austin, Denver, Columbus, Portland and Atlanta with at least one WCAG 2.0, 2.1 or 2.2 A or AA failure that axe rates serious or critical. Chains left out."\r
            />\r
            <p>Our data cannot say why. Every industry we tested is far from clean, though, so no business should assume its site is fine because its customers are local or the site is simple.</p>\r
            <p>By city the spread was narrower: Portland 91% (71 of 78), Austin 91% (81 of 89), Denver 86% (66 of 77), Atlanta 84% (66 of 79) and Columbus 82% (51 of 62).</p>\r
\r
            <h2 id="most-common-failures">What are the most common WCAG errors on small business websites?</h2>\r
            <p>On the 385 homepages we tested, the most common failure was low contrast text (60% of sites), followed by links that a screen reader cannot name (45%). The chart shows the ten rules that failed most often, as a share of the 385 sites. A site can fail several.</p>\r
            <Chart\r
                type="bar"\r
                unit="%"\r
                title="Most common accessibility failures on 385 US small business homepages, share of sites"\r
                data={[\r
                    ['Low contrast text', 60],\r
                    ['Links with no readable name', 45],\r
                    ['Images with no text alternative', 15],\r
                    ['Embedded frames with no title', 15],\r
                    ['Tap targets too small', 14],\r
                    ['Zoom turned off', 13],\r
                    ['Visible label missing from the name', 9],\r
                    ['Links shown by colour alone', 6],\r
                    ['Page language not set', 6],\r
                    ['Controls nested inside controls', 6],\r
                ]}\r
                source="N&D Co. study of 385 US small business homepages, axe-core 4.14.0, 6 November 2026"\r
                note="axe-core rule ids, in order: color-contrast, link-name, image-alt, frame-title, target-size, meta-viewport, label-content-name-mismatch, link-in-text-block, html-has-lang, nested-interactive."\r
            />\r
\r
            <h2 id="what-each-means">What each failure means and how to fix it</h2>\r
            <p>Many of these are a one-line change to the page's HTML or a setting in the theme. The table names each axe rule, the WCAG success criterion it tests (from <a href="https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md" target="_blank" rel="noopener noreferrer">axe-core's rule descriptions</a>), how many sites failed it and what to change.</p>\r
            <div className="blog-table" role="region" aria-label="Most common accessibility failures, what they mean and how to fix them" tabIndex={0}>\r
                <table>\r
                    <caption>The twelve most common failures on 385 US small business homepages</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Failure (axe rule)</th>\r
                            <th scope="col">Sites</th>\r
                            <th scope="col">What it means</th>\r
                            <th scope="col">How to fix it</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">Low contrast text (color-contrast, WCAG 1.4.3)</th>\r
                            <td>232 (60%)</td>\r
                            <td>Text is too pale against its background for people with low vision to read.</td>\r
                            <td>Darken the text or the background until the ratio is at least 4.5:1, or 3:1 for large text.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Links with no readable name (link-name, 2.4.4 and 4.1.2)</th>\r
                            <td>173 (45%)</td>\r
                            <td>A screen reader announces "link" with nothing after it. Icon-only links, such as social media icons, and logo images without alt text inside a link cause it.</td>\r
                            <td>Give the link text, an alt attribute on the image inside it, or an aria-label such as "Our Instagram page".</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Images with no text alternative (image-alt, 1.1.1)</th>\r
                            <td>57 (15%)</td>\r
                            <td>A blind visitor gets no description of a photo, menu or offer shown as an image.</td>\r
                            <td>Add alt text that says what the image tells a sighted visitor. Use alt="" for images that are only decoration.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Embedded frames with no title (frame-title, 4.1.2)</th>\r
                            <td>56 (15%)</td>\r
                            <td>A map, booking widget, video or review panel is announced only as "frame".</td>\r
                            <td>Add a title to the iframe, such as title="Map to our office".</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Tap targets too small (target-size, 2.5.8)</th>\r
                            <td>55 (14%)</td>\r
                            <td>Buttons or links are small and close together, so people with limited hand control tap the wrong one.</td>\r
                            <td>Make each target at least 24 by 24 CSS pixels, or leave enough space around it.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Zoom turned off (meta-viewport, 1.4.4)</th>\r
                            <td>51 (13%)</td>\r
                            <td>The page stops visitors zooming in on phones. axe rates this moderate.</td>\r
                            <td>Remove user-scalable=no, or a low maximum-scale, from the page's viewport meta tag.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Visible label missing from the name (label-content-name-mismatch, 2.5.3)</th>\r
                            <td>33 (9%)</td>\r
                            <td>A button reads "Book now" on screen but has a different hidden name, so voice control users who say what they see get nothing.</td>\r
                            <td>Make the hidden name start with the visible words, or remove the aria-label.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Links shown by colour alone (link-in-text-block, 1.4.1)</th>\r
                            <td>25 (6%)</td>\r
                            <td>Links in a paragraph differ from the text around them only by colour, which colour-blind visitors may not see.</td>\r
                            <td>Underline links in body text.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Page language not set (html-has-lang, 3.1.1)</th>\r
                            <td>24 (6%)</td>\r
                            <td>Screen readers guess the language and may read English with the wrong pronunciation.</td>\r
                            <td>Add lang="en" (or your language) to the page's html tag.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Controls nested inside controls (nested-interactive, 4.1.2)</th>\r
                            <td>22 (6%)</td>\r
                            <td>A button sits inside a clickable card or another link, and screen readers may not announce it.</td>\r
                            <td>Keep each link or button separate, not inside another one.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Buttons with no name (button-name, 4.1.2)</th>\r
                            <td>16 (4%)</td>\r
                            <td>Icon-only buttons, such as menu, search or close, are announced only as "button".</td>\r
                            <td>Give the button text or an aria-label such as "Open menu".</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Image elements with no name (role-img-alt, 1.1.1)</th>\r
                            <td>15 (4%)</td>\r
                            <td>An icon or graphic marked as an image has no description.</td>\r
                            <td>Add an aria-label that says what it shows, or remove the image role if it is decoration.</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Contrast is the one to fix first. W3C's <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">contrast minimum</a> asks for 4.5:1 for normal text and 3:1 for large text, about 24px or 18.5px bold. Text in a logo is exempt, but text colours chosen to match a brand are not. If you have brand guidelines, our guide to <Link to="/blogs/brand-style-guide">writing a brand style guide</Link> shows how to list approved text and background pairs once, so nobody has to test them again.</p>\r
\r
            <h2 id="what-automated-tests-miss">What can automated accessibility testing not find?</h2>\r
            <p>A lot. axe-core's own documentation says it finds <a href="https://github.com/dequelabs/axe-core" target="_blank" rel="noopener noreferrer">on average 57% of WCAG issues automatically</a>, and it flags other elements as needing manual review because it cannot be certain. We counted only the failures it was certain about, so our 87% is a lower bound.</p>\r
            <p>A machine can see that an image has alt text, but not whether the text is right. It cannot tell whether a visitor can reach every link and button with the Tab key in a sensible order, whether a video's captions match what is said, whether a form explains its errors clearly, or whether the page still works when text is enlarged. The Department of Justice lists barriers like these, including poor colour contrast, missing alt text, videos without captions, mouse-only navigation and inaccessible forms, and it warns that <a href="https://www.ada.gov/resources/web-guidance/" target="_blank" rel="noopener noreferrer">a "clean" report does not necessarily mean everything is accessible</a>. WebAIM's own help pages say the same of its WAVE tool: <a href="https://wave.webaim.org/help" target="_blank" rel="noopener noreferrer">the absence of errors does not mean a page is accessible or compliant</a>.</p>\r
            <p>The 45 sites with no automated failures were not shown to be accessible, and the 335 with failures were not shown to be unusable. They had at least one problem that a machine can find in seconds.</p>\r
\r
            <h2 id="what-the-law-says">What does the law say about website accessibility in the US?</h2>\r
            <p>This section explains what official sources say. It is not legal advice, and we do not say whether any website meets the law. Ask a lawyer about your own business.</p>\r
            <p>Title III of the Americans with Disabilities Act covers businesses open to the public, which the law calls public accommodations. The Department of Justice's <a href="https://www.ada.gov/resources/web-guidance/" target="_blank" rel="noopener noreferrer">guidance on web accessibility and the ADA</a>, published in March 2022, says the ADA's requirements apply to all the goods, services, privileges or activities offered by public accommodations, including those offered on the web. The same page says the department "does not have a regulation setting out detailed standards", that businesses can currently choose how they will make their online offerings accessible, and that existing technical standards, including WCAG, "provide helpful guidance".</p>\r
            <p>In April 2024 the department published a rule with a fixed standard, but for a different group. Its <a href="https://www.ada.gov/resources/2024-03-08-web-rule/" target="_blank" rel="noopener noreferrer">fact sheet on the Title II web rule</a> says it applies to state and local governments and sets WCAG 2.1 level AA as the technical standard. After an interim final rule in April 2026, the fact sheet gives compliance dates of 26 April 2027 for governments serving 50,000 people or more and 26 April 2028 for smaller ones and special districts. That rule does not set a standard for private businesses, whose position is still the Title III guidance above.</p>\r
            <p>Our study tested WCAG rules, which is why we report failures of those rules and never "ADA compliance".</p>\r
\r
            <h2 id="eu-accessibility-act">What about the European Accessibility Act?</h2>\r
            <p>If you sell to consumers in the EU, the <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L0882" target="_blank" rel="noopener noreferrer">European Accessibility Act (Directive 2019/882)</a> applies to services provided to consumers after 28 June 2025, including e-commerce services and consumer banking. Websites for those services must be made perceivable, operable, understandable and robust. Microenterprises that provide services, those with fewer than 10 staff and an annual turnover or balance sheet of no more than €2 million, are exempt from the accessibility requirements. The directive defines a service provider as anyone who provides a service on the EU market or offers one to consumers in the EU, so a business outside the EU that sells to EU consumers should check whether it is in scope. Ask an adviser in the country you sell to.</p>\r
\r
            <h2 id="check-your-own-site">How can a small business check its own website?</h2>\r
            <p>Start with the same kind of free automated check we ran, then test by hand. Three tools cover the first step:</p>\r
            <ul>\r
                <li><a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">WAVE</a>, from WebAIM. Type your page address on its site, or install its extension for Chrome, Firefox or Edge. The <a href="https://wave.webaim.org/extension/" target="_blank" rel="noopener noreferrer">extension</a> checks the page in your own browser and sends nothing to WAVE's server.</li>\r
                <li>The axe DevTools extension for Chrome, which Deque lists among its <a href="https://www.deque.com/axe/devtools/" target="_blank" rel="noopener noreferrer">free tools</a>. It runs the same axe-core engine we used.</li>\r
                <li><a href="https://developer.chrome.com/docs/lighthouse/overview" target="_blank" rel="noopener noreferrer">Lighthouse</a>, built into Chrome. Open your page, open DevTools, choose the Lighthouse tab and run a report. Its <a href="https://developer.chrome.com/docs/lighthouse/accessibility/scoring" target="_blank" rel="noopener noreferrer">accessibility score</a> is a weighted average of pass or fail audits, weighted by axe's impact ratings, and the manual checks it lists do not count towards the score. A score of 100 means the automated audits passed, and nothing more. The same report scores speed, which our guide to <Link to="/blogs/core-web-vitals-explained">Core Web Vitals</Link> explains.</li>\r
            </ul>\r
            <p>Then spend fifteen minutes doing what the tools cannot:</p>\r
            <ol>\r
                <li>Put the mouse away and press Tab through your homepage. Can you see where you are on every step, and reach the menu, phone number and booking button?</li>\r
                <li>Zoom the page to 200% on a computer and pinch to zoom on a phone. Does the text grow, and does anything get cut off?</li>\r
                <li>Read each image's alt text. Does it say what a sighted visitor would learn from the picture?</li>\r
                <li>Play any video muted. Are there correct captions?</li>\r
                <li>Fill in your contact or booking form with a mistake in it. Does the error say what went wrong, in words, not only in red?</li>\r
            </ol>\r
            <p>Check the pages that earn you money first: the homepage, booking or contact page, menu or services page and checkout. If you are briefing a designer or developer, write the target into the brief. Our guide to <Link to="/blogs/plan-a-business-website">planning a business website</Link> has a sample brief with WCAG 2.2 level AA and the contrast and tap target figures in it.</p>\r
            <p>Some vendors sell overlays, scripts added to a site to find or fix problems. The Department of Justice calls automated checkers and overlays "helpful tools" and pairs that with its warning about clean reports. Colours, labels and alt text fixed in the site itself reach every visitor, with or without a script.</p>\r
\r
            <h2 id="data">The data</h2>\r
            <p>The rows for all 385 readable sites are in <a href="/assets/data/website-accessibility-2026.csv" download>a CSV file (website-accessibility-2026.csv)</a>: city, industry, whether the site had a serious or critical failure, how many rules it failed, and whether it failed each of nine common rules (color-contrast, link-name, image-alt, button-name, label, html-has-lang, frame-title, target-size and meta-viewport). Sites are numbered, not named, and we do not share which number is which business. We plan to repeat the study each year with the same method. For a similar check of businesses closer to home, see our study of <Link to="/blogs/kolkata-small-business-websites">901 Kolkata business websites</Link>.</p>\r
\r
            <h2 id="how-to-cite">How to cite this study</h2>\r
            <p>Please cite it as: N&D Co., "How accessible are US small business websites? A study of 385 sites", November 2026, https://ndcompany.in/blogs/small-business-website-accessibility-study, with a link to this page. If you quote a single figure, give the base with it, for example "87% of 385 homepages tested with axe-core 4.14.0", and say that automated testing finds only part of accessibility problems.</p>\r
\r
            <h2 id="how-we-can-help">How we can help</h2>\r
            <p>We are a brand and growth agency in Kolkata, India, working with clients in the US and abroad. Our <Link to="/services/website-design-development">website design and development</Link> page explains how we scope a new site or a rebuild in writing; if accessibility matters to you, ask for it in that scope by standard and level, and expect a manual check as well as an automated scan. To budget for a rebuild, try our <Link to="/tools/website-cost-calculator">website cost calculator</Link>. US businesses can read our <Link to="/locations/usa">page for clients in the USA</Link> for hours and payment, or our guide to <Link to="/blogs/outsource-web-development-india">outsourcing web development to India</Link>, and agencies that resell builds under their own name can see our <Link to="/white-label/web-development">white label web development</Link> page. We cannot tell you whether your site meets the ADA or any other law. Only a lawyer can do that.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};