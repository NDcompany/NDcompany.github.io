var e=`import { Link } from 'react-router-dom';
import { Callout, Chart, Code } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>Core Web Vitals are three measurements Google takes from real visits to a website. Largest Contentful Paint (LCP) is how long the main content takes to appear, Interaction to Next Paint (INP) is how quickly the page responds to a tap, click or key press, and Cumulative Layout Shift (CLS) is how much the layout jumps unexpectedly during a visit. A page passes when <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">each of the three is good for at least three out of four visits</a>, with phones and computers judged separately. Most websites measured for visitors in India fail on phones: in September 2026, <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL" target="_blank" rel="noopener noreferrer">32% of the websites in Google's Chrome data for India passed</a>, against <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL" target="_blank" rel="noopener noreferrer">53% worldwide</a>.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li><a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">Google's targets</a>: main content within 2.5 seconds (LCP), responses to taps and clicks within 200 milliseconds (INP) and layout shift of 0.1 or less (CLS).</li>
                    <li>Pass or fail comes from <a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">real Chrome visits over 28 days</a>, not from the 0 to 100 PageSpeed score.</li>
                    <li>On phones, <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL" target="_blank" rel="noopener noreferrer">32% of websites visited from India passed in September 2026</a>, against <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL" target="_blank" rel="noopener noreferrer">53% worldwide</a>. Slow loading (LCP) is the most common failure.</li>
                    <li>On slow sites, most of the wait is the server and a late start on the main image, <a href="https://web.dev/blog/common-misconceptions-lcp" target="_blank" rel="noopener noreferrer">not the image download</a>.</li>
                    <li>Google <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">uses Core Web Vitals in ranking</a> but puts relevance first. Fix them for your visitors.</li>
                </ul>
            </Callout>

            <h2 id="what-core-web-vitals-measure">What are the three Core Web Vitals?</h2>
            <p>These are the thresholds <a href="https://support.google.com/webmasters/answer/9205520?hl=en" target="_blank" rel="noopener noreferrer">Search Console's Core Web Vitals report</a> uses:</p>
            <div className="blog-table" role="region" aria-label="Core Web Vitals thresholds" tabIndex={0}>
                <table>
                    <caption>Core Web Vitals thresholds in Google Search Console</caption>
                    <thead>
                        <tr>
                            <th scope="col">Metric</th>
                            <th scope="col">Good</th>
                            <th scope="col">Needs improvement</th>
                            <th scope="col">Poor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Largest Contentful Paint (LCP)</th>
                            <td>2.5 s or less</td>
                            <td>2.5 s to 4 s</td>
                            <td>Over 4 s</td>
                        </tr>
                        <tr>
                            <th scope="row">Interaction to Next Paint (INP)</th>
                            <td>200 ms or less</td>
                            <td>200 ms to 500 ms</td>
                            <td>Over 500 ms</td>
                        </tr>
                        <tr>
                            <th scope="row">Cumulative Layout Shift (CLS)</th>
                            <td>0.1 or less</td>
                            <td>0.1 to 0.25</td>
                            <td>Over 0.25</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>LCP is the time until <a href="https://web.dev/articles/lcp" target="_blank" rel="noopener noreferrer">the largest image, text block or video on screen</a> has been drawn. In 2025 that element was an image, such as a banner, on <a href="https://almanac.httparchive.org/en/2025/performance" target="_blank" rel="noopener noreferrer">76% of mobile pages</a> and text on nearly all the rest.</p>
            <p>INP looks at every click, tap and key press in a visit and reports roughly the slowest response. Scrolling, hovering and zooming <a href="https://web.dev/articles/inp" target="_blank" rel="noopener noreferrer">do not count</a>.</p>
            <p>CLS scores unexpected movement, such as text jumping down when an advert loads above it. It is based on <a href="https://web.dev/articles/cls" target="_blank" rel="noopener noreferrer">the largest burst of unexpected shifts</a> in a visit, and movement within half a second of a tap or click does not count, so opening a menu is fine.</p>
            <p>INP <a href="https://web.dev/blog/inp-cwv-march-12" target="_blank" rel="noopener noreferrer">replaced First Input Delay (FID) as a Core Web Vital on 12 March 2024</a>, so a guide that still lists FID is out of date.</p>

            <h2 id="how-google-decides-a-page-passes">How Google decides whether a page passes</h2>
            <p>Google judges each metric at the 75th percentile of visits, <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">separately for phones and desktop computers</a>. LCP is good when at least 75% of visits see the main content within 2.5 seconds, and INP and CLS are tested the same way. A page passes only when all three are good. When there are too few taps, clicks and key presses to measure INP, the page passes or fails on LCP and CLS alone. PageSpeed Insights looks at <a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">the previous 28 days of visits</a>.</p>
            <p>The data comes from the Chrome User Experience Report (CrUX): opted-in Chrome users on Android and desktop. It <a href="https://developer.chrome.com/docs/crux/methodology" target="_blank" rel="noopener noreferrer">leaves out Chrome on iPhone, Android apps that open pages in a WebView and other Chromium browsers such as Microsoft Edge</a>. Most page views in India come from the devices and browser CrUX draws on: in September 2026, phones made up <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india" target="_blank" rel="noopener noreferrer">77.3% of page views in India</a>, Android accounted for <a href="https://gs.statcounter.com/os-market-share/mobile/india" target="_blank" rel="noopener noreferrer">93.89% of mobile page views</a> and Chrome had <a href="https://gs.statcounter.com/browser-market-share/all/india" target="_blank" rel="noopener noreferrer">88.61% of page views across all devices</a>.</p>
            <p>Search Console groups pages with a similar experience, gives each group <a href="https://support.google.com/webmasters/answer/9205520?hl=en" target="_blank" rel="noopener noreferrer">the status of its slowest metric</a> and only includes indexed pages (our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> covers indexing). PageSpeed Insights falls back to the whole site when a page has too few visits, and shows <a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">no real-user data</a> when the site has too few. Google does not publish <a href="https://developer.chrome.com/docs/crux/methodology" target="_blank" rel="noopener noreferrer">how many visits that takes</a>, so treat any "visits per day" figure you read as a guess.</p>
            <p>Search Console also <a href="https://support.google.com/webmasters/answer/9205520?hl=en" target="_blank" rel="noopener noreferrer">combines visits from all locations</a>, so heavy traffic from a country with slow connections pulls your results down.</p>

            <h2 id="how-websites-score-in-india">How websites visited from India score on phones</h2>
            <p>We pulled the figures in this section from <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL" target="_blank" rel="noopener noreferrer">HTTP Archive's Technology Report</a>, which is built on CrUX. In September 2026 it covered about 746,000 websites with enough Chrome visits from India on phones to be measured (sites with too few visitors are left out). CrUX sets each visit's country <a href="https://developer.chrome.com/docs/crux/methodology/dimensions" target="_blank" rel="noopener noreferrer">from the visitor's IP address</a>, so the sites themselves can be based anywhere.</p>
            <Chart
                type="column"
                title="Websites passing all three Core Web Vitals on phones"
                unit="%"
                series={[
                    { name: 'Visited from India', data: [['Sep 2024', 25], ['Sep 2025', 25], ['Sep 2026', 32]] },
                    { name: 'Worldwide', data: [['Sep 2024', 48], ['Sep 2025', 51], ['Sep 2026', 53]] },
                ]}
                source="HTTP Archive Technology Report (Chrome UX Report data), September 2024 to September 2026"
                sourceUrl="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL"
                note="Websites whose real Chrome visits on mobile were good for LCP, INP and CLS at the 75th percentile, each August; a site without enough INP data is judged on LCP and CLS. Visits from India are located by IP address; worldwide figures come from the same report with Geo set to ALL."
            />
            <p>On phones, the share of websites visited from India passing all three rose from 25% in September 2024 to 32% in September 2026. Worldwide it rose from 48% to 53%, so the gap only narrowed from 23 points to 21.</p>
            <div className="blog-table" role="region" aria-label="Share of websites rated good on phones, September 2026" tabIndex={0}>
                <table>
                    <caption>Share of websites rated good on phones, September 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Measure</th>
                            <th scope="col">Visited from India</th>
                            <th scope="col">Worldwide</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Loading (LCP)</th>
                            <td>41%</td>
                            <td>66%</td>
                        </tr>
                        <tr>
                            <th scope="row">Response to taps and clicks (INP)</th>
                            <td>69%</td>
                            <td>79%</td>
                        </tr>
                        <tr>
                            <th scope="row">Layout stability (CLS)</th>
                            <td>85%</td>
                            <td>83%</td>
                        </tr>
                        <tr>
                            <th scope="row">Server response (TTFB, not a Core Web Vital)</th>
                            <td>22%</td>
                            <td>46%</td>
                        </tr>
                        <tr>
                            <th scope="row">All three Core Web Vitals</th>
                            <td>32%</td>
                            <td>53%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Source: the same report's <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL" target="_blank" rel="noopener noreferrer">India figures</a> and <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL" target="_blank" rel="noopener noreferrer">worldwide figures</a>, and server response from its TTFB view (<a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL&good-cwv-over-time=TTFB" target="_blank" rel="noopener noreferrer">India TTFB</a>, <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL&good-cwv-over-time=TTFB" target="_blank" rel="noopener noreferrer">worldwide TTFB</a>).</p>
            <p>Loading is the weak point, and server response, the wait before anything can load, is the weakest number in the table. Layout stability is fine, slightly better than worldwide. INP is the second concern. Across all the websites in CrUX it slipped for several months, and in its notes on the August 2026 data Google's CrUX team called the continued slide <a href="https://developer.chrome.com/docs/crux/release-notes" target="_blank" rel="noopener noreferrer">"a cause for concern"</a>. In September it held level: 85.4% of websites had good INP, 0.1 points more than in August.</p>
            <p>Desktop does better: <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL" target="_blank" rel="noopener noreferrer">51% of websites visited from India passed</a>, against <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL" target="_blank" rel="noopener noreferrer">61% worldwide</a>. If your customers are in India, a site that passes on phones is ahead of about two in three of the websites in this data.</p>

            <h2 id="check-your-own-site">How to check your site's Core Web Vitals in four steps</h2>
            <ol>
                <li>Run <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a> on your homepage and your main enquiry page, on the mobile tab. The section headed "Discover what your real users are experiencing" <a href="https://web.dev/articles/optimize-cwv-business" target="_blank" rel="noopener noreferrer">shows real Chrome visits over the last 28 days</a>. Note which metric fails, and whether the figures are for the page or the whole site.</li>
                <li>If that section is missing, either Google has too few visits to the page and the site in its data (CrUX covers <a href="https://web.dev/articles/optimize-cwv-business" target="_blank" rel="noopener noreferrer">millions of popular websites, but not all of them</a>) or the page is <a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">blocked from crawling or indexing</a>. Use the lab test lower down the same report, which <a href="https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md" target="_blank" rel="noopener noreferrer">simulates a slow mobile connection</a>, and a mid-range Android phone on mobile data. A developer can also collect real visitors' figures with Google's <a href="https://github.com/GoogleChrome/web-vitals" target="_blank" rel="noopener noreferrer">web-vitals library</a> and send them to Google Analytics 4, though reading the 75th percentile there needs GA4's BigQuery export or Data API, not its built-in reports.</li>
                <li>Open the <a href="https://support.google.com/webmasters/answer/9205520?hl=en" target="_blank" rel="noopener noreferrer">Core Web Vitals report</a> in Google Search Console, one of <Link to="/tools-we-use">the tools we use</Link>. Verify the site from an account the business owns, not your developer's (our checklist covers <Link to="/blogs/technical-seo-checklist">setting up Search Console</Link>). Fix groups marked Poor first, as Google recommends; a group usually shares one template, so one fix can move many pages. Once the fix is live, start validation, and Search Console watches the pages for 28 days.</li>
                <li>Write down the date, the three field numbers and the element that counts as LCP, which <a href="https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint" target="_blank" rel="noopener noreferrer">the lab report shows</a>, so you can tell later whether the work changed anything.</li>
            </ol>

            <h3 id="what-the-pagespeed-score-means">What the PageSpeed score means</h3>
            <p>The 0 to 100 number in the lab section blends five lab measurements: <a href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring" target="_blank" rel="noopener noreferrer">Total Blocking Time 30%, LCP 25%, CLS 25%, First Contentful Paint 10% and Speed Index 10%</a>. Total Blocking Time <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">stands in for INP</a>, because nobody taps during a lab test. The score does not decide whether a page passes. PageSpeed Insights calls 90 or more good, but warns that good lab data <a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">"does not necessarily mean real-user experiences will also be good"</a>. Lighthouse's documentation calls a perfect 100 "extremely challenging to achieve and not expected", and Google Search Central says chasing one just for SEO <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">"may not be the best use of your time"</a>.</p>

            <h2 id="why-pages-load-slowly">Why is my website slow to load? It is rarely the image file</h2>
            <p>Google's Chrome team measured where the time goes on real Chrome visits to pages whose main element is an image, and <a href="https://web.dev/blog/common-misconceptions-lcp" target="_blank" rel="noopener noreferrer">published the results in 2024</a>.</p>
            <Chart
                type="bar"
                title="Where the time goes on websites with slow loading"
                unit=" ms"
                data={[
                    ['Server response (TTFB)', 2270],
                    ['Wait before the main image starts loading', 1290],
                    ['Main image download', 350],
                    ['Drawing it on screen', 360],
                ]}
                source="web.dev, Common misconceptions about how to optimize LCP, 2024"
                sourceUrl="https://web.dev/blog/common-misconceptions-lcp"
                note="Real Chrome visits to pages whose largest element is an image, on sites with poor LCP (the median across sites of each site's 75th percentile). On sites with good LCP the four parts take 600, 350, 160 and 230 ms."
            />
            <p>On sites with poor LCP, the median site waits 2,270 milliseconds for the server and 1,290 more before the browser even starts fetching the main image. Most of these sites spend <a href="https://web.dev/blog/common-misconceptions-lcp" target="_blank" rel="noopener noreferrer">less than 10% of their LCP time</a> on the download, so compressing the image, the usual first tip, rarely fixes a failing page by itself.</p>
            <p>Server response, or time to first byte (TTFB), is <a href="https://web.dev/articles/ttfb" target="_blank" rel="noopener noreferrer">good at 0.8 seconds or less</a>. When a site is hosted in one country and its visitors are elsewhere, <a href="https://web.dev/articles/optimize-cwv-business" target="_blank" rel="noopener noreferrer">the distance adds to the wait</a>, and a content delivery network (CDN) keeps copies of the site closer to them. With good server response on only <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=India&rank=ALL&good-cwv-over-time=TTFB" target="_blank" rel="noopener noreferrer">22% of websites visited from India</a>, question the hosting first.</p>
            <p>The 1,290 milliseconds is time lost before the browser even starts the download, often because it has not found the image yet or does not know it matters most. The browser finds the image soonest when it is <a href="https://web.dev/blog/common-misconceptions-lcp" target="_blank" rel="noopener noreferrer">a plain img tag in the HTML</a>, so for the main image on every template, ask for four things:</p>
            <ul>
                <li>An img element in the HTML, not a CSS background or a slider built by a script.</li>
                <li>Width and height set, so its space is reserved and the text below does not jump (that protects CLS).</li>
                <li>No lazy-loading. Google's guidance is blunt: <a href="https://web.dev/articles/optimize-lcp" target="_blank" rel="noopener noreferrer">"Never lazy-load your LCP image"</a>.</li>
                <li>The attribute <code>fetchpriority="high"</code>, which tells the browser to <a href="https://web.dev/blog/common-misconceptions-lcp" target="_blank" rel="noopener noreferrer">start loading it straight away</a>.</li>
            </ul>
            <p>Few sites do all four: in 2025, <a href="https://almanac.httparchive.org/en/2025/performance" target="_blank" rel="noopener noreferrer">16 to 17% of pages lazy-loaded their main image, 17% of mobile pages with an image as the main element used <code>fetchpriority="high"</code>, and 62% of mobile pages had at least one image without set dimensions</a>. Forward this line to your developer:</p>
            <Code lang="html">{\`<img src="/images/hero-1600.webp" width="1600" height="900" alt="Describe what the photo shows" fetchpriority="high">\`}</Code>

            <h2 id="business-decisions-that-slow-a-site">Business decisions that slow a site down</h2>
            <p>Many slow pages come from decisions made outside the code. Google's <a href="https://web.dev/articles/optimize-cwv-business" target="_blank" rel="noopener noreferrer">guide for business decision makers</a> lists causes that owners and marketing teams control:</p>
            <ul>
                <li>Video at the top of the page, and carousels, which can make the browser download several large images at once.</li>
                <li>Print-quality images from media partners or design agencies. Ask for web-optimised versions.</li>
                <li>Code from expired campaigns left in a tag manager, which is still downloaded and compiled on every page.</li>
                <li>A/B testing tools that hold back the page until the test changes apply. Run them only on the pages being tested, briefly, and remove finished tests.</li>
                <li>Campaign links that pass through redirects or chains of link shorteners. Link to the final address, and ask whoever runs your CDN to ignore UTM parameters when caching.</li>
                <li>Widgets loaded on every page, such as a map that only the contact page needs. In 2025, <a href="https://almanac.httparchive.org/en/2025/third-parties" target="_blank" rel="noopener noreferrer">at least 90% of pages used one or more third parties</a>.</li>
                <li>Cookie notices and offer bars inserted above the content after loading. Show them as overlays instead. The consent tool matters too: in April 2024 Google's CrUX team wrote that Google had been working with consent management platforms, including OneTrust, Complianz and Axeptio, and that this had <a href="https://developer.chrome.com/docs/crux/release-notes" target="_blank" rel="noopener noreferrer">"resulted in much improved INP for sites using these platforms"</a>.</li>
            </ul>
            <p>Keep the platform, theme and plugins updated too, or choose a host that does it for you, so the site gets <a href="https://web.dev/articles/optimize-cwv-business" target="_blank" rel="noopener noreferrer">the improvements platforms keep making</a>.</p>

            <h3 id="does-the-platform-matter">Does the platform matter?</h3>
            <Chart
                type="bar"
                title="Websites visited from India passing Core Web Vitals on phones, by platform"
                unit="%"
                data={[
                    ['Wix', 56],
                    ['Shopify', 53],
                    ['Webflow', 39],
                    ['All websites', 32],
                    ['WordPress', 29],
                    ['WooCommerce (on WordPress)', 25],
                    ['Drupal', 21],
                    ['Next.js (custom builds)', 21],
                    ['Blogger', 7],
                ]}
                source="HTTP Archive Technology Report (Chrome UX Report data), September 2026"
                sourceUrl="https://httparchive.org/reports/techreport/tech?tech=ALL,WordPress,Shopify,Wix,Webflow,WooCommerce,Drupal,Next.js,Blogger&geo=India&rank=ALL"
                note="Websites visited from India, on phones, September 2026. Smaller platforms move several points from month to month (the report counts 5,454 Webflow sites against 186,717 on WordPress). Results also reflect hosting, themes, plugins and build quality."
            />
            <p>Somewhat. WordPress runs <a href="https://w3techs.com/technologies/overview/content_management" target="_blank" rel="noopener noreferrer">40.2% of all websites</a> (W3Techs, October 2026), so it is the platform most owners meet. Of the WordPress sites visited from India, <a href="https://httparchive.org/reports/techreport/tech?tech=ALL,WordPress,Shopify,Wix,Webflow,WooCommerce,Drupal,Next.js,Blogger&geo=India&rank=ALL" target="_blank" rel="noopener noreferrer">29% passed on phones in September 2026</a>. In the same report about half of Wix and Shopify sites passed, and only 21% of sites built with Next.js, a framework for custom JavaScript builds, so a custom build is not automatically faster.</p>
            <p>The Web Almanac's chapter on content management systems says figures like these <a href="https://almanac.httparchive.org/en/2025/cms" target="_blank" rel="noopener noreferrer">"capture the combined effects of platform defaults, hosting choices, themes, plugins, and page builders"</a>. Choose the platform for what the site has to do (see our guide to <Link to="/blogs/plan-a-business-website">planning a business website</Link>), then hold whoever builds it to field results on phones. We build <Link to="/services/ecommerce-solutions">online stores on Shopify, WooCommerce or custom code</Link>, and the same test applies to each.</p>

            <h2 id="questions-to-ask-your-developer">What to ask your developer or agency</h2>
            <p>These work for a new build or an existing site. Ask for specific answers, in writing.</p>
            <ol>
                <li>Will you show me field data on mobile before and after the work, not just the PageSpeed score?</li>
                <li>Where is the site hosted, and does a CDN serve visitors in India from nearby?</li>
                <li>How is the main image loaded on each template: in the HTML, sized, not lazy-loaded and marked high priority?</li>
                <li>Do images, videos, embeds and ad slots have space reserved?</li>
                <li>Which scripts load on every page, and can maps, chat and video embeds load only where they are used?</li>
                <li>How do the cookie banner and any A/B testing tool load, and do they delay the page or push content down?</li>
                <li>Who updates the platform, theme and plugins after launch, and how often?</li>
                <li>If Google has no field data for our site, how will we see real-visitor numbers? Lab tools <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">cannot measure INP</a>.</li>
            </ol>

            <h2 id="mistakes-to-avoid">Mistakes to avoid</h2>
            <ul>
                <li>Judging the site by the PageSpeed score, or paying for work whose only goal is 100.</li>
                <li>Testing only on office Wi-Fi with a new phone.</li>
                <li>Expecting results within a week. Field data covers 28 days, and so does Search Console's validation.</li>
                <li>Removing a feature customers use, such as booking or chat, instead of loading it only where it is needed.</li>
            </ul>
            <Callout title="Watch out">
                <p>You may read 2026 articles claiming that Google cut the good LCP threshold to 2 seconds, added new Core Web Vitals or marks down a whole domain when a quarter of its pages are slow. Google's documentation says none of this. Search Central's Core Web Vitals page still gives <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer">2.5 seconds, 200 milliseconds and 0.1</a>. The web.dev guide says stable metrics <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">"won't change more than once per year"</a> and that changes are announced in the documentation. Google's notice for the March 2026 core update says only that it rolled out and <a href="https://status.search.google.com/incidents/7eTbAa2jWdToLkraZj5y" target="_blank" rel="noopener noreferrer">was complete as of 8 April 2026</a>. If someone quotes a new rule, ask for the Google page that states it.</p>
            </Callout>

            <h2 id="how-much-they-matter">Do Core Web Vitals affect Google rankings and sales?</h2>
            <p>Google's page experience documentation says <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">"Core Web Vitals are used by our ranking systems"</a>, but also that good reports do not guarantee top rankings, and that Google "always seeks to show the most relevant content, even if the page experience is sub-par". Where many helpful pages compete for a search, a great page experience "can contribute to success in Search". Google's ranking systems generally judge pages one by one, with "some site-wide assessments".</p>
            <p>On sales, two Indian companies published results on web.dev in 2023. The bus booking site redBus reported <a href="https://web.dev/case-studies/redbus-inp" target="_blank" rel="noopener noreferrer">a 7% increase in sales</a> after improving INP. The Economic Times cut INP nearly fourfold from close to 1,000 milliseconds, while also moving to Next.js, and reported <a href="https://web.dev/case-studies/economic-times-inp" target="_blank" rel="noopener noreferrer">a 50% decrease in bounce rate and a 43% rise in pageviews on topic pages</a>. These are the companies' own figures from several changes made at once, so do not read them as a forecast for your site.</p>
            <p>Our reading: fix Core Web Vitals because they describe what your visitors go through, and count any ranking gain as a bonus. Faster loading will not lift a page that does not answer the search, which is why our <Link to="/services/seo-services">SEO services</Link> work on content and speed together. There is more on search in our <Link to="/blogs/topic/seo">SEO guides</Link>.</p>

            <h2 id="where-to-start">Where to start this month</h2>
            <ol>
                <li>Measure with PageSpeed Insights, Search Console and a mid-range phone on mobile data, and write the numbers down.</li>
                <li>Fix the cheap things: the hero image, images without dimensions, unused scripts and widgets, and banners that push content down.</li>
                <li>If server response is slow, look at hosting and a CDN before paying for anything else.</li>
                <li>Start validation in Search Console as soon as the fix is live. It then watches the pages for 28 days; when it finishes, compare the field numbers with the ones you wrote down.</li>
            </ol>
            <p>If you would rather hand the work over, our <Link to="/services/website-design-development">website design and development service</Link> checks page speed on phones and desktop browsers before a site goes live. There are <Link to="/blogs/topic/websites">more website guides</Link> on the blog.</p>
        </>
    );
}
`;export{e as default};