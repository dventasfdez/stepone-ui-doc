import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero-container ">
        <div className="hero-content">
          <div className="hero-header ">
            <h1>Welcome to StepOne</h1>
            <div className="base">The UST front-end framework</div>
          </div>
          <div className="hero-body ">
            <div className="mb3 base">Learn how to use and get advantage of the newest library into your project</div>
            <div className="quote-wrapper ">
              <blockquote className="quote ">The biggest front-end time saver ever.</blockquote>
              <div className="avatar-wrapper ">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="quote-avatar" className="avatar " />
                <div className="avatar-text-wrapper">
                  <span className="avatar-title">David Ventas</span>
                  <span className="avatar-subtitle">Developer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-footer ">
            {/* <div className="caption mb3">This is a caption</div> */}
            <div className="hero-footer-items">
              <Link href="documentation" className="button chip">
                How to start
              </Link>
              <Link href="documentation" className="button chip">
                Documentation
              </Link>
              <Link href="documentation" className="button chip">
                Download
              </Link>
            </div>
          </div>
        </div>
        <img src="/home-bg-image.png" alt="hero image" className="hero-background  " />
      </div>
      {/* <div style={{ padding: "60px 144px" }} className="flex">
        <div className="g-item_4 ">
          <div className="card_figure  m2">
            <div id="figure card" className="card-figure ">
              +36.000
            </div>
            <div id="figure card header" className="card-header ">
              <h4>Hours of work</h4>
            </div>
            <div id="figure card body" className="card-body ">
              Lorem ipsum dolor
            </div>
          </div>
        </div>

        <div className="g-item_4 ">
          <div className="card_figure  m2">
            <div id="figure card" className="card-figure ">
              +20
            </div>
            <div id="figure card header" className="card-header ">
              <h4>Developers use it every day</h4>
            </div>
            <div id="figure card body" className="card-body ">
              Lorem ipsum dolor
            </div>
          </div>
        </div>
        <div className="g-item_4 ">
          <div className="card_figure  m2">
            <div id="figure card" className="card-figure ">
              +15
            </div>
            <div id="figure card header" className="card-header ">
              <h4>Projects to evolve</h4>
            </div>
            <div id="figure card body" className="card-body ">
              Lorem ipsum dolor
            </div>
          </div>
        </div>
        <div className="g-item_4 ">
          <div className="card_figure  m2">
            <div id="figure card" className="card-figure ">
              +80
            </div>
            <div id="figure card header" className="card-header ">
              <h4>Components</h4>
            </div>
            <div id="figure card body" className="card-body ">
              Including examples and boilerplates
            </div>
          </div>
        </div>
      </div> */}

      <div className="clearfix"></div>
    </>
  );
}
