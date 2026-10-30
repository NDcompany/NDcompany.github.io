var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>Most Indian digital agencies do not publish their prices. On 29 October 2026 we checked the websites of 108 agencies that Google showed for "website design company" and "SEO company" searches in eight cities, and only 35 of the 101 whose sites we could read (35%) showed any price at all. Among those that did, the cheapest website package had a median starting price of ₹15,000, monthly SEO also started at a median of ₹15,000 a month, and an online store started at about ₹50,000. Only 6 of the 35 said whether GST was added.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>35 of 101 agency websites we could read (35%) showed a price for any service. The rest ask you to call, fill in a form or book a meeting.</li>
                    <li>Website builds: 13 agencies, 34 packages. The cheapest package per agency ranged from ₹3,300 to ₹80,000, with a median of ₹15,000.</li>
                    <li>Monthly SEO: 15 agencies, 37 packages. Starting prices ran from ₹5,000 to ₹40,000 a month, median ₹15,000; the median of all packages was ₹25,000 a month.</li>
                    <li>Logo and brand identity prices were almost never shown: one agency listed a logo price in rupees, none listed a brand identity package in rupees.</li>
                    <li>29 of the 35 agencies that publish prices say nothing about GST. On web design and development it adds 18%, so ask whether a quote includes it.</li>
                </ul>
            </Callout>

            <h2 id="how-many-publish">How many Indian agencies publish their prices?</h2>
            <p>About one in three. Of the 108 agencies in our sample, 7 had websites we could not read: domains that no longer worked, sites that blocked our requests, or pages that showed nothing without JavaScript. Of the other 101, 35 showed a price for at least one service, as a fixed price, a "from" price or a range. 30 of them showed at least one price in rupees, and 5 showed prices only in US dollars, written for clients abroad.</p>
            <p>The share was similar in every city, between about a quarter and a half of the agencies each search turned up. Ten agencies appeared in more than one city's results, so the city counts below add up to more than 108.</p>
            <Chart
                type="bar"
                title="Agencies that show any price on their website, by city searched"
                unit="%"
                data={[
                    ['Hyderabad', 43],
                    ['Chennai', 40],
                    ['Bengaluru', 38],
                    ['Delhi', 36],
                    ['Ahmedabad', 33],
                    ['Mumbai', 33],
                    ['Kolkata', 27],
                    ['Pune', 27],
                ]}
                source="N&D Co. survey of agency websites, 29 October 2026"
                note="Agencies found by the searches 'website design company in [city]' and 'SEO company in [city]', up to 16 per city, counted when we could read their website. A price is any fixed price, starting price or range shown for the agency's own package."
            />
            <div className="blog-table" role="region" aria-label="Agencies that publish prices, by city" tabIndex={0}>
                <table>
                    <caption>Agencies that publish prices, by city searched, 29 October 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">City searched</th>
                            <th scope="col">Agencies we could read</th>
                            <th scope="col">Show any price</th>
                            <th scope="col">Share</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Hyderabad</th><td>14</td><td>6</td><td>43%</td></tr>
                        <tr><th scope="row">Chennai</th><td>15</td><td>6</td><td>40%</td></tr>
                        <tr><th scope="row">Bengaluru</th><td>13</td><td>5</td><td>38%</td></tr>
                        <tr><th scope="row">Delhi</th><td>14</td><td>5</td><td>36%</td></tr>
                        <tr><th scope="row">Ahmedabad</th><td>15</td><td>5</td><td>33%</td></tr>
                        <tr><th scope="row">Mumbai</th><td>15</td><td>5</td><td>33%</td></tr>
                        <tr><th scope="row">Kolkata</th><td>15</td><td>4</td><td>27%</td></tr>
                        <tr><th scope="row">Pune</th><td>15</td><td>4</td><td>27%</td></tr>
                        <tr><th scope="row">All cities, each agency counted once</th><td>101</td><td>35</td><td>35%</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Even the agencies that publish prices rarely give a fixed figure for everything. Of the 111 rupee prices we recorded, 69 were fixed, 34 were "starting from" figures and 8 were ranges. A "from" price tells you the floor, not what your project will cost.</p>

            <h2 id="website-cost">What does an Indian agency charge for a website?</h2>
            <p>Thirteen agencies showed rupee prices for building a website, 34 packages in all. Each agency's cheapest package started between ₹3,300 and ₹80,000, and the median starting price was ₹15,000. Across all 34 packages the median was ₹25,000, half of them fell between ₹14,999 and about ₹57,500, and the most expensive was ₹1,50,000.</p>
            <div className="blog-table" role="region" aria-label="Published website build prices from Indian agencies" tabIndex={0}>
                <table>
                    <caption>Published website build prices, 13 agencies, checked 29 and 30 October 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Measure</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Lowest starting price</th><td>₹3,300</td></tr>
                        <tr><th scope="row">Median starting price</th><td>₹15,000</td></tr>
                        <tr><th scope="row">Highest starting price</th><td>₹80,000</td></tr>
                        <tr><th scope="row">Median of all 34 packages</th><td>₹25,000</td></tr>
                        <tr><th scope="row">Middle half of all packages</th><td>₹14,999 to ₹57,499</td></tr>
                        <tr><th scope="row">Highest package</th><td>₹1,50,000</td></tr>
                    </tbody>
                </table>
            </div>
            <p>The cheapest packages are usually priced by page count: up to 5, 6 or 10 pages, a contact form and WhatsApp or Google Maps links. Four of the 13 agencies included a domain, and in most cases hosting, in a website package, usually for the first year. That makes the package look cheaper than it is, because <Link to="/blogs/website-cost-india">domain and hosting renewals</Link> start in year two. Only 2 of the 13 agencies said their website price was one-time; the rest did not say.</p>
            <p>A quote is only comparable with another if both price the same job, so <Link to="/blogs/plan-a-business-website">plan the site and write a short brief</Link> before you ask. What a site involves, page by page, is on our <Link to="/services/website-design-development">website design and development</Link> page.</p>

            <h2 id="online-store-cost">What does an online store cost?</h2>
            <p>Eight agencies published a rupee price for an e-commerce site, 10 packages in all. Their starting prices ran from ₹20,000 to ₹2,67,750, with a median of about ₹50,000. The packages that list their contents include a product catalogue, cart, payment gateway and order management; several also bundle a few months of maintenance. What goes into a store build is on our <Link to="/services/ecommerce-solutions">e-commerce development</Link> page. Store platform fees and payment gateway charges come on top of any build price.</p>

            <h2 id="seo-cost">How much does SEO cost per month in India?</h2>
            <p>SEO is the service agencies price most openly. Fifteen agencies published monthly SEO prices in rupees, 37 packages in all. The cheapest package per agency ran from ₹5,000 to ₹40,000 a month, with a median of ₹15,000. Across all 37 packages the median was ₹25,000 a month, half of them fell between ₹15,000 and ₹45,000, and the top package was ₹2,00,000 a month.</p>
            <Chart
                type="bar"
                title="Median starting price by service, in rupees"
                data={[
                    ['Online store build (8 agencies)', 50000],
                    ['Website build (13 agencies)', 15000],
                    ['SEO, per month (15 agencies)', 15000],
                    ['Social media, per month (3 agencies)', 15000],
                    ['Ads management, per month (5 agencies)', 12000],
                ]}
                source="N&D Co. survey of agency websites, 29 October 2026"
                note="Starting price is each agency's cheapest published package for that service, in rupees, as shown on its own website. Ad spend is not included in ads management fees. Social media and ads figures rest on three and five agencies."
            />
            <p>Packages that list their contents are mostly sized by the number of target keywords, for example 5, 10, 15 or 20 a month. Five of the 16 agencies that priced SEO in rupees set a minimum term of three or six months, and seven mentioned optimising for AI search (GEO or AEO) in their packages. A cheaper package usually means fewer keywords, less content and less link building, not the same work for less. A <Link to="/blogs/free-seo-audit-how-it-works">free SEO audit</Link> shows what a site needs before you pay for anything, and our <Link to="/services/seo-services">SEO services</Link> page lists what each month of work covers. Our guide to <Link to="/blogs/seo-cost-india">SEO costs in India</Link> goes through what a monthly fee buys, which quotes to doubt and how to compare them.</p>

            <h2 id="social-and-ads-cost">What do social media and ads management cost?</h2>
            <p>Few agencies publish these prices. Three agencies showed rupee prices for social media management: two started at ₹15,000 a month and one at ₹25,000, and the top package was ₹40,000 a month. The packages list how many posts or images a month go on which platforms, and how often you get a report.</p>
            <p>Five agencies showed a fee for managing Google or Meta ads. Their starting fees ran from ₹6,000 to ₹25,000, median ₹12,000, and three of the five said the ad budget is paid separately. Several did not say whether the fee is monthly. When you compare ads quotes, separate the management fee from the money spent on ads. Our <Link to="/services/social-media-management">social media management</Link> and <Link to="/services/digital-marketing">digital marketing</Link> pages show what a monthly package covers.</p>

            <h2 id="logo-and-branding-cost">Why are logo and branding prices so rarely published?</h2>
            <p>Only one of the 101 agencies listed a logo price in rupees (two packages, ₹15,000 and ₹33,000), and none listed a brand identity package in rupees; one listed brand identity in US dollars. Agencies that rank for website and SEO searches mostly sell branding as a quote-only extra. That leaves owners with no reference point, and the scope varies more than in any other service: a logo alone is a different job from a brand identity with colours, fonts and rules for using them, which we explain in <Link to="/blogs/logo-vs-brand-identity">logo vs brand identity</Link>. The deliverables of each are on our <Link to="/services/logo-design">logo design</Link> and <Link to="/services/brand-identity-design">brand identity design</Link> pages.</p>

            <h2 id="gst">Do agency prices include GST?</h2>
            <p>Usually you cannot tell. Of the 35 agencies that published prices, 6 said GST is added on top, none said their prices include it, and 29 said nothing. Web design and development is "information technology design and development services", service code 998314 (<a href="https://cbic-gst.gov.in/hindi/pdf/central-tax-rate/Notification11-CGST-Annexure.pdf" target="_blank" rel="noopener noreferrer">CBIC's scheme of classification of services</a>), taxed at 18% in all (<a href="https://www.gstcouncil.gov.in/sites/default/files/2024-02/11-rate_notification-cgst-01.04.2019.pdf" target="_blank" rel="noopener noreferrer">Notification 11/2017-Central Tax (Rate)</a>). So a ₹15,000 website from a GST-registered agency costs ₹17,700. Ask every agency to state the GST in its written quote. N&amp;D Co. is not registered for GST at present, so our prices are the amount you pay, as our <Link to="/terms">terms of service</Link> say.</p>

            <h2 id="compare-quotes">How to compare agency quotes</h2>
            <p>Two quotes with the same price can cover very different work. Before you compare them, check that each one answers these questions in writing:</p>
            <ol>
                <li>Is the price fixed, a "from" price or an estimate?</li>
                <li>Is it one-time, monthly or yearly, and is there a minimum term?</li>
                <li>Is GST included or added?</li>
                <li>What exactly is included: pages, products, posts a month, keywords, revisions, delivery time?</li>
                <li>What renews, and at what price: domain, hosting, email, store platform, maintenance?</li>
                <li>For ads, how much of the monthly figure is the agency's fee and how much is ad spend?</li>
            </ol>
            <p>If you are hiring from outside India, our guide to <Link to="/blogs/outsource-web-development-india">outsourcing web development to India</Link> covers payments, hours and contracts. Agencies that resell work under their own name can see our <Link to="/white-label">white-label prices</Link>.</p>

            <h2 id="our-prices">Where our prices sit</h2>
            <p>We are an agency too, so here are our own published starting prices against the medians above: a website from ₹9,999, an online store from ₹14,999, SEO from ₹7,999 a month, social media management from ₹4,999 a month, ads management from ₹5,999 a month with ad spend separate, a logo from ₹2,999 and a brand identity from ₹9,999. Each is set in a written quote before work starts, and every tier is on our <Link to="/pricing">pricing page</Link>.</p>

            <h2 id="method">How we collected the data</h2>
            <p>On 29 October 2026 we ran two web searches for each of eight cities, "website design company in [city]" and "SEO company in [city]", for Ahmedabad, Bengaluru, Chennai, Delhi, Hyderabad, Kolkata, Mumbai and Pune. From each search we took the first eight results that were a single agency's own website, in the order shown, and skipped directories, "top 10" lists, marketplaces and freelancer profiles. When a search had too few usable results, we ran the same search again in a fuller search mode rather than adding new searches. That gave 125 results and 108 different agencies, 7 of whose websites we could not read.</p>
            <p>For each agency we read its own website only: the pricing or packages page, the service pages and the FAQ. We copied every price exactly as shown and recorded whether it was fixed, "from" or a range, its billing period and any GST wording. We left out general market estimates that an agency quotes in an FAQ, because they are not its own price. On 30 October a second researcher opened every rupee price again: 115 were confirmed, 9 were corrected (mostly the billing period or the service), and 2 turned out to be market estimates and were removed, along with one price table that may show market rates rather than the agency's own prices. A "starting price" in this post is an agency's cheapest published package for a service, and the medians are across agencies.</p>
            <p>The limits: search results change by day and by person, so a repeat search will find a somewhat different set of agencies. These are agencies that rank for those searches, not every agency in India, and small studios and freelancers who do not rank are missing. Some services rest on few agencies (three for social media, five for ads), so treat those figures as indicative. We name no agency, because the point is the market, not any one business.</p>

            <h2 id="download">Download the data</h2>
            <p>The full dataset, one row per published price with the city searched, service, billing period, price basis, amount and GST wording, is <a href="/assets/data/agency-prices-india-2026.csv" download>a CSV file (agency-prices-india-2026.csv)</a>. Agencies are numbered, not named. If you use the figures, please link to this page as the source.</p>
        </>
    );
}
`;export{e as default};