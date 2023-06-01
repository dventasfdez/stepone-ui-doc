"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  TreeComponent,
  TreeMaxDeepComponent,
  TreeDisabledNestedComponent,
  TreeDisabledComponent,
  tree_props,
  tree,
  tree_element_props,
  tree_max_deep,
  tree_disabled_nested,
  tree_disabled,
} from "./tree-view-examples";

const TreeViewGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>Tree</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>
          <p>Is a Navigable representation of a Tree data Structure</p>
          <p>
            Use Cases:
            <ul>
              <li>Visualize navigation of a Data Tree</li>
              <li>Better suited for navigating through deep hierarchical levels</li>
            </ul>
          </p>
        </NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={tree_props} title="Tree Props" />
      <h3>TreeViewElement</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Used to show items of the Tree.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={tree_element_props} title="TreeViewElement Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Default Tree View</NotificationHeader>
        <NotificationBody>The drop-down icon appears if it contains children.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "tree.tsx", code: tree }]} componentExample={<TreeComponent />} />
      <h4>Variants</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Tree Max Deep</NotificationHeader>
        <NotificationBody>The max level of deepness for the Tree view is 4 levels.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "tree_max_deep.tsx", code: tree_max_deep }]} componentExample={<TreeMaxDeepComponent />} />
      <h4>States</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Disabled Nested Tree view</NotificationHeader>
      </Notification>
      <ComponentExample codeExample={[{ name: "tree_disabled_nested.tsx", code: tree_disabled_nested }]} componentExample={<TreeDisabledNestedComponent />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Disabled Tree view</NotificationHeader>
      </Notification>
      <ComponentExample codeExample={[{ name: "tree_disabled.tsx", code: tree_disabled }]} componentExample={<TreeDisabledComponent />} />
    </NoSSR>
  );
};

export default TreeViewGuideline;
