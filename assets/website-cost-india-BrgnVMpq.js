var e=`import { Link } from 'react-router-dom';\r
import { Callout, Chart } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>A website in India costs two things: the build, paid once, and the running costs, paid every year. With us the build is ₹9,999 for a landing page or small brochure site, ₹19,999 for a multi-page business site on WordPress or another CMS, and from ₹29,000 for an online store or web application. On top of that you pay for a domain (₹899 to ₹1,499 a year at renewal for .in and .com), hosting (₹289 to ₹649 a month at renewal on Hostinger's three main plans), business email if you want it, and payment gateway fees if you sell online. Most of these third-party prices are listed before GST, which adds 18%.</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>Build: ₹9,999, ₹19,999 or from ₹29,000 with us, set in a written quote before work starts. Our <Link to="/pricing">pricing page</Link> lists every service.</li>\r
                    <li>Domains and hosting are cheap in year one and cost more from year two. Price the renewal, not the ₹1 or ₹69 headline.</li>\r
                    <li>Hostinger's ₹69 a month hosting needs 48 months paid upfront and renews at ₹289 a month.</li>\r
                    <li>Online payments cost about 2% a transaction through a gateway such as Razorpay, plus 18% GST on that fee. UPI payments above ₹2,000 to merchants are due to carry a 0.4% charge, small merchants excepted, from a date still to be notified.</li>\r
                    <li>WordPress, WooCommerce and SSL certificates from Let's Encrypt are free. Your time, content and the people who build the site are what cost money.</li>\r
                </ul>\r
            </Callout>\r
\r
            <h2 id="what-the-build-costs">What the build costs</h2>\r
            <p>The build is the design and development work: page layouts, the content management system, forms, the store if there is one, on-page SEO and the launch. It is a one-off payment. These are our starting prices for clients in India; your quote sets the final price in writing before any work starts.</p>\r
            <div className="blog-table" role="region" aria-label="N&D Co. website build prices in India" tabIndex={0}>\r
                <table>\r
                    <caption>Our website build prices in India, October 2026</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Plan</th>\r
                            <th scope="col">Price</th>\r
                            <th scope="col">What it is</th>\r
                            <th scope="col">Delivery</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">Starter</th>\r
                            <td>₹9,999</td>\r
                            <td>A landing page or small brochure site, custom designed, with a contact form and on-page SEO basics</td>\r
                            <td>1 to 2 weeks</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Business</th>\r
                            <td>₹19,999</td>\r
                            <td>A multi-page site on WordPress, Shopify or another CMS, with a blog, two to three revision rounds and one year of hosting and domain included</td>\r
                            <td>2 to 4 weeks</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Custom</th>\r
                            <td>from ₹29,000</td>\r
                            <td>An online store or web application with payments, accounts or integrations</td>\r
                            <td>4 to 6 weeks</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>A dedicated store with a large catalogue has its own <Link to="/services/ecommerce-solutions">e-commerce development</Link> packages, from ₹14,999 for a Shopify or WooCommerce store. The full list of what each website plan includes is on the <Link to="/services/website-design-development">website design and development</Link> page.</p>\r
            <p>Three things move the build price more than anything else: how many pages or products there are, who writes the content, and what the site has to do beyond showing information (take payments, book appointments, connect to other software). If you <Link to="/blogs/plan-a-business-website">plan the site before you ask for quotes</Link>, every provider prices the same job and you can compare them. For what other Indian agencies charge, see our <Link to="/blogs/agency-prices-india">survey of published agency prices</Link>: of 13 agencies that list a website price, the median starting price was ₹15,000.</p>\r
\r
            <h2 id="domain-name">Domain name: cheap in year one, then the renewal</h2>\r
            <p>Registrars in India advertise .in and .com domains at ₹1 for the first year. The renewal is the price you will pay every year after that.</p>\r
            <div className="blog-table" role="region" aria-label="Domain prices in India from two registrars" tabIndex={0}>\r
                <table>\r
                    <caption>.in and .com prices from two registrars in India, checked 25 October 2026</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Registrar and domain</th>\r
                            <th scope="col">First year</th>\r
                            <th scope="col">Renewal, per year</th>\r
                            <th scope="col">Condition</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">Hostinger, .in</th>\r
                            <td>₹1</td>\r
                            <td>₹899</td>\r
                            <td>Prices without GST</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Hostinger, .com</th>\r
                            <td>₹1</td>\r
                            <td>₹1,499</td>\r
                            <td>Only with a 3-year term (₹2,999 due today); prices without GST</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">BigRock, .in</th>\r
                            <td>₹549</td>\r
                            <td>₹899</td>\r
                            <td>₹1 offer shown on the 3-year option</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">BigRock, .com</th>\r
                            <td>₹749</td>\r
                            <td>₹1,479</td>\r
                            <td>₹1 offer shown on the 3-year option</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>Sources: <a href="https://www.hostinger.com/in/tld/in-domain" target="_blank" rel="noopener noreferrer">Hostinger's .in page</a>, <a href="https://www.hostinger.com/in/tld/com-domain" target="_blank" rel="noopener noreferrer">Hostinger's .com page</a> and <a href="https://www.bigrock.in/domain-registration/" target="_blank" rel="noopener noreferrer">BigRock's domain price table</a>. Register the domain in your business's name, not your developer's, so you can move the site later.</p>\r
\r
            <h2 id="hosting">Hosting: the long prepaid term and the renewal price</h2>\r
            <p>Shared hosting is the entry level, and the low monthly prices in the adverts are introductory: they need a long term paid upfront, and the plan renews at a higher monthly price.</p>\r
            <Chart\r
                type="column"\r
                title="Hostinger India web hosting, rupees per month"\r
                series={[\r
                    { name: 'Introductory, 48 months paid upfront', data: [['Single', 69], ['Premium', 139], ['Unlimited', 199]] },\r
                    { name: 'Renewal', data: [['Single', 289], ['Premium', 449], ['Unlimited', 649]] },\r
                ]}\r
                source="Hostinger India, web hosting plans, checked 25 October 2026"\r
                sourceUrl="https://www.hostinger.com/in/web-hosting"\r
                note="Monthly prices in rupees without GST. The introductory price needs a 48-month term paid upfront, for example ₹3,312 for Single."\r
            />\r
            <p>Other hosts work the same way. Bluehost India's Starter plan is ₹199 a month for 36 months and renews at ₹349; its Business plan is ₹279 and renews at ₹529 (<a href="https://www.bluehost.com/in/hosting/shared" target="_blank" rel="noopener noreferrer">Bluehost India's shared hosting page</a>, GST not included). GoDaddy India's Economy plan is ₹219 a month "for first 3-yr term", and its page does not show the renewal price (<a href="https://www.godaddy.com/en-in/hosting/web-hosting" target="_blank" rel="noopener noreferrer">GoDaddy India's web hosting page</a>).</p>\r
            <p>For a business site, budget for the renewal price from the year the introductory term ends. A slow host also costs you in a way that is not on the invoice: Google reports how fast your pages load for real visitors, and our guide to <Link to="/blogs/core-web-vitals-explained">Core Web Vitals</Link> explains how to check it.</p>\r
\r
            <h2 id="online-store">An online store: Shopify or WooCommerce</h2>\r
            <p>Shopify charges a monthly plan fee. On its India pricing page, paying yearly, Basic is ₹1,499 a month, Grow ₹5,599 and Advanced ₹22,680, with no setup fees. If you take payments through a third-party gateway instead of Shopify's own, Shopify adds a transaction fee of 2% on Basic, 1% on Grow and 0.6% on Advanced (<a href="https://www.shopify.com/in/pricing" target="_blank" rel="noopener noreferrer">Shopify India pricing</a>).</p>\r
            <p>WooCommerce is the free alternative on WordPress. The plugin directory says "Our core platform is free" and that it "offers additional paid commercial upgrades or support" (<a href="https://wordpress.org/plugins/woocommerce/" target="_blank" rel="noopener noreferrer">WooCommerce on WordPress.org</a>); WordPress itself is free to download (<a href="https://wordpress.org/download/" target="_blank" rel="noopener noreferrer">WordPress.org</a>). A WooCommerce store has no platform fee, but it needs hosting that can carry it, and any paid extensions you choose.</p>\r
\r
            <h2 id="payment-fees">Payment gateway fees, and what changed for UPI</h2>\r
            <p>Every online payment costs a fee. Razorpay charges "a single flat platform fee across all domestic payment instruments" of 2% per successful transaction, 2.15% on corporate credit cards and up to 3% on international cards, with no setup or annual fee, and 18% GST on its fee (<a href="https://razorpay.com/pricing/" target="_blank" rel="noopener noreferrer">Razorpay pricing</a>). Its UPI row says the MDR is zero but the 2% platform fee applies: the bank charge is nothing, the gateway's own fee is not.</p>\r
            <p>The rules for UPI itself changed in September 2026. A Gazette notification of 14 September 2026 says no bank or system provider may charge for payments by RuPay debit card or by UPI "upto Rs. 2,000" (<a href="https://egazette.gov.in/WriteReadData/2026/276170.pdf" target="_blank" rel="noopener noreferrer">Gazette of India, S.O. 5067(E)</a>). The government's release the next day said "a nominal MDR of 0.4% will apply only to P2M transactions above ₹2,000", capped at ₹300 for payments of ₹75,000 and above, while small merchants receiving up to ₹1 lakh a month through UPI QR codes keep zero MDR (<a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2310586&reg=48&lang=1" target="_blank" rel="noopener noreferrer">PIB release of 15 September 2026</a>).</p>\r
            <p>The start date is not settled. The Ministry of Finance's FAQ gave 15 October 2026 (<a href="https://financialservices.gov.in/sites/default/files/2026-09/FAQs---Merchant-Discount-Rate--MDR--on-Select-UPI--P2M--Transactions_0.pdf" target="_blank" rel="noopener noreferrer">Department of Financial Services FAQ</a>), and on 13 October NPCI said the charge "shall be implemented immediately post Diwali at a date to be notified separately" (<a href="https://www.npci.org.in/uploads/UPI_MDR_on_Select_Merchant_Transactions_Shall_be_Implemented_Post_Diwali_4c9cdd77d5.pdf" target="_blank" rel="noopener noreferrer">NPCI press note</a>). If you sell items above ₹2,000, check your gateway's current UPI rate before you price them.</p>\r
\r
            <h2 id="free-parts">The parts that are free</h2>\r
            <ul>\r
                <li><strong>SSL certificate.</strong> Let's Encrypt "provides free TLS certificates" (<a href="https://letsencrypt.org/" target="_blank" rel="noopener noreferrer">Let's Encrypt</a>), and most hosts install one for you. Nobody should charge you for a basic certificate.</li>\r
                <li><strong>WordPress and WooCommerce.</strong> Both are free software. You pay for the work, the hosting and any paid themes or extensions.</li>\r
            </ul>\r
\r
            <h2 id="business-email">Business email</h2>\r
            <p>An address at your own domain needs a paid mailbox service. Google Workspace's Starter plan is ₹270 per user per month in India, before tax (<a href="https://workspace.google.com/intl/en_in/pricing" target="_blank" rel="noopener noreferrer">Google Workspace India pricing</a>). Zoho's Mail Lite is ₹59 per user per month, billed annually only, with local taxes added (<a href="https://www.zoho.com/mail/zohomail-pricing.html" target="_blank" rel="noopener noreferrer">Zoho Mail pricing</a>).</p>\r
\r
            <h2 id="gst">GST: who adds it and when</h2>\r
            <p>Web design and development is "information technology design and development services", service code 998314 (<a href="https://cbic-gst.gov.in/hindi/pdf/central-tax-rate/Notification11-CGST-Annexure.pdf" target="_blank" rel="noopener noreferrer">CBIC's scheme of classification of services</a>), taxed at 9% central tax plus 9% state tax, 18% in all (<a href="https://www.gstcouncil.gov.in/sites/default/files/2024-02/11-rate_notification-cgst-01.04.2019.pdf" target="_blank" rel="noopener noreferrer">Notification 11/2017-Central Tax (Rate)</a>). A service provider must register for GST once its turnover in a financial year exceeds ₹20 lakh, or ₹10 lakh in special category states (<a href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter6/section22_v1.00.html" target="_blank" rel="noopener noreferrer">CGST Act, section 22</a>).</p>\r
            <p>So a quote from a registered agency adds 18% to its price, and the hosting, domain and email prices above are also before GST. N&amp;D Co. is not registered for GST at present, so our prices are the amount you pay, as our <Link to="/terms">terms of service</Link> say.</p>\r
\r
            <h2 id="do-it-yourself">Doing it yourself with a website builder</h2>\r
            <p>A builder such as Squarespace bundles hosting, templates and the editor in one subscription: its Basic plan is ₹630 a month paid annually in India, with a 2% transaction fee on its online store (<a href="https://www.squarespace.com/pricing" target="_blank" rel="noopener noreferrer">Squarespace pricing</a>). The subscription is cheap; the cost is your time to design, write and maintain the site, and the limits of the template.</p>\r
\r
            <h2 id="two-year-example">Example: a business website over two years</h2>\r
            <p>Here is the Business plan with one Google Workspace user, using the published prices above. Year one includes hosting and a domain in our price; from year two you pay them at the provider's renewal rate.</p>\r
            <div className="blog-table" role="region" aria-label="Example two-year cost of a business website in India" tabIndex={0}>\r
                <table>\r
                    <caption>A business website with one email user, first two years</caption>\r
                    <thead>\r
                        <tr>\r
                            <th scope="col">Item</th>\r
                            <th scope="col">Year one</th>\r
                            <th scope="col">Year two</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        <tr>\r
                            <th scope="row">Build (our Business plan)</th>\r
                            <td>₹19,999</td>\r
                            <td>none</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Hosting (Hostinger Premium at renewal, ₹449 a month)</th>\r
                            <td>included</td>\r
                            <td>₹5,388 plus GST</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">.com domain (Hostinger renewal)</th>\r
                            <td>included</td>\r
                            <td>₹1,499 plus GST</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Google Workspace Starter, one user</th>\r
                            <td>₹3,240 plus GST</td>\r
                            <td>₹3,240 plus GST</td>\r
                        </tr>\r
                        <tr>\r
                            <th scope="row">Total before GST on third-party items</th>\r
                            <td>₹23,239</td>\r
                            <td>₹10,127</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <p>A store adds its platform fee (Shopify Basic is ₹17,988 a year at ₹1,499 a month paid yearly) and payment fees on every sale. Updates, security fixes and changes after the support window are extra unless a maintenance package covers them.</p>\r
\r
            <h2 id="compare-quotes">How to compare website quotes</h2>\r
            <ul>\r
                <li>Check that each quote names the same pages, features and number of revision rounds.</li>\r
                <li>Ask whether hosting, the domain and email are included, for how long, and what they renew at.</li>\r
                <li>Ask whether the price includes GST, and whether the provider is registered.</li>\r
                <li>Ask who owns the domain, the accounts and the final files once you have paid.</li>\r
                <li>Get the price, the deliverables and the payment schedule in writing before you pay an advance.</li>\r
            </ul>\r
            <p>If you want a figure for your own site, our <Link to="/pricing">pricing page</Link> has every starting price, and a short brief through our contact form gets you a written quote.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};