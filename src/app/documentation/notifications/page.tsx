"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  ErrorNotification,
  InfoNotification,
  ReadNotification,
  SuccessNotification,
  WarningNotification,
  error_notificaton,
  info_notificaton,
  notifications_props,
  read_notificaton,
  success_notificaton,
  warning_notificaton,
} from "./notifications-examples";

const NotificationsGuideline: React.FC<any> = (): ReactElement => {
  return (
    <>
      <h3>Notifications</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>The Notifications is a styled component used to provide feedback such as success, warning, error, etc..</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={notifications_props} title="Notifications Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Read notification</NotificationHeader>
        <NotificationBody>Example of a read notification.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "read_notificaton.tsx", code: read_notificaton }]} componentExample={<ReadNotification />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Info notification</NotificationHeader>
        <NotificationBody>Example of a Info notification.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "info_notificaton.tsx", code: info_notificaton }]} componentExample={<InfoNotification />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Error notification</NotificationHeader>
        <NotificationBody>Example of a error notification.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "error_notificaton.tsx", code: error_notificaton }]} componentExample={<ErrorNotification />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Success notification</NotificationHeader>
        <NotificationBody>Example of a success notification.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "success_notificaton.tsx", code: success_notificaton }]} componentExample={<SuccessNotification />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Warning notification</NotificationHeader>
        <NotificationBody>Example of a warning notification.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "warning_notificaton.tsx", code: warning_notificaton }]} componentExample={<WarningNotification />} />
    </>
  );
};

export default NotificationsGuideline;
