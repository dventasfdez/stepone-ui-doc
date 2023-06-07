export default function Variables() {
  return (
    <>
      <div className="markdown prose w-full break-words dark:prose-invert light">
        <h2>CSS Variables</h2>
        <p>
          StepOne makes use of CSS variables to provide customization options and allow you to override default styles easily. CSS variables, also known as custom properties, enable you to define
          reusable values and apply them throughout your stylesheets. Let&apos;s explore how you can leverage CSS variables in StepOne to customize your website&apos;s appearance.
        </p>
        <h3>Default Variables</h3>
        <p>
          StepOne comes with a set of default CSS variables that control various aspects of the library&apos;s styles. These variables are defined at the root level and serve as the foundation for
          StepOne&apos;s styling. To override these variables, you need to redefine them with your desired values.
        </p>
        <p>Here are some of the commonly used default variables in StepOne:</p>
        {/* <ul>
          <li>
            <code>--primary-color</code> - Defines the primary color used for buttons, links, and other components.
          </li>
          <li>
            <code>--secondary-color</code> - Defines the secondary color used for additional elements and accents.
          </li>
          <li>
            <code>--font-family</code> - Specifies the font family used for text elements.
          </li>
          <li>
            <code>--base-font-size</code> - Determines the base font size used throughout the library.
          </li>
          <li>
            <code>--container-max-width</code> - Sets the maximum width of the container element.
          </li>
        </ul> */}
        <pre>
          {`$desktop-big: 1800px;
$desktop: 1280px;
$laptop: 1024px;
$tablet: 960px;
$mobile: 640px;
:root {
    --grid-unit: 10px;
    /*margins and paddings*/
    --global-padding: var(--grid-unit);
    --global-margin: var(--grid-unit);
    /*colors*/
    --primary-color: #304e89; 
    --accent-color: #2d79c1;
    --link-color: var(--accent-color);
    --light-grey: #f1f1f1;
    --grey: #eeeeee;
    --dark-grey: #747474;
    --warning-color: var(--yellow);
    --success-color: var(--green);
    --default-color: var(--dark-grey);
    --error-color: var(--red);
    --info-color: var(--blue);
    /*inputs and buttons*/
    --input-background: #fafafa;
    --input-height: calc(var(--global-line-height) + 30px);
    --textarea-height: calc(var(--input-height) * 2);
    --button-padding: calc(var(--global-padding)/2) calc(var(--global-padding)*2);
    /*border*/
    --global-border: 1px solid #ddd;
    --light-border: 1px solid var(--light-grey);
    --border-radius: 5px;
    /*fonts*/
    --font-color: var(--black);
    --global-font-size: 14px;
    --global-line-height: 22px;
    --small-font-size: 12px;
    --global-font-family: "Open Sans", Arial;
    /*transitions*/
    --transition: 0.3s;
}   
`}
        </pre>

        <h3>Overriding Variables</h3>
        <p>To override the default variables in StepOne, you can define new values for the variables either in a separate CSS file or inline within your HTML.</p>
        <h4>External CSS File</h4>
        <ol>
          <li>Create a new CSS file and include it after the StepOne CSS file in your HTML.</li>
        </ol>
        <pre>
          <div className="bg-black rounded-md mb-4">
            <div className="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md">
              <span>html</span>
            </div>
            <div className="p-4 overflow-y-auto">
              <code className="!whitespace-pre hljs language-html">
                <span className="hljs-tag">
                  &lt;<span className="hljs-name">link</span> <span className="hljs-attr">rel</span>=<span className="hljs-string">&quot;stylesheet&quot;</span> <span className="hljs-attr">href</span>
                  =<span className="hljs-string">&quot;stepone.css&quot;</span>&gt;
                </span>
                {"\n"}
                <span className="hljs-tag">
                  &lt;<span className="hljs-name">link</span> <span className="hljs-attr">rel</span>=<span className="hljs-string">&quot;stylesheet&quot;</span> <span className="hljs-attr">href</span>
                  =<span className="hljs-string">&quot;custom-styles.css&quot;</span>&gt;
                </span>
                {"\n"}
              </code>
            </div>
          </div>
        </pre>
        <ol start={2}>
          <li>
            In your <code>custom-styles.css</code> file, redefine the desired variables with your custom values.
          </li>
        </ol>
        <pre>
          <div className="bg-black rounded-md mb-4">
            <div className="p-4 overflow-y-auto">
              <code className="!whitespace-pre hljs language-css">
                <span className="hljs-selector-pseudo">:root</span> {"{"}
                {"\n"}
                {"  "}
                <span className="hljs-attr">--primary-color</span>: <span className="hljs-number">#ff0000</span>;{"\n"}
                {"  "}
                <span className="hljs-attr">--font-family</span>: <span className="hljs-string">&apos;Open Sans&apos;</span>, sans-serif;{"\n"}
                {"  "}
                <span className="hljs-comment">{"/* Add more custom variable overrides here */"}</span>
                {"\n"}
                {"}"}
                {"\n"}
              </code>
            </div>
          </div>
        </pre>
        <h4>Inline within HTML</h4>
        <ol>
          <li>
            Within the <code>&lt;head&gt;</code> section of your HTML file, add a <code>&lt;style&gt;</code> tag.
          </li>
        </ol>
        <pre>
          <div className="bg-black rounded-md mb-4">
            <div className="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md">
              <span>html</span>
            </div>
            <div className="p-4 overflow-y-auto">
              <code className="!whitespace-pre hljs language-html">
                <span className="hljs-tag">
                  &lt;<span className="hljs-name">link</span> <span className="hljs-attr">rel</span>=<span className="hljs-string">&quot;stylesheet&quot;</span> <span className="hljs-attr">href</span>
                  =<span className="hljs-string">&quot;stepone.css&quot;</span>&gt;
                </span>
                {"\n"}
                <span className="hljs-tag">
                  &lt;<span className="hljs-name">style</span>&gt;
                </span>
                <span className="css">
                  {"\n"}
                  {"  "}
                  <span className="hljs-selector-pseudo">:root</span> {"{"}
                  {"\n"}
                  {"    "}
                  <span className="hljs-attr">--primary-color</span>: <span className="hljs-number">#ff0000</span>;{"\n"}
                  {"    "}
                  <span className="hljs-attr">--font-family</span>: <span className="hljs-string">&apos;Open Sans&apos;</span>, sans-serif;{"\n"}
                  {"    "}
                  <span className="hljs-comment">{"/* Add more custom variable overrides here */"}</span>
                  {"\n"}
                  {"  "}
                  {"}"}
                  {"\n"}
                </span>
                <span className="hljs-tag">
                  &lt;/<span className="hljs-name">style</span>&gt;
                </span>
                {"\n"}
              </code>
            </div>
          </div>
        </pre>
        <h3>Using Custom Variables</h3>
        <p>Once you have overridden the default variables with your custom values, StepOne will automatically apply the new styles throughout your website.</p>
        <p>
          For example, if you redefine <code>--primary-color</code> to <code>#ff0000</code>, any component or element that uses the primary color will now reflect your custom value.
        </p>
        <pre>
          <div className="bg-black rounded-md mb-4">
            <div className="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md">
              <span>html</span>
            </div>
            <div className="p-4 overflow-y-auto">
              <code className="!whitespace-pre hljs language-html">
                <span className="hljs-tag">
                  &lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">&quot;btn&quot;</span>&gt;
                </span>
                Click Me
                <span className="hljs-tag">
                  &lt;/<span className="hljs-name">button</span>&gt;
                </span>
                {"\n"}
              </code>
            </div>
          </div>
        </pre>
        <pre>
          <div className="bg-black rounded-md mb-4">
            <div className="p-4 overflow-y-auto">
              <code className="!whitespace-pre hljs language-css">
                <span className="hljs-selector-pseudo">:root</span> {"{"}
                {"\n"}
                {"  "}
                <span className="hljs-attr">--primary-color</span>: <span className="hljs-number">#ff0000</span>;{"\n"}
                {"}"}
                {"\n"}
              </code>
            </div>
          </div>
        </pre>
        <p>
          In the example above, the button will now have the custom primary color of <code>#ff0000</code>.
        </p>
        <h3>Exploring Available Variables</h3>
        <p>
          To explore all the available default variables in StepOne and their purpose, refer to the StepOne documentation or inspect the CSS source files. This will give you a comprehensive list of
          variables that you can override to customize StepOne&apos;s styles to match your desired design.
        </p>
        <p>By leveraging CSS variables in StepOne, you can easily customize the library&apos;s appearance to suit your project&apos;s needs, ensuring a cohesive and personalized web experience.</p>
      </div>
    </>
  );
}
