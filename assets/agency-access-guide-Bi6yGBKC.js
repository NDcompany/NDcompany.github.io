var e=`import { Link } from 'react-router-dom';
import { Callout } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>Give a developer, SEO or ads agency its own login with the lowest role that lets it do the job, keep the owner role yourself, and never share your password. Every platform a small business uses works this way: Shopify has collaborator accounts, Google Search Console has full and restricted users, Google Business Profile has managers, and Google Ads lets an agency link its manager account to yours. When the work ends, remove the access, and on some platforms take one extra step, or the person can get back in. This guide covers each platform from its own help pages, read on 15 November 2026.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>Keep the owner role. On Shopify only the store owner can manage Shopify Payments or transfer the store, and Google tells agencies to "make the business owner the owner of the profile" on Google Business Profile.</li>
                    <li>Never share a password. Every platform here gives each person their own login, and Google's policy for Business Profile agencies says "Do not share passwords with your clients."</li>
                    <li>Start with the least access. Google's advice for hiring an SEO is to "only grant read access to Search Console" at first.</li>
                    <li>Keep two administrators. Google Ads warns that with one admin you "may lose access to your tags if that user becomes unavailable".</li>
                    <li>Removing a user is not always enough. In Search Console you also delete their verification token, or they can verify again.</li>
                    <li>Register your domain in your own name. ICANN says the registrant has "sole responsibility" for the domain.</li>
                </ul>
            </Callout>

            <h2 id="rules">What are the rules that apply on every platform?</h2>
            <ol>
                <li><strong>You own, they use.</strong> The account, store, profile or domain is registered to your business and your email address. The agency gets a role inside it.</li>
                <li><strong>One person, one login.</strong> Add people by their own email address. A shared password cannot be taken back without changing it everywhere, and you cannot see who did what.</li>
                <li><strong>The lowest role that does the job.</strong> An SEO auditing your site needs to read data, not change billing. Raise access when the work needs it.</li>
                <li><strong>A second admin you trust.</strong> If the only admin leaves or loses their phone, you can be locked out of your own account.</li>
                <li><strong>A list of who has access.</strong> Write down who you added where. When the work ends you remove each one, and you can check the list against the platform's own user list.</li>
            </ol>
            <p>Google's page on hiring an SEO puts the reason plainly: "you are responsible for the actions of any companies you hire" (<a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">Google's "Do you need an SEO?" page</a>). Our guide to <Link to="/blogs/outsourcing-nda-ip-ownership">NDAs and ownership when you outsource</Link> covers the contract side; this one covers the logins.</p>

            <h2 id="at-a-glance">Which role should you give, platform by platform?</h2>
            <div className="blog-table" role="region" aria-label="Which role to give an agency on each platform" tabIndex={0}>
                <table>
                    <caption>The role to give a developer, SEO or ads agency, and the role to keep, from each platform's help pages, 15 November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Platform</th>
                            <th scope="col">Give them</th>
                            <th scope="col">Keep for yourself</th>
                            <th scope="col">When the work ends</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Shopify</th><td>A collaborator account with only the permissions the job needs</td><td>Store owner</td><td>Remove the collaborator account</td></tr>
                        <tr><th scope="row">WordPress</th><td>Editor for content work; Administrator only for a developer who must install plugins</td><td>Administrator</td><td>Delete the user and choose who keeps their posts</td></tr>
                        <tr><th scope="row">Domain registrar</th><td>Nothing, or a separate login if your registrar offers one</td><td>The registrant account</td><td>Change the password if it was ever shared</td></tr>
                        <tr><th scope="row">Search Console</th><td>Restricted or full user</td><td>Verified owner</td><td>Remove the user, and delete any verification token they added</td></tr>
                        <tr><th scope="row">Google Analytics 4</th><td>Viewer, Analyst or Marketer; Editor only if they change settings</td><td>Administrator</td><td>Remove the user</td></tr>
                        <tr><th scope="row">Google Business Profile</th><td>Manager</td><td>Primary owner</td><td>Remove the person</td></tr>
                        <tr><th scope="row">Google Ads</th><td>Standard access, or a link to their manager account</td><td>Admin</td><td>Remove the user or unlink the manager account, after moving billing if they paid it</td></tr>
                        <tr><th scope="row">Meta</th><td>Partner access to the assets they manage</td><td>Full control of your business portfolio</td><td>Remove the partner</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 id="shopify">Shopify: collaborator accounts</h2>
            <p>Shopify built collaborator accounts for exactly this. A Shopify Partner, freelancer or agency, asks for access using a 4-digit collaborator request code from your store's settings, and you choose the permissions. Collaborators do not count towards your store's user limit, and if a code has been given out too widely, generating a new one makes the old codes stop working (<a href="https://help.shopify.com/en/manual/your-account/users/security/collaborator-accounts" target="_blank" rel="noopener noreferrer">Shopify help: collaborator accounts</a>).</p>
            <p>Some things stay with the owner whatever permissions anyone else has. Shopify lists them: "Managing Shopify Payments", "Creating and managing a Shopify Balance account", "Accessing Shopify Capital settings", "Deactivating a store" and "Transferring or changing ownership" (<a href="https://help.shopify.com/en/manual/your-account/users/roles/roles-managed-by-shopify" target="_blank" rel="noopener noreferrer">Shopify help: roles managed by Shopify</a>). Shopify also says you "can't transfer store or organization ownership to a collaborator", which protects you.</p>
            <p>To remove a collaborator, go to Settings, then Users, open the account and remove it. The removal is permanent: to come back, they must send a new request. Shopify also removes access on its own after 90 days without a login. If a developer builds a new store for you on their Partner account, it should be a store built to be handed over, and you should become its owner before it goes live; Shopify's hand-off guide says that "After the transfer, the merchant owns the store" (<a href="https://help.shopify.com/en/partners/manage-clients-stores/client-transfer-stores/hand-off-stores" target="_blank" rel="noopener noreferrer">Shopify help: transferring a store to a client</a>). Our study of <Link to="/blogs/shopify-development-india">what Shopify partners charge</Link> has more on hiring one.</p>

            <h2 id="wordpress">WordPress, hosting and your domain</h2>
            <p>WordPress has five roles on a single site. An Administrator "has access to all the administration features", including installing plugins and adding or deleting users. An Editor "can publish and manage posts including the posts of other users". An Author manages their own posts, a Contributor writes posts but cannot publish them, and a Subscriber can only manage their profile (<a href="https://wordpress.org/documentation/article/roles-and-capabilities/" target="_blank" rel="noopener noreferrer">WordPress documentation: roles and capabilities</a>). A content writer needs Editor or Author. A developer who installs plugins needs Administrator, so give it for the project and change it afterwards.</p>
            <p>When you delete a user, WordPress asks what to do with their posts: delete them or "Attribute all posts and links to" another user. Choose another user, or you lose the content (<a href="https://wordpress.org/documentation/article/users-screen/" target="_blank" rel="noopener noreferrer">WordPress documentation: the Users screen</a>). Our guide to <Link to="/blogs/hire-wordpress-developer-india">hiring a WordPress developer</Link> covers the rest of a WordPress project.</p>
            <p>The domain matters most of all, because your website and email depend on it. ICANN, which oversees domain names, tells registrants: "You will assume sole responsibility for the registration and use of your domain name" (<a href="https://www.icann.org/resources/pages/benefits-2013-09-16-en/" target="_blank" rel="noopener noreferrer">ICANN: registrant benefits and responsibilities</a>). Register it in your business's name, in your own registrar account. If a developer registered it for you, ask for it to be moved to your account. To move a domain between registrars you need its transfer code, which ICANN says the registrar must give you "within five (5) calendar days of your request", and a change to the registrant's name, organisation or email usually locks transfers to another registrar for 60 days (<a href="https://www.icann.org/resources/pages/name-holder-faqs-2017-10-10-en" target="_blank" rel="noopener noreferrer">ICANN registrant FAQ</a>).</p>

            <h2 id="search-console">Google Search Console</h2>
            <p>Search Console has owners, full users and restricted users. A full user sees all the data and can take some actions but cannot add users; a restricted user has view rights on most data (<a href="https://support.google.com/webmasters/answer/7687615" target="_blank" rel="noopener noreferrer">Search Console help: permissions</a>). Google's advice for a new SEO is to "only grant read access to Search Console (at this stage, don't grant them write access)."</p>
            <p>Removing an owner takes two steps. Remove them as a user, then delete every verification token they placed on your site, such as an HTML file or a DNS record. If a token stays, they can verify themselves as an owner again. An owner you do not recognise can be a sign that the site was hacked.</p>

            <h2 id="analytics">Google Analytics 4</h2>
            <p>GA4 roles, from most access to least, are Administrator ("Full control of Analytics"), Editor ("Full control of settings at the property level"), Marketer, Analyst and Viewer. Each includes the permissions of the role below it, and you can hide cost or revenue figures from a user (<a href="https://support.google.com/analytics/answer/9305587" target="_blank" rel="noopener noreferrer">Analytics help: roles and data restrictions</a>). An agency reporting on traffic needs Viewer or Analyst; one setting up events or audiences needs Marketer or Editor. Roles given at the account level carry down to every property, so give access at the property level when you can. GA4 will not let the last Administrator delete themselves, which is one more reason to keep a second admin (<a href="https://support.google.com/analytics/answer/9305788" target="_blank" rel="noopener noreferrer">Analytics help: add, edit and delete users</a>).</p>

            <h2 id="business-profile">Google Business Profile</h2>
            <p>A profile has one primary owner, other owners and managers. Owners have full control; managers can do almost everything except add or remove users or remove the profile (<a href="https://support.google.com/business/answer/3403100" target="_blank" rel="noopener noreferrer">Business Profile help: owners and managers</a>). Give an agency manager access.</p>
            <p>Google's rules for agencies back you up here. They must "make the business owner the owner of the profile", must not claim a profile without the owner's express consent ("Verbal consent isn't sufficient"), and when you give notice they have 7 business days to let you remove their account from your profile (<a href="https://support.google.com/business/answer/7353941" target="_blank" rel="noopener noreferrer">Google's policies for third parties managing Business Profiles</a>). If an agency holds primary ownership of your profile, ask for it back; Google's ownership guidelines say representatives must "always transfer Business Profile ownership to the business owner immediately upon request." Our <Link to="/blogs/google-business-profile-guide">Google Business Profile guide</Link> covers setting the profile up.</p>

            <h2 id="google-ads">Google Ads</h2>
            <p>Google Ads has five access levels: Email-only, Billing, Read-only, Standard and Admin. Standard can edit campaigns and billing but cannot manage users or links; Admin can do everything, including unlinking manager accounts (<a href="https://support.google.com/google-ads/answer/9978556" target="_blank" rel="noopener noreferrer">Google Ads help: access levels</a>). Most agencies ask to link their manager account to yours instead. That is normal, and Google says "The client account still owns its data and has the ability to remove ownership access by unlinking" (<a href="https://support.google.com/google-ads/answer/7456532" target="_blank" rel="noopener noreferrer">Google Ads help: manager account ownership</a>).</p>
            <p>Two things to watch. The account should be yours: Google's advice to advertisers using an agency is that "The third party agency must set up a separate Ads account for you" (<a href="https://support.google.com/adspolicy/answer/9457109" target="_blank" rel="noopener noreferrer">Google Ads: working with a third party</a>). And if the agency's manager account pays your invoices, move billing to your own payment method before you unlink it, or your ads can stop.</p>

            <h2 id="meta">Meta: Facebook and Instagram ads</h2>
            <p>In Meta's business portfolio (Business Suite), an agency should be added as a partner from its own business portfolio, not given your personal login. You choose which assets it can work on, such as your Page or ad account, and whether it gets full control or partial access to each. Removing the partner under Settings, Partners takes back the assets you shared. Meta's help pages load as an app and change often, so check the current steps in the <a href="https://www.facebook.com/business/help/1717412048538897" target="_blank" rel="noopener noreferrer">Meta Business Help Centre's page on partners</a> before you start.</p>

            <h2 id="when-work-ends">How do you take access back when the work ends?</h2>
            <ol>
                <li>Get the deliverables first: files, logins they created for you, reports and anything your quote names.</li>
                <li>Remove them from each platform on your list: Shopify, WordPress, Search Console, Analytics, Business Profile, Google Ads and Meta.</li>
                <li>On Search Console, delete their verification tokens. On Google Ads, move billing before you unlink a manager account that paid it.</li>
                <li>If you ever shared a password, change it, and turn on two-step verification.</li>
                <li>Check that your domain, hosting and email accounts are in your name.</li>
            </ol>
            <p>Unwanted access requests are worth a second look too. Shopify asks store owners to confirm unexpected collaborator requests, and our case studies of a <Link to="/blogs/fiverr-fake-order-scam">Fiverr fake order scam</Link> and the <Link to="/blogs/quatgio-scam-email">Quatgio scam email</Link> show how fake clients and fake suppliers approach small agencies and businesses.</p>

            <h2 id="how-we-work">How we work with your accounts</h2>
            <p>We ask clients to own every account, store, profile and domain, and we work through the roles above: a collaborator account on Shopify, a user role in WordPress and Google's tools, and partner access on Meta. When a project ends we hand over what your quote names and you remove our access. If you are choosing an agency abroad, our guide to <Link to="/blogs/outsource-web-development-india">outsourcing web development to India</Link> and our study of <Link to="/blogs/choose-seo-agency-india">37 Indian SEO agencies</Link>, which found only 1 that says plainly the client stays the super admin of its Google properties, are good next reads.</p>
        </>
    );
}
`;export{e as default};