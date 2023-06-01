import React, { ReactElement } from "react";
import Tree, { TreeViewElement } from "stepone-ui/treeView";

export const tree_props = [{ name: "title", use: true, type: "string", definition: "Title text for the component." }];

export const tree_element_props = [
  { name: "name", use: true, type: "string", definition: "Name of the Tree Element component." },
  { name: "arrow", use: false, type: "'left' | 'right' | 'none'", definition: "By default, displays a left-sided arrow; can be set to 'right' or 'none'." },
  { name: "className", use: false, type: "string", definition: "Alternative class name for the Tree Element component." },
  { name: "disabled", use: false, type: "boolean", definition: "Disables the Tree Element component." },
  { name: "icon", use: false, type: "string", definition: "Displays an icon for the Tree Element component if needed." },
  { name: "onClick", use: false, type: "(e?: React.MouseEvent) => void", definition: "Click event handler function for the Tree Element component." },
];

// TREE VIEW
export const TreeComponent: React.FC<any> = (): ReactElement => {
  return (
    <Tree>
      <TreeViewElement name="Item Tree" />
      <TreeViewElement name="Item Tree" />
      <TreeViewElement name="Item Tree">
        <TreeViewElement name="Sub item">
          <TreeViewElement name="Sub item 2" />
        </TreeViewElement>
      </TreeViewElement>
    </Tree>
  );
};

export const tree = `
import React, { ReactElement } from "react";
import Tree, { TreeViewElement } from "stepone-ui/treeView";

export const TreeComponent: React.FC<any> = (): ReactElement => {
  return (
    <Tree>
      <TreeViewElement name="Item Tree" />
      <TreeViewElement name="Item Tree" />
      <TreeViewElement name="Item Tree">
        <TreeViewElement name="Sub item">
          <TreeViewElement name="Sub item 2" />
        </TreeViewElement>
      </TreeViewElement>
    </Tree>
  );
};

export default TreeComponent
`;

// TREE VIEW MAX DEEP
export const TreeMaxDeepComponent: React.FC<any> = (): ReactElement => {
  return (
    <Tree>
      <TreeViewElement name="Item Tree" />
      <TreeViewElement name="Item Disabled" />
      <TreeViewElement name="Item Tree">
        <TreeViewElement name="Sub item">
          <TreeViewElement name="Sub item 2" />
          <TreeViewElement name="Sub item 2" />
          <TreeViewElement name="Sub item 2">
            <TreeViewElement name="Sub item 3" />
            <TreeViewElement name="Sub item 3" />
            <TreeViewElement name="Sub item 3" />
          </TreeViewElement>
        </TreeViewElement>
      </TreeViewElement>
    </Tree>
  );
};

export const tree_max_deep = `
import React, { ReactElement } from "react";
import Tree, { TreeViewElement } from "stepone-ui/treeView";

export const TreeMaxDeepComponent: React.FC<any> = (): ReactElement => {
  return (
    <Tree>
      <TreeViewElement name="Item Tree" />
      <TreeViewElement name="Item Disabled" />
      <TreeViewElement name="Item Tree">
        <TreeViewElement name="Sub item">
          <TreeViewElement name="Sub item 2" />
          <TreeViewElement name="Sub item 2" />
          <TreeViewElement name="Sub item 2">
            <TreeViewElement name="Sub item 3" />
            <TreeViewElement name="Sub item 3" />
            <TreeViewElement name="Sub item 3" />
          </TreeViewElement>
        </TreeViewElement>
      </TreeViewElement>
    </Tree>
  );
};

export default TreeMaxDeepComponent
`;

// TREE VIEW DISABLED NESTED
export const TreeDisabledNestedComponent: React.FC<any> = (): ReactElement => {
  return (
    <Tree>
      <TreeViewElement name="Item Tree">
        <TreeViewElement disabled name="Item Disabled" />
      </TreeViewElement>
      <TreeViewElement name="Item Tree">
        <TreeViewElement disabled name="Item Disabled" />
      </TreeViewElement>
      <TreeViewElement name="Item Tree">
        <TreeViewElement disabled name="Item Disabled" />
      </TreeViewElement>
    </Tree>
  );
};

export const tree_disabled_nested = `
import React, { ReactElement } from "react";
import Tree, { TreeViewElement } from "stepone-ui/treeView";

export const TreeDisabledNestedComponent: React.FC<any> = (): ReactElement => {
  return (
    <Tree>
      <TreeViewElement name="Item Tree">
        <TreeViewElement disabled name="Item Disabled" />
      </TreeViewElement>
      <TreeViewElement name="Item Tree">
        <TreeViewElement disabled name="Item Disabled" />
      </TreeViewElement>
      <TreeViewElement name="Item Tree">
        <TreeViewElement disabled name="Item Disabled" />
      </TreeViewElement>
    </Tree>
  );
};

export default TreeDisabledNestedComponent
`;

// TREE VIEW DISABLED
export const TreeDisabledComponent: React.FC<any> = (): ReactElement => {
  return (
    <Tree>
      <TreeViewElement disabled name="Item Disabled" />
      <TreeViewElement disabled name="Item Disabled" />
      <TreeViewElement disabled name="Item Disabled" />
    </Tree>
  );
};

export const tree_disabled = `
import React, { ReactElement } from "react";
import Tree, { TreeViewElement } from "stepone-ui/treeView";

export const TreeDisabledComponent: React.FC<any> = (): ReactElement => {
  return (
    <Tree>
      <TreeViewElement disabled name="Item Disabled" />
      <TreeViewElement disabled name="Item Disabled" />
      <TreeViewElement disabled name="Item Disabled" />
    </Tree>
  );
};

export default TreeDisabledComponent
`;
