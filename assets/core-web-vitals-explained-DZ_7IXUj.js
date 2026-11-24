var e=`import { Link } from 'react-router-dom';
import { Callout, Chart, Code, Figure } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>Core Web Vitals are three measurements Google takes from real visits to a website. Largest Contentful Paint (LCP) is how long the main content takes to appear, Interaction to Next Paint (INP) is how quickly the page responds to a tap, click or key press, and Cumulative Layout Shift (CLS) is how much the layout jumps unexpectedly during a visit. A page passes when <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">each of the three is good for at least 75% of visits</a>, with phones and computers judged separately. Many sites still fall short on phones: in October 2026, <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL" target="_blank" rel="noopener noreferrer">53% of the websites in Google's Chrome data passed worldwide</a>, 64% in the United States and 68% in the United Kingdom.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li><a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">Google's targets</a>: main content within 2.5 seconds (LCP), responses to taps and clicks within 200 milliseconds (INP) and layout shift of 0.1 or less (CLS).</li>
                    <li>Pass or fail comes from <a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">real Chrome visits over the previous 28 days</a>, not from the 0 to 100 PageSpeed score.</li>
                    <li>On phones in October 2026, 53% of websites passed worldwide, 64% in the US and 68% in the UK. Slow loading (LCP) is the most common failure everywhere.</li>
                    <li>On slow sites, most of the wait is the server and a late start on the main image, <a href="https://web.dev/blog/common-misconceptions-lcp" target="_blank" rel="noopener noreferrer">not the image download</a>.</li>
                    <li>Google says <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">Core Web Vitals are used by its ranking systems</a>, and also that there is no single page experience signal. Fix them for your visitors first.</li>
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
            <p>INP looks at every click, tap and key press in a visit and reports <a href="https://web.dev/articles/inp" target="_blank" rel="noopener noreferrer">the longest interaction, ignoring outliers</a>. Scrolling, hovering and zooming do not count.</p>
            <p>CLS scores unexpected movement, such as text jumping down when an advert loads above it. It is based on <a href="https://web.dev/articles/cls" target="_blank" rel="noopener noreferrer">the largest burst of unexpected shifts</a> in a visit, and movement within half a second of a tap or click does not count, so opening a menu is fine.</p>
            <p>INP <a href="https://web.dev/blog/inp-cwv-march-12" target="_blank" rel="noopener noreferrer">replaced First Input Delay (FID) as a Core Web Vital on 12 March 2024</a>, so a guide that still lists FID is out of date.</p>

            <h2 id="how-google-decides-a-page-passes">How Google decides whether a page passes</h2>
            <p>Google judges each metric at the 75th percentile of visits, <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">separately for phones and desktop computers</a>. LCP is good when at least 75% of visits see the main content within 2.5 seconds, and INP and CLS are tested the same way. PageSpeed Insights says a page passes when <a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">all three are good, or when LCP and CLS are good and there is too little data for INP</a>. It looks at the previous 28 days of visits.</p>
            <p>The data comes from the Chrome User Experience Report (CrUX): Chrome on desktop and Android, from users who have turned on usage reporting. It <a href="https://developer.chrome.com/docs/crux/methodology" target="_blank" rel="noopener noreferrer">leaves out Chrome on iPhone, Android apps that open pages in a WebView and other Chromium browsers such as Microsoft Edge</a>. So the figures describe your Android and desktop Chrome visitors, which may not be a typical sample of your customers.</p>
            <p>Search Console groups pages with a similar experience, gives each group <a href="https://support.google.com/webmasters/answer/9205520?hl=en" target="_blank" rel="noopener noreferrer">the status of its slowest metric</a> and only includes indexed pages (our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> covers indexing). PageSpeed Insights falls back to the whole site when a page has too few visits, and shows <a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">no real-user data</a> when the site has too few. Google does not publish <a href="https://developer.chrome.com/docs/crux/methodology" target="_blank" rel="noopener noreferrer">how many visits that takes</a>, so treat any "visits per day" figure you read as a guess.</p>
            <p>Search Console also <a href="https://support.google.com/webmasters/answer/9205520?hl=en" target="_blank" rel="noopener noreferrer">combines visits from all locations</a>, so if you sell in one country but get plenty of traffic from a country with slower connections, that traffic pulls your results down.</p>

            <h2 id="how-much-they-matter">Does Core Web Vitals affect Google rankings?</h2>
            <p>Yes, a little, and Google is careful about how much. Its page experience documentation says <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">"Core Web Vitals are used by our ranking systems"</a>, and also says:</p>
            <ul>
                <li>There is <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">"no single signal"</a> for page experience. Google's guidance asks you to look at many aspects, including HTTPS, how the page displays on phones and intrusive interstitials.</li>
                <li>Good results in Search Console or a third-party tool <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">do not guarantee</a> that a page ranks at the top.</li>
                <li>Google always seeks the most relevant content, <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">"even if the page experience is sub-par"</a>. Where many helpful pages compete for the same search, a great page experience <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">"can contribute to success in Search"</a>.</li>
                <li>Its core ranking systems <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">"generally evaluate content on a page-specific basis"</a>, so a slow page does not automatically drag down the rest of the site.</li>
            </ul>
            <p>Search Central's Core Web Vitals page <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer">highly recommends</a> good results for success in Search and says nothing about how large the effect is. Nobody outside Google can give you a number, so be wary of any agency that does.</p>
            <p>On sales, two companies published results on web.dev. The bus booking site redBus reported <a href="https://web.dev/case-studies/redbus-inp" target="_blank" rel="noopener noreferrer">a 7% overall increase in sales</a> after improving INP. The Economic Times cut INP nearly fourfold from over 1,000 milliseconds, while also moving to Next.js, and reported <a href="https://web.dev/case-studies/economic-times-inp" target="_blank" rel="noopener noreferrer">a 50% decrease in bounce rate and a 43% rise in pageviews on topic pages</a>. These are the companies' own figures from several changes made at once, so do not read them as a forecast for your site.</p>
            <p>Our reading: fix Core Web Vitals because they describe what your visitors go through, and count any ranking gain as a bonus. Faster loading will not lift a page that does not answer the search, which is why our <Link to="/services/seo-services">SEO services</Link> work on content and speed together.</p>

            <h2 id="how-websites-score">How websites score on phones: worldwide, US and UK</h2>
            <p>We pulled the figures in this section on 17 November 2026 from <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL" target="_blank" rel="noopener noreferrer">HTTP Archive's Technology Report</a>, which is built on CrUX, using its public data feed. The latest month is October 2026. It covers about 8.3 million websites worldwide with enough Chrome visits from phones to be measured (sites with too few visitors are left out), about 1.23 million in the United States and 397,000 in the United Kingdom. CrUX sets each visit's country <a href="https://developer.chrome.com/docs/crux/methodology/dimensions" target="_blank" rel="noopener noreferrer">from the visitor's IP address</a>, so a site based anywhere counts in the country its visitors are in.</p>
            <Chart
                type="column"
                title="Websites passing all three Core Web Vitals on phones"
                unit="%"
                series={[
                    { name: 'Worldwide', data: [['Oct 2024', 48], ['Oct 2025', 52], ['Oct 2026', 53]] },
                    { name: 'United States', data: [['Oct 2024', 59], ['Oct 2025', 62], ['Oct 2026', 64]] },
                    { name: 'United Kingdom', data: [['Oct 2024', 60], ['Oct 2025', 65], ['Oct 2026', 68]] },
                ]}
                source="HTTP Archive Technology Report (Chrome UX Report data), October 2024 to October 2026"
                sourceUrl="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL"
                note="Websites whose real Chrome visits on mobile were good for LCP, INP and CLS at the 75th percentile; a site without enough INP data is judged on LCP and CLS. Visits are located by IP address; the United States and United Kingdom figures come from the same report with Geo set to those countries."
            />
            <p>All three places improved every year. Worldwide the pass rate rose from 48% to 53% in two years, the United States from 59% to 64% and the United Kingdom from 60% to 68%. Loading is the weak point in all of them, and server response, the wait before anything can load, is weaker still.</p>
            <div className="blog-table" role="region" aria-label="Share of websites rated good on phones, October 2026" tabIndex={0}>
                <table>
                    <caption>Share of websites rated good on phones, October 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Measure</th>
                            <th scope="col">Worldwide</th>
                            <th scope="col">United States</th>
                            <th scope="col">United Kingdom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Loading (LCP)</th>
                            <td>66%</td>
                            <td>76%</td>
                            <td>80%</td>
                        </tr>
                        <tr>
                            <th scope="row">Response to taps and clicks (INP)</th>
                            <td>79%</td>
                            <td>87%</td>
                            <td>86%</td>
                        </tr>
                        <tr>
                            <th scope="row">Layout stability (CLS)</th>
                            <td>83%</td>
                            <td>85%</td>
                            <td>88%</td>
                        </tr>
                        <tr>
                            <th scope="row">Server response (TTFB, not a Core Web Vital)</th>
                            <td>47%</td>
                            <td>56%</td>
                            <td>63%</td>
                        </tr>
                        <tr>
                            <th scope="row">All three Core Web Vitals</th>
                            <td>53%</td>
                            <td>64%</td>
                            <td>68%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Source: the same report's <a href="https://httparchive.org/reports/techreport/tech?tech=ALL&geo=ALL&rank=ALL" target="_blank" rel="noopener noreferrer">Core Web Vitals and TTFB views</a>, October 2026, each country with its Geo filter. Server response is <a href="https://web.dev/articles/ttfb" target="_blank" rel="noopener noreferrer">good at 0.8 seconds or less and is not a Core Web Vital</a>.</p>
            <div className="blog-table" role="region" aria-label="Share of websites passing all three Core Web Vitals by country, October 2026" tabIndex={0}>
                <table>
                    <caption>Share of websites passing all three Core Web Vitals, October 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Visitors from</th>
                            <th scope="col">Phones</th>
                            <th scope="col">Desktop</th>
                            <th scope="col">Websites measured on phones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Worldwide</th>
                            <td>53%</td>
                            <td>61%</td>
                            <td>8,294,416</td>
                        </tr>
                        <tr>
                            <th scope="row">United States</th>
                            <td>64%</td>
                            <td>66%</td>
                            <td>1,231,797</td>
                        </tr>
                        <tr>
                            <th scope="row">United Kingdom</th>
                            <td>68%</td>
                            <td>69%</td>
                            <td>396,913</td>
                        </tr>
                        <tr>
                            <th scope="row">Netherlands</th>
                            <td>68%</td>
                            <td>72%</td>
                            <td>208,938</td>
                        </tr>
                        <tr>
                            <th scope="row">Australia</th>
                            <td>52%</td>
                            <td>57%</td>
                            <td>162,293</td>
                        </tr>
                        <tr>
                            <th scope="row">United Arab Emirates</th>
                            <td>38%</td>
                            <td>49%</td>
                            <td>69,637</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>The pattern is the same everywhere: phones pass less often than desktop computers, and visitors in the United Arab Emirates and Australia get fewer passing sites than visitors in the US, UK or Netherlands. In the UAE only 48% of websites had good LCP on phones and 24% good server response. The data does not say why, so we will not guess. It does show that a site that passes for your customers in London may not pass for customers in Dubai.</p>
            <p>On desktop, response to clicks is almost never the problem (97% of websites worldwide had good INP) and layout shift is: only 75% had good CLS, against 83% on phones. If you test only on a laptop, expect different failures from the ones your phone visitors see.</p>
            <p>INP is the metric to watch. Across all the websites in CrUX it slipped for several months, and in its notes on the August 2026 data Google's CrUX team called the continued regression <a href="https://developer.chrome.com/docs/crux/release-notes" target="_blank" rel="noopener noreferrer">"a cause for concern"</a>.</p>

            <h2 id="check-your-own-site">How to check your site's Core Web Vitals in four steps</h2>
            <ol>
                <li>Run <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a> on your homepage and your main enquiry page, on the mobile tab. The section headed "Discover what your real users are experiencing" <a href="https://web.dev/articles/optimize-cwv-business" target="_blank" rel="noopener noreferrer">shows real Chrome visits over the last 28 days</a>. Note which metric fails, and whether the figures are for the page or the whole site.</li>
                <li>If that section is missing, either Google has too few visits to the page and the site in its data (CrUX covers <a href="https://web.dev/articles/optimize-cwv-business" target="_blank" rel="noopener noreferrer">millions of popular websites, but not all of them</a>) or the page is <a href="https://developer.chrome.com/docs/crux/methodology" target="_blank" rel="noopener noreferrer">not publicly discoverable</a>, for example because it is set to noindex. Use the lab test lower down the same report, which <a href="https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md" target="_blank" rel="noopener noreferrer">simulates a slow mobile connection</a>, and a mid-range Android phone on mobile data. A developer can also collect real visitors' figures with Google's <a href="https://github.com/GoogleChrome/web-vitals" target="_blank" rel="noopener noreferrer">web-vitals library</a> and send them to Google Analytics 4, though reading the 75th percentile there needs GA4's BigQuery export or Data API, not its built-in reports.</li>
                <li>Open the <a href="https://support.google.com/webmasters/answer/9205520?hl=en" target="_blank" rel="noopener noreferrer">Core Web Vitals report</a> in Google Search Console, one of <Link to="/tools-we-use">the tools we use</Link>. Verify the site from an account the business owns, not your developer's (our checklist covers <Link to="/blogs/technical-seo-checklist">setting up Search Console</Link>). Fix groups marked Poor first; a group is pages with a similar experience, so one fix can move many pages. Once the fix is live, start tracking it in the report, and Search Console <a href="https://support.google.com/webmasters/answer/9205520?hl=en" target="_blank" rel="noopener noreferrer">monitors the issue for 28 days</a>.</li>
                <li>Write down the date, the three field numbers and the element that counts as LCP, which <a href="https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint" target="_blank" rel="noopener noreferrer">the lab report shows</a>, so you can tell later whether the work changed anything.</li>
            </ol>
            <p>Our free <Link to="/tools/rankguru">RankGuru on-page checker</Link> covers the page's titles, headings and text, not its speed, so use it beside PageSpeed Insights, not instead of it.</p>
            <Figure
                src="/assets/blog/core-web-vitals-explained/pagespeed-insights-mobile.webp"
                width={1280}
                height={1101}
                copies={[480, 640]}
                alt="PageSpeed Insights on the mobile tab for this guide: No Data beside Discover what your real users are experiencing, then lab scores of 100 for performance, accessibility, best practices and SEO, and lab metrics of First Contentful Paint 0.9 s, Largest Contentful Paint 1.2 s, Total Blocking Time 0 ms, Cumulative Layout Shift 0 and Speed Index 0.9 s"
                caption="PageSpeed Insights on this guide, 28 October 2026. The site is new, so the real-visitor section says No Data and only the lab test shows. A lab score of 100 does not mean real visits pass."
            />
            <Figure
                src="/assets/blog/core-web-vitals-explained/search-console-core-web-vitals.webp"
                width={925}
                height={328}
                copies={[480, 640]}
                alt="The Mobile card of Search Console's Core Web Vitals report for ndcompany.in: Not enough usage data in the last 90 days for this device type, with a link to try PageSpeed Insights"
                caption="The same site in Search Console's Core Web Vitals report: not enough visits yet for Google to judge it, so the lab test and a real phone are what we have to go on."
            />

            <h3 id="what-the-pagespeed-score-means">What the PageSpeed score means</h3>
            <p>The 0 to 100 number in the lab section blends five lab measurements. Lighthouse's documentation lists the weights for Lighthouse 10 as <a href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring" target="_blank" rel="noopener noreferrer">Total Blocking Time 30%, LCP 25%, CLS 25%, First Contentful Paint 10% and Speed Index 10%</a>. Total Blocking Time <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">is a proxy for INP</a>, because nobody taps during a lab test. The score does not decide whether a page passes. PageSpeed Insights calls 90 or more good, but warns that good lab data <a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">"does not necessarily mean real-user experiences will also be good"</a>. Lighthouse's documentation calls a perfect 100 <a href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring" target="_blank" rel="noopener noreferrer">"extremely challenging to achieve and not expected"</a>, and Google Search Central says chasing one just for SEO <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">"may not be the best use of your time"</a>.</p>

            <h2 id="why-pages-load-slowly">Why is my website slow to load? It is rarely the image file</h2>
            <p>Slow loading (LCP) is the usual failure, so it gets the most attention here. Google's Chrome team measured where the time goes on real Chrome visits to pages whose main element is an image, and <a href="https://web.dev/blog/common-misconceptions-lcp" target="_blank" rel="noopener noreferrer">published the results in 2024</a>.</p>
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
            <p>Server response, or time to first byte (TTFB), is good at 0.8 seconds or less, and only 47% of websites worldwide met that on phones in October 2026. Google lists <a href="https://web.dev/articles/optimize-lcp" target="_blank" rel="noopener noreferrer">redirects, distant visitors, poor networks and uncacheable URL parameters</a> as common causes of a high TTFB. When a site is hosted in one country and its visitors are in another, <a href="https://web.dev/articles/optimize-cwv-business" target="_blank" rel="noopener noreferrer">the distance adds to the wait</a>, and a content delivery network (CDN) keeps copies of the site closer to them. If your server response is slow, question the hosting first.</p>
            <p>The 1,290 milliseconds is time lost before the browser even starts the download, often because it has not found the image yet or does not know it matters most. The browser finds the image soonest when it is <a href="https://web.dev/blog/common-misconceptions-lcp" target="_blank" rel="noopener noreferrer">a plain img tag in the HTML</a>, so for the main image on every template, ask for four things:</p>
            <ul>
                <li>An img element in the HTML, not a CSS background or a slider built by a script.</li>
                <li>Width and height set, so its space is reserved and the text below does not jump (that protects CLS).</li>
                <li>No lazy-loading. Google's guidance is blunt: <a href="https://web.dev/articles/optimize-lcp" target="_blank" rel="noopener noreferrer">"Never lazy-load your LCP image"</a>.</li>
                <li>The attribute <code>fetchpriority="high"</code>, which tells the browser to <a href="https://web.dev/blog/common-misconceptions-lcp" target="_blank" rel="noopener noreferrer">start loading it straight away</a>.</li>
            </ul>
            <p>Few sites do all four: in 2025, <a href="https://almanac.httparchive.org/en/2025/performance" target="_blank" rel="noopener noreferrer">16 to 17% of pages lazy-loaded their main image, 17% of mobile pages with an image as the main element used <code>fetchpriority="high"</code>, and 62% of mobile pages had at least one image without set dimensions</a>. Forward this line to your developer:</p>
            <Code lang="html">{\`<img src="/images/hero-1600.webp" width="1600" height="900" alt="Describe what the photo shows" fetchpriority="high">\`}</Code>

            <h2 id="what-fixes-inp-and-cls">What usually fixes slow responses and layout shifts?</h2>
            <h3 id="fixing-inp">Slow response to taps and clicks (INP)</h3>
            <p>An interaction has three parts: <a href="https://web.dev/articles/optimize-inp" target="_blank" rel="noopener noreferrer">input delay, processing duration and presentation delay</a>. Most fixes are for a developer: split long jobs into smaller tasks so the browser can respond in between (<a href="https://web.dev/articles/optimize-inp" target="_blank" rel="noopener noreferrer">"Yielding indiscriminately is better than not yielding at all"</a>), keep the page's structure small, because <a href="https://web.dev/articles/optimize-inp" target="_blank" rel="noopener noreferrer">rendering work usually finishes quickly on a small page</a>, and load less script. As an owner, you control the scripts: each widget, chat tool, tracker and testing tool adds work the browser must finish before it can answer a tap. Google's guide for decision makers says to <a href="https://web.dev/articles/optimize-cwv-business" target="_blank" rel="noopener noreferrer">avoid expensive widgets and plugins</a>.</p>
            <p>Google's guidance says <a href="https://web.dev/articles/optimize-inp" target="_blank" rel="noopener noreferrer">"Ideally, your journey in optimizing INP will start with field data"</a>, meaning real visits, because a lab test cannot tap anything by itself. If the real-user section has no data, test the common paths yourself on a phone: open the menu, use the search, add to basket, send the form.</p>
            <h3 id="fixing-cls">Layout that jumps (CLS)</h3>
            <p>Google's <a href="https://web.dev/articles/optimize-cls" target="_blank" rel="noopener noreferrer">guide to layout shift</a> names the usual fixes, and most are cheap:</p>
            <ul>
                <li>Set width and height, or a CSS aspect ratio, on every image and video so the browser reserves the space.</li>
                <li>Reserve space for adverts, embeds and iframes in the first layout, and keep that space even when no advert loads.</li>
                <li>Do not insert banners above content that is already showing. Reserve a slot or show cookie notices as an overlay.</li>
                <li>Match the fallback font to your web font and preload the fonts the first screen needs, so text does not change size when the font arrives.</li>
                <li>Animate with <code>transform</code>, not properties like <code>top</code> and <code>left</code>, which move other content.</li>
            </ul>

            <h2 id="business-decisions-that-slow-a-site">Business decisions that slow a site down</h2>
            <p>Many slow pages come from decisions made outside the code. Google's <a href="https://web.dev/articles/optimize-cwv-business" target="_blank" rel="noopener noreferrer">guide for business decision makers</a> lists causes that owners and marketing teams control:</p>
            <ul>
                <li>Video at the top of the page, and carousels, which can make the browser download several large images at once.</li>
                <li>Print-quality images from media partners or design agencies. Ask for web-optimised versions.</li>
                <li>Code from expired campaigns left in a tag manager, which is still downloaded and compiled on every page.</li>
                <li>A/B testing tools that hold back the page until the test changes apply. Run them only on the pages being tested, briefly, and remove finished tests.</li>
                <li>Campaign links that pass through redirects or chains of link shorteners. Link to the final address, and ask whoever runs your CDN to ignore UTM parameters when caching.</li>
                <li>Widgets loaded on every page, such as a map that only the contact page needs. In 2025, <a href="https://almanac.httparchive.org/en/2025/third-parties" target="_blank" rel="noopener noreferrer">more than nine in ten pages used one or more third parties</a>.</li>
                <li>Cookie notices and offer bars inserted above the content after loading. Show them as overlays instead. The consent tool matters too: in March 2024 Google's CrUX team wrote that Google had been working with consent management platforms, including OneTrust, Complianz and Axeptio, and that this had <a href="https://developer.chrome.com/docs/crux/release-notes" target="_blank" rel="noopener noreferrer">"resulted in much improved INP for sites using these platforms"</a>.</li>
            </ul>
            <p>Keep the platform, theme and plugins updated too, or choose a host that does it for you, so the site gets <a href="https://web.dev/articles/optimize-cwv-business" target="_blank" rel="noopener noreferrer">the improvements platforms keep making</a>.</p>

            <h3 id="does-the-platform-matter">Does the platform matter?</h3>
            <Chart
                type="bar"
                title="Websites passing Core Web Vitals on phones, by platform"
                unit="%"
                series={[
                    { name: 'Worldwide', data: [['Wix', 81], ['Shopify', 77], ['Webflow', 72], ['Squarespace', 71], ['Drupal', 65], ['All websites', 53], ['WordPress', 49], ['WooCommerce (on WordPress)', 41], ['Next.js (custom builds)', 37]] },
                    { name: 'United States', data: [['Wix', 89], ['Shopify', 86], ['Webflow', 81], ['Squarespace', 83], ['Drupal', 77], ['All websites', 64], ['WordPress', 63], ['WooCommerce (on WordPress)', 55], ['Next.js (custom builds)', 53]] },
                    { name: 'United Kingdom', data: [['Wix', 91], ['Shopify', 84], ['Webflow', 80], ['Squarespace', 85], ['Drupal', 75], ['All websites', 68], ['WordPress', 67], ['WooCommerce (on WordPress)', 58], ['Next.js (custom builds)', 52]] },
                ]}
                source="HTTP Archive Technology Report (Chrome UX Report data), October 2026"
                sourceUrl="https://httparchive.org/reports/techreport/tech?tech=ALL,WordPress,Shopify,Wix,Squarespace,Webflow,WooCommerce,Drupal,Next.js&geo=ALL&rank=ALL"
                note="Websites on phones, October 2026. Smaller platforms move several points from month to month: worldwide the report counts 2,513,839 WordPress sites against 56,474 on Webflow, and in the UK 3,792 Webflow sites. Results also reflect hosting, themes, plugins and build quality."
            />
            <p>Somewhat. WordPress runs <a href="https://w3techs.com/technologies/overview/content_management" target="_blank" rel="noopener noreferrer">38.5% of all websites</a> (W3Techs, 17 November 2026), so it is the platform most owners meet. Worldwide, 49% of WordPress sites passed on phones in October 2026, 63% in the US and 67% in the UK, a little below all websites in each place. Hosted builders did better: Wix, Shopify and Squarespace sites passed on phones between 71% and 81% of the time worldwide, and more often in the US and UK. Sites built with Next.js, a framework for custom JavaScript builds, passed least often of the platforms in the chart (37% worldwide), so a custom build is not automatically faster. In the Netherlands, WordPress (69%) and all websites (68%) were level, and in Australia Shopify sites passed 78% of the time against 52% for WordPress.</p>
            <p>The Web Almanac's chapter on content management systems says figures like these <a href="https://almanac.httparchive.org/en/2025/cms" target="_blank" rel="noopener noreferrer">"capture the combined effects of platform defaults, hosting choices, themes, plugins, and page builders"</a>. A platform that passes more often is a good sign, not a promise: a slow theme or a pile of plugins can sink any of them. Choose the platform for what the site has to do (see our guide to <Link to="/blogs/plan-a-business-website">planning a business website</Link>), then hold whoever builds it to field results on phones. We build <Link to="/services/ecommerce-solutions">online stores on Shopify, WooCommerce or custom code</Link>, and the same test applies to each.</p>

            <h2 id="questions-to-ask-your-developer">What to ask your developer or agency</h2>
            <p>These work for a new build or an existing site. Ask for specific answers, in writing.</p>
            <ol>
                <li>Will you show me field data on mobile before and after the work, not just the PageSpeed score?</li>
                <li>Where is the site hosted, and does a CDN serve visitors in my main markets from nearby?</li>
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
                <li>Checking only on a laptop. Desktop and phone fail on different metrics.</li>
            </ul>
            <Callout title="Watch out">
                <p>You may read articles claiming that Google cut the good LCP threshold to 2 seconds, added new Core Web Vitals or marks down a whole domain when a quarter of its pages are slow. Google's documentation says none of this. Search Central's Core Web Vitals page still gives <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer">2.5 seconds, 200 milliseconds and 0.1</a>. The web.dev guide says stable metrics <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">"won't change more than once per year"</a>. Google's status dashboard lists a <a href="https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history" target="_blank" rel="noopener noreferrer">November 2026 core update that began on 10 November 2026</a>, so a ranking move this month has many possible causes. If someone quotes a new speed rule or blames speed for a drop, ask for the Google page that states it.</p>
            </Callout>

            <h2 id="where-to-start">Where to start this month</h2>
            <ol>
                <li>Measure with PageSpeed Insights, Search Console and a mid-range phone on mobile data, and write the numbers down.</li>
                <li>Fix the cheap things: the hero image, images without dimensions, unused scripts and widgets, and banners that push content down.</li>
                <li>If server response is slow, look at hosting and a CDN before paying for anything else.</li>
                <li>Start tracking the fix in Search Console as soon as it is live. It then monitors the issue for 28 days; when that ends, compare the field numbers with the ones you wrote down.</li>
            </ol>
            <p>PageSpeed Insights also reports accessibility. In our <Link to="/blogs/small-business-website-accessibility-study">study of 385 US small business homepages</Link>, 87% had a serious or critical accessibility failure, so it is worth reading that part of the report too.</p>

            <h2 id="how-we-work">How we work with clients abroad</h2>
            <p>We are a brand and growth agency based in India, working with clients in the <Link to="/locations/usa">United States</Link>, the <Link to="/locations/netherlands">Netherlands</Link> and other countries. Our <Link to="/services/website-design-development">website design and development service</Link> checks page speed on phones and desktop browsers before a site goes live. If you would like to know where your site stands first, ask for our <Link to="/free-seo-audit">free SEO audit</Link>. There are <Link to="/blogs/topic/websites">more website guides</Link> and <Link to="/blogs/topic/seo">SEO guides</Link> on the blog.</p>
        </>
    );
}
`;export{e as default};