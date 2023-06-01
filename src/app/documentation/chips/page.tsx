"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import { ActiveChips, Chips, ColouredChips, DisabledChips, active_chips, chips, coloured_chips, disabled_chips } from "./chips-examples";

import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
const ChipsGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>Chips</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>The chips component is similar to a button and therefore has the same interaction methods as it.</NotificationBody>
      </Notification>
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Chips</NotificationHeader>
        <NotificationBody>Simple chips examples.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "chips.tsx", code: chips }]} componentExample={<Chips />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Chips with badge</NotificationHeader>
        <NotificationBody>Chips with badge example by adding badge_small class.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "coloured_chips.tsx", code: coloured_chips }]} componentExample={<ColouredChips />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Disabled Chips</NotificationHeader>
        <NotificationBody>Chips disabled example by adding disabled class.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "disabled_chips.tsx", code: disabled_chips }]} componentExample={<DisabledChips />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Active Chips</NotificationHeader>
        <NotificationBody>Chips active example by adding active class.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "active_chips.tsx", code: active_chips }]} componentExample={<ActiveChips />} />
    </NoSSR>
  );
};

export default ChipsGuideline;
