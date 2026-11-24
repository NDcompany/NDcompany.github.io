var e=`import { Link } from 'react-router-dom';
import { Callout } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>An ads report can show a high return while your business loses money, because the ROAS in Google Ads and Meta Ads Manager is revenue divided by ad cost, counted by each platform's own rules. It leaves out your product costs, it credits sales up to 30 days after a click, it can include modelled and view-through sales, and two platforms can both claim the same order. To check a report, compare the platform's sales with your own orders for the same dates, work out the return you need to break even on your margin, and look at how the conversions are counted. This guide shows how, from Google's and Meta's own documentation, read on 15 November 2026.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>Google defines its return as "Conv. value / cost" and Meta as "purchase conversion value divided by amount spent". Both are revenue, not profit.</li>
                    <li>The return you need to break even is 1 divided by your margin. At a 25% margin after product, shipping and fees, a ROAS of 4 only covers the ad spend.</li>
                    <li>Google Ads counts a sale up to 30 days after a click by default. Meta's default is 7 days after a click, 1 day after a view and 1 day after an engagement such as a 5-second video view.</li>
                    <li>Each platform claims sales by its own rules. Shopify says that when a customer saw both an email and a Google ad, "each platform can count the same sale."</li>
                    <li>Google says differences between Google Ads and Analytics of "often up to 20%" are expected. Much larger gaps point to a counting problem.</li>
                </ul>
            </Callout>

            <h2 id="what-roas-measures">What does ROAS in an ads report actually measure?</h2>
            <p>Google Ads calls it conversion value per cost: "Conversion value per cost = Conv. value / cost" (<a href="https://support.google.com/google-ads/answer/13405059?hl=en" target="_blank" rel="noopener noreferrer">Google Ads help: conversion value per cost</a>). Meta calls it purchase ROAS: "The metric is calculated as purchase conversion value divided by amount spent" (<a href="https://www.facebook.com/business/help/274294333328345" target="_blank" rel="noopener noreferrer">Meta Business Help Centre: purchase ROAS</a>). Conversion value is usually the order total. So a report showing a 600% return, or a ROAS of 6, says that for every 1 spent on ads the platform credited 6 in sales. It says nothing about what those sales cost you to fulfil.</p>
            <p>That is why the return you need depends on your margin. If you keep 25 of every 100 in sales after the cost of the product, shipping, payment fees and returns, you need 4 in sales for every 1 spent just to cover the ads. The table shows the same sum at other margins.</p>
            <div className="blog-table" role="region" aria-label="Break-even ROAS at different margins" tabIndex={0}>
                <table>
                    <caption>The ROAS you need to break even on ad spend, by margin (1 divided by the margin)</caption>
                    <thead>
                        <tr>
                            <th scope="col">Margin after product, shipping and fees</th>
                            <th scope="col">Break-even ROAS</th>
                            <th scope="col">Result of a reported ROAS of 4, per 1,000 spent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">50%</th><td>2</td><td>4,000 in sales, 2,000 margin: 1,000 left after the ads</td></tr>
                        <tr><th scope="row">35%</th><td>2.9</td><td>4,000 in sales, 1,400 margin: 400 left</td></tr>
                        <tr><th scope="row">25%</th><td>4</td><td>4,000 in sales, 1,000 margin: nothing left</td></tr>
                        <tr><th scope="row">15%</th><td>6.7</td><td>4,000 in sales, 600 margin: 400 lost</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Those figures also assume every reported sale is real and caused by the ads. The next sections cover why that is often not quite true.</p>
            <p>Google does offer a profit view. With cart data and the cost of goods sold from your Merchant Center feed, Google Ads can report "revenue and gross profit" (<a href="https://support.google.com/google-ads/answer/9028254?hl=en" target="_blank" rel="noopener noreferrer">Google Ads help: conversions with cart data</a>), and conversion value rules let you adjust values for things such as margin, which Smart Bidding then uses (<a href="https://support.google.com/google-ads/answer/10518330?hl=en" target="_blank" rel="noopener noreferrer">Google Ads help: conversion value rules</a>). If your agency bids on revenue alone, ask whether either is set up.</p>

            <h2 id="why-higher">Why do the ad platforms show more sales than your shop?</h2>
            <h3 id="windows">They credit sales long after the click</h3>
            <p>Google Ads counts a conversion within a window after the ad interaction. For clicks "the default window is 30 days", for views of a display or video ad 1 day, and the window can be set anywhere from 1 to 90 days (<a href="https://support.google.com/google-ads/answer/3123169?hl=en" target="_blank" rel="noopener noreferrer">Google Ads help: conversion windows</a>). Meta's default is "7-day click, 1-day view and 1-day engagement conversion", where an engagement includes a video played for 5 seconds (<a href="https://www.facebook.com/business/help/611432918970668" target="_blank" rel="noopener noreferrer">Meta: about attribution settings</a>). A customer who saw your Instagram ad, ignored it and bought from a Google search the next day can be counted by both.</p>
            <h3 id="same-sale">Each platform counts the same sale</h3>
            <p>Shopify puts it simply: "Each platform credits sales by using its own rules", and in its example of a customer who clicked an email and a Google ad, "each platform can count the same sale" (<a href="https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/marketing-performance" target="_blank" rel="noopener noreferrer">Shopify help: marketing performance</a>). Add up the sales Google, Meta and your email tool each claim, and the total can be larger than your shop's real sales.</p>
            <h3 id="modelled">Some sales are estimated</h3>
            <p>Both platforms model sales they cannot observe. Google says modelled conversions "estimate conversions that Google is unable to observe directly", and "Many cross-device conversions are also modeled" (<a href="https://support.google.com/google-ads/answer/10081327?hl=en" target="_blank" rel="noopener noreferrer">Google Ads help: modeled conversions</a>). Meta says "statistical modelling may be used to account for some events, as well as for the values assigned to those events." Modelling is not wrong, but it means the report is partly an estimate.</p>
            <h3 id="dates">The dates do not line up</h3>
            <p>Google's main conversion columns are "calculated based on the time of the click, not the time of the conversion" (<a href="https://support.google.com/google-ads/answer/6270625?hl=en" target="_blank" rel="noopener noreferrer">Google Ads help: comparing Google Ads and Analytics data</a>). A sale on 3 March from a click on 25 February shows in February in Google Ads and in March in your shop. The same page says differences, "often up to 20%, are expected due to different attribution models", and suggests the "All conv. (by conv. time)" column for a closer comparison with Analytics.</p>

            <h2 id="double-counting">Is the account counting some sales twice?</h2>
            <p>This is the most common real error, and the easiest to check.</p>
            <ul>
                <li><strong>Every or One.</strong> Google says to select "'Every' for sales to track each purchase and 'One' for leads to prevent duplicate counts from page refreshes." A lead form counted as Every can count one enquiry several times (<a href="https://support.google.com/google-ads/answer/3438531?hl=en" target="_blank" rel="noopener noreferrer">Google Ads help: count settings</a>).</li>
                <li><strong>Two actions for one purchase.</strong> A Google Ads purchase tag and a purchase imported from Google Analytics, both counted, record each order twice. Google only removes duplicates "within a single conversion action", so "a single transaction may be counted twice" (<a href="https://support.google.com/google-ads/answer/16542291" target="_blank" rel="noopener noreferrer">Google Ads help: duplicate conversions</a>). Imported Analytics events are set as secondary by default for this reason.</li>
                <li><strong>No transaction ID.</strong> Without an order ID on the tag, a customer who reloads the thank-you page can be counted again. With one, "Google Ads will know the second conversion is a duplicate" (<a href="https://support.google.com/google-ads/answer/6386790?hl=en" target="_blank" rel="noopener noreferrer">Google Ads help: transaction IDs</a>).</li>
                <li><strong>The wrong column.</strong> "All conversions" includes actions you chose not to count in the main column, and view-through conversions are not in "Conversions" at all (<a href="https://support.google.com/google-ads/answer/3419678?hl=en" target="_blank" rel="noopener noreferrer">Google Ads help: conversion columns</a>). Ask which column the report uses.</li>
            </ul>
            <p>Google Ads also has a diagnostic that can warn "Your conversions may be overcounted". If it shows, ask your agency what it found.</p>

            <h2 id="brand-searches">Are the ads taking credit for people who searched your name?</h2>
            <p>Someone who types your shop's name into Google was probably going to buy from you anyway. Ads on those searches look very profitable in a report, because the buyer already decided. Performance Max campaigns can serve on your brand name unless the account excludes it; Google says "Campaign-level brand exclusions are a better option for blocking brand traffic" (<a href="https://support.google.com/google-ads/answer/14587068?hl=en" target="_blank" rel="noopener noreferrer">Google Ads help: Performance Max and brand searches</a>). Google does not say that brand searches inflate results; that is our reading. But a report that splits brand from non-brand searches shows you what the ads add, and a report that does not, does not.</p>

            <h2 id="returns">Are returns and cancellations taken out?</h2>
            <p>A conversion is recorded when the order is placed. If the customer returns it, the ad report still counts the sale unless someone corrects it. Google lets advertisers "Retract conversions that should no longer be counted" and "Reduce (restate) the value of conversions when you receive partial returns" (<a href="https://support.google.com/google-ads/answer/7686447?hl=en" target="_blank" rel="noopener noreferrer">Google Ads help: conversion adjustments</a>). If you have many returns, ask whether this is done, or take your return rate off the reported sales yourself.</p>

            <h2 id="check">How do you check a report in 30 minutes?</h2>
            <ol>
                <li><strong>Pick one whole month.</strong> Note the ad spend and the sales each platform claims.</li>
                <li><strong>Pull your own orders</strong> for the same month from your shop, after returns and cancellations.</li>
                <li><strong>Compare.</strong> If Google and Meta together claim more sales than your shop took, the platforms are double counting between them. If one platform alone is far above your orders, check its conversion actions for duplicates.</li>
                <li><strong>Work out your break-even ROAS</strong> from your real margin, as in the table above, and compare it with the reported ROAS.</li>
                <li><strong>Check the settings:</strong> the conversion window, Every or One, the column the report uses, and whether brand searches are separated.</li>
                <li><strong>Test without the ads.</strong> If you can, pause a campaign on non-brand searches for two weeks and see what happens to your own orders. That tells you more than any attribution model.</li>
            </ol>

            <h2 id="your-rights">What are you entitled to from your ads agency?</h2>
            <p>Google's advice to advertisers who use an agency is that "The third party agency must set up a separate Ads account for you", that "At a minimum, you have the right to know the number of clicks, impressions, and the total cost of your Google ads", and to get "an official copy of your agreement in writing" (<a href="https://support.google.com/adspolicy/answer/9457109?hl=en" target="_blank" rel="noopener noreferrer">Google Ads: working with a third party</a>). Ask for admin access to your own account too; our guide to <Link to="/blogs/agency-access-guide">what access to give an agency</Link> covers Google Ads, Meta and the rest. Our guide to <Link to="/blogs/outsourcing-nda-ip-ownership">contracts and ownership when you outsource</Link> covers what to put in writing.</p>

            <h2 id="how-we-report">How we report on ads</h2>
            <p>Our <Link to="/services/digital-marketing">digital marketing service</Link> runs Google Ads and Meta ads in accounts you own, sets up conversion tracking first, and sends a monthly report on spend, clicks, cost per lead and what we change next. You pay the ad spend to Google or Meta directly, so the platform's invoice shows exactly what was spent. We do not promise a return on ad spend. If you sell online, our <Link to="/shopify-marketing">Shopify marketing</Link> page shows how ads fit with SEO, and our <Link to="/blogs/restaurant-ad-ideas">restaurant ad ideas</Link> show what we make for food businesses.</p>
        </>
    );
}
`;export{e as default};