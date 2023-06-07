"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import { StepperBase, StepperVerticalBase, StepperHorizontalNoHelper, stepper_horizontal_no_helper, stepper_vertical_base, stepper_base, step_props, steps_props } from "./stepper-examples";

const StepperGuideline: React.FC<any> = (): ReactElement => {
  return (
    <>
      <h3>Stepper</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Used to keep the user on track when completing a specific task. By dividing the end goal into smaller sub tasks.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={steps_props} title="Stepper Props" />
      <h3>Step</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Used for defining every step within the Stepper.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={step_props} title="Step Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Horizontal Stepper</NotificationHeader>
        <NotificationBody>Base model</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "stepper_base.tsx", code: stepper_base }]} componentExample={<StepperBase />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Vertical Stepper</NotificationHeader>
        <NotificationBody>Base model</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "stepper_vertical_base.tsx", code: stepper_vertical_base }]} componentExample={<StepperVerticalBase />} />
      <h4>Variants</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Without helper</NotificationHeader>
        <NotificationBody>To create stepper without helper just remove &quot;detail&quot; property.</NotificationBody>
      </Notification>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Horizontal Stepper</NotificationHeader>
        <NotificationBody>No helper</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "stepper_horizontal_no_helper.tsx", code: stepper_horizontal_no_helper }]} componentExample={<StepperHorizontalNoHelper />} />
    </>
  );
};

export default StepperGuideline;
