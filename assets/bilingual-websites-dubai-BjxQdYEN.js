var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>Most Dubai agencies say they can build you an Arabic website, but few have one themselves. On 5 November 2026 we checked 40 agencies that web searches returned for website design, SEO, digital marketing and branding in Dubai. Of the 37 sites we could read, 20 said they build Arabic, bilingual or right-to-left websites for clients. Only 7 of the 36 we could check had an Arabic version of their own site, and just 4 agencies did both. The two agencies that publish a price for a bilingual site charge about 1.6 to 1.9 times their price for an English-only one.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>20 of 37 Dubai agency websites we could read (54%) offer Arabic or bilingual websites. 7 of 36 (19%) have an Arabic version of their own site.</li>
                    <li>Of the 20 agencies that offer Arabic sites, 16 have no Arabic version of their own website.</li>
                    <li>15 of 37 (41%) show any price. Their cheapest website package has a median of AED 4,250; monthly SEO starts at a median of AED 3,700.</li>
                    <li>Two agencies publish a price for a bilingual English and Arabic website: AED 15,000 to 40,000, against AED 8,000 to 25,000 for an English corporate site on the same page.</li>
                    <li>Only 1 of 53 agencies says whether its prices include the UAE's 5% VAT.</li>
                </ul>
            </Callout>

            <h2 id="how-we-checked">How we checked the agencies</h2>
            <p>We ran six web searches on 5 November 2026: website design company in Dubai, web development company Dubai, SEO company in Dubai, SEO agency Dubai, digital marketing agency Dubai and branding agency Dubai. From the results we took, in order, the first 40 websites of single agencies that say they are in Dubai or the UAE. We skipped directories, "top 10" articles, marketplaces and freelancer profiles. On each site we read up to about six pages: the homepage, the website and SEO service pages, any pricing page and the FAQ.</p>
            <p>Later the same day we opened every price again and checked that the figure was still on the page, and we looked for Arabic in three ways: a language switch, Arabic pages at their own address, and hreflang tags naming an Arabic version. Three sites blocked our requests and one hid its Arabic version behind a menu with no address, so the counts below leave them out.</p>
            <p>Two more searches, for "website design packages Dubai" and "SEO packages Dubai AED", found 13 other agencies. Those searches favour agencies that publish prices, so we report them separately at the end. We name no agency. Our searches ran from outside the UAE, so someone searching in Dubai may see a different order.</p>

            <h2 id="arabic-gap">How many Dubai agencies build Arabic websites?</h2>
            <p>About half say they do. 20 of the 37 agency sites we could read say, on a service page, in the FAQ or on the homepage, that they build Arabic, bilingual or right-to-left (RTL) websites for clients. The other 17 do not mention it. Several of those are SEO agencies that offer Arabic SEO but say nothing about building sites.</p>
            <p>Far fewer show it on their own site. 7 of the 36 agency websites we could check have an Arabic version, with Arabic pages at their own address. The other 29 are in English only. Two of these counts need a note. One agency declares Arabic pages in its hreflang tags, but they send you back to the English pages, so we counted it as English only. Another has a full Arabic homepage that nothing on its English site links to, which we counted as an Arabic version.</p>
            <Chart
                type="bar"
                title="Dubai agencies and Arabic websites, 5 November 2026"
                unit="%"
                data={[
                    ['Say they build Arabic or bilingual sites', 54],
                    ['Have an Arabic version of their own site', 19],
                    ['Do both', 11],
                ]}
                source="N&D Co. survey of 40 Dubai agency websites, 5 November 2026"
                note="Share of the agency websites we could read: 37 for what they offer, 36 for their own Arabic version. 'Do both' is 4 of 37."
            />
            <p>So 16 of the 20 agencies that offer Arabic websites do not run one themselves. That does not prove they build them badly, but it means you cannot judge their Arabic work from their own site. Ask to see live Arabic sites they built, and open the Arabic pages on your phone.</p>

            <h2 id="what-they-charge">What do Dubai agencies charge for a website?</h2>
            <p>15 of the 37 agencies we could read (41%) show a price for at least one service, as a fixed price, a "from" price or a range. 14 of them price in dirhams and one only in US dollars. The other 22 ask you to fill in a form, call or book a meeting.</p>
            <div className="blog-table" role="region" aria-label="Published starting prices of Dubai agencies" tabIndex={0}>
                <table>
                    <caption>Cheapest published package per agency, 40 Dubai agencies, 5 November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Agencies showing a price</th>
                            <th scope="col">Lowest</th>
                            <th scope="col">Median</th>
                            <th scope="col">Highest</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Website</th>
                            <td>10</td>
                            <td>AED 999</td>
                            <td>AED 4,250</td>
                            <td>AED 110,000</td>
                        </tr>
                        <tr>
                            <th scope="row">SEO, per month</th>
                            <td>5</td>
                            <td>AED 2,500</td>
                            <td>AED 3,700</td>
                            <td>AED 7,000</td>
                        </tr>
                        <tr>
                            <th scope="row">Online store</th>
                            <td>3</td>
                            <td>AED 1,500</td>
                            <td>AED 7,500</td>
                            <td>AED 8,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>For each agency we took its cheapest package for the service and then compared agencies, so one agency with many packages does not pull the figure. Half the website prices fell between about AED 1,500 and AED 8,000; one agency's cheapest listed website price was AED 110,000. Logo and brand identity prices were too rare to report: two agencies each.</p>
            <p>VAT is almost never mentioned. One agency, out of all 53 we checked, writes that its prices exclude the UAE's 5% VAT. If you are VAT-registered, or the agency is, ask whether the quote includes it. Our survey of <Link to="/blogs/agency-prices-india">108 Indian agency websites</Link> found the same habit with GST.</p>

            <h2 id="arabic-price">How much more does an Arabic version cost?</h2>
            <p>Few agencies put a number on it, but the ones that do agree it costs more. These are every figure we found:</p>
            <ul>
                <li>One agency's price table lists a bilingual English and Arabic website, with a full RTL version, hreflang and an Arabic copy review, at AED 15,000 to 40,000, delivered in three to six weeks. Its English corporate site is AED 8,999 to 25,000.</li>
                <li>Another agency's published cost guide puts a corporate website with an Arabic version at AED 15,000 to 40,000, next to AED 8,000 to 25,000 for a custom English site of 5 to 15 pages.</li>
                <li>One agency adds AED 1,000 to 2,000 for a bilingual logo on its two cheaper packages and includes it in its premium package, from AED 7,000.</li>
                <li>One SEO agency includes Arabic only in its top plan, AED 5,500 a month; its cheaper plans are English only. Another's multilingual SEO starts at AED 2,999 a month.</li>
                <li>Two more say Arabic is quoted separately, without a figure. One explains that the whole layout mirrors, not just the text direction, and calls it real additional work.</li>
            </ul>
            <p>The extra cost is real. An Arabic version is a second set of pages: translated copy, a mirrored layout, Arabic fonts, its own page titles and descriptions, and forms and emails that work right to left. The next section lists what has to be done.</p>

            <h2 id="what-a-bilingual-site-needs">What does a proper Arabic and English website need?</h2>
            <h3 id="direction">Right-to-left set in the HTML, not only in CSS</h3>
            <p>The W3C's internationalization guide says to add <code>dir="rtl"</code> to the <code>html</code> tag whenever a page reads right to left, and to declare the language separately with <code>lang="ar"</code>, because a language declaration does not set the direction. It also says not to use CSS to apply the base direction, so the page still reads correctly if the stylesheet fails to load. You can check any Arabic page by viewing its source: the first tag should carry both. The guide is <a href="https://www.w3.org/International/questions/qa-html-dir" target="_blank" rel="noopener noreferrer">Structural markup and right-to-left text in HTML</a>.</p>

            <h3 id="mirrored-layout">A layout that mirrors</h3>
            <p>In Arabic the whole page flips: the logo moves to the right, the menu runs from right to left, text aligns right and arrows point the other way. The clean way to build this is with CSS logical properties, which MDN describes as set "relative to the content's writing direction" rather than to left and right. A margin written as <code>margin-inline-start</code> sits on the left in English and on the right in Arabic, from the same stylesheet. A site built with <code>margin-left</code> everywhere needs a second set of styles for Arabic. See MDN's <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values" target="_blank" rel="noopener noreferrer">guide to CSS logical properties</a>.</p>

            <h3 id="separate-addresses">Each language at its own address</h3>
            <p>Google recommends a different URL for each language version, rather than one address that changes language with a cookie or the browser's settings, and it advises against redirecting visitors to another language automatically, because that can stop people and search engines from seeing every version. Give each page a link to its other language instead. That is in Google's guide to <a href="https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites" target="_blank" rel="noopener noreferrer">managing multi-regional and multilingual sites</a>.</p>

            <h3 id="hreflang">hreflang tags in both directions</h3>
            <p>hreflang tags tell Google which pages are translations of each other, so it can show an Arabic searcher the Arabic page. Google's rule is strict: each language version must list itself and every other version, and if the links do not point both ways the tags may be ignored. An <code>x-default</code> tag names the page for everyone else. The details are in <a href="https://developers.google.com/search/docs/specialty/international/localized-versions" target="_blank" rel="noopener noreferrer">Google's page on localized versions</a>. This is where we saw one agency's own site go wrong: its tags named Arabic pages that redirected to English ones.</p>

            <h3 id="arabic-fonts">Fonts that include Arabic letters</h3>
            <p>Many web fonts have no Arabic letters at all, and sites often trim their fonts to the characters they use. Ours is an example: to keep our pages fast, our fonts are cut to the 116 characters our English pages use, so they contain no Arabic. An Arabic version needs its own font files, chosen so that headings and body text match the English design in weight and size. If the Arabic falls back to whatever font the phone has, the two languages will not look like one brand.</p>

            <h3 id="arabic-copy">Arabic written or checked by a person</h3>
            <p>Machine translation can get the words roughly right and the tone wrong, and a mistake in a headline or a price is the first thing an Arabic-speaking customer sees. Budget for a translator or an Arabic copywriter, or have someone who reads Arabic check every page before launch, including button labels, form errors, confirmation emails and the page titles and descriptions that appear in Google.</p>

            <h2 id="questions-to-ask">What to ask an agency before you order an Arabic website</h2>
            <ul>
                <li>Can I see three live Arabic or bilingual sites you built, and open the Arabic pages on my phone?</li>
                <li>Who writes or checks the Arabic text, and is that in the price?</li>
                <li>Will each language have its own address, with hreflang tags pointing both ways and a link to switch language on every page?</li>
                <li>Does the whole layout mirror in Arabic, including the menu, icons, forms and the confirmation email?</li>
                <li>Which Arabic font will you use, and is its licence included?</li>
                <li>Does the quote include the UAE's 5% VAT, and in which currency is it?</li>
                <li>If I add a page later, does it need building twice, and what does that cost?</li>
            </ul>

            <h2 id="package-searches">What did the "packages" searches show?</h2>
            <p>The 13 agencies found by searching for "website design packages Dubai" and "SEO packages Dubai AED" were cheaper and more open about price than the main sample: 12 of the 13 publish prices, all in dirhams. Their cheapest website package had a median of AED 1,750 (six agencies, from AED 999 to AED 2,900), and monthly SEO a median of AED 2,000 (seven agencies, from AED 199 to AED 2,500). Arabic was rarer: 6 of the 13 say they build Arabic sites, and none of the 12 we could check has an Arabic version of its own site.</p>
            <p>If you search with "packages" or "price" in your query, you will find these cheaper offers first. Compare what each package includes, the number of pages, revisions and whether Arabic is in it, before you compare the price.</p>

            <h2 id="where-to-start">Where to start</h2>
            <p>Decide first whether you need Arabic at launch. If most of your customers search in Arabic, build both languages from the start: adding Arabic later to a site built only for English often means rebuilding the layout. If you are testing a market, an English site built with logical properties and room for a second language costs less now and takes Arabic later without a rebuild.</p>
            <p>We build bilingual Arabic and English websites for businesses in Dubai and across the UAE, from Kolkata, with an office day that runs 7:30 AM to 4:30 PM UAE time. Our <Link to="/services/website-design-development">website packages</Link> start at AED 549 for visitors in the UAE, and your written quote prices both languages before any work starts. Read how quotes, calls and payments work on our <Link to="/locations/uae">page for Dubai and the UAE</Link>, or see our <Link to="/services/seo-services">SEO services</Link> for Arabic and English search.</p>
        </>
    );
}
`;export{e as default};