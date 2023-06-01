import React, { ReactElement } from "react";
import Dropdown, { DropdownButton, DropdownMenu } from "stepone-ui/dropdown";

export const dropdown_props = [
  { name: "itemsDivider", use: false, type: "boolean", definition: "Determies whether a divider should be displayed between the dropdown items or not." },
  { name: "forceRefresh", use: false, type: "number", definition: "Forces the dropdown menu to refresh when its value is updated" },
  { name: "placement", use: false, type: "DropdownPosition", definition: "Specifies the position of the dropdown menu in relation to the dropdown button" },
];

const data_mock = [
  { id: 1, label: "Option 1", link: "#option1" },
  { id: 2, label: "Option 2", link: "#option2" },
  { id: 3, label: "Option 3", link: "#option3" },
  { id: 4, label: "Option 4", link: "#option4" },
];

// SIMPLE TEXT LIST DROPDOWN MENU EXAMPLE
export const TextListDropdown: React.FC<any> = (): ReactElement => {
  return (
    <Dropdown className="mb4">
      <DropdownButton className="chip">Menu dropdown</DropdownButton>
      <DropdownMenu>
        <ul className="m0">
          {data_mock.map((item) => (
            <li key={item.id} className="dropdown-item">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </DropdownMenu>
    </Dropdown>
  );
};

export const text_list_dropdown = `
import React, { ReactElement } from "react";
import { Dropdown, DropdownButton, DropdownMenu } from "stepone-ui";
import { data_mock } from "./data-mock-file"

const TextListDropdown: React.FC<any> = (): ReactElement => {
  return (
      <Dropdown className="mb4">
        <DropdownButton className="chip">Menu dropdown</DropdownButton>
        <DropdownMenu>
          <ul className="m0">
            {data_mock.map((item) => (
              <li key={item.id} className="dropdown-item">
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
        </DropdownMenu>
      </Dropdown>
  ) 
};

export default TextListDropdown
`;

export const data_mock_file = `
export const data_mock = [
    { id: 1, label: "Option 1", link: "#option1" },
    { id: 2, label: "Option 2", link: "#option2" },
    { id: 3, label: "Option 3", link: "#option3" },
    { id: 4, label: "Option 4", link: "#option4" },
  ];
`;

// SIMPLE TEXT LIST DROPDOWN MENU EXAMPLE
export const DropdownMenuDivider: React.FC<any> = (): ReactElement => {
  return (
    <Dropdown className="mb4">
      <DropdownButton className="chip">Menu dropdown</DropdownButton>
      <DropdownMenu>
        {data_mock.map((item) => (
          <React.Fragment key={item.id}>
            <li className="dropdown-item ">{item.label}</li>
            <hr />
          </React.Fragment>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export const dropdown_divider = `
import React, { ReactElement } from "react";
import { Dropdown, DropdownButton, DropdownMenu } from "stepone-ui";
import { data_mock } from "./data-mock-file"

const DropdownMenuDivider: React.FC<any> = (): ReactElement => {
return (
    <Dropdown className="mb4">
        <DropdownButton className="chip">Menu dropdown</DropdownButton>
        <DropdownMenu>
        {data_mock.map((item) => (
            <React.Fragment key={item.id}>
            <li className="dropdown-item ">{item.label}</li>
            <hr />
            </React.Fragment>
        ))}
        </DropdownMenu>
    </Dropdown>
) 
};

export default DropdownMenuDivider
`;

// DROPDOWN MENU WITH ICONS EXAMPLE
export const DropdownMenuIcons: React.FC<any> = (): ReactElement => {
  return (
    <Dropdown className="mb4">
      <DropdownButton className="chip">Menu dropdown</DropdownButton>
      <DropdownMenu>
        {data_mock.map((item) => (
          <React.Fragment key={item.id}>
            <div className="dropdown-item-icon">
              <span className="material-icons">account_circle</span>
              {item.label}
            </div>
          </React.Fragment>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export const dropdown_icons = `
import React, { ReactElement } from "react";
import { Dropdown, DropdownButton, DropdownMenu } from "stepone-ui";
import { data_mock } from "./data-mock-file"

const DropdownMenuIcons: React.FC<any> = (): ReactElement => {
    return (
        <Dropdown className="mb4">
            <DropdownButton className="chip">Menu dropdown</DropdownButton>
            <DropdownMenu>
                {data_mock.map((item) => (
                <React.Fragment key={item.id}>
                    <div className="dropdown-item-icon">
                    <span className="material-icons">account_circle</span>
                    {item.label}
                    </div>
                </React.Fragment>
                ))}
            </DropdownMenu>
        </Dropdown>
    ) 
};

export default DropdownMenuIcons
`;

// DROPDOWN MENU WITH CHECKBOX EXAMPLE
export const DropdownMenuCheckbox: React.FC<any> = (): ReactElement => {
  return (
    <Dropdown className="mb4">
      <DropdownButton className="chip">Menu dropdown</DropdownButton>
      <DropdownMenu>
        {data_mock.map((item) => (
          <React.Fragment key={item.id}>
            <div className="checkbox-container dropdown-item">
              <input id={`checkbox${item.id}`} type="checkbox" />
              <label htmlFor={`checkbox${item.id}`}>{item.label}</label>
            </div>
          </React.Fragment>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export const dropdown_checkbox = `
import React, { ReactElement } from "react";
import { Dropdown, DropdownButton, DropdownMenu } from "stepone-ui";
import { data_mock } from "./data-mock-file";

const DropdownMenuCheckbox: React.FC<any> = (): ReactElement => {
  return (
    <Dropdown className="mb4">
      <DropdownButton className="chip">Menu dropdown</DropdownButton>
      <DropdownMenu>
        {data_mock.map((item) => (
          <React.Fragment key={item.id}>
            <div className="checkbox-container dropdown-item">
              <input id={item.id} type="checkbox" />
              <label htmlFor={item.id}>{item.label}</label>
            </div>
          </React.Fragment>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownMenuCheckbox;
  `;

// DROPDOWN MENU WITH RADIO BUTTONS LIST EXAMPLE
export const DropdownMenuRadio: React.FC<any> = (): ReactElement => {
  return (
    <Dropdown className="mb4">
      <DropdownButton className="chip">Menu dropdown</DropdownButton>
      <DropdownMenu>
        {data_mock.map((item) => (
          <React.Fragment key={item.id}>
            <div className="radio-container dropdown-item">
              <input id={`radio${item.id}`} type="radio" />
              <label htmlFor={`radio${item.id}`}>{item.label}</label>
            </div>
          </React.Fragment>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export const dropdown_radio = `
  import React, { ReactElement } from "react";
  import { Dropdown, DropdownButton, DropdownMenu } from "stepone-ui";
  import { data_mock } from "./data-mock-file";
  
  const DropdownMenuRadio: React.FC<any> = (): ReactElement => {
    return (
        <Dropdown className="mb4">
        <DropdownButton className="chip">Menu dropdown</DropdownButton>
        <DropdownMenu>
          {data_mock.map((item) => (
            <React.Fragment key={item.id}>
              <div className="radio-container dropdown-item">
                <input id={item.id} type="radio" />
                <label htmlFor={item.id}>{item.label}</label>
              </div>
            </React.Fragment>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  };
  
  export default DropdownMenuRadio;
    `;
