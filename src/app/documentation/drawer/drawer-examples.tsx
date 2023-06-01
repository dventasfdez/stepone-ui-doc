import React, { ReactElement } from "react";
import Drawer, { DrawerHeader, DrawerBody } from "stepone-ui/drawer";

export const drawer_props = [
  { name: "open", use: true, type: "boolean", definition: "Determines whether the drawer should be open or not." },
  { name: "parentRef", use: false, type: "any", definition: "Reference for parent element and renders the drawer in absolute position on parent with overlay." },
  { name: "className", use: false, type: "string", definition: "Adds a class to the drawer." },
  { name: "renderAsPortal", use: false, type: "boolean", definition: "Sets the drawer as a portal with overlay." },
  { name: "position", use: false, type: "'left' | 'right'", definition: "Specifies the position of the drawer relative to the parent element." },
  { name: "onClose", use: false, type: "() => void", definition: "Handler function for the close button." },
  { name: "onBack", use: false, type: "() => void", definition: "Handler function for the back button." },
];

// DRAWER WITH BACK BUTTON EXAMPLE
export const DrawerBackButton: React.FC<any> = (): ReactElement => {
  return (
    <Drawer onBack={function noRefCheck() {}} open>
      <DrawerHeader>
        <h3>Drawer title</h3>
      </DrawerHeader>
      <DrawerBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aperiam libero hic dolorum veritatis, necessitatibus, neque suscipit autem nostrum repellat corporis nihil, a saepe est. Autem
        beatae sunt debitis quasi!
      </DrawerBody>
    </Drawer>
  );
};

export const drawer_back_button = `
import React, { ReactElement } from "react";
import { Drawer, DrawerHeader, DrawerBody } from "stepone-ui";

const DrawerBackButton: React.FC<any> = (): ReactElement => {
  return (
    <Drawer onBack={function noRefCheck() {}} open>
      <DrawerHeader>
        <h3>Drawer title</h3>
      </DrawerHeader>
      <DrawerBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aperiam libero hic dolorum veritatis, necessitatibus, neque suscipit autem nostrum repellat corporis nihil, a saepe est. Autem
        beatae sunt debitis quasi!
      </DrawerBody>
    </Drawer>
  ) 
};

export default DrawerBackButton
`;

// DRAWER WITH CLOSE BUTTON EXAMPLE
export const DrawerCloseButton: React.FC<any> = (): ReactElement => {
  return (
    <Drawer onClose={function noRefCheck() {}} open>
      <DrawerHeader>
        <h3>Drawer title</h3>
      </DrawerHeader>
      <DrawerBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aperiam libero hic dolorum veritatis, necessitatibus, neque suscipit autem nostrum repellat corporis nihil, a saepe est. Autem
        beatae sunt debitis quasi!
      </DrawerBody>
    </Drawer>
  );
};

export const drawer_close_button = `
import React, { ReactElement } from "react";
import { Drawer, DrawerHeader, DrawerBody } from "stepone-ui";

const DrawerCloseButton: React.FC<any> = (): ReactElement => {
  return (
    <Drawer onClose={function noRefCheck() {}} open>
      <DrawerHeader>
        <h3>Drawer title</h3>
      </DrawerHeader>
      <DrawerBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aperiam libero hic dolorum veritatis, necessitatibus, neque suscipit autem nostrum repellat corporis nihil, a saepe est. Autem
        beatae sunt debitis quasi!
      </DrawerBody>
    </Drawer>
  ) 
};

export default DrawerCloseButton
`;
