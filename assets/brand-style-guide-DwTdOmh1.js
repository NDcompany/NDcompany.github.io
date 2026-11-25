var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>A brand style guide (also called brand guidelines or a brand book) tells anyone making something for your business how to use your logo, colours, fonts, images and words, so the work looks and sounds like you without a call to check. It covers logo versions and clear space, colour values for screen and print, type, imagery, voice and templates. A useful one also records what people get stuck on: the sizes platforms show your logo at, which colour pairs are readable as text, each font's licence and where the files live. You use it by sending it with every brief to a freelancer, printer or agency and checking the finished work against it.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>Write rules people can follow without asking you: exact files, colour codes, font names and templates.</li>
                    <li>Approve only text colour pairs that pass <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">WCAG's contrast minimum</a>: 4.5:1, or 3:1 for large text. The logo is exempt; text colours set by brand guidelines are not.</li>
                    <li>Make a square icon version of the logo: Facebook <a href="https://www.facebook.com/help/125379114252045" target="_blank" rel="noopener noreferrer">crops Page profile pictures to a circle</a>, and YouTube <a href="https://support.google.com/youtube/answer/10456525" target="_blank" rel="noopener noreferrer">renders channel pictures at 98 x 98 px</a>.</li>
                    <li>Record each font's source and licence, name fallbacks, and if you publish in Arabic, pick the Arabic font as deliberately as the Latin one.</li>
                    <li>Keep one dated version at one link, with one owner, and get the logo's copyright assigned to you in writing.</li>
                </ul>
            </Callout>

            <h2 id="what-a-style-guide-does">What is a brand style guide?</h2>
            <p>Identity work settles the logo, palette and fonts; the guide is the written half that travels with the files, so those decisions survive when a new freelancer, printer, developer or employee picks them up. Our piece on <Link to="/blogs/logo-vs-brand-identity">the difference between a logo and a brand identity</Link> explains where one ends and the other begins.</p>
            <p>Test each page with one question: could someone follow it without asking you? "Use our blue" fails. "Use #1F3A5F for text on white" passes.</p>

            <h3 id="about-the-23-percent-claim">Where the 23% revenue figure comes from</h3>
            <p>You may have read that consistent branding raises revenue by 23%. The figure comes from a <a href="https://d2slcw3kip6qmk.cloudfront.net/marketing/press/webinar/The-Impact-of-Brand-Consistency-Report-New_Cover.pdf" target="_blank" rel="noopener noreferrer">2016 survey report by Demand Metric and Lucidpress</a>. Respondents who said off-brand material went out at least sometimes were asked to estimate how much revenue would rise if their brand were always consistent; answers ran from 5 to 50 percent and averaged 23. The survey had 234 qualified responses, mostly from B2B or mixed businesses, and its 23% is an average of guesses, not a measured result. We make no revenue claim for a guide. What we expect from one is fewer repeated questions and a standard to check work against.</p>

            <h2 id="public-examples">What do public style guides show?</h2>
            <p>Governments, health services and software companies publish their rules, which makes them good models. We read four on 17 November 2026 and note only what each page says.</p>
            <ul>
                <li>The UK's <a href="https://design-system.service.gov.uk/styles/colour/" target="_blank" rel="noopener noreferrer">GOV.UK Design System colour page</a> says "Always use the GOV.UK colour palette," and tells teams not to copy hex values, so the palette can change in one place. It also names colours by job (focus, error, success) and says to use each only in its context.</li>
                <li>The same system's <a href="https://design-system.service.gov.uk/styles/typeface/" target="_blank" rel="noopener noreferrer">typeface page</a> says services on the service.gov.uk subdomain must use the GDS Transport font, while services publicly available on other subdomains use an alternative typeface. A font rule can depend on where the work appears.</li>
                <li>The <a href="https://service-manual.nhs.uk/design-system/styles/colour" target="_blank" rel="noopener noreferrer">NHS service manual's colour page</a> lists named colours such as blue (#005eb8) and admits "Not all combinations from our colour palette meet the minimum contrast." A guide should say which pairs are safe, not only list the palette.</li>
                <li>In the US, the <a href="https://designsystem.digital.gov/design-tokens/color/overview/" target="_blank" rel="noopener noreferrer">U.S. Web Design System</a> gives each colour family grades and a rule of thumb: a grade difference of 50 or more gives AA contrast. Its page says "The baseline AA contrast standard is 4.5:1 for most text."</li>
            </ul>
            <p>Mailchimp's <a href="https://styleguide.mailchimp.com/voice-and-tone/" target="_blank" rel="noopener noreferrer">public voice and tone guide</a> does the same job for words, and we come back to it below. None of these is a template for a small business, but each turns a taste into a rule someone else can apply.</p>

            <h2 id="logo-rules">Logo rules, and the sizes platforms show your logo at</h2>
            <p>Show each approved version and when to use it: primary, stacked or compact, a square icon (the symbol or monogram alone), one-colour and reversed. Define clear space with part of the logo, such as the height of one letter, so it scales. Set a minimum size in millimetres for print and pixels for screens, check it on a phone, and name the version that takes over below it. Show misuse as crossed-out pictures: stretched, recoloured, shadowed, on a busy photo. If you want to know which file goes where, our guide to <Link to="/blogs/logo-file-types">logo file types</Link> covers it, and our <Link to="/services/logo-design">logo design service includes stacked and icon-only versions</Link>.</p>

            <h3 id="logo-on-platforms">Where your logo appears online</h3>
            <p>Most places that show your logo online use a small square, and Facebook crops it to a circle. These figures come from each platform's own documentation, read on 17 November 2026. They change, so date your copy too.</p>
            <div className="blog-table" role="region" aria-label="Logo and image sizes on Google, Facebook, YouTube and LinkedIn" tabIndex={0}>
                <table>
                    <caption>Logo and image sizes by platform, checked 17 November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Where</th>
                            <th scope="col">What the platform asks for</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><a href="https://developers.google.com/search/docs/appearance/favicon-in-search" target="_blank" rel="noopener noreferrer">Google Search favicon</a></th>
                            <td>Square (1:1), at least 8 x 8 px; larger than 48 x 48 px recommended</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="https://developers.google.com/search/docs/appearance/structured-data/organization" target="_blank" rel="noopener noreferrer">Google organisation logo</a></th>
                            <td>At least 112 x 112 px, and it should look right on a purely white background</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="https://www.facebook.com/help/125379114252045" target="_blank" rel="noopener noreferrer">Facebook Page</a></th>
                            <td>Cropped to a circle; shown at 176 x 176 px on computers, 196 x 196 px on smartphones and 36 x 36 px on most feature phones; upload 320 x 320 px</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="https://support.google.com/youtube/answer/10456525" target="_blank" rel="noopener noreferrer">YouTube channel</a></th>
                            <td>Profile picture renders at 98 x 98 px; banner at least 2048 x 1152 px, with text and logos inside 1235 x 338 px</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="https://www.linkedin.com/help/linkedin/answer/a563309/image-specifications-for-your-linkedin-pages-and-career-pages" target="_blank" rel="noopener noreferrer">LinkedIn Page</a></th>
                            <td>Logo 400 x 400 px recommended (268 x 268 px minimum), shown on light and dark backgrounds; a transparent logo sits on white</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="https://developers.facebook.com/documentation/sharing/webmasters/images" target="_blank" rel="noopener noreferrer">Links shared on Facebook</a></th>
                            <td>1200 x 630 px for high-resolution screens; 600 x 315 px is the recommended minimum, both at 1.91:1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>So the guide needs a square icon that still reads inside a small circle, and logo versions tested on white and on dark, because LinkedIn and Google choose the background.</p>

            <h2 id="colour-rules">Colour: exact values, print matches and contrast pairs</h2>
            <p>List each colour in HEX and RGB for screens, CMYK for print and a Pantone reference for spot colours, with rough proportions, so nobody builds a poster out of the accent. Screen, CMYK and spot colours never match exactly, so record which paper each print colour was chosen for, and ask for a printed proof before a large run.</p>

            <h3 id="contrast-pairs">Approved text and background pairs</h3>
            <p><a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">WCAG 2.2</a>, the W3C's accessibility guidelines, asks for a contrast ratio of at least 4.5:1 between text and its background, and 3:1 for large text, which it defines as at least 18 point (24 px) or 14 point bold (about 18.7 px). Ratios are not rounded, so 4.499:1 fails. Text in a logo or brand name has no contrast requirement. W3C's explanation of the criterion adds:</p>
            <blockquote>
                <p>"Beyond logos and logotypes, text that has insufficient contrast due to corporate identity or brand guidelines is not exempted from the requirements of this criterion."</p>
                <p>W3C, <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">Understanding Success Criterion 1.4.3: Contrast (Minimum)</a></p>
            </blockquote>
            <p>Stand-alone icons, and the parts of a control that show where it is and what state it is in, need <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html" target="_blank" rel="noopener noreferrer">3:1 against neighbouring colours</a>. A logo is exempt only where its low contrast comes from your brand guidelines, and W3C suggests using a higher-contrast logo variant when the logo works as a button. That is one more reason to keep a reversed version in the guide.</p>
            <p>Most home pages miss the text rule. WebAIM's scan of the top one million home pages found low-contrast text on <a href="https://webaim.org/projects/million/" target="_blank" rel="noopener noreferrer">83.9% of them in February 2026</a>, with 34 distinct instances per page on average.</p>
            <Chart
                type="column"
                title="Home pages with low-contrast text, 2019 to 2026"
                unit="%"
                data={[['2019', 85.3], ['2020', 86.3], ['2021', 86.4], ['2022', 83.9], ['2023', 83.6], ['2024', 81], ['2025', 79.1], ['2026', 83.9]]}
                source="WebAIM, The WebAIM Million, 2026 report"
                sourceUrl="https://webaim.org/projects/million/"
                note="Share of the top one million home pages where WebAIM's automated scan found text below the WCAG 2 AA contrast thresholds. The 2026 scan ran in February 2026."
            />
            <p>The share has not fallen below 79% in eight years of scans, and it rose again in 2026. Settle it once, in the guide: test each pair with a tool such as <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">WebAIM's contrast checker</a> and list the results.</p>
            <div className="blog-table" role="region" aria-label="Example of an approved colour pairs table" tabIndex={0}>
                <table>
                    <caption>Example pairs (sample colours, ratios from the WCAG 2.2 formula)</caption>
                    <thead>
                        <tr>
                            <th scope="col">Text</th>
                            <th scope="col">Background</th>
                            <th scope="col">Ratio</th>
                            <th scope="col">Use for</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Navy #1F3A5F</th>
                            <td>White #FFFFFF</td>
                            <td>11.48:1</td>
                            <td>Any text</td>
                        </tr>
                        <tr>
                            <th scope="row">Navy #1F3A5F</th>
                            <td>Orange #F28C28</td>
                            <td>4.68:1</td>
                            <td>Any text</td>
                        </tr>
                        <tr>
                            <th scope="row">Grey #777777</th>
                            <td>White #FFFFFF</td>
                            <td>4.48:1</td>
                            <td>Large text and icons only</td>
                        </tr>
                        <tr>
                            <th scope="row">White #FFFFFF</th>
                            <td>Orange #F28C28</td>
                            <td>2.45:1</td>
                            <td>Never for text or icons</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="not-colour-alone">Never use colour as the only signal</h3>
            <p>WCAG also says <a href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html" target="_blank" rel="noopener noreferrer">colour must not be the only visual means</a> of conveying information. About <a href="https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/color-blindness" target="_blank" rel="noopener noreferrer">1 in 12 men have colour vision deficiency</a>, according to the US National Eye Institute, and the most common type makes red and green hard to tell apart. Turn that into rules in the guide: mark errors with words or an icon as well as red, underline links in body text, label chart lines directly, and never show a sale price by colour alone.</p>

            <h2 id="typography-rules">Fonts: names, licences and fallbacks</h2>
            <p>Name each typeface and weight, and set sizes for headings, body text and captions, with a minimum body size checked on a phone.</p>

            <h3 id="font-licences">Write down each font's licence</h3>
            <p>A font is software, and its licence decides where you may use it. In HTTP Archive's <a href="https://almanac.httparchive.org/en/2025/fonts" target="_blank" rel="noopener noreferrer">Web Almanac 2025</a>, 64% of desktop pages and 65% of mobile pages used at least one font under the SIL Open Font License (OFL), and about half of pages had at least one font with a blank or unrecognised licence field. That does not make those fonts unlicensed: the field in the file was empty or not one the crawl recognised.</p>
            <Chart
                type="bar"
                title="Font licences found on mobile web pages, 2025"
                unit="%"
                data={[['SIL Open Font License', 65], ['Blank or unrecognised licence field', 50], ['Adobe licence', 4], ['Monotype licence', 4]]}
                source="HTTP Archive, Web Almanac 2025, Fonts chapter"
                sourceUrl="https://almanac.httparchive.org/en/2025/fonts"
                note="Share of mobile pages using at least one font under each licence, read from licence metadata inside font files; a page can count in several rows. A blank or unrecognised field does not mean the font is unlicensed."
            />
            <p>Commercial licences are rarer: Adobe and Monotype each appear on about 4% of mobile pages. The <a href="https://openfontlicense.org/ofl-faq/" target="_blank" rel="noopener noreferrer">OFL's FAQ</a> lists logos, posters and business cards among the uses it welcomes, and says you remain the author and copyright holder of the graphic you make with such a font. Even so, the <a href="https://github.com/google/fonts" target="_blank" rel="noopener noreferrer">repository behind Google Fonts</a> advises: "It is important to always read the license for every font that you use." Record each font's source, licence, licence holder and the uses it covers (print, web, apps, documents).</p>

            <h3 id="fallback-fonts">Name the fallbacks</h3>
            <p>Not every computer or app has your fonts. Word and PowerPoint can <a href="https://support.microsoft.com/en-us/office/fonts/benefits-of-embedding-custom-fonts" target="_blank" rel="noopener noreferrer">embed fonts in a file</a>, but Microsoft notes that font makers set embedding permissions, from non-embeddable to installable, so check the setting and name a system font for other apps. On the website, <a href="https://web.dev/learn/css/typography" target="_blank" rel="noopener noreferrer">web.dev advises</a> naming at least one generic font family; <code>sans-serif</code> appears on <a href="https://almanac.httparchive.org/en/2025/fonts" target="_blank" rel="noopener noreferrer">about 89% of desktop and mobile pages</a>. Swapping from a fallback to the web font <a href="https://web.dev/articles/font-best-practices" target="_blank" rel="noopener noreferrer">can cause layout shifts</a>, web.dev notes, and the CSS <code>size-adjust</code> descriptor helps reduce them. Our <Link to="/blogs/core-web-vitals-explained">Core Web Vitals explainer</Link> covers why that matters.</p>

            <h3 id="arabic-and-english-type">Arabic and English type in one brand</h3>
            <p>If you sell to Arabic readers, as many businesses in the UAE do, a font chosen for English will not cover Arabic script, and the guide needs a second typeface and its own rules. We read these notes on 17 November 2026; they are a starting list for your designer, not a full Arabic typography guide.</p>
            <ul>
                <li>Do not copy the Latin letter-spacing rule. The W3C's <a href="https://www.w3.org/TR/alreq/" target="_blank" rel="noopener noreferrer">Arabic Layout Requirements</a> say that moving two joined characters closer or further apart "creates undesirable results."</li>
                <li>Numbers read left to right, even inside Arabic text, according to the same document. Say in the guide which numeral style you use on prices and phone numbers, and that the team keeps it the same everywhere.</li>
                <li>On the web, the W3C advises <a href="https://www.w3.org/International/questions/qa-html-dir" target="_blank" rel="noopener noreferrer">setting the base direction with the dir attribute</a> and never with CSS. A brand name written in English inside an Arabic sentence can display in the wrong order unless it is <a href="https://www.w3.org/International/articles/inline-bidi-markup/" target="_blank" rel="noopener noreferrer">wrapped in markup that sets its direction</a>, so tell developers to do that.</li>
                <li>Decide how the business name appears in each script and keep it. For Google, <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener noreferrer">the Business Profile name rules</a> do not allow the same name listed in two scripts, such as a Latin name followed by a slash and its translation, so choose one form for the listing.</li>
                <li>Show the logo's Arabic version, if it has one, with its own clear space and minimum size, and test it at the platform sizes above.</li>
            </ul>
            <p>The wider planning questions for a two-language site are in our study of <Link to="/blogs/bilingual-websites-dubai">Arabic websites in Dubai</Link>, and the <Link to="/locations/uae">UAE page</Link> says how we work with clients there.</p>

            <h2 id="imagery-and-icons">Imagery and icons</h2>
            <p>Describe the photos you want (subjects, light, colour treatment, crops) and whether stock is allowed. Pick one icon set, note its style (outlined or filled, line weight, corners) and show approved and rejected examples, since mixed sets look patched together. An icon that carries meaning on its own, such as a phone icon on a call button with no text label, needs <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html" target="_blank" rel="noopener noreferrer">3:1 contrast</a> too.</p>

            <h2 id="voice-and-writing">Voice and house writing rules</h2>
            <p>"Friendly" and "professional" mean something different to every writer, so use pairs and examples. Mailchimp's <a href="https://styleguide.mailchimp.com/voice-and-tone/" target="_blank" rel="noopener noreferrer">published style guide</a> lists four voice traits (plainspoken, genuine, translators and dry humour), limits one of them with pairs ("weird but not inappropriate, smart but not snobbish") and separates voice from tone: "You have the same voice all the time, but your tone changes." Write three to five traits, give each a "but not" limit, and add an example to follow and one to avoid:</p>
            <ul>
                <li>We write: "Your order ships tomorrow. We'll email you the tracking link."</li>
                <li>We don't write: "We are delighted to inform you that your order is currently being processed for dispatch."</li>
            </ul>
            <p>Then set the house rules, starting with one exact form of your business name. Google Business Profile wants your <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener noreferrer">real-world name as used consistently on your storefront, website and stationery</a>. Its rules exclude taglines and trademark signs (it accepts "Burger King" but not "Burger King®") and words in full capitals ("Subway", not "SUBWAY"), and extra information in the name can get a profile suspended. If your logo is in capitals, say the name is still written in normal case; our <Link to="/blogs/google-business-profile-guide">Google Business Profile guide</Link> covers the other name rules.</p>
            <p>Add spelling (British or American), date format (day first or month first), how prices and phone numbers are written, and banned words. They matter most when others write for you, as in <Link to="/services/content-creation">content creation</Link>.</p>

            <h2 id="templates">Templates and finished examples</h2>
            <p>Make templates for what you produce most, with the platform sizes built in, so people start from a correct file rather than a blank page:</p>
            <ul>
                <li>A YouTube banner at 2048 x 1152 px with the <a href="https://support.google.com/youtube/answer/10456525" target="_blank" rel="noopener noreferrer">1235 x 338 px safe area</a> marked.</li>
                <li>A <a href="https://developers.facebook.com/documentation/sharing/webmasters/images" target="_blank" rel="noopener noreferrer">1200 x 630 px image</a> for shared links.</li>
                <li>A Facebook cover with room for the profile picture, which <a href="https://www.facebook.com/help/125379114252045" target="_blank" rel="noopener noreferrer">overlaps it by about 40 px on mobile</a>.</li>
                <li>A LinkedIn cover at 1512 x 256 px with key details <a href="https://www.linkedin.com/help/linkedin/answer/a563309/image-specifications-for-your-linkedin-pages-and-career-pages" target="_blank" rel="noopener noreferrer">kept to the centre, away from the edges and especially the lower-right corner</a>.</li>
            </ul>
            <p>Add letterhead, invoice, email signature, slides and post templates, then a page of finished examples, which answer questions the rules leave open. Whoever handles your <Link to="/services/graphic-design">graphic design</Link> or <Link to="/services/social-media-management">social media management</Link> works from these files.</p>

            <h2 id="how-long">How long should a brand style guide be?</h2>
            <p>Published advice runs from 2 to 80 pages: <a href="https://www.vistaprint.com/hub/how-to-create-a-brand-style-guide" target="_blank" rel="noopener noreferrer">Vistaprint</a> says two to five can work well, a brand designer at <a href="https://www.figma.com/resource-library/what-is-a-style-guide/" target="_blank" rel="noopener noreferrer">Figma</a> suggests keeping it to 25 to 35, and a creative director quoted by <a href="https://www.shopify.com/blog/brand-guidelines" target="_blank" rel="noopener noreferrer">Shopify</a> puts a full guide at 15 to 80. In our view, the number of people making things for you should decide:</p>
            <div className="blog-table" role="region" aria-label="How much brand style guide a business needs" tabIndex={0}>
                <table>
                    <caption>How much guide you need (our recommendation, not survey data)</caption>
                    <thead>
                        <tr>
                            <th scope="col">Who makes things for you</th>
                            <th scope="col">What the guide needs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">You and one freelancer</th>
                            <td>Quick reference, logo, colour and font pages, two or three templates</td>
                        </tr>
                        <tr>
                            <th scope="row">A small team, an agency and a printer</th>
                            <td>Every section here, templates for each channel, the review checklist below</td>
                        </tr>
                        <tr>
                            <th scope="row">Several branches, resellers or franchisees</th>
                            <td>All that, plus local variants, co-branding rules and an approval route</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Whatever the size, open with a one-page quick reference: logo files, colour codes, font names and the folder link.</p>

            <h2 id="using-the-guide">How to use a brand style guide day to day</h2>
            <h3 id="briefing">Brief with it</h3>
            <p>Send each brief with the guide's link, the quick reference and the right template, and name the version ("guide v2.1, March 2026") so an outdated PDF stands out. If an agency or freelancer works for you through a reseller, send the guide to them directly or through your account contact, and say who may approve a departure from it. Agencies that resell design work under their own name can find how we handle that on our <Link to="/white-label/design">white-label design page</Link>.</p>

            <h3 id="reviewing-work">Check work against it</h3>
            <p>Before you approve anything, check:</p>
            <ol>
                <li>Logo version, clear space and minimum size.</li>
                <li>Colour codes: HEX or RGB on screen, CMYK or Pantone in print.</li>
                <li>Text on an approved colour pair.</li>
                <li>Brand fonts and weights, or the named fallback.</li>
                <li>Photo style and the stock rules.</li>
                <li>Icons from the approved set.</li>
                <li>The business name in its house form, and ™ or ® only where allowed.</li>
                <li>The voice traits and house rules.</li>
                <li>Channel size, with text and logos inside the safe area.</li>
                <li>File format and name: vector (SVG, PDF or EPS) for print, SVG or PNG for logos on screens, JPG for photos.</li>
            </ol>

            <h3 id="owner-and-versions">One owner, one current version</h3>
            <p>One owner approves exceptions and logs them; if people keep asking for the same exception, change the rule. Put a version and date on the cover, add a "what changed" note, replace the file at the same link rather than emailing it, and update the templates too. Review the guide when the logo, a colour or a font changes, when you add a channel, when a mistake keeps coming back and when a platform changes its sizes.</p>

            <h2 id="handover-checklist">Brand style guide checklist: what your designer should hand over</h2>
            <p>Ask whoever designs your identity for:</p>
            <ul>
                <li>vector masters of every logo version (SVG, plus PDF or EPS)</li>
                <li>transparent PNGs at your platform sizes, including the square icon</li>
                <li>reversed and one-colour versions, tested on white and on dark</li>
                <li>HEX, RGB, CMYK and Pantone values for every colour</li>
                <li>font names, sources and licence details, and the Arabic font if you need one</li>
                <li>editable templates, and the guide as a PDF plus its source file</li>
                <li>a written copyright assignment for the logo and artwork</li>
            </ul>
            <p>The last item deserves a sentence of its own. In the US, the <a href="https://www.copyright.gov/circs/circ30.pdf" target="_blank" rel="noopener noreferrer">Copyright Office's circular on works made for hire</a> says the author is ordinarily the person who created the work, and that a commissioned work counts as made for hire only if it falls into one of nine listed categories and both sides sign a written agreement saying so. A logo does not obviously fit those categories. A transfer of ownership, by <a href="https://www.copyright.gov/title17/92chap2.html" target="_blank" rel="noopener noreferrer">section 204(a) of the Copyright Act</a>, has to be in writing and signed by the owner. Other countries, the UK, the UAE and the Netherlands included, set their own rules, so ask a lawyer to read the wording before you rely on it. In our <Link to="/services/brand-identity-design">brand identity design</Link> projects, ownership of the final deliverables named in the quote passes to you on full payment.</p>
            <Callout title="Watch out">
                <p>Use ® only on a registered mark. The <a href="https://www.uspto.gov/trademarks/basics/what-trademark" target="_blank" rel="noopener noreferrer">USPTO</a> says you can use ™ (or SM for services) even before you apply to register, but ® only after registration, and only for the goods or services in the registration. Other countries have their own rules on the symbol, so ask a trade mark attorney where you trade before printing it. Keep ® out of your Business Profile name as well.</p>
            </Callout>

            <h2 id="mistakes-to-avoid">Mistakes to avoid</h2>
            <ul>
                <li>A voice described only in adjectives.</li>
                <li>No list of approved text colour pairs.</li>
                <li>No square icon, so circle crops cut the wordmark.</li>
                <li>Fonts with no licence record or fallback, and no Arabic font in a bilingual brand.</li>
                <li>The guide emailed as an attachment, so old copies circulate.</li>
                <li>A polished PDF with no templates.</li>
                <li>Platform sizes copied from old articles, not the platforms' own pages.</li>
            </ul>

            <h2 id="where-to-start">Where to start this week</h2>
            <ol>
                <li>Collect your best logo files, vector first, and check you have a square icon and a reversed version.</li>
                <li>List your colours in all four formats and test every text pair.</li>
                <li>List your fonts with their sources and licences.</li>
                <li>Write three to five voice traits, each with a "we write, we don't write" pair.</li>
                <li>Make templates for the two or three things you produce most.</li>
                <li>Put everything behind one link, with a version number and date on the cover.</li>
            </ol>

            <h2 id="working-with-us">How we work on brand guidelines</h2>
            <p>We are an agency based in India and we work with clients in the US, the UK, the Netherlands, the UAE and Australia. A <Link to="/services/full-branding-solutions">full branding project</Link> includes a style guide and its templates, and each font is listed with its licence source. Quotes are set in writing before work starts. If step one turns up missing logo versions, fix those first, and <Link to="/#contact">talk to us about your guide</Link> if you want help. There is more in our <Link to="/blogs/topic/branding">branding articles</Link>.</p>
        </>
    );
}
`;export{e as default};