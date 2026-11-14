var e=`import { Link } from 'react-router-dom';\r
import { Callout } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>To optimize content for LLMs, do what you would do for search, then check three things the AI products add. Make sure the search crawler behind each product can fetch your pages, answer the question near the top of the page in text that sits in the HTML, and say something other pages don't, under a named author and with real dates. Google states that <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">optimizing for generative AI search is still SEO</a>. Nobody outside these companies knows exactly how an answer picks its sources, so this guide sticks to what each one says in its own documentation.</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>Google says a page must be <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">indexed and eligible to be shown with a snippet</a> to appear in AI Overviews or AI Mode, and that there are no additional technical requirements.</li>\r
                    <li>OpenAI, Anthropic and Perplexity each run a search crawler separate from the crawler they describe as collecting training data. You can allow one and block the other.</li>\r
                    <li>Google-Extended <a href="https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers" target="_blank" rel="noopener noreferrer">does not affect inclusion or ranking in Google Search</a>.</li>\r
                    <li>Google says you don't need an llms.txt file, special markup or content cut into small pieces to appear in Google Search.</li>\r
                    <li>Google's Search Console has a report for <a href="https://support.google.com/webmasters/answer/16984139" target="_blank" rel="noopener noreferrer">impressions in generative AI features</a>.</li>\r
                </ul>\r
            </Callout>\r
\r
            <h2 id="is-it-still-seo">Is optimizing for LLMs different from SEO?</h2>\r
            <p>Mostly not, according to the companies that run the search products. Google's guide says that optimizing for generative AI search is optimizing for the search experience. Its list of things to do is familiar: create content that is not a copy of what everyone else says, keep a clear technical structure, and keep local business and shop details accurate.</p>\r
            <p>The same guide has a "what you don't need to do" list. It says you don't need new machine readable files, AI text files, special markup or Markdown to appear in Google Search, no requirement to break content into tiny pieces, no need to write in a specific way just for generative AI search, and that seeking inauthentic mentions across the web is not as helpful as it might seem.</p>\r
            <p>That does not mean nothing is new. ChatGPT, Claude and Perplexity each use their own crawlers, with their own robots.txt names. If a crawler is blocked by mistake, the product has nothing to show. That part is a technical check, and it is the first thing to do.</p>\r
\r
            <h2 id="indexed-first">Why does being crawled and indexed come first?</h2>\r
            <p>Each company below describes a search crawler that fetches pages for its product. Google says its AI features need a page that is indexed and eligible to show in Google Search with a snippet. It also says both features may use a technique called query fan-out, which issues several related searches across subtopics and data sources, so one question can pull in pages for several narrower searches.</p>\r
            <p>OpenAI says OAI-SearchBot is used to surface websites in ChatGPT's search features, and that sites opted out of it will not be shown in ChatGPT search answers. Perplexity says PerplexityBot is designed to surface and link websites in Perplexity's search results. Anthropic says that blocking Claude-SearchBot stops content being indexed for search and may reduce visibility and accuracy in search responses.</p>\r
            <p>So the first job is the one in our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link>: robots.txt blocks nothing important, pages return a normal 200 status, and the pages you want shown are indexed. If you have never checked, our <Link to="/blogs/free-seo-audit-how-it-works">free SEO audit</Link> covers these basics, and <Link to="/tools/rankguru">RankGuru</Link> checks a single page's on-page basics for free. Our <Link to="/blogs/kolkata-small-business-websites">study of Kolkata small business websites</Link> shows how often even those basics are missing.</p>\r
\r
            <h2 id="which-crawlers">Which AI crawlers are there, and what does each one do?</h2>\r
            <p>Each company publishes more than one crawler, and the purposes differ. This table lists what each says in its own documentation.</p>\r
            <div className="blog-table" role="region" aria-label="AI crawlers and what each company says they do" tabIndex={0}>\r
                <table>\r
                    <caption>Crawlers named by Google, OpenAI, Anthropic and Perplexity, with their stated purpose and robots.txt token</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Company</th>\r
                            <th scope="col">Crawler</th>\r
                            <th scope="col">What the company says it does</th>\r
                            <th scope="col">robots.txt token</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">Google</th><td>Googlebot</td><td>Google's Search crawler. A page must be indexed in Google Search to appear in AI Overviews and AI Mode</td><td><code>Googlebot</code></td></tr>\r
                        <tr><th scope="row">Google</th><td>Google-Extended</td><td>A standalone token that manages whether content Google crawls may be used for AI training and grounding. It has no separate user agent</td><td><code>Google-Extended</code></td></tr>\r
                        <tr><th scope="row">OpenAI</th><td>OAI-SearchBot</td><td>Surfaces sites in ChatGPT's search features</td><td><code>OAI-SearchBot</code></td></tr>\r
                        <tr><th scope="row">OpenAI</th><td>GPTBot</td><td>Makes OpenAI's generative AI foundation models more useful and safe</td><td><code>GPTBot</code></td></tr>\r
                        <tr><th scope="row">OpenAI</th><td>ChatGPT-User</td><td>Visits pages for certain actions a user starts in ChatGPT. OpenAI says robots.txt rules may not apply</td><td>None listed</td></tr>\r
                        <tr><th scope="row">Anthropic</th><td>Claude-SearchBot</td><td>Crawls the web to improve search result quality</td><td><code>Claude-SearchBot</code></td></tr>\r
                        <tr><th scope="row">Anthropic</th><td>ClaudeBot</td><td>Collects web content that could contribute to model training</td><td><code>ClaudeBot</code></td></tr>\r
                        <tr><th scope="row">Anthropic</th><td>Claude-User</td><td>Visits a site when a Claude user asks a question that needs web retrieval</td><td><code>Claude-User</code></td></tr>\r
                        <tr><th scope="row">Perplexity</th><td>PerplexityBot</td><td>Surfaces and links websites in Perplexity's search results. Perplexity says it is not used to crawl content for AI foundation models</td><td><code>PerplexityBot</code></td></tr>\r
                        <tr><th scope="row">Perplexity</th><td>Perplexity-User</td><td>Supports user actions in Perplexity. Perplexity says it generally ignores robots.txt because a user asked for the visit</td><td><code>Perplexity-User</code></td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Sources: Google's <a href="https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers" target="_blank" rel="noopener noreferrer">crawler documentation</a>, OpenAI's <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">bots page</a>, Anthropic's <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" target="_blank" rel="noopener noreferrer">crawler help article</a> and Perplexity's <a href="https://docs.perplexity.ai/guides/bots" target="_blank" rel="noopener noreferrer">bots guide</a>. Crawlers and names change, so check those pages before you edit your file.</p>\r
\r
            <h2 id="robots-txt-choices">What should robots.txt say about AI crawlers?</h2>\r
            <p>That is a business decision, and the documents give you the pieces for it. OpenAI says each of its settings is independent of the others, so a site can allow OAI-SearchBot and disallow GPTBot. It also says a change can take about 24 hours to take effect in its search systems. Disallowing GPTBot, OpenAI says, indicates that a site's content should not be used in training its generative AI foundation models. Anthropic describes the same split: blocking ClaudeBot signals that future content should be left out of training datasets.</p>\r
            <p>The practical choice is between two positions:</p>\r
            <ul>\r
                <li><strong>Allow the search crawlers.</strong> Allow <code>OAI-SearchBot</code>, <code>Claude-SearchBot</code> and <code>PerplexityBot</code> so your pages can be found and linked in those products. Blocking them has the effects the companies describe above.</li>\r
                <li><strong>Decide on the training crawlers separately.</strong> Disallow <code>GPTBot</code> and <code>ClaudeBot</code> if you don't want your content used for training. Each company says this affects training, not its search crawler.</li>\r
            </ul>\r
            <p>Google-Extended works a little differently. Google says it is a standalone token with no separate user agent, and that it does not affect a site's inclusion in Google Search or work as a ranking signal. Google's AI features page points to Google-Extended for limiting AI training and grounding in other Google systems, and to snippet controls (below) for AI Overviews and AI Mode.</p>\r
            <p>Two limits matter. Robots.txt only controls crawling. <a href="https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt" target="_blank" rel="noopener noreferrer">Google's robots.txt guide</a> notes that Google can't index the content of a disallowed page but may still index its URL, so use noindex on a page Google can crawl to keep it out of results. And the user-triggered visits, ChatGPT-User and Perplexity-User, are treated differently: OpenAI and Perplexity both say robots.txt rules may not apply to them.</p>\r
\r
            <h2 id="content-that-gets-used">What kind of content do these products use?</h2>\r
            <p>No company publishes a recipe for being picked. What exists is Google's guidance, and it is mostly the people-first advice that predates AI answers. Google's <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">helpful content guidance</a> asks whether a page provides original information, reporting, research or analysis, and says that crediting other sources does not replace the need for original effort. Google's AI guide adds a plainer version: create the content yourself, based on what you know, and don't recycle what others have said.</p>\r
            <p>For a small business, that means writing what only you can write. Your prices and how you arrive at them, the steps in your own process, your local rules, results you measured on your own work. A page that restates the top ten search results adds nothing to an answer that already reads them. Our <Link to="/services/content-creation">content creation</Link> work starts from this question: what does this business know that a competitor's page doesn't say?</p>\r
            <h3 id="answer-early">Answer the question early</h3>\r
            <p>Neither Google nor the other companies we cite give a rule for page layout. We write the answer in the first paragraph because it serves a reader who wants it, and because any system that quotes a passage needs that passage to make sense alone. Use clear headings that say what the section answers. Keep one topic to a page. This is ordinary good writing, and Google says you don't need to write differently for generative AI search.</p>\r
            <h3 id="authors-dates">Show who wrote it and when</h3>\r
            <p>Google's helpful content page says it is helpful to make it obvious to visitors who wrote a page, and it encourages accurate bylines. It also warns against changing the date of a page to look fresh when the content has not substantially changed, and against inventing author profiles. Put a real author, a published date and an updated date on guides, and change the updated date only when the page changed.</p>\r
\r
            <h2 id="recommended-by-chatgpt">Can you get your business recommended by ChatGPT?</h2>\r
            <p>Not by asking for it, as far as OpenAI's documentation goes. OpenAI does not publish how ChatGPT decides which businesses to name in an answer, and we found no program that lets a business request a recommendation. What it does document is who is eligible. Its <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">bots page</a> recommends allowing OAI-SearchBot so your site can appear in search results, says sites that opt out will not be shown in ChatGPT search answers, and says a robots.txt change takes about 24 hours to reach its systems.</p>\r
            <p>If you sell products, there is a second route. OpenAI's <a href="https://chatgpt.com/merchants" target="_blank" rel="noopener noreferrer">merchants page</a> invites shops to apply to share a product feed so their products can appear in shopping results. It says shopping is live for ChatGPT users in the US, that stores selling through Shopify or Etsy are already integrated with no application needed, and that there are no fees on purchases that start in ChatGPT. It does not say how products are ranked.</p>\r
            <p>Past that, the advice is the rest of this guide: a page OAI-SearchBot can fetch, which says plainly what you do, where, for whom and at what price, with facts no other page has. Google's AI guide asks for accurate local business and shop details, and the same habit serves any assistant. Treat a promise to get you recommended by ChatGPT the way you would treat a promise of the top spot on Google.</p>\r
\r
            <h2 id="structured-data">Does structured data help with AI answers?</h2>\r
            <p>Google says it isn't required for generative AI search, and that there is no special schema.org markup to add. What it does ask is that structured data matches the visible text on the page. So mark up what is really there, such as your organization, an article's author and date, or product details, and don't add fields the page doesn't show. The markup still serves its older job of making pages eligible for rich results in Google Search. Treat it as housekeeping, not a lever for AI visibility.</p>\r
\r
            <h2 id="text-in-html">Does the text need to be in the HTML?</h2>\r
            <p>Google says it can process content in JavaScript as long as it isn't blocked, though JavaScript-heavy sites are generally more complex to optimize. OpenAI, Anthropic and Perplexity don't say in the pages we read whether their crawlers run JavaScript. We therefore can't tell you what they do, and we won't guess.</p>\r
            <p>The safe habit costs little: make sure your headings, answers, prices and contact details are in the HTML the server sends, not added after load by a script. To check, open the page source (not the inspector) and search for a sentence from the page. If it isn't there, a crawler that doesn't run scripts won't see it either. Our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> has a step for checking what Google sees after JavaScript runs. Slow pages also lose visitors whatever else you do, which our <Link to="/blogs/core-web-vitals-explained">Core Web Vitals guide</Link> covers.</p>\r
\r
            <h2 id="llms-txt">Do you need an llms.txt file?</h2>\r
            <p>For Google, no. Its AI guide says you don't need new machine readable files or AI text files to appear in Google Search, and that Google Search itself doesn't use them. We found no statement in OpenAI's, Anthropic's or Perplexity's crawler documentation that they read llms.txt, so we can't say any of them does. If you publish one anyway, it costs little, but it should not take time from the page itself. (Our own site publishes an llms.txt as an extra. Nothing we have read says it has any effect on rankings or answers.)</p>\r
\r
            <h2 id="snippet-controls">How can you limit what AI features show from your pages?</h2>\r
            <p>Google's <a href="https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag" target="_blank" rel="noopener noreferrer">robots meta tag documentation</a> describes four controls that apply to its search results, AI Overviews and AI Mode included:</p>\r
            <ul>\r
                <li><code>nosnippet</code> stops a text or video snippet being shown for the page, and Google says it also stops the content being used as direct input for AI Overviews and AI Mode.</li>\r
                <li><code>data-nosnippet</code>, on a <code>span</code>, <code>div</code> or <code>section</code>, keeps that part of the page out of snippets.</li>\r
                <li><code>max-snippet</code> caps the snippet length, and Google says it limits how much can be used as direct input for those features, unless you have granted permission another way.</li>\r
                <li><code>noindex</code> keeps the page out of search results altogether.</li>\r
            </ul>\r
            <p>Each has a cost: a page with <code>nosnippet</code> or <code>noindex</code> gives up the visibility you were trying to earn. Use them for pages with content you don't want excerpted, not as a default.</p>\r
\r
            <h2 id="measure">How do you measure AI visibility?</h2>\r
            <p>Start with Google, because it gives you numbers. Its AI features page says that sites appearing in AI features are included in your overall search traffic in Search Console, in the Performance report under the Web search type. Its AI guide also points to a separate generative AI performance report, which Search Console's help describes as showing organic impressions from Google Search generative AI features over time, the pages with the most and fewest impressions, and where they come from, such as device or country. It shows data once the site has enough impressions.</p>\r
            <p>For the other products, we found no documentation of a report you can pull yourself. Look at the referral sources in your analytics for visits from the AI products' own sites, and treat the numbers as a rough count, since no company we read documents how its visits show up in analytics.</p>\r
            <p>If Bing matters to your customers, look at <a href="https://www.indexnow.org/documentation" target="_blank" rel="noopener noreferrer">IndexNow</a>, which lets you tell participating search engines when a URL is added, updated or deleted. Its documentation says a 200 response only means the engine received the URL, not that it will index it, and it doesn't mention Google. We send it after deploys that add or change pages, and treat it as a courtesy notice, not a guarantee. We did not cite Microsoft's own guidance on Copilot here, because we could not read its page in full.</p>\r
\r
            <h2 id="what-we-do">What do we do on ndcompany.in?</h2>\r
            <p>Our robots.txt allows the answer-engine crawlers by name and blocks CCBot and Bytespider. It also carries a <code>Content-Signal</code> line: <code>search=yes, ai-input=yes, ai-train=no</code>. <a href="https://contentsignals.org/" target="_blank" rel="noopener noreferrer">contentsignals.org</a> shows how the line is written in robots.txt, with yes or no for each of three signals. Cloudflare, which introduced them, <a href="https://blog.cloudflare.com/content-signals-policy/" target="_blank" rel="noopener noreferrer">defines them in its announcement</a>: search is building a search index and providing results (not AI summaries), ai-input is feeding content into AI models, such as for generative AI search answers, and ai-train is training or fine-tuning models.</p>\r
            <p>Read that line as a statement of preference. Cloudflare says the signals are not technical countermeasures against scraping, and that some companies may ignore them. We keep it because it states in a standard place what we want, and the named crawler rules above do the work for the companies that honour them.</p>\r
\r
            <h2 id="where-to-start">Where should a small business start?</h2>\r
            <ol>\r
                <li>Open <code>yoursite.com/robots.txt</code> and confirm it doesn't block Googlebot, OAI-SearchBot, Claude-SearchBot or PerplexityBot by accident.</li>\r
                <li>Decide on GPTBot, ClaudeBot and Google-Extended as a business choice, knowing that for Google-Extended the answer does not change your Search rankings.</li>\r
                <li>In Search Console, confirm your important pages are indexed.</li>\r
                <li>View the source of your top pages and confirm the answer, price and contact details are in the HTML.</li>\r
                <li>Rewrite one page that only repeats what others say, adding the facts only you have, with an author and a real date.</li>\r
                <li>Check the generative AI performance report in Search Console after a few weeks.</li>\r
            </ol>\r
            <p>If you'd like a second pair of eyes on any of this, our <Link to="/services/seo-services">SEO services</Link> include the technical checks above and the content work that follows them.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};