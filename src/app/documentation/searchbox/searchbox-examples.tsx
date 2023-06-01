import React, { ReactElement } from "react";
import Searchbox from "stepone-ui/searchbox";

export const searchbox_props = [
  { name: "id", use: false, type: "string", definition: "Indicates the ID for the search input field." },
  { name: "placeholder", use: false, type: "string", definition: "Indicates the placeholder text for the search input field." },
  { name: "name", use: false, type: "string", definition: "Indicades the name for the search input field." },
  {
    name: "onChange",
    use: true,
    type: "(e: React.ChangeEvent<HTMLInputElement>) => void",
    definition: "Function that is called when the value of the input element is changed. It receives an event of type React.ChangeEvent<HTMLInputElement>.",
  },
  { name: "onRemove", use: false, type: "() => void", definition: "Function that is called when the remove button is clicked. It doesn't receive any arguments." },
  { name: "value", use: false, type: "string", definition: "Represents the value of the input element." },
  { name: "small", use: false, type: "boolean", definition: "Specifies if the input element should have a small size." },
  { name: "disabled", use: false, type: "boolean", definition: "Indicates whether the input field is disabled or not." },
  { name: "others", use: false, type: "any", definition: "Accepts any other props that aren't defined by the ISearchboxProps interface." },
  { name: "className", use: false, type: "string", definition: "Adds a class to the searchbox." },
];

// DEFAULT SEARCHBOX EXAMPLE
export const DefaultSearchbox: React.FC<any> = (): ReactElement => {
  return <Searchbox onChange={function noRefCheck() {}} placeholder="Search text" />;
};

export const default_searchbox = `
import React, { ReactElement } from "react";
import Searchbox from "stepone-ui/searchbox";

const DefaultSearchbox: React.FC<any> = (): ReactElement => {
    return <Searchbox onChange={function noRefCheck() {}} placeholder="Search text" />;
};

export default DefaultSearchbox
`;

// SMALL SEARCHBOX EXAMPLE
export const SmallSearchbox: React.FC<any> = (): ReactElement => {
  return <Searchbox onChange={function noRefCheck() {}} placeholder="Search text" small />;
};

export const small_searchbox = `
import React, { ReactElement } from "react";
import Searchbox from "stepone-ui/searchbox";

const SmallSearchbox: React.FC<any> = (): ReactElement => {
    return <Searchbox onChange={function noRefCheck() {}} placeholder="Search text" small/>;
};

export default SmallSearchbox
`;

// FILLED SEARCHBOX EXAMPLE
export const FilledSearchbox: React.FC<any> = (): ReactElement => {
  return <Searchbox onChange={function noRefCheck() {}} placeholder="Search text" value="Search text value" />;
};

export const filled_searchbox = `
import React, { ReactElement } from "react";
import Searchbox from "stepone-ui/searchbox";

const FilledSearchbox: React.FC<any> = (): ReactElement => {
    return <Searchbox onChange={function noRefCheck() {}} placeholder="Search text" value="Search text value"/>;
};

export default FilledSearchbox
`;

// DISABLED SEARCHBOX EXAMPLE
export const DisabledSearchbox: React.FC<any> = (): ReactElement => {
  return <Searchbox onChange={function noRefCheck() {}} placeholder="Search text" value="Search text value" disabled />;
};

export const disabled_searchbox = `
  import React, { ReactElement } from "react";
  import Searchbox from "stepone-ui/searchbox";
  
  const DisabledSearchbox: React.FC<any> = (): ReactElement => {
      return <Searchbox onChange={function noRefCheck() {}} placeholder="Search text" value="Search text value" disabled/>;
  };
  
  export default DisabledSearchbox
  `;
