var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>App development in India costs a few thousand US dollars for a first business app on Android and iOS, and more once an app has several kinds of user. Our own starting prices are $949 for a Starter app, $2,399 for a Business app and $5,599 for a custom app, each built once for both stores and set in writing before work starts. For comparison, the median US software developer earned $135,980 in May 2025. The build is not the whole bill, though. Store fees, a backend, text messages, maps and a yearly update all cost money after launch, and this guide lists each one with the page that sets its price.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>Our starting prices for clients abroad: Starter $949, Business $2,399, Custom from $5,599, and a care plan at $79 a month. Every quote is set in writing before work starts.</li>
                    <li>Other Indian agencies we read publish a wide range, from about ₹15,000 for a basic Android app to several hundred thousand rupees for a full business app, and many leave out store submission, the admin panel or hosting.</li>
                    <li>A US software developer's median pay was $135,980 a year in May 2025. A UK programmer or software developer working full time had a median of £59,863 in the 2026 provisional figures.</li>
                    <li>Budget for running costs as well: $99 a year to Apple, $25 once to Google, a backend that bills by use, SMS for phone sign-in and maps by request.</li>
                    <li>Apple and Google take no commission on physical goods and real-world services, such as food orders or bookings. They do on digital items sold in the app.</li>
                    <li>Start the D-U-N-S number first. Google says it can take up to 30 days, and both stores need it for an organization account.</li>
                </ul>
            </Callout>

            <h2 id="our-prices">How much does it cost to build an app in India?</h2>
            <p>Here is what we charge, since that is the one price list we can vouch for. Our prices for clients outside India are set in US dollars for those markets. They are not converted from rupees. Each tier builds one React Native app with Expo, which runs on Android phones and iPhones from the same code, so you do not pay for two apps.</p>
            <div className="blog-table" role="region" aria-label="N&D Co. mobile app starting prices in US dollars" tabIndex={0}>
                <table>
                    <caption>N&D Co. mobile app development starting prices, US dollars, November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Tier</th>
                            <th scope="col">Starts at</th>
                            <th scope="col">Usual timeline</th>
                            <th scope="col">What it covers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Starter</th><td>$949</td><td>4 to 6 weeks</td><td>Up to 8 screens, login with account deletion, a Firebase backend in your own account, no admin panel</td></tr>
                        <tr><th scope="row">Business</th><td>$2,399</td><td>8 to 12 weeks</td><td>Up to 20 screens, a web admin panel, payments, push notifications, Firebase or Supabase</td></tr>
                        <tr><th scope="row">Custom</th><td>From $5,599</td><td>Set in your quote</td><td>Apps with several kinds of user, such as delivery, a marketplace or bookings with staff roles</td></tr>
                        <tr><th scope="row">Care plan</th><td>$79 a month</td><td>After launch</td><td>Updates, operating system upgrades, bug fixes and backups</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Every tier includes store submission to Google Play and the App Store, with up to two rounds of changes if a store rejects the app, and a month of free bug fixes. Restaurant ordering apps (usually 6 to 10 weeks) and e-commerce apps (usually 8 to 12 weeks) are quoted as packages of their own. If you want two native apps, Kotlin for Android and Swift for iOS, we quote that separately because it means two builds. All of it is on the <Link to="/services/mobile-app-development">mobile app development</Link> page, and the <Link to="/pricing">pricing page</Link> has every service side by side.</p>
            <p>Most projects start with a 50% advance, and the balance is due before final delivery. A starting price describes the smallest version of a tier. The quote you get after a discovery call is the one that counts.</p>

            <h2 id="other-agencies">What do other Indian app developers charge?</h2>
            <p>The range is wide, and the low figures often leave things out. On 31 October 2026 we read the app development pages of 22 Indian agencies, 7 of them based in Kolkata. Some publish packages with a price. Others publish cost guides on their blogs with estimates. We did not check any of these figures with the agencies, so treat them as asking prices. They are in rupees as published.</p>
            <div className="blog-table" role="region" aria-label="App prices published by 22 Indian agencies" tabIndex={0}>
                <table>
                    <caption>App development prices published on 22 Indian agency websites, read 31 October 2026, in rupees</caption>
                    <thead>
                        <tr>
                            <th scope="col">Kind of app</th>
                            <th scope="col">Lower end of what was published</th>
                            <th scope="col">Higher estimates, mostly from cost guides</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Simple app, 5 to 8 screens</th><td>₹14,999 to ₹80,000</td><td>₹50,000 to ₹500,000</td></tr>
                        <tr><th scope="row">Business app with admin panel and payments</th><td>₹120,000 to ₹300,000</td><td>₹125,000 to ₹800,000</td></tr>
                        <tr><th scope="row">Complex or multi-role app</th><td>₹220,000 to ₹400,000</td><td>₹400,000 to ₹1,200,000, and ₹1,000,000 and up for enterprise</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Two things stood out when we read the pages. Several of the cheapest packages are Android only, so an iPhone app is a second price. And many pages leave out store submission, the admin panel, hosting or source code, or say nothing about them. Eight agencies put yearly maintenance at 15 to 20%, or 15 to 25%, of the build price. If you collect quotes from India, ask each one to list the same items: both platforms, the number of screens, the admin panel, the backend, store submission, support months and the code.</p>

            <h2 id="us-uk-wages">How does that compare with hiring a developer in the US or UK?</h2>
            <p>Comparing an agency's project price with an employee's salary is not like for like, but it is the comparison most buyers make, so here are the official figures. The US Bureau of Labor Statistics reports that the median annual wage for software developers was $135,980 in May 2025. The lowest-paid 10% earned less than $82,460 and the highest-paid 10% more than $214,670.</p>
            <Chart
                type="bar"
                title="Annual wage of US software developers, May 2025, US dollars"
                data={[
                    ['Lowest 10% earned less than', 82460, '$82,460'],
                    ['Median', 135980, '$135,980'],
                    ['Highest 10% earned more than', 214670, '$214,670'],
                ]}
                source="US Bureau of Labor Statistics, Occupational Outlook Handbook, software developers"
                sourceUrl="https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm"
                note="Wages only. Employer costs such as benefits and payroll taxes come on top."
            />
            <p>In the UK, the Office for National Statistics publishes pay by occupation in its Annual Survey of Hours and Earnings. For programmers and software development professionals working full time, the median gross annual pay was £59,863 in the 2026 provisional figures, which cover the tax year that ended on 5 April 2026. Those figures will be revised.</p>
            <Chart
                type="bar"
                title="Gross annual pay of full-time UK programmers and software development professionals, 2026 provisional, pounds"
                data={[
                    ['10th percentile', 33352, '£33,352'],
                    ['25th percentile', 43509, '£43,509'],
                    ['Median', 59863, '£59,863'],
                    ['75th percentile', 82149, '£82,149'],
                    ['90th percentile', 114051, '£114,051'],
                ]}
                source="Office for National Statistics, ASHE Table 14.7a, occupation code 2134"
                sourceUrl="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/datasets/occupation4digitsoc2010ashetable14"
                note="Employees in the same job for more than a year. Gross pay, before tax. Employer costs come on top."
            />
            <p>Divide the US median by 52 and one week of a median developer's pay comes to about $2,615, more than our Business tier. That sum flatters any agency, though. An employee is there all year, knows your business and fixes things the same day. A project buys a defined app and a short warranty. Ask yourself whether you need an app or a developer. A first version with a clear scope is a project. A product that changes every week needs a team, wherever that team sits.</p>
            <p>We found no official statistics for what app developers earn in India, so we do not quote a figure. The hourly rates you see on outsourcing blogs come from the vendors themselves.</p>

            <h2 id="what-drives-price">What decides the price of an app?</h2>
            <p>Mostly the number of screens and the number of people who use the app in different ways. A menu and a cart for customers is one app. Add a screen for kitchen staff and another for drivers, and it becomes three apps that share data. In rough order of cost:</p>
            <ul>
                <li>Kinds of user. Each role, such as customer, staff, driver or admin, needs its own screens and its own rules about who sees what.</li>
                <li>An admin panel. A web page where you manage orders, users and content without a developer. Our Starter tier has none, and the Business tier includes one.</li>
                <li>Payments. Taking money in the app means a payment gateway for your market, test payments and refunds.</li>
                <li>Integrations. Connecting to your existing booking system, stock list or accounting software is often the slowest part, because it depends on that system's documentation.</li>
                <li>Native or cross-platform. One React Native codebase serves both stores. Two native apps double most of the work.</li>
                <li>Design. A design made from scratch, screen by screen, costs more than one built from standard components.</li>
            </ul>
            <p>If you want to see what a React Native and Expo app from us looks like, our founder's <Link to="/open-source/chernobyl">open-source Android app CHERNOBYL</Link> is public, code and releases included. Mobile app development is a new service for us, and we have no client app to show yet. We would rather say so than show you someone else's.</p>

            <h2 id="hidden-costs">What costs do buyers forget about?</h2>
            <p>The costs that come after launch. Each of them is charged by someone other than the developer, so a developer's quote rarely shows them.</p>
            <div className="blog-table" role="region" aria-label="Running costs of a business app" tabIndex={0}>
                <table>
                    <caption>Running costs of a business app and who charges them, checked 22 November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Cost</th>
                            <th scope="col">Who charges it</th>
                            <th scope="col">What it costs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Apple Developer Program</th><td>Apple</td><td>99 USD per membership year, listed in local currency when you enrol (<a href="https://developer.apple.com/programs/enroll/" target="_blank" rel="noopener noreferrer">Apple's enrolment page</a>)</td></tr>
                        <tr><th scope="row">Google Play developer account</th><td>Google</td><td>US$25 once (<a href="https://support.google.com/googleplay/android-developer/answer/6112435" target="_blank" rel="noopener noreferrer">Google's Play Console help page on the fee</a>)</td></tr>
                        <tr><th scope="row">Backend: database, logins, storage</th><td>Firebase or Supabase, in your account</td><td>Firebase has a no-cost plan with usage limits and a pay as you go plan beyond them (<a href="https://firebase.google.com/pricing" target="_blank" rel="noopener noreferrer">Firebase pricing</a>)</td></tr>
                        <tr><th scope="row">Text messages for phone sign-in</th><td>Firebase</td><td>Billed per SMS sent, at Firebase's current rates</td></tr>
                        <tr><th scope="row">Maps and address search</th><td>Google Maps Platform</td><td>Billed per 1,000 requests after a free monthly cap for each product</td></tr>
                        <tr><th scope="row">Commission on digital sales</th><td>Apple and Google</td><td>Only if you sell digital items in the app; see the next section</td></tr>
                        <tr><th scope="row">Updates and fixes</th><td>Your developer</td><td>Our care plan is $79 a month</td></tr>
                        <tr><th scope="row">D-U-N-S number</th><td>Dun & Bradstreet</td><td>Free, but it takes time</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Maps are the easiest cost to underestimate. <a href="https://developers.google.com/maps/billing-and-pricing/pricing" target="_blank" rel="noopener noreferrer">Google Maps Platform's pricing page</a> works through its own example: 200,000 address autocomplete requests in one month cost $481.70 once the first 10,000 free ones are used. A delivery app that suggests addresses as people type can reach that kind of number quickly. Ask your developer which map and SMS calls the app makes, and set a budget alert in the provider's console.</p>
            <p>We set up the backend in your own account, so these bills come to you directly and nothing stops if you change developers.</p>

            <h2 id="store-commission">Do Apple and Google take a cut of your sales?</h2>
            <p>Not if you sell physical goods or services used outside the app. Apple's <a href="https://developer.apple.com/app-store/review/guidelines/" target="_blank" rel="noopener noreferrer">App Review Guidelines</a> say in rule 3.1.3(e) that for "physical goods or services that will be consumed outside of the app", you must use payment methods other than in-app purchase, "such as Apple Pay or traditional credit card entry". Google's <a href="https://support.google.com/googleplay/android-developer/answer/9858738" target="_blank" rel="noopener noreferrer">Payments policy</a> says its billing system must not be used for physical goods or physical services, and it names food delivery among them. A restaurant, shop or booking app pays its normal card gateway fees and nothing to the stores.</p>
            <p>Digital items are different. Under rule 3.1.1, unlocking features or content, such as a subscription or premium content, must use Apple's in-app purchase. Apple's <a href="https://developer.apple.com/app-store/small-business-program/" target="_blank" rel="noopener noreferrer">App Store Small Business Program</a> sets a commission of 15% for developers with up to 1 million USD in proceeds a year, and the standard rate applies above that. In the United States storefront, the guidelines let apps include buttons and external links to other ways to buy.</p>
            <p>Google's <a href="https://support.google.com/googleplay/android-developer/answer/112622" target="_blank" rel="noopener noreferrer">service fee page</a> lists new rates for users in the US, the UK and the EEA from 30 June 2026, and in Australia and Japan from 30 September 2026. Auto-renewing subscriptions pay 10% plus a 5% billing fee. Other digital sales pay 20% or 25% plus the billing fee, depending on whether the user installed the app before or after the date for their country, and lower rates apply to developers in some Google programs. If your app sells anything digital, read both pages on the day you set your prices: Google says its new rates are still to roll out in other countries.</p>

            <h2 id="yearly-updates">Why does an app need updates every year?</h2>
            <p>Because the stores keep raising their minimum requirements, and an app that stands still slowly drops out. Google's <a href="https://developer.android.com/google/play/requirements/target-sdk" target="_blank" rel="noopener noreferrer">target API level rule</a> says that from 31 August 2026, new apps and app updates must target Android 16 (API level 36). Existing apps must target at least Android 15 (API level 35) to stay available to new users on newer phones. Apple's <a href="https://developer.apple.com/news/upcoming-requirements/" target="_blank" rel="noopener noreferrer">upcoming requirements page</a> says that since 28 April 2026, apps uploaded to App Store Connect must be built with Xcode 26 or later.</p>
            <p>Both rules move every year. Meeting them usually means updating the app's libraries, testing on new phones and submitting again. This is the work our care plan covers, alongside bug fixes and backups. Without a plan, budget a few days of developer time each year for it.</p>

            <h2 id="timeline">How long does it take, and what holds it up?</h2>
            <p>The build takes 4 to 12 weeks in our tiers. The paperwork can add more if it starts late. Both stores need a D-U-N-S number before a company can open an organization account. Google's <a href="https://support.google.com/googleplay/android-developer/answer/13628312" target="_blank" rel="noopener noreferrer">help page on D-U-N-S numbers</a> says getting one "can take up to 30 days". Apple's <a href="https://developer.apple.com/help/account/membership/D-U-N-S/" target="_blank" rel="noopener noreferrer">D-U-N-S help page</a> says to allow up to 5 business days for the number when you request it through Apple, plus up to 2 business days for Apple to receive it. Apple notes that Dun & Bradstreet may already have given your company a number, so look it up before you apply.</p>
            <p>If you publish under a personal Google account instead, Google's <a href="https://support.google.com/googleplay/android-developer/answer/14151465" target="_blank" rel="noopener noreferrer">testing requirements</a> apply: accounts created after 13 November 2023 must run a closed test with at least 12 testers for at least 14 days before the app can go public. Apple says on its <a href="https://developer.apple.com/distribute/app-review/" target="_blank" rel="noopener noreferrer">App Review page</a> that it typically reviews at least 50% of submissions in under 24 hours and 90% in under 48 hours. Our guide to <Link to="/blogs/play-store-app-store-requirements">what Google Play and the App Store require</Link> walks through every step, from the accounts to the privacy forms.</p>

            <h2 id="hiring-abroad">How does hiring an app developer in India work from the US or UK?</h2>
            <p>Most of it happens in writing and in test builds, so the time difference matters less than it sounds. India runs on one time zone all year, 5 hours 30 minutes ahead of UTC. That puts us 4 hours 30 minutes ahead of the UK in summer and 5 hours 30 minutes in winter, and 9 hours 30 minutes to 13 hours 30 minutes ahead of the US, depending on the coast and the season. Our working day overlaps most of a UK morning, and we keep part of our evening free for calls in US mornings. Our guide to <Link to="/blogs/outsource-web-development-india">outsourcing web development to India</Link> has the hour-by-hour table.</p>
            <p>A project with us runs like this:</p>
            <ul>
                <li>Scope and price. A discovery call, then a written scope, timeline and quote. Work starts once you accept it and pay the advance.</li>
                <li>Progress. We share a working build at each stage, so you try real screens on your own phone instead of reading status reports, and we send written updates between calls.</li>
                <li>Accounts. Both developer accounts and the backend are registered to your business. We work in them with a team role.</li>
                <li>Payment. From abroad we invoice in your currency, and you pay by PayPal, through Wise or by bank transfer. Each charges its own fees, so check them before the first invoice.</li>
            </ul>
            <p>A US business paying a foreign company may be asked for, or may ask for, a tax form. The IRS says <a href="https://www.irs.gov/forms-pubs/about-form-w-8-ben-e" target="_blank" rel="noopener noreferrer">Form W-8BEN-E</a> is "used by foreign entities to document their status". Whether it applies to you is a question for your accountant.</p>

            <h2 id="ownership">Who owns the app and the code?</h2>
            <p>Under our <Link to="/terms">terms of service</Link>, ownership of the final deliverables named in your quote passes to you on full payment. So check that the quote names what you expect to own: the source code repository, the design files and the store listings. Third-party parts, such as open-source libraries, fonts and icons, stay with their owners and come under their own licences. That is normal in apps, and a licence is not ownership.</p>
            <p>Copyright law differs between the US, the UK and India, and the wording of an assignment matters. We do not give legal advice, so have a lawyer read the contract on a large project. Our post on <Link to="/blogs/outsourcing-nda-ip-ownership">NDAs and IP ownership when you outsource</Link> covers the questions to ask.</p>

            <h2 id="checklist">A checklist before you hire</h2>
            <ol>
                <li>Write down the app's one main job and who uses it: customers, staff, drivers or all three.</li>
                <li>Ask every developer to quote the same list: both platforms, screens, admin panel, backend, payments, store submission, support months and the code.</li>
                <li>Apply for the D-U-N-S number now, or look up the one you have.</li>
                <li>Open both developer accounts in your company's name and give the developer a role.</li>
                <li>Price the running costs: Apple's yearly fee, the backend, SMS, maps and updates.</li>
                <li>Check whether you sell anything digital in the app, because that decides whether a store commission applies.</li>
                <li>Agree in writing when you will talk, in your time zone, and how fast each side replies.</li>
                <li>Make sure the quote names what you will own, and pay the balance on delivery, not before work starts.</li>
            </ol>

            <h2 id="how-we-work">How we build apps</h2>
            <p>We are a brand and growth agency in Barrackpore, Kolkata, and we build Android and iOS apps for businesses in the US, the UK, Europe and India. Mobile app development is new for us, so we have no client results to show. What we can offer is a published price, a written scope, test builds on your phone as we go, and accounts that stay in your name. Agencies that want apps delivered under their own brand can read about our <Link to="/white-label/app-development">white label app development</Link> service. If you have an app in mind, the <Link to="/services/mobile-app-development">mobile app development page</Link> explains how to get a quote.</p>
        </>
    );
}
`;export{e as default};