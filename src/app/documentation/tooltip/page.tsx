"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import { TooltipComponent, tooltip_props, tooltip } from "./tooltip-examples";

const TooltipGuideline: React.FC<any> = (): ReactElement => {
  return (
    <>
      <h3>Tooltip</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>
          Used to show tooltips. For it to work it is necessary to indicate who will be the parent element on which the Tooltip will be displayed, for this it is necessary to:
          <ul>
            <li>Create a reference to the parent element.</li>
            <li>Pass this reference to our Tooltip component by means of the parentRef attribute..</li>
          </ul>
        </NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={tooltip_props} title="Tooltip Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Tooltip</NotificationHeader>
        <NotificationBody>Bottom</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "tooltip.tsx", code: tooltip }]} componentExample={<TooltipComponent />} />
      <h4>Variants</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Tooltip on top of element</NotificationHeader>
        <NotificationBody>This variant will be displayed when the element is in the lower half of the screen.</NotificationBody>
      </Notification>
      <div style={{ position: "relative", padding: "10px 0" }}>
        <div className="tooltip top">I am tooltip</div>
      </div>
      <Notification show read className="static-notification mb6 mt6">
        <NotificationHeader>Tooltip on right of element</NotificationHeader>
        <NotificationBody>This variant will be displayed when the element is in the left half of the screen and width of the Tooltip goes of the screen.</NotificationBody>
      </Notification>
      <div style={{ position: "relative", padding: "10px 0" }}>
        <div className="tooltip right">I am tooltip</div>
      </div>
      <Notification show read className="static-notification mb6 mt6">
        <NotificationHeader>Tooltip on bottom of element</NotificationHeader>
        <NotificationBody>This variant, is a default variant, will be displayed when the element is in the upper half of the screen.</NotificationBody>
      </Notification>
      <div style={{ position: "relative", padding: "10px 0" }}>
        <div className="tooltip bottom">I am tooltip</div>
      </div>
      <Notification show read className="static-notification mb6 mt6">
        <NotificationHeader>Tooltip on left of element</NotificationHeader>
        <NotificationBody>This variant will be displayed when the element is in the right half of the screen and width of the Tooltip goes of the screen.</NotificationBody>
      </Notification>
      <div style={{ position: "relative", padding: "10px 0" }}>
        <div className="tooltip left">I am left</div>
      </div>
    </>
  );
};

export default TooltipGuideline;
