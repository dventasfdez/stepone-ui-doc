import React, { ReactElement } from "react";

export const carousel_props = [
  { name: "defaultId", use: false, type: "string", definition: "Add an custom defaultId instead to render the first element." },
  { name: "outlined", use: false, type: "boolean", definition: "Set to true in order to render arrows and dots outside the box." },
  { name: "className", use: false, type: "string", definition: "Additional or alternative styling." },
  { name: "children", use: false, type: "any", definition: "Allows to pass child elements to the Carousel component" },
];

const data_mock = [
  {
    id: "1",
    content: "Element 0",
  },
  {
    id: "2",
    content: "Element 1",
  },
  {
    id: "3",
    content: "Element 2",
  },
  {
    id: "4",
    content: "Element 3",
  },
];

const data_mock_2 = [
  {
    id: "1",
    content: "Element 0",
  },
  {
    id: "2",
    content: "Element 1",
  },
  {
    id: "3",
    content: "Element 2",
  },
  {
    id: "4",
    content: "Element 3",
  },
  {
    id: "5",
    content: "Element 4",
  },
  {
    id: "6",
    content: "Element 5",
  },
  {
    id: "7",
    content: "Element 6",
  },
  {
    id: "8",
    content: "Element 7",
  },
  {
    id: "9",
    content: "Element 8",
  },
];

// CHIPS EXAMPLE
export const Chips: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <div className="chip-item">
        <button className="chip">
          Icon tag
          <span className="material-icons right">close</span>
        </button>
      </div>
      <div className="chip-item ml2">
        <button className="chip">
          <span className="material-icons left">face</span>
          Icon tag
        </button>
      </div>
    </div>
  );
};

export const chips = `
import React, { ReactElement } from "react";

const Chips: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <div className="chip-item">
        <button className="chip">
          Icon tag
          <span className="material-icons right">close</span>
        </button>
      </div>
      <div className="chip-item ml2">
        <button className="chip">
          <span className="material-icons left">face</span>
          Icon tag
        </button>
      </div>
    </div>
  ) 
};

export default Chips
`;

// CHIPS WITH BADGE EXAMPLE
export const ColouredChips: React.FC<any> = (): ReactElement => {
  return (
    <div className="chip-item">
      <button className="chip">
        Chip Coloured <span className="badge_small ml1">8</span>
      </button>
    </div>
  );
};

export const coloured_chips = `
import React, { ReactElement } from "react";

const ColouredChips: React.FC<any> = (): ReactElement => {
return (
    <div className="chip-item">
        <button className="chip">
        Chip Coloured <span className="badge_small ml1">8</span>
        </button>
    </div>
) 
};

export default ColouredChips
`;

// DISABLED CHIPS EXAMPLE
export const DisabledChips: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <div className="chip-item">
        <button className="chip disabled">
          Chip disabled
          <span className="material-icons right">close</span>
        </button>
      </div>
      <div className="chip-item ml2">
        <div className="chip disabled">
          Chip disabled <span className="badge_small ml1">8</span>
        </div>
      </div>
    </div>
  );
};

export const disabled_chips = `
import React, { ReactElement } from "react";

const DisabledChips: React.FC<any> = (): ReactElement => {
    return (
    <div className="flex">
        <div className="chip-item">
        <button className="chip disabled">
            Chip disabled
            <span className="material-icons right">close</span>
        </button>
        </div>
        <div className="chip-item ml2">
        <div className="chip disabled">
            Chip disabled <span className="badge_small ml1">8</span>
        </div>
        </div>
    </div>
    ) 
};

export default DisabledChips
`;

// ACTIVE CHIPS EXAMPLE
export const ActiveChips: React.FC<any> = (): ReactElement => {
  return (
    <div className="flex">
      <div className="chip-item">
        <button className="chip active">
          Chip active
          <span className="material-icons right">close</span>
        </button>
      </div>
      <div className="chip-item ml2">
        <div className="chip active">
          Chip active <span className="badge_small ml1">8</span>
        </div>
      </div>
    </div>
  );
};

export const active_chips = `
import React, { ReactElement } from "react";

const ActiveChips: React.FC<any> = (): ReactElement => {
    <div className="flex">
        <div className="chip-item">
        <button className="chip active">
            Chip active
            <span className="material-icons right">close</span>
        </button>
        </div>
        <div className="chip-item ml2">
        <div className="chip active">
            Chip active <span className="badge_small ml1">8</span>
        </div>
        </div>
    </div>
        ) 
      };
      
      export default ActiveChips
      `;
