import React, { ReactElement, useRef, useState } from "react";
import OverflowMenu from "stepone-ui/overflowMenu";

export const overflow_menu_props = [
  { name: "show", use: true, type: "boolean", definition: "Indicates whether the overflow menu should be shown or hidden." },
  { name: "title", use: true, type: "string", definition: "Title of the Overflow Menu." },
  { name: "action", use: false, type: "string", definition: "Name of the action if needed." },
  { name: "onClose", use: true, type: "() => void", definition: "A function that is called when the overflow menu is closed.." },
  { name: "showCloseButton", use: false, type: "boolean", definition: "Indicates whether to show a close button in the overflow menu." },
  { name: "className", use: false, type: "string", definition: "Additional styling if needed." },
  { name: "onAction", use: false, type: "() => void", definition: "A function that is called when the action button is clicked." },
  { name: "parentRef", use: false, type: "any", definition: "A reference to the parent element that contains the overflow menu." },
  { name: "others", use: false, type: "any", definition: "Any additional props that can be passed to the component." },
];

// OVERFLOW MENU EXAMPLE
export const OverflowMenuComponent: React.FC<any> = (): ReactElement => {
  const [show, setShow] = useState(true);
  const btnRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={btnRef} style={{ position: "relative", display: "flex", width: "fit-content" }}>
      <button onClick={() => setShow(true)}>Show Overflow Menu</button>
      <OverflowMenu show={show} title="Overflow title" onAction={() => console.log("ACTION")} onClose={() => setShow(false)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quos, ullam eos aspernatur officiis assumenda, in debitis, ipsum esse magnam architecto nulla velit minima nisi provident
        eveniet veritatis. Commodi, quis!
      </OverflowMenu>
    </div>
  );
};

export const overflow_menu = `
import React, { ReactElement } from "react";
import OverflowMenu from "stepone-ui/overflowMenu";

const OverflowMenuComponent: React.FC<any> = (): ReactElement => {
  const [showNotification, setShowNotification] = useState("");
  return (
    <div ref={btnRef} style={{ position: "relative", display: "flex", width: "fit-content" }}>
      <button onClick={() => setShow(true)}>Show Overflow Menu</button>
      <OverflowMenu show={show} title="Overflow title" onAction={() => console.log("ACTION")} onClose={() => setShow(false)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quos, ullam eos aspernatur officiis assumenda, in debitis, ipsum esse magnam architecto nulla velit minima nisi provident
        eveniet veritatis. Commodi, quis!
      </OverflowMenu>
    </div>
  ) 
};

export default OverflowMenuComponent
`;

// OVERFLOW MENU WITH LINK EXAMPLE
export const LinkOverflowMenuComponent: React.FC<any> = (): ReactElement => {
  const [show, setShow] = useState(true);
  const btnRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={btnRef} style={{ position: "relative", display: "flex", width: "fit-content" }}>
      <button onClick={() => setShow(true)}>Show Overflow Menu</button>
      <OverflowMenu show={show} title="Overflow title" action="action/link" onAction={() => console.log("ACTION")} onClose={() => setShow(false)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quos, ullam eos aspernatur officiis assumenda, in debitis, ipsum esse magnam architecto nulla velit minima nisi provident
        eveniet veritatis. Commodi, quis!
      </OverflowMenu>
    </div>
  );
};

export const link_overflow_menu = `
  import React, { ReactElement } from "react";
  import OverflowMenu from "stepone-ui/overflowMenu";
  
  const LinkOverflowMenuComponent: React.FC<any> = (): ReactElement => {
    const [showNotification, setShowNotification] = useState("");
    return (
      <div ref={btnRef} style={{ position: "relative", display: "flex", width: "fit-content" }}>
        <button onClick={() => setShow(true)}>Show Overflow Menu</button>
        <OverflowMenu show={show} title="Overflow title" action="action/link" onAction={() => console.log("ACTION")} onClose={() => setShow(false)}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quos, ullam eos aspernatur officiis assumenda, in debitis, ipsum esse magnam architecto nulla velit minima nisi provident
          eveniet veritatis. Commodi, quis!
        </OverflowMenu>
      </div>
    ) 
  };
  
  export default LinkOverflowMenuComponent
  `;

// OVERFLOW MENU WITH CLOSE ICON EXAMPLE
export const CloseOverflowMenuComponent: React.FC<any> = (): ReactElement => {
  const [show, setShow] = useState(true);
  const btnRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={btnRef} style={{ position: "relative", display: "flex", width: "fit-content" }}>
      <button onClick={() => setShow(true)}>Show Overflow Menu</button>
      <OverflowMenu show={show} title="Overflow title" action="action/link" onAction={() => console.log("ACTION")} onClose={() => setShow(false)} showCloseButton>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quos, ullam eos aspernatur officiis assumenda, in debitis, ipsum esse magnam architecto nulla velit minima nisi provident
        eveniet veritatis. Commodi, quis!
      </OverflowMenu>
    </div>
  );
};

export const close_overflow_menu = `
  import React, { ReactElement } from "react";
  import OverflowMenu from "stepone-ui/overflowMenu";
  
  const CloseOverflowMenuComponent: React.FC<any> = (): ReactElement => {
    const [showNotification, setShowNotification] = useState("");
    return (
      <div ref={btnRef} style={{ position: "relative", display: "flex", width: "fit-content" }}>
        <button onClick={() => setShow(true)}>Show Overflow Menu</button>
        <OverflowMenu show={show} title="Overflow title" action="action/link" onAction={() => console.log("ACTION")} onClose={() => setShow(false)} showCloseButton>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quos, ullam eos aspernatur officiis assumenda, in debitis, ipsum esse magnam architecto nulla velit minima nisi provident
          eveniet veritatis. Commodi, quis!
        </OverflowMenu>
      </div>
    ) 
  };
  
  export default CloseOverflowMenuComponent
  `;
