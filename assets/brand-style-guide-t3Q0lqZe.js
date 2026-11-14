var e=`import { Link } from 'react-router-dom';\r
import { Callout, Chart } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>A brand style guide (also called brand guidelines or a brand book) tells anyone making something for your business how to use your logo, colours, fonts, images and words, so the work looks and sounds like you without a call to check. It covers logo versions, colour codes, fonts, imagery, voice and templates. A useful one also records what people get stuck on: the sizes platforms show your logo at, which colour pairs are readable as text, each font's licence and where the files live. You use it by sending it with every brief and checking finished work against it.</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>Write rules people can follow without asking you: exact files, colour codes, font names and templates.</li>\r
                    <li>Approve only text colour pairs that pass <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">WCAG's contrast minimum</a>: 4.5:1, or 3:1 for large text. The logo is exempt; text colours set by brand guidelines are not.</li>\r
                    <li>Make a square icon version of the logo: Facebook <a href="https://www.facebook.com/help/125379114252045" target="_blank" rel="noopener noreferrer">crops Page profile pictures to a circle</a>, and YouTube <a href="https://support.google.com/youtube/answer/10456525" target="_blank" rel="noopener noreferrer">renders channel pictures at 98 x 98 px</a>.</li>\r
                    <li>Record each font's source and licence, and name fallbacks, Indian scripts included.</li>\r
                    <li>Keep one dated version at one link, with one owner.</li>\r
                </ul>\r
            </Callout>\r
\r
            <h2 id="what-a-style-guide-does">What is a brand style guide?</h2>\r
            <p>Identity work settles the logo, palette and fonts; the guide is the written half that travels with the files, so those decisions survive when a new freelancer, printer, developer or employee picks them up. Our piece on <Link to="/blogs/logo-vs-brand-identity">the difference between a logo and a brand identity</Link> explains where one ends and the other begins.</p>\r
            <p>Test each page with one question: could someone follow it without asking you? "Use our blue" fails. "Use #1F3A5F for text on white" passes.</p>\r
\r
            <h3 id="about-the-23-percent-claim">Where the 23% revenue figure comes from</h3>\r
            <p>You may have read that consistent branding raises revenue by 23%. The figure comes from a <a href="https://d2slcw3kip6qmk.cloudfront.net/marketing/press/webinar/The-Impact-of-Brand-Consistency-Report-New_Cover.pdf" target="_blank" rel="noopener noreferrer">2016 survey report by Demand Metric and Lucidpress</a>. Respondents who said off-brand material went out at least sometimes were asked to estimate how much revenue would rise if their brand were always consistent; answers ran from 5 to 50 percent and averaged 23. The survey had 234 qualified responses, mainly from B2B or mixed businesses, and its 23% is an average of guesses, not a measured result. We make no revenue claim for a guide. What we expect from one is fewer repeated questions and a standard to check work against.</p>\r
\r
            <h2 id="logo-rules">Logo rules, and the sizes platforms show your logo at</h2>\r
            <p>Show each approved version and when to use it: primary, stacked or compact, a square icon (the symbol or monogram alone), one-colour and reversed. Define clear space with part of the logo, such as the height of one letter, so it scales. Set a minimum size in millimetres for print and pixels for screens, and name the version that takes over below it. Show misuse as crossed-out pictures: stretched, recoloured, shadowed, on a busy photo. Our <Link to="/services/logo-design">logo design service includes stacked and icon-only versions</Link>.</p>\r
\r
            <h3 id="logo-on-platforms">Where your logo appears online</h3>\r
            <p>Most places that show your logo online use a small square, and Facebook crops it to a circle. These figures come from each platform's documentation, checked on 2 October 2026; they change, so date your copy too.</p>\r
            <div className="blog-table" role="region" aria-label="Logo and image sizes on Google, Facebook, YouTube and LinkedIn" tabIndex={0}>\r
                <table>\r
                    <caption>Logo and image sizes by platform, checked 2 October 2026</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Where</th>\r
                            <th scope="col">What the platform asks for</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row"><a href="https://developers.google.com/search/docs/appearance/favicon-in-search" target="_blank" rel="noopener noreferrer">Google Search favicon</a></th>\r
                            <td>Square, at least 8 x 8 px; larger than 48 x 48 px recommended</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row"><a href="https://developers.google.com/search/docs/appearance/structured-data/organization" target="_blank" rel="noopener noreferrer">Google organisation logo</a></th>\r
                            <td>At least 112 x 112 px, and it should look right on pure white</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row"><a href="https://support.google.com/business/answer/6103862" target="_blank" rel="noopener noreferrer">Google Business Profile</a></th>\r
                            <td>Logo listed as a photo type; photos: 720 x 720 px recommended, 250 x 250 px minimum</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row"><a href="https://www.facebook.com/help/125379114252045" target="_blank" rel="noopener noreferrer">Facebook Page</a></th>\r
                            <td>Cropped to a circle; shown at 176 x 176 px on computers, 196 x 196 px on smartphones and 36 x 36 px on most feature phones; upload 320 x 320 px</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row"><a href="https://support.google.com/youtube/answer/10456525" target="_blank" rel="noopener noreferrer">YouTube channel</a></th>\r
                            <td>Profile picture renders at 98 x 98 px; banner at least 2048 x 1152 px, with text and logos inside 1235 x 338 px</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row"><a href="https://www.linkedin.com/help/linkedin/answer/a563309/image-specifications-for-your-linkedin-pages-and-career-pages" target="_blank" rel="noopener noreferrer">LinkedIn Page</a></th>\r
                            <td>Logo 400 x 400 px (268 x 268 px minimum), shown on light and dark backgrounds; a transparent logo sits on white</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row"><a href="https://developers.facebook.com/documentation/sharing/webmasters/images" target="_blank" rel="noopener noreferrer">Links shared on Facebook</a></th>\r
                            <td>At least 1200 x 630 px, close to 1.91:1 so Feed does not crop it</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>So the guide needs a square icon that still reads inside a small circle, and logo versions tested on white and on dark, because LinkedIn and Google choose the background.</p>\r
\r
            <h3 id="design-for-phones">Set minimum sizes on a phone first</h3>\r
            <p>In India, phones produced <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india/#yearly-2019-2025" target="_blank" rel="noopener noreferrer">77.91% of the page views StatCounter recorded in 2025</a>, and desktops 21.55%.</p>\r
            <Chart\r
                type="line"\r
                title="Share of page views from India by device, 2019 to 2025"\r
                unit="%"\r
                series={[\r
                    { name: 'Mobile', data: [['2019', 74.22], ['2020', 69.54], ['2021', 75.96], ['2022', 75.09], ['2023', 76.43], ['2024', 78.47], ['2025', 77.91]] },\r
                    { name: 'Desktop', data: [['2019', 25.37], ['2020', 29.97], ['2021', 23.56], ['2022', 24.47], ['2023', 23.15], ['2024', 21.01], ['2025', 21.55]] },\r
                ]}\r
                source="StatCounter Global Stats, Desktop vs Mobile vs Tablet Market Share India, yearly"\r
                sourceUrl="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india/#yearly-2019-2025"\r
                note="Share of page views from people in India on the more than 1 million websites that run StatCounter's tracking code; tablets stayed under 1% every year. 2026 is left out because the year is not over."\r
            />\r
            <p>Mobile's share has stayed between 69.54% and 78.47% in every year since 2019: about three page views in four. Check minimum logo and text sizes on a phone before you check them anywhere else.</p>\r
\r
            <h2 id="colour-rules">Colour: exact values, print matches and contrast pairs</h2>\r
            <p>List each colour in HEX and RGB for screens, CMYK for print and a Pantone reference for spot colours, with rough proportions, so nobody builds a poster out of the accent. Spot and process colours do not convert exactly: Pantone's <a href="https://www.pantone.com/products/graphics/color-bridge-guide-coated" target="_blank" rel="noopener noreferrer">Color Bridge guide</a> calls its CMYK values the "closest" matches to its spot colours, and Pantone prints a <a href="https://www.pantone.com/products/graphics/color-bridge-guide-uncoated" target="_blank" rel="noopener noreferrer">separate edition on uncoated paper</a>. Record the Pantone reference for each paper you print on, and ask for a printed proof before a large run.</p>\r
\r
            <h3 id="contrast-pairs">Approved text and background pairs</h3>\r
            <p><a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">WCAG 2.2</a>, the W3C's accessibility guidelines, asks for a contrast ratio of at least 4.5:1 between text and its background, and 3:1 for large text (about 24 px, or 18.5 px bold). Ratios are not rounded, so 4.499:1 fails. Text in a logo is exempt. W3C's explanation of the criterion adds:</p>\r
            <blockquote>\r
                <p>"Beyond logos and logotypes, text that has insufficient contrast due to corporate identity or brand guidelines is not exempted from the requirements of this criterion."</p>\r
                <p>W3C, <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">Understanding Success Criterion 1.4.3: Contrast (Minimum)</a></p>\r
            </blockquote>\r
            <p>Stand-alone icons, and the cues that show where buttons and form fields are, need <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html" target="_blank" rel="noopener noreferrer">3:1 against neighbouring colours</a>.</p>\r
            <p>Most home pages miss the text rule. WebAIM's scan of the top one million home pages found low-contrast text on <a href="https://webaim.org/projects/million/" target="_blank" rel="noopener noreferrer">83.9% of them in February 2026</a>, more than any other issue it detected, with 34 instances per page on average.</p>\r
            <Chart\r
                type="column"\r
                title="Home pages with low-contrast text, 2019 to 2026"\r
                unit="%"\r
                data={[['2019', 85.3], ['2020', 86.3], ['2021', 86.4], ['2022', 83.9], ['2023', 83.6], ['2024', 81], ['2025', 79.1], ['2026', 83.9]]}\r
                source="WebAIM, The WebAIM Million, 2026 report"\r
                sourceUrl="https://webaim.org/projects/million/"\r
                note="Share of the top one million home pages where WebAIM's automated WAVE scan found text below the WCAG 2 AA contrast thresholds. The 2026 scan ran in February 2026; earlier years come from the same report's over-time table."\r
            />\r
            <p>The share has not fallen below 79% in eight years of scans, and it rose again in 2026. Settle it once, in the guide: test each pair with a tool such as <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">WebAIM's contrast checker</a> and list the results.</p>\r
            <div className="blog-table" role="region" aria-label="Example of an approved colour pairs table" tabIndex={0}>\r
                <table>\r
                    <caption>Example pairs (sample colours, ratios from the WCAG 2.2 formula)</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Text</th>\r
                            <th scope="col">Background</th>\r
                            <th scope="col">Ratio</th>\r
                            <th scope="col">Use for</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">Navy #1F3A5F</th>\r
                            <td>White #FFFFFF</td>\r
                            <td>11.48:1</td>\r
                            <td>Any text</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Navy #1F3A5F</th>\r
                            <td>Orange #F28C28</td>\r
                            <td>4.68:1</td>\r
                            <td>Any text</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Grey #777777</th>\r
                            <td>White #FFFFFF</td>\r
                            <td>4.48:1</td>\r
                            <td>Large text and icons only</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">White #FFFFFF</th>\r
                            <td>Orange #F28C28</td>\r
                            <td>2.45:1</td>\r
                            <td>Never for text or icons</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
\r
            <h3 id="not-colour-alone">Never use colour as the only signal</h3>\r
            <p>WCAG also says <a href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html" target="_blank" rel="noopener noreferrer">colour must not be the only visual means</a> of conveying information. About <a href="https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/color-blindness" target="_blank" rel="noopener noreferrer">1 in 12 men have colour vision deficiency</a>, according to the US National Eye Institute, and the most common type makes red and green hard to tell apart. Turn that into rules in the guide: mark errors with words or an icon as well as red, underline links in body text, label chart lines directly, and never show a sale price by colour alone.</p>\r
\r
            <h2 id="typography-rules">Fonts: names, licences and fallbacks</h2>\r
            <p>Name each typeface and weight, and set sizes for headings, body text and captions, with a minimum body size checked on a phone.</p>\r
\r
            <h3 id="font-licences">Write down each font's licence</h3>\r
            <p>A font is software, and its licence decides where you may use it. In HTTP Archive's <a href="https://almanac.httparchive.org/en/2025/fonts#font-licenses" target="_blank" rel="noopener noreferrer">Web Almanac 2025</a>, 64% of desktop pages and 65% of mobile pages used at least one font under the SIL Open Font License (OFL), and on roughly half of pages at least one font had a blank or unrecognised licence field. That does not make those fonts unlicensed: the licence field in the file was empty or not one the crawl recognised.</p>\r
            <Chart\r
                type="bar"\r
                title="Font licences found on mobile web pages, 2025"\r
                unit="%"\r
                data={[['SIL Open Font License', 65], ['No licence named in the font file', 50], ['Font Awesome licence', 13], ['Apache licence', 8], ['Adobe Fonts licence', 4], ['Monotype licence', 4]]}\r
                source="HTTP Archive, Web Almanac 2025, Fonts chapter"\r
                sourceUrl="https://almanac.httparchive.org/en/2025/fonts#font-licenses"\r
                note="Share of mobile pages using at least one font under each licence, read from licence metadata inside font files in the July 2025 crawl; a page can count in several rows. 'No licence named' means the field was blank or unrecognised, not that the font is unlicensed."\r
            />\r
            <p>Commercial licences are rarer: Adobe Fonts and Monotype licences each appear on about 4% of mobile pages. The <a href="https://openfontlicense.org/ofl-faq/" target="_blank" rel="noopener noreferrer">OFL's FAQ</a> says its fonts may be used in logos and other graphics, and that using one puts no restriction on the artwork made with it, but the <a href="https://github.com/google/fonts" target="_blank" rel="noopener noreferrer">repository behind Google Fonts</a> still advises: "It is important to always read the license for every font that you use." Record each font's source, licence, licence holder and the uses it covers (print, web, apps, documents). Our <Link to="/services/full-branding-solutions">full branding projects list each font with its licence source</Link>.</p>\r
\r
            <h3 id="fallback-fonts">Name the fallbacks</h3>\r
            <p>Not every computer or app has your fonts. Word and PowerPoint can <a href="https://support.microsoft.com/en-us/office/fonts/benefits-of-embedding-custom-fonts" target="_blank" rel="noopener noreferrer">embed fonts in a file</a>, but Microsoft notes that font makers can mark a font as non-embeddable, preview and print only, editable or installable, so check the setting and name a system font for other apps. On the website, end the font stack with a generic family, as <a href="https://web.dev/learn/css/typography" target="_blank" rel="noopener noreferrer">web.dev advises</a>; <code>sans-serif</code> appears on <a href="https://almanac.httparchive.org/en/2025/fonts" target="_blank" rel="noopener noreferrer">about 89% of desktop and mobile pages</a>. Swapping from a fallback to the web font <a href="https://web.dev/articles/font-best-practices" target="_blank" rel="noopener noreferrer">can cause layout shifts</a>, web.dev notes, and the CSS <code>size-adjust</code> descriptor helps reduce them. Our <Link to="/blogs/core-web-vitals-explained">Core Web Vitals explainer</Link> covers why that matters.</p>\r
\r
            <h3 id="indian-scripts">Fonts for Hindi, Bengali and other Indian scripts</h3>\r
            <p>A font chosen for English usually lacks Indian scripts. The Web Almanac found Devanagari, used for Hindi, in <a href="https://almanac.httparchive.org/en/2025/fonts" target="_blank" rel="noopener noreferrer">just under 1% of web fonts</a> in 2025, and Gujarati, Gurmukhi and Tamil in under 0.1% each. If you publish in an Indian language, pick a matching font for each script and show the pairs in the guide. <a href="https://fonts.google.com/specimen/Poppins" target="_blank" rel="noopener noreferrer">Poppins</a> covers Devanagari and Latin, and <a href="https://fonts.google.com/specimen/Hind+Siliguri" target="_blank" rel="noopener noreferrer">Hind Siliguri</a>, <a href="https://fonts.google.com/specimen/Anek+Bangla" target="_blank" rel="noopener noreferrer">Anek Bangla</a> and <a href="https://fonts.google.com/specimen/Noto+Sans+Bengali" target="_blank" rel="noopener noreferrer">Noto Sans Bengali</a> cover Bengali and Latin. Hind and <a href="https://design.google/library/anek-multiscript" target="_blank" rel="noopener noreferrer">Anek</a> also come in matching versions for other Indian scripts.</p>\r
\r
            <h2 id="imagery-and-icons">Imagery and icons</h2>\r
            <p>Describe the photos you want (subjects, light, colour treatment, crops) and whether stock is allowed. Pick one icon set, note its style (outlined or filled, line weight, corners) and show approved and rejected examples, since mixed sets look patched together. An icon that carries meaning on its own, such as a phone icon on a call button with no text label, needs <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html" target="_blank" rel="noopener noreferrer">3:1 contrast</a> too.</p>\r
\r
            <h2 id="voice-and-writing">Voice and house writing rules</h2>\r
            <p>"Friendly" and "professional" mean something different to every writer, so use pairs and examples. Mailchimp's <a href="https://styleguide.mailchimp.com/voice-and-tone/" target="_blank" rel="noopener noreferrer">published style guide</a> lists four voice traits (plainspoken, genuine, translators and dry humour), limits one of them with pairs ("weird but not inappropriate, smart but not snobbish") and separates voice from tone: "You have the same voice all the time, but your tone changes." Write three to five traits, give each a "but not" limit, and add an example to follow and one to avoid:</p>\r
            <ul>\r
                <li>We write: "Your order ships tomorrow. We'll email you the tracking link."</li>\r
                <li>We don't write: "We are delighted to inform you that your order is currently being processed for dispatch."</li>\r
            </ul>\r
            <p>Then set the house rules, starting with one exact form of your business name. Google Business Profile wants your <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener noreferrer">real-world name as used consistently on your storefront, website and stationery</a>. The name must not include taglines, ™ or ® signs, or words in full capitals (Google accepts KFC but not SUBWAY), and adding extra information can get a profile suspended. If your logo is in capitals, say the name is still written in normal case; our <Link to="/blogs/google-business-profile-guide">Google Business Profile guide</Link> covers the other name rules.</p>\r
            <p>Add spelling (British or American), date format, prices (₹1,00,000 or ₹100,000), phone format and banned words. They matter most when others write for you, as in <Link to="/services/content-creation">content creation</Link>.</p>\r
\r
            <h2 id="templates">Templates and finished examples</h2>\r
            <p>Make templates for what you produce most, with the platform sizes built in, so people start from a correct file rather than a blank page:</p>\r
            <ul>\r
                <li>A YouTube banner at 2048 x 1152 px with the <a href="https://support.google.com/youtube/answer/10456525" target="_blank" rel="noopener noreferrer">1235 x 338 px safe area</a> marked.</li>\r
                <li>A <a href="https://developers.facebook.com/documentation/sharing/webmasters/images" target="_blank" rel="noopener noreferrer">1200 x 630 px image</a> for shared links.</li>\r
                <li>A Facebook cover with room for the profile picture, which <a href="https://www.facebook.com/help/125379114252045" target="_blank" rel="noopener noreferrer">overlaps it by about 40 px on mobile</a>.</li>\r
                <li>A LinkedIn cover at 1512 x 256 px with anything important <a href="https://www.linkedin.com/help/linkedin/answer/a563309/image-specifications-for-your-linkedin-pages-and-career-pages" target="_blank" rel="noopener noreferrer">away from the edges, especially the lower-right corner</a>.</li>\r
            </ul>\r
            <p>Add letterhead, invoice, email signature, slides and post templates, then a page of finished examples, which answer questions the rules leave open. Whoever handles your <Link to="/services/graphic-design">graphic design</Link> or <Link to="/services/social-media-management">social media management</Link> works from these files.</p>\r
\r
            <h2 id="how-long">How long should a brand style guide be?</h2>\r
            <p>Published advice runs from 2 to 80 pages: <a href="https://www.vistaprint.com/hub/how-to-create-a-brand-style-guide" target="_blank" rel="noopener noreferrer">Vistaprint</a> says two to five can work well, a brand designer at <a href="https://www.figma.com/resource-library/what-is-a-style-guide/" target="_blank" rel="noopener noreferrer">Figma</a> suggests keeping it to 25 to 35, and a creative director quoted by <a href="https://www.shopify.com/blog/brand-guidelines" target="_blank" rel="noopener noreferrer">Shopify</a> puts a full guide at 15 to 80. In our view, the number of people making things for you should decide:</p>\r
            <div className="blog-table" role="region" aria-label="How much brand style guide a business needs" tabIndex={0}>\r
                <table>\r
                    <caption>How much guide you need (our recommendation, not survey data)</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Who makes things for you</th>\r
                            <th scope="col">What the guide needs</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">You and one freelancer</th>\r
                            <td>Quick reference, logo, colour and font pages, two or three templates</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">A small team, an agency and a printer</th>\r
                            <td>Every section here, templates for each channel, the review checklist below</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Several branches, resellers or franchisees</th>\r
                            <td>All that, plus local variants, co-branding rules and an approval route</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Whatever the size, open with a one-page quick reference: logo files, colour codes, font names and the folder link.</p>\r
\r
            <h2 id="using-the-guide">How to use a brand style guide day to day</h2>\r
            <h3 id="briefing">Brief with it</h3>\r
            <p>Send each brief with the guide's link, the quick reference and the right template, and name the version ("guide v2.1, March 2026") so an outdated PDF stands out.</p>\r
\r
            <h3 id="reviewing-work">Check work against it</h3>\r
            <p>Before you approve anything, check:</p>\r
            <ol>\r
                <li>Logo version, clear space and minimum size.</li>\r
                <li>Colour codes: HEX or RGB on screen, CMYK or Pantone in print.</li>\r
                <li>Text on an approved colour pair.</li>\r
                <li>Brand fonts and weights, or the named fallback.</li>\r
                <li>Photo style and the stock rules.</li>\r
                <li>Icons from the approved set.</li>\r
                <li>The business name in its house form, and ™ or ® only where allowed.</li>\r
                <li>The voice traits and house rules.</li>\r
                <li>Channel size, with text and logos inside the safe area.</li>\r
                <li>File format and name: vector (SVG, PDF or EPS) for print, SVG or PNG for logos on screens, JPG for photos.</li>\r
            </ol>\r
\r
            <h3 id="owner-and-versions">One owner, one current version</h3>\r
            <p>One owner approves exceptions and logs them; if people keep asking for the same exception, change the rule. Put a version and date on the cover, add a "what changed" note, replace the file at the same link rather than emailing it, and update the templates too. Review the guide when the logo, a colour or a font changes, when you add a channel, when a mistake keeps coming back and when a platform changes its sizes.</p>\r
\r
            <h2 id="handover-checklist">Brand style guide checklist: what your designer should hand over</h2>\r
            <p>Ask whoever designs your identity for:</p>\r
            <ul>\r
                <li>vector masters of every logo version (SVG, plus PDF or EPS)</li>\r
                <li>transparent PNGs at your platform sizes, including the square icon</li>\r
                <li>reversed and one-colour versions, tested on white and on dark</li>\r
                <li>HEX, RGB, CMYK and Pantone values for every colour</li>\r
                <li>font names, sources and licence details</li>\r
                <li>editable templates, and the guide as a PDF plus its source file</li>\r
                <li>a written copyright assignment for the logo and artwork</li>\r
            </ul>\r
            <p>In India, the last item is what makes the transfer valid. Under the <a href="https://ipindia.gov.in/storage/uploads/docs-operator/910cd3b9-98b0-4713-bbd8-db4d02f95d1c.pdf" target="_blank" rel="noopener noreferrer">Copyright Act, 1957</a>, the author of a work is generally its first owner (section 17), with exceptions such as work an employee makes on the job. Section 19 makes an assignment valid only in writing, signed by the assignor. It must identify the work and state the rights, duration, territory and payment; if it states no period, the law assumes five years, and if no territory, India. Rights you do not use within a year of the assignment lapse unless it says otherwise. Have a lawyer check the wording. In our <Link to="/services/brand-identity-design">brand identity design</Link> projects, the files, guidelines and ownership pass to the client on full payment.</p>\r
            <Callout title="Watch out">\r
                <p>Use ® only on a registered mark. The <a href="https://www.uspto.gov/trademarks/basics/what-trademark" target="_blank" rel="noopener noreferrer">USPTO</a> says ™ (or SM for services) can be used before you apply, but ® only after registration, and only for the registered goods or services. In India, section 107 of the <a href="https://ipindia.gov.in/storage/uploads/docs-operator/c9e8a57e-bc94-4b93-8518-6e8729c976bf.pdf" target="_blank" rel="noopener noreferrer">Trade Marks Act, 1999</a> forbids presenting an unregistered mark as registered, including through the word "registered" or a symbol referring to registration (marks registered abroad aside). Keep ® out of your Business Profile name, and ask a trade mark attorney before printing it.</p>\r
            </Callout>\r
\r
            <h2 id="mistakes-to-avoid">Mistakes to avoid</h2>\r
            <ul>\r
                <li>A voice described only in adjectives.</li>\r
                <li>No list of approved text colour pairs.</li>\r
                <li>No square icon, so circle crops cut the wordmark.</li>\r
                <li>Fonts with no licence record or fallback.</li>\r
                <li>The guide emailed as an attachment, so old copies circulate.</li>\r
                <li>A polished PDF with no templates.</li>\r
                <li>Platform sizes copied from old articles, not the platforms' own pages.</li>\r
            </ul>\r
\r
            <h2 id="where-to-start">Where to start this week</h2>\r
            <ol>\r
                <li>Collect your best logo files, vector first, and check you have a square icon and a reversed version.</li>\r
                <li>List your colours in all four formats and test every text pair.</li>\r
                <li>List your fonts with their sources and licences.</li>\r
                <li>Write three to five voice traits, each with a "we write, we don't write" pair.</li>\r
                <li>Make templates for the two or three things you produce most.</li>\r
                <li>Put everything behind one link, with a version number and date on the cover.</li>\r
            </ol>\r
            <p>If step one turns up missing logo versions, fix those first, and <Link to="/#contact">talk to us about your guide</Link> if you want help. There is more in our <Link to="/blogs/topic/branding">branding articles</Link>.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};