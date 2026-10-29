var e=`import { Link } from 'react-router-dom';\r
import { Callout, Chart } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>Most Indian digital agencies do not publish their prices. On 29 October 2026 we checked the websites of 108 agencies that Google showed for "website design company" and "SEO company" searches in eight cities, and only 37 of the 101 whose sites we could read (37%) showed any price at all. Among those that did, the cheapest website package had a median starting price of ₹15,000, monthly SEO also started at a median of ₹15,000 a month, and an online store started at about ₹50,000. Only 6 of the 37 said whether GST was added.</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>37 of 101 agency websites we could read (37%) showed a price for any service. The rest ask you to call, fill in a form or book a meeting.</li>\r
                    <li>Website builds: 13 agencies, 42 packages. The cheapest package per agency ranged from ₹3,300 to ₹80,000, with a median of ₹15,000.</li>\r
                    <li>Monthly SEO: 15 agencies, 41 packages. Starting prices ran from ₹5,000 to ₹40,000 a month, median ₹15,000; the median of all packages was ₹25,000 a month.</li>\r
                    <li>Logo and brand identity prices were almost never shown: one agency listed a logo price in rupees, none listed a brand identity package in rupees.</li>\r
                    <li>31 of the 37 agencies that publish prices say nothing about GST. On web design and development it adds 18%, so ask whether a quote includes it.</li>\r
                </ul>\r
            </Callout>\r
\r
            <h2 id="how-many-publish">How many Indian agencies publish their prices?</h2>\r
            <p>About one in three. Of the 108 agencies in our sample, 7 had websites we could not read: domains that no longer worked, sites that blocked our requests, or pages that showed nothing without JavaScript. Of the other 101, 37 showed a price for at least one service, as a fixed price, a "from" price or a range. 32 of them showed at least one price in rupees, and 5 showed prices only in US dollars, written for clients abroad.</p>\r
            <p>The share was similar in every city, between about a quarter and a half of the agencies each search turned up. Ten agencies appeared in more than one city's results, so the city counts below add up to more than 108.</p>\r
            <Chart\r
                type="bar"\r
                title="Agencies that show any price on their website, by city searched"\r
                unit="%"\r
                data={[\r
                    ['Hyderabad', 50],\r
                    ['Chennai', 40],\r
                    ['Mumbai', 40],\r
                    ['Bengaluru', 38],\r
                    ['Delhi', 36],\r
                    ['Ahmedabad', 33],\r
                    ['Kolkata', 27],\r
                    ['Pune', 27],\r
                ]}\r
                source="N&D Co. survey of agency websites, 29 October 2026"\r
                note="Agencies found by the searches 'website design company in [city]' and 'SEO company in [city]', up to 16 per city, counted when we could read their website. A price is any fixed price, starting price or range shown for the agency's own package."\r
            />\r
            <div className="blog-table" role="region" aria-label="Agencies that publish prices, by city" tabIndex={0}>\r
                <table>\r
                    <caption>Agencies that publish prices, by city searched, 29 October 2026</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">City searched</th>\r
                            <th scope="col">Agencies we could read</th>\r
                            <th scope="col">Show any price</th>\r
                            <th scope="col">Share</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">Hyderabad</th><td>14</td><td>7</td><td>50%</td></tr>\r
                        <tr><th scope="row">Chennai</th><td>15</td><td>6</td><td>40%</td></tr>\r
                        <tr><th scope="row">Mumbai</th><td>15</td><td>6</td><td>40%</td></tr>\r
                        <tr><th scope="row">Bengaluru</th><td>13</td><td>5</td><td>38%</td></tr>\r
                        <tr><th scope="row">Delhi</th><td>14</td><td>5</td><td>36%</td></tr>\r
                        <tr><th scope="row">Ahmedabad</th><td>15</td><td>5</td><td>33%</td></tr>\r
                        <tr><th scope="row">Kolkata</th><td>15</td><td>4</td><td>27%</td></tr>\r
                        <tr><th scope="row">Pune</th><td>15</td><td>4</td><td>27%</td></tr>\r
                        <tr><th scope="row">All cities, each agency counted once</th><td>101</td><td>37</td><td>37%</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Even the agencies that publish prices rarely give a fixed figure for everything. Of the 126 rupee prices we recorded, 77 were fixed, 36 were "starting from" figures and 13 were ranges. A "from" price tells you the floor, not what your project will cost.</p>\r
\r
            <h2 id="website-cost">What does an Indian agency charge for a website?</h2>\r
            <p>Thirteen agencies showed rupee prices for building a website, 42 packages in all. Each agency's cheapest package started between ₹3,300 and ₹80,000, and the median starting price was ₹15,000. Across all 42 packages the median was about ₹28,500, half of them fell between ₹14,999 and ₹65,000, and the most expensive was ₹1,50,000.</p>\r
            <div className="blog-table" role="region" aria-label="Published website build prices from Indian agencies" tabIndex={0}>\r
                <table>\r
                    <caption>Published website build prices, 13 agencies, 29 October 2026</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Measure</th>\r
                            <th scope="col">Price</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">Lowest starting price</th><td>₹3,300</td></tr>\r
                        <tr><th scope="row">Median starting price</th><td>₹15,000</td></tr>\r
                        <tr><th scope="row">Highest starting price</th><td>₹80,000</td></tr>\r
                        <tr><th scope="row">Median of all 42 packages</th><td>₹28,500</td></tr>\r
                        <tr><th scope="row">Middle half of all packages</th><td>₹14,999 to ₹65,000</td></tr>\r
                        <tr><th scope="row">Highest package</th><td>₹1,50,000</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>The cheapest packages are usually priced by page count: up to 5, 6 or 10 pages, a contact form and WhatsApp or Google Maps links. Six of the 13 agencies included a domain and hosting in their website packages, usually for the first year. That makes the package look cheaper than it is, because <Link to="/blogs/website-cost-india">domain and hosting renewals</Link> start in year two. Only 4 of the 13 agencies said their website price was one-time; the rest did not say.</p>\r
            <p>A quote is only comparable with another if both price the same job, so <Link to="/blogs/plan-a-business-website">plan the site and write a short brief</Link> before you ask. Our own <Link to="/services/website-design-development">website design and development</Link> starts at ₹9,999.</p>\r
\r
            <h2 id="online-store-cost">What does an online store cost?</h2>\r
            <p>Eight agencies published a rupee price for an e-commerce site, 11 packages in all. Their starting prices ran from ₹20,000 to ₹2,67,750, with a median of about ₹50,000. The packages that list their contents include a product catalogue, cart, payment gateway and order management; several also bundle a few months of maintenance. Our <Link to="/services/ecommerce-solutions">e-commerce development</Link> starts at ₹14,999 for a Shopify or WooCommerce store. Store platform fees and payment gateway charges come on top of any build price.</p>\r
\r
            <h2 id="seo-cost">How much does SEO cost per month in India?</h2>\r
            <p>SEO is the service agencies price most openly. Fifteen agencies published monthly SEO prices in rupees, 41 packages in all. The cheapest package per agency ran from ₹5,000 to ₹40,000 a month, with a median of ₹15,000. Across all 41 packages the median was ₹25,000 a month, half of them fell between ₹15,000 and ₹45,000, and the top package was ₹2,00,000 a month.</p>\r
            <Chart\r
                type="bar"\r
                title="Median starting price by service, in rupees"\r
                data={[\r
                    ['Online store build (8 agencies)', 50000],\r
                    ['Website build (13 agencies)', 15000],\r
                    ['SEO, per month (15 agencies)', 15000],\r
                    ['Social media, per month (3 agencies)', 15000],\r
                    ['Ads management, per month (5 agencies)', 12000],\r
                ]}\r
                source="N&D Co. survey of agency websites, 29 October 2026"\r
                note="Starting price is each agency's cheapest published package for that service, in rupees, as shown on its own website. Ad spend is not included in ads management fees. Social media and ads figures rest on three and five agencies."\r
            />\r
            <p>Packages that list their contents are mostly sized by the number of target keywords, for example 5, 10, 15 or 20 a month. Five of the 18 agencies that priced SEO in rupees set a minimum term of three or six months, and seven mentioned optimising for AI search (GEO or AEO) in their packages. A cheaper package usually means fewer keywords, less content and less link building, not the same work for less. Our <Link to="/services/seo-services">SEO services</Link> start at ₹7,999 a month, and our <Link to="/blogs/free-seo-audit-how-it-works">free SEO audit</Link> shows what a site needs before you pay for anything.</p>\r
\r
            <h2 id="social-and-ads-cost">What do social media and ads management cost?</h2>\r
            <p>Few agencies publish these prices. Three agencies showed rupee prices for social media management: two started at ₹15,000 a month and one at ₹25,000, and the top package was ₹40,000 a month. The packages list how many posts or images a month go on which platforms, and how often you get a report.</p>\r
            <p>Five agencies showed a fee for managing Google or Meta ads. Their starting fees ran from ₹6,000 to ₹25,000, median ₹12,000, and three of the five said the ad budget is paid separately. Several did not say whether the fee is monthly. When you compare ads quotes, separate the management fee from the money spent on ads. Our <Link to="/services/social-media-management">social media management</Link> starts at ₹4,999 a month and <Link to="/services/digital-marketing">digital marketing</Link> at ₹5,999 a month, ad spend separate.</p>\r
\r
            <h2 id="logo-and-branding-cost">Why are logo and branding prices so rarely published?</h2>\r
            <p>Only one of the 101 agencies listed a logo price in rupees (two packages, ₹15,000 and ₹33,000), and none listed a brand identity package in rupees; one listed brand identity in US dollars. Agencies that rank for website and SEO searches mostly sell branding as a quote-only extra. That leaves owners with no reference point, and the scope varies more than in any other service: a logo alone is a different job from a brand identity with colours, fonts and rules for using them, which we explain in <Link to="/blogs/logo-vs-brand-identity">logo vs brand identity</Link>. Our <Link to="/services/logo-design">logo design</Link> starts at ₹2,999 and our <Link to="/services/brand-identity-design">brand identity design</Link> at ₹9,999.</p>\r
\r
            <h2 id="gst">Do agency prices include GST?</h2>\r
            <p>Usually you cannot tell. Of the 37 agencies that published prices, 6 said GST is added on top, none said their prices include it, and 31 said nothing. Web design and development is "information technology design and development services", service code 998314 (<a href="https://cbic-gst.gov.in/hindi/pdf/central-tax-rate/Notification11-CGST-Annexure.pdf" target="_blank" rel="noopener noreferrer">CBIC's scheme of classification of services</a>), taxed at 18% in all (<a href="https://www.gstcouncil.gov.in/sites/default/files/2024-02/11-rate_notification-cgst-01.04.2019.pdf" target="_blank" rel="noopener noreferrer">Notification 11/2017-Central Tax (Rate)</a>). So a ₹15,000 website from a GST-registered agency costs ₹17,700. Ask every agency to state the GST in its written quote. N&amp;D Co. is not registered for GST at present, so our prices are the amount you pay, as our <Link to="/terms">terms of service</Link> say.</p>\r
\r
            <h2 id="compare-quotes">How to compare agency quotes</h2>\r
            <p>Two quotes with the same price can cover very different work. Before you compare them, check that each one answers these questions in writing:</p>\r
            <ol>\r
                <li>Is the price fixed, a "from" price or an estimate?</li>\r
                <li>Is it one-time, monthly or yearly, and is there a minimum term?</li>\r
                <li>Is GST included or added?</li>\r
                <li>What exactly is included: pages, products, posts a month, keywords, revisions, delivery time?</li>\r
                <li>What renews, and at what price: domain, hosting, email, store platform, maintenance?</li>\r
                <li>For ads, how much of the monthly figure is the agency's fee and how much is ad spend?</li>\r
            </ol>\r
            <p>If you are hiring from outside India, our guide to <Link to="/blogs/outsource-web-development-india">outsourcing web development to India</Link> covers payments, hours and contracts. Agencies that resell work under their own name can see our <Link to="/white-label">white-label prices</Link>, and every price we charge is on our <Link to="/pricing">pricing page</Link>.</p>\r
\r
            <h2 id="method">How we collected the data</h2>\r
            <p>On 29 October 2026 we ran two web searches for each of eight cities, "website design company in [city]" and "SEO company in [city]", for Ahmedabad, Bengaluru, Chennai, Delhi, Hyderabad, Kolkata, Mumbai and Pune. From each search we took the first eight results that were a single agency's own website, in the order shown, and skipped directories, "top 10" lists, marketplaces and freelancer profiles. When a search had too few usable results, we ran the same search again in a fuller search mode rather than adding new searches. That gave 125 results and 108 different agencies, 7 of whose websites we could not read.</p>\r
            <p>For each agency we read its own website only: the pricing or packages page, the service pages and the FAQ. We copied every price exactly as shown and recorded whether it was fixed, "from" or a range, its billing period and any GST wording. We left out general market estimates that an agency quotes in an FAQ, because they are not its own price. A "starting price" in this post is an agency's cheapest published package for a service, and the medians are across agencies.</p>\r
            <p>The limits: search results change by day and by person, so a repeat search will find a somewhat different set of agencies. These are agencies that rank for those searches, not every agency in India, and small studios and freelancers who do not rank are missing. Some services rest on few agencies (three for social media, five for ads), so treat those figures as indicative. We name no agency, because the point is the market, not any one business.</p>\r
\r
            <h2 id="download">Download the data</h2>\r
            <p>The full dataset, one row per published price with the city searched, service, billing period, price basis, amount and GST wording, is <a href="/assets/data/agency-prices-india-2026.csv" download>a CSV file (agency-prices-india-2026.csv)</a>. Agencies are numbered, not named. If you use the figures, please link to this page as the source.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};