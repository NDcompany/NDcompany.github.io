var e=`import { Link } from 'react-router-dom';\r
import { Callout, Chart } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>Shopify development in India costs about half of what the same work costs from a US partner, going by the prices partners publish themselves. On 7 November 2026 we read 160 profiles in Shopify's own Partner Directory and sorted each partner by where it is based. The 30 based in India publish a median "starting at" price of $500 for a store build or redesign, against $1,150 for the 58 based in the US. Theme customization is the exception: $100 in both countries. This post is part of our wider guide to <Link to="/blogs/outsource-web-development-india">outsourcing web development to India</Link>.</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>Store build or redesign: India median $500 (11 partners publish a price, middle half $300 to $800), US median $1,150 (30 partners, middle half about $274 to $2,049).</li>\r
                    <li>Store migration: $675 in India (8 partners) against $1,475 in the US (20). Troubleshooting: $30 against $95.</li>\r
                    <li>Theme customization is $100 at the median in both countries, from 11 Indian and 23 US partners.</li>\r
                    <li>Only 15 of the 30 Indian partners and 37 of the 58 US partners publish any starting price, so half of India's directory will not tell you before you ask.</li>\r
                    <li>The directory's country filter matches the countries a partner supports, not where it is based. Check the location on each profile.</li>\r
                </ul>\r
            </Callout>\r
\r
            <h2 id="how-we-did-it">How we did the study</h2>\r
            <p>We opened <a href="https://www.shopify.com/partners/directory" target="_blank" rel="noopener noreferrer">Shopify's Partner Directory</a> on 7 November 2026 and read the first 10 pages of its India listing and of its United States listing: 160 different partner profiles after removing duplicates. For each we recorded the home country shown on its profile, its tier, the year it became a Shopify partner, its rating, its review count and every "Starting at" price it lists per service.</p>\r
            <p>Here is the useful tip. The directory's country filter matches the countries a partner says it supports, so the India listing is not a list of Indian companies. When we grouped partners by their own primary location, 30 were based in India, 58 in the US and the rest in the UK, Canada, Australia, Germany, Japan and Pakistan. A US agency that serves India sits in the India listing. If you want to hire in India, read the location line before the name.</p>\r
            <p>The limits matter. We read 10 pages of each listing, not the whole directory. Prices are what partners choose to publish, so they describe the offer, not what clients paid. Medians from 4 to 11 prices are rough, which is why we give the middle half too and leave out services with too few prices to compare. We do not name any partner. The anonymised rows are at the end of this post.</p>\r
\r
            <h2 id="cost">How much does Shopify store development cost in India?</h2>\r
            <p>At the median, a store build or redesign starts at $500 with Indian partners who publish a price. The middle half of the 11 Indian prices runs from $300 to $800. For the 30 US partners that publish one, the median is $1,150 and the middle half runs from about $274 to $2,049. The US range is wider, and its low end overlaps India's, so a cheap US partner exists and an expensive Indian one exists. The medians still differ by more than half.</p>\r
            <Chart\r
                type="bar"\r
                title="Median starting price per service, by where the partner is based, US dollars"\r
                series={[\r
                    { name: 'India-based partners', data: [['Store build or redesign', 500], ['Store migration', 675], ['Theme customization', 100], ['Troubleshooting', 30]] },\r
                    { name: 'US-based partners', data: [['Store build or redesign', 1150], ['Store migration', 1475], ['Theme customization', 100], ['Troubleshooting', 95]] },\r
                ]}\r
                source="N&D Co. reading of Shopify Partner Directory profiles, 7 November 2026"\r
                note={'Each partner\\'s "Starting at" price per service, grouped by the partner\\'s own primary location. Prices from 11 and 30 partners (build), 8 and 20 (migration), 11 and 23 (theme), 7 and 6 (troubleshooting), India and US.'}\r
            />\r
            <div className="blog-table" role="region" aria-label="Starting prices published by Shopify partners, India and US" tabIndex={0}>\r
                <table>\r
                    <caption>"Starting at" prices in US dollars on Shopify Partner Directory profiles, 7 November 2026</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Service</th>\r
                            <th scope="col">India median (partners)</th>\r
                            <th scope="col">India middle half</th>\r
                            <th scope="col">US median (partners)</th>\r
                            <th scope="col">US middle half</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">Store build or redesign</th><td>$500 (11)</td><td>$300 to $800</td><td>$1,150 (30)</td><td>$274 to $2,049</td></tr>\r
                        <tr><th scope="row">Store migration</th><td>$675 (8)</td><td>$500 to $1,150</td><td>$1,475 (20)</td><td>$500 to $2,500</td></tr>\r
                        <tr><th scope="row">Theme customization</th><td>$100 (11)</td><td>$20 to $150</td><td>$100 (23)</td><td>$75 to $195</td></tr>\r
                        <tr><th scope="row">Troubleshooting</th><td>$30 (7)</td><td>$25 to $50</td><td>$95 (6)</td><td>$4 to $188</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Custom apps and integrations had only 4 prices on each side, too few to compare, and the same goes for SEO. Treat those as "ask for a quote" services. If you are planning a budget, our <Link to="/tools/website-cost-calculator">website cost calculator</Link> shows the plan a project fits at a published starting price, and our <Link to="/blogs/agency-prices-india">survey of 108 Indian agency websites</Link> covers what agencies there publish in general.</p>\r
\r
            <h2 id="starting-at">What does a "starting at" price mean?</h2>\r
            <p>It is the lowest price the partner lists for that service, not a quote for your store. Read a $500 start as the smallest version of the job until the quote says otherwise: a ready-made theme, a handful of products, no custom design. A store with a custom theme, a large catalogue, several languages or a custom checkout flow costs more, and the partner decides how much more only after seeing the brief.</p>\r
            <p>Read the figure as the cheapest place to begin the conversation. Then ask for a written quote that lists what is in the price, as we do for every project: set in writing before work starts, with the pages, the apps and the revisions named. A quote that says only "Shopify store" cannot be compared with another.</p>\r
\r
            <h2 id="customization">How much does Shopify theme customization cost?</h2>\r
            <p>The median starting price is $100 in both countries. In India the middle half of 11 prices runs from $20 to $150, and in the US the middle half of 23 runs from $75 to $195. This is the one service where the country makes no difference at the median. It is also the smallest kind of job: changing colours, fonts, sections or a banner on an existing theme. A new product page layout, a custom section built in the theme's code or a rebuilt cart is a larger job and falls outside a $100 start.</p>\r
            <p>Troubleshooting follows the same pattern, but with a gap. An Indian partner's median starting price is $30 and a US partner's is $95. Both are small figures, so ask about the minimum charge, not just the first number.</p>\r
\r
            <h2 id="tiers">What do Shopify's partner tiers mean?</h2>\r
            <p>Each partner profile shows a tier. Shopify's own <a href="https://cdn.shopify.com/static/partner-resources/shopify-partner-program-guide-service-track.pdf" target="_blank" rel="noopener noreferrer">Q4 2026 tiering guide</a> says the program has five tiers: Registered, Select, Plus, Premier and Platinum. Registered is the starting point, and the rest are earned through commercial activity. Tiers update quarterly, on 1 January, 1 April, 1 July and 1 October.</p>\r
            <p>The tier measures how much business a partner has brought to Shopify, not how well it designs or codes. The guide measures revenue from merchants the partner brought or supports, plus a count of new merchants. To reach Select, a partner needs $100,000 of new referral revenue or $500,000 of existing merchant revenue, and one Plus or Enterprise merchant or 10 on the standard plans. Platinum asks for $5,000,000 or $25,000,000 and six Plus or Enterprise merchants. The guide notes that credentials are waived for 2026 and only commercial activity is evaluated.</p>\r
            <div className="blog-table" role="region" aria-label="Shopify partner tiers of India-based and US-based partners" tabIndex={0}>\r
                <table>\r
                    <caption>Partner tiers shown on profiles, by where the partner is based</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Tier</th>\r
                            <th scope="col">India-based (30)</th>\r
                            <th scope="col">US-based (58)</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">Select</th><td>25</td><td>31</td></tr>\r
                        <tr><th scope="row">Plus</th><td>3</td><td>20</td></tr>\r
                        <tr><th scope="row">Premier</th><td>1</td><td>1</td></tr>\r
                        <tr><th scope="row">Platinum</th><td>1</td><td>4</td></tr>\r
                        <tr><th scope="row">Tier not shown</th><td>0</td><td>2</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>So 5 of the 30 Indian partners sit at Plus or above, against 25 of the 58 US ones. That says more about where large Shopify merchants are than about quality. A higher tier suggests experience with bigger stores, which matters if you are looking for a Shopify Plus agency in India. Note that the Plus partner tier is a level of the partner program and is not the same thing as the Shopify Plus plan, so ask any agency which Plus-plan stores it has worked on. A Select partner can be a good fit for a first store.</p>\r
\r
            <h2 id="reputation">Do Indian partners have fewer reviews or less experience?</h2>\r
            <p>No. In our sample the Indian partners have more of both. The median Indian partner has 289 reviews against 120 for a US one, and has been a Shopify partner for 9 years against 7. The median rating is 4.9 in India and 5.0 in the US. Both are high, so a rating on its own will not separate two partners. The review count and the dates of recent reviews tell you more. Reviews are written by merchants who chose to write them, and the directory is a marketing page for each partner, so use it to build a shortlist, not to make the final decision.</p>\r
\r
            <h2 id="monthly-costs">What does Shopify itself cost on top of the developer?</h2>\r
            <p>A partner's price covers the work. Your store also has running costs that go to Shopify and to others. <a href="https://www.shopify.com/pricing" target="_blank" rel="noopener noreferrer">Shopify's pricing page</a> lists the plans (Basic, Grow, Advanced and Plus) with a monthly price, shown in your local currency, and a lower rate if you pay yearly. Check the page on the day you decide, since we read it in rupees and your page may differ.</p>\r
            <p>Payment fees are separate. If you use a payment provider other than Shopify Payments, the pricing page lists a third-party transaction fee of 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus. It says Shopify charges a fee for credit cards that varies by plan, and it does not list that rate, so look at your plan's terms for it. The page gives no prices for apps. Each app in the Shopify App Store sets its own, often monthly, so add them up before you agree to a build that depends on five of them.</p>\r
            <p>A fair total for a first year is the build price, the Shopify plan, the apps, the payment fees, your domain, and a maintenance fee if you want changes after launch. Ask each partner to list which of those its quote covers.</p>\r
\r
            <h2 id="read-profile">How do I read a partner profile?</h2>\r
            <p>Read these lines in this order.</p>\r
            <ol>\r
                <li>The location. Is the partner based where you think it is, or does it only support India or the US?</li>\r
                <li>The tier and the year it joined. They show how long the partner has worked on Shopify and at what scale, not how good it is.</li>\r
                <li>The review count, the rating and the newest reviews. Look at what merchants say about communication and deadlines, not only the stars.</li>\r
                <li>The services and the starting prices. If a service you need has no price, you will have to ask.</li>\r
                <li>The case studies. Open the live store, click through the cart and check how fast it loads on a phone.</li>\r
            </ol>\r
            <p>Then ask a short list of questions in writing.</p>\r
            <ul>\r
                <li>What exactly is in the price, and what would make it higher?</li>\r
                <li>Which theme will you start from, and will you change its code or only its settings?</li>\r
                <li>Which paid apps does the design need, and what do they cost each month?</li>\r
                <li>Who will work on my store, and when can we talk in my working hours?</li>\r
                <li>What support do I get after launch, and for how long?</li>\r
                <li>What do I get at the end: the theme files, the app list and the documentation?</li>\r
            </ul>\r
            <p>On time zones, India runs on India Standard Time all year, five and a half hours ahead of UTC. That is four and a half to five and a half hours ahead of the UK and nine and a half to thirteen and a half hours ahead of the US, depending on the coast and the season. A partner that works part of your morning avoids most of the delay.</p>\r
\r
            <h2 id="access">How should I give a developer access to my store?</h2>\r
            <p>Keep the store in your own name and give the developer access to it. Shopify's help pages describe two ways. <a href="https://help.shopify.com/en/manual/your-account/staff-accounts" target="_blank" rel="noopener noreferrer">Staff accounts</a> are for your own team: each user gets a role, and the role sets what they can see and do. <a href="https://help.shopify.com/en/manual/your-account/staff-accounts/collaborator-accounts" target="_blank" rel="noopener noreferrer">Collaborator accounts</a> are for Shopify Partners who need to work on your store.</p>\r
            <p>For a collaborator, Shopify's help page says you share a 4-digit code from the Users settings, the partner enters it to request access, and the decision to accept is always yours. You then choose which permissions the partner gets, and the page advises giving only what the work needs. Partners must use two-step authentication. You cannot transfer store ownership to a collaborator. You can change the role at any time, generate a new code, or remove the collaborator, and access expires if the collaborator has not logged in for 90 days.</p>\r
            <p>Use that route instead of sharing your own login, and register the domain, your payment provider and your Google accounts to your business too. Our guide on <Link to="/blogs/choose-seo-agency-india">choosing an SEO agency in India</Link> makes the same point about Search Console and Analytics: you give access, and you stay the owner.</p>\r
\r
            <h2 id="checklist">A checklist before you hire</h2>\r
            <ol>\r
                <li>Confirm the partner's home country on its profile, not from the directory filter.</li>\r
                <li>Ask for a written quote that lists pages, apps, revisions and support, with the currency and any payment charges.</li>\r
                <li>Work out the monthly cost: the Shopify plan, the apps and the transaction fees.</li>\r
                <li>Look at two stores it built, on your phone.</li>\r
                <li>Give access through a collaborator account with only the permissions the work needs.</li>\r
                <li>Ask what you receive at the end and who owns it. Ownership of the final deliverables named in your quote should pass to you on full payment. Have a lawyer read any contract that says otherwise.</li>\r
            </ol>\r
\r
            <h2 id="data">The data</h2>\r
            <p>The 160 rows are in <a href="/assets/data/shopify-partners-2026.csv" download>a CSV file (shopify-partners-2026.csv)</a>: each partner's home country, tier, the year it became a partner, rating, review count and every starting price by service. Partners are numbered, not named. If you use the figures, please link to this page as the source.</p>\r
\r
            <h2 id="how-we-work">How we work on Shopify stores</h2>\r
            <p>We are a brand and growth agency in Kolkata. Our <Link to="/services/ecommerce-solutions">ecommerce solutions</Link> page lists what a store project includes, and every project has a quote set in writing before work starts, with the scope, apps and support named. We ask you to own the store, and we work through a collaborator account. Agencies that want a Shopify build delivered under their own name can read about our <Link to="/white-label/shopify">white label Shopify</Link> service. We make no promise about sales or rankings, because neither depends on a build alone.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};