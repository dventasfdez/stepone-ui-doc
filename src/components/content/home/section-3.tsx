import Quote from "stepone-ui/quote";

export default function Section3() {
  return (
    <>
      <div className="section-3  ">
        <div className="g-container flex">
          <div className="g-item_8" style={{ justifyContent: "center" }}>
            <div className="p20 mobile-padding-standar">
              <h4 className="mb0">Definition and Key Concepts</h4>
              <p className="subtitle">Building a Common Understanding</p>
              <p>
                <strong>Definition</strong>
              </p>
              <p>
                Definition A Design System is a centralized collection of design guidelines, patterns, and assets that serves as a single source of truth for the visual and interactive elements of a
                product or brand.
              </p>
              <p>
                <strong>Key Concepts:</strong>
              </p>
              <ul>
                <li>
                  <em>Consistency</em>: ensuring visual and experiential coherence across all touchpoints, promoting a seamless user experience and reinforcing brand identity.
                </li>
                <li>
                  <em>Reusability</em>: design components, patterns, and styles that can be reused across different projects, saving time and effort in design and development. Scalability: the ability
                  of the Design System to accommodate growth, expansion, and the addition of new features or products without sacrificing consistency or efficiency.
                </li>
                <li>
                  <em>Flexibility</em>: the adaptability of the Design System to accommodate different platforms, devices, and user contexts while maintaining a consistent experience.
                </li>
                <li>
                  <em>Governance</em>: establishing clear guidelines, standards, and processes for maintaining and evolving the Design System over time, ensuring its effectiveness and relevance.
                </li>
              </ul>
            </div>
          </div>
          <div className="g-item_8 accent-color flex" style={{ justifyContent: "center", alignItems: "center" }}>
            <div className="m20 mobile-margin-standar p2" style={{ backgroundColor: "#FFF" }}>
              <div className="quote-wrapper m0" style={{ width: "100%" }}>
                <blockquote className="quote " style={{ width: "100%" }}>
                  A design system is a set of standards to manage design at scale by reducing redundancy while creating a shared language and visual consistency across different pages and channels.”
                </blockquote>
                <div className="avatar-wrapper ">
                  <div className="avatar-text-wrapper">
                    <span className="avatar-title">2021</span>
                    <span className="avatar-subtitle">Fessenden</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>
    </>
  );
}
