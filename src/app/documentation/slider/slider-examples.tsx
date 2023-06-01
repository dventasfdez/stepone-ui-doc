import React, { ReactElement } from "react";
import Slider from "stepone-ui/slider";

export const slider_props = [
  { name: "max", use: false, type: "number", definition: "Maximum bound for the slider." },
  { name: "min", use: false, type: "number", definition: "Minimum bound for the slider." },
  {
    name: "defaultValue",
    use: false,
    type: "DefProps | number",
    definition: "Default value set before initialization, for a single slider it can be a number, and for a double slider it should be an object with the min and max values.",
  },
  { name: "label", use: false, type: "{ left: string | number; right: string | number }", definition: "Contains the left and right labels." },
  { name: "double", use: false, type: "boolean", definition: "Determines whether to render a double slider or not." },
  { name: "className", use: false, type: "string", definition: "Set different classes for SelectInput component" },
  { name: "disabled", use: false, type: "boolean", definition: "A boolean to disable the slider." },
  { name: "tooltip", use: false, type: "boolean", definition: "Indicates whether to show a tooltip or not." },
  { name: "onChange", use: false, type: "(...values: any) => void", definition: " A function that is called when the slider value changes. The function receives the new slider value(s)." },
  {
    name: "tooltipText",
    use: false,
    type: "TTProps | string | number",
    definition:
      " A string, a number or an object that defines the tooltip content. For a single slider it can be a string or a number, and for a double slider, it should be an object with the min and max values.",
  },
  { name: "others", use: false, type: "any", definition: "Receives any additional props that are not defined by the component." },
];

// SIMPLE SINGLE SLIDER EXAMPLE
export const SimpleSingleSlider: React.FC<any> = (): ReactElement => {
  return <Slider label={{ left: 0, right: 100 }} />;
};
export const simple_single_slider = `
import React, { ReactElement } from "react";
import Slider from "stepone-ui/slider";

const SimpleSingleSlider: React.FC<any> = (): ReactElement => {
    return <Slider label={{ left: 0, right: 100 }} />;
};

export default SimpleSingleSlider
`;

// SINGLE SLIDER WITH LABELS TOOLTIPS AND MAX EXAMPLE
export const ComplexSingleSlider: React.FC<any> = (): ReactElement => {
  return <Slider className="m2" label={{ left: 30, right: 40 }} tooltip tooltipText="Tooltip" min={30} max={40} onChange={(values: any) => console.log("Values slider simple", values)} />;
};
export const complex_single_slider = `
  import React, { ReactElement } from "react";
  import Slider from "stepone-ui/slider";
  
  const ComplexSingleSlider: React.FC<any> = (): ReactElement => {
      return <Slider className="m2" label={{ left: 30, right: 40 }} tooltip tooltipText="Tooltip" min={30} max={40} onChange={(values: any) => console.log("Values slider simple", values)} />
  };
  
  export default ComplexSingleSlider
  `;

// DISABLED SINGLE SLIDER EXAMPLE
export const DisabledSingleSlider: React.FC<any> = (): ReactElement => {
  return <Slider className="m2" label={{ left: 30, right: 40 }} tooltip tooltipText="Tooltip" min={30} max={40} onChange={(values: any) => console.log("Values slider simple", values)} disabled />;
};
export const disabled_single_slider = `
  import React, { ReactElement } from "react";
  import Slider from "stepone-ui/slider";
  
  const DisabledSingleSlider: React.FC<any> = (): ReactElement => {
      return <Slider className="m2" label={{ left: 30, right: 40 }} tooltip tooltipText="Tooltip" min={30} max={40} onChange={(values: any) => console.log("Values slider simple", values)} disabled/>
  };
  
  export default DisabledSingleSlider
  `;

// SIMPLE DOUBLE SLIDER EXAMPLE
export const SimpleDoubleSlider: React.FC<any> = (): ReactElement => {
  return <Slider className="m2" double />;
};
export const simple_double_slider = `
import React, { ReactElement } from "react";
import Slider from "stepone-ui/slider";

const SimpleDoubleSlider: React.FC<any> = (): ReactElement => {
    return <Slider className="m2" double />
};

export default SimpleDoubleSlider
`;

// COMPLEX DOUBLE SLIDER EXAMPLE
export const ComplexDoubleSlider: React.FC<any> = (): ReactElement => {
  return (
    <Slider
      className="m2"
      double
      label={{ left: 30, right: 40 }}
      tooltip
      tooltipText={{ min: "Tooltip left", max: "Tooltip right" }}
      min={30}
      max={40}
      onChange={(values: any) => console.log("Values slider double", values)}
    />
  );
};
export const complex_double_slider = `
  import React, { ReactElement } from "react";
  import Slider from "stepone-ui/slider";
  
  const SimpleDoubleSlider: React.FC<any> = (): ReactElement => {
    return (
        <Slider
          className="m2"
          double
          label={{ left: 30, right: 40 }}
          tooltip
          tooltipText={{ min: "Tooltip left", max: "Tooltip right" }}
          min={30}
          max={40}
          onChange={(values: any) => console.log("Values slider double", values)}
        />
      );
  };
  
  export default SimpleDoubleSlider
  `;

// DISABLED DOUBLE SLIDER EXAMPLE
export const DisabledDoubleSlider: React.FC<any> = (): ReactElement => {
  return (
    <Slider
      className="m2"
      double
      label={{ left: 30, right: 40 }}
      tooltip
      tooltipText={{ min: "Tooltip left", max: "Tooltip right" }}
      min={30}
      max={40}
      onChange={(values: any) => console.log("Values slider double", values)}
      disabled
    />
  );
};
export const disabled_double_slider = `
    import React, { ReactElement } from "react";
    import Slider from "stepone-ui/slider";
    
    const DisabledDoubleSlider: React.FC<any> = (): ReactElement => {
      return (
          <Slider
            className="m2"
            double
            label={{ left: 30, right: 40 }}
            tooltip
            tooltipText={{ min: "Tooltip left", max: "Tooltip right" }}
            min={30}
            max={40}
            onChange={(values: any) => console.log("Values slider double", values)}
            disabled
          />
        );
    };
    
    export default DisabledDoubleSlider
    `;
