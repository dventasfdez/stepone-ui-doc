import FormGuideline from "@/components/content/documentantion/forms/Forms";
import NotificationsContainer from "@/components/shared/notifications/notifications-container";
import Link from "next/link";

export default function DownloadsAndExamples() {
  return (
    <>
      <div className="g-container flex">
        <div className="  ">
          <div className="drawer-wrapper overflow ">
            <div className="drawer-header ">
              <h5>Welcome to the StepOne components documentation</h5>
              <p className="small-title guidline-option">
                <Link href="/documentation">How to start</Link>
              </p>
            </div>
            <div className="drawer-body ">
              <div>
                <p className="caption">Downloads</p>
                <div className="mb3">
                  <p className="small-title guidline-option">
                    <Link href="/documentation/forms">Latest Version</Link>
                  </p>
                  <p className="small-title guidline-option">
                    <Link href="#">Previous Versions</Link>
                  </p>
                </div>
              </div>
              <div>
                <p className="caption">Examples</p>
                <div className="mb3">
                  <p className="small-title guidline-option">
                    <Link href="#">Basic Usage</Link>
                  </p>
                  <p className="small-title guidline-option">
                    <Link href="#">Components</Link>
                  </p>
                  <p className="small-title guidline-option">
                    <Link href="#">Layouts</Link>
                  </p>
                  <p className="small-title guidline-option">
                    <Link href="#">Forms</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="g-item_16 p4">
          <div className="markdown prose w-full break-words dark:prose-invert light">
            <h2>Downloads</h2>
            <h3>Latest Version</h3>
            <ul>
              <li>
                <a href="https://example.com/downloads/stepone-v1.0.0.zip" target="_new">
                  StepOne v1.0.0
                </a>
                <ul>
                  <li>
                    <a href="https://example.com/downloads/stepone-v1.0.0.min.css" target="_new">
                      Minified CSS
                    </a>
                  </li>
                  <li>
                    <a href="https://example.com/downloads/stepone-v1.0.0.min.js" target="_new">
                      Minified JS
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Previous Versions</h3>
            <ul>
              <li>
                <p>
                  <a href="https://example.com/downloads/stepone-v0.9.2.zip" target="_new">
                    StepOne v0.9.2
                  </a>
                </p>
                <ul>
                  <li>
                    <a href="https://example.com/downloads/stepone-v0.9.2.min.css" target="_new">
                      Minified CSS
                    </a>
                  </li>
                  <li>
                    <a href="https://example.com/downloads/stepone-v0.9.2.min.js" target="_new">
                      Minified JS
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <a href="https://example.com/downloads/stepone-v0.9.1.zip" target="_new">
                    StepOne v0.9.1
                  </a>
                </p>
                <ul>
                  <li>
                    <a href="https://example.com/downloads/stepone-v0.9.1.min.css" target="_new">
                      Minified CSS
                    </a>
                  </li>
                  <li>
                    <a href="https://example.com/downloads/stepone-v0.9.1.min.js" target="_new">
                      Minified JS
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <h2>Examples</h2>
            <h3>Basic Usage</h3>
            <ul>
              <li>
                <a href="https://example.com/examples/starter-template.zip" target="_new">
                  Starter Template
                </a>
                <ul>
                  <li>A simple HTML template with StepOne included, providing a starting point for your project.</li>
                </ul>
              </li>
            </ul>
            <h3>Components</h3>
            <ul>
              <li>
                <p>
                  <a href="https://example.com/examples/button.html" target="_new">
                    Button
                  </a>
                </p>
                <ul>
                  <li>An example demonstrating the usage of a button component in StepOne.</li>
                </ul>
              </li>
              <li>
                <p>
                  <a href="https://example.com/examples/navbar.html" target="_new">
                    Navbar
                  </a>
                </p>
                <ul>
                  <li>An example showcasing the creation of a responsive navigation bar using StepOne.</li>
                </ul>
              </li>
            </ul>
            <h3>Layouts</h3>
            <ul>
              <li>
                <p>
                  <a href="https://example.com/examples/two-column-layout.html" target="_new">
                    Two-Column Layout
                  </a>
                </p>
                <ul>
                  <li>An example illustrating a basic two-column layout structure using StepOne&apos;s grid system.</li>
                </ul>
              </li>
              <li>
                <p>
                  <a href="https://example.com/examples/card-grid.html" target="_new">
                    Card Grid
                  </a>
                </p>
                <ul>
                  <li>A sample implementation of a card grid layout using StepOne&apos;s grid system and card component.</li>
                </ul>
              </li>
            </ul>
            <h3>Forms</h3>
            <ul>
              <li>
                <p>
                  <a href="https://example.com/examples/registration-form.html" target="_new">
                    Registration Form
                  </a>
                </p>
                <ul>
                  <li>An example demonstrating the styling of a registration form using StepOne&apos;s form components.</li>
                </ul>
              </li>
              <li>
                <p>
                  <a href="https://example.com/examples/login-form.html" target="_new">
                    Login Form
                  </a>
                </p>
                <ul>
                  <li>A sample implementation of a login form with StepOne&apos;s form styling.</li>
                </ul>
              </li>
            </ul>
            <p>
              These downloads and examples are designed to help you quickly get started with StepOne and showcase its capabilities. Feel free to download the library, explore the examples, and customize them to fit your project&apos;s
              requirements. If you have any questions or need further assistance, refer to the StepOne documentation or reach out to our support team. Happy coding!
            </p>
          </div>
          <div className="clearfix"></div>
        </main>
      </div>
    </>
  );
}
