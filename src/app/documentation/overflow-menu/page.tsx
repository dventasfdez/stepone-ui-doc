"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import { CloseOverflowMenuComponent, LinkOverflowMenuComponent, OverflowMenuComponent, close_overflow_menu, link_overflow_menu, overflow_menu, overflow_menu_props } from "./overflow-menu-examples";

const OverflowMenuGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>OverflowMenu</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>The OverflowMenu is a Component that houses information of all kinds.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={overflow_menu_props} title="OverflowMenu Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Simple OverflowMenu</NotificationHeader>
        <NotificationBody>Example of a simple OverflowMenu.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "overflow_menu.tsx", code: overflow_menu }]} componentExample={<OverflowMenuComponent />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>OverflowMenu with link</NotificationHeader>
        <NotificationBody>Example of an OverflowMenu with link by adding action prop.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "link_overflow_menu.tsx", code: link_overflow_menu }]} componentExample={<LinkOverflowMenuComponent />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>OverflowMenu with close icon</NotificationHeader>
        <NotificationBody>Example of an OverflowMenu with close icon by adding showCloseButton prop.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "close_overflow_menu.tsx", code: close_overflow_menu }]} componentExample={<CloseOverflowMenuComponent />} />
    </NoSSR>
  );
};

export default OverflowMenuGuideline;
