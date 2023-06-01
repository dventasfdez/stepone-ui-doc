"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  DefaultLink,
  IconLeftLink,
  IconRightLink,
  SmallIconLeftLink,
  SmallIconRightLink,
  default_link,
  icon_left_link,
  icon_right_link,
  small_icon_left_link,
  small_icon_right_link,
} from "./link-examples";

const LinkGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>Link</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Link style refers to the visual presentation of a hyperlink on the application.</NotificationBody>
      </Notification>
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Link</NotificationHeader>
        <NotificationBody>Example of a default Link.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "default_link.tsx", code: default_link }]} componentExample={<DefaultLink />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Link with left icon</NotificationHeader>
        <NotificationBody>Example of a link with left icon.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "icon_left_link.tsx", code: icon_left_link }]} componentExample={<IconLeftLink />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Link with right icon</NotificationHeader>
        <NotificationBody>Example of a link with right icon.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "icon_right_link.tsx", code: icon_right_link }]} componentExample={<IconRightLink />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Small link with left icon</NotificationHeader>
        <NotificationBody>Example of a small link with left icon.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "small_icon_left_link.tsx", code: small_icon_left_link }]} componentExample={<SmallIconLeftLink />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Small link with right icon</NotificationHeader>
        <NotificationBody>Example of a small link with right icon.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "small_icon_right_link.tsx", code: small_icon_right_link }]} componentExample={<SmallIconRightLink />} />
    </NoSSR>
  );
};

export default LinkGuideline;
