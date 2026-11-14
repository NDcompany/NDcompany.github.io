var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>To choose an SEO agency in India, check four things on its website before you ever get on a call: whether it promises rankings, whether it sells links by the hundred, what its contract says about a minimum term, and who owns your Google accounts when the work ends. On 6 November 2026 we read the websites of 37 Indian SEO agencies listed on Semrush's agency directory, and those four checks split them clearly. Eight promised rankings or "guaranteed results", ten sold or targeted links by count or by an authority score, four set a minimum term of three to twelve months, and only one said plainly that the client stays the administrator of its own Google accounts.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>A buyer's search rarely shows an agency's own site: in six searches a US or UK buyer might run, 10 of the 88 results were an Indian SEO agency's website. The rest were directories, ranked lists and articles.</li>
                    <li>11 of the 37 agencies publish a monthly SEO price, 10 of them in US dollars. Their cheapest packages start at a median of $213 a month, and the 24 dollar packages run from $150 to $1,350.</li>
                    <li>4 promise a ranking position, such as the first page or the top 10, and 4 more promise "guaranteed results". Half of those 8 also say elsewhere on their own site that rankings cannot be guaranteed. Google says <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">no one can guarantee a number one ranking</a>.</li>
                    <li>10 sell or target links by number or by a Domain Authority score, up to "200 backlinks/month". Google's spam policies treat buying links for ranking as link spam.</li>
                    <li>Only 1 of 37 says plainly that the client stays the super admin of its Google properties. Keep your Search Console, Analytics and Business Profile in your own name.</li>
                </ul>
            </Callout>

            <h2 id="how-we-did-it">How we did the study</h2>
            <p>We wanted to see what a business in the US, UK or Europe finds when it looks for an SEO agency in India, so we started where a buyer starts: six web searches, including "SEO company India", "outsource SEO to India" and "white label SEO India". Those searches returned mostly directories and "best of" lists, so for the main sample we used one of the directories that kept coming up, the first page of <a href="https://agencies.semrush.com/list/seo/india/" target="_blank" rel="noopener noreferrer">Semrush's Agency Partners list for SEO in India</a>, in the order it showed on 6 November 2026.</p>
            <p>That page listed 41 profiles. We left out one single consultant, one site that now redirects to an unrelated gambling page and two that would not load, which left 37 agencies. For each one we read its own website only: the SEO pages, pricing, about page, case studies, FAQ and terms. We copied every claim word for word with the page it came from, then fetched those pages again and checked that 92 of the 99 quoted claims about prices, guarantees, links and contracts were on the page exactly as recorded. The rest were prices assembled from a currency switch or a dropdown, which we checked number by number, and two claims on a site that blocked the second visit, which we do not count.</p>
            <p>The study describes what the agencies say about themselves, not how good their work is. It covers one directory page, not every agency in India, and an agency that says nothing about contracts may still have a fair contract. We do not name the agencies. The anonymised rows are at the end of this post.</p>

            <h2 id="what-a-search-shows">What does a buyer's search actually show?</h2>
            <p>Mostly other people's lists. Across the six searches, 10 of the 88 results were the website of an SEO agency based in India, 8 different agencies in all. The rest were directories such as Clutch, GoodFirms, DesignRush and Semrush's own list, "top 10" and "best of" articles, posts on Medium and LinkedIn, and firms based in the US or elsewhere that hire in India.</p>
            <p>So the first impression you get of most Indian agencies is a directory profile. Read the reviews there with care: check how many there are, how recent they are, and whether the reviewers' companies exist. 26 of our 37 agencies also show review badges or star ratings on their own sites, which is a reason to look them up on the directory itself rather than trust the badge.</p>

            <h2 id="prices">What do Indian SEO agencies charge clients abroad?</h2>
            <p>Most do not say. 11 of the 37 publish their own monthly SEO price, as named packages or a "from" price. Another 6 give only a general range, such as what "most professional SEO campaigns" cost, and 20 publish nothing. Of the 11 that do publish, 10 price in US dollars and one in British pounds. Two also show rupee prices beside the dollars. None shows euros.</p>
            <p>The entry packages of the 10 dollar-priced agencies start between $150 and $525 a month, with a median of $213. Across all 24 dollar packages, the median is $362 a month and the top is $1,350.</p>
            <Chart
                type="bar"
                title="Monthly SEO packages in US dollars, by price band, number of packages"
                data={[
                    ['Under $250', 6],
                    ['$250 to $499', 10],
                    ['$500 to $999', 6],
                    ['$1,000 and above', 2],
                ]}
                source="N&D Co. survey of 37 agency websites, 6 November 2026"
                note={'24 monthly SEO packages from 10 agencies, as priced on each agency\\'s own website. A "from" price is placed by its starting figure.'}
            />
            <p>Most package tables price by quantity: a number of keywords tracked, a number of pages optimized and, on six sites, a number of links or directory submissions a month. That makes packages easy to compare and easy to misread. A package that tracks more keywords is not more work on your site, and a package with more links may be more risk, not more value. For what Indian agencies charge in rupees, our <Link to="/blogs/seo-cost-india">study of SEO prices in India</Link> found a median of ₹25,000 a month across 37 rupee packages, and our survey of <Link to="/blogs/agency-prices-india">what 108 Indian agencies charge</Link> sets SEO beside website, store and ads prices.</p>

            <h2 id="guarantees">How many promise rankings?</h2>
            <p>Eight of the 37 make a promise about results. Four promise a position or higher rankings outright, in words such as "always on the first page of Google", "Guaranteed in Top 10", "Secure Ranking in Top 10 Positions" and "guaranteed traffic gain and higher search engine ranking". Four more promise "guaranteed results" in general, one of them with free work or a refund if agreed targets are missed.</p>
            <p>On the other side, 19 of the 37 say on their site that rankings cannot be guaranteed. Four of the eight that promise results say both things, the promise on a sales page and the disclaimer in an FAQ or the terms. Read the terms, because that is the version that counts.</p>
            <Chart
                type="bar"
                title="What the 37 agency websites say about guarantees, number of agencies"
                data={[
                    ['Promise a ranking position', 4],
                    ['Promise guaranteed results', 4],
                    ['Say rankings cannot be guaranteed', 19],
                ]}
                source="N&D Co. survey of 37 agency websites, 6 November 2026"
                note="An agency can appear in more than one row: 4 of the 8 that promise results also say rankings cannot be guaranteed."
            />
            <p>Google is direct about this. Its page on hiring an SEO says no one can guarantee a number one ranking on Google, and to beware of SEOs that claim to guarantee rankings, allege a special relationship with Google or advertise a priority submit to Google. Google also says it never accepts money to include or rank sites.</p>

            <h2 id="links">Who sells links by the dozen?</h2>
            <p>Ten of the 37 sell or target links by number or by a score. Six list links or submissions by count in their packages: backlinks per month (one plan says "200 backlinks/month"), guest posts, social bookmarking, classified ads, directory submissions and PDF submissions. Four describe links by the Domain Authority or Domain Rating of the sites they come from, which are third-party scores from SEO tools, not anything Google uses. One sells ".edu backlinks" outright.</p>
            <p>Under <a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener noreferrer">Google's spam policies</a>, buying or selling links for ranking purposes is link spam, and so is exchanging money for links or for posts that contain links. Paid links are acceptable only when they are marked with <code>rel="sponsored"</code> or <code>rel="nofollow"</code>, which means they pass no ranking credit. A monthly quota of links bought to raise rankings is the pattern the policy describes. Some agencies are on the other side: three in our sample said in plain words that they do not chase link volume or buy links.</p>
            <p>So ask every agency the same question: where will the links come from, and can you show me five you built last month? Directory listings and real articles on relevant sites are normal. A count of links promised in advance is not.</p>

            <h2 id="contracts">What do their contracts say?</h2>
            <p>Fifteen of the 37 say nothing about contract length on the pages we read. Of those that do, most offer monthly terms.</p>
            <div className="blog-table" role="region" aria-label="Contract terms stated by 37 Indian SEO agencies" tabIndex={0}>
                <table>
                    <caption>Contract terms on 37 Indian SEO agency websites, 6 November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">What the site says</th>
                            <th scope="col">Agencies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Month to month, or "no lock-in"</th><td>9</td></tr>
                        <tr><th scope="row">Recommends three to six months, but flexible</th><td>3</td></tr>
                        <tr><th scope="row">A firm minimum term</th><td>4 (3, 6, 6 and 12 months)</td></tr>
                        <tr><th scope="row">Other terms only, such as non-refundable fees or no cancellation once work starts</th><td>6</td></tr>
                        <tr><th scope="row">Nothing stated</th><td>15</td></tr>
                    </tbody>
                </table>
            </div>
            <p>The longest commitment we found was a 12-month minimum with 45 days' written notice after that, and the remaining fees payable if you leave early. Notice periods were rare in general: three mention 30 days, and one asks for 48 hours before the next billing date. SEO does take months to show results, so a recommendation of three to six months is reasonable. A minimum you cannot leave, with fees for the unused months, is a different thing, and you should know which one you are signing before the first invoice.</p>

            <h2 id="accounts">Who owns your accounts?</h2>
            <p>This is where the websites say the least. One agency of the 37 says plainly that its clients are always the super admin of their Google properties. Six say the client owns the work after full payment, mostly about code and designs. One says the opposite for ad accounts: the account is created under the agency's own manager account, and the agency owns all associated data.</p>
            <p>Do not leave this to the contract. Keep your Search Console property, Google Analytics, Google Business Profile, domain and hosting registered to your business, and give the agency access. <a href="https://support.google.com/webmasters/answer/7687615" target="_blank" rel="noopener noreferrer">Google's help page on Search Console permissions</a> explains that only an owner can add or remove users, and that a full user can view all data and take some actions while a restricted user has view rights to most data. Google's page on hiring an SEO goes further for the early stage: give a new SEO read access to Search Console, not write access. If you ever remove an owner, also remove their verification token from your site, or they can verify again.</p>

            <h2 id="proof">Case studies, reviews and reports</h2>
            <p>The agencies are good at showing proof. 28 of the 37 show case studies with a named client, 26 show review badges or ratings, and 32 describe what their reports contain. A named case study is only a start: open the client's site, look for the improvement the agency claims, and ask to speak to that client, which is what Google suggests when it advises checking business references.</p>
            <p>Several case-study pages mixed SEO with paid ads or app projects, so check that the example is SEO work. And ask for a sample of the monthly report before you sign. A useful one shows rankings, organic traffic and indexing status next to a log of what was done that month, so you can match the work to the results.</p>

            <h2 id="time-zones">Do they work in your hours?</h2>
            <p>Seven of the 37 claim 24/7 support, and one states a concrete overlap: five business hours with US clients. India runs on India Standard Time all year, five and a half hours ahead of UTC, which puts it four and a half to five and a half hours ahead of the UK and nine and a half to thirteen and a half hours ahead of the US, depending on the coast and the season. For SEO the gap rarely matters, because most of the work needs no meeting. Ask when a call can happen in your morning or afternoon, and how quickly an email gets a reply.</p>

            <h2 id="ai-search">What about "AI search optimization"?</h2>
            <p>Thirty of the 37 now sell some form of AI search optimization, under names such as GEO, AEO or LLM SEO. Google's own <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">guide to its AI features</a> says that optimizing for generative AI search is still SEO, and that you do not need special files, markup or content cut into small pieces to appear in it. Treat a separate AI package as a description of ordinary SEO work, and ask what it adds that the SEO package does not. Our guide on <Link to="/blogs/optimize-content-for-llms">optimizing content for LLMs</Link> covers what each AI company says about its crawlers.</p>

            <h2 id="checklist">A checklist for your first call</h2>
            <ol>
                <li>Show me examples of your work and let me speak to a client whose results you list. (Google suggests asking for examples and checking references.)</li>
                <li>Do you follow Google Search Essentials? Where in your terms does it say you do not guarantee rankings?</li>
                <li>Where will the links come from? Show me five you built last month. Do you buy links or sell them by count?</li>
                <li>What results do you expect, by when, and how will you measure them?</li>
                <li>Is there a minimum term? What is the notice period, and what do I owe if I leave early?</li>
                <li>Will my Search Console, Analytics, Business Profile, domain and hosting stay in my name, with you as a user?</li>
                <li>What does the monthly report contain? Can I see a sample?</li>
                <li>Who will do the work, and when can we talk in my working hours?</li>
            </ol>
            <p>Google's own list of questions also asks about experience in your industry, your country or city and international sites, how long the firm has been in business, and whether it will share every change it makes to your site.</p>

            <h2 id="data">The data</h2>
            <p>The rows for all 37 agencies are in <a href="/assets/data/seo-agencies-india-2026.csv" download>a CSV file (seo-agencies-india-2026.csv)</a>: whether each serves clients abroad, publishes a monthly price and its lowest dollar package, promises rankings or results, says rankings cannot be guaranteed, sells links by count or score, shows named case studies, what it says about contracts and account ownership, and whether it offers AI search work. Agencies are numbered, not named. If you use the figures, please link to this page as the source.</p>

            <h2 id="how-we-work">How we work with clients abroad</h2>
            <p>We are a brand and growth agency in Kolkata, and we hold our own <Link to="/services/seo-services">SEO services</Link> to the checklist above: an audit first, a monthly scope set in writing, access through your own accounts, a monthly report, and no ranking guarantees. Prices for clients in the US and most other countries are set in US dollars; our <Link to="/locations/usa">page for US businesses</Link> covers time zones and payment, and agencies that want to resell SEO under their own name can see our <Link to="/white-label/seo">white label SEO</Link> page. Before you talk to anyone, you can run a page through <Link to="/tools/rankguru">RankGuru</Link>, our free on-page checker, to see where your site stands.</p>
        </>
    );
}
`;export{e as default};