var e=`import { Link } from 'react-router-dom';
import { Callout } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>To take card payments on a UAE online store you almost always need a UAE trade licence or freelancer permit first. Shopify Payments now works in the UAE, and it, Stripe, Telr and Amazon Payment Services all ask for one before they pay you. The only route we found that starts without a licence is a Ziina Professional account, which needs an Emirates ID and is capped at AED 50,000 received a month, and its Shopify connection asks for a verified account. Separately from what any gateway accepts, the UAE government portal says online sellers need a licence that includes e-commerce activity. We read the pages of ten payment providers (two refused our requests), Shopify's help centre and the UAE government sites on 16 November 2026.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>Shopify Payments is on Shopify's list of 41 supported countries, the UAE included, and asks for a trade licence or freelancer permit issued in the UAE.</li>
                    <li>Stripe says it does not support individuals without a UAE trade licence or permit. Its published UAE card fee is 2.9% + AED 1.00, plus 1% for cards issued abroad.</li>
                    <li>Ziina's Professional account needs no trade licence to start, with a limit of AED 50,000 received a month.</li>
                    <li>VAT registration is mandatory once taxable supplies pass AED 375,000 over 12 months, according to the Federal Tax Authority.</li>
                    <li>The new dirham sign was unveiled on 27 March 2025 and is in Unicode 18.0, published on 16 September 2026, as U+20C3, but fonts and phones need time to support it.</li>
                </ul>
            </Callout>

            <p>We built this guide from the questions UAE store owners ask on Shopify's community forum. It is general information, not legal or tax advice: check anything that affects your business with the licensing authority in your emirate or an adviser.</p>

            <h2 id="why-a-licence">Why do payment gateways ask for a trade licence?</h2>
            <p>A gateway holds your customers' money and then pays it to you, so it has to know who you are and that your business exists. Stripe's UAE help page says it is "required to verify the ultimate beneficial owners" of each business it signs up, and Telr's homepage says Telr is licensed and regulated by the Central Bank of the UAE. A trade licence is the document that proves the business, its legal name and its owner, and the bank account a gateway pays into has to match that name.</p>
            <p>That is why the forum threads go in circles: every gateway suggested to people without a company ended at the same request for a licence. One reply summed it up: most established UAE gateways ask for identity checks, a trade licence and a local bank account before live payments.</p>

            <h2 id="gateways-compared">Which payment gateways work for a UAE Shopify store?</h2>
            <p>Shopify keeps a list of payment providers by country. For the UAE on 16 November 2026 it included Shopify Payments, Stripe, PayPal, Checkout.com, N-Genius by Network International, Telr, Tap Payments, Ziina and Amazon Payment Services, plus the buy now, pay later service Tamara. PayTabs did not appear on Shopify's list for any country. Here is what each provider's own pages say.</p>
            <div className="blog-table" role="region" aria-label="Payment gateways for UAE online stores compared" tabIndex={0}>
                <table>
                    <caption>Payment providers for UAE stores, from their own pages, read 16 November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Provider</th>
                            <th scope="col">On Shopify's UAE list</th>
                            <th scope="col">What it asks for</th>
                            <th scope="col">Wallets named</th>
                            <th scope="col">Published fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Shopify Payments</th>
                            <td>Yes</td>
                            <td>UAE trade licence or freelancer permit, Emirates ID (passport if you live abroad), UAE bank account in AED</td>
                            <td>Apple Pay, Google Pay, Shop Pay</td>
                            <td>Depends on your Shopify plan</td>
                        </tr>
                        <tr>
                            <th scope="row">Stripe</th>
                            <td>Yes</td>
                            <td>Trade licence or freelancer permit issued in the UAE; no individuals without one</td>
                            <td>"Digital wallets", none named</td>
                            <td>2.9% + AED 1.00, +1% foreign cards, +1% conversion</td>
                        </tr>
                        <tr>
                            <th scope="row">Ziina</th>
                            <td>Yes</td>
                            <td>Emirates ID to start; trade licence to verify and raise limits</td>
                            <td>Apple Pay and Google Pay, but no Apple Pay on Shopify</td>
                            <td>2.6% + AED 1, +1.5% international cards</td>
                        </tr>
                        <tr>
                            <th scope="row">Telr</th>
                            <td>Yes</td>
                            <td>Trade licence, owner's passport and visa, MOA or similar, bank statement or bank letter</td>
                            <td>Apple Pay</td>
                            <td>Monthly plans on its UAE pricing page</td>
                        </tr>
                        <tr>
                            <th scope="row">Amazon Payment Services</th>
                            <td>Yes</td>
                            <td>Trade licence or commercial registration, corporate bank account, a website open for review</td>
                            <td>Apple Pay</td>
                            <td>Rates shown only as images</td>
                        </tr>
                        <tr>
                            <th scope="row">Tap Payments</th>
                            <td>Yes</td>
                            <td>Not published; payouts go to a UAE business bank account</td>
                            <td>Apple Pay, Google Pay, Samsung Pay</td>
                            <td>Not published</td>
                        </tr>
                        <tr>
                            <th scope="row">N-Genius (Network International)</th>
                            <td>Yes</td>
                            <td>Not checked: its site refused our requests</td>
                            <td>Not named in its Shopify app</td>
                            <td>Not checked</td>
                        </tr>
                        <tr>
                            <th scope="row">Checkout.com</th>
                            <td>Yes</td>
                            <td>Not published; its homepage speaks to enterprise merchants</td>
                            <td>Not named</td>
                            <td>Not published</td>
                        </tr>
                        <tr>
                            <th scope="row">PayPal</th>
                            <td>Yes</td>
                            <td>Not checked: its UAE pages refused our requests</td>
                            <td>Not checked</td>
                            <td>Not checked</td>
                        </tr>
                        <tr>
                            <th scope="row">PayTabs</th>
                            <td>No</td>
                            <td>Not published for the UAE; its small merchant app is for companies registered in Saudi Arabia</td>
                            <td>Apple Pay, Samsung Pay logos</td>
                            <td>Not published in text</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Fees change, and a gateway may quote you a different rate, so treat these as a starting point. If you use any provider other than Shopify Payments, Shopify's help centre says third-party transaction fees apply to every order it processes, on top of the gateway's own fee.</p>

            <h3 id="shopify-payments">Shopify Payments</h3>
            <p>Two of the threads we read, from early 2025, say Shopify Payments was not available in the UAE. Shopify's <a href="https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries" target="_blank" rel="noopener noreferrer">list of Shopify Payments countries</a> now includes it. Its <a href="https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/united-arab-emirates/requirements" target="_blank" rel="noopener noreferrer">UAE requirements page</a> says the licence or permit "must be issued in the UAE and display the full legal company name". The bank account must be a UAE account in dirhams with an IBAN that starts with AE: a business account for an LLC or free zone LLC, a personal one in your own name for a sole establishment. If you live outside the UAE you can give your passport number instead of an Emirates ID, which helps founders who run a free zone company from abroad.</p>
            <p>Payouts are in dirhams on every plan, with US dollars available through multi-currency payouts, according to Shopify's <a href="https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/united-arab-emirates/payouts" target="_blank" rel="noopener noreferrer">UAE payouts page</a>. Settlement takes at least 5 business days, new stores may wait longer, and the minimum payout is AED 20. If you are still planning the store itself, our <Link to="/shopify-marketing">Shopify page</Link> explains how we set stores up for owners in the UAE and abroad.</p>

            <h3 id="stripe">Stripe</h3>
            <p>Stripe is the gateway most first-time sellers try. Its help page on <a href="https://support.stripe.com/questions/selecting-a-business-type-for-a-uae-account" target="_blank" rel="noopener noreferrer">business types for a UAE account</a> is direct: "We don't currently support individuals without a trade license/permit." The licence or permit has to be issued in the UAE. Its <a href="https://stripe.com/en-ae/pricing" target="_blank" rel="noopener noreferrer">UAE pricing page</a> lists 2.9% + AED 1.00 for domestic cards, 1% more for cards issued outside the UAE and 1% more when currency conversion is needed.</p>

            <h3 id="local-gateways">Telr, Amazon Payment Services and Tap</h3>
            <p>Telr's <a href="https://telr.com/documents-checklist" target="_blank" rel="noopener noreferrer">documents checklist</a> asks even sole proprietorships for a trade licence, the owner's passport and visa, a share certificate, local service agent contract or MOA, and three months of bank statements or a letter from the bank for a new account. Amazon Payment Services' <a href="https://paymentservices.amazon.com/before-you-start" target="_blank" rel="noopener noreferrer">before you start page</a> lists a trade licence or commercial registration, an active corporate bank account and a website that "has to be accessible for review". Tap's site says freelancers and solopreneurs use it and that it has a Shopify plugin, but it lists no documents, so ask Tap's sales team what it needs from you before you build around it.</p>

            <h2 id="without-a-licence">Can I take payments without a trade licence?</h2>
            <p>Of the providers we checked, only Ziina says so. Its <a href="https://ziina.com/en/help-center/6847490-what-is-the-difference-between-personal-professional-and-business-accounts" target="_blank" rel="noopener noreferrer">help page on account types</a> says that with a Professional account "no Trade License is required to get started". The limits are AED 25,000 sent and AED 50,000 received per calendar month. Submitting a trade licence turns it into a verified business account, with up to AED 90,000 per transaction and AED 2,000,000 a month.</p>
            <p>There are two catches for a Shopify store. Ziina's <a href="https://docs.ziina.com/business/shopify" target="_blank" rel="noopener noreferrer">Shopify setup guide</a> lists "Your Ziina account is verified" as a step before you connect, and Ziina's help centre says that "Apple Pay is not currently available on the Shopify integration", though Google Pay is. Ask Ziina whether a Professional account without a licence can connect to Shopify before you plan your launch on it.</p>
            <p>The other options people suggest in the threads are weaker. Cash on delivery and bank transfer are manual payment methods in Shopify, and the <a href="https://help.shopify.com/en/manual/payments/manual-payments" target="_blank" rel="noopener noreferrer">manual payments guide</a> says you "need to manually mark the order as paid", so they work for a few local orders and not for buyers abroad. A personal PayPal account came up too, but a later reply in that thread pointed out that personal accounts cannot take business payments.</p>
            <p>The bigger point is that a gateway accepting you does not make the business licensed. The UAE government portal's <a href="https://u.ae/en/information-and-services/business/Managing-and-growing-your-business/ecommerce" target="_blank" rel="noopener noreferrer">e-commerce page</a> says you need "a commercial licence that includes eCommerce activity" from your emirate. If you plan to sell beyond a few test orders, the licence is the first step, and it opens every gateway in the table.</p>

            <h2 id="which-licence">Which licence do I need to sell online in the UAE?</h2>
            <p>It depends on the emirate and on whether you set up on the mainland or in a free zone. The u.ae e-commerce page lists the main routes:</p>
            <ul>
                <li>Dubai: the eTrader licence, issued through Invest in Dubai, the Department of Economy and Tourism. The <a href="https://www.dubai.ae/investing/starting-a-business/ecommerce" target="_blank" rel="noopener noreferrer">Dubai.ae e-commerce page</a> says it lets freelancers and entrepreneurs trade from their home in Dubai, and is "issued exclusively under the Sole Proprietorship legal form", so the owner carries full liability.</li>
                <li>Abu Dhabi: a licence through Tajer Abu Dhabi from the Department of Economic Development.</li>
                <li>Sharjah and Ajman: their departments of economic development. Some emirates issue a separate individual e-commerce licence; others add e-commerce to a regular commercial licence.</li>
                <li>Free zones: licences from the free zone authority, such as Dubai CommerCity, Masdar City, Sharjah Media City, RAKEZ or Ajman Free Zone. The portal says free zone companies can operate in the zone and internationally, and may need a local distributor or other approvals to sell directly on the mainland.</li>
            </ul>
            <p>The same page says every e-commerce licence needs approval, or a no-objection certificate, from the Telecommunications and Digital Government Regulatory Authority (TDRA). Older reports differ on who may hold an eTrader licence, and we could not open the Invest in Dubai page that would settle it, so ask the Department of Economy and Tourism whether you qualify before you apply.</p>
            <p>Freelancer permits are a different document. The u.ae <a href="https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/work-permits" target="_blank" rel="noopener noreferrer">work permits page</a> describes the Ministry of Human Resources and Emiratisation's freelance permit as one "issued to individuals who wish to engage in freelance work independently". Shopify Payments and Stripe both accept a freelancer permit, but a permit for freelance services may not cover running a shop. Ask the issuing authority whether selling goods or digital products online is within your permitted activity.</p>

            <h2 id="vat">Do I need to register for VAT?</h2>
            <p>Not at first, for most new stores. The Federal Tax Authority's <a href="https://tax.gov.ae/en/services/vat.registration.aspx" target="_blank" rel="noopener noreferrer">VAT registration page</a> says registration is mandatory when your taxable supplies and imports exceed AED 375,000 over the past 12 months, or are expected to within the next 30 days. You may register voluntarily above AED 187,500. One forum poster believed a PayPal business account needed a tax registration number, which a store below the threshold cannot get. We could not check that, so ask PayPal before you plan around it.</p>

            <h2 id="digital-products">Can I sell courses and e-books from the UAE?</h2>
            <p>Yes, but the same licence question applies. The u.ae e-commerce page says Federal Decree by Law No. 14 of 2023 on Modern Technology-Based Trade covers digital products, such as subscriptions and services, as well as physical goods. It asks sellers to sell only permitted products, give accurate information, protect customer data and issue a digital invoice for each transaction.</p>
            <p>We found no government page that sets out extra rules for online courses or e-books. Community replies mention media and publishing rules and free zone approval for educational courses, but we could not confirm those from an official source. Before you apply, ask the licensing authority three things: whether your licence activity covers selling digital content or e-learning, whether the courses need approval from an education or media regulator, and whether the TDRA approval covers delivering files and video.</p>

            <h2 id="apple-pay-mada">How do I accept Apple Pay and mada from GCC buyers?</h2>
            <p>Apple Pay is the easier of the two. Shopify Payments in the UAE offers Apple Pay, Google Pay and Shop Pay, according to its <a href="https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/united-arab-emirates/payment-methods" target="_blank" rel="noopener noreferrer">UAE payment methods page</a>, and Telr, Tap and Amazon Payment Services all name Apple Pay. If Apple Pay matters to your buyers, avoid Ziina on Shopify for now, for the reason above.</p>
            <p>Mada is Saudi Arabia's domestic payment network. Amazon Payment Services lists it only under Saudi Arabia, and Telr's pricing shows it only in its Saudi plans. That does not mean Saudi buyers cannot pay you. Checkout.com's <a href="https://www.checkout.com/docs/payments/add-payment-methods/mada" target="_blank" rel="noopener noreferrer">documentation on mada</a> says mada cards "are accepted both locally and globally" through partnerships with Visa and Mastercard, and that outside Saudi Arabia a mada card behaves as a debit card. With Apple Pay outside Saudi Arabia, it says the gateway must use the Visa or Mastercard network instead of mada.</p>
            <p>So a UAE store can usually take a Saudi buyer's card through its Visa or Mastercard side. If Saudi Arabia is a large market for you, ask each gateway whether it processes co-branded mada cards from a UAE account, whether that works inside Apple Pay, and whether a mada option at checkout needs a Saudi entity.</p>

            <h2 id="dirham-symbol">How do I show the new dirham symbol?</h2>
            <p>The Central Bank of the UAE <a href="https://centralbank.ae/media/ckkp3s3f/cbuae-unveils-new-dirham-symbol-en.pdf" target="_blank" rel="noopener noreferrer">unveiled the new symbol</a> on 27 March 2025. It is the letter D, from the English name of the dirham, with two horizontal lines; the Digital Dirham version puts it inside a circle in the colours of the flag. The Unicode Consortium <a href="https://blog.unicode.org/2026/09/announcing-unicode-standard-version-180.html" target="_blank" rel="noopener noreferrer">published Unicode 18.0</a> on 16 September 2026 with U+20C3 UAE DIRHAM SIGN, and says vendors "are now able to implement support". That means it is now a standard character, but phones, browsers and your theme's fonts will show it only once they add it, and until then a visitor may see an empty box.</p>
            <p>In Shopify you change how prices are written under Settings, General, Change currency formatting, where Shopify's <a href="https://help.shopify.com/en/manual/international/pricing/currency-formatting" target="_blank" rel="noopener noreferrer">currency formatting guide</a> tells you to "replace {'{{amount}}'}" with the format you want. The guide also says these settings apply only to your store's base currency. In practice:</p>
            <ul>
                <li>Keep "AED" or "Dhs" as text for now if your theme's font does not have the new sign. It reads correctly everywhere and screen readers announce it.</li>
                <li>If you want the sign today, add a small SVG of it to the theme's price snippet with "AED" as its text alternative, rather than an image uploaded per price, and test it at every price size. It is a small theme edit for a <Link to="/services/ecommerce-solutions">Shopify developer</Link>.</li>
                <li>Once your font includes U+20C3, switch to the character, then check product pages, cart, checkout and order emails on an iPhone and an Android phone.</li>
            </ul>
            <p>If your store also needs Arabic, our guide to <Link to="/blogs/bilingual-websites-dubai">bilingual Arabic and English websites in Dubai</Link> covers right-to-left layouts, which is where Shopify themes most often break.</p>

            <h2 id="checklist">What to prepare before you apply</h2>
            <ol>
                <li>Get a licence that includes e-commerce activity, or a freelancer permit whose activity covers selling online, in the exact name you will trade under.</li>
                <li>Have your Emirates ID ready, or your passport if you live outside the UAE and the provider accepts it.</li>
                <li>Open a UAE bank account in dirhams with an IBAN starting AE, in the business name for a company, and keep a recent statement or a bank letter.</li>
                <li>For a company, have the MOA or share certificate and the details of everyone named as owner or manager on the licence.</li>
                <li>Finish the website before you apply: real products and prices in AED, delivery and refund terms, a privacy policy and contact details, because reviewers open it. If someone else builds it, our <Link to="/blogs/shopify-development-india">Shopify development guide</Link> explains how to give a developer access to your store.</li>
                <li>Decide where your buyers are. For GCC buyers, ask each shortlisted gateway about mada cards, Apple Pay and payouts in other currencies, in writing.</li>
                <li>In Shopify, check Settings, Payments for the providers offered to your store, and compare the gateway fee plus any Shopify third-party fee.</li>
                <li>Track your taxable sales against the AED 375,000 VAT threshold from your first order.</li>
                <li>Place a real test order with a card and a wallet, refund it, and check that the payout reaches your bank.</li>
            </ol>

            <h2 id="how-we-work">How N&D Co. can help</h2>
            <p>We do not set up companies or give legal or tax advice, so the licence and VAT steps are yours or your adviser's. We build and set up online stores, including the payment provider, checkout and order emails once your gateway account is approved, and we test the whole path from cart to payout. Our <Link to="/services/ecommerce-solutions">e-commerce service</Link> covers Shopify and custom stores, and our <Link to="/shopify-marketing">Shopify page</Link> covers SEO and ads for stores once they are live. Our <Link to="/blogs/shopify-development-india">guide to hiring a Shopify developer in India</Link> lists what to ask before you hire anyone, us included. Read how quotes, calls and payments work for UAE clients on our <Link to="/locations/uae">page for Dubai and the UAE</Link>. Every quote is set in writing before work starts.</p>
        </>
    );
}
`;export{e as default};