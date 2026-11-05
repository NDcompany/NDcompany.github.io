var e=`import { Link } from 'react-router-dom';\r
import { Callout } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>To publish a business app you need a developer account on each store: Google Play charges US$25 once, and the Apple Developer Program charges US$99 for each membership year. Both stores then want the same set of things before a review: a build made with their current tools, a privacy policy page, a statement of what data the app collects, and a way to delete an account if the app has sign-up. Apple also checks the app against its written guidelines, and a business app that is only a website in a frame can be refused. Each requirement below is as Google and Apple state it on 31 October 2026.</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>Create both developer accounts in the business's own name, not in your developer's or agency's, and give the developer a team role.</li>\r
                    <li>Apple needs a D-U-N-S number for an organisation account, and Google needs one for an organisation account too. Applying is free but can take up to 30 days, so start first.</li>\r
                    <li>A new personal Google Play account must run a closed test with at least 12 testers for 14 days before it can apply for production access.</li>\r
                    <li>Since 31 August 2026, new Android apps and updates must target Android 16 (API level 36). Since 28 April 2026, Apple uploads must be built with Xcode 26 or later.</li>\r
                    <li>Have a live privacy policy page, the Data safety form (Google) and the privacy answers (Apple) ready before you submit.</li>\r
                    <li>If the app has sign-up, build account deletion into it, and give Google a web page for deletion requests too.</li>\r
                    <li>Apple can refuse a website wrapped as an app, or a template app not submitted by the content provider.</li>\r
                    <li>Apple says it reviews at least 50% of submissions in under 24 hours and 90% in under 48 hours. Google states no standard time, and says some reviews take up to seven days or longer.</li>\r
                </ul>\r
            </Callout>\r
\r
            <h2 id="two-accounts">What do you need to open the two developer accounts?</h2>\r
            <p>One account per store, each with its own fee, its own identity check and its own rules about who the account holder is. Before anyone writes code, decide which legal name goes on each. That name is public: Apple shows it as the seller name of your apps on the App Store.</p>\r
            <div className="blog-table" role="region" aria-label="Google Play and App Store developer accounts compared" tabIndex={0}>\r
                <table>\r
                    <caption>Developer accounts on Google Play and the App Store, as the stores state them, checked 31 October 2026</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Topic</th>\r
                            <th scope="col">Google Play</th>\r
                            <th scope="col">Apple App Store</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">Fee</th>\r
                            <td>US$25 once. Prepaid cards are not accepted. The fee is not refunded if your identity information is judged invalid.</td>\r
                            <td>US$99 per membership year, listed in local currency during enrolment. Nonprofits, accredited education and government can ask for a fee waiver.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">D-U-N-S number</th>\r
                            <td>Required for an organization account.</td>\r
                            <td>Required for an organization, except government entities.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Identity check</th>\r
                            <td>During setup. A government ID and a credit card, both under your legal name, may be needed. Personal owners also verify an Android device.</td>\r
                            <td>An Apple Account with two-factor authentication and your legal name. Organizations also need a work email and a public website on their domain.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Testing before the first release</th>\r
                            <td>New personal accounts: a closed test with at least 12 testers for 14 days.</td>\r
                            <td>No tester rule on the pages we checked.</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Sources: Google on <a href="https://support.google.com/googleplay/android-developer/answer/6112435" target="_blank" rel="noopener noreferrer">creating a Play developer account</a> and <a href="https://support.google.com/googleplay/android-developer/answer/13634885" target="_blank" rel="noopener noreferrer">choosing an account type</a>; Apple on <a href="https://developer.apple.com/programs/enroll/" target="_blank" rel="noopener noreferrer">enrolling</a> and <a href="https://developer.apple.com/help/account/membership/program-enrollment" target="_blank" rel="noopener noreferrer">program enrolment requirements</a>.</p>\r
\r
            <h2 id="personal-or-organisation">Personal or organisation account?</h2>\r
            <p>Google says to choose an organization account if you are creating it "for an organization or business", and a personal one for personal use. They have the same core functionality. Some apps need an organization account: financial products and services, health apps, VPN apps and government apps.</p>\r
            <p>For a business, the organisation account is the natural choice, and it has a lead time. Google says you cannot create an organization account without a D-U-N-S number, and the legal name and address in your Google payments profile must match your Dun &amp; Bradstreet profile, or the account can be restricted. Apple wants a D-U-N-S number and a legal entity too: it does not accept DBAs, trade names or branches, and it refuses a website that is a social media page or has minimal content.</p>\r
            <p>If you are a sole proprietor, Apple's individual route covers "an individual or sole proprietor/single person business". Your personal legal name is then the seller name on the App Store.</p>\r
\r
            <h3 id="duns-number">D-U-N-S numbers</h3>\r
            <p>A D-U-N-S number is a nine-digit business identifier from Dun &amp; Bradstreet. Google states that applying "is a completely free process" and that it "can take up to 30 days so you should plan ahead". Apple says they are free in most jurisdictions. Google warns that some services charge high fees for this free registration. Make it the first task of the project.</p>\r
\r
            <h3 id="apple-india">Apple enrolment in India</h3>\r
            <p>Apple's enrolment page carries one note for India: enrolment "is only available through the Apple Developer app". So whoever enrols the business needs a device that can run that app. Apple shows the rupee price during enrolment; its pages do not state the figure.</p>\r
\r
            <h2 id="closed-testing">What is the Play Store closed testing rule?</h2>\r
            <p>Google's page says a developer with a personal account created after 13 November 2023 must run a closed test with "a minimum of 12 testers who have been opted in continuously for at least 14 days" before applying for production access. You apply from the Dashboard in Play Console with "Apply for production". Because testers must stay opted in for the whole period, our advice is to recruit more than 12.</p>\r
            <p>The same page does not mention organisation accounts. It states the rule for personal accounts only and does not say whether organisation accounts are exempt, so we cannot promise that they are. We check the Dashboard of each new account for what Google asks before we give a launch date. If a personal account is the only option, plan at least two weeks of testing before the first release.</p>\r
\r
            <h2 id="build-requirements">Which tools and API levels must the app be built with?</h2>\r
            <ul>\r
                <li><strong>Google Play.</strong> From 31 August 2026, new apps and app updates must target Android 16 (API level 36) or higher. Existing apps must target Android 15 (API level 35) or higher to stay available to new users on newer Android versions. Google's page also offered an extension request to 1 November 2026, but a new app should simply target API 36. See Google's <a href="https://developer.android.com/google/play/requirements/target-sdk" target="_blank" rel="noopener noreferrer">target API level requirements</a>.</li>\r
                <li><strong>Apple.</strong> Since 28 April 2026, apps uploaded to App Store Connect must be built with Xcode 26 or later using the iOS 26 SDK. Since 9 September 2026, iOS and iPadOS apps must target iOS 13 or later. Apple's <a href="https://developer.apple.com/news/upcoming-requirements/" target="_blank" rel="noopener noreferrer">upcoming requirements page</a> lists each date.</li>\r
            </ul>\r
            <p>An app is not finished at launch: these minimums move, so ask in any quote who updates the app for them and what it costs. Our <Link to="/services/mobile-app-development">mobile app development</Link> service covers it.</p>\r
\r
            <h2 id="privacy-policy-data-forms">What privacy paperwork do the stores want?</h2>\r
            <p>Both stores ask for a privacy policy page and a description of the data the app handles.</p>\r
            <h3 id="privacy-policy">The privacy policy</h3>\r
            <p>Google requires a privacy policy link "on your store listing and within your app". It must be a standard web page, not a PDF, on a public http:// or https:// URL with a valid SSL certificate, open worldwide with no login. Apple's guideline 5.1.1(i) also wants a link in App Store Connect and inside the app, and it says the policy must identify what data the app collects and how, name third parties that receive it, such as analytics tools and SDKs, and explain how long data is kept and how a user can request deletion. Write one policy page per app, in the business's name. Our <Link to="/blogs/plan-a-business-website">website planning guide</Link> covers the same page for a site.</p>\r
            <h3 id="data-safety-and-labels">The Data safety form and the privacy labels</h3>\r
            <p>On Google Play, "All developers that have an app published on Google Play must complete the Data safety form", and that includes apps that collect no data. Apps active only on the internal testing track are exempt. The form counts data sent by SDKs and libraries in your app, and by a webview whose content you control.</p>\r
            <p>On Apple, every app must explain its data handling in App Store Connect, including what third-party partners whose code you integrate collect. These answers appear as the privacy label on the app's page. Both stores count third-party code inside your app, so list every SDK before you fill in either form. See Google's <a href="https://support.google.com/googleplay/android-developer/answer/10787469" target="_blank" rel="noopener noreferrer">Data safety help page</a>, its <a href="https://support.google.com/googleplay/android-developer/answer/9859455" target="_blank" rel="noopener noreferrer">App content page</a> and Apple's <a href="https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy" target="_blank" rel="noopener noreferrer">app privacy help page</a>.</p>\r
            <p>Google's App content page adds more declarations: ads, how reviewers reach restricted parts of the app, target audience, high-risk permissions and a content rating. Keep a test login ready: Apple's guideline 2.1(a) asks for demo account details if the app has a login, and your back-end service switched on.</p>\r
\r
            <h2 id="account-deletion">Do you have to let users delete their account?</h2>\r
            <p>If the app lets people create an account, yes, on both stores.</p>\r
            <ul>\r
                <li><strong>Google Play</strong> asks you to "provide users with an in-app path to delete their app accounts and associated data" and also "a web link resource where users can request app account deletion". You also answer the deletion questions in the Data safety form. Google says apps that do not comply after 31 May 2024 may face additional enforcement, and gives removal from Google Play as an example. See Google's <a href="https://support.google.com/googleplay/android-developer/answer/13327111" target="_blank" rel="noopener noreferrer">account deletion requirements</a>.</li>\r
                <li><strong>Apple</strong> says in guideline 5.1.1(v): "If your app supports account creation, you must also offer account deletion within the app". Without significant account-based features, people should be able to use the app without a login.</li>\r
            </ul>\r
            <p>So decide early whether the app needs an account at all. If it does, the delete function and the web page belong in the first build.</p>\r
\r
            <h2 id="apple-guidelines">Which Apple guidelines reject business apps?</h2>\r
            <p>Apple publishes its <a href="https://developer.apple.com/app-store/review/guidelines/" target="_blank" rel="noopener noreferrer">App Review Guidelines</a> in full. Apple does not say which rules cause the most rejections, so this is our selection for a small business app.</p>\r
            <div className="blog-table" role="region" aria-label="Apple guidelines that affect business apps" tabIndex={0}>\r
                <table>\r
                    <caption>Apple App Review Guidelines that matter most for business apps, checked 31 October 2026</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Guideline</th>\r
                            <th scope="col">What it says</th>\r
                            <th scope="col">What it means for a business app</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">4.2 Minimum functionality</th>\r
                            <td>The app should include features, content and UI that "elevate it beyond a repackaged website". Under 4.2.2, apps should not primarily be marketing material or a collection of links, catalogs aside.</td>\r
                            <td>A website in a frame, or a brochure with a phone number, risks rejection. Give the app a job the site cannot do: ordering, booking, an account, notifications.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">4.2.6 Template apps</th>\r
                            <td>Apps from a commercialized template or app-generation service are rejected unless the provider of the app's content submits them.</td>\r
                            <td>Publish under the business's own developer account, with its own content. Apple accepts one app that hosts many clients, such as a restaurant finder.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">3.1.1 In-app purchase</th>\r
                            <td>Unlocking features or functionality, such as subscriptions or premium content, must use in-app purchase.</td>\r
                            <td>Applies when the app sells digital features or content.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">3.1.3(e) Goods and services outside the app</th>\r
                            <td>For physical goods or services consumed outside the app, you must use purchase methods other than in-app purchase, such as Apple Pay or traditional credit card entry.</td>\r
                            <td>A restaurant order, a shop product or a salon booking can be paid through a payment gateway. Apple names Apple Pay and cards, not UPI. We read "purchase methods other than in-app purchase" as covering a UPI gateway, but confirm before you build.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">4.8 Login services</th>\r
                            <td>An app that uses a third-party or social login for the primary account must also offer an equivalent login service that limits data to name and email, lets users keep their email private and does not collect app interactions for advertising without consent.</td>\r
                            <td>Adding Google Sign-In means adding a second option with those three features. An app with only its own email or phone sign-in does not use a third-party login in the sense of this rule, in our reading.</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>In-app purchase is Apple's route for unlocking digital features, and guideline 3.1.3(e) covers goods and services used outside the app. Selling a thali or a haircut falls under the second. Selling a premium membership that unlocks features in the app falls under the first. Say which one you need in your brief.</p>\r
\r
            <h2 id="review-times">How long do the reviews take?</h2>\r
            <p>Apple says "App Review works around the clock, typically reviewing at least 50% of submissions in less than 24 hours and 90% in less than 48 hours", on its <a href="https://developer.apple.com/distribute/app-review/" target="_blank" rel="noopener noreferrer">App Review page</a>. Those are typical figures, not a promise. Google's <a href="https://support.google.com/googleplay/android-developer/answer/6334282" target="_blank" rel="noopener noreferrer">publishing status page</a> gives no standard time for normal apps. It says that for certain developer accounts the review "may result in review times of up to seven days or longer in exceptional cases". Do not fix a public launch date until the app is live.</p>\r
\r
            <h2 id="timeline">What is the timeline from account setup to launch?</h2>\r
            <p>The stores state only some of these durations. The table marks where they say nothing. The build takes as long as the app needs, which we set in the written quote.</p>\r
            <div className="blog-table" role="region" aria-label="Timeline from developer account setup to app launch" tabIndex={0}>\r
                <table>\r
                    <caption>Steps from account setup to launch and the time the stores state for each</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Step</th>\r
                            <th scope="col">Time the store states</th>\r
                            <th scope="col">Notes</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">1. Get a D-U-N-S number</th>\r
                            <td>Up to 30 days (Google)</td>\r
                            <td>Free. Needed for both organisation accounts.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">2. Open the Google Play account</th>\r
                            <td>Not stated</td>\r
                            <td>US$25 and an identity check.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">3. Enrol in the Apple Developer Program</th>\r
                            <td>Not stated</td>\r
                            <td>US$99 a year. In India, through the Apple Developer app.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">4. Build and test the app</th>\r
                            <td>Depends on the app</td>\r
                            <td>On API level 36 and Xcode 26 or later. Runs alongside steps 1 to 3.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">5. Closed test on Google Play</th>\r
                            <td>At least 14 days, with at least 12 testers (new personal accounts)</td>\r
                            <td>The page does not mention organisation accounts.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">6. Forms and listing</th>\r
                            <td>Not stated</td>\r
                            <td>Privacy policy page, Data safety form, Apple privacy answers, screenshots, test login.</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">7. Store review</th>\r
                            <td>Apple: 50% under 24 hours, 90% under 48 hours. Google: no standard time, up to 7 days or longer for some accounts.</td>\r
                            <td>Fix and resubmit if a guideline is cited.</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>The D-U-N-S wait, and the closed test if it applies, cannot be rushed. Everything else can run alongside the build, so start the paperwork in week one.</p>\r
\r
            <h2 id="who-owns-accounts">Who should own the developer accounts?</h2>\r
            <p>The business, in its own legal name. If your agency or freelancer holds the account, the app is published under their name and you depend on them to change it. Our guide to <Link to="/blogs/outsource-web-development-india">outsourcing web development in India</Link> gives the same advice for websites: your domain, hosting and accounts belong in your name.</p>\r
            <p>The workable arrangement is that you create the accounts, pay the fees, and invite the developer with a team role on Play Console and on App Store Connect. Apple says the privacy questions can be answered by the Account Holder, an Admin or an App Manager, so the developer needs one of those roles for that step.</p>\r
            <p>On Apple, the person who enrols an organisation becomes the Account Holder and "must have the legal authority to bind your organization to legal agreements", so it is someone with that authority, not simply the developer you hired.</p>\r
\r
            <h2 id="our-offer">How we handle this</h2>\r
            <p>Store submission is included in every tier of our <Link to="/services/mobile-app-development">mobile app development</Link> service: the listing, the privacy answers, the Data safety form and the screenshots. The client owns the developer accounts, we get a team role, and the written quote sets what is included and who pays the store fees. For apps that need a web back office or an admin panel, our <Link to="/services/software-development">software development</Link> service covers that part.</p>\r
            <p>Rules change, so check Google's and Apple's pages again before you rely on any date here.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};