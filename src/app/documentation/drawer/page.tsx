"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import { DrawerBackButton, DrawerCloseButton, drawer_props, drawer_back_button, drawer_close_button } from "./drawer-examples";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";

const DrawerGuideline: React.FC<any> = (): ReactElement => {
  return (
    <>
      <h3>Drawer</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>
          The Drawer component is a panel that slides in from the edge of the screen which helps the user access additional information without crowding the main display.
        </NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={drawer_props} title="Drawer Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Drawer with back button</NotificationHeader>
        <NotificationBody>To indicate the user has reached a second navigation level through the drawer. This enables the user to go to the previous level if they click.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "drawer_back_button.tsx", code: drawer_back_button }]} componentExample={<DrawerBackButton />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Drawer with close button</NotificationHeader>
        <NotificationBody>
          Close button appears when the user has not gone to any navigation level, allowing the drawer to be closed if pressed. Clicking outside the area on the overlay drawer would also close it.
        </NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "drawer_close_button.tsx", code: drawer_close_button }]} componentExample={<DrawerCloseButton />} />
    </>
  );
};

export default DrawerGuideline;
