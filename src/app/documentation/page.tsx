import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dark, vs } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Documentation() {
  return (
    <>
      <div className="g-container">
        <h1>How to start</h1>

        <div>
          <p>
            Welcome to StepOne, your go-to library for building beautiful and responsive web interfaces. In this guide, we&apos;ll walk you through the first steps to get started with StepOne. From
            installation to using its components, you&apos;ll be up and running in no time.
          </p>
          <p>
            <strong>Introduction to StepOne</strong>
          </p>
          <p>
            StepOne is a powerful and lightweight front-end library designed to simplify web development. It provides a collection of pre-styled components and utilities that make it easy to create
            modern and visually appealing websites. Whether you&apos;re a beginner or an experienced developer, StepOne offers a seamless experience, allowing you to focus on building your application
            rather than spending time on styling and layout.
          </p>
          <p>
            <strong>Installation</strong>
          </p>
          <p>To begin using StepOne, you need to install it via npm (Node Package Manager). Here&apos;s how you can do it:</p>
          <ol>
            <li>
              <p>Open your terminal or command prompt.</p>
            </li>
            <li>
              <p>Navigate to your project&apos;s directory.</p>
            </li>
            <li>
              <p>Run the following command to install StepOne:</p>

              <pre>
                <div className="bg-black rounded-md mb-4">
                  <div className="p2 overflow-y-auto">
                    <code className="!whitespace-pre hljs">npm install stepone{"\n"}</code>
                  </div>
                </div>
              </pre>

              <p>This command will download and install the StepOne library along with its dependencies.</p>
            </li>
            <li>
              <p>Once the installation is complete, you&apos;re ready to import and use StepOne in your project.</p>
            </li>
          </ol>
          <p>
            <strong>Importing and Using a Button</strong>
          </p>
          <p>StepOne provides a wide range of components to enhance your web application. Let&apos;s start by importing and using a basic button component. Here&apos;s how you can do it:</p>
          <ol>
            <li>
              <p>
                In your HTML file, add a <code>&lt;button&gt;</code> element where you want the button to appear:
              </p>
              <pre>
                <div className="bg-black rounded-md mb-4">
                  <div className="p2 overflow-y-auto">
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
            </li>
            <li>
              <p>
                Now, let&apos;s import the necessary StepOne CSS file. In your HTML file, add the following line within the <code>&lt;head&gt;</code> tag:
              </p>
              <pre>
                <div className="bg-black rounded-md mb-4">
                  <div className="p2 overflow-y-auto">
                    <code className="!whitespace-pre hljs language-html">
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">link</span> <span className="hljs-attr">rel</span>=<span className="hljs-string">&quot;stylesheet&quot;</span>{" "}
                        <span className="hljs-attr">href</span>=<span className="hljs-string">&quot;node_modules/stepone/dist/stepone.css&quot;</span>&gt;
                      </span>
                      {"\n"}
                    </code>
                  </div>
                </div>
              </pre>
              <p>This line will link the StepOne CSS file to your project.</p>
            </li>
            <li>
              <p>
                Next, import the StepOne JavaScript file. Add the following line at the bottom of your HTML file, just before the closing <code>&lt;/body&gt;</code> tag:
              </p>
              <pre>
                <div className="bg-black rounded-md mb-4">
                  <div className="p2 overflow-y-auto">
                    <code className="!whitespace-pre hljs language-html">
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">script</span> <span className="hljs-attr">src</span>=<span className="hljs-string">&quot;node_modules/stepone/dist/stepone.js&quot;</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">script</span>&gt;
                      </span>
                      {"\n"}
                    </code>
                  </div>
                </div>
              </pre>
              <p>This line will include the StepOne JavaScript file, enabling any necessary interactivity for the components.</p>
            </li>
            <li>
              <p>Save your HTML file, and you&apos;re all set! You can now view your web page and see the styled button provided by StepOne.</p>
            </li>
          </ol>
          <p>
            By following these steps, you&apos;ve successfully installed StepOne and added a styled button to your web page. You can explore more components and features in the StepOne documentation
            to further enhance your projects.
          </p>
          <p>Congratulations on taking your first step with StepOne! Happy coding!</p>
        </div>
      </div>
    </>
  );
}
