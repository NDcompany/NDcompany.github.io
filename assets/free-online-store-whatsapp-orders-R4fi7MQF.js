var e=`import { Link } from 'react-router-dom';\r
import { Callout, Chart, Code, Figure } from '../../components/post';\r
\r
export default function Post() {\r
    return (\r
        <>\r
            <p>You can run a small online store for nothing a month: publish each product as a post on Google's free Blogger, give every piece a short code, and put an Order on WhatsApp button on each page that opens a chat with the code already typed. Payment and delivery are agreed in the chat. We built exactly this for Sokher Alankar, a handmade jewellery brand run by one woman, and it went live with 42 products on 15 November 2026. This guide shows each step, with the settings and the button code, so you can copy it.</p>\r
\r
            <Callout title="Key takeaways">\r
                <ul>\r
                    <li>Blogger, the blogspot.com address, WhatsApp's click-to-chat links and the WhatsApp Business app are all free, so a catalogue store can run at ₹0 or $0 a month.</li>\r
                    <li>A product code in every WhatsApp message (SA-005, AB-012) tells a one person business which piece a buyer means, even if the buyer edits the message.</li>\r
                    <li>The button is one link: <code>https://wa.me/</code>, the number with its country code, then <code>?text=</code> and the message, URL-encoded.</li>\r
                    <li>Change Blogger's default robots.txt: it blocks <code>/search</code>, which hides every label page, and label pages are your collections.</li>\r
                    <li>In the first five days, Sokher Alankar's maker got 15 to 20 enquiries, against 10 to 12 a month before the store.</li>\r
                    <li>A free store has no checkout. It suits made-to-order and small-batch sellers who want to talk to each buyer, not shops that need automatic payments and stock counts.</li>\r
                </ul>\r
            </Callout>\r
\r
            <h2 id="why-we-built-it">Why we built a store with no monthly bill</h2>\r
            <p>Adrija Ghosh makes Bengali jewellery at home and runs <Link to="/projects/sokher-alankar">Sokher Alankar</Link> alone. When she came to us she had two constraints. There was no budget for a domain, hosting or a store plan. And because she is the whole business, she wanted every enquiry on WhatsApp, where she already talks to customers, with something in the message that told her at once which piece it was about.</p>\r
            <p>Those constraints are common. Plenty of people who sell handmade goods, home baking, tailoring or art work the same way: one person, little cash to spare, and customers who would rather message than fill in a checkout form. Most guides to free online stores are written by platforms that sell a paid plan, so they skip the option that costs nothing. This is that option, written from a store that is live.</p>\r
\r
            <h2 id="what-is-free">Can you really run an online store for free?</h2>\r
            <p>Yes, if you accept what free leaves out. These parts cost nothing:</p>\r
            <ul>\r
                <li><strong>The site.</strong> Blogger is Google's free publishing platform. Your store lives at yourname.blogspot.com, and you can <a href="https://support.google.com/blogger/answer/1233387?hl=en" target="_blank" rel="noopener noreferrer">add a custom domain later</a> when you can afford one.</li>\r
                <li><strong>Ordering.</strong> WhatsApp's <a href="https://faq.whatsapp.com/5913398998672934/?locale=en_US" target="_blank" rel="noopener noreferrer">click-to-chat links</a> open a chat with your number, and they can carry a message.</li>\r
                <li><strong>Answering.</strong> WhatsApp Business is <a href="https://faq.whatsapp.com/641572844337957/?locale=en_US" target="_blank" rel="noopener noreferrer">a free-to-download app</a> with a business profile, quick replies and labels for chats.</li>\r
                <li><strong>Photos.</strong> Upload them in the Blogger editor. (We hosted ours on GitHub and jsDelivr instead, for a reason explained below.)</li>\r
            </ul>\r
            <p>What it does not include is a checkout. Nobody pays on the site. The buyer messages you, you confirm the price, and you agree payment and delivery in the chat, the way many small sellers already work. Your time is the real cost.</p>\r
\r
            <h2 id="what-it-costs-elsewhere">What a store would cost you on Shopify, Squarespace or Etsy</h2>\r
            <p>We checked each platform's own pricing page on 20 November 2026. Prices change by country, and our checks were served Indian prices, so the comparison is in rupees except for Etsy, which publishes its fees in dollars.</p>\r
            <div className="blog-table" role="region" aria-label="What a small store costs on each platform" tabIndex={0}>\r
                <table>\r
                    <caption>What a small store costs on each platform, checked 20 November 2026</caption>\r
                    <thead><tr><th scope="col">Option</th><th scope="col">Published price</th><th scope="col">A year, before payment fees</th></tr></thead>\r
                    <tbody>\r
                        <tr><th scope="row">Blogger and WhatsApp</th><td>Free</td><td>₹0</td></tr>\r
                        <tr><th scope="row"><a href="https://www.squarespace.com/pricing" target="_blank" rel="noopener noreferrer">Squarespace Basic, India</a></th><td>₹630 a month billed yearly, plus a 2% commerce fee</td><td>₹7,560, plus 2% of sales</td></tr>\r
                        <tr><th scope="row"><a href="https://www.shopify.com/in/pricing" target="_blank" rel="noopener noreferrer">Shopify Basic, India</a></th><td>₹1,499 a month billed yearly</td><td>₹17,988</td></tr>\r
                        <tr><th scope="row"><a href="https://help.etsy.com/hc/en-us/articles/360035902374-Etsy-Fee-Basics" target="_blank" rel="noopener noreferrer">Etsy</a></th><td>$0.20 a listing, renewed every four months, and 6.5% of each sale</td><td>About $25 to keep 42 listings live, plus 6.5% of every order</td></tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
            <Chart\r
                type="bar"\r
                title="Yearly plan cost for a small store in India"\r
                data={[['Blogger and WhatsApp', 0, '₹0'], ['Squarespace Basic', 7560, '₹7,560'], ['Shopify Basic', 17988, '₹17,988']]}\r
                source="Shopify and Squarespace pricing pages for India, checked 20 November 2026"\r
                sourceUrl="https://www.shopify.com/in/pricing"\r
                note="Plan prices billed yearly, before payment processing and transaction fees. A domain, if you want one, is extra on every option: Porkbun listed a .com at $11.81 for the first year."\r
            />\r
            <p>The paid platforms earn their price once you sell enough: card payments, stock counts, shipping labels and abandoned cart emails all save time at volume. Before that point, the plan fee is money a new seller could spend on materials.</p>\r
\r
            <h2 id="who-it-suits">Who this setup suits, and who should pay for a platform</h2>\r
            <p>It suits you if you sell made-to-order or small-batch pieces, you want to talk to each buyer, your customers already use WhatsApp, and you run the business alone or with one helper. That is Adrija's situation, and the situation of many women running a business from home in India, the Gulf, the UK or the US.</p>\r
            <p>Pay for a platform instead if strangers need to buy at 2 AM without talking to you, you sell the same item in quantity, or your buyers do not use WhatsApp. The button in step 3 can open an email or another messenger instead, but at some volume a real cart is worth its fee.</p>\r
\r
            <h2 id="step-1-blogger">Step 1: set up Blogger as your store</h2>\r
            <p>Create a blog at <a href="https://www.blogger.com/" target="_blank" rel="noopener noreferrer">blogger.com</a> with your Google account and pick an address that matches your brand. Then use Blogger's own pieces for store jobs:</p>\r
            <ul>\r
                <li><strong>Posts are products.</strong> One post per piece, with its photos, description, code and button.</li>\r
                <li><strong>Labels are collections.</strong> Give each product a label such as Necklaces or Earrings, and Blogger makes a page for each label at /search/label/Necklaces. Add a label like Shop to every product, so one page lists them all.</li>\r
                <li><strong>Pages are your fixed pages.</strong> About, How to order, Delivery and Returns.</li>\r
            </ul>\r
            <p>Any clean Blogger theme will work. For Sokher Alankar we wrote a theme from scratch that reads those labels and draws a product page, with Blogger's own stylesheet and scripts switched off for speed. You do not need to go that far to start.</p>\r
            <Figure src="/assets/images/projects/sokher-alankar-blogger-labels.webp" width={1000} height={630} copies={[320, 360, 480, 560, 640]} alt="The Blogger posts list filtered by the Shop label, with product posts each tagged with labels such as Necklaces, Combos, SA-016 and Shop" caption="In the Blogger dashboard, each product post carries its collection, its code and Shop as labels." />\r
            <p>Now the setting almost everyone misses. Blogger's default robots.txt tells search engines not to crawl anything under /search, and every label page lives under /search/label/. So a store that uses labels as collections hides all of its collections from Google. In Settings, under Crawlers and indexing, switch on Enable custom robots.txt and use this, with your own address:</p>\r
            <Code lang="plaintext" title="Custom robots.txt for a Blogger store">{\`User-agent: *\r
Allow: /search/label/\r
Disallow: /search\r
Allow: /\r
\r
Sitemap: https://yourstore.blogspot.com/sitemap.xml\r
Sitemap: https://yourstore.blogspot.com/sitemap-pages.xml\`}</Code>\r
            <p>The Allow line for /search/label/ comes first and is more specific, so search engines may crawl the label pages while the search results pages stay blocked.</p>\r
\r
            <h2 id="step-2-product-codes">Step 2: give every product a code</h2>\r
            <p>Pick two or three letters from your brand and number the pieces: SA-001, SA-002 and so on. Show the code on the product page, near the price note, and add it as a label too, so you can find the post from the code later. On Sokher Alankar each address also ends in the code, for example /pink-black-thread-choker-set-sa-005, which keeps it short and makes the piece easy to find when a buyer quotes it.</p>\r
            <p>The code is what makes WhatsApp orders work for a one person business. A buyer may delete half of the message, write in another language or send a screenshot. The code survives all of that, and you can search your chats for it. WhatsApp's own catalogue has a product code field for the same reason (<a href="https://blog.whatsapp.com/introducing-catalogs-for-small-businesses" target="_blank" rel="noopener noreferrer">WhatsApp blog</a>).</p>\r
\r
            <h2 id="step-3-whatsapp-button">Step 3: add an Order on WhatsApp button with the message typed in</h2>\r
            <p>WhatsApp documents the link format: <code>https://wa.me/</code>, then your full number in international format with no plus sign, zeros, brackets or dashes, then <code>?text=</code> and your message, URL-encoded (<a href="https://faq.whatsapp.com/5913398998672934/?locale=en_US" target="_blank" rel="noopener noreferrer">WhatsApp Help Center</a>). URL-encoded means spaces become %20 and commas %2C. Put the code, the product's name, a question and the page's address in the message. Here is a button for a made-up product and a US number:</p>\r
            <Code lang="html" title="Order on WhatsApp button for one product">{\`<a href="https://wa.me/15551234567?text=Hi%2C%20I%20would%20like%20to%20order%20AB-012%20Blue%20silk%20scarf.%20Is%20it%20available%3F%20https%3A%2F%2Fyourstore.blogspot.com%2F2026%2F11%2Fblue-silk-scarf-ab-012.html"\r
   target="_blank" rel="noopener">Order on WhatsApp</a>\`}</Code>\r
            <p>Paste it into each post in HTML view and change the code, name and address. If you are not sure about the encoding, type the message in any free URL encoder, or ask whoever helps you with the site to generate the links from the post title, as our theme does.</p>\r
            <p>Adding the page's address does more than you might think. WhatsApp turns it into a preview with the product photo, so the first thing you see in the chat is the piece itself. This is the button on Sokher Alankar:</p>\r
            <Figure src="/assets/images/projects/sokher-alankar-product-page.webp" width={1440} height={900} copies={[320, 360, 480, 560, 640]} alt="A Sokher Alankar product page with a photo of a thread choker set, the title, Product code SA-005, Price on request and a maroon Order on WhatsApp button" caption="The code sits above the price note, and the button opens a chat with the code, name and link." />\r
            <p>Write a How to order page that says what happens after the tap: the message opens, you reply with the price, you agree payment and delivery. First-time buyers relax when they know there is a person on the other end.</p>\r
\r
            <h2 id="step-4-photos">Step 4: host product photos for free</h2>\r
            <p>If you add products by hand, upload photos in the Blogger editor and you are done. We published Sokher Alankar's 42 products through Blogger's API, which cannot upload images, so we put the photos in a public GitHub repository and served them through jsDelivr, a free CDN that says it has "no bandwidth limits" and is "completely free to use" (<a href="https://www.jsdelivr.com/" target="_blank" rel="noopener noreferrer">jsDelivr</a>). Each address points at a fixed commit, so a replaced photo can never show an old copy from a cache. GitHub recommends keeping files small, under 1 MB each (<a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits" target="_blank" rel="noopener noreferrer">GitHub Docs</a>), which product photos should be anyway.</p>\r
            <p>Whichever way you host them, resize before uploading. A photo straight off a phone is usually several megabytes, and a product page needs a square image around 1,200 pixels wide. Smaller files make the store faster on a phone, which is where most buyers will see it.</p>\r
\r
            <h2 id="step-5-search">Step 5: make the store findable</h2>\r
            <p>Beyond the robots.txt fix, a few settings decide whether Google can show your pieces:</p>\r
            <ul>\r
                <li><strong>Titles that say what the piece is.</strong> "Pink and black thread choker with stud earrings and bangle" beats "Rani". Put the poetic name in the description.</li>\r
                <li><strong>Search descriptions.</strong> Turn them on under Settings, Meta tags, then write one for each post in the editor's sidebar.</li>\r
                <li><strong>A unique description on every product.</strong> The same paragraph pasted on 40 pages makes 40 thin pages. Say what the piece is made of, what comes in the set and what to wear it with.</li>\r
                <li><strong>No fake product markup.</strong> Google's product rich results need a price, a review or a rating (<a href="https://developers.google.com/search/docs/appearance/structured-data/product-snippet" target="_blank" rel="noopener noreferrer">Google Search Central</a>). If you share prices in the chat, leave Product structured data out rather than invent an offer.</li>\r
                <li><strong>Search Console.</strong> Add the blog in <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">Google Search Console</a> and submit the sitemap, so you see what Google indexes.</li>\r
            </ul>\r
            <p>Then write for the people who search before they buy. Sokher Alankar's journal answers questions like how to care for fabric and jute jewellery and what a hasli necklace is. Each guide links to the pieces it mentions. Our <Link to="/blogs/plan-a-business-website">guide to planning a business website</Link> covers the same thinking for a larger site.</p>\r
\r
            <h2 id="step-6-the-chat">Step 6: handle the order in the chat</h2>\r
            <p>The store's job ends when the chat opens. Yours starts there, and a little structure saves hours:</p>\r
            <ul>\r
                <li>Save quick replies in WhatsApp Business for price, delivery times, payment methods and care, so each answer is one tap.</li>\r
                <li>Label chats by stage (new enquiry, awaiting payment, to ship, delivered) so nothing slips while you are making the next piece.</li>\r
                <li>Send a written bill. Our free <Link to="/tools/invoice-generator">invoice generator</Link> makes a PDF invoice or quote in the browser, and for rupee invoices it can add a UPI QR code.</li>\r
                <li>Agree delivery and returns in writing in the chat, and put the same terms on your How to order page.</li>\r
            </ul>\r
\r
            <h2 id="catalogue-or-website">WhatsApp catalogue or a website: which do you need?</h2>\r
            <p>Both, if you can. WhatsApp Business has a <a href="https://blog.whatsapp.com/introducing-catalogs-for-small-businesses" target="_blank" rel="noopener noreferrer">catalogue</a> where you can list items with a price, description and product code, and it is the easiest way to show pieces to someone already chatting with you. But it lives inside the app. Google does not show it to a stranger searching for handmade cowrie necklaces, and it is clumsy to share on Instagram or in an email. A website page can be found, shared and linked from anywhere, and its button brings the buyer back into the same chat. Use the same codes in both.</p>\r
\r
            <h2 id="limits">What a free store cannot do</h2>\r
            <ul>\r
                <li>No checkout, so no payment while you sleep. Every sale needs a reply from you.</li>\r
                <li>No stock count. When a piece sells, edit or unpublish its post yourself.</li>\r
                <li>A blogspot.com address until you buy a domain. That looks fine to most buyers but less established to some.</li>\r
                <li>Blogger adds ?m=1 to addresses on phones and redirects to them, which costs a fraction of a second on the first page a visitor opens. No theme can remove it.</li>\r
                <li>Blogger's API cannot change themes or most settings, so some jobs are by hand in the dashboard.</li>\r
            </ul>\r
            <p>None of these stops a new seller. They are the signs, later, that you have outgrown free.</p>\r
\r
            <h2 id="results">What happened with Sokher Alankar</h2>\r
            <p>The store went live on 15 November 2026 with 42 products, each with its own code, four collections and 25 journal posts, and it costs nothing a month to run. The number Adrija watches is enquiries: before the store she got 10 to 12 a month, and in its first five days she got 15 to 20, by her own count. Buyers pay her by UPI (Google Pay, PhonePe or Paytm) once they have agreed the price in the chat. A launch week brings its own attention, so we will report the count again at 30 and 90 days. A free store does not have to be slow, either: on Google's <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a> its home page scored 100 in all four categories on phone and desktop. The <Link to="/projects/sokher-alankar">full case study</Link> shows every step with screenshots, the brand identity behind it and the exact WhatsApp link on a product.</p>\r
            <p>If you would rather have it built for you, a store like this is part of our <Link to="/services/website-design-development">website design and development</Link> and <Link to="/services/ecommerce-solutions">ecommerce</Link> work. When a store is ready for a checkout, those pages cover what we build for that stage.</p>\r
\r
            <h2 id="questions">Questions people ask</h2>\r
            <h3 id="can-you-sell-on-blogger">Can you sell on Blogger?</h3>\r
            <p>Yes, as a catalogue. Blogger has no cart or payments of its own, but each post can be a product with a button that opens WhatsApp, email or a payment link. Its terms are worth reading for your country before you start.</p>\r
            <h3 id="whatsapp-link-with-message">How do I create a WhatsApp link with a message already typed?</h3>\r
            <p>Use https://wa.me/ followed by your number in international format, then ?text= and the message with spaces written as %20. WhatsApp's Help Center documents the format. Anyone who taps it gets a chat with your number and the message ready to send.</p>\r
            <h3 id="need-a-domain">Do I need my own domain?</h3>\r
            <p>Not to start. A blogspot.com address works, and Blogger lets you connect a custom domain later. If you can afford one, a domain is the first thing worth paying for.</p>\r
            <h3 id="sell-without-website">Can I sell online without a website?</h3>\r
            <p>Yes, through Instagram, a WhatsApp catalogue or a marketplace. A free website adds the part those cannot: pages that Google can show to people who have never heard of you.</p>\r
        </>\r
    );\r
}\r
`;export{e as default};