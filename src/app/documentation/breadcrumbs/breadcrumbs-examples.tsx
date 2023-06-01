"use client";
import React, { ReactElement } from "react";
import Breadcrumb, { BreadcrumbItem } from "stepone-ui/breadcrumb";

export const breadcrumbs_props = [
  { name: "className", use: false, type: "string", definition: "Add diffrent classes to the Breadcrumbs component." },
  { name: "id", use: false, type: "string", definition: "Identifies the BreadcrumbItem." },
  { name: "title", use: false, type: "string", definition: "Add title to the BreadcrumbItem." },
  { name: "children", use: false, type: "string", definition: "Represents the content of the breadcrumb item" },
];

// SIMPLE BREADCRUMB EXAMPLE
export const BreadcrumbComponent: React.FC<any> = (): ReactElement => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="/ui-library" id="breadcrumb-1" title="Breadcrumb 1"></BreadcrumbItem>
      <BreadcrumbItem href="/ui-library" id="breadcrumb-2" title="Breadcrumb 2 more longer than 30 chars"></BreadcrumbItem>
      <BreadcrumbItem href="/ui-library" id="breadcrumb-3" title="Breadcrumb 3"></BreadcrumbItem>
    </Breadcrumb>
  );
};

export const breadcrumb = `
import React, { ReactElement } from "react";
import Breadcrumb, { BreadcrumbItem } from "@adeccoux/tag-ds/breadcrumb";

const BreadcrumbComponent: React.FC<any> = (): ReactElement => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="/ui-library" id="breadcrumb-1" title="Breadcrumb 1"></BreadcrumbItem>
      <BreadcrumbItem href="/ui-library" id="breadcrumb-2" title="Breadcrumb 2 more longer than 30 chars"></BreadcrumbItem>
      <BreadcrumbItem href="/ui-library" id="breadcrumb-3" title="Breadcrumb 3"></BreadcrumbItem>
    </Breadcrumb>
  ) 
};

export default BreadcrumbComponent
`;

// DROPDOWN BREADCRUMB EXAMPLE
export const DropdownBreadcrumbComponent: React.FC<any> = (): ReactElement => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="/ui-library" id="breadcrumb-1" title="Breadcrumb 1"></BreadcrumbItem>
      <BreadcrumbItem href="/ui-library" id="breadcrumb-2" title="Breadcrumb 2 more longer than 30 chars"></BreadcrumbItem>
      <BreadcrumbItem href="/ui-library" id="breadcrumb-3" title="Breadcrumb 3"></BreadcrumbItem>
      <BreadcrumbItem href="/ui-library" id="breadcrumb-4" title="Breadcrumb 4"></BreadcrumbItem>
      <BreadcrumbItem href="/ui-library" id="breadcrumb-5" title="Breadcrumb 5"></BreadcrumbItem>
    </Breadcrumb>
  );
};

export const dropdown_breadcrumb = `
import React, { ReactElement } from "react";
import Breadcrumb, { BreadcrumbItem } from "@adeccoux/tag-ds/breadcrumb";

const DropdownBreadcrumbComponent: React.FC<any> = (): ReactElement => {
return (
    <Breadcrumb>
        <BreadcrumbItem href="/ui-library" id="breadcrumb-1" title="Breadcrumb 1"></BreadcrumbItem>
        <BreadcrumbItem href="/ui-library" id="breadcrumb-2" title="Breadcrumb 2 more longer than 30 chars"></BreadcrumbItem>
        <BreadcrumbItem href="/ui-library" id="breadcrumb-3" title="Breadcrumb 3"></BreadcrumbItem>
        <BreadcrumbItem href="/ui-library" id="breadcrumb-4" title="Breadcrumb 4"></BreadcrumbItem>
        <BreadcrumbItem href="/ui-library" id="breadcrumb-5" title="Breadcrumb 5"></BreadcrumbItem>
    </Breadcrumb>
) 
};

export default DropdownBreadcrumbComponent
`;
