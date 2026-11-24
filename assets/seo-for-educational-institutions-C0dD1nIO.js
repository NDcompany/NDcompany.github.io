var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>Schools, colleges and coaching institutes do SEO by making sure Google can find and read one clear page for each thing a parent or student searches for (admissions, fees, courses, results, how to reach the campus), by keeping an accurate Google Business Profile for each campus, and by collecting genuine reviews. There is no trick to it. Google says "there are no secrets here that'll automatically rank your site first in Google", so the work is mostly clear information, put where people and search engines can reach it.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>In our 30 October 2026 check of Kolkata businesses on Google Maps, 50 of 70 schools (71%) listed no website, and 24 of 70 coaching centres (34%) listed none.</li>
                    <li>Give each campus its own Google Business Profile with the real name, a precise address and a link to that campus's page.</li>
                    <li>Put fees, admission steps, courses and results on pages of their own, as text, with titles that say what the page is.</li>
                    <li>Google bans review incentives, including discounts and free services in exchange for a review, and says merchants should not selectively ask for positive reviews.</li>
                    <li>Make Bengali or Hindi pages only if you will keep them complete, and link each translation to the others.</li>
                </ul>
            </Callout>

            <h2 id="what-seo-means">What does SEO mean for a school or coaching institute?</h2>
            <p>It means being found by people who are choosing an institution. A parent might search "CBSE school near me" on a phone, a student might search "NEET coaching fees Kolkata", and a college applicant might search a course name plus your city. Each search should lead to a page that answers it.</p>
            <p>Two Google facts shape the work. First, Google "uses the mobile version of a site's content, crawled with the smartphone agent, for indexing and ranking" (<a href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" target="_blank" rel="noopener noreferrer">Google Search Central on mobile-first indexing</a>), so what a phone shows is what counts. Second, Google's own guidance is that people-first content is "created primarily for people, and not to manipulate search engine rankings" (<a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">Google Search Central on helpful content</a>). For an institution, that means real facts: the fee, the date, the board, the batch size, who teaches.</p>
            <p>Nobody can promise you a first-page position, and we will not. What you can do is remove the reasons you are missed: find what blocks you, fix it, then measure.</p>

            <h2 id="the-gap">How many schools and coaching centres are missing a website?</h2>
            <p>Many. In our check of 901 Kolkata businesses on Google Maps, schools were the third most likely kind to list no website. We counted a business as having none when its Google Maps profile listed none, so a school with a site it never added to its profile is counted in the 71%. That is still a lost chance: the profile is where many parents land first.</p>
            <Chart
                type="bar"
                title="Kolkata listings on Google Maps with no website, by kind of business"
                unit="%"
                data={[
                    ['Schools', 71],
                    ['All 14 kinds of business in the study', 52],
                    ['Coaching centres', 34],
                ]}
                source="N&D Co. survey of Google Maps listings in Kolkata, 30 October 2026"
                note="Up to 70 open businesses per kind of business: 50 of 70 schools and 24 of 70 coaching centres listed no website. 901 businesses across 14 kinds in all. Kolkata only; other cities may differ."
            />
            <p>Coaching centres do better on having a site. Of the 42 working coaching centre homepages we checked, 40% carried local business structured data, and their median mobile PageSpeed score was 55 out of 100. The full method and every figure are in our <Link to="/blogs/kolkata-small-business-websites">study of Kolkata small-business websites</Link>.</p>

            <h2 id="pages-needed">Which pages does an institution need?</h2>
            <p>Start from what people search, then make one page per need. A single page called "Admissions and more" cannot answer five questions well. This table is our suggested starting set, not a rule from Google.</p>
            <div className="blog-table" role="region" aria-label="Pages an educational institution needs and the search each one answers" tabIndex={0}>
                <table>
                    <caption>Pages to build, by what the visitor wants</caption>
                    <thead>
                        <tr>
                            <th scope="col">Page</th>
                            <th scope="col">Who searches for it</th>
                            <th scope="col">What it should state</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Admissions</th><td>Parents, applicants</td><td>Classes or courses open, eligibility, dates, documents, how to apply, who to call</td></tr>
                        <tr><th scope="row">Fees</th><td>Parents, students</td><td>Fee per class, course or batch, what it covers, payment dates</td></tr>
                        <tr><th scope="row">One page per course or class group</th><td>Students, coaching applicants</td><td>Syllabus or board, duration, timings, teachers, entry test if any</td></tr>
                        <tr><th scope="row">Results</th><td>Parents, students</td><td>Year, exam, pass rate and toppers, with permission for any name or photo</td></tr>
                        <tr><th scope="row">Campus and contact</th><td>Anyone nearby</td><td>Full address, phone, map link, how to reach it, office timings</td></tr>
                        <tr><th scope="row">About and faculty</th><td>Parents</td><td>Affiliation, years of operation, leadership, who writes or checks the content</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Write each in plain text a phone can read. Google asks whether it is "self-evident to your visitors who authored your content", so name the principal, the head of department or the admissions office on the page that speaks for them. To see when people search for your admissions pages, open the performance report in Search Console and compare your queries month by month before you plan the year's updates.</p>

            <h2 id="business-profile">How should each campus use Google Business Profile?</h2>
            <p>Your Google Business Profile is the card people see in Google Maps and in the local results. Google's guidelines say: "Do not create more than one page for each location of your business", and "all locations must have the same name unless" the real-world name varies by location (<a href="https://support.google.com/business/answer/3038177?hl=en" target="_blank" rel="noopener noreferrer">Google Business Profile Help, guidelines for representing your business</a>). In practice, one profile per campus, each with its own address and phone number.</p>
            <ul>
                <li><strong>Use the real name.</strong> The guidelines say your name "should reflect your business's real-world name" and that "including unnecessary information in your business name isn't permitted". No "Best CBSE school in Barrackpore" in the name field.</li>
                <li><strong>Give a precise address.</strong> The guidelines ask for "a precise, accurate address and/or service area". Pick the closest category and "use as few categories as possible".</li>
                <li><strong>Link the right page.</strong> Google asks for "a website that represents your individual business location", so link each campus profile to that campus's page, not only a homepage that mentions all of them.</li>
                <li><strong>Mind the hours field.</strong> The same page says certain businesses "shouldn't provide hours", including "those with varied hours (like schedules for different types of activities, including showtimes, worship services, or classes)", and its list of examples includes "Schools and universities". If your timings vary by batch or class, put them on your website instead.</li>
                <li><strong>Departments are separate.</strong> Google lets "publicly-facing departments that operate as distinct entities" have their own page, with a name different from the main business and "distinct categories". Google adds that "typically such departments have a separate customer entrance". In our reading, a class or a course is not a department, so do not make a profile for each.</li>
            </ul>
            <p>Our <Link to="/blogs/google-business-profile-guide">Google Business Profile guide</Link> covers verification and fixing duplicates, and our <Link to="/blogs/local-seo-audit">local SEO audit checklist</Link> covers consistency across other directories. Google says local ranking is based on relevance, distance and prominence, and that "there's no way to request or pay for a better local ranking on Google" (<a href="https://support.google.com/business/answer/7091?hl=en" target="_blank" rel="noopener noreferrer">Google Business Profile Help, tips to improve your local ranking</a>).</p>

            <h2 id="titles-urls">How should we write titles, descriptions and URLs?</h2>
            <p>A page title should be "unique to the page, clear and concise, and accurately describes the contents of the page" (<a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">Google's SEO starter guide</a>). Google also says to "avoid repeated or boilerplate text" in titles (<a href="https://developers.google.com/search/docs/appearance/title-link" target="_blank" rel="noopener noreferrer">Google Search Central on title links</a>). Many institution sites give every page the same title, the school's name. A better set looks like this, with your own name and facts in place of the examples:</p>
            <ul>
                <li><code>Class 11 admission 2027-28 | Example School, Barrackpore</code> for the admissions page.</li>
                <li><code>JEE Main coaching: batches, timings and fees | Example Institute</code> for a course page.</li>
                <li><code>Class 12 board results 2026 | Example School</code> for the results page.</li>
            </ul>
            <p>Meta descriptions follow the same rule: Google says a good one is "short, unique to one particular page, and includes the most relevant points of the page" (same starter guide), and that "identical or similar descriptions on every page of a site aren't helpful" (<a href="https://developers.google.com/search/docs/appearance/snippet" target="_blank" rel="noopener noreferrer">Google Search Central on snippets</a>).</p>
            <p>For URLs, Google says to "include words in the URL that may be useful for users", and a URL "that only contains random identifiers is less helpful". <code>/admissions/class-11</code> beats <code>/page.php?id=47</code>. Link between your own pages with descriptive anchor text, for example "Class 11 admission steps", never "click here".</p>

            <h2 id="structured-data">Does structured data help a school?</h2>
            <p>It helps Google read your details, but it does not promise a rich result. Google says Organization markup "can help Google better understand your organization's administrative details", has "no required properties", and recommends properties such as <code>name</code>, <code>url</code>, <code>logo</code>, <code>address</code> and <code>contactPoint</code>, along with "the most specific schema.org subtype" that fits (<a href="https://developers.google.com/search/docs/appearance/structured-data/organization" target="_blank" rel="noopener noreferrer">Google Search Central on Organization structured data</a>). Schema.org lists <a href="https://schema.org/School" target="_blank" rel="noopener noreferrer">School</a> as a type under <a href="https://schema.org/EducationalOrganization" target="_blank" rel="noopener noreferrer">EducationalOrganization</a>, with <code>CollegeOrUniversity</code>, <code>HighSchool</code> and <code>Preschool</code> beside it, so a school can use the type that matches it. Its homepage should also say the same name and address as its Business Profile.</p>
            <p>Coaching institutes with several courses can look at Google's course list markup. Its rules: "You must mark up at least three courses", and you must add carousel markup to a summary page (<a href="https://developers.google.com/search/docs/appearance/structured-data/course" target="_blank" rel="noopener noreferrer">Google Search Central on course list structured data</a>). The page adds that "Google does not guarantee that features that consume structured data will show up in search results". Build the course pages first, then add the markup. Our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> shows how to test it.</p>

            <h2 id="languages">Should we publish pages in Bengali or Hindi?</h2>
            <p>Only if you will keep them complete. Some families may search in Bengali or Hindi, but a page that is half translated helps nobody. Google says to use hreflang when you have "multiple versions of a page for different languages or regions", and that "each language version must list itself as well as all other language versions" (<a href="https://developers.google.com/search/docs/specialty/international/localized-versions" target="_blank" rel="noopener noreferrer">Google Search Central on localized versions</a>). It also says localized versions "are only considered duplicates if the main content of the page remains untranslated".</p>
            <p>So a real Bengali admissions page, with the same fees and dates as the English one, can sit beside it with hreflang linking both. A Bengali menu above an English page cannot. If you only publish in English, add no hreflang at all.</p>

            <h2 id="results-notices">What about results, brochures and notices?</h2>
            <p>Many institutions publish results and prospectuses as PDFs or photos of a noticeboard. Google lists "Adobe Portable Document Format (.pdf)" among the file types it can index (<a href="https://developers.google.com/search/docs/crawling-indexing/indexable-file-types" target="_blank" rel="noopener noreferrer">Google Search Central on indexable file types</a>), so a PDF can show up in search. But a web page is easier to read on a phone, easier to update and easier to link to, so put the key facts in a page and offer the PDF as a download.</p>
            <p>For photos of the campus, classrooms or a notice, Google calls alt text "the most important attribute" for image metadata, and warns that stuffing it with keywords looks like spam (<a href="https://developers.google.com/search/docs/appearance/google-images" target="_blank" rel="noopener noreferrer">Google Search Central on image SEO</a>). Describe the picture in a sentence. For results, show pass rates and the toppers who agreed to be named; that is our advice, not a Google rule, but a child's name and marks do not belong on a public page without the family's consent.</p>

            <h2 id="reviews">How do reviews work for institutions?</h2>
            <p>Parents read reviews before they call. Google states that "more reviews and positive ratings can help your business's local ranking", and the rules on getting them are strict. Its policy bans reviews posted in exchange for payment, discounts or free goods or services, and bars merchants who "selectively solicit positive reviews", who "require or pressure users to leave ratings" or who ask that "specific content be included" (<a href="https://support.google.com/contributionpolicy/answer/7400114?hl=en" target="_blank" rel="noopener noreferrer">Google Maps prohibited and restricted content policy</a>). Business Profile Help adds that offering incentives like "free or discounted goods or services" for reviews is "strictly prohibited" (<a href="https://support.google.com/business/answer/3474122?hl=en" target="_blank" rel="noopener noreferrer">Google Business Profile Help on reviews</a>).</p>
            <p>For a school that rules out a fee discount, a free test series or an entry in a lucky draw for a review. It also rules out the principal telling staff to post a certain number. The policy names "a conflict of interest" including "current or former employment" as a reason to remove content, so staff reviews are a poor idea.</p>
            <p>What you can do: ask every family and student, not just the happy ones, to leave a review and share your review link or QR code. Google says "you can ask customers to visit a Google link or scan a QR code". Reply to every review, and keep personal details out of your replies.</p>

            <h2 id="speed-phones">Does site speed matter for a school website?</h2>
            <p>It matters, within limits. Google says "Core Web Vitals are used by our ranking systems", and also that good scores do not guarantee a top position (<a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">Google Search Central on page experience</a>). A fee page that is slow on a phone is a poor first impression. Large gallery photos, a video on the homepage and a slider of banners are common causes of slow pages on any site. Our <Link to="/blogs/core-web-vitals-explained">Core Web Vitals guide</Link> explains how to read your scores, and <Link to="/tools/rankguru">RankGuru</Link> checks the titles, descriptions and headings of a page for free.</p>
            <p>Check for accidental blocks too. A <code>noindex</code> rule makes Google "drop that page entirely from Google Search results", and if robots.txt blocks the page, Google never sees that rule, so the page can still appear in results (<a href="https://developers.google.com/search/docs/crawling-indexing/block-indexing" target="_blank" rel="noopener noreferrer">Google Search Central on blocking indexing</a>). Admission pages built on a test site and then copied to the live one can arrive with <code>noindex</code> still set.</p>

            <h2 id="locality-pages">Should a coaching institute make a page for every locality?</h2>
            <p>No. Pages for "coaching in Salt Lake", "coaching in Dum Dum" and "coaching in Barrackpore" that differ only in the place name are the thing Google's spam policies warn against. They list "having multiple domain names or pages targeted at specific regions or cities that funnel users to one page" as doorway abuse (<a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener noreferrer">Google Search spam policies</a>). A page for a real centre with its own address, batches and teachers is fine. A page that exists only to catch a search is not.</p>

            <h2 id="first-month">What should we do in the first month?</h2>
            <ol>
                <li>Search your own institution and its main courses on a phone. Note what appears, and what a parent would see first.</li>
                <li>Claim or fix each campus's Google Business Profile: name, address, phone, category, website link.</li>
                <li>If there is no website, plan one with the pages in the table above. Our guide to <Link to="/blogs/website-cost-india">what a website costs in India</Link> sets out the yearly costs, and a <Link to="/services/website-design-development">website design and development</Link> brief should list those pages.</li>
                <li>Give every page a unique title and description, and move fees and dates out of images into text.</li>
                <li>Add a review link to your admissions desk, your receipts and your WhatsApp reply, with no incentive attached.</li>
                <li>Run a check on the homepage and the admissions page, then read the performance report in Search Console by month. Our <Link to="/blogs/free-seo-audit-how-it-works">free SEO audit</Link> reads a site the same way.</li>
            </ol>
            <p>None of this needs a large budget. It needs someone at the institution who keeps the facts current each admission cycle and replies to reviews. If you want help, <Link to="/services/seo-services">our SEO team</Link> can start with an audit of what you have.</p>
        </>
    );
}
`;export{e as default};