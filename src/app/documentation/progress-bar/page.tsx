"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  ProgressBarRegular,
  ProgressBarCircular,
  ProgressBarWithoutTitle,
  ProgressBarWithoutHelper,
  ProgressBarWithoutSteps,
  progress_bar_regular,
  progress_bar_circular,
  progress_bar_props,
  progress_bar_without_title,
  progress_bar_without_helper,
  progress_bar_without_steps,
} from "./progress-bar-examples";

const ProgressBarGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>Progress Bar</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>
          In order to help users to hook themselves during a progression of steps. When is needed to step an user through a journey so they can keep track of their progress.
        </NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={progress_bar_props} title="Progress Bar Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Progress Bar regular</NotificationHeader>
      </Notification>
      <ComponentExample codeExample={[{ name: "progress_bar_regular.tsx", code: progress_bar_regular }]} componentExample={<ProgressBarRegular />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Progress Bar circular</NotificationHeader>
      </Notification>
      <ComponentExample codeExample={[{ name: "progress_bar_circular.tsx", code: progress_bar_circular }]} componentExample={<ProgressBarCircular />} />
      <h4>Variants</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Progress Bar without title</NotificationHeader>
      </Notification>
      <ComponentExample codeExample={[{ name: "progress_bar_no_title.tsx", code: progress_bar_without_title }]} componentExample={<ProgressBarWithoutTitle />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Progress Bar without helper</NotificationHeader>
      </Notification>
      <ComponentExample codeExample={[{ name: "progress_bar_no_helper.tsx", code: progress_bar_without_helper }]} componentExample={<ProgressBarWithoutHelper />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Progress Bar without steps</NotificationHeader>
      </Notification>
      <ComponentExample codeExample={[{ name: "progress_bar_no_steps.tsx", code: progress_bar_without_steps }]} componentExample={<ProgressBarWithoutSteps />} />
    </NoSSR>
  );
};

export default ProgressBarGuideline;
