import Link from "next/link";
import Avatar from "stepone-ui/avatar";

export default function Section5() {
  return (
    <>
      <div className="section-5 color-">
        <div className="g-container flex">
          <div className="g-item_8  flex" style={{ justifyContent: "center", alignItems: "center" }}>
            <div className="m20 p2 mobile-margin-standar" style={{ backgroundColor: "#FFF" }}>
              <img src="/section-image-4-min.png" alt="hero image" />
            </div>
          </div>

          <div className="g-item_8 flex" style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#F8F8F9" }}>
            <div className="figures-container pl20 pr20 mobile-padding-standar">
              <div className="g-item_8">
                <div className="card_figure m2  undefined">
                  <div className="card-figure ">+180</div>
                  <div id="figure card header" className="card-header ">
                    <h4>Useful components</h4>
                  </div>
                </div>
              </div>
              <div className="g-item_8">
                <div className="card_figure m2  undefined">
                  <div className="card-figure ">98%</div>
                  <div id="figure card header" className="card-header ">
                    <h4>Test Coverage</h4>
                  </div>
                </div>
              </div>
              <div className="g-item_8">
                <div className="card_figure m2  undefined">
                  <div className="card-figure ">+21</div>
                  <div id="figure card header" className="card-header ">
                    <h4>Devs use it everyday</h4>
                  </div>
                </div>
              </div>
              <div className="g-item_8">
                <div className="card_figure m2  undefined">
                  <div className="card-figure ">+36k</div>
                  <div id="figure card header" className="card-header ">
                    <h4>Hours of work</h4>
                  </div>
                </div>
              </div>

              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
}
