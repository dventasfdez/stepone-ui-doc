import ComponentExample from "@/components/content/documentantion/ComponentExample";
import TypographyHeadersExample, { typography_headers_example } from "./typography-headers-examples";

export default function Typography() {
  return (
    <>
      <div className="sbdocs sbdocs-content css-1gh4yjl">
        <div id="anchor--foundation-typography--figure" />

        <div className="markdown prose w-full break-words dark:prose-invert light">
          <h2>Typography</h2>
          <p>
            StepOne provides a comprehensive set of typography styles that you can use to enhance the readability and visual appeal of your website&apos;s content. Whether you need headers,
            paragraphs, or other text elements, StepOne has got you covered. Let&apos;s explore the various typography styles and how to use them effectively.
          </p>
          <h3>Headers and paragraphs</h3>
          <p>
            StepOne offers six header styles, ranging from <code>h1</code> to <code>h6</code>. Each header style has its own visual hierarchy and significance. Here&apos;s an overview of each header
            style and how to use them:
          </p>
          <ul>
            <li>
              <code>&lt;h1&gt;</code> - The largest and most important header. Use it sparingly for page titles or main headings.
            </li>
            <li>
              <code>&lt;h2&gt;</code> - A secondary heading that carries less weight than <code>&lt;h1&gt;</code>. Use it for section titles or major headings.
            </li>
            <li>
              <code>&lt;h3&gt;</code> - A subheading that provides further division within a section. Ideal for sub-section titles.
            </li>
            <li>
              <code>&lt;h4&gt;</code> - A smaller header style suitable for subheadings or minor section titles.
            </li>
            <li>
              <code>&lt;h5&gt;</code> - An even smaller header style. Use it for less prominent headings or to provide additional structure within a section.
            </li>
            <li>
              <code>&lt;h6&gt;</code> - The smallest header style. Use it for minor headings or to differentiate content within a section.
            </li>
            <li>
              <code>&lt;p&gt;</code> - Is for the normal text in the section.
            </li>
          </ul>

          <ComponentExample codeExample={[{ name: "simple-form.tsx", code: typography_headers_example }]} componentExample={<TypographyHeadersExample />} />

          <h3>Inline styles</h3>

          <p>StepOne also offers styles for various inline elements such as links, emphasis, code snippets, and more. Here&apos;s how to use them:</p>
          <ul>
            <li>
              <p>
                <code>&lt;a&gt;</code> - Use the <code>&lt;a&gt;</code> element for hyperlinks. Apply the <code>.link</code> class to style them as StepOne links.
              </p>

              <pre>
                <div>
                  <div>
                    <code>
                      <span>
                        &lt;<span>p</span>&gt;
                      </span>
                      Visit our{" "}
                      <span>
                        &lt;<span>a</span> <span>href</span>=<span>&quot;#&quot;</span>&gt;
                      </span>
                      website
                      <span>
                        &lt;/<span>a</span>&gt;
                      </span>{" "}
                      to learn more.
                      <span>
                        &lt;/<span>p</span>&gt;
                      </span>
                      {"\n"}
                    </code>
                  </div>
                </div>
              </pre>
            </li>
            <li>
              <p>
                <code>&lt;strong&gt;</code> or <code>&lt;b&gt;</code> - Use these elements to emphasize important text. The StepOne styles will make it stand out.
              </p>

              <pre>
                <div>
                  <div>
                    <code>
                      <span>
                        &lt;<span>p</span>&gt;
                      </span>
                      <span>
                        &lt;<span>strong</span>&gt;
                      </span>
                      Important:
                      <span>
                        &lt;/<span>strong</span>&gt;
                      </span>{" "}
                      Please read the instructions carefully before proceeding.
                      <span>
                        &lt;/<span>p</span>&gt;
                      </span>
                      {"\n"}
                    </code>
                  </div>
                </div>
              </pre>
            </li>
            <li>
              <p>
                <code>&lt;em&gt;</code> or <code>&lt;i&gt;</code> - Use these elements to italicize text. The StepOne styles will add emphasis.
              </p>

              <pre>
                <div>
                  <div>
                    <code>
                      <span>
                        &lt;<span>p</span>&gt;
                      </span>
                      <span>
                        &lt;<span>em</span>&gt;
                      </span>
                      Note:
                      <span>
                        &lt;/<span>em</span>&gt;
                      </span>{" "}
                      This feature is only available for premium users.
                      <span>
                        &lt;/<span>p</span>&gt;
                      </span>
                      {"\n"}
                    </code>
                  </div>
                </div>
              </pre>
            </li>
            <li>
              <p>
                <code>&lt;code&gt;</code> - Use the <code>&lt;code&gt;</code> element to display code snippets. The StepOne styles will format it accordingly.
              </p>

              <pre>
                <div>
                  <div>
                    <code>
                      <span>
                        &lt;<span>p</span>&gt;
                      </span>
                      To install the package, use the following command:{" "}
                      <span>
                        &lt;<span>code</span>&gt;
                      </span>
                      npm install stepone
                      <span>
                        &lt;/<span>code</span>&gt;
                      </span>
                      .
                      <span>
                        &lt;/<span>p</span>&gt;
                      </span>
                      {"\n"}
                    </code>
                  </div>
                </div>
              </pre>
            </li>
          </ul>
          <p>
            These are some of the core typography elements provided by StepOne. By utilizing these styles, you can create visually appealing and well-structured content on your website. Feel free to
            explore the StepOne documentation for more detailed information and additional typography options.
          </p>
        </div>
        <h1 className="sbdocs sbdocs-h1 css-1d8ls76">Typography</h1>

        <p className="figure">Figure Class</p>
        <p className="hero">Hero Class</p>
        <h1 className="">Heading 1</h1>
        <p className="h1">Heading 1</p>
        <h2 className="">Heading 2</h2>
        <p className="h2">Heading 2</p>
        <h3 className="">Heading 3</h3>
        <p className="h3">Heading 3</p>

        <h4 className="">Heading 4</h4>
        <p className="h4">Heading 4</p>
        <p className="subtitle">Subtitle Class</p>
        <p className="small-title">Small title Class</p>
        <p className="caption">Caption</p>
        <p className="tag">Tag Text</p>
        <p className="large">Body large</p>
        <p className="base">Body base</p>
        <p className="medium">Body medium</p>
        <p className="small">Body small</p>
      </div>
    </>
  );
}
