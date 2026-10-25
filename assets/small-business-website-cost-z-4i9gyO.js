var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>A small business website costs a one-off build plus yearly running costs. With us the build starts at $149 for a landing page or small brochure site, $299 for a multi-page business site on WordPress or another CMS, and $449 for an online store or web application. After that you pay for the domain (about $11 to $23 a year for a .com), hosting (about $10 to $14 a month once the introductory price ends), email if you want it, and card fees of roughly 2.9% plus 30 cents on each online sale.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>Build: $149, $299 or from $449 with us, quoted in writing before work starts. Our <Link to="/pricing">pricing page</Link> lists every service in US dollars.</li>
                    <li>A .com costs about $11 a year at registrars that price it flat; $0.01 offers need a 3-year term and renew at $19.99 to $22.99.</li>
                    <li>Introductory hosting prices need 36 to 48 months paid upfront and renew at two to four times the price.</li>
                    <li>Stripe and Shopify Payments both charge 2.9% plus 30 cents on a standard online card payment.</li>
                    <li>The ADA covers the websites of businesses open to the public. There is no detailed federal technical standard for them, and the Department of Justice points to WCAG as guidance.</li>
                </ul>
            </Callout>

            <h2 id="what-the-build-costs">What the build costs</h2>
            <p>The build is the design and development work, paid once. These are our starting prices for clients outside India. We set them for the US market, not by converting our rupee prices, and your quote confirms the final price in writing before any work starts.</p>
            <div className="blog-table" role="region" aria-label="N&D Co. website build prices in US dollars" tabIndex={0}>
                <table>
                    <caption>Our website build prices in US dollars, October 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Plan</th>
                            <th scope="col">Price</th>
                            <th scope="col">What it is</th>
                            <th scope="col">Delivery</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Starter</th>
                            <td>$149</td>
                            <td>A landing page or small brochure site, custom designed, with a contact form and on-page SEO basics</td>
                            <td>1 to 2 weeks</td>
                        </tr>
                        <tr>
                            <th scope="row">Business</th>
                            <td>$299</td>
                            <td>A multi-page site on WordPress, Shopify or another CMS, with a blog, two to three revision rounds and one year of hosting and domain included</td>
                            <td>2 to 4 weeks</td>
                        </tr>
                        <tr>
                            <th scope="row">Custom</th>
                            <td>from $449</td>
                            <td>An online store or web application with payments, accounts or integrations</td>
                            <td>4 to 6 weeks</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Stores with a large catalog have their own <Link to="/services/ecommerce-solutions">e-commerce packages</Link>, from $239. What each website plan includes is listed on the <Link to="/services/website-design-development">website design and development</Link> page. We work with US businesses remotely from Kolkata, India; <Link to="/locations/usa">working with us from the US</Link> explains the time difference and payment.</p>
            <p>The build price moves most with the number of pages or products, who writes the content, and what the site must do beyond showing information. Planning those before you ask for quotes, as our guide to <Link to="/blogs/plan-a-business-website">planning a business website</Link> describes, makes quotes comparable.</p>

            <h2 id="domain-name">Domain name</h2>
            <p>Some registrars charge the same price every year; others advertise a first year for a cent and charge more at renewal.</p>
            <div className="blog-table" role="region" aria-label=".com domain prices from four registrars" tabIndex={0}>
                <table>
                    <caption>.com prices, checked 25 October 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Registrar</th>
                            <th scope="col">First year</th>
                            <th scope="col">Renewal, per year</th>
                            <th scope="col">Condition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><a href="https://porkbun.com/products/domains" target="_blank" rel="noopener noreferrer">Porkbun</a></th>
                            <td>$11.08</td>
                            <td>$11.08</td>
                            <td>"All prices include ICANN and any other fees"</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="https://www.dynadot.com/domain/pricing" target="_blank" rel="noopener noreferrer">Dynadot</a></th>
                            <td>$10.88</td>
                            <td>$10.88</td>
                            <td>Same price to register, renew or transfer</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="https://www.hostinger.com/domains" target="_blank" rel="noopener noreferrer">Hostinger</a></th>
                            <td>$0.01</td>
                            <td>$19.99</td>
                            <td>Only with a 3-year term ($39.99 due today)</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="https://www.godaddy.com/resources/skills/how-much-domain-name-cost" target="_blank" rel="noopener noreferrer">GoDaddy</a></th>
                            <td>$0.01</td>
                            <td>$22.99</td>
                            <td>Only with a 3-year registration, plus a $0.20 ICANN fee (GoDaddy's own article, May 2026)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>The $0.20 is ICANN's fee per domain-year, unchanged for its 2027 fiscal year (<a href="https://itp.cdn.icann.org/en/files/communications/registrar-fee-approved-fy27-30-07-2026-en.pdf" target="_blank" rel="noopener noreferrer">ICANN registrar fees, FY27</a>). Register the domain in your business's name and keep the login yourself.</p>

            <h2 id="hosting">Hosting: introductory prices and renewals</h2>
            <p>The prices in hosting adverts are introductory. They need a long term paid upfront, and the plan then renews at a higher monthly price.</p>
            <Chart
                type="column"
                title="Entry hosting plans, US dollars per month"
                series={[
                    { name: 'Introductory price', data: [['Hostinger Premium', 2.49], ['DreamHost Launch', 2.89], ['Bluehost Starter', 3.99], ['Bluehost Business', 6.99]] },
                    { name: 'Renewal price', data: [['Hostinger Premium', 10.99], ['DreamHost Launch', 10.99], ['Bluehost Starter', 9.99], ['Bluehost Business', 13.99]] },
                ]}
                source="Hostinger, DreamHost and Bluehost hosting pages, checked 25 October 2026"
                note="Introductory terms: Hostinger 48 months paid upfront ($119.52), Bluehost 36 months, DreamHost the first year. Renewal prices as each page shows them."
            />
            <p>Sources: <a href="https://www.hostinger.com/web-hosting" target="_blank" rel="noopener noreferrer">Hostinger web hosting</a>, <a href="https://www.dreamhost.com/hosting/shared/" target="_blank" rel="noopener noreferrer">DreamHost shared hosting</a> and <a href="https://www.bluehost.com/hosting/shared" target="_blank" rel="noopener noreferrer">Bluehost shared hosting</a>. Budget for the renewal price from the year the introductory term ends. Managed WordPress hosting costs more; DreamHost's DreamPress 1 is $14.99 a month in its first year and renews at $19.99.</p>

            <h2 id="online-store">An online store</h2>
            <p>Shopify's plans are $29, $79 and $299 a month paid yearly (Basic, Grow and Advanced), according to Shopify's own <a href="https://www.shopify.com/blog/ecommerce-website-cost" target="_blank" rel="noopener noreferrer">guide to e-commerce website costs</a>, or $39, $105 and $399 billed monthly (<a href="https://www.shopify.com/blog/pos-system-cost" target="_blank" rel="noopener noreferrer">Shopify on POS system costs</a>). Shopify Payments charges 2.9% plus 30 cents per online card payment on Basic, 2.7% on Grow and 2.5% on Advanced (<a href="https://www.shopify.com/blog/credit-card-processing-fees" target="_blank" rel="noopener noreferrer">Shopify on card processing fees</a>). Use another payment provider and Shopify adds 2%, 1% or 0.6% on top (<a href="https://www.shopify.com/pricing" target="_blank" rel="noopener noreferrer">Shopify pricing</a>).</p>
            <p>WooCommerce on WordPress has no platform fee: "Our core platform is free" (<a href="https://wordpress.org/plugins/woocommerce/" target="_blank" rel="noopener noreferrer">WooCommerce on WordPress.org</a>). You pay for hosting that can carry a store, any paid extensions, and your payment provider's fees.</p>

            <h2 id="payment-fees">Card fees</h2>
            <div className="blog-table" role="region" aria-label="Online card fees in the US" tabIndex={0}>
                <table>
                    <caption>Standard online card fees, checked 25 October 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Provider</th>
                            <th scope="col">Online card payment</th>
                            <th scope="col">Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><a href="https://stripe.com/pricing" target="_blank" rel="noopener noreferrer">Stripe</a></th>
                            <td>2.9% + 30¢</td>
                            <td>Plus 1.5% for international cards and 1% if currency conversion is needed; $15 per dispute</td>
                        </tr>
                        <tr>
                            <th scope="row">Shopify Payments (Basic)</th>
                            <td>2.9% + 30¢</td>
                            <td>Lower rates on the Grow and Advanced plans</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="https://squareup.com/us/en/pricing" target="_blank" rel="noopener noreferrer">Square</a> (free plan)</th>
                            <td>3.3% + 30¢</td>
                            <td>2.9% + 30¢ on the paid Plus and Premium plans</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="https://www.paypal.com/us/business/paypal-business-fees" target="_blank" rel="noopener noreferrer">PayPal Checkout</a></th>
                            <td>3.49% + $0.49</td>
                            <td>Card-only options: 2.99% standard and 2.89% advanced, each plus a fixed fee</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="free-parts">The parts that are free</h2>
            <ul>
                <li><strong>SSL certificate.</strong> Let's Encrypt gives "a trusted certificate at zero cost" to anyone who owns a domain (<a href="https://letsencrypt.org/about/" target="_blank" rel="noopener noreferrer">about Let's Encrypt</a>), and most hosts install one for you.</li>
                <li><strong>WordPress.</strong> Free software, released under the GPLv2 or later (<a href="https://wordpress.org/about/license/" target="_blank" rel="noopener noreferrer">WordPress licence</a>).</li>
            </ul>

            <h2 id="business-email">Business email</h2>
            <p>Google Workspace Business Starter is $8.40 per user per month on the flexible plan, which you can cancel at any time (<a href="https://knowledge.workspace.google.com/admin/billing/flexible-plan" target="_blank" rel="noopener noreferrer">Google Workspace flexible plan</a>), or $7 per user per month with a one-year commitment, $84 a year (<a href="https://knowledge.workspace.google.com/admin/billing/compare-flexible-and-annual-fixed-term-payment-plans" target="_blank" rel="noopener noreferrer">Google's comparison of payment plans</a>).</p>

            <h2 id="accessibility">Accessibility is part of the job</h2>
            <p>The Department of Justice says "the ADA's requirements apply to all the goods, services, privileges, or activities offered by public accommodations, including those offered on the web." It also says it "does not have a regulation setting out detailed standards", that businesses "can currently choose how they will ensure" their sites are accessible, and it names the Web Content Accessibility Guidelines as existing technical standards that "provide helpful guidance" (<a href="https://www.ada.gov/resources/web-guidance/" target="_blank" rel="noopener noreferrer">ADA.gov guidance on web accessibility</a>).</p>
            <p>For state and local governments there is a fixed standard: WCAG 2.1 level AA, due by 26 April 2027 for larger entities and 26 April 2028 for smaller ones (<a href="https://www.ada.gov/resources/2024-03-08-web-rule/" target="_blank" rel="noopener noreferrer">ADA.gov fact sheet on the Title II web rule</a>). Put the level you want in your brief, so it is built in from the start rather than fixed afterwards.</p>

            <h2 id="two-year-example">Example: a business website over two years</h2>
            <p>Our Business plan with one Google Workspace user on the annual plan, using the published prices above. Year one includes hosting and a domain in our price; from year two you pay them at the provider's renewal rate.</p>
            <div className="blog-table" role="region" aria-label="Example two-year cost of a small business website in the US" tabIndex={0}>
                <table>
                    <caption>A business website with one email user, first two years</caption>
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Year one</th>
                            <th scope="col">Year two</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Build (our Business plan)</th>
                            <td>$299</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <th scope="row">Hosting (Hostinger Premium at renewal, $10.99 a month)</th>
                            <td>included</td>
                            <td>$131.88</td>
                        </tr>
                        <tr>
                            <th scope="row">.com domain (Hostinger renewal)</th>
                            <td>included</td>
                            <td>$19.99</td>
                        </tr>
                        <tr>
                            <th scope="row">Google Workspace Business Starter, one user, annual</th>
                            <td>$84</td>
                            <td>$84</td>
                        </tr>
                        <tr>
                            <th scope="row">Total, before any sales tax</th>
                            <td>$383</td>
                            <td>$235.87</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>A store adds its platform fee (Shopify Basic is $348 a year at $29 a month paid yearly) and card fees on every sale. Updates and changes after the 7-day support window are extra unless a maintenance package covers them.</p>

            <h2 id="compare-quotes">How to compare website quotes</h2>
            <ul>
                <li>Check that every quote names the same pages, features and revision rounds.</li>
                <li>Ask whether hosting, the domain and email are included, for how long, and what they renew at.</li>
                <li>Ask for WCAG 2.1 or 2.2 level AA in writing.</li>
                <li>Ask who owns the domain, the accounts and the final files once you have paid.</li>
                <li>Get the price, the deliverables and the payment schedule in writing before you pay a deposit.</li>
            </ul>
            <p>Agencies that want to resell our work under their own name can see our <Link to="/white-label/web-development">white label web development</Link> prices. For your own site, the <Link to="/pricing">pricing page</Link> has every starting price, and a short brief gets you a written quote.</p>
        </>
    );
}
`;export{e as default};