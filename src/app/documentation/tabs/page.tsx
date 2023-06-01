"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import { TabsHorizontal, TabsVertical, TabsDisabled, TabsCollapsed, tabs_props, tab_item_props, tabs_horizontal, tabs_vertical, tabs_disabled, tabs_collapsed } from "./tabs-examples";

const TabsGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>Tabs</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Tabs is a styled component that toogles the visible information. This holds the tab content to show.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={tabs_props} title="Tabs Props" />
      <h3>TabItem</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Each item is the clickable area of the tab.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={tab_item_props} title="TabItem Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Tabs Horizontal</NotificationHeader>
        <NotificationBody>This is a default variant, it can be used by implementing Tabs</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "tab_horizontal.tsx", code: tabs_horizontal }]} componentExample={<TabsHorizontal />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Tabs Vertical</NotificationHeader>
        <NotificationBody>This variant can be used by implementing Tabs component with vertical attribute:</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "tabs_vertical.tsx", code: tabs_vertical }]} componentExample={<TabsVertical />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Tabs Collapsed</NotificationHeader>
        <NotificationBody>
          <p>
            Also, is possible to implement the previous variants with items collapsed. In this variant will hide the item indicated from the main tab and make it available inside the dropdown menu.
          </p>
          <p>This variant can be used by implementing Tabs component with TabItem childs with collapsed attribute:</p>
        </NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "tabs_collapsed.tsx", code: tabs_collapsed }]} componentExample={<TabsCollapsed />} />
      <h4>States</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Disabled Items</NotificationHeader>
        <NotificationBody>This state can be used by implementing Tabs component with TabItem childs with disabled attribute:</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "tabs_disabled.tsx", code: tabs_disabled }]} componentExample={<TabsDisabled />} />
    </NoSSR>
  );
};

export default TabsGuideline;
