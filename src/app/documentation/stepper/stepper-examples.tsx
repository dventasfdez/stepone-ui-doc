import React, { ReactElement } from "react";
import Stepper, { Step } from "stepone-ui/stepper";

export const steps_props = [
  { name: "children", use: true, type: "React.ReactElement<typeof Step> | React.ReactElement<typeof Step>[]", definition: "The child components that represent the steps." },
  { name: "className", use: false, type: "string", definition: "Additional class name(s) for the component." },
  { name: "numbered", use: false, type: "boolean", definition: "Indicates whether the steps should be numbered." },
  { name: "onClickStep", use: false, type: "(stepIndex: number) => void", definition: "Handler function that gets called when a step is clicked." },
  { name: "vertical", use: false, type: "boolean", definition: "Indicates whether the steps should be displayed vertically or horizontally." },
];

export const step_props = [
  { name: "name", use: true, type: "string", definition: "The name of the step that will be displayed on the component." },
  { name: "detail", use: false, type: "string", definition: "A helper text for the step, providing additional information or hints." },
  { name: "status", use: false, type: "TStatus", definition: "The status of the component that will be reflected on itself." },
];

// STEPPER BASE
export const StepperBase: React.FC<any> = (): ReactElement => {
  return (
    <Stepper>
      <Step detail="detail" name="name" status="active" />
      <Step detail="detail" name="name" status="default" />
      <Step detail="detail" name="name" status="error" />
      <Step detail="detail" name="name" status="success" />
    </Stepper>
  );
};

export const stepper_base = `
import React, { ReactElement } from "react";
import Stepper, { Step } from "stepone-ui/stepper";

const StepperBase: React.FC<any> = (): ReactElement => {
  return (
    <Stepper>
      <Step detail="detail" name="name" status="active" />
      <Step detail="detail" name="name" status="default" />
      <Step detail="detail" name="name" status="error" />
      <Step detail="detail" name="name" status="success" />
    </Stepper>
  ) 
};

export default StepperBase
`;

// STEPPER VERTICAL BASE
export const StepperVerticalBase: React.FC<any> = (): ReactElement => {
  return (
    <Stepper vertical>
      <Step detail="detail" name="name" status="active" />
      <Step detail="detail" name="name" status="default" />
      <Step detail="detail" name="name" status="error" />
      <Step detail="detail" name="name" status="success" />
    </Stepper>
  );
};

export const stepper_vertical_base = `
import React, { ReactElement } from "react";
import Stepper, { Step } from "stepone-ui/stepper";

const StepperVerticalBase: React.FC<any> = (): ReactElement => {
  return (
    <Stepper vertical>
      <Step detail="detail" name="name" status="active" />
      <Step detail="detail" name="name" status="default" />
      <Step detail="detail" name="name" status="error" />
      <Step detail="detail" name="name" status="success" />
    </Stepper>
  ) 
};

export default StepperVerticalBase
`;

// STEPPER HORIZONTAL NO HELPER
export const StepperHorizontalNoHelper: React.FC<any> = (): ReactElement => {
  return (
    <Stepper>
      <Step name="name" status="active" />
      <Step name="name" status="default" />
      <Step name="name" status="error" />
      <Step name="name" status="success" />
    </Stepper>
  );
};

export const stepper_horizontal_no_helper = `
import React, { ReactElement } from "react";
import Stepper, { Step } from "stepone-ui/stepper";

const StepperHorizontalNoHelper: React.FC<any> = (): ReactElement => {
  return (
    <Stepper>
      <Step name="name" status="active" />
      <Step name="name" status="default" />
      <Step name="name" status="error" />
      <Step name="name" status="success" />
    </Stepper>
  ) 
};

export default StepperHorizontalNoHelper
`;
