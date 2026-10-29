var e=`import { Link } from 'react-router-dom';\r
import { Callout, Chart } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>About half of Kolkata's small businesses have no website. On 30 October 2026 we took 901 businesses listed on Google Maps in Kolkata across 14 kinds of business, from restaurants and clinics to chartered accountants, and 471 of them (52%) listed no website at all. We then checked every website the rest listed. More than one link in ten was dead, only 30% of the working sites carry the structured data that tells Google they are a local business, and the median mobile PageSpeed score was 61 out of 100.</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>52% of the 901 Kolkata businesses we looked at list no website on Google Maps. Clinics (89%), boutiques (73%) and schools (71%) are the least likely to have one; chartered accountants and real estate agents (21%) the most likely.</li>\r
                    <li>40 of the 379 website links (11%) were dead: 27 domains no longer exist, 7 had broken security certificates and 5 led to a missing page.</li>\r
                    <li>Of the 316 working websites, 91% use HTTPS and 95% are set up for phones, but 32% have no meta description and 32% no main heading.</li>\r
                    <li>Only 30% mark themselves up as a local business for Google, the structured data that helps Search show an address, hours and phone number.</li>\r
                    <li>The median mobile PageSpeed score was 61. Only 13% scored 90 or more, and only 26% of the sites Google has real-visitor data for pass Core Web Vitals.</li>\r
                </ul>\r
            </Callout>\r
\r
            <h2 id="how-many-have-a-website">How many Kolkata businesses have a website?</h2>\r
            <p>Just under half. Of the 901 businesses in our sample, 430 list a website on their Google Maps profile and 471 list none. The difference between kinds of business is large. Professional firms almost all have a site: only 15 of 70 chartered accountants and 15 of 70 real estate agents list none. Places people walk into are the opposite: 50 of 56 clinics, 51 of 70 boutiques, 50 of 70 schools and 47 of 70 restaurants list no website.</p>\r
            <Chart\r
                type="bar"\r
                title="Kolkata businesses on Google Maps with no website listed, by kind of business"\r
                unit="%"\r
                data={[\r
                    ['Clinics', 89],\r
                    ['Boutiques', 73],\r
                    ['Schools', 71],\r
                    ['Restaurants', 67],\r
                    ['Cafes', 66],\r
                    ['Gyms', 60],\r
                    ['Salons', 57],\r
                    ['Hotels', 57],\r
                    ['Retail shops', 54],\r
                    ['Dentists', 46],\r
                    ['Coaching centres', 34],\r
                    ['Interior designers', 23],\r
                    ['Real estate agents', 21],\r
                    ['Chartered accountants', 21],\r
                ]}\r
                source="N&D Co. survey of Google Maps listings in Kolkata, 30 October 2026"\r
                note="Up to 70 open businesses per kind of business, 901 in all (56 clinics, 52 dentists and 23 hotels were all the searches returned). A business counts as having no website when its Google Maps profile lists none."\r
            />\r
            <p>Many of these businesses rely on their Google Business Profile, Instagram or a food delivery app instead. That works for being found, but the profile belongs to the platform. A website is the one place online the business controls, and it is what a <Link to="/blogs/google-business-profile-guide">Google Business Profile</Link> links to when a customer wants more than the address.</p>\r
\r
            <h2 id="dead-links">How many of the listed websites actually work?</h2>\r
            <p>Most, but not all. Several businesses can share one site (a chain of schools, for example), so the 430 listed websites came to 379 different addresses. Of those:</p>\r
            <div className="blog-table" role="region" aria-label="What the website links on Kolkata Google Maps listings led to" tabIndex={0}>\r
                <table>\r
                    <caption>Where the 379 website links on Kolkata Google Maps listings led, 30 October 2026</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Result</th>\r
                            <th scope="col">Links</th>\r
                            <th scope="col">Share</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">A working website</th><td>316</td><td>83%</td></tr>\r
                        <tr><th scope="row">A working site that blocked our automated check</th><td>10</td><td>3%</td></tr>\r
                        <tr><th scope="row">A page on another platform (Instagram, Zomato, a health or property portal)</th><td>13</td><td>3%</td></tr>\r
                        <tr><th scope="row">Dead: the domain no longer exists</th><td>27</td><td>7%</td></tr>\r
                        <tr><th scope="row">Dead: broken security certificate</th><td>7</td><td>2%</td></tr>\r
                        <tr><th scope="row">Dead: page not found or other error</th><td>6</td><td>2%</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>A dead link on a Maps profile is worse than no link. A customer who taps it sees an error page with the business's name on the profile above it. When a domain lapses, the fix takes minutes: edit the website field in the Business Profile, or renew the domain if the site is still wanted.</p>\r
\r
            <h2 id="basics">Do Kolkata business websites get the basics right?</h2>\r
            <p>Mostly on security and phones, less on what search engines read first. Of the 316 working sites, 91% load over HTTPS and 79% send visitors from the old http:// address to the secure one. 95% set a mobile viewport, so they are built to fit a phone screen. The gaps are in the page's own text: 32% have no meta description, the summary Google may show under the title in results (<a href="https://developers.google.com/search/docs/appearance/snippet" target="_blank" rel="noopener noreferrer">Google's guide to snippets</a>), and 32% have no main heading (H1).</p>\r
            <Chart\r
                type="bar"\r
                title="Kolkata business websites missing each basic, homepage only"\r
                unit="%"\r
                data={[\r
                    ['No local business structured data', 70],\r
                    ['No meta description', 32],\r
                    ['No main heading (H1)', 32],\r
                    ['No HTTPS', 9],\r
                    ['Not set up for phones (no viewport)', 5],\r
                ]}\r
                source="N&D Co. check of 316 working Kolkata business websites, 30 October 2026"\r
                note="Homepage only. HTTPS counts the page the homepage address ends up on; a mobile viewport is the viewport meta tag that fits the page to a phone screen."\r
            />\r
            <p>The biggest gap is structured data. Only 30% of the sites mark themselves up as a local business, and 55% carry any structured data at all. Local business markup is how a site tells Google its name, address, opening hours and phone number in a form Search can read without guessing (<a href="https://developers.google.com/search/docs/appearance/structured-data/local-business" target="_blank" rel="noopener noreferrer">Google's local business documentation</a>). Seven sites had a <code>noindex</code> tag on their homepage, which asks search engines to leave the page out of results (<a href="https://developers.google.com/search/docs/crawling-indexing/block-indexing" target="_blank" rel="noopener noreferrer">Google on noindex</a>). On a business homepage it is usually a leftover from the build.</p>\r
            <p>Our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> covers each of these, and <Link to="/tools/rankguru">RankGuru</Link>, our free checker, tests a page for them in your browser.</p>\r
\r
            <h2 id="speed">How fast are Kolkata business websites on phones?</h2>\r
            <p>Slower than they should be. PageSpeed Insights scored 301 of the working sites on its mobile test. The median score was 61. Google's own bands call 90 to 100 good, 50 to 89 needs improvement and 0 to 49 poor (<a href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring" target="_blank" rel="noopener noreferrer">Lighthouse performance scoring</a>):</p>\r
            <Chart\r
                type="column"\r
                title="Mobile PageSpeed scores of Kolkata business websites"\r
                unit="%"\r
                data={[\r
                    ['Poor (0 to 49)', 24],\r
                    ['Needs improvement (50 to 89)', 63],\r
                    ['Good (90 to 100)', 13],\r
                ]}\r
                source="PageSpeed Insights mobile tests run by N&D Co., 30 October 2026"\r
                note="301 websites. The score is a lab test on a simulated mid-range phone and varies a few points from run to run."\r
            />\r
            <p>The lab score is a simulation. What Google measures for its page experience signals is how fast the site is for real visitors in Chrome, the Core Web Vitals (<a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">web.dev on Core Web Vitals</a>). Google only has that data for sites with enough traffic: 94 of ours. Of those, 26% pass all three measures. Our <Link to="/blogs/core-web-vitals-explained">Core Web Vitals guide</Link> explains each one and what usually fixes it.</p>\r
\r
            <h2 id="by-kind-of-business">Which kinds of business have the strongest websites?</h2>\r
            <p>Four kinds of business gave us more than 40 working websites each, enough to compare:</p>\r
            <div className="blog-table" role="region" aria-label="Website basics by kind of business in Kolkata" tabIndex={0}>\r
                <table>\r
                    <caption>Website basics for the four kinds of business with more than 40 working sites</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Kind of business</th>\r
                            <th scope="col">Sites</th>\r
                            <th scope="col">Meta description</th>\r
                            <th scope="col">Main heading</th>\r
                            <th scope="col">Local business markup</th>\r
                            <th scope="col">Median mobile score</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">Interior designers</th><td>48</td><td>73%</td><td>69%</td><td>38%</td><td>62</td></tr>\r
                        <tr><th scope="row">Chartered accountants</th><td>46</td><td>48%</td><td>43%</td><td>9%</td><td>63</td></tr>\r
                        <tr><th scope="row">Real estate agents</th><td>45</td><td>62%</td><td>84%</td><td>31%</td><td>60</td></tr>\r
                        <tr><th scope="row">Coaching centres</th><td>42</td><td>79%</td><td>79%</td><td>40%</td><td>55</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Chartered accountants are the kind of business most likely to have a website and the least likely to have a complete one: fewer than half have a meta description or a main heading, and only 9% use local business markup. Coaching centres are the reverse: they have the most meta descriptions and local business markup of the four, but the slowest sites. The other ten kinds of business had too few working websites (3 to 19 each) to compare fairly, so they are part of the city-wide figures above.</p>\r
\r
            <h2 id="what-to-fix">What should a Kolkata business fix first?</h2>\r
            <p>In order of effort against effect:</p>\r
            <ol>\r
                <li>Check the website link on your Google Business Profile. If it is dead or points to a page you no longer use, change it today.</li>\r
                <li>Renew the domain and the security certificate before they lapse. Many hosts can renew both automatically.</li>\r
                <li>Give the homepage a meta description and one clear H1 that say what you do and where.</li>\r
                <li>Add local business structured data with the same name, address and phone number as your Business Profile.</li>\r
                <li>Remove any <code>noindex</code> tag from pages you want found, then test the homepage on PageSpeed Insights and fix the largest problems it lists.</li>\r
            </ol>\r
            <p>If you have no website yet, our guide to <Link to="/blogs/website-cost-india">what a website costs in India</Link> covers the build and the yearly costs, and our <Link to="/blogs/local-seo-audit">local SEO audit checklist</Link> covers the rest of being found nearby. For a full check of your own site, our <Link to="/blogs/free-seo-audit-how-it-works">free SEO audit</Link> reads it the way this study did, and more. Restaurants and cafes, the kinds of business least likely to have a site, have their own page on <Link to="/restaurant-marketing">restaurant marketing</Link>.</p>\r
\r
            <h2 id="method">How we collected the data</h2>\r
            <p>On 30 October 2026 we collected public Google Maps listings with a third-party data service for 14 searches in Kolkata: restaurants, cafes, clinics, dentists, hotels, schools, coaching centres, gyms, salons, retail shops, boutiques, real estate agents, interior designers and chartered accountants. We took up to 70 open businesses per search, 901 in all, and kept only each listing's kind of business and its website field; no names, phone numbers, addresses or reviews were kept, and the raw listings were deleted the same day.</p>\r
            <p>We then fetched each website's homepage with our own checker, recorded whether it used HTTPS, a mobile viewport, a title, a meta description, a main heading, structured data and a <code>noindex</code> tag, and ran Google's PageSpeed Insights mobile test on it through Google's API (<a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer">about PageSpeed Insights</a>). Core Web Vitals come from the same API, which reports Google's real-visitor data where it has enough. Three sites picked at random were checked again with a separate fetch, and the results matched. We left pages on other platforms out of the website figures and counted sites that refused automated visits as working but unchecked.</p>\r
            <p>The limits: Google Maps lists the more prominent businesses first, so very small businesses are under-counted, and so are businesses that are not on Maps at all. The sample is a snapshot of one day, the lab speed score varies a few points between runs, and we checked homepages only. Kinds of business with few working websites are reported only in the city-wide figures. We name no business: the point is the city, not any one owner.</p>\r
\r
            <h2 id="download">Download the data</h2>\r
            <p>The figures for the whole sample and for each kind of business are in <a href="/assets/data/kolkata-websites-2026.csv" download>a CSV file (kolkata-websites-2026.csv)</a>, with no business names or addresses. If you use them, please link to this page as the source. For comparison, our survey of <Link to="/blogs/agency-prices-india">what Indian agencies charge</Link> shows what fixing these gaps usually costs.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};