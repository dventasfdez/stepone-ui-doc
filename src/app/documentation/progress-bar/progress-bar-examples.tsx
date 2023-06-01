import React, { ReactElement } from "react";
import ProgressBar from "stepone-ui/progressBar";

export const progress_bar_props = [
  { name: "step", use: true, type: "number", definition: "The step that the user is currently on in the progress bar." },
  { name: "steps", use: true, type: "number", definition: "The total number of steps in the progress bar." },
  { name: "title", use: false, type: "string", definition: "The title of the progress bar." },
  { name: "helper", use: false, type: "string", definition: "A helper text for the progress bar, providing hints or additional information." },
  { name: "circular", use: false, type: "boolean", definition: "Switches the progress bar from a bar to a circle." },
  { name: "small", use: false, type: "boolean", definition: "Switches the progress bar to a smaller size." },
  { name: "showSteps", use: false, type: "boolean", definition: "Displays the steps of the progress bar." },
  { name: "showPercentage", use: false, type: "boolean", definition: "Displays the percentage of completion of the progress bar." },
  { name: "className", use: false, type: "string", definition: "Adds a class to the progress bar." },
];

// PROGRESS BAR REGULAR
export const ProgressBarRegular: React.FC<any> = (): ReactElement => {
  return <ProgressBar helper="Helper" showPercentage showSteps step={1} steps={3} title="Title" />;
};

export const progress_bar_regular = `
import React, { ReactElement } from "react";
import ProgressBar from "stepone-ui/progressBar";

const ProgressBarRegular: React.FC<any> = (): ReactElement => {
  return (
    <ProgressBar helper="Helper" showPercentage showSteps step={1} steps={3} title="Title" />
  ) 
};

export default ProgressBarRegular
`;

// PROGRESS BAR CIRCULAR
export const ProgressBarCircular: React.FC<any> = (): ReactElement => {
  return <ProgressBar circular helper="Helper" step={1} steps={3} title="Title" />;
};

export const progress_bar_circular = `
import React, { ReactElement } from "react";
import ProgressBar from "stepone-ui/progressBar";

const ProgressBarCircular: React.FC<any> = (): ReactElement => {
  return (
    <ProgressBar circular helper="Helper" step={1} steps={3} title="Title" />
  ) 
};

export default ProgressBarCircular
`;

// PROGRESS BAR WITHOUT TITLE
export const ProgressBarWithoutTitle: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <div>
        <ProgressBar helper="Helper" showPercentage showSteps step={1} steps={3} />
      </div>
      <div className="ml2">
        <ProgressBar circular helper="Helper" step={1} steps={3} />
      </div>
    </div>
  );
};

export const progress_bar_without_title = `
import React, { ReactElement } from "react";
import ProgressBar from "stepone-ui/progressBar";

const ProgressBarWithoutTitle: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <div>
        <ProgressBar helper="Helper" showPercentage showSteps step={1} steps={3} />
      </div>
      <div className="ml2">
        <ProgressBar circular helper="Helper" step={1} steps={3} />
      </div>
    </div>
  ) 
};

export default ProgressBarWithoutTitle
`;

// PROGRESS BAR WITHOUT HELPER
export const ProgressBarWithoutHelper: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <div>
        <ProgressBar circular step={1} steps={3} title="Title" />
      </div>
      <div className="ml2">
        <ProgressBar small step={1} steps={3} title="Title" />
      </div>
    </div>
  );
};

export const progress_bar_without_helper = `
import React, { ReactElement } from "react";
import ProgressBar from "stepone-ui/progressBar";

const ProgressBarWithoutHelper: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <div>
        <ProgressBar circular step={1} steps={3} title="Title" />
      </div>
      <div className="ml2">
        <ProgressBar small step={1} steps={3} title="Title" />
      </div>
    </div>
  ) 
};

export default ProgressBarWithoutHelper
`;

// PROGRESS BAR WITHOUT STEPS
export const ProgressBarWithoutSteps: React.FC<any> = (): ReactElement => {
  return <ProgressBar helper="Helper" step={1} steps={3} title="Title" />;
};

export const progress_bar_without_steps = `
import React, { ReactElement } from "react";
import ProgressBar from "stepone-ui/progressBar";

const ProgressBarWithoutSteps: React.FC<any> = (): ReactElement => {
  return (
    <ProgressBar helper="Helper" step={1} steps={3} title="Title" />
  ) 
};

export default ProgressBarWithoutSteps
`;
