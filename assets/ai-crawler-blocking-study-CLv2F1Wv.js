var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>Very few do. On 14 November 2026 we read the robots.txt files of 4,564 independent restaurants, cafes, dentists, law firms and hair salons in ten countries. Of the 4,482 sites that let Google's crawler in, 154 (3.4%) blocked at least one AI crawler, and 105 of those 154 (68%) were not written by the business or its web designer: they were the managed robots.txt that Cloudflare adds when a site owner switches it on. ChatGPT's training crawler, GPTBot, was blocked by 3.0% of those sites. ChatGPT's search crawler, OAI-SearchBot, was blocked by 0.3%, about 3 sites in 1,000.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>3.4% of the small business sites that let Google in blocked any of the 14 AI crawlers we checked. Each training crawler was blocked by 2.7% to 3.1% of them; each AI search crawler by 0.2% to 0.3%.</li>
                    <li>105 of the 154 sites that blocked an AI crawler (68%) used Cloudflare's managed robots.txt, which blocks training crawlers and leaves search crawlers alone.</li>
                    <li>38 sites (0.8%) blocked every crawler, Google's included, and 44 (1.0%) answered the robots.txt request with a server error.</li>
                    <li>935 sites (20.5%) had an llms.txt file. Most were made by the website platform or an SEO plugin: 322 on Wix, 202 on Shopify and 167 from Yoast, Rank Math or All in One SEO. Google says its search does not use the file.</li>
                    <li>139 sites (3.0%) carried a Content-Signal line, and 106 of those came from Cloudflare's managed file.</li>
                </ul>
            </Callout>

            <p>If you want the background first, our guide to <Link to="/blogs/optimize-content-for-llms">optimizing content for LLMs</Link> explains what each AI company says its crawlers do and what robots.txt can and cannot control.</p>

            <h2 id="how-we-did-it">How we did the study</h2>
            <p>We used the same method as our <Link to="/blogs/small-business-website-accessibility-study">study of 385 US small business websites</Link>. The sample came from <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>, the open map anyone can edit. In ten countries (the US, the UK, Canada, Australia, Ireland, New Zealand, Germany, the Netherlands, the UAE and Singapore) we asked for every restaurant, cafe, dentist, lawyer's office and hairdresser in the main cities that lists a website and carries no brand tag, which OpenStreetMap uses to mark chains. We dropped social media profiles and link pages, removed duplicate websites, and drew up to 120 sites at random for each country and industry, with a fixed seed so the draw can be repeated. Singapore and the UAE had fewer listed sites than that.</p>
            <p>That gave 5,144 websites. On 14 November 2026 we made two requests to each one, for <code>/robots.txt</code> and <code>/llms.txt</code>, and nothing else: no homepage, no forms, and a user agent that named us and this study rather than pretending to be a crawler. 4,564 sites answered at least one request, and every figure below is a share of those 4,564 unless it says otherwise.</p>
            <p>We read each robots.txt the way the standard says a crawler should, <a href="https://www.rfc-editor.org/rfc/rfc9309" target="_blank" rel="noopener noreferrer">RFC 9309</a>: a crawler follows the group that names it, falls back to the <code>*</code> group only when none does, and the longest matching rule wins. We used the open-source parser Protego for this. For each site we asked whether each crawler may fetch the homepage. Googlebot and Bingbot were our controls: a site that blocks them as well as the AI crawlers is blocking everything, not making a choice about AI.</p>
            <p>The limits matter. Robots.txt is a request, not a lock, and we only read what it asks for. A site can also block crawlers at its server or CDN, as Cloudflare does with its bot settings, with nothing in robots.txt, and our check cannot see that. We checked the homepage rule only. And with 219 to 559 sites per country, a difference of a point or two between countries is not meaningful.</p>

            <h2 id="headline">How many small business websites block AI crawlers?</h2>
            <p>About 3 in 100. 3,483 of the 4,564 sites (76%) had a robots.txt file and 1,037 (23%) had none, which allows every crawler. Of the 4,482 sites that let Googlebot in, 154 (3.4%) disallowed at least one of the 14 AI crawlers we checked. 139 of them (90%) named the crawler in their file rather than blocking it through a general rule.</p>
            <p>The split between training and search is the clearest result. The crawlers that collect content to train AI models were each blocked by roughly 3% of sites. The crawlers that fetch pages for AI search answers, and the ones that visit when a person asks a chatbot to read a page, were each blocked by well under half a percent.</p>
            <Chart
                type="bar"
                title="Sites that let Google in but block each AI crawler"
                unit="%"
                data={[
                    ['CCBot (Common Crawl)', 3.1],
                    ['GPTBot (OpenAI, training)', 3.0],
                    ['Bytespider (ByteDance)', 3.0],
                    ['Google-Extended (Gemini training)', 2.9],
                    ['meta-externalagent (Meta)', 2.9],
                    ['ClaudeBot (Anthropic, training)', 2.8],
                    ['Amazonbot (Amazon)', 2.8],
                    ['Applebot-Extended (Apple training)', 2.7],
                    ['ChatGPT-User (on request)', 0.4],
                    ['OAI-SearchBot (ChatGPT search)', 0.3],
                    ['PerplexityBot (Perplexity search)', 0.3],
                    ['Claude-SearchBot (Claude search)', 0.2],
                ]}
                source="N&D Co. study of 4,482 small business websites that allow Googlebot, 14 November 2026"
                note="Share of sites whose robots.txt disallows the crawler from the homepage under RFC 9309 rules. Claude-User and Perplexity-User were blocked by the same share as ChatGPT-User or less."
            />
            <p>That difference matters because the companies say the two kinds of crawler do different jobs. <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">OpenAI's crawler page</a> says disallowing GPTBot indicates a site's content should not be used to train its models, while sites that opt out of OAI-SearchBot will not be shown in ChatGPT search answers. <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" target="_blank" rel="noopener noreferrer">Anthropic draws the same line</a> between ClaudeBot and Claude-SearchBot. So almost every small business that blocks AI is saying "do not train on my site" and still letting AI search find it.</p>
            <p>Google-Extended is a token, not a separate crawler. Google's <a href="https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers" target="_blank" rel="noopener noreferrer">list of its crawlers</a> says it does not affect a site's inclusion in Google Search, and AI Overviews and AI Mode are part of Search. Blocking it, as 2.9% of sites did, keeps content out of Gemini's training and grounding, not out of Google's AI answers.</p>

            <h2 id="cloudflare">Why do most of the blocks come from Cloudflare?</h2>
            <p>Because Cloudflare writes them. 105 of the 154 sites that blocked an AI crawler had robots.txt files that start with Cloudflare's marker, <code># BEGIN Cloudflare Managed content</code>. <a href="https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/" target="_blank" rel="noopener noreferrer">Cloudflare's documentation</a> says it adds this managed file only when the site owner turns on its bot preference setting and sets one of its AI policies to block; otherwise a site's robots.txt is served unchanged. When it is on, Cloudflare puts its own rules above the site's own file: a <code>Content-signal</code> line saying the site allows search but not AI training, and a <code>Disallow: /</code> group for each of eight training crawlers (Amazonbot, Applebot-Extended, Bytespider, CCBot, ClaudeBot, Google-Extended, GPTBot and meta-externalagent).</p>
            <p>That explains the shape of our chart. All 106 Cloudflare-managed files we found blocked GPTBot, and none blocked OAI-SearchBot. Only 49 sites in the whole sample, about 1 in 90 of the sites that let Google in, blocked an AI crawler with rules that did not come from Cloudflare.</p>
            <div className="blog-table" role="region" aria-label="Who wrote the rules on sites that block AI crawlers" tabIndex={0}>
                <table>
                    <caption>Sites that let Google in but block an AI crawler, by where the robots.txt came from</caption>
                    <thead>
                        <tr>
                            <th scope="col">Source of the robots.txt</th>
                            <th scope="col">Sites</th>
                            <th scope="col">Share of the 154</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Cloudflare managed robots.txt</th><td>105</td><td>68%</td></tr>
                        <tr><th scope="row">WordPress site, rules added by hand or by a plugin</th><td>9</td><td>6%</td></tr>
                        <tr><th scope="row">Squarespace</th><td>1</td><td>1%</td></tr>
                        <tr><th scope="row">Any other file</th><td>39</td><td>25%</td></tr>
                        <tr><th scope="row">All</th><td>154</td><td>100%</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Cloudflare can also block AI crawlers at its network edge, before they reach the site, and that leaves nothing in robots.txt. Since July 2025 Cloudflare <a href="https://www.cloudflare.com/press-releases/2025/cloudflare-just-changed-how-ai-crawlers-scrape-the-internet-at-large/" target="_blank" rel="noopener noreferrer">asks every new domain whether it wants to allow AI crawlers</a>, and its <a href="https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/" target="_blank" rel="noopener noreferrer">AI crawler settings</a> can block them by request rather than by robots.txt. Sites blocked that way are not in our 3.4%, so the real share of small business sites that keep AI crawlers out is higher than robots.txt shows. If you use Cloudflare, check its AI crawler settings: they decide more than your robots.txt does.</p>

            <h2 id="by-country">Which countries block AI crawlers most?</h2>
            <p>The differences are small. Singapore had the highest share, 5.2% of sites that let Google in, and the Netherlands the lowest, 2.2%. With 219 to 559 sites per country, only the gap between those two ends is worth noting, and even that rests on a dozen or so sites each.</p>
            <Chart
                type="bar"
                title="Sites that let Google in but block any AI crawler, by country"
                unit="%"
                data={[
                    ['Singapore', 5.2],
                    ['New Zealand', 4.4],
                    ['UAE', 4.2],
                    ['Ireland', 4.1],
                    ['US', 3.5],
                    ['Australia', 3.4],
                    ['Canada', 3.3],
                    ['UK', 3.1],
                    ['Germany', 2.7],
                    ['Netherlands', 2.2],
                ]}
                source="N&D Co. study of 4,564 small business websites in ten countries, 14 November 2026"
                note="Sites per country: US 554, Germany 559, UK 551, Canada 545, Netherlands 516, Australia 486, Ireland 482, New Zealand 411, Singapore 241, UAE 219. Share of those that allow Googlebot."
            />
            <p>By industry the range was narrower still: cafes 4.0%, law firms 3.9%, hair salons 3.3%, dentists 3.1% and restaurants 2.9%. No kind of business stands out.</p>

            <h2 id="blocking-everything">Which sites block Google too?</h2>
            <p>A small group of sites shut out every crawler, often without meaning to. 38 sites (0.8%) had a robots.txt that disallowed Googlebot and Bingbot as well as every AI crawler. The simplest way to do that is two lines, <code>User-agent: *</code> and <code>Disallow: /</code>, a rule often used while a site is being built and easy to forget at launch. Such a site cannot have its pages crawled for Google Search at all.</p>
            <p>Another 44 sites (1.0%) answered the robots.txt request with a server error, a 5xx status. RFC 9309 says that when a robots.txt is unreachable because of a server error, crawlers <a href="https://www.rfc-editor.org/rfc/rfc9309#section-2.3.1.4" target="_blank" rel="noopener noreferrer">must assume complete disallow</a>. <a href="https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt" target="_blank" rel="noopener noreferrer">Google's robots.txt guide</a> says that for the first 12 hours of such errors Google stops crawling the site, and after that it uses the last good copy of the file it has for up to 30 days. A missing robots.txt is fine; a broken one is not. You can see how Google last fetched yours in Search Console's robots.txt report, which our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> covers.</p>

            <h2 id="llms-txt">How many small business sites have an llms.txt?</h2>
            <p>More than we expected: 935 of 4,564 (20.5%). llms.txt is a proposed file, described at <a href="https://llmstxt.org/" target="_blank" rel="noopener noreferrer">llmstxt.org</a>, that lists a site's main pages in plain text for AI tools. We counted a file only when it answered with a normal page that was not HTML and looked like an llms.txt (a Markdown title on the first line, or a first line that names the file), because many servers answer any unknown address with their homepage or a copy of robots.txt.</p>
            <p>Few of the 935 were written by the business. The platform or an SEO plugin made most of them:</p>
            <div className="blog-table" role="region" aria-label="Where small business llms.txt files come from" tabIndex={0}>
                <table>
                    <caption>Who made the 935 llms.txt files we found</caption>
                    <thead>
                        <tr>
                            <th scope="col">Made by</th>
                            <th scope="col">Files</th>
                            <th scope="col">How we could tell</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Wix</th><td>322</td><td>Wix robots.txt; 95% of Wix sites in the sample had one</td></tr>
                        <tr><th scope="row">Shopify</th><td>202</td><td>Opens with "# Agent Instructions"; 99% of Shopify sites had one</td></tr>
                        <tr><th scope="row">Yoast SEO</th><td>95</td><td>The plugin's name in the file</td></tr>
                        <tr><th scope="row">Rank Math</th><td>37</td><td>The plugin's name in the file</td></tr>
                        <tr><th scope="row">All in One SEO</th><td>35</td><td>The plugin's name in the file</td></tr>
                        <tr><th scope="row">Other WordPress sites</th><td>48</td><td>WordPress robots.txt, no plugin named</td></tr>
                        <tr><th scope="row">Squarespace</th><td>6</td><td>Squarespace robots.txt</td></tr>
                        <tr><th scope="row">No known maker</th><td>190</td><td>Written by hand or by a tool we could not identify</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Wix's help centre says it <a href="https://support.wix.com/en/article/understanding-your-sites-llms-txt-file" target="_blank" rel="noopener noreferrer">generates and maintains the llms.txt file automatically</a> for sites on a premium plan with their own domain, and owners can edit it or switch it off. Shopify's developer documentation says <a href="https://shopify.dev/docs/storefronts/themes/architecture/templates/agents-md-liquid" target="_blank" rel="noopener noreferrer">it manages an agents.md file for every store</a> and that /llms.txt mirrors it by default; merchants can replace it with their own. Only 6 of the 373 Squarespace sites (1.6%) had one, which is what a platform that does not make the file looks like. So the 20.5% says more about which website builders small businesses use than about what they chose to publish.</p>
            <p>Does it help? For Google, no: its <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">guide to AI features</a> says you do not need AI text files to appear in Google Search and that Google Search does not use them. We found no statement from OpenAI, Anthropic or Perplexity that their crawlers read it either. If your platform makes one for you, there is no reason to remove it, and no reason to pay anyone to write one.</p>
            <Chart
                type="bar"
                title="Sites with an llms.txt file, by country"
                unit="%"
                data={[
                    ['Singapore', 29.9],
                    ['Canada', 25.7],
                    ['UAE', 25.1],
                    ['Australia', 24.9],
                    ['UK', 23.6],
                    ['US', 23.6],
                    ['New Zealand', 18.7],
                    ['Ireland', 15.4],
                    ['Germany', 12.9],
                    ['Netherlands', 12.2],
                ]}
                source="N&D Co. study of 4,564 small business websites in ten countries, 14 November 2026"
                note="A file counted when /llms.txt answered with plain text that opened with a Markdown title or named the file. Most were made by the website platform or an SEO plugin, so the share follows which platforms are popular in each country."
            />

            <h2 id="content-signals">Do small businesses use Content Signals?</h2>
            <p>Hardly, and mostly not by choice. <a href="https://contentsignals.org/" target="_blank" rel="noopener noreferrer">Content Signals</a> are a line in robots.txt that says what the site allows its content to be used for: <code>search</code>, <code>ai-input</code> (answers built from the page in real time) and <code>ai-train</code>. 139 sites (3.0%) had a <code>Content-signal</code> line, and 106 of them were Cloudflare's managed file, which writes <code>search=yes, ai-train=no</code> for the site. None of the 3,483 files used <code>__usage_ai-training</code>, the training preference token that <a href="https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers" target="_blank" rel="noopener noreferrer">Google says it intends to support in early 2027</a> and <a href="https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/" target="_blank" rel="noopener noreferrer">Microsoft says it will honour from 1 February 2027</a>. Neither had started on the day we checked.</p>

            <h2 id="what-to-do">What should a small business do about AI crawlers?</h2>
            <p>Make two decisions, separately, and then check that your site says what you decided.</p>
            <ol>
                <li><strong>Do you want to appear in AI search answers?</strong> If yes, let <code>OAI-SearchBot</code>, <code>Claude-SearchBot</code> and <code>PerplexityBot</code> in, and keep letting Googlebot in, since Google's AI Overviews and AI Mode use its normal Search crawl. For a restaurant or a dentist trying to be found, there is little reason to say no.</li>
                <li><strong>Do you mind your pages being used to train AI models?</strong> If you do, disallow the training crawlers: <code>GPTBot</code>, <code>ClaudeBot</code>, <code>Google-Extended</code>, <code>Applebot-Extended</code>, <code>meta-externalagent</code>, <code>CCBot</code>, <code>Bytespider</code> and <code>Amazonbot</code>. This is what most of the blocking sites in our study did, and it does not take you out of AI search.</li>
                <li><strong>Check what your site actually says.</strong> Open <code>yourdomain.com/robots.txt</code> in a browser. If it shows <code>Disallow: /</code> under <code>User-agent: *</code> and you are not a site in progress, fix it today. If it shows Cloudflare's marker, the rules came from your Cloudflare settings, so change them there. If the address shows an error page with a 5xx code, ask whoever hosts your site to fix it.</li>
                <li><strong>Do not pay for an llms.txt.</strong> If your platform makes one, leave it. If it does not, it is optional, and Google says its search ignores it.</li>
            </ol>
            <p>Our <Link to="/free-seo-audit">free SEO audit</Link> checks robots.txt, whether pages are blocked from crawlers and how ready a site is for AI search, and emails the report as a PDF. For the rest of the basics, see our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link>.</p>

            <h2 id="data">The data</h2>
            <p>The rows for all 4,564 sites that answered are in <a href="/assets/data/ai-crawlers-2026.csv" download>a CSV file (ai-crawlers-2026.csv)</a>: country, industry, whether the site had a robots.txt (or a server error in its place), which platform made the file when we could tell, whether it carried a Content-Signal line, whether it had an llms.txt and who made it, and for each of the 16 crawlers whether the file names it and whether it allows the homepage. Sites are numbered, not named, and we do not share which number is which business. We plan to repeat the study each year with the same method, so the change can be measured as Google's and Microsoft's 2027 training controls arrive.</p>

            <h2 id="how-to-cite">How to cite this study</h2>
            <p>Please cite it as: N&D Co., "How many small business websites block AI crawlers? A study of 4,564 sites", November 2026, https://ndcompany.in/blogs/ai-crawler-blocking-study, with a link to this page. If you quote a single figure, give the base with it, for example "3.4% of 4,482 small business websites that allow Googlebot", and say that it counts robots.txt rules only, not blocks at the server or CDN.</p>

            <h2 id="how-we-can-help">How we can help</h2>
            <p>We are a brand and growth agency in Kolkata, India, working with clients in the US, the Netherlands, the UAE and elsewhere. Our <Link to="/services/seo-services">SEO services</Link> start with an audit that covers crawling and robots.txt, and we set up AI crawler rules to match what the business has decided, not a default. Agencies that resell SEO under their own name can order the same audit unbranded from our <Link to="/white-label/seo">white label SEO</Link> page.</p>
        </>
    );
}
`;export{e as default};