import React, { ReactElement } from "react";
import Paginator from "stepone-ui/paginator";

export const paginator_props = [
  { name: "pages", use: true, type: "number", definition: "The total number of pages." },
  { name: "defaultPage", use: false, type: "number", definition: "The first page to be shown." },
  { name: "collapsed", use: false, type: "boolean", definition: "Indicates whether the paginator should be displayed in a collapsed variant." },
  { name: "className", use: false, type: "string", definition: "Adds a class to the paginator." },
  { name: "truncate", use: false, type: "'left' | 'right' | 'all'", definition: "Truncates the paginator on either the left or right side, or both." },
  { name: "collapsedOptions", use: false, type: "{ jump?: 'right' | 'left' | 'all' }", definition: "Options for inserting the jump element on different positions in the collapsed variant." },
  { name: "disabled", use: false, type: "boolean", definition: "Indicates whether the paginator should be disabled." },
  { name: "onChangePage", use: false, type: "(page: number) => void", definition: "Handler function that gets called when the user changes the page." },
];

// PAGINATOR
export const PaginatorComponent: React.FC<any> = (): ReactElement => {
  return (
    <Paginator
      collapsedOptions={{
        jump: "all",
      }}
      defaultPage={5}
      pages={20}
    />
  );
};

export const paginator = `
import React, { ReactElement } from "react";
import Paginator from "stepone-ui/paginator";

const PaginatorComponent: React.FC<any> = (): ReactElement => {
  return (
    <Paginator
      collapsedOptions={{
        jump: "all",
      }}
      defaultPage={5}
      pages={20}
    />
  ) 
};

export default PaginatorComponent
`;

// PAGINATOR COLLAPSED
export const PaginatorCollapsed: React.FC<any> = (): ReactElement => {
  return (
    <Paginator
      collapsed
      collapsedOptions={{
        jump: "left",
      }}
      defaultPage={5}
      pages={6}
    />
  );
};

export const paginator_collapsed = `
import React, { ReactElement } from "react";
import Paginator from "stepone-ui/paginator";

const PaginatorCollapsed: React.FC<any> = (): ReactElement => {
  return (
    <Paginator
      collapsed
      collapsedOptions={{
        jump: "left",
      }}
      defaultPage={5}
      pages={6}
    />
  ) 
};

export default PaginatorCollapsed
`;

// PAGINATOR TRUNCTAED LEFT
export const PaginatorTruncatedLeft: React.FC<any> = (): ReactElement => {
  return (
    <Paginator
      collapsedOptions={{
        jump: "all",
      }}
      defaultPage={6}
      pages={20}
      truncate="left"
    />
  );
};

export const paginator_truncated_left = `
import React, { ReactElement } from "react";
import Paginator from "stepone-ui/paginator";

const PaginatorTruncatedLeft: React.FC<any> = (): ReactElement => {
  return (
    <Paginator
      collapsedOptions={{
        jump: "all",
      }}
      defaultPage={6}
      pages={20}
      truncate="left"
    />
  ) 
};

export default PaginatorTruncatedLeft
`;

// PAGINATOR TRUNCATED RIGHT
export const PaginatorTruncatedRight: React.FC<any> = (): ReactElement => {
  return (
    <Paginator
      collapsedOptions={{
        jump: "all",
      }}
      defaultPage={3}
      pages={20}
      truncate="right"
    />
  );
};

export const paginator_truncated_right = `
import React, { ReactElement } from "react";
import Paginator from "stepone-ui/paginator";

const PaginatorTruncatedRight: React.FC<any> = (): ReactElement => {
  return (
    <Paginator
      collapsedOptions={{
        jump: "all",
      }}
      defaultPage={3}
      pages={20}
      truncate="right"
    />
  ) 
};

export default PaginatorTruncatedRight
`;

// PAGINATOR TRUNCATED ALL
export const PaginatorTruncatedAll: React.FC<any> = (): ReactElement => {
  return (
    <Paginator
      collapsedOptions={{
        jump: "all",
      }}
      defaultPage={3}
      pages={20}
      truncate="all"
    />
  );
};

export const paginator_truncated_all = `
import React, { ReactElement } from "react";
import Paginator from "stepone-ui/paginator";

const PaginatorTruncatedAll: React.FC<any> = (): ReactElement => {
  return (
    <Paginator
      collapsedOptions={{
        jump: "all",
      }}
      defaultPage={3}
      pages={20}
      truncate="all"
    />
  ) 
};

export default PaginatorTruncatedAll
`;
