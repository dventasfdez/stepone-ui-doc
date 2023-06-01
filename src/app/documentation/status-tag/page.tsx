"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  AlertStatusTag,
  ErrorStatusTag,
  InfoStatusTag,
  SimpleStatusTag,
  SuccessStatusTag,
  alert_status_tag,
  error_status_tag,
  info_status_tag,
  simple_status_tag,
  success_status_tag,
} from "./status-tag-examples";

const StatusTagGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>Status tag</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>
          The status-tag is a style which helps to bring to the user more information about a specific event. The style also accepts an icon along with the text. The icon must be placed always before
          the text.
        </NotificationBody>
      </Notification>
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Simple status tag</NotificationHeader>
        <NotificationBody>Example of simple default status tag by adding .status-tag class.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "simple_status_tag.tsx", code: simple_status_tag }]} componentExample={<SimpleStatusTag />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Info status tag</NotificationHeader>
        <NotificationBody>Example of info status tag by adding .status-tag_info or .status-tag info classes.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "info_status_tag.tsx", code: info_status_tag }]} componentExample={<InfoStatusTag />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Alert status tag</NotificationHeader>
        <NotificationBody>Example of alert status tag by adding .status-tag_alert or .status-tag alert classes.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "alert_status_tag.tsx", code: alert_status_tag }]} componentExample={<AlertStatusTag />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Success status tag</NotificationHeader>
        <NotificationBody>Example of success status tag by adding .status-tag_success or .status-tag success info classes.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "success_status_tag.tsx", code: success_status_tag }]} componentExample={<SuccessStatusTag />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Error status tag</NotificationHeader>
        <NotificationBody>Example of error status tag by adding .status-tag_error or .status-tag error classes.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "error_status_tag.tsx", code: error_status_tag }]} componentExample={<ErrorStatusTag />} />
    </NoSSR>
  );
};

export default StatusTagGuideline;
