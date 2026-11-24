var e=`import { Link } from 'react-router-dom';
import { Callout, Chart, Code, Figure } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>A technical SEO checklist for a small business website covers the checks that decide whether Google can find, read, index and show your pages: Search Console access, indexing, robots.txt, the sitemap, one address per page, HTTPS, phones, speed, JavaScript, errors and redirects, structured data, and page titles. Work through it in that order, because the later checks only matter once the early ones pass. Run the full list at launch or after a rebuild, then check the main Search Console reports once a month.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>Google's <a href="https://developers.google.com/search/docs/essentials/technical" target="_blank" rel="noopener noreferrer">minimum for indexing</a> is three things: Googlebot is not blocked, the page returns HTTP 200, and it has indexable content.</li>
                    <li>Make the business a verified owner in Search Console, so your access never depends on someone else.</li>
                    <li>robots.txt controls crawling, not indexing. To keep a page out of Google, put noindex on a page Google can crawl.</li>
                    <li>Chrome 154, stable since <a href="https://developer.chrome.com/release-notes/154" target="_blank" rel="noopener noreferrer">22 September 2026</a>, asks visitors before their first visit to a public site without HTTPS.</li>
                    <li>In October 2026, HTTP Archive found that 63.9% of US sites and 68.1% of UK sites gave phone visitors a good Core Web Vitals experience, against 53.0% worldwide.</li>
                </ul>
            </Callout>

            <h2 id="what-technical-seo-covers">What is a technical SEO checklist?</h2>
            <p>Google's <a href="https://developers.google.com/search/docs/essentials/technical" target="_blank" rel="noopener noreferrer">Search Essentials</a> set three technical requirements for indexing: Googlebot isn't blocked, the page returns an HTTP 200 status code, and it has indexable content. Meeting them does not guarantee indexing. Every check below protects those three or helps Google pick and show the right page.</p>
            <p>You can usually skip crawl budget. Google wrote its <a href="https://developers.google.com/crawling/docs/crawl-budget" target="_blank" rel="noopener noreferrer">crawl budget guide</a> for sites with about a million pages that change weekly, sites with 10,000 or more pages that change daily, and sites where Search Console lists many URLs as discovered but not indexed. If your pages are crawled the day you publish them, the guide says you don't need to read it.</p>
            <p>Some basics are often missing, though. HTTP Archive's <a href="https://almanac.httparchive.org/en/2025/seo" target="_blank" rel="noopener noreferrer">2025 Web Almanac</a> found a title on 98.5% of mobile pages but a canonical tag on only 67% and a meta description on 67.2%, and structured data on half of home pages.</p>
            <Chart
                type="bar"
                title="How often the technical basics are in place, mobile pages, 2025"
                unit="%"
                data={[['Title element', 98.5], ['Viewport meta tag', 95.2], ['Served over HTTPS', 91.5], ['Meta description', 67.2], ['Canonical tag', 67], ['Structured data (home pages)', 50]]}
                source="HTTP Archive, Web Almanac 2025, SEO chapter"
                sourceUrl="https://almanac.httparchive.org/en/2025/seo"
                note="Share of mobile pages in HTTP Archive's 2025 crawl. The structured data bar is a share of home pages."
            />

            <h2 id="checklist-at-a-glance">The checklist at a glance</h2>
            <p>Each row matches a numbered section below. After the first pass, the last column is your routine.</p>
            <div className="blog-table" role="region" aria-label="Technical SEO checklist summary" tabIndex={0}>
                <table>
                    <caption>The twelve checks, where to look and how often</caption>
                    <thead>
                        <tr>
                            <th scope="col">Check</th>
                            <th scope="col">Where to look</th>
                            <th scope="col">How often</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">1. Business is a verified owner</th><td>Search Console: Settings, Users and permissions</td><td>Once, and when staff or agencies change</td></tr>
                        <tr><th scope="row">2. Important pages are indexed</th><td>Page indexing report, URL Inspection</td><td>Monthly</td></tr>
                        <tr><th scope="row">3. robots.txt blocks nothing important</th><td>yoursite.com/robots.txt</td><td>After any change</td></tr>
                        <tr><th scope="row">4. Sitemap lists canonical URLs</th><td>Sitemaps report</td><td>When pages change</td></tr>
                        <tr><th scope="row">5. One address per page</th><td>URL Inspection</td><td>After launches and redesigns</td></tr>
                        <tr><th scope="row">6. HTTPS everywhere</th><td>HTTPS report</td><td>Monthly</td></tr>
                        <tr><th scope="row">7. Works on a phone</th><td>Your phone, URL Inspection screenshot</td><td>When templates change</td></tr>
                        <tr><th scope="row">8. Core Web Vitals</th><td>Core Web Vitals report, PageSpeed Insights</td><td>Monthly</td></tr>
                        <tr><th scope="row">9. Content visible after JavaScript</th><td>URL Inspection live test</td><td>After rebuilds</td></tr>
                        <tr><th scope="row">10. No broken pages or bad redirects</th><td>Page indexing report</td><td>Monthly, and at relaunch</td></tr>
                        <tr><th scope="row">11. Structured data valid and true</th><td>Rich Results Test</td><td>When templates change</td></tr>
                        <tr><th scope="row">12. Titles, descriptions, links, favicon</th><td>Page source, search results</td><td>When you add pages</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 id="own-search-console">1. Own your Search Console property</h2>
            <p>Search Console is <a href="https://support.google.com/webmasters/answer/9128668" target="_blank" rel="noopener noreferrer">free</a>, and most checks below use its reports. Add a <a href="https://support.google.com/webmasters/answer/34592" target="_blank" rel="noopener noreferrer">Domain property</a>, which includes all subdomains and both http and https. You verify it with a DNS record at your domain provider, and the record must <a href="https://support.google.com/webmasters/answer/9008080" target="_blank" rel="noopener noreferrer">stay in place</a> afterwards.</p>
            <p>A property needs at least one verified owner, and if all of them are removed, the <a href="https://support.google.com/webmasters/answer/7687615" target="_blank" rel="noopener noreferrer">other users lose access</a> after a grace period. If your freelancer or agency is the only verified owner, your access depends on them. Verify ownership from a Google account the business controls, then add your freelancer or agency as a Full user under Settings, Users and permissions. The business should <Link to="/blogs/plan-a-business-website">own its domain name and accounts</Link> for the same reason.</p>

            <h2 id="confirm-indexing">2. Check that Google has indexed your important pages</h2>
            <p>The <a href="https://support.google.com/webmasters/answer/7440203" target="_blank" rel="noopener noreferrer">Page indexing report</a> lists the reasons pages are not indexed, such as noindex tags, redirects and duplicates. Google says not to expect every URL to be indexed, so duplicates there are normal, but important pages should not be on the list. After a fix, click Validate fix. Validation typically takes up to about two weeks, and sometimes much longer.</p>
            <Figure
                src="/assets/blog/technical-seo-checklist/search-console-why-not-indexed.webp"
                width={925}
                height={481}
                copies={[480, 640]}
                alt="Search Console's Why pages aren't indexed table for ndcompany.in: Not found (404), 3 pages, validation not started; Alternate page with proper canonical tag, 4; Page with redirect, 3; Crawled, currently not indexed, 6; Discovered, currently not indexed, 8"
                caption="The reasons table in our own Page indexing report, 28 October 2026, a few days after the new site launched. Open any row to see the addresses it covers and decide whether it needs a fix."
            />
            <p>For one page, the <a href="https://support.google.com/webmasters/answer/9012289" target="_blank" rel="noopener noreferrer">URL Inspection tool</a> shows whether it is indexed, which canonical Google chose and, in a live test, how Google sees it now. You can request indexing there, but a request guarantees nothing and there is a daily limit. Google says indexing typically takes a day or so, and can take up to a week or two. A site: search is no way to count indexed pages, because the <a href="https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site" target="_blank" rel="noopener noreferrer">site: operator</a> doesn't necessarily return every indexed URL.</p>
            <Figure
                src="/assets/blog/technical-seo-checklist/search-console-url-inspection.webp"
                width={931}
                height={482}
                copies={[480, 640]}
                alt="URL Inspection in Search Console for this checklist's address: URL is on Google, Page indexing says Page is indexed, HTTPS says Page is served over HTTPS, and Breadcrumbs shows 1 valid item detected"
                caption="URL Inspection for this checklist, 28 October 2026: on Google, indexed, served over HTTPS and with valid breadcrumbs."
            />
            <p>On WordPress, check Settings, Reading. The "Discourage search engines" box <a href="https://wordpress.org/documentation/article/settings-reading-screen/" target="_blank" rel="noopener noreferrer">adds a noindex,nofollow tag</a> to your pages and <a href="https://make.wordpress.org/core/2020/07/22/new-xml-sitemaps-functionality-in-wordpress-5-5/" target="_blank" rel="noopener noreferrer">turns off the built-in sitemaps</a>. Untick it when the site goes live.</p>

            <h2 id="robots-txt">3. Read your robots.txt file</h2>
            <p>Open yoursite.com/robots.txt in a browser. The file is <a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro" target="_blank" rel="noopener noreferrer">mainly there to stop crawlers overloading your site</a>, and it does not keep pages out of Google: a disallowed page can still be indexed if other sites link to it. To keep a page out, use noindex, which <a href="https://developers.google.com/search/docs/crawling-indexing/block-indexing" target="_blank" rel="noopener noreferrer">only works</a> if robots.txt lets Google fetch the page.</p>
            <p>A missing file is fine: Google treats a 4xx response (other than 429) as <a href="https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec" target="_blank" rel="noopener noreferrer">no crawl restrictions</a>. A server error is worse, because Google stops crawling for the first 12 hours, then uses the last good copy for up to 30 days. Most small sites need no more than this:</p>
            <Code lang="plaintext" title="robots.txt">{\`User-agent: *
# Optional: a folder you want crawlers to skip
Disallow: /admin/

Sitemap: https://www.example.com/sitemap.xml\`}</Code>
            <div className="blog-table" role="region" aria-label="What robots.txt, noindex, canonical tags and redirects do" tabIndex={0}>
                <table>
                    <caption>Which control does what</caption>
                    <thead>
                        <tr>
                            <th scope="col">Control</th>
                            <th scope="col">Use it to</th>
                            <th scope="col">It will not</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">robots.txt Disallow</th><td>Stop crawlers fetching a path</td><td>Keep the URL out of search results</td></tr>
                        <tr><th scope="row">noindex</th><td>Keep a page out of the index</td><td>Work if robots.txt blocks the page</td></tr>
                        <tr><th scope="row">rel="canonical"</th><td>Name the preferred version of duplicate pages</td><td>Force Google's choice (it is a hint, not a rule)</td></tr>
                        <tr><th scope="row">301 or 308 redirect</th><td>Move a page for good</td><td>Suit a short-term move (use 302 or 307)</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 id="ai-crawlers">Decide what AI crawlers may fetch</h3>
            <p>You don't need llms.txt or special AI markup for Google: its <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">guide to AI features in Search</a> says Google Search ignores such files, and that having one will neither harm nor help your visibility. <a href="https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers" target="_blank" rel="noopener noreferrer">Google-Extended</a> controls whether Gemini models may use your content, and it does not affect inclusion in Google Search. <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">OpenAI</a> treats its crawlers as separate settings: disallowing GPTBot asks it not to use your content for training, while a site that blocks OAI-SearchBot is not shown in ChatGPT search answers. So block training crawlers if you want to, but check you are not blocking the search ones by accident.</p>
            <p>Few small businesses have done either. We read the robots.txt of 4,564 small business sites in ten countries: of the 4,482 that let Google in, 3.4% blocked an AI crawler, and two thirds of those blocks came from a Cloudflare setting rather than a decision. The numbers are in our <Link to="/blogs/ai-crawler-blocking-study">AI crawler study</Link>, and our guide to <Link to="/blogs/optimize-content-for-llms">optimizing content for LLMs</Link> covers each crawler and the content side. To see what each AI crawler actually gets back, including blocks by a firewall rather than robots.txt, crawl your site with <Link to="/open-source/shoutingtoad">ShoutingToad, our free and open-source SEO spider</Link>. For a wider view, the 2025 Web Almanac found 4.2% of mobile sites naming GPTBot in robots.txt and 2.1% with a valid llms.txt file.</p>
            <Chart
                type="bar"
                title="How many sites address AI crawlers, mobile sites, 2025"
                unit="%"
                data={[['robots.txt answers 200', 84.9], ['Names GPTBot', 4.2], ['Names ClaudeBot', 3.4], ['Names Google-Extended', 3], ['Names PerplexityBot', 2.7], ['Has a valid llms.txt file', 2.1]]}
                source="HTTP Archive, Web Almanac 2025, SEO chapter"
                sourceUrl="https://almanac.httparchive.org/en/2025/seo"
                note="Share of mobile sites in HTTP Archive's 2025 crawl. A crawler counts when robots.txt names it at all, to allow it or to block it. The first bar, sites whose robots.txt request succeeded, is there for scale."
            />

            <h2 id="xml-sitemap">4. Submit a clean XML sitemap to Google</h2>
            <p>A sitemap lists the pages you want Google to find. A site of about 500 pages or fewer, with every important page reachable through links from the home page and few videos, images or news articles you want in search results, <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview" target="_blank" rel="noopener noreferrer">may not need one</a>. We would still have one. On Shopify and WordPress it is automatic: <a href="https://help.shopify.com/en/manual/promoting-marketing/seo/find-site-map" target="_blank" rel="noopener noreferrer">Shopify</a> generates a sitemap.xml for every store, and WordPress has made one at /wp-sitemap.xml since <a href="https://make.wordpress.org/core/2020/07/22/new-xml-sitemaps-functionality-in-wordpress-5-5/" target="_blank" rel="noopener noreferrer">version 5.5</a>. Google's <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap" target="_blank" rel="noopener noreferrer">sitemap rules</a>, in short:</p>
            <ul>
                <li>List only the canonical URLs you want in search results, as full addresses.</li>
                <li>Keep <code>lastmod</code> accurate, because Google uses it only when it is consistently and verifiably right. Google ignores <code>priority</code> and <code>changefreq</code>.</li>
                <li>Submit the sitemap in the Sitemaps report and add a Sitemap line to robots.txt, as above.</li>
            </ul>
            <Figure
                src="/assets/blog/technical-seo-checklist/search-console-sitemaps.webp"
                width={925}
                height={557}
                copies={[480, 640]}
                alt="Search Console's Submitted sitemaps table for ndcompany.in: sitemap-tools.xml, sitemap-blog.xml, sitemap-open-source.xml, sitemap-projects.xml and sitemap-locations.xml, each submitted on 24 October 2026, last read on 27 October 2026, with status Success and 4, 25, 2, 18 and 5 discovered pages"
                caption="Part of our own Sitemaps report: one sitemap per kind of page, each read by Google with status Success."
            />

            <h3 id="bing-indexnow">Do not forget Bing</h3>
            <p>Google is not the only engine that reads your sitemap. Bing's webmaster blog says a sitemap's <a href="https://blogs.bing.com/webmaster/february-2023/The-Importance-of-Setting-the-lastmod-Tag-in-Your-Sitemap" target="_blank" rel="noopener noreferrer">lastmod must be the date the page last changed</a>, the same rule Google applies, so one accurate sitemap serves both. Bing also supports <a href="https://www.bing.com/indexnow/getstarted" target="_blank" rel="noopener noreferrer">IndexNow</a>: you host a key file on your site and send a list of changed URLs, and it tells the engines that support it. The <a href="https://www.indexnow.org/" target="_blank" rel="noopener noreferrer">IndexNow site</a> lists Microsoft Bing, Naver, Seznam.cz, Yandex and Yep as participants, and Google is not one of them. Many CMS plugins can send the pings for you.</p>

            <h2 id="one-address-per-page">5. Give every page one address</h2>
            <p>One page often loads at several addresses, for example <a href="https://developers.google.com/search/docs/crawling-indexing/canonicalization" target="_blank" rel="noopener noreferrer">http and https versions, sorting and filtering options, or a demo copy of the site left open to crawlers</a>. Some duplication is normal and not spam, but Google will pick one version as canonical. A redirect or a <code>rel="canonical"</code> link is a <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" target="_blank" rel="noopener noreferrer">strong signal</a> for the version you prefer, and a sitemap entry a weak one. Don't use robots.txt or noindex for this: noindex blocks the page from Search completely. URL Inspection shows the canonical you declared next to the one Google selected.</p>
            <p>Online stores need the most care, because sorting and filters can give one category page many addresses. Clean URLs are part of our <Link to="/services/ecommerce-solutions">online store builds</Link>.</p>
            <h3 id="url-structure">What does a well-optimized URL look like?</h3>
            <p>One a person can read. Google's <a href="https://developers.google.com/search/docs/crawling-indexing/url-structure" target="_blank" rel="noopener noreferrer">URL structure guide</a> recommends readable words rather than long ID numbers, words in your audience's own language, and hyphens between words rather than underscores. Google treats URLs as case sensitive, so <code>/Services</code> and <code>/services</code> are two addresses: pick lowercase and redirect the other spelling.</p>
            <ul>
                <li>Readable: <code>example.com/services/website-design</code> rather than <code>example.com/index.php?page=42&amp;id=3a5ebc94</code></li>
                <li>Hyphens: <code>/green-dress</code> rather than <code>/green_dress</code></li>
                <li>Parameters: <code>?category=dresses&amp;sort=low-to-high</code>, with an equals sign between each key and value and an ampersand between pairs</li>
            </ul>
            <p>Keep only the parameters that change what the page shows. Session IDs, referral tags and sort orders multiply the addresses of one page, and the guide suggests cookies instead of session IDs. Don't use a <code>#</code> fragment to load different content either.</p>

            <h2 id="https">6. Finish the move to HTTPS</h2>
            <p>Chrome 154 became the stable release on 22 September 2026. Its release notes say it <a href="https://developer.chrome.com/release-notes/154" target="_blank" rel="noopener noreferrer">prompts users by default</a> when they connect to a site over http. The Chrome team's <a href="https://blog.google/security/https-by-defau/" target="_blank" rel="noopener noreferrer">announcement</a> explains that Chrome asks for permission before the first visit to any public site without HTTPS. Nothing is blocked, but a first-time visitor sees a warning. Most traffic has moved already: the same announcement, dated 28 October 2025, put HTTPS at 98% of Chrome visits to public sites on Windows and over 99% on Android and Mac.</p>
            <p>Check that the <a href="https://support.google.com/webmasters/answer/11396518" target="_blank" rel="noopener noreferrer">HTTPS report</a> shows no HTTP URLs, that every http address redirects permanently to https, and that your canonical tags, sitemap and internal links use https. Keep the certificate renewing automatically: Google <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" target="_blank" rel="noopener noreferrer">prefers HTTPS pages as canonical</a> unless there are problems such as an invalid certificate.</p>

            <h2 id="mobile">7. Check the site on a phone</h2>
            <p>Since 5 July 2024, Google has <a href="https://developers.google.com/search/blog/2024/06/mobile-indexing-vlast-final-final.doc" target="_blank" rel="noopener noreferrer">crawled and indexed with only Googlebot Smartphone</a>, and content that is not accessible at all on a mobile device can no longer be indexed. Because Google <a href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" target="_blank" rel="noopener noreferrer">indexes the mobile version</a>, give phones the same content, headings, titles and meta descriptions as desktop. It also won't load content that needs a swipe, a click or typing to appear.</p>
            <p>The Mobile-Friendly Test was <a href="https://developers.google.com/search/blog/2016/05/a-new-mobile-friendly-testing-tool" target="_blank" rel="noopener noreferrer">retired on 1 December 2023</a>, so use a real phone. Try the menu, forms and call buttons, and look for anything cut off or too small to tap. A URL Inspection live test adds a screenshot of what Google rendered. Phones matter everywhere, but your mix depends on the country. In October 2026 StatCounter put phones at <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/#monthly-202610-202610-bar" target="_blank" rel="noopener noreferrer">59.9% of page views worldwide</a>, <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/united-kingdom/#monthly-202610-202610-bar" target="_blank" rel="noopener noreferrer">51.95% in the UK</a> and <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/united-states-of-america/#monthly-202610-202610-bar" target="_blank" rel="noopener noreferrer">45.43% in the US</a>, where desktop still led at 52.4%. Test both.</p>

            <h2 id="page-speed">8. Measure speed with real-user data</h2>
            <p>Google <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">rates a page's Core Web Vitals as good</a> when loading (LCP) takes 2.5 seconds or less, response to taps and clicks (INP) takes 200 milliseconds or less, and layout shift (CLS) is 0.1 or less. Each is measured at the 75th percentile of page loads, on mobile and desktop separately. Google's ranking systems use these measures, but Search <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">always aims to show the most relevant content</a>, even when the page experience is sub-par. So fix poor results without chasing a perfect score.</p>
            <p><a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a> shows field data from real visits over the last 28 days beside a simulated lab test, and the two can differ. Field data shows what your visitors actually got. A new page or a site with little traffic may have no field data at all, and then the lab test is what you have.</p>
            <p>How does your site compare? HTTP Archive's Core Web Vitals data for October 2026, the latest month published when we wrote this, shows the share of websites that pass all three measures for real phone visitors. We read it from <a href="https://cdn.httparchive.org/v1/cwv?technology=ALL&geo=ALL&rank=ALL&start=2026-10-01&end=2026-10-01" target="_blank" rel="noopener noreferrer">HTTP Archive's open API</a> on 17 November 2026, with the same query for the <a href="https://cdn.httparchive.org/v1/cwv?technology=ALL&geo=United%20States%20of%20America&rank=ALL&start=2026-10-01&end=2026-10-01" target="_blank" rel="noopener noreferrer">United States</a> and the <a href="https://cdn.httparchive.org/v1/cwv?technology=ALL&geo=United%20Kingdom%20of%20Great%20Britain%20and%20Northern%20Ireland&rank=ALL&start=2026-10-01&end=2026-10-01" target="_blank" rel="noopener noreferrer">United Kingdom</a>.</p>
            <Chart
                type="bar"
                title="Websites with good Core Web Vitals for phone visitors, October 2026"
                unit="%"
                data={[['Worldwide', 53], ['United States', 63.9], ['United Kingdom', 68.1]]}
                source="HTTP Archive, Core Web Vitals data, October 2026 (open API)"
                sourceUrl="https://cdn.httparchive.org/v1/cwv?technology=ALL&geo=ALL&rank=ALL&start=2026-10-01&end=2026-10-01"
                note="Share of tested websites whose phone visitors had a good LCP, INP and CLS, from Chrome's real-user data. Share is good websites divided by websites tested."
            />
            <div className="blog-table" role="region" aria-label="Share of websites with good Core Web Vitals on phones by measure, October 2026" tabIndex={0}>
                <table>
                    <caption>Websites with a good result on phones, October 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Measure</th>
                            <th scope="col">Worldwide</th>
                            <th scope="col">United States</th>
                            <th scope="col">United Kingdom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">All three passing</th><td>53.0%</td><td>63.9%</td><td>68.1%</td></tr>
                        <tr><th scope="row">Loading (LCP)</th><td>66.1%</td><td>75.6%</td><td>79.9%</td></tr>
                        <tr><th scope="row">Responsiveness (INP)</th><td>78.9%</td><td>87.4%</td><td>86.3%</td></tr>
                        <tr><th scope="row">Layout shift (CLS)</th><td>83.4%</td><td>85.4%</td><td>87.5%</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Loading is where most sites fail, in every market. On desktop the same data gives 61.1% worldwide, 65.6% in the US and 69.4% in the UK for all three. In the 2025 Web Almanac, an image was the largest element in view on <a href="https://almanac.httparchive.org/en/2025/performance" target="_blank" rel="noopener noreferrer">76% of mobile pages</a>, so start with your main image. Our guide explains <Link to="/blogs/core-web-vitals-explained">what LCP, INP and CLS measure and how to fix each one</Link>.</p>

            <h2 id="javascript">9. Make sure JavaScript is not hiding content</h2>
            <p>Google can run JavaScript, but it still <a href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" target="_blank" rel="noopener noreferrer">calls server-side rendering or pre-rendering a great idea</a>, because it makes a site faster for users and crawlers and not all bots can run JavaScript. It also warns that using JavaScript to remove a noindex tag may not work.</p>
            <p>Links should be <code>&lt;a&gt;</code> elements with an <code>href</code>, which Google says is <a href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable" target="_blank" rel="noopener noreferrer">generally the only kind it can crawl</a>, so a menu built from scripted buttons can hide pages. <a href="https://developers.google.com/search/docs/crawling-indexing/googlebot" target="_blank" rel="noopener noreferrer">Googlebot</a> reads only the first 2MB of a supported file, uncompressed, so keep large inline scripts out of the HTML, where they could push your content and links past that point. To check, open the rendered HTML in a URL Inspection live test.</p>

            <h2 id="errors-and-redirects">10. Fix errors and use the right redirects</h2>
            <p>Google <a href="https://developers.google.com/crawling/docs/troubleshooting/http-status-codes" target="_blank" rel="noopener noreferrer">doesn't index URLs that return a 4xx code</a> and removes ones already indexed. It slows its crawling on 5xx and 429 errors and follows up to 10 redirect hops. In the Page indexing report, watch Not found (404), Server error (5xx), Redirect error and Soft 404, which means an empty or error page that returns a success code.</p>
            <p>When a page moves for good, use a permanent redirect (301 or 308): Google <a href="https://developers.google.com/search/docs/crawling-indexing/301-redirects" target="_blank" rel="noopener noreferrer">uses it as a signal that the new URL should be canonical</a>, and does not use a temporary one (302 or 307) that way. Before a redesign, map every old URL to its new address. Keep the redirects <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer">generally at least a year</a>, and don't send many old URLs to one irrelevant page such as the home page. To close the site for a day or two, <a href="https://developers.google.com/search/docs/crawling-indexing/pause-online-business" target="_blank" rel="noopener noreferrer">serve a 503</a>. Check the <a href="https://support.google.com/webmasters/answer/9044101" target="_blank" rel="noopener noreferrer">Security issues report</a> monthly too, because hacked pages can carry a warning label in search results.</p>

            <h2 id="structured-data">11. Add structured data that matches the page</h2>
            <p>Structured data is a standard format for telling Google what a page is about, and Google <a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer">recommends JSON-LD</a>. On the home page, start with <a href="https://developers.google.com/search/docs/appearance/structured-data/organization" target="_blank" rel="noopener noreferrer">Organization</a>, which has no required properties, and <a href="https://developers.google.com/search/docs/appearance/site-names" target="_blank" rel="noopener noreferrer">WebSite</a>, which tells Google your preferred site name. A logo, if you add one, must be at least 112 by 112 pixels. Replace the placeholders with your own details:</p>
            <Code lang="html" title="Home page structured data">{\`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Your Business Name",
      "url": "https://www.example.com/",
      "logo": "https://www.example.com/logo.png",
      "sameAs": ["https://www.instagram.com/yourbusiness"]
    },
    {
      "@type": "WebSite",
      "name": "Your Business Name",
      "url": "https://www.example.com/"
    }
  ]
}
<\/script>\`}</Code>
            <p><a href="https://developers.google.com/search/docs/appearance/structured-data/local-business" target="_blank" rel="noopener noreferrer">LocalBusiness</a> markup requires an address, so use it only if you have a real street address to show. If you travel to customers, keep Organization and set up a <Link to="/blogs/google-business-profile-guide">service-area Google Business Profile</Link>. Whatever you add must be a <a href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies" target="_blank" rel="noopener noreferrer">true representation of the page content</a>, and even correct markup does not guarantee a rich result. Two old tactics do not work: a business that controls the reviews about itself is <a href="https://developers.google.com/search/docs/appearance/structured-data/review-snippet" target="_blank" rel="noopener noreferrer">ineligible for review stars</a>, and FAQ rich results <a href="https://developers.google.com/search/updates" target="_blank" rel="noopener noreferrer">stopped appearing</a> on 7 May 2026.</p>
            <Figure
                src="/assets/blog/technical-seo-checklist/schema-validator-homepage.webp"
                width={1000}
                height={928}
                copies={[480, 640]}
                alt="The Schema.org validator's result for the ndcompany.in home page: a WebPage item with 0 errors and 0 warnings, showing its type, id, address, name, description and language, and the WebSite it is part of"
                caption="Our home page in the Schema.org validator, 28 October 2026: one WebPage, part of the WebSite, with no errors or warnings. Google's Rich Results Test then shows which rich results the markup can earn."
            />

            <h2 id="titles-links-favicon">12. Tidy titles, descriptions, links and favicon</h2>
            <ul>
                <li>Give every page its own <code>&lt;title&gt;</code>, as Google <a href="https://developers.google.com/search/docs/appearance/title-link" target="_blank" rel="noopener noreferrer">asks</a>.</li>
                <li>Write a meta description for each important page. There is <a href="https://developers.google.com/search/docs/appearance/snippet" target="_blank" rel="noopener noreferrer">no length limit</a>, but Google truncates snippets to fit the device, so put the useful part first.</li>
                <li>Link every page you care about from <a href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable" target="_blank" rel="noopener noreferrer">at least one other page</a>, with link text that says where it leads.</li>
                <li>Use a square <a href="https://developers.google.com/search/docs/appearance/favicon-in-search" target="_blank" rel="noopener noreferrer">favicon of at least 8 by 8 pixels</a> (Google recommends larger than 48 by 48), and don't block Google from crawling it.</li>
            </ul>

            <h2 id="outdated-advice">Outdated advice you can skip</h2>
            <p>Each row links to the Google page that retired or rules out the advice.</p>
            <div className="blog-table" role="region" aria-label="Outdated technical SEO advice and what Google says now" tabIndex={0}>
                <table>
                    <caption>Advice about things Google has retired or ignores</caption>
                    <thead>
                        <tr>
                            <th scope="col">Advice you may still see</th>
                            <th scope="col">What Google says now</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Use the Mobile-Friendly Test</th><td><a href="https://developers.google.com/search/blog/2016/05/a-new-mobile-friendly-testing-tool" target="_blank" rel="noopener noreferrer">Retired</a> on 1 December 2023</td></tr>
                        <tr><th scope="row">Improve your FID score</th><td><a href="https://web.dev/blog/inp-cwv-march-12" target="_blank" rel="noopener noreferrer">Replaced by INP</a> on 12 March 2024</td></tr>
                        <tr><th scope="row">Add FAQ markup for rich results</th><td><a href="https://developers.google.com/search/updates" target="_blank" rel="noopener noreferrer">No longer shown</a> since 7 May 2026</td></tr>
                        <tr><th scope="row">Set sitemap priority and changefreq</th><td><a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap" target="_blank" rel="noopener noreferrer">Google ignores both</a></td></tr>
                        <tr><th scope="row">Fill in the keywords meta tag</th><td><a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">Not used</a> by Google Search</td></tr>
                        <tr><th scope="row">Add llms.txt for Google's AI features</th><td><a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">Ignored by Google Search</a></td></tr>
                    </tbody>
                </table>
            </div>

            <h2 id="questions-for-your-provider">What to ask your developer or SEO provider</h2>
            <p>Whoever you hire, us included, ask these before work starts and get the answers in writing:</p>
            <ul>
                <li>Will the business be a verified owner in Search Console?</li>
                <li>Can you show <Link to="/blogs/core-web-vitals-explained">Core Web Vitals field data</Link> on phones for sites you have built, and which platform, theme or page builder will you use?</li>
                <li>At relaunch, will every old URL redirect to its new address?</li>
                <li>Who removes the staging noindex at launch, and who checks that it has gone?</li>
                <li>What will robots.txt block, and which structured data will you add?</li>
            </ul>
            <p>Google's <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">guide to hiring an SEO</a> lists questions to ask, among them whether they follow the Google Search Essentials and what results they expect, in what timeframe. It says no one can guarantee a #1 ranking, and warns against claims of a "special relationship" with Google or a "priority submit".</p>

            <h2 id="where-to-start">Where to start</h2>
            <p>This week, make the business a verified owner in Search Console, run your home page through URL Inspection to confirm it is indexed and the live test finds no noindex, and submit your sitemap. Then give it time. Google's <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">SEO Starter Guide</a> suggests waiting a few weeks to assess the effect of changes, <a href="https://support.google.com/webmasters/answer/7440203" target="_blank" rel="noopener noreferrer">Page indexing validation</a> typically takes up to about two weeks, and the <a href="https://support.google.com/webmasters/answer/9205520" target="_blank" rel="noopener noreferrer">Core Web Vitals report</a> tracks a fix for 28 days. Our guide to <Link to="/blogs/how-long-does-seo-take">how long SEO takes</Link> sets out a realistic timeline, and if your business serves a local area, run the <Link to="/blogs/local-seo-audit">local SEO audit</Link> next.</p>

            <h2 id="how-we-work">How we work</h2>
            <p>We are an agency based in India that works with small businesses and agencies in the US, the UK, the Netherlands, the UAE and Australia. For a first look, paste your address into our free <Link to="/tools/rankguru">RankGuru on-page checker</Link>, or ask for a <Link to="/free-seo-audit">free SEO audit</Link>, which covers many of the checks above, and read <Link to="/blogs/free-seo-audit-how-it-works">how it works</Link> first. If you want us to fix what the audit finds, that is our <Link to="/services/seo-services">SEO services</Link> work, and <Link to="/white-label/seo">agencies can resell it under their own name</Link>. Quotes are set in writing before work starts, and we do not promise rankings. More guides are on our <Link to="/blogs/topic/seo">SEO topic page</Link>.</p>
        </>
    );
}
`;export{e as default};