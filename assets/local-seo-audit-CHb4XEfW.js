var e=`import { Link } from 'react-router-dom';\r
import { Callout, Chart } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>A local SEO audit checks the things that decide whether your business shows up when people nearby search for what you sell: your Google Business Profile, whether your name, address and phone number match everywhere, your website's location details, your reviews, the links that point to you, and the numbers that show what is working. This checklist takes you through each one in order, with the rule or source behind every check, so you can run it yourself in an afternoon.</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>Google ranks local results mainly on relevance, distance and prominence, and says there is no way to pay for a better local ranking.</li>\r
                    <li>A business name with extra keywords or locations breaks Google's guidelines and can get a profile suspended.</li>\r
                    <li>Keep your name, address and phone number the same on Google, Bing, Apple Maps, directories and your own site.</li>\r
                    <li>Review count, rating and recency all matter to customers: in a 2026 US survey, 47% said they won't use a business with fewer than 20 reviews.</li>\r
                    <li>Measure before you change anything, using the Business Profile performance view and Search Console.</li>\r
                </ul>\r
            </Callout>\r
\r
            <h2 id="how-google-ranks-local">How Google ranks local results</h2>\r
            <p>Google says local results are "mainly based on relevance, distance, and popularity", and its help page defines the three as relevance, distance and prominence (<a href="https://support.google.com/business/answer/7091?hl=en" target="_blank" rel="noopener noreferrer">Google Business Profile Help, tips to improve your local ranking</a>):</p>\r
            <ul>\r
                <li><strong>Relevance</strong> is "how well a Business Profile matches what someone is searching for". Complete and detailed business information helps here.</li>\r
                <li><strong>Distance</strong> is "how far each business is from the customer who's searching". You can't change it, but an accurate address and service area make sure it is measured from the right place.</li>\r
                <li><strong>Prominence</strong> is "how well-known a business is", based partly on "how many websites link to your business and how many reviews you have".</li>\r
            </ul>\r
            <p>The same page says: "There's no way to request or pay for a better local ranking on Google." Every check in this local SEO audit works on one of these three factors.</p>\r
\r
            <h2 id="search-like-a-customer">Step 1: search like a customer and list your competitors</h2>\r
            <p>Start with what customers see. On a phone, search for your main service the way a customer would ("bakery near me", "AC repair Salt Lake", "dentist in Barrackpore") and note where your business appears in the map results (often called the local pack) and in the results below them. Repeat for your two or three most important services. Distance changes the results, so a search from your own shop shows you more favourably than a search from across the city: ask someone in another area to repeat it.</p>\r
            <h3 id="local-keywords">Which searches to check</h3>\r
            <p>Don't guess the searches. Your Business Profile's performance view lists the searches people used to find your profile, and Search Console lists the queries that brought people to your website (both are covered in step 7). Pick the three to five that match what you sell, plus the obvious ones a new customer would type, such as your service with your town's name.</p>\r
            <h3 id="competitors">What to note about each competitor</h3>\r
            <p>For the three businesses that appear above you most often, open their profiles and write down what anyone can see: the category shown under their name, how many reviews they have, their average rating, how recent their newest reviews are, whether they answer reviews, how many photos they show, and whether their website has a page for the service you searched. Then do the same for your own profile. The gaps between you and them are usually the first things to fix.</p>\r
            <p>Write the results down. They are your starting point, and the rest of the audit explains them.</p>\r
\r
            <h2 id="business-profile">Step 2: check your Google Business Profile</h2>\r
            <p>Your profile carries most of the relevance signal. Check each line against <a href="https://support.google.com/business/answer/3038177?hl=en" target="_blank" rel="noopener noreferrer">Google's guidelines for representing your business</a>:</p>\r
            <ul>\r
                <li><strong>One profile per business.</strong> "There should only be one profile per business." Search Maps for your name and phone number to find duplicates.</li>\r
                <li><strong>The real name, nothing added.</strong> Your name "should reflect your business's real-world name", and "including unnecessary information in your business name isn't permitted, and could result in the suspension of your Business Profile." No taglines, services or locations in the name.</li>\r
                <li><strong>Address or service area.</strong> Use "a precise, accurate address and/or service area". If you visit customers rather than receive them, "you should hide your business address from customers."</li>\r
                <li><strong>Few, specific categories.</strong> "Use as few categories as possible to describe your overall core business," and "do not use categories solely as keywords."</li>\r
                <li><strong>Complete details.</strong> Google lists your full address if customers can visit, your hours "including special store hours", what kind of business you are, and other details such as parking or Wi-Fi.</li>\r
                <li><strong>Verified.</strong> Verification "tells Google that you're authorized to represent the business, so it's more likely to show up in search results."</li>\r
            </ul>\r
            <p>Our <Link to="/blogs/google-business-profile-guide">Google Business Profile guide</Link> walks through setting up and fixing each of these.</p>\r
\r
            <h2 id="consistency">Step 3: make your details match everywhere</h2>\r
            <p>Customers and search engines meet your business in many places. Listings that name your business on other sites are often called citations, and the name, address and phone number together are often shortened to NAP. Check that your name, address, phone number, website and hours are identical on each. Bing says the same: "we recommend keeping your business name, address, phone number, website, and other key details consistent and up to date across all of your online channels" (<a href="https://www.bing.com/forbusiness/help/introduction" target="_blank" rel="noopener noreferrer">Bing Places for Business help</a>).</p>\r
            <ul>\r
                <li><strong>Bing Places.</strong> A free Bing service. You can import from your Google profile: "Google sync lets you quickly import your business information from your existing Google Business Profile (GBP) and keep it up to date on Bing Places" (<a href="https://www.bing.com/forbusiness/help/syncGoogleBusinessProfile" target="_blank" rel="noopener noreferrer">Bing's Google sync help</a>). Bing warns that "syncing may create duplicate listings", so search for an existing listing first.</li>\r
                <li><strong>Apple Maps.</strong> Claim your place card through <a href="https://business.apple.com/" target="_blank" rel="noopener noreferrer">Apple Business</a> to control your logo, hours, photos and contact details. Apple says "feature and service availability varies by country and region".</li>\r
                <li><strong>Directories your customers use.</strong> In India that may include B2B marketplaces such as IndiaMART, whose free listing asks for your company's "name, address &amp; e-mail" and at least three products or services (<a href="https://seller.indiamart.com/" target="_blank" rel="noopener noreferrer">IndiaMART seller registration</a>). List only where your customers actually look, and keep each listing current.</li>\r
                <li><strong>Your own website and social profiles.</strong> The contact page, the footer and every social profile should show the same details as your Business Profile.</li>\r
            </ul>\r
\r
            <h2 id="website">Step 4: check your website's location details</h2>\r
            <p>Your website supports your profile. Check three things.</p>\r
            <h3 id="contact-details">Contact details on the page</h3>\r
            <p>Your name, address (unless you hide it as a service-area business), phone number and hours should be on the site as text, not only inside an image, and match your profile exactly.</p>\r
            <h3 id="structured-data">LocalBusiness structured data</h3>\r
            <p>Structured data tells Google your details in a form it reads directly. For a local business, Google requires <code>name</code> and <code>address</code>, and recommends <code>telephone</code> ("Be sure to include the country code and area code"), <code>openingHoursSpecification</code>, <code>geo</code> coordinates ("at least 5 decimal places"), <code>url</code> and, for food businesses, <code>menu</code> (<a href="https://developers.google.com/search/docs/appearance/structured-data/local-business" target="_blank" rel="noopener noreferrer">Google Search Central on LocalBusiness structured data</a>). Review markup is "only recommended for sites that capture reviews about other local businesses", so don't add review stars about yourself. Our <Link to="/blogs/technical-seo-checklist">technical SEO checklist</Link> shows how to test structured data.</p>\r
            <h3 id="location-pages">Location pages, not doorway pages</h3>\r
            <p>A business with several branches can have one useful page per branch. Pages made only to rank for city after city are a problem: Google's spam policies list "having multiple domain names or pages targeted at specific regions or cities that funnel users to one page" as doorway abuse (<a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener noreferrer">Google Search spam policies</a>). If your location pages differ only in the city name, merge them or give each one real, local content. To check a page's title, description, headings and structured data, and compare its words with a competitor's page, run it through <Link to="/tools/rankguru">RankGuru, our free on-page SEO checker</Link>.</p>\r
\r
            <h2 id="reviews">Step 5: review your reviews</h2>\r
            <p>Reviews count twice: Google says "more reviews and positive ratings can help your business's local ranking", and customers read them before they choose. Check your count, your average rating, how recent the newest reviews are, and whether you reply.</p>\r
            <Chart\r
                type="bar"\r
                title="How US consumers use reviews of local businesses, 2026"\r
                unit="%"\r
                data={[\r
                    ['Use reviews to guide purchase decisions', 97],\r
                    ['Only care about reviews from the last three months', 74],\r
                    ["Won't use a business with fewer than 20 reviews", 47],\r
                    ['Only use a business with 4.5 stars or more', 31],\r
                ]}\r
                source="BrightLocal, Local Consumer Review Survey 2026"\r
                sourceUrl="https://www.brightlocal.com/research/local-consumer-review-survey/"\r
                note="BrightLocal's own survey of 1,002 US adult consumers via SurveyMonkey, published 11 February 2026. US figures, not Indian ones."\r
            />\r
            <p>These are BrightLocal's US figures, published in February 2026; no comparable survey for India was found. They still point to the same checks: enough reviews, recent reviews and a high average. Replying matters too: Google says "positive reviews and helpful replies can help your business stand out." Our <Link to="/blogs/google-business-profile-guide">Business Profile guide</Link> covers how to ask for reviews within Google's rules and how to reply.</p>\r
\r
            <h2 id="links-and-mentions">Step 6: check who links to you</h2>\r
            <p>Prominence is partly "how many websites link to your business". List the sites that link to yours: local news, associations and chambers of commerce, suppliers and partners, and the directories from step 3. Search Console's Links report shows "the root domain of sites with the most links to your site" (<a href="https://support.google.com/webmasters/answer/9049606?hl=en" target="_blank" rel="noopener noreferrer">Search Console Help on the Links report</a>). The useful links are the ones real local customers might follow; links bought in bulk from unrelated sites are not.</p>\r
\r
            <h2 id="measure">Step 7: measure before and after</h2>\r
            <p>Take a baseline before you change anything, so you can see what worked.</p>\r
            <ul>\r
                <li><strong>Business Profile performance.</strong> Available "only for verified Business Profiles", it shows the searches people used to find you, views, direction requests, calls and website clicks (<a href="https://support.google.com/business/answer/9918094?hl=en" target="_blank" rel="noopener noreferrer">Google's help on profile performance</a>). The searches figure "is updated at the start of each month".</li>\r
                <li><strong>Search Console.</strong> Filter the Performance report to your country and to your location or contact pages to see the local searches that reach your site: "Filter by multiple countries or devices to see their combined data" (<a href="https://support.google.com/webmasters/answer/17011165?hl=en" target="_blank" rel="noopener noreferrer">Search Console Help on filtering</a>). No Search Console yet? The first step of our <Link to="/blogs/technical-seo-checklist#own-search-console">technical SEO checklist</Link> covers setting it up.</li>\r
            </ul>\r
            <p>Note the numbers on the day you start, fix the problems, and compare a month later.</p>\r
\r
            <h2 id="how-often">How often to run a local SEO audit</h2>\r
            <p>Run the full audit once, then repeat it whenever something about the business changes: a move, a new phone number, a new name, new opening hours or a new branch, because every listing from step 3 then needs the same change. Between those changes, we suggest repeating it every three months. The Business Profile's searches figure is updated at the start of each month, so a quarterly check compares three full months.</p>\r
\r
            <h2 id="audit-sheet">The local SEO audit on one page</h2>\r
            <div className="blog-table" role="region" aria-label="Local SEO audit checklist" tabIndex={0}>\r
                <table>\r
                    <caption>Local SEO audit checklist</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Area</th>\r
                            <th scope="col">Check</th>\r
                            <th scope="col">Passes when</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr><th scope="row">Search</th><td>Your main services, searched on a phone</td><td>You know where you appear and who appears above you</td></tr>\r
                        <tr><th scope="row">Searches</th><td>Profile searches and Search Console queries</td><td>Three to five searches chosen from real data</td></tr>\r
                        <tr><th scope="row">Competitors</th><td>Category, reviews, rating, photos and service pages of the top three</td><td>You know the gaps between them and you</td></tr>\r
                        <tr><th scope="row">Profile</th><td>One profile, real name, address or service area, categories</td><td>Every line matches Google's guidelines</td></tr>\r
                        <tr><th scope="row">Profile</th><td>Hours, special hours and details</td><td>Complete and current</td></tr>\r
                        <tr><th scope="row">Consistency</th><td>Bing Places, Apple Maps, directories, social profiles</td><td>Name, address, phone, website and hours identical everywhere</td></tr>\r
                        <tr><th scope="row">Website</th><td>Contact details as text</td><td>Match the profile exactly</td></tr>\r
                        <tr><th scope="row">Website</th><td>LocalBusiness structured data</td><td>Name and address present, phone with country code, tested without errors</td></tr>\r
                        <tr><th scope="row">Website</th><td>Location pages</td><td>Each one useful on its own, none a city-name copy</td></tr>\r
                        <tr><th scope="row">Reviews</th><td>Count, rating, recency, replies</td><td>New reviews each month and every review answered</td></tr>\r
                        <tr><th scope="row">Links</th><td>Local sites that link to you</td><td>Real local links, no bought ones</td></tr>\r
                        <tr><th scope="row">Measure</th><td>Profile performance and Search Console</td><td>A dated baseline to compare against</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>If you would rather have someone else run it, our <Link to="/services/seo-services">SEO services</Link> start with exactly this kind of audit, and every page of this site offers a <Link to="/free-seo-audit">free SEO audit</Link> of your website.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};