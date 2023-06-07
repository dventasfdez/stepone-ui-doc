import Link from "next/link";
import Avatar from "stepone-ui/avatar";

export default function Section2() {
  return (
    <>
      <div className="hero-container ">
        <img src="/section-image-1-min.jpg" alt="hero image" className="hero-background  " />
        <div className="hero-content" style={{ justifyContent: "center" }}>
          <div className="hero-header ">
            <div className="m2" style={{ maxWidth: "583px" }}>
              <h3 className="h4 mb1">Importance of a Design System</h3>
              <div className="base">Unlocking the Power of Design Systems</div>
            </div>
          </div>
          <div className="hero-body ">
            <div className="m2 mb0" style={{ maxWidth: "583px" }}>
              <p className="mb0">
                Design Systems are crucial in modern software development and user experience design. They offer benefits such as consistency in branding, improved efficiency, enhanced collaboration,
                scalability, and the empowerment of creativity and innovation. By embracing Design Systems, we can elevate our capabilities, deliver exceptional experiences, and drive organizational
                success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>
    </>
  );
}
