var e=`import { Link } from 'react-router-dom';
import { Callout } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>A Shopify store does not need an llms.txt file, a special app or new markup to show up in AI search. Shopify already serves an llms.txt for every store, and Google says its search ignores such files. What decides whether ChatGPT, Gemini, Copilot or Google's AI answers can show your products is more ordinary: crawlers can reach your pages, your product data is complete enough to travel through Shopify Catalog and Google Merchant Center, and you sell to the countries each AI channel serves. On 16 November 2026 we read Shopify's developer docs, changelog and help centre, OpenAI's merchant and crawler pages and Google's guides, and each claim below links to its page.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>Shopify serves a managed <code>/agents.md</code> for every store and mirrors it at <code>/llms.txt</code> and <code>/llms-full.txt</code>. Since 28 May 2026 you can replace each with a Liquid template; an old URL redirect no longer works.</li>
                    <li>In our study of 4,564 small business sites, 202 of the 935 llms.txt files were made by Shopify, and 99% of the Shopify sites had one. Google says its search does not use these files.</li>
                    <li>Shopify Catalog sends eligible products to ChatGPT, Google AI Mode and Gemini, Microsoft Copilot and Meta, on by default. ChatGPT and Copilot need you to sell to US customers; Google needs the US, Canada or Australia.</li>
                    <li>Blocking AI crawlers in robots.txt does not stop Shopify Catalog sending your products to the AI channels you have switched on. Shopify calls editing robots.txt an unsupported customization.</li>
                    <li>You can measure AI visits in three places: Shopify's Agentic page, GA4's AI Assistant channel and Search Console's generative AI report.</li>
                </ul>
            </Callout>

            <p>This post is about Shopify only. For what each AI company says its crawlers do, and how AI answers pick pages in general, read our guide to <Link to="/blogs/optimize-content-for-llms">optimizing content for LLMs</Link>.</p>

            <h2 id="what-shopify-does">What does Shopify already do for AI search?</h2>
            <p>More than most store owners know, because most of it is switched on without asking. Each row is sourced in the sections below.</p>
            <div className="blog-table" role="region" aria-label="What Shopify does for AI search and what you can change" tabIndex={0}>
                <table>
                    <caption>What Shopify sets up for AI tools by default, read on 16 November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Piece</th>
                            <th scope="col">What Shopify does</th>
                            <th scope="col">Can you change it?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">/agents.md, /llms.txt, /llms-full.txt</th><td>Serves a managed agents.md and mirrors it at the two llms addresses</td><td>Yes, with a Liquid template per address</td></tr>
                        <tr><th scope="row">robots.txt</th><td>Serves a default file that lets crawlers reach products, collections, pages and blogs</td><td>Yes, with robots.txt.liquid, which Shopify Support will not help with</td></tr>
                        <tr><th scope="row">Product structured data</th><td>Dawn and Horizon print Product or ProductGroup JSON-LD on product pages</td><td>Yes, in theme code or with an app</td></tr>
                        <tr><th scope="row">Shopify Catalog</th><td>Sends eligible products to AI channels, on by default</td><td>Yes, per channel, under Sales channels, Agentic</td></tr>
                        <tr><th scope="row">Bot sessions in reports</th><td>Filtered out of session reports by default</td><td>Yes, per report, where the filter is offered</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 id="llms-txt-redirect">Why did my llms.txt redirect stop working?</h2>
            <p>Because Shopify now answers that address itself. In May 2026 a merchant in the Shopify Community reported that their redirect from <code>/llms.txt</code> to their own file was still in place but no longer honoured. Others in the thread said Shopify should have announced the change first. The fix they found was a theme template, and Shopify documented it later that month.</p>
            <p>Shopify's changelog entry of <a href="https://shopify.dev/changelog/posts/customize-llmstxt-llms-fulltxt-and-agentsmd" target="_blank" rel="noopener noreferrer">28 May 2026 on customizing these files</a> says every store includes a default agents.md at <code>/agents.md</code>, and that <code>/llms.txt</code> and <code>/llms-full.txt</code> point to the same content by default. You change them with templates under Online Store, Themes, Edit code: <code>templates/agents.md.liquid</code> for <code>/agents.md</code> (and the default for the other two), <code>templates/llms.txt.liquid</code> for <code>/llms.txt</code> only, and <code>templates/llms-full.txt.liquid</code> for <code>/llms-full.txt</code> only. Then delete the old redirect.</p>
            <p>Shopify does not encourage this. Its <a href="https://shopify.dev/docs/storefronts/themes/architecture/templates/agents-md-liquid" target="_blank" rel="noopener noreferrer">agents.md.liquid documentation</a> says the managed file is all most stores need and that once you add a template you are responsible for keeping it current. Its <a href="https://shopify.dev/docs/storefronts/themes/architecture/templates/llms-txt-liquid" target="_blank" rel="noopener noreferrer">llms.txt.liquid page</a> says only the <code>request</code> and <code>agents</code> objects are available inside the template, so you cannot list your products there.</p>
            <p>The default file is not a summary of your brand. Shopify says it covers the store's agent shopping endpoints (UCP and MCP), read-only addresses for product, collection and search data, the store's published policies and guidance for shopping agents, and that it leaves out contact details on purpose. When we opened <code>/llms.txt</code> on a large Shopify store on 16 November 2026, it answered with the same text as its <code>/agents.md</code>, headed "Agent Instructions": directions for software that shops on a person's behalf.</p>

            <h2 id="does-llms-txt-help">Does llms.txt help a Shopify store show up in ChatGPT or Google?</h2>
            <p>There is no evidence that it does. Google's <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">guide to AI features</a> says you don't need AI text files to appear in Google Search and that Google Search ignores them. OpenAI's <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">crawler page</a> does not mention llms.txt. A Community thread asking whether Shopify recommends the file got conflicting answers from merchants and none from Shopify staff.</p>
            <p>Our data shows why the file is everywhere anyway. In our <Link to="/blogs/ai-crawler-blocking-study">study of 4,564 small business websites</Link> on 14 November 2026, 935 (20.5%) had an llms.txt. 202 of those were made by Shopify, and 99% of the Shopify sites in the sample had one. The file is there because Shopify put it there, and it says nothing about whether a store appears in AI answers. Leave Shopify's file alone, and do not pay anyone to write a custom one for ranking.</p>
            <p>A July 2025 feature request in Shopify's forums asked for llms.txt support to manage GPTBot, ClaudeBot, PerplexityBot and other AI crawlers. llms.txt does not control crawlers. That is robots.txt's job, and our <Link to="/blogs/optimize-content-for-llms">LLM guide</Link> explains which crawler names do what.</p>

            <h2 id="agentic-storefronts">How do Shopify products get into ChatGPT, Gemini and Copilot?</h2>
            <p>Mostly through Shopify itself, not through your website. Shopify announced Agentic Storefronts on <a href="https://www.shopify.com/news/winter-26-edition-agentic-storefronts" target="_blank" rel="noopener noreferrer">10 December 2025 in its Winter '26 Edition</a>, naming ChatGPT, Perplexity and Microsoft Copilot. Its <a href="https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts" target="_blank" rel="noopener noreferrer">help page on agentic storefronts</a> now lists ChatGPT, Google AI Mode and Gemini, Microsoft Copilot and Meta. Perplexity is not on the current list, and we found no Shopify page that says why.</p>
            <p>The data travels through Shopify Catalog. Shopify's <a href="https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/products" target="_blank" rel="noopener noreferrer">Catalog page</a> says eligible products are automatically discoverable by AI channels, listed with title, description, options, images, price, availability and other key attributes. Each channel has its own rules:</p>
            <div className="blog-table" role="region" aria-label="Shopify AI channels and their requirements" tabIndex={0}>
                <table>
                    <caption>Shopify's AI channels, from Shopify's help centre on 16 November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Channel</th>
                            <th scope="col">You must sell to</th>
                            <th scope="col">How products are found</th>
                            <th scope="col">Where customers pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row"><a href="https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/chatgpt" target="_blank" rel="noopener noreferrer">ChatGPT</a></th><td>Customers in the US (the store can be based elsewhere)</td><td>Shopify Catalog, nothing to set up</td><td>Your own store checkout, in ChatGPT's in-app browser or a new tab</td></tr>
                        <tr><th scope="row"><a href="https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/google" target="_blank" rel="noopener noreferrer">Google AI Mode and Gemini</a></th><td>Customers in the US, Canada or Australia</td><td>Google Merchant Center</td><td>A Shopify-powered checkout in the conversation, or your store if you turn that off</td></tr>
                        <tr><th scope="row"><a href="https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/microsoft" target="_blank" rel="noopener noreferrer">Microsoft Copilot</a></th><td>Customers in the US</td><td>Shopify Catalog, nothing to set up</td><td>Inside Copilot for US customers, or your store if you turn that off</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Shopify says there are no fees for these channels beyond your usual payment processing. For a store in the UK, the Netherlands or the UAE that does not sell to the US, ChatGPT and Copilot shopping through Shopify do not apply yet. An Australian store can use Google's channel. Every store can still appear in ordinary AI search answers, which read the open web.</p>
            <p>To be in Catalog at all, Shopify's <a href="https://help.shopify.com/en/manual/shopify-catalog/requirements" target="_blank" rel="noopener noreferrer">Catalog requirements</a> say the store must be on the Starter plan or higher and not in private mode, and each product needs a price above 0, a title, at least one image and a product URL, and must not be unlisted. The channel pages also ask for published terms, privacy and refund policies.</p>
            <p>OpenAI's <a href="https://chatgpt.com/merchants" target="_blank" rel="noopener noreferrer">merchants page</a> agrees: shopping is currently live in the US, a catalog sold through Shopify or Etsy is already integrated with no application required, and there are no fees on purchases that start in ChatGPT. It also says OpenAI is moving away from a standalone Instant Checkout. Neither OpenAI nor Shopify says how products are ranked, or describes a way to pay for a better position.</p>

            <h2 id="robots-txt">Can I block AI crawlers on Shopify, and should I?</h2>
            <p>You can, but think twice. Shopify's <a href="https://shopify.dev/docs/storefronts/themes/architecture/templates/robots-txt-liquid" target="_blank" rel="noopener noreferrer">robots.txt.liquid documentation</a> says adding the template replaces Shopify's generated file, and asks you to save a copy of the current one first. Its <a href="https://help.shopify.com/en/manual/promoting-marketing/seo/editing-robots-txt" target="_blank" rel="noopener noreferrer">help page on editing robots.txt</a> calls this an unsupported customization, says Shopify Support can't help with it, and warns that incorrect use can result in loss of all traffic.</p>
            <p>The same page draws the line that matters. Blocking AI crawlers in robots.txt or at the network layer affects only open-web discoverability, and does not stop Shopify Catalog sending your product data to the agentic storefronts you have activated. So there are two separate switches. What AI channels receive from Shopify is set under Sales channels, Agentic: Shopify's <a href="https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/agentic-home" target="_blank" rel="noopener noreferrer">management page</a> describes turning off Catalog access and auto-enrolment in new channels, and says data sharing can take up to 7 days to stop. Which crawlers read your public pages is set in robots.txt.liquid.</p>
            <p>For a store that wants to be found, blocking search crawlers works against you: OpenAI says sites opted out of OAI-SearchBot will not be shown in ChatGPT search answers. Blocking a training crawler such as GPTBot is a separate choice. Our <Link to="/blogs/ai-crawler-blocking-study">crawler study</Link> found that only 0.3% of small business sites that let Google in blocked OAI-SearchBot, against 3.0% for GPTBot.</p>

            <h2 id="schema">Is structured data for AI built into Shopify?</h2>
            <p>The basics are. On 16 November 2026 we read the code of Shopify's two reference themes: <a href="https://github.com/Shopify/dawn/blob/main/sections/main-product.liquid" target="_blank" rel="noopener noreferrer">Dawn's product section</a> and <a href="https://github.com/Shopify/horizon/blob/main/sections/product-information.liquid" target="_blank" rel="noopener noreferrer">Horizon's product information section</a> both print JSON-LD from the <a href="https://shopify.dev/docs/api/liquid/filters/structured_data" target="_blank" rel="noopener noreferrer">structured_data Liquid filter</a>, and both themes' headers add Organization markup. Shopify says the filter makes a product without variants a schema.org Product and one with variants a ProductGroup, with name, description, brand, category, images, URL, price, currency and availability.</p>
            <p>It does not add what Shopify does not hold: review ratings, ingredients, sizing, materials. Review markup usually comes from a reviews app. In a Community thread about specialty food, replies agreed on that split and warned that two apps printing Product markup on one page is a common mistake. Third-party themes vary, so view the source of a product page and search for <code>application/ld+json</code>.</p>
            <p>Google's AI guide says structured data isn't required for generative AI search and there is no special schema.org markup to add. For shopping, Google's <a href="https://developers.google.com/search/docs/appearance/structured-data/product" target="_blank" rel="noopener noreferrer">product structured data guide</a> says providing both page markup and a Merchant Center feed maximizes your eligibility. Store the facts buyers ask about in Shopify fields (metafields) so they show on the page and can be mapped into Catalog.</p>

            <h2 id="what-matters">What actually affects whether AI tools mention a store?</h2>
            <p>None of these companies publishes a ranking formula. What their own pages say comes down to four things.</p>
            <h3 id="crawlable">Pages crawlers can read</h3>
            <p>Google's <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">AI features page</a> says a page must be indexed and eligible to be shown with a snippet to be a supporting link in AI Overviews or AI Mode, with no additional technical requirements. ChatGPT search needs OAI-SearchBot allowed. Standard Liquid themes send product text in the HTML; headless builds need checking. Our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> covers the indexing checks.</p>
            <h3 id="product-data">Complete product data</h3>
            <p>Shopify's Catalog page asks for complete and well-structured product information, mapped metafields and variant products grouped as one. OpenAI's merchants page tells sellers to provide detailed information like images, pricing and reviews. A field you leave empty in Shopify is one no AI channel can show.</p>
            <h3 id="merchant-center">Google Merchant Center</h3>
            <p>Google's AI guide says Merchant Center feeds and Business Profiles can help your products be visible in AI responses and other Google Search results. Shopify's <a href="https://help.shopify.com/en/manual/online-sales-channels/google" target="_blank" rel="noopener noreferrer">Google & YouTube app</a> syncs your products to Merchant Center, in the countries and currencies it supports.</p>
            <h3 id="mentions">Reviews and mentions elsewhere</h3>
            <p>Several Community threads say roundups, review sites and forum discussions influence which stores AI answers name. That is merchants' experience, not a documented rule, and Google's AI guide warns that seeking inauthentic mentions isn't as helpful as it might seem. Earn real reviews and real coverage; do not buy them.</p>

            <h2 id="check-visibility">How can I check my store's AI search visibility?</h2>
            <p>No single report gives the whole picture, so use several and treat each number as a floor.</p>
            <ol>
                <li>Ask the assistants. Write 15 to 20 questions a buyer would ask in your category, such as "best waterproof dog coat for a small breed in the UK". Ask them in ChatGPT, Gemini, Copilot and Perplexity once a month, and log whether your store is named, which page is cited and whether price, shipping and returns are right. Answers vary between runs, so watch the trend.</li>
                <li>Open Sales channels, Agentic in Shopify. Shopify says it shows sales, orders, online store sessions and conversion for each AI channel.</li>
                <li>Check GA4's AI Assistant channel. Google's <a href="https://support.google.com/analytics/answer/9756891" target="_blank" rel="noopener noreferrer">GA4 channel definitions</a> describe it as visits from sources like ChatGPT, Gemini, Deepseek, Copilot or Grok, excluding Google's AI Overviews and AI Mode. Perplexity is not named in the page text; the full source list is a spreadsheet linked there.</li>
                <li>Open Search Console's <a href="https://support.google.com/webmasters/answer/16984139" target="_blank" rel="noopener noreferrer">generative AI performance report</a>. Google says it reached all websites as of 31 August 2026, though a site without enough impressions sees no data.</li>
            </ol>
            <p>What about bot user agents in logs? When a Community thread suggested looking for AI agents in store logs, replies pointed out that Shopify merchants do not get raw server logs. Shopify's <a href="https://help.shopify.com/en/manual/intro-to-shopify/bots/bot-filtering" target="_blank" rel="noopener noreferrer">bot filtering page</a> describes a different tool: Shopify labels each session human or bot, leaves identified bot sessions out of session reports by default, and errs toward labelling sessions human. It does not say how AI agents are counted.</p>

            <h2 id="direct-traffic-spike">Was that sudden direct traffic spike AI?</h2>
            <p>Probably not, and you can check. In a September 2026 Community thread, a store's GA4 Direct sessions jumped from about 200 to 300 a day to roughly 14,000 in one day, nearly all from Singapore at a 1366 x 1366 screen size, with almost no add-to-carts. The replies suggested comparing the same 24 hours in GA4 and in Shopify's analytics: if only GA4 spiked, the hits may never have reached the store.</p>
            <p>Shopify's <a href="https://help.shopify.com/en/manual/intro-to-shopify/bots/identifying-bot-activity" target="_blank" rel="noopener noreferrer">guide to bot activity</a> lists the signs: an unexpected spike in sessions, a spike from one device type, many sessions from Google Cloud or Amazon Web Services data centre locations, and a sudden jump or drop in conversion rate. Its bot filtering page says that filter rolled out from 21 to 23 September 2026, so a step change in sessions around those dates may be Shopify's filter, not your visitors. Clicks from AI assistants that carry a referrer land in GA4's AI Assistant channel. Thousands of direct sessions from one city with no carts fit automated browsing far better than shoppers sent by ChatGPT.</p>

            <h2 id="checklist">A checklist for Shopify store owners</h2>
            <ol>
                <li>Open <code>yourstore.com/llms.txt</code>. If it shows Shopify's "Agent Instructions", leave it, and delete any old redirect for it.</li>
                <li>Open <code>yourstore.com/robots.txt</code>. If someone added robots.txt.liquid, check it does not block Googlebot, OAI-SearchBot, Claude-SearchBot or PerplexityBot.</li>
                <li>In Shopify admin, open Sales channels, Agentic. See which AI channels are on and whether your store is eligible, and decide per channel.</li>
                <li>If you sell to the US, Canada or Australia, connect Merchant Center through the Google & YouTube app and fix the products it flags.</li>
                <li>Go through your top 20 products: a clear title, a description that says who it is for, every variant filled in, real images with alt text, and buyer facts stored in fields, not only in images.</li>
                <li>Publish your shipping, returns, privacy and terms pages.</li>
                <li>View the source of one product page and confirm there is one block of Product JSON-LD, not two.</li>
                <li>Set up the monthly prompt test, and add the Agentic page, GA4's AI Assistant channel and Search Console's generative AI report to your monthly numbers.</li>
                <li>Ask happy customers for reviews where your buyers read them, and ignore anyone selling reviews or mentions.</li>
            </ol>

            <h2 id="how-we-work">How N&D Co. works with Shopify stores</h2>
            <p>We are a brand and growth agency in Kolkata, India, working with store owners in the US, the UK, the Netherlands, the UAE and elsewhere. Our <Link to="/shopify-marketing">Shopify marketing</Link> work starts with the checks above: crawler access, product data, Merchant Center and what AI channels can see. <Link to="/services/seo-services">SEO services</Link> cover the search side, and <Link to="/services/ecommerce-solutions">ecommerce solutions</Link> cover theme and product data fixes. If you are choosing who should build or rework the store, our post on <Link to="/blogs/shopify-development-india">Shopify development in India</Link> compares what partners publish. Nobody can promise that an AI assistant will name your store, and we don't. Our quotes are set in writing before work starts.</p>
        </>
    );
}
`;export{e as default};