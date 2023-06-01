import React, { ReactElement, createRef } from "react";
import Tooltip from "stepone-ui/tooltip";

export const tooltip_props = [
  { name: "parentRef", use: true, type: "React.RefObject<HTMLElement>", definition: "A reference to the parent element of the tooltip." },
  { name: "className", use: false, type: "string", definition: "Apply different styles for the tooltip." },
  { name: "id", use: false, type: "string", definition: "ID attribute for the tooltip." },
  { name: "placement", use: false, type: "TooltipPosition", definition: "Specifies the position of the tooltip relative to its parent." },
  { name: "renderAsPortal", use: false, type: "boolean", definition: "Renders the tooltip as a portal." },
];

// TOOLTIP
export const TooltipComponent: React.FC<any> = (): ReactElement => {
  const cardRef: any = createRef();
  return (
    <div style={{ position: "relative" }}>
      <button ref={cardRef}>I have a tooltip</button>
      <Tooltip className="tooltip bottom" parentRef={cardRef} style={{ left: "30px", position: "absolute", top: "48px" }}>
        I am tooltip
      </Tooltip>
    </div>
  );
};

export const tooltip = `
import React, { ReactElement, createRef } from "react";
import Tooltip from "stepone-ui/tooltip";

export const TooltipComponent: React.FC<any> = (): ReactElement => {
  const cardRef: any = createRef();
  return (
    <div style={{ position: "relative" }}>
      <button ref={cardRef}>I have a tooltip</button>
      <Tooltip className="tooltip bottom" parentRef={cardRef} style={{ left: "30px", position: "absolute", top: "48px" }}>
        I am tooltip
      </Tooltip>
    </div>
  );
};

export default TooltipComponent
`;
