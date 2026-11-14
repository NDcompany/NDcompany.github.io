var e=`import { Link } from 'react-router-dom';\r
import { Callout, Chart } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>The SEO price in India is usually a monthly charge: a retainer costs a median of ₹25,000 across published packages, and ₹15,000 at the cheapest tier of the agencies that publish prices. On 29 October 2026 we read the websites of 108 Indian agencies, and 15 of them showed monthly SEO prices in rupees, 37 packages in all. The cheapest package was ₹5,000 a month and the dearest ₹2,00,000, with the middle half between ₹15,000 and ₹45,000. Almost all of it is sold by the month: 37 of the 38 SEO prices we recorded were monthly. Our own SEO packages start at ₹7,999 a month.</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>Monthly SEO: 15 agencies, 37 packages. Each agency's cheapest package had a median of ₹15,000 a month; the median of all packages was ₹25,000, from our <Link to="/blogs/agency-prices-india">survey of agency prices</Link>.</li>\r
                    <li>We found no paid one-off SEO audit price and no hourly SEO rate on those websites. Some agencies offer a free audit first.</li>\r
                    <li>Price follows scope: the number of keywords, content pieces and links, and the kind of site. One agency charged ₹35,000, ₹45,000 and ₹65,000 for a small business, a mid-size business and an online store.</li>\r
                    <li>Google says "No one can guarantee a #1 ranking on Google" and counts bulk or bought links as spam.</li>\r
                    <li>GST of 18% is added by registered agencies. Only 2 of the 16 agencies with an SEO price said so on their site.</li>\r
                </ul>\r
            </Callout>\r
\r
            <h2 id="pricing-models">What ways are there to pay for SEO?</h2>\r
            <p>There are four models. Our survey found one of them in real use.</p>\r
            <div className="blog-table" role="region" aria-label="SEO pricing models and what we found on Indian agency websites" tabIndex={0}>\r
                <table>\r
                    <caption>SEO pricing models and what 108 Indian agency websites showed, 29 October 2026</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Model</th>\r
                            <th scope="col">What you pay for</th>\r
                            <th scope="col">What we found</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">Monthly retainer</th>\r
                            <td>Work every month: fixes, content, links and a report</td>\r
                            <td>37 of 38 SEO prices, from 15 agencies, ₹5,000 to ₹2,00,000 a month</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Yearly or project package</th>\r
                            <td>A set scope for a longer period</td>\r
                            <td>One agency sold yearly "online promotion" packages sized by keywords, ₹50,000 for 100 keywords up to ₹1,00,000 for 1,000, plus 18% GST. Another showed an SEO price of "starting at ₹10,000" with no billing period.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">One-off audit</th>\r
                            <td>A written review of what is wrong and what to fix</td>\r
                            <td>No paid audit price. Several agencies offer a free audit before you commit.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Hourly</th>\r
                            <td>Time, billed as used</td>\r
                            <td>No SEO price was hourly. The only hourly rates we saw were for other work, such as ₹1,200 an hour for extra social media time.</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Retainers dominate because SEO work pays off slowly. Google's SEO starter guide says "some changes might take effect in a few hours, others could take several months" (<a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">Google's SEO starter guide</a>). Work that never ends is sold by the month. If you want a price for a single audit or a few hours of advice, you will have to ask for a quote, because you will not find a benchmark on most agency sites. At N&amp;D Co. the audit is the first step of every monthly package, and our <Link to="/blogs/free-seo-audit-how-it-works">free SEO audit</Link> gives you a first look before you decide.</p>\r
\r
            <h2 id="monthly-cost">What are SEO charges per month in India?</h2>\r
            <p>Of the 101 agency websites we could read, 15 showed monthly SEO prices in rupees. Each agency's cheapest package ran from ₹5,000 to ₹40,000 a month, with a median of ₹15,000. Across all 37 packages the median was ₹25,000 a month. Fifteen were "from" prices, 15 were fixed figures and 7 were ranges, so a good share of the published numbers tell you the floor, not the quote.</p>\r
            <div className="blog-table" role="region" aria-label="Published monthly SEO prices from Indian agencies" tabIndex={0}>\r
                <table>\r
                    <caption>Published monthly SEO prices, 15 agencies, checked 29 and 30 October 2026</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Measure</th>\r
                            <th scope="col">Price a month</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">Lowest starting price</th><td>₹5,000</td></tr>\r
                        <tr><th scope="row">Median starting price</th><td>₹15,000</td></tr>\r
                        <tr><th scope="row">Highest starting price</th><td>₹40,000</td></tr>\r
                        <tr><th scope="row">Median of all 37 packages</th><td>₹25,000</td></tr>\r
                        <tr><th scope="row">Middle half of all packages</th><td>₹15,000 to ₹45,000</td></tr>\r
                        <tr><th scope="row">Highest package</th><td>₹2,00,000</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <Chart\r
                type="bar"\r
                title="Monthly SEO packages by price band, number of packages"\r
                data={[\r
                    ['Under ₹10,000', 2],\r
                    ['₹10,000 to ₹14,999', 3],\r
                    ['₹15,000 to ₹24,999', 12],\r
                    ['₹25,000 to ₹49,999', 11],\r
                    ['₹50,000 and above', 9],\r
                ]}\r
                source="N&D Co. survey of agency websites, 29 October 2026"\r
                note="37 monthly SEO packages from 15 agencies, in rupees as shown on each agency's website. A package with a range is placed by the low end of its range."\r
            />\r
            <p>Most packages sit between ₹15,000 and ₹50,000 a month: 23 of the 37. Only 5 cost under ₹15,000, and 9 started at ₹50,000 or more. That puts the "₹5,000 SEO package" of the adverts at the bottom edge of the market, not the middle. The method and the full dataset are in our <Link to="/blogs/agency-prices-india">agency prices post</Link>.</p>\r
\r
            <h2 id="what-it-covers">What does a monthly SEO fee cover?</h2>\r
            <p>Google lists what SEO providers do: review of your site's content or structure, technical advice on things such as hosting, redirects and JavaScript, content development, keyword research and expertise in specific markets (<a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">Google's "Do you need an SEO?" page</a>). A monthly fee usually pays for some mix of these:</p>\r
            <ul>\r
                <li>an audit in the first month and technical fixes after it,</li>\r
                <li>keyword research and a plan that maps keywords to pages,</li>\r
                <li>changes to titles, headings, internal links and schema on existing pages,</li>\r
                <li>new or rewritten content, often counted in blog posts a month,</li>\r
                <li>links, directory listings and a Google Business Profile for local businesses,</li>\r
                <li>a monthly report on rankings, traffic and the work done.</li>\r
            </ul>\r
            <p>The packages that list their contents are mostly sized by keywords, content and links. Here are two agencies' ladders as we read them on 2 and 3 October 2026, with the agencies left unnamed.</p>\r
            <div className="blog-table" role="region" aria-label="What monthly SEO packages list at different prices" tabIndex={0}>\r
                <table>\r
                    <caption>Contents of monthly SEO packages at two agencies, as listed on their websites</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Package</th>\r
                            <th scope="col">Price a month</th>\r
                            <th scope="col">Keywords</th>\r
                            <th scope="col">Content a month</th>\r
                            <th scope="col">Links a month</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">Agency A, entry</th><td>₹9,999</td><td>15</td><td>2 blogs of about 2,000 words</td><td>15 backlinks</td></tr>\r
                        <tr><th scope="row">Agency A, middle</th><td>₹19,999</td><td>30</td><td>4 blogs</td><td>30 backlinks</td></tr>\r
                        <tr><th scope="row">Agency A, top</th><td>₹34,999</td><td>60</td><td>8 blogs</td><td>60 backlinks</td></tr>\r
                        <tr><th scope="row">Agency B, small business</th><td>₹15,000</td><td>10 to 20</td><td>1 SEO blog</td><td>5 to 8 links</td></tr>\r
                        <tr><th scope="row">Agency B, midsize</th><td>₹25,000</td><td>20 to 40</td><td>2 to 3 SEO blogs</td><td>10 to 15 links</td></tr>\r
                        <tr><th scope="row">Agency B, e-commerce</th><td>₹40,000</td><td>50 or more</td><td>4 or more pieces</td><td>not listed</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>A cheaper package usually means fewer keywords, less content and fewer links, not the same work for less. Five of the 16 agencies that priced SEO in rupees set a minimum term of three or six months, and seven mentioned optimising for AI search (GEO or AEO) in their packages. We cover that in our guide to <Link to="/blogs/optimize-content-for-llms">optimizing content for LLMs</Link>.</p>\r
\r
            <h2 id="price-drivers">What makes one SEO quote higher than another?</h2>\r
            <ul>\r
                <li><strong>The kind of site.</strong> One agency's three tiers were ₹35,000 for a small business, ₹45,000 for a mid-size business and ₹65,000 for an online store. Another listed local SEO from ₹17,500, domestic SEO from ₹22,000 and e-commerce SEO from ₹30,000 a month. A store with hundreds of product pages has more to fix and more to write than a five-page brochure site.</li>\r
                <li><strong>Competition.</strong> Ranking for a phrase that big brands target needs more content and more links than a phrase few people chase. More keywords in the plan means more work.</li>\r
                <li><strong>Local or national.</strong> A business that serves one city is judged on a smaller set of searches. Our guide to a <Link to="/blogs/local-seo-audit">local SEO audit</Link> shows what a local plan covers.</li>\r
                <li><strong>Content volume.</strong> The packages above range from one post a month to eight. Writing is the biggest line in many quotes.</li>\r
                <li><strong>Links.</strong> Counts run from a handful a month to hundreds. Count matters less than where the links come from; see the red flags below.</li>\r
                <li><strong>The state of your site.</strong> A site with crawl errors, slow pages or duplicate content needs fixing before content pays off, which takes time in the first month. Our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> lists the usual problems.</li>\r
            </ul>\r
\r
            <h2 id="red-flags">What are the red flags in an SEO quote?</h2>\r
            <h3 id="guaranteed-rankings">Guaranteed rankings</h3>\r
            <p>Google's page for people hiring an SEO says "No one can guarantee a #1 ranking on Google." It also tells you to beware of SEOs who "guarantee rankings, allege a 'special relationship' with Google, or advertise a 'priority submit' to Google" (<a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">Google's "Do you need an SEO?" page</a>). It adds that if an SEO guarantees first place, "find someone else". Several agency websites we read say plainly that they do not guarantee rankings. A good quote promises work and reporting, not a position.</p>\r
            <h3 id="bulk-links">Links in bulk</h3>\r
            <p>Some packages list their links by the hundred. In October we read one at ₹30,000 plus GST a month that listed 250 web 2.0 links, 400 social bookmarks, 250 profile backlinks and 200 directory submissions. Google's spam policies define link spam as "creating links to or from a site primarily for the purpose of manipulating search rankings", and list "buying or selling links for ranking purposes", "using automated programs or services to create links to your site" and "low-quality directory or bookmark site links" among the examples. The same page says "sites that violate our policies may rank lower in results or not appear in results at all" (<a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener noreferrer">Google's spam policies</a>). Ask what the links are, where they will appear and who writes them.</p>\r
            <h3 id="secrecy-and-access">Secrecy and access</h3>\r
            <p>Google says to "be careful if a company is secretive or won't clearly explain what they intend to do", and that "ultimately, you are responsible for the actions of any companies you hire". If an SEO offers an audit, Google says to give read access to Search Console only, not write access, at that stage (same page). Keep Search Console, Analytics and your Business Profile in your own name and add the agency as a user, so you can remove it later.</p>\r
            <h3 id="price-without-scope">A price with no scope</h3>\r
            <p>Fifteen of the 37 published monthly packages were "from" prices. A figure with no list of keywords, content, reports and term is not a quote. The same goes for a package that bundles SEO, social media and ads at one price with no split.</p>\r
\r
            <h2 id="gst">Does SEO pricing include GST?</h2>\r
            <p>Usually you cannot tell. Of the 35 agencies that published a price for any service, 6 said GST is added on top, none said it is included and 29 said nothing. Of the 16 agencies with an SEO price in rupees, 2 said GST is extra. CBIC's list of service codes has no separate entry for SEO. IT consulting and support services (998313) and advertising services (998361) both sit under heading 9983, "Other professional, technical and business services" (<a href="https://cbic-gst.gov.in/hindi/pdf/central-tax-rate/Notification11-CGST-Annexure.pdf" target="_blank" rel="noopener noreferrer">CBIC's scheme of classification of services</a>), taxed at 9% central tax plus 9% state tax, 18% in all (<a href="https://www.gstcouncil.gov.in/sites/default/files/2024-02/11-rate_notification-cgst-01.04.2019.pdf" target="_blank" rel="noopener noreferrer">Notification 11/2017-Central Tax (Rate)</a>). Which code fits your engagement is a question for the agency and your accountant.</p>\r
            <p>An agency must register for GST once its turnover in a financial year exceeds ₹20 lakh, or ₹10 lakh in special category states (<a href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter6/section22_v1.00.html" target="_blank" rel="noopener noreferrer">CGST Act, section 22</a>). A registered agency adds 18% to its fee, so a ₹25,000 a month retainer costs ₹29,500. N&amp;D Co. is not registered for GST at present, so our prices are the amount you pay, as our <Link to="/terms">terms of service</Link> say. Ask every agency to state GST in its written quote.</p>\r
\r
            <h2 id="compare-quotes">How to compare SEO quotes</h2>\r
            <p>Two quotes at the same price can cover very different work. Ask each agency to put these in writing:</p>\r
            <ol>\r
                <li>Is the fee monthly, yearly or one-off, and is there a minimum term? How do you leave?</li>\r
                <li>Is GST included or added?</li>\r
                <li>How many keywords or pages are in the plan, and who chooses them?</li>\r
                <li>How many pieces of content a month, how long, and who writes them?</li>\r
                <li>What kind of links, how many, and on which sites? Will you list them in the report?</li>\r
                <li>What does the first month cover, and what is left for later months?</li>\r
                <li>What does the report show, and how often do we talk?</li>\r
                <li>Who owns the accounts and the content, and what do we keep if we stop?</li>\r
            </ol>\r
            <p>Then ask for examples of previous work and what timeframe they expect, as Google suggests. A figure for a keyword ranking is not a result. Traffic, enquiries and sales are, and a good report ties the work to them. Before the first call, our study on <Link to="/blogs/choose-seo-agency-india">how to choose an SEO agency in India</Link> shows which promises and contract terms to question.</p>\r
\r
            <h2 id="do-it-yourself">What can you do for free?</h2>\r
            <p>Google says "if you run a small local business, you can probably do much of the work yourself" (<a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">Google's "Do you need an SEO?" page</a>), and "it costs nothing to appear in our organic search results". Two Google tools cost nothing and give you the data an agency would use:</p>\r
            <ul>\r
                <li><strong>Search Console.</strong> It is "a free service offered by Google" for monitoring your site's presence in search (<a href="https://support.google.com/webmasters/answer/9128668?hl=en" target="_blank" rel="noopener noreferrer">Google's About Search Console page</a>). It shows the queries that bring visitors, indexing problems and which pages Google has found.</li>\r
                <li><strong>Google Business Profile.</strong> Google offers "a free Business Profile" that shows your business on Search and Maps, where you can add photos and manage customer reviews (<a href="https://www.google.com/intl/en_in/business/" target="_blank" rel="noopener noreferrer">Google Business Profile for India</a>). Our guide to <Link to="/blogs/google-business-profile-guide">setting one up</Link> walks through it.</li>\r
            </ul>\r
            <p>Start with Google's <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">SEO starter guide</a>, then run our <Link to="/blogs/local-seo-audit">local SEO audit checklist</Link> on your own business. If you later hire someone, you will know what they should be doing and can tell when a quote asks for more than the work needs.</p>\r
\r
            <h2 id="still-worth-it">Is SEO still worth paying for with AI search?</h2>\r
            <p>For most businesses, yes, as long as you judge it against sites like yours. Kevin Indig looked at Similarweb's traffic estimates for 10,000 domains in each of the US and France from September 2023 to August 2026 (<a href="https://searchengineland.com/organic-traffic-down-not-all-ai-499133" target="_blank" rel="noopener noreferrer">Search Engine Land's report of the study</a>). Organic search fell from 20.5% to 18.3% of all US visits in that time. Publishers took most of the loss, about 42% of their organic traffic in both countries, while the median site among the smallest quarter of domains held roughly level: up 2.7% in the US and down 1.9% in France. Visits referred by AI assistants were growing fastest but came to about 0.5% of all visits. The study does not cover India, and a news site and a local business are in different positions, so compare your traffic with businesses like yours, not with the headlines. If you want to be found in AI answers too, our guide to <Link to="/blogs/optimize-content-for-llms">optimizing content for LLMs</Link> covers what helps.</p>\r
\r
            <h2 id="our-prices">What do our SEO packages cost?</h2>\r
            <p>We are an agency, so here are our own published prices, in rupees and dollars a month. Starter is ₹7,999 ($129) for a small local business or a new site, and includes an initial technical audit, on-page work on core pages, Google Business Profile setup, Search Console and Analytics, a monthly report and 3 blog posts a month. Growth is ₹14,999 ($239) and adds monthly keyword research, 8 blog posts a month, schema, internal linking and link outreach. Custom starts at ₹24,999 for large or multi-location sites and online stores. Of the 37 packages in the survey, 2 started below Starter, 4 below Growth and 17 below Custom. We do not guarantee rankings, and each fee is set in a written quote before work starts. Every tier is on our <Link to="/services/seo-services">SEO services</Link> page and our <Link to="/pricing">pricing page</Link>.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};