import Link from "next/link";
import Avatar from "stepone-ui/avatar";

export default function Section1() {
  return (
    <>
      <div className="section-1 hero-container ">
        <div className="hero-content">
          <div className="hero-header ">
            <div className="m2" style={{ maxWidth: "583px" }}>
              <h1 className="figure">
                <span style={{ color: "var(--full-palette-accent-500)" }}>StepOne</span>
                <br />
                <span className="text-accent">/Design System</span>
              </h1>
              <h2 className="h3">The essential foundation for creating stunning digital experiences</h2>
            </div>
          </div>
          <div className="hero-body ">
            <div className="flex" style={{ maxWidth: "583px" }}>
              <div className="card g-item_4 m2">
                <div className="card-header ">
                  <h4 className="m0">How to start</h4>
                </div>
                <div className="card-body " id="card body">
                  <span>We&apos;ll walk you through the first steps to get started with StepOne.</span>
                </div>
                <div className="card-footer " id="card footer">
                  <Link href="/documentation">Let&apos;s start</Link>
                </div>
              </div>

              <div className="card  g-item_4 m2">
                <div className="card-header ">
                  <h4 className="m0">Download Assets</h4>
                </div>
                <div className="card-body " id="card body">
                  <span>Get access to all the resources from step one.</span>
                </div>
                <div className="card-footer " id="card footer">
                  <Link href="/downloads-and-examples">Let&apos;s start</Link>
                </div>
              </div>
              <div className="clearfix mobile-display "></div>
            </div>
            <div className="team-component">
              <div className="ml2 mr2">
                <p className="mt10 large text-01">UST StepOne Design System team:</p>
              </div>

              <div className="g-item_4">
                <Avatar className="m2" big={true} title="David Ventas" subtitle="Developer">
                  <img src="/David-Ventas.jpg" alt="avatar" />
                </Avatar>
              </div>
              <div className="g-item_4">
                <Avatar className="m2" big={true} title="David Cuenca" subtitle="Developer">
                  <img src="/David-Cuenca.jpg" alt="avatar" />
                </Avatar>
              </div>
              <div className="g-item_4 ">
                <Avatar className="m2" big={true} title="Pablo Martin" subtitle="Developer">
                  <img src="/Pablo-Martín.jpg" alt="avatar" />
                </Avatar>
              </div>
              <div className="g-item_4">
                <Avatar className="m2" big={true} title="Miguel Mateos" subtitle="UX/UI Designer">
                  <img src="/Miguel-Mateos.jpg" alt="avatar" />
                </Avatar>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <img src="/hero-background-image-min.jpg" alt="hero image" className="hero-background  " />
      </div>

      <div className="clearfix"></div>
    </>
  );
}
