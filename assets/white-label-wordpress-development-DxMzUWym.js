var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>White label WordPress development is when a developer builds WordPress sites that your agency sells to its clients under your agency's name. You keep the client and set the price. The partner builds on a staging site, you review it, and the site goes live on your client's hosting with no credit to the partner. It works when you agree the brief, the staging setup, who holds the hosting, domain and plugin licences, and the checks the site must pass before you put your name on it. On 16 November 2026 we read the websites of 16 providers that sell white label WordPress work to agencies. 11 publish a price, 11 mention an NDA and 10 mention a staging site, but only 2 say anything about who holds the premium plugin licences, and only 2 name WCAG, the accessibility standard.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>11 of the 16 providers publish at least one price in US dollars. None prices an ordinary page on its own: they charge by the hour ($20 to $79), by the site (starting prices of $400 to $2,500) or by the month ($600 to $9,999).</li>
                    <li>14 of 16 offer maintenance after launch, and 5 publish a care plan price, with starting prices of $25 to $99 a site.</li>
                    <li>10 of 16 mention a staging site. WordPress has a built-in setting for it: a site can declare itself local, development, staging or production.</li>
                    <li>Only 2 of 16 say who holds premium plugin licences. When a licence for Elementor Pro, ACF PRO or Gravity Forms lapses, updates stop and some features are limited, and for Gravity Forms the lost updates include security updates.</li>
                    <li>7 of 16 mention accessibility and 2 name WCAG. WordPress itself commits to WCAG 2.2 level AA for core code, so check the build against it yourself before you resell it.</li>
                </ul>
            </Callout>

            <p>This post is the website companion to our guide to <Link to="/blogs/white-label-seo-explained">white label SEO</Link>. That post covers who talks to the client and the NDA and non-solicitation clauses, and our guide to <Link to="/blogs/outsourcing-nda-ip-ownership">NDAs and IP ownership when you outsource</Link> covers who owns the code. Here we stay with the build itself.</p>

            <h2 id="how-we-did-it">How we did the study</h2>
            <p>On 16 November 2026 we searched for white label WordPress development and related phrases and took the 21 providers whose own websites came up. Five refused automated reading or returned an empty page, so the study covers 16. For each one we read its white label WordPress page and, where the site linked them, its pricing, maintenance and agency pages, up to three pages each. We recorded what each site says on the topics below and copied quotes word for word into our notes. It records what providers say about themselves, not the quality of their work, and a provider silent on a topic may still handle it well. We do not name them here.</p>

            <h2 id="what-is-it">What is white label WordPress development?</h2>
            <p>It is outsourced WordPress work that your agency resells as its own. The client signs with you and pays you. You pay the partner a price agreed between the two of you and charge your client whatever you choose. The partner never appears on the site, in the admin panel, on invoices or in emails to the client.</p>
            <p>The providers in our sample sell full builds from a brief, builds from a finished Figma design, page builder work, WooCommerce stores, migrations and monthly maintenance. Some sell blocks of hours or a dedicated developer instead of projects, so decide which you need before you compare prices.</p>

            <h2 id="how-a-build-runs">How does a white label WordPress build run?</h2>
            <p>Most builds follow six steps.</p>
            <ol>
                <li>The brief. You agree the scope, pages, functions, deadline and price with your client, then send the partner the same brief with the client's brand files and content. List the pages by name.</li>
                <li>The design handover. If you design in-house, send the approved Figma file with mobile and desktop layouts and how menus and buttons behave. If the partner designs, approve the design before development starts. Name the page builder too: one provider says Elementor builds cost more.</li>
                <li>Staging. The partner builds on a copy of the site that the public cannot see, at an address you choose, such as a subdomain of your agency's domain, so the partner's name never appears in a link.</li>
                <li>Review. You check the staging site first, send fixes back, and only then show it to your client.</li>
                <li>Launch. The site moves to the client's hosting and domain, forms are tested on the live server, and the staging copy is locked or deleted.</li>
                <li>Handover. Your client gets an admin login for its own team, and you get the logins, licence keys and files named in your quote. Then someone named maintains it.</li>
            </ol>

            <h3 id="staging">Setting up staging properly</h3>
            <p>WordPress can tell a staging site from a live one. Since version 5.5, the function <a href="https://developer.wordpress.org/reference/functions/wp_get_environment_type/" target="_blank" rel="noopener noreferrer">wp_get_environment_type in the WordPress developer reference</a> returns one of four values: <code>local</code>, <code>development</code>, <code>staging</code> or <code>production</code>. It is set with a constant or server variable called <code>WP_ENVIRONMENT_TYPE</code>, and if nothing sets it, WordPress assumes production. Ask the partner to set it on staging.</p>
            <p>Keep staging out of search results. Google's page on <a href="https://developers.google.com/search/docs/crawling-indexing/control-what-you-share" target="_blank" rel="noopener noreferrer">controlling what you share with Google</a> says private content needs to be password protected, which "will also prevent that content from appearing in Google Search".</p>
            <p>The address matters for licences too: ACF PRO's page on <a href="https://www.advancedcustomfields.com/resources/license-activations/" target="_blank" rel="noopener noreferrer">licence activations</a> allows unlimited activations on development and staging sites, and treats an address as staging when it contains a subdomain such as <code>staging.</code> or <code>stage.</code>. Any address it does not recognise counts as a production site against your licence limit.</p>

            <h2 id="what-providers-publish">What do white label WordPress providers publish?</h2>
            <p>Most say they will sign an NDA and work on staging. Far fewer say how long a build takes, what happens to plugin licences, or which accessibility standard they build to.</p>
            <Chart
                type="bar"
                title="What 16 white label WordPress provider websites say, number of providers"
                data={[
                    ['Offer maintenance or support after launch', 14],
                    ['Mention an NDA', 11],
                    ['Publish at least one price', 11],
                    ['Mention a staging site', 10],
                    ['Mention accessibility', 7],
                    ['Name Slack for day-to-day contact', 7],
                    ['State how long a build takes', 6],
                    ['Address time zones or working hours', 5],
                    ['Name WCAG', 2],
                    ['Say who holds premium plugin licences', 2],
                ]}
                source="N&D Co. survey of 16 white label WordPress provider websites, 16 November 2026"
                note="16 providers that came up in searches for white label WordPress development, each described by its own website. A provider can appear in several rows. Five more refused automated reading and are left out."
            />
            <p>The six that state a build time give figures from 5 days for a 5-page site to 2 to 3 weeks for a smaller site and 4 to 8 weeks for a complex build or store. Builds from a finished Figma design are quicker: one provider quotes 3 to 7 working days. Whatever the provider says, ask for the dates in the written quote.</p>

            <h2 id="cost">How much does white label WordPress development cost?</h2>
            <p>Where providers publish prices, white label WordPress work costs $20 to $79 an hour, from $400 to $2,500 as a starting price for a site, or $600 to $9,999 a month for a block of hours or a dedicated team. These are the providers' own published figures in US dollars, and 5 of the 16 publish no price at all.</p>
            <div className="blog-table" role="region" aria-label="Published white label WordPress prices by pricing model" tabIndex={0}>
                <table>
                    <caption>White label WordPress prices published on 11 of 16 provider websites, 16 November 2026, in US dollars</caption>
                    <thead>
                        <tr>
                            <th scope="col">How it is priced</th>
                            <th scope="col">Providers</th>
                            <th scope="col">Published figures</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Hourly rate</th><td>5</td><td>From $20 an hour at the lowest to $79 an hour at the highest</td></tr>
                        <tr><th scope="row">Price per site or project</th><td>5</td><td>Starting prices of $400, $599, $990 (up to 5 pages), $1,500 and $2,500</td></tr>
                        <tr><th scope="row">Monthly hours, retainer or dedicated developer</th><td>5</td><td>$600 a month for 15 hours up to $9,999 a month for a three-person team</td></tr>
                        <tr><th scope="row">Care or maintenance plan</th><td>5</td><td>Starting prices of $25 to $99 a site, one plan up to $119 a month</td></tr>
                        <tr><th scope="row">No price published</th><td>5</td><td>Quote only</td></tr>
                    </tbody>
                </table>
            </div>
            <p>No provider prices an ordinary page on its own. The closest are one that prices a landing page from $600, and one that prices a custom theme from $990 for up to 5 pages and from $1,750 for up to 10. The two monthly hour plans that list hours work out at about $33 to $43 an hour at one provider and $30 to $40 at the other, before any overage.</p>
            <p>A published price is where a provider starts, not what your project costs. Compare what each price buys: design or build only, templates, revision rounds, the builder, testing and days of fixes after launch. For what WordPress work costs when a business hires a developer in India directly, see <Link to="/blogs/hire-wordpress-developer-india">how to hire a WordPress developer in India</Link>.</p>

            <h2 id="page-builders">Which page builders do providers work with?</h2>
            <p>Elementor is the builder named most often, by 10 of the 16, followed by the block editor (Gutenberg) at 9 and Divi at 7. Three name no builder at all.</p>
            <Chart
                type="bar"
                title="Page builders and site-building tools named by 16 white label WordPress providers"
                data={[
                    ['Elementor', 10],
                    ['Block editor (Gutenberg)', 9],
                    ['Divi', 7],
                    ['Bricks', 4],
                    ['WPBakery', 4],
                    ['Beaver Builder', 3],
                    ['Advanced Custom Fields (ACF)', 3],
                    ['Oxygen', 2],
                    ['No builder named', 3],
                ]}
                source="N&D Co. survey of 16 white label WordPress provider websites, 16 November 2026"
                note="A provider can name several builders. Counted only where the provider's own pages name the tool."
            />
            <p>Pick the builder for your client, not for the partner: one its team can learn to edit, and one your next partner can take over if you change. One provider recommends the block editor for most new projects, for its performance and its alignment with WordPress core.</p>

            <h2 id="who-owns-what">Who should own the hosting, domain and plugin licences?</h2>
            <p>The safest default is the client, for the domain and hosting at least. Only one provider in our sample says it plainly: hosting, domain and plugin licences "should sit under your agency's control, not the partner's". Our guide to <Link to="/blogs/agency-access-guide">giving an agency access to your accounts</Link> covers WordPress user roles, hosting logins and why the domain should be in the client's own registrar account.</p>
            <div className="blog-table" role="region" aria-label="Who holds the hosting, domain and licences, and the trade-offs" tabIndex={0}>
                <table>
                    <caption>Who holds the accounts and licences, and the trade-offs</caption>
                    <thead>
                        <tr>
                            <th scope="col">Holder</th>
                            <th scope="col">What works</th>
                            <th scope="col">What to watch</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">The client</th><td>The client can leave or change agencies without losing the site, and pays renewals directly</td><td>You need the client's help to set up and renew, and a lapsed card can lapse a licence</td></tr>
                        <tr><th scope="row">Your agency</th><td>One account for many clients, renewals under your control, a care plan you can bill</td><td>You must hand everything over cleanly if the client leaves, and site limits on your licence apply</td></tr>
                        <tr><th scope="row">The partner</th><td>Least setup for you</td><td>Your client's site depends on a third party it has no contract with; avoid it</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 id="gpl">What the GPL means for themes and plugins</h3>
            <p>WordPress is released under the GPLv2 or later, and <a href="https://wordpress.org/about/license/" target="_blank" rel="noopener noreferrer">WordPress's licence page</a> says "plugins and themes are derivative work and thus inherit the GPL license". In practice, the three plugin publishers we read sell updates, support, extra features and activation on a set number of sites, and those are what a lapsed licence affects.</p>
            <h3 id="licence-terms">What happens when a plugin licence lapses?</h3>
            <p>We read the terms and help pages of three premium plugins agencies often use. Each one limits something different when a licence lapses.</p>
            <ul>
                <li>Elementor Pro. <a href="https://elementor.com/terms/" target="_blank" rel="noopener noreferrer">Elementor's terms</a> say updates are available to the websites the plan was bought for, and tell buyers not to "use it on more websites than you paid for". They also say software received under the GPLv3 stays with you under that licence. Its <a href="https://elementor.com/help/what-happens-to-my-site-if-i-cancel-elementor-pro/" target="_blank" rel="noopener noreferrer">help page on not renewing</a> says you can no longer "update Elementor Pro or add Pro features to your site", that you may have only limited access to existing Pro features, and that anything in the free version keeps working.</li>
                <li>ACF PRO. With an expired licence, its <a href="https://www.advancedcustomfields.com/resources/license-activations/" target="_blank" rel="noopener noreferrer">licence activation page</a> says you can edit existing PRO fields but not create new ones. With no licence at all, you cannot edit them either. The display of field data on the site is not affected in either case.</li>
                <li>Gravity Forms. Its <a href="https://docs.gravityforms.com/license-expiry/" target="_blank" rel="noopener noreferrer">documentation on licence expiry</a> says forms keep working, but you stop getting updates, "including bug fixes and security updates", lose support and cannot register the key on a new site. It adds that it cannot guarantee installations will keep working indefinitely. Its <a href="https://www.gravityforms.com/frequently-asked-questions/" target="_blank" rel="noopener noreferrer">FAQ</a> says the Basic licence covers a single site and Elite covers unlimited sites.</li>
            </ul>
            <p>A site whose plugins stop updating is a security risk, whoever owns the licence. WordPress's own <a href="https://developer.wordpress.org/advanced-administration/security/hardening/" target="_blank" rel="noopener noreferrer">hardening guide</a> says older versions of WordPress are not maintained with security updates and tells site owners to make sure plugins are always updated. So list every paid plugin, theme and builder in the quote, with whose name its licence is in, who pays the renewal and when it renews. One provider in our sample includes premium plugins such as Elementor Pro in its hosting plans, which works until the plan ends. These are the publishers' terms as we read them, not legal advice, and terms change.</p>

            <h2 id="quality-checks">What should you check before you resell a site?</h2>
            <p>Your client will judge the site as your work, so check it on staging the same way each time.</p>
            <h3 id="speed">Speed</h3>
            <p>Google's guide to <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">Core Web Vitals on web.dev</a> sets the targets: the largest content on the page should load within 2.5 seconds, interactions should respond in 200 milliseconds or less, and the layout shift score should be 0.1 or less, measured at the 75th percentile of page loads on mobile and desktop. Test staging on a phone profile; real visitor data only arrives after launch.</p>
            <h3 id="accessibility">Accessibility</h3>
            <p>WCAG 2.2 is the W3C's standard for accessible web content, and the <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer">WCAG 2.2 Recommendation</a> defines three levels of conformance, A, AA and AAA. WordPress's own <a href="https://developer.wordpress.org/coding-standards/wordpress-coding-standards/accessibility/" target="_blank" rel="noopener noreferrer">accessibility coding standards</a> state that "The WordPress commitment is to conform to all WCAG 2.2 Level A and Level AA guidelines". That covers WordPress core, WordPress.org websites and official plugins. It does not cover the theme or page builder your partner chooses, so building on WordPress does not by itself make a site accessible.</p>
            <p>Only 7 of our 16 providers mention accessibility at all, and 2 name WCAG. Ask the partner which level it builds to, then check a few things yourself: every page can be used with the keyboard alone, the focused item stays visible (WCAG 2.2 has a criterion that a focused component is not entirely hidden by content the site itself adds), images have alt text, form fields have labels, and text has enough contrast with its background. Whether a law requires a given level for your client depends on its country and sector, so check with a lawyer before you promise one.</p>
            <h3 id="code">Code and branding</h3>
            <p>Look for the partner's name where clients find it. WordPress shows the theme's author, taken from the header of its <code>style.css</code> file, in the Appearance, Themes screen, according to the <a href="https://developer.wordpress.org/themes/basics/main-stylesheet-style-css/" target="_blank" rel="noopener noreferrer">WordPress theme handbook</a>. Check that field, the footer, the login page, the code comments, admin user names and email addresses, and any plugin built for the project. Then remove unused plugins and demo content.</p>
            <h3 id="security">Security updates</h3>
            <p>Agree who updates WordPress, the theme and the plugins after launch, how often, and whether updates are tested on staging first. 14 of the 16 providers offer maintenance, so this can stay white label, but the duty has to sit with someone by name.</p>

            <h2 id="first-job">How do you test a partner with a first small job?</h2>
            <p>Give a new partner one small, real job before a full site: a landing page, a single template from an existing design, or a fix list on a site you already run. One provider in our sample sells a paid $199 pilot, and another says most agencies start small to test its quality. Judge the process as well as the result.</p>
            <ul>
                <li>Did the quote list the deliverables, the dates and the builder?</li>
                <li>Did the staging site carry your agency's address and a password, with no trace of the partner?</li>
                <li>Did the build match the design at phone and desktop widths?</li>
                <li>How many review rounds did it take, and did fixes break anything else?</li>
                <li>Does the page pass the speed and accessibility checks above?</li>
            </ul>
            <p>If you are new to working with a team abroad, our guide to <Link to="/blogs/outsource-web-development-india">outsourcing web development to India</Link> covers time zones, payments and pilot projects in more detail.</p>

            <h2 id="checklist">A checklist before your first white label WordPress build</h2>
            <ol>
                <li>Have the NDA signed before you send the client's name, files or logins.</li>
                <li>Write the brief: pages by name, functions, the builder, the deadline and what "done" means.</li>
                <li>Send the design as an approved Figma file with mobile and desktop layouts, or approve the partner's design before development.</li>
                <li>Set up staging under your own domain, with a password and <code>WP_ENVIRONMENT_TYPE</code> set to staging.</li>
                <li>Keep the domain and hosting in your client's name, or in your agency's with a written handover plan. Never in the partner's.</li>
                <li>List every paid plugin, theme and builder in the quote: whose licence, who pays, when it renews, what happens if the client leaves.</li>
                <li>Check speed against the Core Web Vitals targets on a phone profile.</li>
                <li>Check keyboard use, visible focus, alt text, form labels and contrast, and ask which WCAG level the partner builds to.</li>
                <li>Search the theme header, footer, login page, code and user accounts for the partner's name.</li>
                <li>Agree who handles updates and backups after launch, and how many days of fixes the quote includes.</li>
                <li>Start with one small paid job before you sell a full site built by a new partner.</li>
            </ol>
            <p>We read every source linked in this post on 16 November 2026.</p>

            <h2 id="data">The data</h2>
            <p>The rows for all 16 providers are in <a href="/assets/data/white-label-wordpress-2026-11.csv" download>a CSV file (white-label-wordpress-2026-11.csv)</a>: the prices each publishes and how they are charged, whether it states a build time, mentions an NDA, staging, plugin licences, accessibility or WCAG, which builders it names, whether it offers and prices maintenance, and whether it addresses time zones. Providers are numbered, not named. If you use the figures, please link to this page as the source.</p>

            <h2 id="how-we-work">How our white label WordPress work runs</h2>
            <p>We are a brand and growth agency in Kolkata, India, and every service on our site is also available <Link to="/white-label">white label for agencies</Link>. For WordPress, you send the brief and your client's brand files, we design to your brief or build from your design, and you review every draft before your client sees it. We sign your NDA before you share client details, leave no credit in the footer, the theme, the code comments or the admin panel, and never contact your client. If you want us on a call with them, we join as part of your team.</p>
            <p>Hosting and the domain go in an account your agency or your client controls, and your quote says whether a package includes them. Each project is quoted in writing before work starts, including the deliverables, with a 7-day support window after delivery for minor corrections, and maintenance available as a separate white label package. On full payment, ownership of the final deliverables named in your quote passes to your agency. The work is the same as our own <Link to="/services/website-design-development">website design and development</Link>, and our <Link to="/white-label/wordpress">white label WordPress page</Link> lists what you can resell.</p>
        </>
    );
}
`;export{e as default};