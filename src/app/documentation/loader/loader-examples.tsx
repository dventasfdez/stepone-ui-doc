import React, { ReactElement } from "react";
import Loader from "stepone-ui/loader";

export const loader_props = [
  { name: "className", use: false, type: "string", definition: "Apply different styles for Loader." },
  { name: "error", use: false, type: "boolean", definition: "Display the error state of the Loader." },
  { name: "success", use: false, type: "boolean", definition: "Display the success state of the Loader." },
  { name: "title", use: false, type: "string", definition: "Gives the Title text if needed." },
  { name: "subtitle", use: false, type: "string", definition: "Gives the subtitle text if needed." },
  { name: "spinner", use: false, type: "boolean", definition: "Add badge to content-switcher component." },
  { name: "automatic", use: false, type: "boolean", definition: "Indicates if the content-switcher component has icons." },
];

// SPINNER LOADER EXAMPLE
export const SpinnerLoader: React.FC<any> = (): ReactElement => {
  return <Loader spinner className="m2" />;
};

export const spinner_loader = `
import React, { ReactElement } from "react";
import Loader from "stepone-ui/loader";

const SpinnerLoader: React.FC<any> = (): ReactElement => {
  return (
    <Loader spinner className="m2" />
  ) 
};

export default SpinnerLoader
`;

// SIMPLE LOADER EXAMPLE
export const SimpleLoader: React.FC<any> = (): ReactElement => {
  return <Loader automatic />;
};

export const simple_loader = `
import React, { ReactElement } from "react";
import Loader from "stepone-ui/loader";

const SimpleLoader: React.FC<any> = (): ReactElement => {
  return (
    <Loader automatic />
  ) 
};

export default SimpleLoader
`;

// LOADER WITH TITLE EXAMPLE
export const TitleLoader: React.FC<any> = (): ReactElement => {
  return <Loader automatic title="Loader title" />;
};

export const title_loader = `
import React, { ReactElement } from "react";
import Loader from "stepone-ui/loader";

const SimpleLoader: React.FC<any> = (): ReactElement => {
  return (
    return <Loader automatic title="Loader title" />;
  ) 
};

export default SimpleLoader
`;

// LOADER WITH SUBTITLE EXAMPLE
export const SubtitleLoader: React.FC<any> = (): ReactElement => {
  return <Loader automatic title="Loader title" subtitle="Loader subtitle" />;
};

export const subtitle_loader = `
import React, { ReactElement } from "react";
import Loader from "stepone-ui/loader";

const SubtitleLoader: React.FC<any> = (): ReactElement => {
  return (
    return <Loader automatic title="Loader title" subtitle="Loader subtitle" />;
  ) 
};

export default SubtitleLoader
`;

// CIRCULAR LOADER WITH TITLE AND SUBTITLE
export const CircularLoader: React.FC<any> = (): ReactElement => {
  return <Loader automatic className="m2" percentage={{ show: false }} title="Loader title" subtitle="Loader subtitle" />;
};

export const circular_loader = `
import React, { ReactElement } from "react";
import Loader from "stepone-ui/loader";

const CircularLoader: React.FC<any> = (): ReactElement => {
  return (
    return <Loader automatic className="m2" percentage={{ show: false }} title="Loader title" subtitle="Loader subtitle" />;
  ) 
};

export default CircularLoader
`;

// ERROR LOADER
export const ErrorLoader: React.FC<any> = (): ReactElement => {
  return <Loader automatic error className="m2" title="Loader title" subtitle="Loader subtitle" />;
};

export const error_loader = `
import React, { ReactElement } from "react";
import Loader from "stepone-ui/loader";

const ErrorLoader: React.FC<any> = (): ReactElement => {
  return (
    return <Loader automatic error className="m2" title="Loader title" subtitle="Loader subtitle" />
  ) 
};

export default ErrorLoade
`;

// SUCCESS LOADER
export const SuccessLoader: React.FC<any> = (): ReactElement => {
  return <Loader automatic success className="m2" title="Loader title" subtitle="Loader subtitle" />;
};

export const success_loader = `
import React, { ReactElement } from "react";
import Loader from "stepone-ui/loader";

const SuccessLoader: React.FC<any> = (): ReactElement => {
  return (
    return <Loader automatic success className="m2" title="Loader title" subtitle="Loader subtitle" />;
  ) 
};

export default SuccessLoader
`;
