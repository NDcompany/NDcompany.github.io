var e=`import { Link } from 'react-router-dom';
import { Callout, Chart, Code } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>A Google Business Profile (formerly Google My Business) is the listing that shows your business on Google Search and Maps, with your hours, phone number, photos and reviews, and Google <a href="https://support.google.com/business/answer/2911778?hl=en" target="_blank" rel="noopener noreferrer">charges nothing</a> for it. To set one up, search Maps for your business, claim the listing or add a new one, verify it with the method Google offers, and fill in every field accurately. To keep it current, answer reviews and suggested edits every few days and read the Performance report once a month. Until <a href="https://blog.google/products/ads-commerce/connect-local-holiday-shoppers/" target="_blank" rel="noopener noreferrer">November 2021</a> it was called Google My Business.</p>
            <p>We checked each rule below against Google's help pages in October 2026. More guides like this are on our <Link to="/blogs/topic/seo">SEO topic page</Link>.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>The profile is free, and the verification review <a href="https://support.google.com/business/answer/7107242?hl=en" target="_blank" rel="noopener noreferrer">takes up to 5 business days</a>.</li>
                    <li>The business should own it; staff and agencies get <a href="https://support.google.com/business/answer/3403100?hl=en" target="_blank" rel="noopener noreferrer">manager access</a>.</li>
                    <li>Use your signboard name, the most specific category and <a href="https://support.google.com/business/answer/6303076?hl=en" target="_blank" rel="noopener noreferrer">special hours</a> for closures of up to 6 days.</li>
                    <li>Send every customer the same review link and offer nothing in return. Google <a href="https://blog.google/products-and-platforms/products/maps/new-ways-were-protecting-businesses-on-maps/" target="_blank" rel="noopener noreferrer">blocked or removed over 292 million policy-violating reviews in 2025</a>.</li>
                    <li>Answer suggested edits within <a href="https://support.google.com/business/answer/3480441?hl=en" target="_blank" rel="noopener noreferrer">4 days</a> and read the Performance report monthly.</li>
                </ul>
            </Callout>

            <h2 id="why-it-matters-in-india">Why the profile matters, especially in India</h2>
            <p>Almost every search visit in India comes from Google. StatCounter puts Google's share of search engine referrals there at <a href="https://gs.statcounter.com/search-engine-market-share/all/india/#yearly-2025-2025-bar" target="_blank" rel="noopener noreferrer">97.31% for 2025</a>, a wider lead than in the UK, the US or worldwide. Google said in 2024 that <a href="https://blog.google/intl/en-in/company-news/outreach-initiatives/google-for-india-2024-bringing-ai-to-every-indian-across-our-products/" target="_blank" rel="noopener noreferrer">over 35 million Indian businesses</a> were online across Search and Maps. For a business here, this is the listing to get right first.</p>
            <Chart
                type="bar"
                title="Google's share of search engine referrals in 2025"
                unit="%"
                data={[['India', 97.31], ['United Kingdom', 93.03], ['Worldwide', 89.91], ['United States', 86.16]]}
                source="StatCounter Global Stats, search engine market share, all platforms, 2025"
                sourceUrl="https://gs.statcounter.com/search-engine-market-share/all/india/#yearly-2025-2025-bar"
                note="StatCounter counts visits from search results to the sites that run its tracking code, not searches. Full year 2025, all platforms; for the other regions, change the region on the same report."
            />
            <p>Google says there is <a href="https://support.google.com/business/answer/7091?hl=en" target="_blank" rel="noopener noreferrer">no way to request or pay for a better local ranking</a>. Results are mainly based on relevance (how well a profile matches the search), distance from the searcher and prominence, which Google also calls popularity: how well known the business is, including how many websites link to it and how many reviews it has. You can't change distance, but complete details, the right category, reviews and links all count.</p>

            <h2 id="three-decisions">Three decisions to make before you start</h2>
            <h3 id="who-owns-it">Who will own the profile</h3>
            <p>Create or claim the profile from a Google Account that belongs to the business, not to an employee or an agency. A profile has <a href="https://support.google.com/business/answer/3403100?hl=en" target="_blank" rel="noopener noreferrer">only one primary owner</a>. Everyone else who helps gets manager access on their own Google Account, so nobody shares a password. Managers can do nearly everything except add or remove users and remove the profile. New owners and managers wait 7 days before they can transfer ownership or delete the profile, and Google <a href="https://support.google.com/business/answer/13763036?hl=en" target="_blank" rel="noopener noreferrer">may revoke ownership</a> if you haven't signed in recently. Our guide to <Link to="/blogs/plan-a-business-website">planning a business website</Link> gives the same advice for domains.</p>

            <h3 id="storefront-or-service-area">Storefront, service area or both</h3>
            <p>Only businesses that <a href="https://support.google.com/business/answer/13763036?hl=en" target="_blank" rel="noopener noreferrer">make in-person contact with customers</a> during their stated hours qualify, so online-only businesses can't have a profile. If customers come to an address with <a href="https://support.google.com/business/answer/3038177?hl=en" target="_blank" rel="noopener noreferrer">permanent signage</a>, you are a storefront. A virtual office isn't eligible, and a co-working desk needs signage, visiting customers and your own staff during business hours. If you go to customers instead, you are a service-area business: hide the address and list <a href="https://support.google.com/business/answer/9157481?hl=en" target="_blank" rel="noopener noreferrer">up to 20 areas</a> by city or PIN code, with no radius, within about 2 hours' drive of your base. Do both and you are hybrid.</p>
            <p>Say you run a bakery with a counter in Salt Lake, Kolkata. People walk in, so you show the address. If you repair air conditioners in customers' homes and work from your own home in Barrackpore, you hide the address and list the towns you cover.</p>

            <h3 id="name-and-phone">The name and phone number you will use</h3>
            <p>Use the name on your signboard, website and stationery, and nothing more: no taglines, product or place words, or legal terms such as Pvt Ltd unless your signage and invoices carry them. Google's example is that <a href="https://support.google.com/business/answer/3038177?hl=en" target="_blank" rel="noopener noreferrer">"Midas" is acceptable and "Midas Auto Service Experts" is not</a>. Nor may you repeat the name in two scripts, even if your board shows it in English and Bengali. Extra words can get a profile suspended, and if a competitor stuffs keywords into their name, you can <a href="https://support.google.com/business/answer/3039617?hl=en" target="_blank" rel="noopener noreferrer">suggest an edit</a>.</p>
            <p>For the phone, the <a href="https://support.google.com/business/answer/3038177?hl=en" target="_blank" rel="noopener noreferrer">guidelines</a> ask for a local number under the business's direct control, and someone should answer it, because an <a href="https://support.google.com/business/answer/7107242?hl=en" target="_blank" rel="noopener noreferrer">IVR system can't receive a verification code</a>. You can add <a href="https://support.google.com/business/answer/3039617?hl=en" target="_blank" rel="noopener noreferrer">up to 2 more numbers</a>, and in India Google double-checks the number to make sure it is correct.</p>

            <h2 id="create-or-claim">How to create or claim a Google Business Profile</h2>
            <ol>
                <li>Search Google Maps for your business name and town. A listing may exist already, because anyone can <a href="https://support.google.com/business/answer/3039617?hl=en" target="_blank" rel="noopener noreferrer">add a missing place</a>.</li>
                <li>If it is unverified, select Claim this business and follow Google's <a href="https://support.google.com/business/answer/2911778?hl=en" target="_blank" rel="noopener noreferrer">claiming steps</a>.</li>
                <li>If someone else verified it, such as a former employee or agency, <a href="https://support.google.com/business/answer/4566671?hl=en" target="_blank" rel="noopener noreferrer">request ownership</a>. The current owner has 3 days to respond. For a service-area business with no shop or office, Google asks you to contact its support instead.</li>
                <li>If there is no listing, add one at <a href="https://business.google.com/add" target="_blank" rel="noopener noreferrer">business.google.com/add</a>.</li>
                <li>Keep to one profile per business. Google <a href="https://support.google.com/business/answer/12756178?hl=en" target="_blank" rel="noopener noreferrer">doesn't show duplicates</a> on Search or Maps.</li>
            </ol>

            <h2 id="verification">How to verify a Google Business Profile</h2>
            <p>Google decides which methods you see, based on your business type, region and hours, and <a href="https://support.google.com/business/answer/7107242?hl=en" target="_blank" rel="noopener noreferrer">you can't change them</a>.</p>
            <div className="blog-table" role="region" aria-label="Verification methods compared" tabIndex={0}>
                <table>
                    <caption>Verification methods and what each one involves</caption>
                    <thead>
                        <tr>
                            <th scope="col">Method</th>
                            <th scope="col">What it involves</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Phone or text</th>
                            <td>A code sent to the business number. An IVR menu won't receive it.</td>
                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>A message to the address shown on the verification screen.</td>
                        </tr>
                        <tr>
                            <th scope="row">Video recording</th>
                            <td><a href="https://support.google.com/business/answer/14271705?hl=en" target="_blank" rel="noopener noreferrer">One unedited take of at least 30 seconds</a>, recorded on a phone through the profile, with no other people's faces or ID numbers.</td>
                        </tr>
                        <tr>
                            <th scope="row">Live video call</th>
                            <td>A call with Google support during business hours, from the premises.</td>
                        </tr>
                        <tr>
                            <th scope="row">Postcard</th>
                            <td>A 5-digit code by post. <a href="https://support.google.com/business/answer/7107242?hl=en" target="_blank" rel="noopener noreferrer">Most arrive within 14 days, and each code expires after 30 days</a>. Don't edit the name, address or category while you wait.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>For a video, plan the shots against Google's <a href="https://support.google.com/business/answer/14271705?hl=en" target="_blank" rel="noopener noreferrer">requirements</a>. A storefront shows street signs or neighbouring shops, the name on a permanent sign that matches the profile, and something only staff can open, such as the cash register. A service-area business films landmarks near its base, its tools or branded vehicle, and an invoice or utility bill in the business name.</p>
            <p>Google's review then <a href="https://support.google.com/business/answer/7107242?hl=en" target="_blank" rel="noopener noreferrer">takes up to 5 business days</a>, or can be instant if your website is verified in Search Console (our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> covers setting it up). Never share the code, even with people who manage the profile; Google will never ask for it.</p>

            <h2 id="fill-in-the-profile">Fill in the profile</h2>

            <h3 id="categories">Categories</h3>
            <p>Choose the most specific primary category for the whole business: Google's example is <a href="https://support.google.com/business/answer/7249669?hl=en" target="_blank" rel="noopener noreferrer">Nail salon, not Salon</a>. Add others only for distinct departments or services, <a href="https://support.google.com/business/answer/3039617?hl=en" target="_blank" rel="noopener noreferrer">up to 9 more</a>, using the test in Google's <a href="https://support.google.com/business/answer/3038177?hl=en" target="_blank" rel="noopener noreferrer">guidelines</a>: a category completes "This business IS a", not "This business HAS a". Categories affect your local ranking, and changing one can send you back through verification.</p>

            <h3 id="address-and-pin">Address and map pin</h3>
            <p>Enter the official address with building and floor numbers, and add landmarks <a href="https://support.google.com/business/answer/3038177?hl=en" target="_blank" rel="noopener noreferrer">only where the address alone doesn't pinpoint you</a>. Check that the map pin sits on your door, and move it if it doesn't. Google's India blog says dropping a pin on Maps and sharing it with friends and family is <a href="https://blog.google/intl/en-in/products/explore-communicate/ai-continues-to-supercharge-google-maps-for-india/" target="_blank" rel="noopener noreferrer">"a very common practice in India"</a>. Changes <a href="https://support.google.com/business/answer/2853879?hl=en" target="_blank" rel="noopener noreferrer">usually show within about 10 minutes</a> but can take up to 30 days.</p>

            <h3 id="hours-and-holidays">Hours, holidays and festival closures</h3>
            <p>Set your regular hours, then use <a href="https://support.google.com/business/answer/6303076?hl=en" target="_blank" rel="noopener noreferrer">special hours</a> for changes or closures of up to 6 days in a row, such as Durga Puja, and mark the business temporarily closed for 7 days or more. Special hours show only when the profile is set to "Open with main hours".</p>

            <h3 id="description-and-services">Description, services and products</h3>
            <p>Use the description's <a href="https://support.google.com/business/answer/3039617?hl=en" target="_blank" rel="noopener noreferrer">750 characters</a> for what you offer, what sets you apart and how long you have been in business, with no links and no focus on prices or offers. Some service categories get a <a href="https://support.google.com/business/answer/9455399?hl=en" target="_blank" rel="noopener noreferrer">services editor</a> for listing services with prices. <a href="https://support.google.com/business/answer/3038177?hl=en" target="_blank" rel="noopener noreferrer">Google's guidelines</a> limit in-store products to retailers in the US, Canada, the UK and Ireland, but the <a href="https://support.google.com/business/answer/9124203?hl=en" target="_blank" rel="noopener noreferrer">product editor</a> page names no country, so check whether Edit products appears.</p>

            <h3 id="photos-and-videos">Photos and videos</h3>
            <p>Add a logo, a cover photo and real photos of the shopfront, the inside and your work. Google's <a href="https://support.google.com/business/answer/6103862?hl=en" target="_blank" rel="noopener noreferrer">photo guidelines</a> ask for JPG or PNG files of 10 KB to 5 MB, ideally 720 by 720 pixels, in focus and without heavy filters, and videos of up to 30 seconds. Uploads appear only after verification and can take 24 to 48 hours. Keep the logo and name consistent with your signboard; a <Link to="/blogs/brand-style-guide">brand style guide</Link> helps.</p>

            <h3 id="website-chat-and-social">Website, chat and social links</h3>
            <p>Link your own website and <a href="https://support.google.com/business/answer/3039617?hl=en" target="_blank" rel="noopener noreferrer">check that Googlebot isn't blocked</a> on it. Tag the link so Google Analytics can separate profile visits. Google says to <a href="https://support.google.com/analytics/answer/10917952?hl=en" target="_blank" rel="noopener noreferrer">always use utm_source, utm_medium and utm_campaign</a>; a medium of <code>organic</code> keeps the visits in the <a href="https://support.google.com/analytics/answer/9756891?hl=en" target="_blank" rel="noopener noreferrer">Organic Search channel</a>, and the campaign name tells them apart.</p>
            <Code lang="plaintext" title="Website field">{\`https://www.example.in/?utm_source=google&utm_medium=organic&utm_campaign=gbp-listing\`}</Code>
            <p>People who tap it on a phone need a page that loads fast; our <Link to="/blogs/core-web-vitals-explained">Core Web Vitals guide</Link> explains how Google measures that. No website yet? See our <Link to="/services/website-design-development">website design and development</Link> service.</p>
            <p>Where your profile offers them, add a <a href="https://support.google.com/business/answer/15013580?hl=en" target="_blank" rel="noopener noreferrer">WhatsApp or text chat option</a> (pick one, since Google shows only the text option if you add both) and <a href="https://support.google.com/business/answer/3039617?hl=en" target="_blank" rel="noopener noreferrer">one social link per platform</a>, from accounts the business owns, even when an agency handles your <Link to="/services/social-media-management">social media management</Link>.</p>

            <h2 id="reviews">Reviews: asking, replying and the rules</h2>

            <h3 id="asking-for-reviews">Asking for reviews</h3>
            <p>Google's tips suggest <a href="https://support.google.com/business/answer/3474122?hl=en" target="_blank" rel="noopener noreferrer">asking customers for reviews</a> with a link or QR code. Get both in a computer browser, the <a href="https://support.google.com/business/answer/16816815?hl=en" target="_blank" rel="noopener noreferrer">only place Google makes the QR code</a>: open Read reviews, then Get more reviews. Put them on receipts, in thank-you emails and WhatsApp chats and on a counter card, for every customer, not only the happy ones. Ask steadily rather than in bursts. In BrightLocal's 2026 survey, <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" target="_blank" rel="noopener noreferrer">74% of US adults</a> look for reviews from the last three months, and Google's systems watch for <a href="https://blog.google/products-and-platforms/products/maps/how-machine-learning-keeps-contributed-content-helpful/" target="_blank" rel="noopener noreferrer">a sudden spike in 1 or 5-star reviews</a>.</p>

            <h3 id="what-google-does-not-allow">What Google does not allow</h3>
            <p>Google's <a href="https://support.google.com/contributionpolicy/answer/7400114?hl=en" target="_blank" rel="noopener noreferrer">Maps content policy</a> rules out:</p>
            <ul>
                <li>discounts, freebies or payment for a review, or for changing or removing a negative one</li>
                <li>asking only the customers you expect to be happy, or discouraging negative reviews</li>
                <li>pressuring customers to review while they are on the premises, or telling them what to write</li>
                <li>review targets for staff, or asking for reviews that name a staff member</li>
                <li>reviews from current or former employees, competitors, family or anyone else with a conflict of interest</li>
            </ul>
            <Callout title="Watch out">
                <p>If Google finds fake reviews, or reviews traded for payment, discounts or freebies, it can do more than delete them. Under its fake engagement policy it can <a href="https://support.google.com/business/answer/14114287?hl=en" target="_blank" rel="noopener noreferrer">stop the profile receiving new reviews</a> for a set period, unpublish its existing reviews and show customers a warning that fake reviews were removed. It emails the owner before applying a restriction, and you can appeal.</p>
            </Callout>
            <p>By its own count, Google blocked or removed <a href="https://blog.google/products-and-platforms/products/maps/google-maps-fake-contributions-ai-machine-learning/" target="_blank" rel="noopener noreferrer">over 115 million policy-violating reviews in 2022</a>, <a href="https://blog.google/products-and-platforms/products/maps/how-machine-learning-keeps-contributed-content-helpful/" target="_blank" rel="noopener noreferrer">over 170 million in 2023</a>, <a href="https://blog.google/products-and-platforms/products/maps/google-business-profiles-ai-fake-reviews/" target="_blank" rel="noopener noreferrer">more than 240 million in 2024</a> and <a href="https://blog.google/products-and-platforms/products/maps/new-ways-were-protecting-businesses-on-maps/" target="_blank" rel="noopener noreferrer">over 292 million in 2025</a>, and it credits new machine-learning models for catching more of them.</p>
            <Chart
                type="column"
                title="Policy-violating reviews Google blocked or removed, by year"
                unit=" million"
                data={[['2022', 115], ['2023', 170], ['2024', 240], ['2025', 292]]}
                source="Google, annual Maps trust and safety posts, 2023 to 2026"
                sourceUrl="https://blog.google/products-and-platforms/products/maps/new-ways-were-protecting-businesses-on-maps/"
                note="Google gives each figure as a minimum (over or more than). The 2025 figure is from the post linked here (16 April 2026); 2022 to 2024 come from Google's posts of 31 March 2023, 13 February 2024 and 7 April 2025, linked in the paragraph above."
            />
            <p>The 2025 figure is about two and a half times 2022's. By April 2025 Google was also showing alerts in the US, UK and India when, in some cases, it had <a href="https://blog.google/products-and-platforms/products/maps/google-business-profiles-ai-fake-reviews/" target="_blank" rel="noopener noreferrer">recently removed suspicious five-star reviews</a> from a place.</p>

            <h3 id="replying-to-reviews">Replying to reviews</h3>
            <p>Reply to every review, and soon. <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" target="_blank" rel="noopener noreferrer">BrightLocal's 2026 survey</a> asked US adults how quickly they expect a business to answer:</p>
            <Chart
                type="bar"
                title="How quickly people expect a business to reply to their review"
                unit="%"
                data={[['On the same day', 19], ['By the next day', 32], ['Within a week', 81]]}
                source="BrightLocal, Local Consumer Review Survey 2026"
                sourceUrl="https://www.brightlocal.com/research/local-consumer-review-survey/"
                note="Survey of 1,002 US adults via SurveyMonkey, published February 2026. The bars are cumulative: anyone who expects a same-day reply also counts in the later bars."
            />
            <p>Four in five expect a reply within a week, so checking at least every few days, as the routine below suggests, keeps you inside that window. In the <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" target="_blank" rel="noopener noreferrer">same survey</a>, the same-day share rose from 6% to 19% in a year, and half said generic or templated replies put them off. Google's <a href="https://support.google.com/business/answer/3474122?hl=en" target="_blank" rel="noopener noreferrer">reply tips</a> say much the same. Keep replies short and polite, answer the specific point rather than sending everyone the same thank-you, don't push offers, and apologise where it is fair. Google <a href="https://support.google.com/business/answer/3474050?hl=en" target="_blank" rel="noopener noreferrer">checks replies before they appear</a>, usually within 10 minutes, and they show as the business, not under your name.</p>

            <h3 id="reporting-reviews">Reporting a review</h3>
            <p>Report a review only if it breaks the policy, <a href="https://support.google.com/business/answer/4596773?hl=en" target="_blank" rel="noopener noreferrer">not because you disagree with it</a>. Checks typically take several days, and if Google finds no violation, you get a one-time appeal covering up to 10 reviews. If someone posts fake one-star reviews and then <a href="https://blog.google/products-and-platforms/products/maps/new-ways-were-protecting-businesses-on-maps/" target="_blank" rel="noopener noreferrer">demands payment to remove them</a>, don't pay. Google's reporting page links to separate steps for extortion.</p>

            <h2 id="upkeep-routine">Upkeep: what to check, and how often</h2>
            <div className="blog-table" role="region" aria-label="Upkeep routine" tabIndex={0}>
                <table>
                    <caption>What to check on the profile, and how often</caption>
                    <thead>
                        <tr>
                            <th scope="col">When</th>
                            <th scope="col">What to do</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Every few days</th>
                            <td>Reply to new reviews. Accept or reject suggested edits within <a href="https://support.google.com/business/answer/3480441?hl=en" target="_blank" rel="noopener noreferrer">4 days</a>, or Google may publish them if your website or other public sources back them up. Blue text in the editor marks Google's changes.</td>
                        </tr>
                        <tr>
                            <th scope="row">Every month</th>
                            <td>Read the Performance report (Google <a href="https://support.google.com/business/answer/7163406?hl=en" target="_blank" rel="noopener noreferrer">suggests a monthly look</a>), check photos, hours, services and links, and sign in even if nothing changed. Posts are <a href="https://support.google.com/business/answer/7342169?hl=en" target="_blank" rel="noopener noreferrer">archived after 6 months</a> unless they have a date range.</td>
                        </tr>
                        <tr>
                            <th scope="row">Before festivals</th>
                            <td>Set special hours, or confirm your regular ones.</td>
                        </tr>
                        <tr>
                            <th scope="row">When things change</th>
                            <td>After a move, edit the address and <a href="https://support.google.com/business/answer/3039617?hl=en" target="_blank" rel="noopener noreferrer">verify again</a>. A rename that changes the proper nouns or services in the name, or the category, means <a href="https://support.google.com/business/answer/3038177?hl=en" target="_blank" rel="noopener noreferrer">closing the profile and creating a new one</a>.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>The Performance report's figures <a href="https://support.google.com/business/answer/9918094?hl=en" target="_blank" rel="noopener noreferrer">include Google Ads</a> as well as unpaid results, and its views figure counts a person once a day however often they look.</p>

            <h2 id="agencies-and-scam-calls">Working with agencies, and fake Google calls</h2>

            <h3 id="what-to-ask-a-provider">What to ask a provider</h3>
            <p>If you hire help, Google's <a href="https://support.google.com/business/answer/7353941?hl=en" target="_blank" rel="noopener noreferrer">third-party policies</a> set the rules, and they apply to us too, since we manage profiles as part of our <Link to="/services/seo-services">SEO services</Link>. Ask any provider, including us:</p>
            <ol>
                <li>Will I stay the owner? The business must keep ownership or co-ownership at all times, and it chooses what access the agency gets.</li>
                <li>Will you confirm in writing that the profile is free? A provider that charges a management fee must tell new clients in writing, before it starts, that Business Profile costs nothing extra, and must show its fee on invoices. Google also <a href="https://support.google.com/business/answer/7163406?hl=en" target="_blank" rel="noopener noreferrer">advises owners</a> to get an agreement that lists the services and their costs.</li>
                <li>Will you ask before replying to reviews? Google requires explicit approval, and verbal consent isn't enough.</li>
                <li>Can I leave easily? <a href="https://support.google.com/business/answer/7353941?hl=en" target="_blank" rel="noopener noreferrer">Within 7 business days</a> of your notice, the provider must hand back exclusive control.</li>
            </ol>
            <p>Walk away from anyone who guarantees top placement, claims to be Google, threatens that you will lose your profile or holds a profile hostage for money. Google's policies prohibit all four.</p>

            <h3 id="fake-google-calls">Calls that claim to be from Google</h3>
            <p>Google does use automated calls, texts and WhatsApp messages to confirm business details, but it <a href="https://support.google.com/business/answer/7690269?hl=en" target="_blank" rel="noopener noreferrer">never asks for payment, card details or passwords</a>, and a caller asking for money to keep you on Google is not Google. Its <a href="https://support.google.com/business/answer/6212928?hl=en" target="_blank" rel="noopener noreferrer">official WhatsApp account</a> shows a blue tick and the name Google Maps, sometimes followed by the country name. If someone pretends to be Google, hang up without pressing any buttons. In India, report fraud calls and messages within 30 days on <a href="https://sancharsaathi.gov.in/sfc/" target="_blank" rel="noopener noreferrer">Chakshu</a>, the Department of Telecommunications' reporting service, and if you have lost money, call 1930 or use cybercrime.gov.in.</p>

            <h2 id="suspensions-and-appeals">Why profiles get suspended, and how to appeal</h2>
            <p>Google can suspend profiles that <a href="https://support.google.com/business/answer/4569145?hl=en" target="_blank" rel="noopener noreferrer">don't follow its guidelines</a>, and a restriction on your Google Account suspends every profile it manages. These breaches of the <a href="https://support.google.com/business/answer/3038177?hl=en" target="_blank" rel="noopener noreferrer">guidelines</a> put a profile at risk:</p>
            <div className="blog-table" role="region" aria-label="Guideline breaches and fixes" tabIndex={0}>
                <table>
                    <caption>Guideline breaches and what Google expects instead</caption>
                    <thead>
                        <tr>
                            <th scope="col">Problem</th>
                            <th scope="col">What the guidelines expect</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Keywords, a tagline or a place added to the name</th>
                            <td>The real-world name only</td>
                        </tr>
                        <tr>
                            <th scope="row">A virtual office, P.O. box or unstaffed desk as the address</th>
                            <td>A staffed location with signage, or a hidden address with service areas</td>
                        </tr>
                        <tr>
                            <th scope="row">A home address shown when customers never visit</th>
                            <td>Address hidden, service areas set</td>
                        </tr>
                        <tr>
                            <th scope="row">A phone number or link that redirects elsewhere</th>
                            <td>The business's own number and website</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>To appeal, use Google's appeals tool and attach the kinds of evidence Google lists: business registration, a business licence, tax certificates or utility bills, with the name and address matching the profile. In India that might be a GST registration certificate, a trade licence or an electricity bill in the business name (Google names electricity bills; the other two are our examples). Submit the evidence form <a href="https://support.google.com/business/answer/4569145?hl=en" target="_blank" rel="noopener noreferrer">within 60 minutes</a> of opening it, and don't create a new profile while the appeal is under review.</p>

            <h2 id="where-to-start">Where to start this week</h2>
            <ol>
                <li>Search Maps for your business and check whether a listing exists and whether someone has already claimed it.</li>
                <li>Decide on the primary owner and the business type.</li>
                <li>Claim or create the profile with your signboard name, the most specific category and a local number.</li>
                <li>Verify, and leave the name, address and category alone until it finishes.</li>
                <li>Fill in hours, description, services, photos and a tagged website link, then print a review QR code for the counter.</li>
            </ol>
            <p>Step 1 takes one search, so start there today. If you find a listing you can't get into, or two listings for one business, <Link to="/#contact">send us the Maps link</Link> and ask what we would do. We set up and manage profiles for <Link to="/locations/india">businesses across India</Link>.</p>
        </>
    );
}
`;export{e as default};