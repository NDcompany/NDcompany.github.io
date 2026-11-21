var e=`import { Link } from 'react-router-dom';\r
import { Callout, Chart } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>To outsource web development to India, choose a team whose past work you can open, agree the scope, price and ownership in writing before any work starts, keep your domain, hosting and ad accounts in your own name, and start with one small paid project before a larger commitment. On the numbers we collected on 7 November 2026, the price gap is real. The cheapest monthly SEO plan from US agencies that publish prices had a median of $975, against $213 for the entry package of Indian agencies that price in US dollars, about 4.6 times as much. This guide covers what that means, what the work costs, how the hours line up, who owns the code and how to pay.</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>Only 18 of 43 US agencies we read publish any price. Their cheapest one-time website build has a median of $2,600 (11 agencies), and their cheapest monthly SEO plan $975 (12 agencies).</li>\r
                    <li>Indian SEO agencies that price in US dollars start at a median of $213 a month (10 agencies). On Shopify's partner directory, a store build starts at a median of $500 for partners based in India and $1,150 for those in the US.</li>\r
                    <li>India is UTC+5:30 all year, so the gap to the US changes by an hour when US clocks change. Agree overlap hours before you sign.</li>\r
                    <li>Of 30 Indian web agencies, only 8 say the client owns the code after payment and 20 say nothing about ownership. Put it in the quote.</li>\r
                    <li>Start with a small paid pilot, keep the accounts in your name and pay against milestones.</li>\r
                </ul>\r
            </Callout>\r
\r
            <h2 id="how-we-did-it">How we did the study</h2>\r
            <p>This guide uses four small datasets we built on 6 and 7 November 2026. Each one records what businesses say about themselves on their own public pages. None of them measures how good anyone's work is.</p>\r
            <ul>\r
                <li>43 US agencies from Semrush's agency directory lists for US web development and SEO, page 1 of each, read on 7 November 2026. We recorded whether each publishes a price, the cheapest monthly SEO plan and the cheapest one-time website build, whether it promises rankings, and whether it discloses offshore teams or offices.</li>\r
                <li>37 Indian SEO agencies from Semrush's India SEO list, read on 6 November 2026. The full study is in our post on <Link to="/blogs/choose-seo-agency-india">choosing an SEO agency in India</Link>.</li>\r
                <li>160 partner profiles from Shopify's own Partner Directory, read on 7 November 2026 and grouped by each partner's own primary location: 30 in India and 58 in the US. Prices are the starting prices each partner lists for a service. The detail is in our post on <Link to="/blogs/shopify-development-india">Shopify development in India</Link>.</li>\r
                <li>30 India-based web development agencies from Semrush's India web development list, 22 of which offer WordPress. The detail is in our post on <Link to="/blogs/hire-wordpress-developer-india">hiring a WordPress developer in India</Link>.</li>\r
            </ul>\r
            <p>We copied claims word for word from each site. The limits are plain: these are directory pages, not the whole market, prices are self-described and often missing, the groups differ in size, and a business that says nothing about contracts may still have a fair one. We do not name any agency. The rows are in the CSV at the end of this post.</p>\r
\r
            <h2 id="what-is-offshore">What does offshore web development in India mean?</h2>\r
            <p>It means a company in another country builds and looks after your website or store, and you work with it remotely. For a small or mid-sized business, most of that work is delivered as files, code and access rather than in person, so it can be handed over:</p>\r
            <ul>\r
                <li>Websites and online stores, from a business site to a Shopify or WooCommerce store. Our <Link to="/services/website-design-development">website design and development</Link> page lists what a build includes.</li>\r
                <li>SEO: technical fixes, page content and monthly reporting. See <Link to="/services/seo-services">our SEO services</Link>.</li>\r
                <li>Ads and social media, run from your own accounts, with the ad spend paid by you directly to Google or Meta. Our <Link to="/services/digital-marketing">digital marketing</Link> page explains how that works.</li>\r
                <li>Design and video, such as logos, brand identities, social posts and edited footage.</li>\r
            </ul>\r
            <p>Keep in house whatever needs someone in the room, such as filming at your premises, and whatever only you can decide, such as prices and offers.</p>\r
            <p>You may already be buying offshore work without knowing it. Only 3 of the 43 US agencies we read say on their site that they have offshore teams or offices. We cannot say what the other 40 do, only that their pages do not say.</p>\r
\r
            <h2 id="is-it-worth-it">Is outsourcing to India worth it?</h2>\r
            <p>For a defined project, the price data says the cost side is worth a look. The US Bureau of Labor Statistics puts the median annual wage for web developers at $92,650 and for web and digital interface designers at $104,000, both in May 2025 (<a href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm" target="_blank" rel="noopener noreferrer">BLS Occupational Outlook Handbook, web developers and digital designers</a>). If you need one site, a store or a few months of SEO, hiring someone full time for it rarely makes sense, and a project or monthly fee lets you pay for only what you need.</p>\r
            <p>The published prices we collected point the same way. Compare the medians:</p>\r
            <Chart\r
                type="bar"\r
                title="Median starting prices, US versus India, in US dollars"\r
                series={[\r
                    { name: 'US', data: [['Monthly SEO, cheapest plan', 975], ['Shopify store build or redesign', 1150], ['Shopify store migration', 1475]] },\r
                    { name: 'India', data: [['Monthly SEO, cheapest plan', 213], ['Shopify store build or redesign', 500], ['Shopify store migration', 675]] },\r
                ]}\r
                source="N&D Co. studies of agency websites and Shopify's Partner Directory, 6 and 7 November 2026"\r
                note={'US SEO: cheapest monthly plan of 12 of 43 US agencies. India SEO: entry package of the 10 of 37 Indian agencies that price in US dollars. Shopify: starting prices listed by partners, for a store build 30 in the US and 11 in India.'}\r
            />\r
            <div className="blog-table" role="region" aria-label="US and India median prices compared" tabIndex={0}>\r
                <table>\r
                    <caption>Median starting prices in US dollars, 6 and 7 November 2026</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Service</th>\r
                            <th scope="col">US median</th>\r
                            <th scope="col">India median</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">Monthly SEO, cheapest plan</th><td>$975 (12 agencies)</td><td>$213 (10 agencies)</td></tr>\r
                        <tr><th scope="row">One-time website build, cheapest</th><td>$2,600 (11 agencies)</td><td>Not collected</td></tr>\r
                        <tr><th scope="row">Shopify store build or redesign</th><td>$1,150 (30 partners)</td><td>$500 (11 partners)</td></tr>\r
                        <tr><th scope="row">Shopify store migration</th><td>$1,475</td><td>$675</td></tr>\r
                        <tr><th scope="row">Shopify theme customization</th><td>$100</td><td>$100</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Two things stop us calling this a verdict. First, price is not the only thing to weigh, and we do not compare the quality of work between countries because our data cannot show it. Second, the lists are small and self-reported: the US SEO and build prices come from the 18 of 43 agencies that publish any price. On Shopify, partners based in India show a median of 289 reviews and a 4.9 rating, against 120 reviews and 5.0 for those in the US, and theme customization starts at $100 in both places. Reviews are one signal among several, so open the work itself.</p>\r
            <p>The US side promises less too. None of the 43 US agencies promises rankings, and 11 say outright that rankings cannot be guaranteed. Among the Indian SEO agencies, 8 of 37 promise rankings or "guaranteed results", 10 sell links by count or authority score, and 4 set a firm minimum term of 3 to 12 months. Whatever country you buy from, those are the claims to check first.</p>\r
\r
            <h2 id="cost">What does web development outsourcing cost in India?</h2>\r
            <p>Treat every figure as a starting point until you hold a written quote. For reference, these are our own starting prices for US clients, set in US dollars for that market rather than converted from rupees:</p>\r
            <div className="blog-table" role="region" aria-label="N&D Co. starting prices for US clients" tabIndex={0}>\r
                <table>\r
                    <caption>N&D Co. starting prices for US clients</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Service</th>\r
                            <th scope="col">Starts at</th>\r
                            <th scope="col">Billed</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">Website design and development</th><td>$149</td><td>Per project</td></tr>\r
                        <tr><th scope="row">E-commerce store</th><td>$239</td><td>Per project</td></tr>\r
                        <tr><th scope="row">SEO</th><td>$129</td><td>Per month</td></tr>\r
                        <tr><th scope="row">Digital marketing and ads management</th><td>$95</td><td>Per month, ad spend paid by you</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Those are starting prices for the smallest tier, and quotes are set in writing before work starts. Every tier is on our <Link to="/pricing">pricing page</Link>, and the <Link to="/tools/website-cost-calculator">website cost calculator</Link> shows which plan a project fits at its published starting price.</p>\r
            <p>Most Indian agencies do not publish prices. In our <Link to="/blogs/agency-prices-india">survey of 108 agency websites</Link>, 35 of the 101 we could read showed any. Among the 30 India-based web agencies, 22 offer WordPress, but only 4 publish an hourly rate and 3 price a maintenance plan. If you are quoted a low number, check what it includes: the number of pages, rounds of revisions, support after launch, and whether hosting and the domain are in it. Our guide to <Link to="/blogs/small-business-website-cost">what a small business website costs</Link> breaks down the other costs.</p>\r
\r
            <h2 id="time-zones">How much time zone overlap is there with the US and UK?</h2>\r
            <p>India uses one time zone, 5 hours 30 minutes ahead of UTC, and does not use daylight saving time (<a href="https://en.wikipedia.org/wiki/Time_in_India" target="_blank" rel="noopener noreferrer">Wikipedia on time in India</a>). The gap therefore changes by an hour when your clocks change.</p>\r
            <div className="blog-table" role="region" aria-label="India's time difference with the US and UK" tabIndex={0}>\r
                <table>\r
                    <caption>India Standard Time (UTC+5:30) ahead of your time zone</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Where you are</th>\r
                            <th scope="col">Summer (clocks forward)</th>\r
                            <th scope="col">Winter</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">UK</th><td>4 hours 30 minutes</td><td>5 hours 30 minutes</td></tr>\r
                        <tr><th scope="row">US East Coast</th><td>9 hours 30 minutes</td><td>10 hours 30 minutes</td></tr>\r
                        <tr><th scope="row">US West Coast</th><td>12 hours 30 minutes</td><td>13 hours 30 minutes</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Our working day is 9:00 AM to 6:00 PM in India. On the East Coast that is 11:30 PM to 8:30 AM in summer and 10:30 PM to 7:30 AM in winter, so an East Coast team overlaps only with the last hour of our day, early in its morning. In the UK our day runs from 4:30 AM to 1:30 PM in summer and 3:30 AM to 12:30 PM in winter, which leaves most of a UK morning to talk. For SEO or a website build, most of the work needs no meeting. In practice:</p>\r
            <ul>\r
                <li>Send feedback at the end of your day, and the changes can be ready at the start of your next one.</li>\r
                <li>Ask each agency which hours it will be on a call, in your time zone, in writing. We keep part of our evening free for calls in US mornings.</li>\r
                <li>Agree how fast each side answers messages, so nobody waits a whole day for a reply that takes a minute.</li>\r
            </ul>\r
\r
            <h2 id="who-owns-the-code">Who owns the code?</h2>\r
            <p>Often the website does not say. Of the 30 India-based web agencies we read, 8 say the client owns the code after payment, 1 keeps custom code unless it is transferred in writing, and 20 say nothing about ownership. Among the Indian SEO agencies, 1 of 37 says plainly that the client stays the admin of its Google accounts. Silence is not a reason to avoid an agency, but it is a reason to ask before you pay.</p>\r
            <p>Under our <Link to="/terms">terms of service</Link>, ownership of the final deliverables named in your quote passes to you once full payment clears. Whoever you hire, check three things in the quote:</p>\r
            <ul>\r
                <li>Which deliverables are named, such as the theme files, the design files or the content, so that nothing you expect to own is left out.</li>\r
                <li>When ownership passes, which should be on full payment and not on signing.</li>\r
                <li>Which third-party tools are included. Themes, plugins and fonts usually come under their own licences, and a licence is not ownership.</li>\r
            </ul>\r
            <p>Copyright law differs between countries, and an assignment of rights can depend on how its terms are written. We do not give legal advice, so check the wording with a lawyer before a large project. Our <Link to="/white-label/wordpress">white label WordPress</Link> and <Link to="/white-label/shopify">white label Shopify</Link> pages say what agencies that resell our work get.</p>\r
\r
            <h2 id="in-writing">What should you agree in writing?</h2>\r
            <p>Most outsourcing problems come from things nobody wrote down. Before work starts, the quote or agreement should cover:</p>\r
            <ul>\r
                <li>Scope: the pages, features, platforms and deliverables, and how many rounds of changes are included.</li>\r
                <li>Price and billing: a fixed price or an hourly rate, the currency, and when each payment is due.</li>\r
                <li>Accounts: the domain, hosting, analytics and ad accounts should be in your name or your company's, with access given to the agency, so you keep them whatever happens.</li>\r
                <li>Support: what happens after launch. We include a 7-day support window for minor corrections, with ongoing maintenance as a separate package.</li>\r
                <li>Confidentiality: 10 of the 30 web agencies mention NDAs. If you are an agency reselling the work, ask for one and for a clear rule that the team never contacts your client.</li>\r
            </ul>\r
            <p>An outsourced team needs access to your systems but never needs your own password. Give each person a user account of their own in your website, hosting, analytics and ad accounts, with only the permissions the work needs. You can then see who changed what and remove the access on the day a project ends. Share only the customer data the work needs: a website build rarely needs your customer list at all. If the work does need personal data, agree in writing how it is kept and when it is deleted.</p>\r
\r
            <h2 id="how-to-pay">How do you pay an Indian agency from abroad?</h2>\r
            <p>Ask to be invoiced in US dollars, so the price you agreed is the price you pay. Our US clients pay by PayPal, through Wise or by bank transfer. Each charges its own fees, so check them before the first invoice, and ask the agency to confirm in writing who pays the transfer and platform charges.</p>\r
            <p>Splitting a project into milestone payments, such as a deposit at the start and the rest on delivery, keeps both sides committed. Do not pay the whole amount before work starts, and do not hold back the final payment once the agreed work is delivered.</p>\r
            <p>There is also a tax form. A US business that pays a foreign company may be asked for, or may ask for, paperwork that documents the payee's tax status. The IRS says that <a href="https://www.irs.gov/forms-pubs/about-form-w-8-ben-e" target="_blank" rel="noopener noreferrer">Form W-8BEN-E, on the IRS's page for the form</a>, is "used by foreign entities to document their status" for US withholding and reporting purposes. Whether you need it, and what it means for your payments, depends on your situation. Check with an accountant before the first payment.</p>\r
\r
            <h2 id="freelancer-or-agency">Should you hire a freelancer or an agency?</h2>\r
            <p>A freelancer can suit one clearly defined job, such as a landing page or a set of fixes, especially if you can review the work yourself. Ask what happens if they are ill or busy when you need a change.</p>\r
            <p>An agency suits work that crosses skills, such as a website that also needs a logo, SEO and ads, or anything you want looked after month after month. You get one point of contact and one quote, and the work does not stop when one person is away. Ask who will do the work and whether you can talk to them.</p>\r
\r
            <h2 id="pilot-project">How do you start with a pilot project?</h2>\r
            <p>Pick a small, real piece of work that you would need anyway, such as a landing page, a store migration or a technical SEO audit, and pay for it as a separate project. A good pilot is small enough to finish quickly, and large enough that you can judge how the team communicates, how it handles feedback and whether the files and access arrive as promised.</p>\r
            <ol>\r
                <li>Write a one-page scope with what is delivered, the price and the date.</li>\r
                <li>Give the team access through accounts of its own, not your password.</li>\r
                <li>Pay a deposit, and the balance on delivery.</li>\r
                <li>Check the result against the scope, and ask for the files and handover notes.</li>\r
                <li>Decide on a larger project only after that.</li>\r
            </ol>\r
            <p>If the agency refuses a small first project, or only offers a long minimum term, take that as an answer. Of the 37 Indian SEO agencies, 4 set a firm minimum of 3 to 12 months, and 9 say month to month or no lock-in.</p>\r
\r
            <h2 id="checklist">A checklist before you hire</h2>\r
            <div className="blog-table" role="region" aria-label="Checklist for choosing an agency to outsource to" tabIndex={0}>\r
                <table>\r
                    <caption>Checklist for choosing an agency</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Check</th>\r
                            <th scope="col">What to look for</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">Real work</th><td>Live sites or case studies you can open, not only mockups</td></tr>\r
                        <tr><th scope="row">Public reviews</th><td>Reviews on Google or another platform the agency does not control</td></tr>\r
                        <tr><th scope="row">Who you talk to</th><td>The person doing or leading the work, not only a sales contact</td></tr>\r
                        <tr><th scope="row">A written quote</th><td>Scope, price, ownership and support named before you pay</td></tr>\r
                        <tr><th scope="row">Your accounts</th><td>Willing to work inside accounts you own</td></tr>\r
                        <tr><th scope="row">Overlap hours</th><td>The hours it will be on a call, in your time zone</td></tr>\r
                        <tr><th scope="row">A small first step</th><td>A paid pilot before a long commitment</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>A short call answers most of this. For SEO work, our post on <Link to="/blogs/choose-seo-agency-india">choosing an SEO agency in India</Link> has the questions to ask about guarantees, links and contracts.</p>\r
\r
            <h2 id="data">The data</h2>\r
            <p>The rows for the 43 US agencies are in <a href="/assets/data/us-agency-prices-2026.csv" download>a CSV file (us-agency-prices-2026.csv)</a>: whether each publishes a price, its cheapest monthly SEO plan and one-time website build, whether it promises rankings or says they cannot be guaranteed, and whether it discloses offshore teams or offices. Agencies are numbered, not named. If you use the figures, please link to this page as the source.</p>\r
\r
            <h2 id="how-we-work">How we work with clients abroad</h2>\r
            <p>We are a brand and growth agency in Kolkata. For US clients our prices are set in US dollars, quotes are set in writing before work starts, and we work inside accounts you own. Our <Link to="/locations/usa">page for US businesses</Link> covers time zones and payment, and agencies that want to resell our work under their own name can read about our <Link to="/white-label">white label service</Link>. If you want to try us, you can <Link to="/book-a-call">book a free 15-minute call</Link>.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};