import React, { ReactElement } from "react";
import Toggle from "stepone-ui/toggle";

export const toggle_props = [
  { name: "checked", use: false, type: "boolean", definition: "Toggle value." },
  { name: "disabled", use: false, type: "boolean", definition: "Toggle is disabled." },
  { name: "helperTextOff", use: false, type: "string", definition: "Helper text when toggle is not checked." },
  { name: "helperTextOn", use: false, type: "string", definition: "Helper text when toggle is checked." },
  { name: "id", use: false, type: "string", definition: "Adds an id for the input in the toggle component." },
  { name: "label", use: false, type: "string", definition: "Label for the toggle." },
  { name: "name", use: false, type: "string", definition: "Adds a name for the input in the toggle component." },
  { name: "onChange", use: false, type: "(checked: boolean) => void", definition: "Function that gets called when the toggle value changes." },
  { name: "readOnly", use: false, type: "boolean", definition: "Toggle is read-only (same as disabled)." },
  { name: "small", use: false, type: "boolean", definition: "Small toggle size." },
  { name: "className", use: false, type: "string", definition: "Adds any class to the parent container." },
];

// TOGGLE BASE
export const ToggleBase: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <Toggle aria-label="meaningful label for accessibility purposes" id="default" />
      <Toggle aria-label="meaningful label for accessibility purposes" checked id="defaultChecked" className="ml2" />
    </div>
  );
};

export const toggle_base = `
import React, { ReactElement } from "react";
import Toggle from "stepone-ui/toggle";

const ToggleBase: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <Toggle aria-label="meaningful label for accessibility purposes" id="default" />
      <Toggle aria-label="meaningful label for accessibility purposes" checked id="defaultChecked" className="ml2" />
    </div>
  ) 
};

export default ToggleBase
`;

// TOGGLE MEDIUM
export const ToggleMedium: React.FC<any> = (): ReactElement => {
  return <Toggle aria-label="meaningful label for accessibility purposes" id="medium-toggle" />;
};

export const toggle_medium = `
import React, { ReactElement } from "react";
import Toggle from "stepone-ui/toggle";

const ToggleMedium: React.FC<any> = (): ReactElement => {
  return (
    return <Toggle aria-label="meaningful label for accessibility purposes" id="medium-toggle" />;
  ) 
};

export default ToggleMedium
`;

// TOGGLE SMALL
export const ToggleSmall: React.FC<any> = (): ReactElement => {
  return <Toggle aria-label="meaningful label for accessibility purposes" id="medium-toggle" small />;
};

export const toggle_small = `
import React, { ReactElement } from "react";
import Toggle from "stepone-ui/toggle";

const ToggleSmall: React.FC<any> = (): ReactElement => {
  return (
    return <Toggle aria-label="meaningful label for accessibility purposes" id="medium-toggle" small />;
  ) 
};

export default ToggleSmall
`;

// TOGGLE LABEL
export const ToggleLabel: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex align-items_center">
      <Toggle aria-label="meaningful label for accessibility purposes" id="toggle-with-label" label="I am label" />
      <Toggle aria-label="meaningful label for accessibility purposes" id="toggle-small-with-label" label="I am label" small className="ml2" />
    </div>
  );
};

export const toggle_label = `
import React, { ReactElement } from "react";
import Toggle from "stepone-ui/toggle";

const ToggleLabel: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex align-items_center">
      <Toggle aria-label="meaningful label for accessibility purposes" id="toggle-with-label" label="I am label" />
      <Toggle aria-label="meaningful label for accessibility purposes" id="toggle-small-with-label" label="I am label" className="ml2" />
    </div>
  ) 
};

export default ToggleLabel
`;

// TOGGLE HELPER
export const ToggleHelper: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex align-items_center">
      <Toggle aria-label="meaningful label for accessibility purposes" helperTextOff="Off" helperTextOn="On" id="toggle-with-helper" />
      <Toggle aria-label="meaningful label for accessibility purposes" helperTextOff="Off" helperTextOn="On" id="toggle-small-with-helper" small className="ml2" />
    </div>
  );
};

export const toggle_helper = `
import React, { ReactElement } from "react";
import Toggle from "stepone-ui/toggle";

const ToggleHelper: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex align-items_center">
      <Toggle aria-label="meaningful label for accessibility purposes" helperTextOff="Off" helperTextOn="On" id="toggle-with-helper" />
      <Toggle aria-label="meaningful label for accessibility purposes" helperTextOff="Off" helperTextOn="On" id="toggle-small-with-helper" small className="ml2" />
    </div>
  ) 
};

export default ToggleHelper
`;

// TOGGLE DISABLED
export const ToggleDisabled: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex align-items_center">
      <Toggle aria-label="meaningful label for accessibility purposes" disabled helperTextOff="Off" helperTextOn="On" id="toggle-with-label" label="I am label" />
      <Toggle aria-label="meaningful label for accessibility purposes" disabled helperTextOff="Off" helperTextOn="On" id="toggle-small-with-label" label="I am label" small className="ml2" />
      <Toggle aria-label="meaningful label for accessibility purposes" checked disabled helperTextOff="Off" helperTextOn="On" id="toggle-with-label" label="I am label" className="ml2" />
      <Toggle aria-label="meaningful label for accessibility purposes" checked disabled helperTextOff="Off" helperTextOn="On" id="toggle-small-with-label" label="I am label" small className="ml2" />
    </div>
  );
};

export const toggle_disabled = `
import React, { ReactElement } from "react";
import Toggle from "stepone-ui/toggle";

const ToggleDisabled: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex align-items_center">
      <Toggle aria-label="meaningful label for accessibility purposes" disabled helperTextOff="Off" helperTextOn="On" id="toggle-with-label" label="I am label" />
      <Toggle aria-label="meaningful label for accessibility purposes" disabled helperTextOff="Off" helperTextOn="On" id="toggle-small-with-label" label="I am label" small className="ml2" />
      <Toggle aria-label="meaningful label for accessibility purposes" checked disabled helperTextOff="Off" helperTextOn="On" id="toggle-with-label" label="I am label" className="ml2" />
      <Toggle aria-label="meaningful label for accessibility purposes" checked disabled helperTextOff="Off" helperTextOn="On" id="toggle-small-with-label" label="I am label" small className="ml2" />
    </div>
  ) 
};

export default ToggleDisabled
`;
