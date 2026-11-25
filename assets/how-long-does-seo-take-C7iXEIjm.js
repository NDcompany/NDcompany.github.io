var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>SEO takes months, not weeks. Google's own guide says "some changes might take effect in a few hours, others could take several months", and that crawling a page "can take anywhere from a few days to a few weeks". A new website spends its first weeks being found and indexed before it ranks for much at all: in an Ahrefs study of a million new pages, only 1.74% reached Google's top 10 within a year. Our own site, relaunched on 23 October 2026, shows what those first weeks look like, and we publish its Search Console numbers below.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>Google publishes no timeline for ranking. Its documentation says crawling takes days to weeks, that indexing is not guaranteed, and that changes can take "several months" to show.</li>
                    <li>In our own first three weeks after relaunch, Google showed the site for searches other than our name 26, then 50, then 125 times a week. Almost all of those were at positions 60 to 90.</li>
                    <li>Ahrefs found the average page ranking first in Google is 5 years old, and only 13.7% of top 10 pages were under a year old.</li>
                    <li>After a core update, Google says to wait at least a full week after it finishes before you judge your site. Recent updates took 12 to 18 days to roll out.</li>
                    <li>No one can promise a time or a position. Google says "No one can guarantee a #1 ranking on Google."</li>
                </ul>
            </Callout>

            <h2 id="what-google-says">What does Google say about how long SEO takes?</h2>
            <p>Google never gives a single number, but its documentation sets out how long each step can take. These are its own words, read on 15 November 2026.</p>
            <div className="blog-table" role="region" aria-label="What Google's documentation says about timing" tabIndex={0}>
                <table>
                    <caption>Timing in Google's own documentation, checked 15 November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Step</th>
                            <th scope="col">What Google says</th>
                            <th scope="col">Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Crawling a page</th>
                            <td>"Crawling can take anywhere from a few days to a few weeks."</td>
                            <td><a href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl" target="_blank" rel="noopener noreferrer">Ask Google to recrawl your URLs</a></td>
                        </tr>
                        <tr>
                            <th scope="row">A new site being crawled</th>
                            <td>"After a page URL is known, it can take some time (up to a few weeks) before Google crawls some or all of your site."</td>
                            <td><a href="https://support.google.com/webmasters/answer/7440203" target="_blank" rel="noopener noreferrer">Page indexing report help</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Requesting indexing</th>
                            <td>"Indexing can take up to a week or two", and a request "does not guarantee that the page will appear in the Google Index."</td>
                            <td><a href="https://support.google.com/webmasters/answer/9012289" target="_blank" rel="noopener noreferrer">URL Inspection tool help</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Seeing the effect of a change</th>
                            <td>"Some changes might take effect in a few hours, others could take several months." Wait "a few weeks" before judging your work.</td>
                            <td><a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">SEO Starter Guide</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Search Console data</th>
                            <td>"Normally, however, collected data should be available in 2-3 days", and up to a week for a site newly added.</td>
                            <td><a href="https://support.google.com/webmasters/answer/96568" target="_blank" rel="noopener noreferrer">Data anomalies in Search Console</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Recovering after a core update</th>
                            <td>Some changes show "in a few days", but it can take "several months" for Google's systems to judge a site again.</td>
                            <td><a href="https://developers.google.com/search/docs/appearance/core-updates" target="_blank" rel="noopener noreferrer">Google's core updates guide</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Two things in that table matter more than the numbers. Indexing is never promised: Google's page on how search works says "Indexing isn't guaranteed; not every page that Google processes will be indexed" (<a href="https://developers.google.com/search/docs/fundamentals/how-search-works" target="_blank" rel="noopener noreferrer">How Google Search works</a>). And Google's page for people hiring an SEO no longer gives a duration at all. It tells you to ask the provider "What kind of results do you expect to see, and in what timeframe?" (<a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">Google's "Do you need an SEO?" page</a>). You will often read that Google says SEO takes "four months to a year". That line is not on Google's current pages, so we leave it out.</p>

            <h2 id="our-first-weeks">What did our own first weeks look like?</h2>
            <p>We relaunched ndcompany.in as a new site on 23 October 2026, with new addresses for almost every page. The old site had earned 172 search queries in 16 months, nearly all of them people typing our name. Here is what Search Console showed in the first three full weeks of the new site, for searches that did not include our name.</p>
            <Chart
                type="column"
                title="Impressions for searches without our name, ndcompany.in, first three weeks after relaunch"
                data={[
                    ['Week 1', 26],
                    ['Week 2', 50],
                    ['Week 3', 125],
                ]}
                source="Google Search Console for ndcompany.in, 23 October to 12 November 2026"
                note="An impression is one appearance of a page in a search result. Weeks start on 23 October. Searches containing N&D, ndco or nd company are counted as our name and left out."
            />
            <p>Three things stand out. Google found the pages fast: 36 of the 39 pages we wrote for clients outside India were indexed within about three weeks, and the other three were either not live yet or discovered but not crawled. The searches grew each week, from 16 different searches without our name in week one to 34 in week three. But almost none of those impressions turned into visits, because most appeared at positions 60 to 90, on page six or later of the results. That is the normal state of a new site: Google knows the pages and tests them, but trusts them less than pages that have been around for years and have links pointing to them.</p>
            <p>We will update this section as the months pass, with the same measures, so you can see how a new site moves from being indexed to being found.</p>

            <h2 id="new-pages">How long do new pages take to reach page one?</h2>
            <p>Ahrefs, an SEO tool company, measured this on its own crawl data (<a href="https://ahrefs.com/blog/how-long-does-it-take-to-rank/" target="_blank" rel="noopener noreferrer">Ahrefs: how long does it take to rank in Google</a>, May 2025). It took one million random URLs its crawler saw in September 2023 and checked whether any reached the top 10 for a search within a year. Only 1.74% did. A second sample of two million English pages with real content did better: 6.11% reached the top 10 within a year.</p>
            <p>The same study looked at the pages already in the top 10 for 1.3 million US searches. The page ranking first was 5 years old on average, 72.9% of top 10 pages were more than 3 years old, and only 13.7% were under a year old. Ahrefs dates each page from when its own crawler first saw it, and the keywords are US only, so read the figures as a guide rather than a rule. They still show why a new page rarely outranks an established one in its first months.</p>

            <h2 id="core-updates">How do Google's core updates affect the timeline?</h2>
            <p>Several times a year Google changes how it ranks pages across the board, in what it calls a core update. Each one takes days to roll out, and positions can move while it runs. Google's status dashboard lists how long the recent ones took.</p>
            <Chart
                type="bar"
                title="How long Google's recent core updates took to roll out, in days"
                data={[
                    ['March 2025', 13.9],
                    ['June 2025', 16.8],
                    ['December 2025', 18.1],
                    ['March 2026', 12.2],
                    ['May 2026', 11.9],
                ]}
                source="Google Search Status Dashboard, ranking incident history"
                sourceUrl="https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history"
                note="Days and hours as listed by Google, converted to days. The November 2026 core update started on 10 November and was still rolling out on 15 November."
            />
            <p>Google's guidance is to "wait at least a full week after a core update completes before analyzing your site in Search Console" (<a href="https://developers.google.com/search/docs/appearance/core-updates" target="_blank" rel="noopener noreferrer">core updates guide</a>). If you lost positions and improved the site, the same page says it can take "several months" for that to show, and that "If it's been a few months and you still haven't seen any effect, that could mean waiting until the next core update." So a fair test of SEO work spans at least one core update, and often two.</p>

            <h2 id="what-speeds-it-up">What makes SEO faster?</h2>
            <ul>
                <li><strong>A site Google can crawl easily.</strong> Clean internal links, a sitemap and pages that load fast. Google says a sitemap helps most when "Your site is new and has few external links to it" (<a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview" target="_blank" rel="noopener noreferrer">Google's sitemaps overview</a>). Our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> covers the rest.</li>
                <li><strong>Quality and popularity.</strong> Asked why a site took over six months to index, Google's Gary Illyes said "the most important one is the quality of the site, followed by its popularity on the internet" (<a href="https://developers.google.com/search/help/office-hours/2023/may" target="_blank" rel="noopener noreferrer">Google SEO office hours, May 2023</a>). Popularity mostly means other sites linking to and mentioning yours.</li>
                <li><strong>Searches with less competition.</strong> A specific search ("white label SEO audit price") usually has fewer strong pages competing for it than a broad one ("SEO agency"), and so does a search in one town compared with a whole country. That is why our <Link to="/blogs/local-seo-audit">local SEO audit</Link> and <Link to="/blogs/google-business-profile-guide">Google Business Profile guide</Link> are where most small businesses should start.</li>
                <li><strong>Pages that answer the search better than what ranks now.</strong> Your own prices, your own process and your own results are things the pages already ranking cannot copy.</li>
            </ul>
            <p>Requesting indexing again and again does not help. Google says "requesting a recrawl multiple times for the same URL won't get it crawled any faster", and there is a daily limit on requests.</p>

            <h2 id="what-slows-it-down">What makes SEO slower?</h2>
            <ul>
                <li><strong>Technical problems.</strong> Pages blocked from crawling, wrong canonical tags, slow templates or broken redirects can stop pages being indexed at all. Search Console's Page indexing report shows "Discovered, currently not indexed" (found but not crawled yet) and "Crawled, currently not indexed", and Google adds: "Don't expect every URL on your site to be indexed."</li>
                <li><strong>Many pages that say the same thing.</strong> Near-copies of one page, such as a city page repeated with only the city name changed, give Google little reason to index or rank them.</li>
                <li><strong>A spam problem.</strong> Google's Duy Nguyen said that for algorithmic actions "it can take us several months to reevaluate your site again" (<a href="https://developers.google.com/search/help/office-hours/2022/december" target="_blank" rel="noopener noreferrer">Google SEO office hours, December 2022</a>). Bought links and copied content slow everything down.</li>
                <li><strong>A site move done badly.</strong> On moving a site, Illyes said it "can be anywhere between a few days and many months, and it's usually faster for higher quality sites" (<a href="https://developers.google.com/search/help/office-hours/2023/april" target="_blank" rel="noopener noreferrer">Google SEO office hours, April 2023</a>). Redirect every old address to its new one.</li>
            </ul>

            <h2 id="guarantees">Should you trust an SEO who promises results by a date?</h2>
            <p>No. Google's page on hiring an SEO is plain about it: "No one can guarantee a #1 ranking on Google", and "If they guarantee you that their changes will give you first place in search results, find someone else." It also warns about SEOs that "allege a 'special relationship' with Google, or advertise a 'priority submit' to Google" (<a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">Do you need an SEO?</a>). In our study of <Link to="/blogs/choose-seo-agency-india">37 Indian SEO agencies that sell abroad</Link>, 8 promised a ranking position or "guaranteed results". A fair answer to "how long will it take?" names what will be done each month and what you should be able to see, not a date for page one.</p>

            <h2 id="judge-progress">How do you tell whether SEO is working before rankings move?</h2>
            <p>Look at Search Console in this order. Each step usually shows up before the next one.</p>
            <ol>
                <li><strong>Indexed pages.</strong> The Page indexing report: are the pages you care about indexed?</li>
                <li><strong>Impressions.</strong> In the Performance report, how often your pages appear in results, whatever the position.</li>
                <li><strong>Searches without your name.</strong> Filter out your brand. New searches appearing here mean Google is testing your pages for new topics.</li>
                <li><strong>Average position.</strong> For the searches you want, is the position rising, even from 80 to 40?</li>
                <li><strong>Clicks, then enquiries and sales.</strong> These come last, once pages reach the first page or two.</li>
            </ol>
            <p>Compare whole weeks or months, not single days: Google says "The newest data can be preliminary" and may still change (<a href="https://support.google.com/webmasters/answer/7576553" target="_blank" rel="noopener noreferrer">Search Console Performance report help</a>). If you are paying for SEO, our guide to <Link to="/blogs/seo-cost-india">what SEO costs</Link> lists what a monthly fee should cover, and your report should show these five measures each month.</p>

            <h2 id="how-we-work">How we handle SEO timelines</h2>
            <p>Our <Link to="/services/seo-services">SEO service</Link> starts with an audit and runs month to month on a scope set in writing. Each monthly report shows the work done and the five measures above, and we do not promise a position or a date, for the reasons Google gives. If you want to know where your site stands first, our <Link to="/free-seo-audit">free SEO audit</Link> checks the technical basics that decide how fast Google can crawl and index it.</p>
        </>
    );
}
`;export{e as default};