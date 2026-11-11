var e=`import { Link } from 'react-router-dom';
import { Callout } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>Yes, treat it as a scam. On 5 November 2026 an email signed "Alice Green" from quatgio.com offered us a web and SEO project for a US homebuilder. When we replied, the answer came back in 2 minutes and 34 seconds with a booking link. That link opens a fake meeting calendar that asks you to "sign in with Google" on a page that is not Google. We read the pages' code without running it and never signed in. Here is what happened, what each step does, and what to do if the same email reaches you.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>The first message arrived through our website's contact form: Quatgio, it said, was "sourcing a web development and SEO partner" for a client, a real homebuilder in the US.</li>
                    <li>Its reply to our answer came 2 minutes 34 seconds later, said there were no fees, and asked us to book through the client's own "scheduling flow".</li>
                    <li>The booking link sat on the homebuilder's real website, which had been hacked. It loaded a calendar from api-gdrive-goo.click, which sends you to auth-gstage-identify.click to "sign in with Google".</li>
                    <li>A real Google sign-in never happens on a .click domain. If you entered your password there, change it from another device and check your Google account's security page.</li>
                </ul>
            </Callout>

            <h2 id="first-email">What the first message said</h2>
            <p>It came in through the contact form on this site at 7:06 PM India time, with a US phone number and a quatgio.com email address. The brief was short and believable: Quatgio was sourcing a partner for one of its clients, a homebuilder, and the work covered "website optimization, technical performance, organic and local search visibility, UX, content structure, and conversion improvements". It asked to learn more about our team.</p>
            <p>Nothing in it was odd on its own. Agencies get briefs like this from brokers all the time, and the client was real: a homebuilder in the US with a one-page WordPress site that clearly needed work. Quatgio's own website says it is in Tampa, Florida and helps US businesses find development, SEO and marketing firms. It names no one who works there.</p>
            <p>We don't know who runs Quatgio, or whether the business behind that website knows how its name is being used. What we can show is what the emails from quatgio.com sent us, and where that link goes.</p>

            <h2 id="our-reply">Our reply, and an answer 2 minutes 34 seconds later</h2>
            <p>We did what we would do for any lead. We looked at the homebuilder's website, wrote three specific problems we saw, asked four questions (budget, platform, who we would work with, and whether the broker charges agencies a fee) and offered a call. We sent it at 8:27:57 PM India time.</p>
            <p>The answer arrived at 8:30:31 PM, from alice.green@mail1.quatgio.com. It was long, warm and well organised. It praised our review point by point, answered all four questions, said there was "no vendor-side registration, referral, sourcing, placement, or participation fee", and said the client "has not set a rigid budget range". It also said meetings go through the client's own "scheduling flow rather than external agency booking pages", gave a link, and asked us to send back "the exact email address used for the reservation".</p>
            <p>That last request, and the speed, are what stopped us. No person reads a careful email, writes 500 words in reply and sends it in two and a half minutes. A script that fills a template with your own points can. And a broker has no reason to need the address you booked with, unless that address is what it is collecting.</p>

            <h2 id="where-the-link-goes">Where the booking link actually goes</h2>
            <p>We fetched each page with a command-line tool that downloads the code but runs none of it, so nothing on those pages could act on our computers. This is the chain:</p>
            <div className="blog-table" role="region" aria-label="The steps behind the booking link" tabIndex={0}>
                <table>
                    <caption>The booking link, step by step (checked 5 November 2026)</caption>
                    <thead>
                        <tr>
                            <th scope="col">Step</th>
                            <th scope="col">Address</th>
                            <th scope="col">What it does</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1. The link in the email</th>
                            <td>The homebuilder's own website, at /calendly/ with a code on the end</td>
                            <td>Without the code the page refuses to open. With it, a blank page titled "Schedule a meeting" fills the whole screen with a page from another site.</td>
                        </tr>
                        <tr>
                            <th scope="row">2. The calendar</th>
                            <td>api-gdrive-goo.click</td>
                            <td>A booking calendar titled "Discovery Call". Its server says the page was last changed on 30 October 2026. To confirm a time, it asks you to sign in with Google.</td>
                        </tr>
                        <tr>
                            <th scope="row">3. The sign-in</th>
                            <td>auth-gstage-identify.click (the address also contains "youtube")</td>
                            <td>A page built to look like Google's sign-in, with an email field named the way Google names its own. Its script is 334 KB and scrambled so it is hard to read, and it gives page elements random names, which makes the page harder for scanners to recognise.</td>
                        </tr>
                        <tr>
                            <th scope="row">4. After sign-in</th>
                            <td>Back on the calendar</td>
                            <td>The calendar's own code checks with its server which email address signed in, logs it, and then "books" the meeting.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>We did not type anything into the sign-in page, so we can't tell you exactly what it does with a password. A fake Google sign-in exists to collect Google accounts, and the scrambled script mentions two-step verification, so assume it asks for your verification code as well. A code typed into a fake page helps the person running it, not you.</p>
            <p>The homebuilder had no part in this. Someone broke into its website and added the hidden page, so the first link in the chain looked like it belonged to the client. We wrote to the homebuilder the same evening to tell them. We are not naming them here while their site is being fixed.</p>

            <h2 id="why-agencies">Why a scam like this aims at agencies</h2>
            <p>An agency's Google account is worth more than most. Ours, like most agencies', is how we reach clients' Google Analytics, Search Console, Google Ads and Business Profiles, and sometimes their YouTube channels. Whoever takes over one agency account can reach many businesses.</p>
            <p>A client brief is also the one email an agency will always answer. It asks for exactly what we want to show: that we read the site, that we have ideas, that we are quick. The reply to us did not try to rush us or ask for money. It flattered the work and made the next step sound like normal procedure. If you hire agencies yourself, our guide to <Link to="/blogs/outsource-web-development-india">outsourcing web development to an agency</Link> covers the checks that cut the other way, from the client's side.</p>

            <h2 id="red-flags">Signs that a client brief is a trap</h2>
            <ol>
                <li>The reply arrives within minutes and answers everything in full. People take longer than that, and brokers rarely write 500 words to an agency they have not met.</li>
                <li>You must book through a page they choose, not by email or on your own booking page.</li>
                <li>A booking page asks you to sign in with Google or Microsoft just to pick a time. Booking a call normally takes a name and an email address, typed in.</li>
                <li>The address in the browser bar is not the company it claims to be. A real Google sign-in is never on a .click, .top or other domain that isn't Google's.</li>
                <li>They ask which email address you used, after asking you to sign in with it.</li>
                <li>The client's own website has a page you cannot reach from its menu. Hacked sites often hide pages like this, and they only open with a code in the link.</li>
            </ol>
            <p>None of these signs proves a scam alone, but two together should stop you. The cheapest check is to type the address of the service yourself rather than follow the link, which is what <a href="https://support.google.com/mail/answer/8253" target="_blank" rel="noopener noreferrer">Gmail's own phishing advice</a> says to do.</p>

            <h2 id="if-you-signed-in">If you already signed in on that page</h2>
            <p>Act from a different device, one you are sure is clean, in this order:</p>
            <ol>
                <li>Change the Google account's password and sign out of every other session from the account's Security page.</li>
                <li>Check the account's recovery email and phone number, and remove any you don't recognise. An attacker who changes them can take the account back later.</li>
                <li>Check which apps have access to the account and remove anything you did not add.</li>
                <li>Tell your clients if your account can reach theirs, so they can check their own access lists.</li>
                <li>Sign in with a passkey from now on. Google says passkeys are "more secure against phishing" than passwords (<a href="https://support.google.com/accounts/answer/13548313" target="_blank" rel="noopener noreferrer">Google's passkey help page</a>).</li>
            </ol>

            <h2 id="if-it-is-your-site">If the hidden page is on your website</h2>
            <p>If your business's name appears in emails like this, check your own site for a page you never made. In the homebuilder's case the page sat at /calendly/, while the homepage looked normal, so the owner would not see it by browsing. Google's guides <a href="https://web.dev/articles/how-do-i-know-if-my-site-was-hacked" target="_blank" rel="noopener noreferrer">How do I know if my site was hacked?</a> and <a href="https://web.dev/articles/hacked" target="_blank" rel="noopener noreferrer">Help, I think I've been hacked</a> walk through the checks, and WordPress has its own <a href="https://wordpress.org/documentation/article/faq-my-site-was-hacked/" target="_blank" rel="noopener noreferrer">FAQ for a hacked WordPress site</a>.</p>
            <p>In short: change the hosting, WordPress and email passwords, remove admin users and files you don't recognise, update WordPress and every plugin, and ask your host to scan the site. The <a href="https://developer.wordpress.org/advanced-administration/security/hardening/" target="_blank" rel="noopener noreferrer">Hardening WordPress handbook</a> covers locking it down afterwards. A site that only holds a few pages and a gallery can also be rebuilt from scratch, which removes anything an attacker left behind. That is the kind of work our <Link to="/services/website-design-development">website design and development service</Link> covers.</p>

            <h2 id="report-it">How to report it</h2>
            <p>In Gmail, open the message, choose More and then Report phishing, as <a href="https://support.google.com/mail/answer/8253" target="_blank" rel="noopener noreferrer">Google describes in its Gmail help</a>. You can report the fake pages themselves to <a href="https://safebrowsing.google.com/safebrowsing/report_phish/" target="_blank" rel="noopener noreferrer">Google Safe Browsing</a>, which feeds the red warning Chrome shows on dangerous pages.</p>

            <h2 id="what-we-do-now">What we do with leads now</h2>
            <p>We still answer every brief that comes through our contact form, and most are real. This one changed two habits. We never sign in to anything to book a call: we use our own <Link to="/book-a-call">booking page</Link> or a plain email. And before we put work into a reply, we check that the person and the client are who they say they are, through a channel they did not give us. Our <Link to="/security-policy">security policy</Link> sets out how we handle client data and accounts.</p>
            <p>Six days later the same trick turned up inside Fiverr's inbox, as fake orders with a "project file" that ends at a card form; we took that one apart in <Link to="/blogs/fiverr-fake-order-scam">the Fiverr fake order scam</Link>.</p>
            <p>If an email from quatgio.com, or one like it, has reached you, compare it with the steps above before you click anything. And if you are not sure about a link, paste it into <a href="https://urlscan.io/" target="_blank" rel="noopener noreferrer">urlscan.io</a> as an unlisted scan: it loads the page on its own servers and shows you where it leads, so your computer never opens it.</p>
        </>
    );
}
`;export{e as default};