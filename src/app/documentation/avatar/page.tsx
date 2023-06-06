"use client";
import React, { ReactElement } from "react";

import {
  AvatarSubtitle,
  AvatarTitle,
  BadgeAvatar,
  BigAvatar,
  DisabledAvatar,
  MediumAvatar,
  SmallAvatar,
  avatar_props,
  avatar_subtitle,
  avatar_title,
  badge_avatar,
  big_avatar,
  disabled_avatar,
  medium_avatar,
  small_avatar,
} from "./avatar-examples";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
const AvatarGuideline: React.FC<any> = (): ReactElement => {
  return (
    <>
      <div>
        <h3>Avatar</h3>
        <Notification show read className="static-notification mb6">
          <NotificationBody>Avatar is a styled componentis and a graphical representation of a user within the application.</NotificationBody>
        </Notification>
        <ComponentPropsTable propsDefinition={avatar_props} title="Avatar Props" />
        <hr className="mb3" />
        <h4>Examples</h4>
        <Notification show read className="static-notification mb6">
          <NotificationHeader>Big Avatar</NotificationHeader>
          <NotificationBody>Big Avatar example by adding big props</NotificationBody>
        </Notification>
        <ComponentExample codeExample={[{ name: "big_avatar.tsx", code: big_avatar }]} componentExample={<BigAvatar />} />
        <Notification show read className="static-notification mb6">
          <NotificationHeader>Medium Avatar</NotificationHeader>
          <NotificationBody>Medium Avatar example by adding medium props</NotificationBody>
        </Notification>
        <ComponentExample codeExample={[{ name: "medium_avatar.tsx", code: medium_avatar }]} componentExample={<MediumAvatar />} />
        <Notification show read className="static-notification mb6">
          <NotificationHeader>Small Avatar</NotificationHeader>
          <NotificationBody>Medium Avatar example by adding small props</NotificationBody>
        </Notification>
        <ComponentExample codeExample={[{ name: "small_avatar.tsx", code: small_avatar }]} componentExample={<SmallAvatar />} />
        <Notification show read className="static-notification mb6">
          <NotificationHeader>Avatar with title</NotificationHeader>
          <NotificationBody>Avatar with title example by adding title props</NotificationBody>
        </Notification>
        <ComponentExample codeExample={[{ name: "avatar_title.tsx", code: avatar_title }]} componentExample={<AvatarTitle />} />
        <Notification show read className="static-notification mb6">
          <NotificationHeader>Avatar with subtitle</NotificationHeader>
          <NotificationBody>Avatar with subtitle example by adding subtitle props</NotificationBody>
        </Notification>
        <ComponentExample codeExample={[{ name: "avatar_subtitle.tsx", code: avatar_subtitle }]} componentExample={<AvatarSubtitle />} />
        <Notification show read className="static-notification mb6">
          <NotificationHeader>Disabled Avatar</NotificationHeader>
          <NotificationBody>Disabled Avatar example by adding disabled props</NotificationBody>
        </Notification>
        <ComponentExample codeExample={[{ name: "disabled_avatar.tsx", code: disabled_avatar }]} componentExample={<DisabledAvatar />} />
        <Notification show read className="static-notification mb6">
          <NotificationHeader>Avatar with bagde</NotificationHeader>
          <NotificationBody>Avatar with badge example by adding badge props</NotificationBody>
        </Notification>
        <ComponentExample codeExample={[{ name: "badge_avatar.tsx", code: badge_avatar }]} componentExample={<BadgeAvatar />} />
      </div>
    </>
  );
};

export default AvatarGuideline;
