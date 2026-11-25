var e=`import { Link } from 'react-router-dom';
import { Callout, Chart } from '../../components/post';

export default function Post() {
    return (
        <>
            <p>A business needs two kinds of logo file. The first is a vector master, which can be printed at any size: SVG for the web, PDF for printers, and AI or EPS for designers. The second is a set of PNG files with a transparent background, for everything else. JPG is for the few places that will not take PNG, and favicons need their own small square files. When we handed over the Sea Seven Fish brand identity, its logo folders held 59 image files for four versions of one logo. The smallest, the icon as an SVG, was 4.5 KB. The largest, the primary logo as a 2000 x 2000 pixel PNG, was 1,165 KB.</p>

            <Callout title="Key takeaways">
                <ul>
                    <li>Vector files (SVG, PDF, EPS, AI) are drawn from shapes, so they print sharp at any size. Raster files (PNG, JPG, WebP) are grids of pixels and blur when you enlarge them.</li>
                    <li>Use PNG for everyday digital use. It keeps a transparent background, and JPG cannot.</li>
                    <li>In our Sea Seven Fish package, the same icon was 4.5 KB as an SVG, 88 KB as a JPG and 137 KB as a PNG.</li>
                    <li>A file ending in .svg or .pdf is not always vector. Our own homepage illustration once carried a 1000 pixel picture of our logo inside an SVG, which tripled its size.</li>
                    <li>WordPress does not accept SVG uploads by default, and Google Search does not list SVG among its favicon formats, so keep PNG copies.</li>
                </ul>
            </Callout>

            <h2 id="logo-file-types-at-a-glance">Logo file types at a glance</h2>
            <p>Most logo packages use the same seven or eight formats. This is what each one is and where it belongs.</p>
            <div className="blog-table" role="region" aria-label="Logo file types compared" tabIndex={0}>
                <table>
                    <caption>Common logo file formats and what to use them for</caption>
                    <thead>
                        <tr>
                            <th scope="col">Format</th>
                            <th scope="col">Vector or raster</th>
                            <th scope="col">Transparent background</th>
                            <th scope="col">Use it for</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">SVG</th>
                            <td>Vector</td>
                            <td>Yes</td>
                            <td>Your website, and handing to a web developer</td>
                        </tr>
                        <tr>
                            <th scope="row">PDF</th>
                            <td>Usually vector</td>
                            <td>Yes</td>
                            <td>Printers, signs, banners and stationery</td>
                        </tr>
                        <tr>
                            <th scope="row">AI</th>
                            <td>Vector</td>
                            <td>Yes</td>
                            <td>Editing in Adobe Illustrator; keep it for your next designer</td>
                        </tr>
                        <tr>
                            <th scope="row">EPS</th>
                            <td>Vector</td>
                            <td>Yes</td>
                            <td>Older print and signage workflows that ask for it</td>
                        </tr>
                        <tr>
                            <th scope="row">PNG</th>
                            <td>Raster</td>
                            <td>Yes</td>
                            <td>Social media, documents, slides, email and most uploads</td>
                        </tr>
                        <tr>
                            <th scope="row">JPG</th>
                            <td>Raster</td>
                            <td>No</td>
                            <td>Places that reject PNG, on a white or solid background</td>
                        </tr>
                        <tr>
                            <th scope="row">WebP</th>
                            <td>Raster</td>
                            <td>Yes</td>
                            <td>Small, fast logos on a website</td>
                        </tr>
                        <tr>
                            <th scope="row">ICO and favicon PNGs</th>
                            <td>Raster</td>
                            <td>Yes</td>
                            <td>The small icon in browser tabs and Google results</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="vector-or-raster">What is the difference between a vector and a raster logo?</h2>
            <p>A vector file stores the logo as shapes: points, curves and fills, described in numbers. Your screen or printer draws those shapes fresh at whatever size it needs. Mozilla's developer documentation says SVG images <a href="https://developer.mozilla.org/en-US/docs/Web/SVG" target="_blank" rel="noopener noreferrer">can be rendered at any size without loss of quality</a>, and the same holds for vector artwork in PDF, EPS and AI files. That is why a vector logo can go on a visiting card and on a shop sign from the same file.</p>
            <p>A raster file stores a fixed grid of coloured pixels. A 2000 x 2000 pixel PNG looks crisp on a phone, but blow it up to a 3 metre flex banner and every pixel turns into a visible square. You cannot add detail that the file never had. So the vector file is the master, and every PNG or JPG is a copy made from it at a size chosen for one job.</p>
            <p>If a designer sends only PNG and JPG files, ask for the vector files before you pay the final invoice. Without them, every printer and every future designer has to redraw your logo from a picture of it.</p>

            <h2 id="each-logo-file-format">What each logo file format is for</h2>

            <h3 id="svg">SVG: the vector file for the web</h3>
            <p>SVG (Scalable Vector Graphics) is, in Mozilla's words, <a href="https://developer.mozilla.org/en-US/docs/Web/SVG" target="_blank" rel="noopener noreferrer">an XML-based markup language for describing two-dimensional based vector graphics</a>. It is text, so a simple logo comes out very small, and it stays sharp on any screen. Mozilla's image format guide calls it <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types" target="_blank" rel="noopener noreferrer">ideal for user interface elements, icons, diagrams</a> and other graphics that must be drawn accurately at different sizes.</p>
            <p>There are two catches. An SVG is code and can carry scripts, and <a href="https://developer.wordpress.org/reference/functions/wp_get_mime_types/" target="_blank" rel="noopener noreferrer">WordPress leaves SVG out of the file types it accepts</a> by default, so a developer has to add safe support for it. And many upload forms take only pictures: Google Business Profile, for one, asks for JPG or PNG. Your web developer will want the SVG; most other people will want a PNG.</p>

            <h3 id="png">PNG: the everyday file</h3>
            <p>PNG is a raster format with lossless compression, so it keeps hard edges and flat colours exactly. The W3C's PNG specification, now in its third edition, supports <a href="https://www.w3.org/TR/png-3/" target="_blank" rel="noopener noreferrer">an optional alpha channel</a>, which is what gives a logo a transparent background. Place it on a coloured slide or a photo and you see only the logo, with no white box behind it.</p>
            <p>That makes PNG the file you will use most: social profiles, Word and PowerPoint, email signatures, invoices, WhatsApp Business and most website builders. Ask for PNGs of each logo version in colour, black and white, at a large size such as 2000 pixels, and make smaller copies when a platform asks for them.</p>

            <h3 id="jpg">JPG: only where transparency does not matter</h3>
            <p>JPG (or JPEG) was made for photographs. Mozilla's guide is plain about it: <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types" target="_blank" rel="noopener noreferrer">"JPEG does not support an alpha channel"</a>, and its lossy compression gives poor results on sharp content such as text and diagrams. A JPG logo always has a background, usually white. Keep one for the odd form that refuses PNG, and use it only on a white page.</p>

            <h3 id="pdf">PDF: the file to send a printer</h3>
            <p>A PDF can hold vector artwork, fonts and colour settings in one file that nearly any computer can open. For printed work we send PDFs: the Sea Seven Fish business cards and brand seal went to the client as print-ready PDFs. A printer in Kolkata or anywhere else can open them without design software.</p>
            <p>One warning: a PDF is only vector if the logo inside it is. Turn a PNG into a PDF (our own <Link to="/tools/image-to-pdf">image to PDF converter</Link> does exactly that) and you get a PDF that holds a picture, which still blurs when enlarged. It is fine for sending a document, but it does not replace a vector file.</p>

            <h3 id="ai-and-eps">AI and EPS: the designer's files</h3>
            <p>Adobe describes AI files as <a href="https://www.adobe.com/creativecloud/file-types/image/vector/ai-file.html" target="_blank" rel="noopener noreferrer">"the native vector file type for Adobe Illustrator"</a>. It is the editable working file. Most people cannot open it, but your next designer will want it.</p>
            <p>EPS (Encapsulated PostScript) is older. Adobe calls it <a href="https://www.adobe.com/creativecloud/file-types/image/vector/eps-file.html" target="_blank" rel="noopener noreferrer">a common legacy format</a> that has been overtaken by PDF, and Windows needs specialised software to open it. Some print and sign shops still ask for EPS, so it is worth having in the package even if you never open it yourself.</p>

            <h3 id="webp">WebP: a lighter copy for websites</h3>
            <p>WebP is a raster format that can be lossless or lossy and keeps transparency. Mozilla's guide says it <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types" target="_blank" rel="noopener noreferrer">offers much better compression than PNG or JPEG</a>. You do not need it in your logo package; your web developer can make it from the PNG or SVG. Our own header logo is a 96 x 96 pixel WebP of 2.8 KB, drawn at 40 pixels on screen. Our full-size logo PNG, 1000 x 1000 pixels, is 33 KB.</p>

            <h3 id="favicons">ICO and favicon files: the tiny square</h3>
            <p>The favicon is the icon in a browser tab and next to your site in Google's results. Google asks for <a href="https://developers.google.com/search/docs/appearance/favicon-in-search" target="_blank" rel="noopener noreferrer">a square that is at least 8 x 8 pixels</a>, recommends one larger than 48 x 48, and lists BMP, GIF, ICO, PNG, JPEG, PPM and TIFF as the formats it supports. If your site's favicon is an SVG, add a PNG or ICO version too. For a website that can be installed like an app, Chrome needs <a href="https://web.dev/articles/add-manifest" target="_blank" rel="noopener noreferrer">at least a 192 x 192 pixel icon and a 512 x 512 pixel icon</a>.</p>
            <p>A wide logo will not survive at 16 pixels. That is why a good logo comes with a compact icon or monogram, and the favicons are cut from that, not from the full logo. Our post on <Link to="/blogs/logo-vs-brand-identity">logo versus brand identity</Link> covers the square and circle crops social platforms apply.</p>

            <h2 id="sea-seven-fish-package">What was in a real logo package we delivered?</h2>
            <p>Sea Seven Fish is a seafood brand whose <Link to="/projects/sea-seven-fish">brand identity we designed</Link>. The client received the package as one set of folders. The logo part of it looked like this.</p>
            <div className="blog-table" role="region" aria-label="Logo files in the Sea Seven Fish brand package" tabIndex={0}>
                <table>
                    <caption>Logo files in the Sea Seven Fish brand package, counted on 3 November 2026</caption>
                    <thead>
                        <tr>
                            <th scope="col">Folder</th>
                            <th scope="col">What it holds</th>
                            <th scope="col">Files</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Logos</th>
                            <td>Primary, secondary and tertiary logos and the icon, each as SVG, PNG and JPG</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th scope="row">Digital files</th>
                            <td>The same four versions sorted by format, for whoever needs one type</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th scope="row">Logo variations</th>
                            <td>All four versions in full colour, black, white and greyscale, as PNG</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <th scope="row">Favicons</th>
                            <td>Browser, Apple and Windows tile icons from 16 x 16 to 310 x 310 pixels, an ICO, and the HTML to add them</td>
                            <td>19 images and 1 code file</td>
                        </tr>
                        <tr>
                            <th scope="row">Source files</th>
                            <td>Editable Photoshop files for the three logos, with their layers</td>
                            <td>Not counted here</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Four logo versions became 59 image files. That sounds like a lot, but each one answers a question someone will ask later: is there a white version for the dark van? A square one for Instagram? A small one for the website tab? Having them ready saves a call to the designer every time.</p>
            <p>We also measured the files. The chart below shows the same four logos in each format.</p>

            <Chart
                type="bar"
                title="Size of the same logo in each file format, Sea Seven Fish package, KB"
                unit=" KB"
                series={[
                    { name: 'SVG', data: [['Icon', 4.5], ['Tertiary logo', 10], ['Secondary logo', 26], ['Primary logo', 129]] },
                    { name: 'JPG', data: [['Icon', 88], ['Tertiary logo', 113], ['Secondary logo', 127], ['Primary logo', 297]] },
                    { name: 'PNG', data: [['Icon', 137], ['Tertiary logo', 184], ['Secondary logo', 212], ['Primary logo', 1165]] },
                ]}
                source="N&D Co., file sizes in the delivered Sea Seven Fish brand package, measured 3 November 2026"
                note="PNG and JPG files are 2000 x 2000 pixels. 1 KB = 1,000 bytes."
            />

            <p>Three things stand out. First, SVG is far smaller for a simple mark: the icon is 4.5 KB as SVG against 137 KB as PNG, about 30 times smaller. Second, vector is not always tiny. The primary logo is a detailed emblem with many curves, and its SVG is 129 KB, because every curve is written out as numbers. Third, a full-size PNG is too heavy for a web page: at 1,165 KB, the primary logo's PNG would make a phone download more than a megabyte for a logo shown a few hundred pixels wide. Large PNGs are for print and editing. A website should use the SVG or a small copy, which also helps the loading speed we explain in our <Link to="/blogs/core-web-vitals-explained">Core Web Vitals guide</Link>.</p>

            <h2 id="fake-vector-files">Why is my SVG or PDF logo blurry?</h2>
            <p>The file type tells you how a file is stored, not what is inside it. An SVG or PDF can wrap a raster picture, and then it behaves like one. We made this mistake ourselves. The illustration at the top of our homepage is an SVG, and the logo inside it was once a 1000 pixel PNG. The file was 54 KB. When we replaced that picture with a 128 pixel copy, close to the size it is drawn at, the file dropped to 18 KB.</p>
            <p>You can check a logo file in two quick ways. Open it in a browser and zoom in a long way: a true vector stays sharp, while a hidden picture turns soft or blocky. Or open an SVG in a text editor: if you see a long block of random-looking letters after <code>data:image/png</code>, a raster image sits inside it.</p>

            <h2 id="logo-dimensions">What size should a logo file be?</h2>
            <p>A vector logo has no fixed size; that is the point of it. Raster copies do, and each platform sets its own. These are the sizes worth knowing, from the platforms' own pages.</p>
            <div className="blog-table" role="region" aria-label="Logo sizes for common uses" tabIndex={0}>
                <table>
                    <caption>Logo dimensions for common uses</caption>
                    <thead>
                        <tr>
                            <th scope="col">Use</th>
                            <th scope="col">Size and format</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Favicon in Google Search</th>
                            <td>Square, at least 8 x 8 px; <a href="https://developers.google.com/search/docs/appearance/favicon-in-search" target="_blank" rel="noopener noreferrer">larger than 48 x 48 px recommended</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Installable website icon (Chrome)</th>
                            <td><a href="https://web.dev/articles/add-manifest" target="_blank" rel="noopener noreferrer">192 x 192 px and 512 x 512 px</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Google Business Profile logo</th>
                            <td>JPG or PNG, <a href="https://support.google.com/business/answer/6103862" target="_blank" rel="noopener noreferrer">720 x 720 px recommended</a>, 250 x 250 px minimum</td>
                        </tr>
                        <tr>
                            <th scope="row">Master PNG in a logo package</th>
                            <td>The Sea Seven Fish PNGs are 2000 x 2000 px, enough for documents, slides and social posts</td>
                        </tr>
                        <tr>
                            <th scope="row">Print, signs and banners</th>
                            <td>Vector (PDF, EPS or AI), so the printer sets the size</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>For the profile picture sizes on Facebook, Instagram, LinkedIn and YouTube, see the table in <Link to="/blogs/logo-vs-brand-identity#small-squares-and-circles">our logo versus brand identity post</Link>. All of them are squares, and some are cropped to a circle.</p>

            <h2 id="which-file-to-send">Which logo file should you send for each job?</h2>
            <div className="blog-table" role="region" aria-label="Which logo file to send for each job" tabIndex={0}>
                <table>
                    <caption>Which logo file to send for each job</caption>
                    <thead>
                        <tr>
                            <th scope="col">Job</th>
                            <th scope="col">Send</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Web developer</th>
                            <td>SVG, plus the PNGs and the favicon files</td>
                        </tr>
                        <tr>
                            <th scope="row">WordPress site you update yourself</th>
                            <td>PNG, since WordPress does not take SVG without extra setup</td>
                        </tr>
                        <tr>
                            <th scope="row">Printer: cards, letterheads, stickers</th>
                            <td>PDF, or the AI or EPS file if they ask</td>
                        </tr>
                        <tr>
                            <th scope="row">Sign, flex banner or vehicle wrap</th>
                            <td>PDF, AI or EPS, never a PNG or JPG</td>
                        </tr>
                        <tr>
                            <th scope="row">Social media and WhatsApp Business</th>
                            <td>The square icon as a PNG</td>
                        </tr>
                        <tr>
                            <th scope="row">Word, PowerPoint, invoices, email signature</th>
                            <td>PNG with a transparent background</td>
                        </tr>
                        <tr>
                            <th scope="row">A new designer or agency</th>
                            <td>Everything, including the AI or other editable source files and your <Link to="/blogs/brand-style-guide">brand style guide</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="questions-for-your-designer">What logo files should you ask your designer for?</h2>
            <p>Before you sign off a logo job, check the handover against this list.</p>
            <ul>
                <li>Vector masters of every version: SVG, PDF, and AI or EPS.</li>
                <li>PNGs with transparent backgrounds in full colour, black and white, at about 2000 pixels.</li>
                <li>A compact icon or monogram for small squares, with favicon files cut from it.</li>
                <li>The colour codes in HEX and RGB for screens and CMYK for print.</li>
                <li>Font names and licences, and vector files with the text converted to outlines so they open on any computer.</li>
                <li>A written statement that ownership of the final logo files passes to you, which our post on <Link to="/blogs/logo-vs-brand-identity#who-owns-the-logo">who owns a logo in India</Link> explains.</li>
            </ul>
            <p>Store the whole package in two places, such as your Google Drive and a pen drive, and share a link to the folder instead of the files one by one.</p>

            <h2 id="where-to-start">Where to start</h2>
            <p>If you already have a logo, open the files and check them against the list above. If all you have is a JPG from WhatsApp, a designer can redraw it as a vector before you need it on a sign. If you need a logo, our <Link to="/services/logo-design">logo design service</Link>: even its first tier hands over AI, EPS, SVG and PDF files plus PNG exports. For a full system with colour, type and usage rules, see <Link to="/services/brand-identity-design">brand identity design</Link>.</p>
        </>
    );
}
`;export{e as default};