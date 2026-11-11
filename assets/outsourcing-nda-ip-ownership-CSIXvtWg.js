var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>When you outsource work to an agency, the agency owns the copyright in what it makes until a signed document transfers it to you. That is the starting point in the US, the UK and India alike. Paying does not change it, and a "work made for hire" clause often does not either. What makes the code or design yours is a written assignment signed by the agency. With an Indian agency it should also say how long it lasts and where, because Indian law reads an assignment with no period as five years and one with no territory as India only. An NDA is a separate document that protects what you share and transfers nothing. This guide links each rule to the law itself, as we read it on 11 November 2026. It is not legal advice, so have a lawyer in your own country read the contract.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>US: a contractor's work is a work made for hire only in nine categories and with a signed written agreement. Otherwise ownership moves only by a signed written transfer.</li>
                    <li>UK: the author is the first owner, an assignment must be in writing and signed, and a signed assignment of future copyright vests in you as the work is made.</li>
                    <li>India: an assignment must be signed and name the work, rights, period and territory. With no period it lasts five years, and with no territory it covers India only.</li>
                    <li>An NDA protects information. It does not give you the code, so you need both.</li>
                    <li>Of 30 Indian web agencies we read in November 2026, 8 say the client owns the code after payment and 20 say nothing about ownership.</li>
                </ul>
            </Callout>

            <p>If you are still deciding whether to outsource at all, start with our guide to <Link to="/blogs/outsource-web-development-india">outsourcing web development to India</Link>. This post covers who owns what, and what to sign first.</p>

            <h2 id="who-owns-the-code">Who owns the code when you outsource development?</h2>
            <p>The person or company that wrote it, unless you agree otherwise in writing. All three systems start from the author.</p>
            <ul>
                <li>In the US, copyright <a href="https://www.law.cornell.edu/uscode/text/17/201" target="_blank" rel="noopener noreferrer">"vests initially in the author or authors of the work"</a> (17 U.S.C. 201(a)).</li>
                <li>In the UK, <a href="https://assets.publishing.service.gov.uk/media/60180c2b8fa8f53fc62c5897/Copyright-designs-and-patents-act-1988.pdf" target="_blank" rel="noopener noreferrer">"the author of a work is the first owner of any copyright in it"</a> (Copyright, Designs and Patents Act 1988, section 11(1)).</li>
                <li>In India, <a href="https://copyright.gov.in/Documents/Copyright_Act_1957.pdf" target="_blank" rel="noopener noreferrer">the author is the first owner</a> (Copyright Act, 1957, section 17), and the Act's definition of a literary work includes computer programmes (section 2(o)).</li>
            </ul>
            <p>Each system gives an employer the work its employees make in the course of their job. You are the agency's client, not its employer, so that rule gives the agency its staff's work, and you get it only by transfer. The EU's Software Directive is no different. Its <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009L0024" target="_blank" rel="noopener noreferrer">article 2(3)</a> gives the economic rights in a program to the employer when an employee writes it, and article 2 says nothing that hands an outside contractor's program to the client.</p>

            <h2 id="what-agencies-say">What do agencies say about ownership on their websites?</h2>
            <p>Most say nothing. When we studied <Link to="/blogs/hire-wordpress-developer-india">how to hire a WordPress developer in India</Link>, we read the websites of 30 Indian web development agencies on 7 November 2026, including what each says about ownership.</p>
            <Chart
                type="bar"
                title="What 30 Indian web agencies say about who owns the code, number of agencies"
                data={[
                    ['Say nothing about ownership', 20],
                    ['Say the client owns the code or site after payment', 8],
                    ['Keep custom code unless transferred in writing', 1],
                    ['Unclear', 1],
                ]}
                source="N&D Co. survey of 30 Indian agency websites, 7 November 2026"
                note="30 India-based agencies from page 1 of Semrush's web development list for India, each described by its own website. 10 of the same 30 mention signing an NDA."
            />
            <p>A line on a website is not an assignment under US, UK or Indian law, so ask, and get the answer signed.</p>

            <h2 id="work-made-for-hire">Is outsourced code a work made for hire in the US?</h2>
            <p>Often not, even when the contract says it is. A work made for hire is a work whose legal author is the employer or the party that commissioned it, not the person who made it, so the hiring party owns it from the start. The US Copyright Office's <a href="https://www.copyright.gov/circs/circ30.pdf" target="_blank" rel="noopener noreferrer">Circular 30, Works Made for Hire</a> (revised August 2024) sets out the test from section 101 of the Copyright Act. For commissioned work, four conditions apply. It must fall in one of nine categories: a contribution to a collective work, part of a motion picture or other audiovisual work, a translation, a supplementary work, a compilation, an instructional text, a test, answer material for a test, or an atlas. A written agreement must say expressly that it is a work made for hire, and every party must sign it. The circular is blunt: "If a work fails to satisfy any of these requirements, it is not a work made for hire."</p>
            <p>A website or an app is not one of the nine by name. Whether yours could fit one is a question for your lawyer, and a contract should not depend on it. When the label fails, ownership moves only through a transfer that meets <a href="https://www.law.cornell.edu/uscode/text/17/204" target="_blank" rel="noopener noreferrer">17 U.S.C. 204(a)</a>: "an instrument of conveyance, or a note or memorandum of the transfer," that is "in writing and signed by the owner of the rights conveyed or such owner's duly authorized agent."</p>
            <p>The label also matters because, Circular 30 says, the termination rights in sections 203 and 304, which in some cases let an author or their heirs end a transfer, do not apply to works made for hire. So a contract can say both: the work is made for hire where the law allows, and everything else is assigned to you.</p>

            <h2 id="uk-commissioned-work">What does UK law say about commissioned work?</h2>
            <p>That commissioning and paying for a work does not make it yours. The Intellectual Property Office's guidance on <a href="https://www.gov.uk/guidance/ownership-of-copyright-works" target="_blank" rel="noopener noreferrer">ownership of copyright works</a> says that for a commissioned work the first owner is "the person or organisation that created the work," and that this holds "unless you otherwise agree it in writing." At most, a commissioner may get an implied licence to use the work for its intended purpose, which is far less than owning it.</p>
            <p>Two sections of the Copyright, Designs and Patents Act 1988 decide how the transfer works. We read them in the <a href="https://assets.publishing.service.gov.uk/media/60180c2b8fa8f53fc62c5897/Copyright-designs-and-patents-act-1988.pdf" target="_blank" rel="noopener noreferrer">Intellectual Property Office's consolidated text of the Act</a> (only the Act itself is authoritative).</p>
            <ul>
                <li>Section 90(3): "An assignment of copyright is not effective unless it is in writing signed by or on behalf of the assignor."</li>
                <li>Section 91(1): if the future owner signs an assignment of copyright in work not yet made, the copyright vests in you as the work comes into existence. So sign the assignment before the build starts.</li>
            </ul>

            <h2 id="india-rules">What does Indian law say when your agency is in India?</h2>
            <p>India's Copyright Act, 1957 has the most detailed rules of the three. Under <a href="https://copyright.gov.in/Documents/Copyright_Act_1957.pdf" target="_blank" rel="noopener noreferrer">section 18</a>, an owner may assign copyright "for the whole term of the copyright or any part thereof." An assignment of a future work takes effect when the work exists, and an assignment does not reach a medium or mode of use that did not exist or was not in commercial use when it was signed, unless it refers to that medium or mode specifically.</p>

            <h3 id="section-19-defaults">The five-year, India-only default</h3>
            <p>Section 19 sets out what an assignment must contain:</p>
            <ul>
                <li>It is valid only "in writing signed by the assignor or by his duly authorised agent" (section 19(1)).</li>
                <li>It must identify the work and "specify the rights assigned and the duration and territorial extent" (section 19(2)).</li>
                <li>It must state the royalty or other payment to the author (section 19(3)).</li>
                <li>Rights you do not exercise within one year are deemed to lapse, "unless otherwise specified in the assignment" (section 19(4)).</li>
                <li>"If the period of assignment is not stated, it shall be deemed to be five years from the date of assignment" (section 19(5)).</li>
                <li>"If the territorial extent of assignment of the rights is not specified, it shall be presumed to extend within India" (section 19(6)).</li>
            </ul>
            <p>So a short line such as "all IP passes to the client on payment" may leave a client in New York or London with rights in India for five years, and treat any right left unused for a year as lapsed. We covered the same trap for logos in <Link to="/blogs/logo-vs-brand-identity">logo vs brand identity</Link>.</p>

            <h3 id="who-inside-the-agency">Who inside the agency owns the work?</h3>
            <p>Section 17(c) gives the employer the work an employee makes under a contract of service, "in the absence of any agreement to the contrary." So an agency usually owns what its staff write, but its freelancers own what they make until they assign it to the agency, and an agency can pass on only what it holds. Ask it to confirm in the contract that everyone who worked on your project has assigned their rights to it.</p>

            <h3 id="moral-rights">Moral rights</h3>
            <p>India's section 57 gives an author the right to claim authorship and to object to a distortion or modification that would harm their honour or reputation, "independently of the author's copyright and even after the assignment." The Act has no section on waiving them. In the UK, neither the right to be named nor the right to object to derogatory treatment applies to a computer program (sections 79(2) and 81(2)), and any moral right "may be waived by instrument in writing signed by the person giving up the right" (section 87(2)). Designs, text and photos are not programs, so ask for a written waiver for those, and ask your lawyer how far one works in India.</p>

            <h2 id="rules-side-by-side">How do the US, UK and Indian rules compare?</h2>
            <div className="blog-table" role="region" aria-label="Copyright ownership rules for outsourced work in the US, UK and India" tabIndex={0}>
                <table>
                    <caption>Ownership of work made by an outside agency, by country</caption>
                    <thead>
                        <tr><th scope="col">Question</th><th scope="col">US</th><th scope="col">UK</th><th scope="col">India</th></tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Who owns it first?</th><td>The author (s.201(a))</td><td>The author (s.11(1))</td><td>The author (s.17)</td></tr>
                        <tr><th scope="row">Can the client own it from creation?</th><td>Only as a work made for hire: nine categories, signed written agreement</td><td>Through a signed assignment of future copyright (s.91)</td><td>A future-work assignment takes effect when the work exists (s.18)</td></tr>
                        <tr><th scope="row">Form of a transfer</th><td>In writing, signed by the owner or its agent (s.204(a))</td><td>In writing, signed by or for the assignor (s.90(3))</td><td>In writing, signed, naming work, rights, period, territory and payment (s.19)</td></tr>
                        <tr><th scope="row">If no period is stated</th><td>No statutory default</td><td>No statutory default</td><td>Five years (s.19(5))</td></tr>
                        <tr><th scope="row">If no territory is stated</th><td>No statutory default</td><td>No statutory default</td><td>India only (s.19(6))</td></tr>
                        <tr><th scope="row">Rights left unused</th><td>No lapse rule</td><td>No lapse rule</td><td>Lapse after one year unless the assignment says otherwise (s.19(4))</td></tr>
                    </tbody>
                </table>
            </div>
            <p>"No statutory default" means we found no such rule in the sections we read. Which country's law decides ownership is itself a question for a lawyer. The practical answer is one signed assignment that meets India's stricter rules, which also gives the US and UK the signed writing they require.</p>

            <h2 id="what-the-assignment-should-say">What should the IP assignment say?</h2>
            <p>Ask for wording that:</p>
            <ol>
                <li>Names the deliverables, such as the source code, design files and content, in the text or an attached list. A written brief, as in our guide to <Link to="/blogs/plan-a-business-website">planning a business website</Link>, makes that list easy.</li>
                <li>Assigns all rights, not a licence, for the full term of copyright.</li>
                <li>Covers the world, or at least every country you sell in.</li>
                <li>Says the assignment does not lapse if you leave some rights unused for a year.</li>
                <li>Names the media and uses you need, given section 18's proviso.</li>
                <li>Assigns future work as well as finished work, signed before the build starts.</li>
                <li>States the payment and when ownership passes. All 8 agencies in our study that say the client owns the code tie it to payment.</li>
                <li>Confirms that everyone who worked on it, freelancers included, assigned their rights to the agency.</li>
                <li>Lists what stays with the agency, such as its own tools and libraries, with a licence for you to use them in the deliverable.</li>
                <li>Includes a moral rights waiver where the law allows one.</li>
            </ol>

            <h2 id="outsourcing-nda">What should an outsourcing NDA cover?</h2>
            <p>An NDA (non-disclosure agreement) is a contract that says what information is confidential, what the other side may do with it and for how long. It does not transfer anything the agency makes, so it never replaces the assignment. Ten of the 30 agencies in our study mention signing one. Sign it before you share anything private, and check that it covers:</p>
            <ul>
                <li>What counts as confidential, and the exclusions, such as public information.</li>
                <li>The purpose: the information may be used only for your project.</li>
                <li>Who may see it, including any freelancers, on the same terms.</li>
                <li>Whether it is one-way or mutual.</li>
                <li>How long the duty lasts after the project ends.</li>
                <li>Return or deletion of your files and logins at the end, confirmed in writing.</li>
                <li>Which country's law governs it and where a dispute would be heard.</li>
            </ul>

            <h3 id="personal-data">If the agency will handle personal data</h3>
            <p>If the agency processes personal data for you, such as customer details in a store, an NDA is not enough. For an EU business, the GDPR says that processing by a processor <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679" target="_blank" rel="noopener noreferrer">"shall be governed by a contract or other legal act"</a> setting out the processing and the types of data (article 28(3)), and that the contract "shall be in writing, including in electronic form" (article 28(9)). Ask your data protection adviser to check the rest of the GDPR's rules for your project.</p>

            <h2 id="domains-accounts-licences">What else do you need to own besides the code?</h2>
            <p>Accounts and licences in the agency's name can lock you out as surely as code you do not own. Ask for:</p>
            <ul>
                <li>Domain, hosting, app store, analytics and ad accounts in your business's name, with the agency added as a user. Our guide to <Link to="/blogs/choose-seo-agency-india">choosing an SEO agency in India</Link> covers the same rule for Google accounts.</li>
                <li>A code repository your business owns, so you hold every version, not only the last one handed over.</li>
                <li>A list of paid themes, plugins, fonts and stock photos, whose name each licence is in and when it renews. They stay with their makers under their licences. WordPress, for example, says <a href="https://wordpress.org/about/license/" target="_blank" rel="noopener noreferrer">"plugins and themes are derivative work and thus inherit the GPL license"</a>.</li>
                <li>A list of open-source components and their licences at handover. Even permissive licences have conditions: the MIT License requires that <a href="https://opensource.org/license/mit" target="_blank" rel="noopener noreferrer">"the above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software"</a>.</li>
                <li>Editable design files and build scripts named in the deliverables, not only exports. For a logo, our list of <Link to="/blogs/logo-file-types">logo file types</Link> shows which files to ask for.</li>
            </ul>

            <h2 id="governing-law-escrow">Which law applies, and do you need source code escrow?</h2>
            <p>Every contract with a foreign agency should say which country's law applies and where a dispute is heard, in a named court or by arbitration. Ask a lawyer in your country what each option would mean if you had to enforce a decision against an agency in India.</p>
            <p>Source code escrow means a third party holds a copy of the code and releases it to you if the supplier stops trading or supporting it. It matters when you get only a licence. If you own the code and the repository, escrow adds little.</p>

            <h2 id="checklist">Checklist: what to put in writing before you outsource</h2>
            <div className="blog-table" role="region" aria-label="Checklist of ownership and confidentiality terms for an outsourcing contract" tabIndex={0}>
                <table>
                    <caption>Ownership and confidentiality terms to agree before work starts</caption>
                    <thead>
                        <tr><th scope="col">Item</th><th scope="col">What to write</th><th scope="col">Why</th></tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">NDA</th><td>Signed before you share anything private; purpose, people, term, return or deletion</td><td>Protects information, transfers nothing</td></tr>
                        <tr><th scope="row">Named deliverables</th><td>Code, repository, design files, content, each listed</td><td>An assignment must identify the work (India s.19(2))</td></tr>
                        <tr><th scope="row">Assignment</th><td>All rights, signed by the agency</td><td>Required in writing and signed (US s.204(a), UK s.90(3), India s.19(1))</td></tr>
                        <tr><th scope="row">Period</th><td>The full term of copyright</td><td>Otherwise five years in India (s.19(5))</td></tr>
                        <tr><th scope="row">Territory</th><td>Worldwide</td><td>Otherwise India only (s.19(6))</td></tr>
                        <tr><th scope="row">No lapse</th><td>Rights do not lapse if unused for a year</td><td>India s.19(4)</td></tr>
                        <tr><th scope="row">Future work</th><td>Assignment signed before the build starts</td><td>UK s.91, India s.18</td></tr>
                        <tr><th scope="row">People</th><td>Everyone who worked on it has assigned their rights to the agency</td><td>The agency can pass on only what it holds</td></tr>
                        <tr><th scope="row">Moral rights</th><td>Waiver where the law allows</td><td>UK s.87; ask about India's s.57</td></tr>
                        <tr><th scope="row">Accounts</th><td>Domain, hosting, stores, analytics and ads in your name</td><td>You keep control if the agency leaves</td></tr>
                        <tr><th scope="row">Licences and open source</th><td>A list of components, licences and renewals</td><td>Third-party parts are licensed, not owned</td></tr>
                        <tr><th scope="row">Personal data</th><td>A processing contract</td><td>GDPR article 28 for EU businesses</td></tr>
                        <tr><th scope="row">Law and courts</th><td>Governing law and where disputes are heard</td><td>Ask a lawyer in your country</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 id="our-terms">How our own terms handle ownership</h2>
            <p>We are a brand and growth agency in Kolkata. Section 6 of our <Link to="/terms">terms of service</Link> says that when we receive full payment, we assign to you the copyright in the final deliverables named in your quote or project agreement. We sign that document, and it states the rights assigned, for how long and in which countries, and that they do not lapse if unused within a year. Drafts and our reusable tools and code stay ours, with the licence you need for any that are in a deliverable. Third-party material such as fonts, plugins and open-source code stays with its owners.</p>
            <p>For agencies that resell our work under their own name, our <Link to="/white-label">white label</Link> terms say that before the agency shares anything about its client, we sign its NDA once we have read it, or offer our own mutual one. If you are planning a build, see our <Link to="/services/software-development">software development</Link>, <Link to="/services/website-design-development">website design and development</Link> and <Link to="/services/mobile-app-development">mobile app development</Link> pages. None of this is legal advice: a lawyer in your own country should read any contract, ours included, before you sign.</p>
        </>
    );
}
`;export{e as default};