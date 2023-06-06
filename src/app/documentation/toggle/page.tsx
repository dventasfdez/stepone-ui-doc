"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  ToggleBase,
  ToggleMedium,
  ToggleSmall,
  ToggleLabel,
  ToggleHelper,
  ToggleDisabled,
  toggle_props,
  toggle_base,
  toggle_medium,
  toggle_small,
  toggle_label,
  toggle_helper,
  toggle_disabled,
} from "./toggle-examples";

const ToggleGuideline: React.FC<any> = (): ReactElement => {
  return (
    <>
      <h3>Toggle</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Used to toggle on/off desired feature.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={toggle_props} title="Toggle Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Toggle</NotificationHeader>
        <NotificationBody>On/Off</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "stepper_base.tsx", code: toggle_base }]} componentExample={<ToggleBase />} />
      <h4>Sizes</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Medium</NotificationHeader>
        <NotificationBody>This is default size</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "toggle_medium.tsx", code: toggle_medium }]} componentExample={<ToggleMedium />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Small</NotificationHeader>
        <NotificationBody>For this size the small property must be passed to it</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "toggle_small.tsx", code: toggle_small }]} componentExample={<ToggleSmall />} />
      <h4>Variants</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>With label</NotificationHeader>
        <NotificationBody>This variant can be used by implementing Toggle component with label attribute, in case of small size label is not showing</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "toggle_label.tsx", code: toggle_label }]} componentExample={<ToggleLabel />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>With helper texts</NotificationHeader>
        <NotificationBody>This variant can be used by implementing Toggle component with helperTextOn and helperTextOff attributes</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "toggle_helper.tsx", code: toggle_helper }]} componentExample={<ToggleHelper />} />
      <h4>States</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Disabled</NotificationHeader>
        <NotificationBody>Toggle component have the following states</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "toggle_disabled.tsx", code: toggle_disabled }]} componentExample={<ToggleDisabled />} />
    </>
  );
};

export default ToggleGuideline;
