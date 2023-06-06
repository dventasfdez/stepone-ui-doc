import Link from "next/link";
import Avatar from "stepone-ui/avatar";

export default function Section4() {
  return (
    <>
      <div className="section-3  color-">
        <div className="g-container flex">
          <div className="g-item_8  flex" style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#F8F8F9" }}>
            <div className="m20 p2 mobile-margin-standar" style={{ backgroundColor: "#FFF" }}>
              <img src="/section-image-3-min.png" alt="hero image" />
            </div>
          </div>
          <div className="g-item_8" style={{ justifyContent: "center" }}>
            <div className="p20 mobile-padding-standar">
              <h4 className="mb0">Cost Reduction and Faster Development Times</h4>
              <p className="subtitle">Cost Reduction and Faster Development Times</p>
              <p>A Design System improves efficiency and productivity while amplifying team performance through several key aspects:</p>
              <p>
                <strong>Key Concepts:</strong>
              </p>
              <ul>
                <li>
                  <em>Streamlined Workflows:</em> with predefined design elements and guidelines, teams can work more efficiently and collaboratively. Designers and developers can align their efforts
                  and make decisions faster, reducing delays and enhancing productivity.
                </li>
                <li>
                  <em>Faster Iterations:</em> with a Design System in place, teams can iterate quickly and make changes more efficiently. The consistent design language and reusable components enable
                  rapid prototyping and testing, leading to faster iterations and improvements.
                </li>
                <li>
                  <em>Reduced Learning Curve:</em> a Design System provides a standardized framework that team members can easily learn and adopt. This reduces the time required for onboarding new
                  team members and promotes a seamless transition between projects.
                </li>
                <li>
                  <em>Cross-functional Collaboration:</em> design Systems foster collaboration between designers, developers, and other stakeholders. With a shared language and reference point, teams
                  can work together more effectively, aligning their efforts and creating a cohesive end product.
                </li>
                <li>
                  <em>Improved Quality:</em> design Systems help enforce design and development best practices, ensuring a higher level of quality and consistency in the final output. This leads to
                  improved user experiences and customer satisfaction.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
}
