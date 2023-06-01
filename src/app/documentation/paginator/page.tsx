"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  PaginatorComponent,
  PaginatorCollapsed,
  PaginatorTruncatedLeft,
  PaginatorTruncatedRight,
  PaginatorTruncatedAll,
  paginator_props,
  paginator,
  paginator_collapsed,
  paginator_truncated_left,
  paginator_truncated_right,
  paginator_truncated_all,
} from "./paginator-examples";

const PaginatorGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>Paginator</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Used for pagination.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={paginator_props} title="Paginator Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Paginator regular</NotificationHeader>
      </Notification>
      <ComponentExample codeExample={[{ name: "paginator.tsx", code: paginator }]} componentExample={<PaginatorComponent />} />
      <h4>Variants</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Collapsed Paginator</NotificationHeader>
      </Notification>
      <ComponentExample codeExample={[{ name: "paginator_collapsed.tsx", code: paginator_collapsed }]} componentExample={<PaginatorCollapsed />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Truncated Paginator</NotificationHeader>
        <NotificationBody>Left</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "paginator_truncated_left.tsx", code: paginator_truncated_left }]} componentExample={<PaginatorTruncatedLeft />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Truncated Paginator</NotificationHeader>
        <NotificationBody>Right</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "paginator_truncated_right.tsx", code: paginator_truncated_right }]} componentExample={<PaginatorTruncatedRight />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Truncated Paginator</NotificationHeader>
        <NotificationBody>All</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "paginator_truncated_right.tsx", code: paginator_truncated_all }]} componentExample={<PaginatorTruncatedAll />} />
    </NoSSR>
  );
};

export default PaginatorGuideline;
