var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>Google's November 2026 core update started on 10 November 2026 and had not finished when we wrote this on 17 November. It applies to every country and language, and Google says the rollout may take up to two weeks. Google has given no advice specific to it and has not said what it changes. For most sites the right move now is to do nothing drastic: wait until Google marks the rollout complete, wait one more full week, then compare that week with the week before 10 November in Search Console. We will update this post when Google marks it complete.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>Google's dashboard showed no completion notice on 17 November, day 7. The three previous core updates in its history took 11 days 21 hours, 12 days 4 hours and 18 days 2 hours.</li>
                    <li>We read 51 pages about the update. 31 (61%) sell SEO, audits, recovery or a related tool, 30 (59%) carry advice or claims with no source, and none has data on which sites won or lost.</li>
                    <li>One of the 51 pages, a forum comment, links AI-written content to drops, with no data. Google's pages say quality matters, not how a page was made.</li>
                    <li>AI detectors misfire: one study found an average false-positive rate of 61.3% on essays by non-native English writers. Check facts, sources and first-hand content instead.</li>
                    <li>Published prices for a traffic-drop diagnosis in our sample run from $500 to $8,000 or more, and fixes are usually billed separately. Search Console costs nothing and answers the first question.</li>
                </ul>
            </Callout>

            <h2 id="what-google-said">What has Google said about the November 2026 core update?</h2>
            <p>Very little, and all of it on the <a href="https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc" target="_blank" rel="noopener noreferrer">Google Search Status Dashboard</a>, which we read on 17 November 2026. The incident opened at 10:06 US Pacific time on 10 November with one update: the core update "applies globally and to all languages" and the rollout "may take up to 2 weeks" to complete. It showed no end time, no "complete" label and no advice. Two weeks from the start is about 24 November. The <a href="https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history" target="_blank" rel="noopener noreferrer">ranking history on the same dashboard</a> shows how long recent core updates took:</p>
            <div className="blog-table" role="region" aria-label="Recent Google core updates and how long they took" tabIndex={0}>
                <table>
                    <caption>Core updates on Google's Search Status Dashboard, read 17 November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Core update</th>
                            <th scope="col">Started</th>
                            <th scope="col">Duration shown</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">November 2026</th><td>10 Nov 2026</td><td>Not reported yet (day 7)</td></tr>
                        <tr><th scope="row">May 2026</th><td>21 May 2026</td><td>11 days 21 hours</td></tr>
                        <tr><th scope="row">March 2026</th><td>27 Mar 2026</td><td>12 days 4 hours</td></tr>
                        <tr><th scope="row">December 2025</th><td>11 Dec 2025</td><td>18 days 2 hours</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Trade press reports that Google's Search Central account on LinkedIn called this a regular update that improves how relevant content shows up for all types of sites. We did not open that post, and we found no statement about this update on any Google documentation page or the Search Central blog, so treat that line as reported, not confirmed.</p>
            <p>Google's general position is on its <a href="https://developers.google.com/search/docs/appearance/core-updates" target="_blank" rel="noopener noreferrer">core updates page</a>. Core updates are significant, broad changes to its search systems, made several times a year. They do not target specific sites or pages, and most sites may not notice one. A site that drops has not necessarily done anything wrong, because other pages may have been reassessed as better answers. The "helpful content" system has been part of the core ranking systems <a href="https://developers.google.com/search/docs/appearance/ranking-systems-guide" target="_blank" rel="noopener noreferrer">since March 2024</a>, so there is no separate helpful content update to recover from.</p>

            <h2 id="what-others-say">What is everyone else saying?</h2>
            <p>A lot, and mostly the same few lines. On 17 November we read 51 pages written about the update in its first week and recorded what each says, where it gets it from and whether it sells anything. It is a small, early sample from day 7 of the rollout, not the whole web. We kept source types apart, because a news report, a sales page and a forum post are different kinds of evidence.</p>
            <div className="blog-table" role="region" aria-label="The 51 pages we read about the November 2026 core update, by source type" tabIndex={0}>
                <table>
                    <caption>51 pages about the update, read 17 November 2026, by source type</caption>
                    <thead>
                        <tr>
                            <th scope="col">Source type</th>
                            <th scope="col">Pages</th>
                            <th scope="col">Cite Google</th>
                            <th scope="col">Cite data</th>
                            <th scope="col">Sell something</th>
                            <th scope="col">Unsupported advice</th>
                            <th scope="col">Blame AI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Sales blogs (agencies, tool vendors, hosts)</th><td>28</td><td>21</td><td>13</td><td>27</td><td>22</td><td>0</td></tr>
                        <tr><th scope="row">News</th><td>17</td><td>13</td><td>8</td><td>2</td><td>7</td><td>0</td></tr>
                        <tr><th scope="row">Community reports</th><td>3</td><td>1</td><td>3</td><td>0</td><td>0</td><td>1</td></tr>
                        <tr><th scope="row">Practitioners with data</th><td>2</td><td>1</td><td>2</td><td>1</td><td>1</td><td>0</td></tr>
                        <tr><th scope="row">Primary data (SISTRIX)</th><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
                        <tr><th scope="row">All</th><td>51</td><td>37</td><td>27</td><td>31</td><td>30</td><td>1</td></tr>
                    </tbody>
                </table>
            </div>
            <p>"No" in our counts means the page did not say it, and "cite data" includes Google's own rollout dates. Here is what stands out.</p>
            <ul>
                <li>Most get the facts right. 37 of 51 (73%) cite a Google source, usually the dashboard, and repeat the start date, the two weeks and the lack of a named target correctly.</li>
                <li>Few bring numbers of their own. Only 15 (29%) give third-party or original numbers beyond Google's dates, and seven of those 15 repeat the same March 2026 rank-tracking figures from one news article. Those describe an earlier update.</li>
                <li>Six in ten sell something. Many pages we counted as neutral still end with a call to action.</li>
                <li>The weak spot is attribution. 22 pages attribute advice or timings to Google without a link, and 11 give a recovery time ("months", "Q1 2027") with no source.</li>
                <li>The advice is mostly sound. 35 of 51 say not to rewrite or delete pages during the rollout, and 19 say outright to wait for it to end plus a week. No page recommends adding words, refreshing dates, disavowing links or removing AI content.</li>
                <li>No page flatly contradicts Google, but some go past it. One says the two weeks are an estimate, not a limit. Another says the update especially affects content made to rank, which Google has not said. A third credits a three to six month recovery window to a Google engineer with no link.</li>
                <li>Nobody has winners and losers data. Pages that name exposed groups (shops, affiliate sites, publishers) are guessing or describing earlier updates, and we found no study of this update from Amsive, SISTRIX, SE Ranking, Semrush, seoClarity or Similarweb on day 7.</li>
            </ul>
            <p>The community reports are few and mixed. On a <a href="https://www.webmasterworld.com/google/5134524.htm" target="_blank" rel="noopener noreferrer">WebmasterWorld thread</a>, one owner of a shop and a news site reported a large drop on 10 November, while another reported a minor uptick and a travel site saw better traffic but poor conversions. Search Engine Roundtable's <a href="https://www.seroundtable.com/google-november-2026-core-update-ranking-volatility-42543.html" target="_blank" rel="noopener noreferrer">16 November report</a> quotes commenters at both ends, from a 10% weekend gain to a fall of more than 20% week over week.</p>

            <h3 id="volatility">What do the volatility trackers show?</h3>
            <p>Trackers such as Semrush Sensor and SISTRIX measure how much rankings move, not who won. Their numbers were high before the announcement: in Germany, Semrush Sensor sat at 9.3 to 9.5 out of 10 every day from 27 October, two weeks before Google's notice, and scales differ from tool to tool. We give the numbers as published.</p>
            <div className="blog-table" role="region" aria-label="Volatility readings published during the November 2026 core update" tabIndex={0}>
                <table>
                    <caption>Volatility readings as published, with the page each came from</caption>
                    <thead>
                        <tr>
                            <th scope="col">Tool and market</th>
                            <th scope="col">Reading</th>
                            <th scope="col">Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Semrush Sensor, Germany desktop</th><td>9.4, with 9.3 to 9.5 every day since 27 Oct</td><td><a href="https://www.seo-kreativ.de/en/blog/google-november-2026-core-update/" target="_blank" rel="noopener noreferrer">seo-kreativ.de</a></td></tr>
                        <tr><th scope="row">SISTRIX Update Radar, Germany mobile</th><td>13.38 on 9 Nov, 6.16 on 10 Nov (evening)</td><td><a href="https://www.seo-kreativ.de/en/blog/google-november-2026-core-update/" target="_blank" rel="noopener noreferrer">seo-kreativ.de</a></td></tr>
                        <tr><th scope="row">Semrush Sensor, US desktop, 11 Nov</th><td>24 of 25 categories above their monthly average; all categories 9.4 against 6.6</td><td><a href="https://www.got.media/googles-november-2026-core-update-is-rolling-out/" target="_blank" rel="noopener noreferrer">Got.Media</a></td></tr>
                        <tr><th scope="row">Four-tool consensus, 17 Nov</th><td>5.7 out of 10, with Sensor at 9.4 and MozCast at 4.6</td><td><a href="https://www.vijaychauhanseo.com/tools/google-volatility" target="_blank" rel="noopener noreferrer">a volatility aggregator</a></td></tr>
                    </tbody>
                </table>
            </div>
            <p>Other things muddy any comparison this month. Google confirmed a logging error that lowered impressions in Search Console's Generative AI report for 9 to 11 November, <a href="https://www.seroundtable.com/google-generative-ai-performance-report-data-bug-42527.html" target="_blank" rel="noopener noreferrer">as Search Engine Roundtable reported</a>. Forum posters say Google Discover traffic has been down since 1 November, before the update. Black Friday falls on 27 November 2026, inside the week Google tells you to wait.</p>

            <h2 id="did-my-site-drop">Did my site drop because of the update?</h2>
            <p>You cannot tell yet, and a drop on or after 10 November is not enough to blame the update. Google's page on <a href="https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops" target="_blank" rel="noopener noreferrer">debugging drops in search traffic</a> lists other causes: server errors, a stray noindex tag or robots.txt block, a security problem, a manual action, seasonality and a site move. Rule those out first, then compare.</p>
            <ol>
                <li>In Search Console, look for data anomalies and check the Manual actions and Security issues reports. Our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> covers the common indexing faults.</li>
                <li>Set the date range to the last 16 months. If the same dip appears every year at this time, it is seasonal. Compare with the same weeks last year too, because the wait overlaps Black Friday.</li>
                <li>Wait for the rollout to be marked complete, then at least a full week. Compare that week with the week before 10 November.</li>
                <li>Use Compare, then sort Pages and Queries by the change in clicks. Break it down by country, device and search type, because Web, Images, Video and News move separately.</li>
                <li>Read impressions, clicks and average position together. If impressions and clicks both fell, look at your content and site. If only clicks fell, look at titles, snippets and rich results.</li>
                <li>Judge the size of the move. Google's own examples treat a page falling from position 2 to 4 as small, and one falling from 4 to 29 as worth a deeper look.</li>
            </ol>

            <h3 id="our-search-console">What did our own Search Console show?</h3>
            <p>Our own site is a worked example, and it shows why position alone misleads. ndcompany.in is young, live since 23 October 2026, so its numbers are small and say nothing about other sites. We also published new pages on the same days, with several deploys on 14 November, so we cannot credit the rise below to the update. It is correlation, not cause, and an early look because the rollout had not ended.</p>
            <Chart
                type="column"
                title="Daily impressions of ndcompany.in in Google web search, 27 October to 15 November 2026"
                data={[
                    ['27 Oct', 32], ['28', 22], ['29', 49], ['30', 32], ['31', 42],
                    ['1 Nov', 33], ['2', 46], ['3', 53], ['4', 48], ['5', 31],
                    ['6', 38], ['7', 37], ['8', 14], ['9', 29], ['10', 37],
                    ['11', 76], ['12', 96], ['13', 131], ['14', 261], ['15', 227],
                ]}
                source="Our own Search Console, sc-domain:ndcompany.in, web search, read 17 November 2026"
                note="The update began at 10:06 Pacific on 10 November. New pages went live on the same days, so the rise is not evidence of an effect of the update."
            />
            <div className="blog-table" role="region" aria-label="Our Search Console totals before and during the rollout" tabIndex={0}>
                <table>
                    <caption>ndcompany.in in Google web search, before and during the rollout</caption>
                    <thead>
                        <tr>
                            <th scope="col">Period</th>
                            <th scope="col">Impressions</th>
                            <th scope="col">Clicks</th>
                            <th scope="col">Daily average position</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">27 Oct to 9 Nov (14 days)</th><td>506, about 36 a day</td><td>18</td><td>13.8 to 41.9</td></tr>
                        <tr><th scope="row">11 to 15 Nov (5 days)</th><td>791, about 158 a day</td><td>6</td><td>56.1 to 64.5</td></tr>
                    </tbody>
                </table>
            </div>
            <p>We left out 10 November, the day the rollout began. Impressions rose about fourfold while clicks stayed near one a day, and the average position fell from the 14 to 42 range to 56 to 65. That is not a ranking loss. Google began showing more of our pages for more searches, mostly low on the results page, which pulls the average down while impressions climb. Looking at position alone, we would have called it a drop. This is why Google's advice is to read impressions, clicks and position together, per page and per query.</p>

            <h2 id="what-to-do">What should you do, and what should you not do?</h2>
            <p>Almost everything below comes from Google's own pages, linked in each item.</p>
            <h3 id="do">Do</h3>
            <ul>
                <li>Wait for the rollout to be marked finished, then a full week, before judging. Leave pages that perform well alone, and treat a small move as normal (<a href="https://developers.google.com/search/docs/appearance/core-updates" target="_blank" rel="noopener noreferrer">core updates page</a>).</li>
                <li>For a large, sustained drop, review the whole site against Google's questions on original information, value compared with other results, sourcing and expertise, ideally with people not tied to the site (<a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">helpful content guide</a>).</li>
                <li>Improve content in ways that last: add original information, restructure for readability, and show who wrote a page and why.</li>
                <li>Expect months, not days. Google says its systems may need several months to confirm a site is helpful, and the next core update may be when it shows.</li>
            </ul>
            <h3 id="dont">Do not</h3>
            <ul>
                <li>Do not make quick-fix changes, such as removing page elements for a supposed SEO effect, and do not delete content as a first move. Google calls deletion a last resort for content that cannot be salvaged.</li>
                <li>Do not change dates to look fresh, or add or remove large amounts of text to look fresh. The helpful content guide lists both as warning signs.</li>
                <li>Do not write to a word count. Google says it has no preferred length, and its <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">AI features guide</a> says there is no ideal page length.</li>
                <li>Do not publish many pages with nothing new in them, whoever or whatever wrote them. That is what the <a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener noreferrer">spam policy on scaled content abuse</a> describes.</li>
                <li>Do not join link schemes. Google's <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">"Do you need an SEO?"</a> page lists them as a red flag.</li>
                <li>Do not rewrite for "AI search" on a third-party claim. Google's AI features guide says optimizing for it is still SEO and that llms.txt and special markup are not needed. Our guide to <Link to="/blogs/optimize-content-for-llms">optimizing content for LLMs</Link> and our <Link to="/blogs/ai-crawler-blocking-study">study of AI crawler blocking</Link> cover that side.</li>
            </ul>
            <p>Google also says no one can promise a change will have an effect: positions are dynamic and traffic can rise or fall whatever you do.</p>

            <h2 id="ai-content">Is AI content the reason sites dropped?</h2>
            <p>Nothing we read shows it. Of the 51 pages, 14 mention AI content, and five of them say outright that the update is not known to target it. The only link is a comment on <a href="https://www.seroundtable.com/google-november-2026-core-update-ranking-volatility-42543.html" target="_blank" rel="noopener noreferrer">Search Engine Roundtable</a> that two domains which scaled up AI-generated content were dropping. No loss figures were shown, so we count it as an anecdote.</p>
            <p>Google's position is older and clearer. Its <a href="https://developers.google.com/search/blog/2023/02/google-search-and-ai-content" target="_blank" rel="noopener noreferrer">2023 guidance on AI content</a> says it focuses on the quality of content, not how it is produced. AI-written content gets no special advantage or penalty, but generating content mainly to manipulate rankings breaks the spam policies. The <a href="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content" target="_blank" rel="noopener noreferrer">generative AI guide</a> adds that you should fact-check AI output, titles, descriptions and alt text included.</p>
            <p>Raters are told the same. The <a href="https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf" target="_blank" rel="noopener noreferrer">Search Quality Rater Guidelines</a> (the latest public version we found is dated 11 September 2025) say that using generative AI tools alone does not decide a page's quality rating, and that pages made mainly to benefit the site owner are rated lowest however they were made. They also say no single rating directly changes how a page appears in Search. So the useful question for your own pages is whether they are accurate, original and useful to the reader.</p>

            <h2 id="check-for-ai">How do you check writing for AI?</h2>
            <p>Not with a detector score. Detectors misfire in both directions, and the research is consistent about it.</p>
            <div className="blog-table" role="region" aria-label="What research says about AI text detectors" tabIndex={0}>
                <table>
                    <caption>What studies and vendors report about AI detectors</caption>
                    <thead>
                        <tr>
                            <th scope="col">Source</th>
                            <th scope="col">What it found</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row"><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10382961/" target="_blank" rel="noopener noreferrer">Liang et al., 2023</a></th><td>An average 61.3% of 91 essays by non-native English writers were flagged as AI, and 19.8% were flagged by every detector tested. On essays by US eighth graders the detectors were near-perfect.</td></tr>
                        <tr><th scope="row"><a href="https://arxiv.org/abs/2306.15666" target="_blank" rel="noopener noreferrer">Weber-Wulff et al., 2023</a></th><td>12 public tools and 2 commercial systems were "neither accurate nor reliable". They mostly labelled text as human, and disguising AI text made them worse.</td></tr>
                        <tr><th scope="row"><a href="https://www.turnitin.ca/blog/understanding-the-false-positive-rate-for-sentences-of-our-ai-writing-detection-capability" target="_blank" rel="noopener noreferrer">Turnitin, 2023</a></th><td>Its own sentence-level false-positive rate was around 4%, and 54% of wrongly flagged sentences sat next to real AI writing. It says to use highlights to start a conversation, not to draw a conclusion.</td></tr>
                        <tr><th scope="row"><a href="https://arxiv.org/abs/2608.11256" target="_blank" rel="noopener noreferrer">Karr et al., 2026 preprint</a></th><td>Published abstracts from 2023 to 2025, unedited, were flagged 9% to 15% of the time, lightly AI-edited ones 38% to 80%, and AI rewrites passed through a "humanizer" tool under 4%. Not yet peer reviewed.</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Three of these sources date from 2023, so they show a pattern of bias and error, not today's exact accuracy, and the 2026 preprint finds the same pattern. People do better than the tools in one study: in <a href="https://arxiv.org/abs/2501.15654" target="_blank" rel="noopener noreferrer">a 2025 ACL paper</a>, a majority vote of five annotators who often use AI tools misclassified 1 of 300 articles, beating most detectors. That took careful, experienced readers.</p>
            <p>Watermarks do not close the gap. Google DeepMind's SynthID text watermark, described in a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11499265/" target="_blank" rel="noopener noreferrer">2024 Nature paper</a>, marks text from its own models, and its authors list limits: providers must cooperate, and stealing, spoofing, scrubbing or paraphrasing can weaken it. DeepMind's <a href="https://deepmind.google/discover/blog/watermarking-ai-generated-text-and-video-with-synthid/" target="_blank" rel="noopener noreferrer">own post</a> calls it not a silver bullet. As we read it, no public tool checks any page for a watermark from every AI model.</p>
            <p>Wikipedia's editors keep a <a href="https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing" target="_blank" rel="noopener noreferrer">list of signs of AI writing</a> and warn that the signs are descriptive, not proof. With that in mind, this is the review we run on a page before it goes live:</p>
            <ol>
                <li>Check every number, date, price, law, tool feature and quote against its primary source. Fix or delete anything you cannot source.</li>
                <li>Open every link. Dead links, a reference that resolves to a different paper, or a chatbot's tracking tag in a URL are warning signs.</li>
                <li>Look for something only you could have written: your own project, a result you can show, a price you really quoted. If you could swap in a competitor's name and nothing changes, the page is generic.</li>
                <li>Make the first paragraph answer the title's question, and cut padding such as inflated importance and vague summaries.</li>
                <li>Compare it with the top results for the same query. The same headings in the same order, with nothing new, is the pattern the scaled content policy describes.</li>
                <li>Put a named person's byline on it, and make sure that person can defend every paragraph.</li>
            </ol>
            <p>If you still use a detector, treat a high score as a reason to re-read, never as proof. Do not accuse a writer on a score alone: Liang et al. found non-native English flagged most often.</p>

            <h2 id="cost">What does it cost to respond?</h2>
            <p>Less than most offers suggest, if you start with free data. Search Console is free to use and answers the first question: which pages and queries changed, and by how much. Paid tools help with tracking. These are the monthly prices on each vendor's pricing page on 17 November 2026, in the currency shown (Semrush, Ahrefs and SE Ranking show a bare dollar sign).</p>
            <div className="blog-table" role="region" aria-label="Monthly prices of SEO tools, read 17 November 2026" tabIndex={0}>
                <table>
                    <caption>SEO tool prices on the vendors' pricing pages, 17 November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Tool and plans</th>
                            <th scope="col">Monthly</th>
                            <th scope="col">Billed annually, per month</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row"><a href="https://www.semrush.com/prices/" target="_blank" rel="noopener noreferrer">Semrush</a> SEO / Starter / Pro+</th><td>$139 / $199 / $299</td><td>$117.33 / $165.17 / $248.17</td></tr>
                        <tr><th scope="row"><a href="https://ahrefs.com/pricing" target="_blank" rel="noopener noreferrer">Ahrefs</a> Starter / Lite / Standard / Advanced</th><td>$29 / $129 / $249 / $449, excluding tax</td><td>Page says up to 17% saved</td></tr>
                        <tr><th scope="row"><a href="https://www.sistrix.com/pricing/" target="_blank" rel="noopener noreferrer">SISTRIX</a> Start / Plus / Professional / Premium</th><td>EUR 119 / 239 / 419 / 799, plus taxes</td><td>Monthly cancellable</td></tr>
                        <tr><th scope="row"><a href="https://seranking.com/subscription.html" target="_blank" rel="noopener noreferrer">SE Ranking</a> Core / Growth</th><td>$129 / $279</td><td>$103.20 / $223.20</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Paid diagnosis is a different order of cost. We read the published prices of 38 providers that list one on their own pages, found by search. It is a sample of the market, not the market, and we are not naming any provider. For one-off audits and recovery diagnostics, we took each provider's lowest published price for its headline audit and the median per market:</p>
            <div className="blog-table" role="region" aria-label="Published one-off audit and recovery diagnostic prices by country" tabIndex={0}>
                <table>
                    <caption>One-off audit or recovery diagnostic: lowest published price per provider, by market</caption>
                    <thead>
                        <tr>
                            <th scope="col">Market</th>
                            <th scope="col">Providers</th>
                            <th scope="col">Entry prices, low to high</th>
                            <th scope="col">Median</th>
                            <th scope="col">Highest published</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">United States</th><td>8</td><td>$99 to $49,000</td><td>$2,375 ($750 without the one $49,000 package)</td><td>$11,250 for a plain audit of 3,000 URLs</td></tr>
                        <tr><th scope="row">United Kingdom</th><td>6</td><td>GBP 200 to 3,499</td><td>GBP 1,975</td><td>GBP 7,500 and up</td></tr>
                        <tr><th scope="row">Australia</th><td>3</td><td>AUD 810 to 3,000</td><td>AUD 1,500</td><td>AUD 10,800</td></tr>
                        <tr><th scope="row">United Arab Emirates</th><td>1</td><td>AED 900</td><td>AED 900 (one provider)</td><td>Not published</td></tr>
                        <tr><th scope="row">Netherlands</th><td>4</td><td>EUR 497 to 599 for a full audit</td><td>EUR 499</td><td>EUR 1,500 for about 500 pages</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Read these with care. Many pages show a dollar sign with no currency code, which we took as the market's own dollar. Some Australian and UK prices exclude GST or VAT, and some Dutch pages do not say whether btw is included. Several "from" prices are a floor, not what a mid-sized site pays. In the UAE, six more providers sell monthly SEO at AED 2,000 to 15,000 with an audit inside and no separate audit price.</p>
            <p>Only four providers publish a price for a named traffic-drop or recovery service. Those prices run from $500 for a short report to $8,000 or more for a full audit, and one UK recovery retainer starts at GBP 3,000 a month. The pages explain the gap only by depth and follow-up: the cheaper report covers a few URLs and has no call. Implementation is almost always billed separately, so settle whether you are buying a report, a call or the fixes before you compare prices.</p>

            <h2 id="judge-an-offer">How do you judge a recovery offer?</h2>
            <p>Start with what it promises. Of the 38 providers with a published price, one lists "100% Recovery Success" as a feature of every tier, with no terms or refund policy on the page. We are not naming it. One offers a 30-day refund on the report only, not on rankings. Eight say outright that they do not guarantee results, one says refunds are not available, and 27 say nothing either way.</p>
            <p>Google's <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">"Do you need an SEO?" page</a> says no one can guarantee a number one ranking on Google, and lists as red flags a claimed special relationship with Google, secrecy about methods and unsolicited emails. The US FTC's <a href="https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business" target="_blank" rel="noopener noreferrer">small business advertising guide</a> says advertisers need proof before an ad runs, and that a money-back guarantee is no substitute for it (a general advertising rule, not one written for SEO). In the UK, the ASA and CAP's <a href="https://www.asa.org.uk/advice-online/guarantees-and-warranties.html" target="_blank" rel="noopener noreferrer">guidance on guarantees</a> says marketers who cannot guarantee a result should be careful not to imply they can. We did not check the rules in the Netherlands, the UAE or Australia, so ask a local lawyer if a promise matters to your decision.</p>
            <p>Questions to ask before you pay anyone:</p>
            <ol>
                <li>What exactly is delivered: a report, a call, fixes, monitoring? Is implementation in the price?</li>
                <li>What sets the price: number of URLs, site size, depth of review? A flat price with no stated limit usually hides one.</li>
                <li>Can you show before-and-after work for a site like mine, and how long recovery took? Ask about time frames, because recovery can wait for the next core update.</li>
                <li>What access do you need? Google's advice is read-only Search Console access for an audit, not write access.</li>
                <li>What are the refund and cancellation terms, in writing, and what do I keep: the report and the data?</li>
            </ol>
            <p>Before you spend, do the free first pass from the section above. Then you can judge whether an audit answers a question you still have.</p>

            <h2 id="how-we-did-this-study">How we did this study</h2>
            <p>We read everything on 17 November 2026, the seventh day of the rollout, using web search and automated page fetching. For what Google says, we read Google's own pages: the dashboard, the core updates page, the helpful content guide, the spam policies, the AI guides, the debugging page, the rater guidelines and the "Do you need an SEO?" page.</p>
            <p>For what others say, we read 51 distinct pages. The search tool kept returning the same 25 to 30 pages for every query, so 51 is what the first week gave us. We sorted them into 28 sales blogs (agencies, tool vendors and hosts), 17 news pages, 3 community reports, 2 practitioners with data and 1 page of primary data, and recorded each page's claims, advice, sources and whether its site sells SEO, audits, recovery, a related tool or course, or runs an agency directory.</p>
            <p>The limits are real. Our research tools could not read Reddit or X, so community evidence is limited to one WebmasterWorld thread and comments quoted by Search Engine Roundtable. More than a dozen pages refused our fetch or returned nothing, and we did not count them. We set aside eight pages about another update or year. No study of this update's winners and losers existed yet. The cost figures come from prices on providers' own pages on the same date; where a page refused our fetch we left the price out and estimated nothing. We did not sign up, log in or submit a form anywhere.</p>

            <h2 id="how-nd-co-works">How N&D Co. works</h2>
            <p>We are an agency based in India that works with clients abroad. If you want a second pair of eyes on your site, our <Link to="/free-seo-audit">free SEO audit</Link> sends you a PDF report on your site, and <Link to="/blogs/free-seo-audit-how-it-works">how the audit works</Link> explains what it checks. Our <Link to="/services/seo-services">SEO services</Link> page describes the ongoing work, and agencies can read how our <Link to="/white-label/seo">white-label SEO</Link> works. We do not promise rankings or recovery, because nobody can. We will update this post when Google marks the rollout complete, and add our own Search Console numbers for the comparison week Google recommends.</p>
        </>
    );
}
`;export{e as default};