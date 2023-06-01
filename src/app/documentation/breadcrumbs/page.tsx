"use client";
import React, { ReactElement } from "react";

import { BreadcrumbComponent, DropdownBreadcrumbComponent, breadcrumb, breadcrumbs_props, dropdown_breadcrumb } from "./breadcrumbs-examples";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import ComponentExample from "@/components/content/documentantion/ComponentExample";

const BreadcrumbsGuideline: React.FC<any> = (): ReactElement => {
  return (
    <div>
      <h3>Breadcrumbs</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>The Breadcrumbs is a styled component that displays the user's current location within the application.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={breadcrumbs_props} title="Breadcrumbs Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Simple Breadcrumbs</NotificationHeader>
        <NotificationBody>Example of simple Breadcrumbs.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "breadcrumb.tsx", code: breadcrumb }]} componentExample={<BreadcrumbComponent />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Breadcrumb with dropdown</NotificationHeader>
        <NotificationBody>Example of Breadcrumbs with dropdown.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "dropdown_breadcrumb.tsx", code: dropdown_breadcrumb }]} componentExample={<DropdownBreadcrumbComponent />} />
    </div>
  );
};

export default BreadcrumbsGuideline;
