"use client";
import React, { ReactElement } from "react";

import { ModalExamplePortal, ModalExample, modal, modal_portal, modal_props } from "./modal-examples";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import ComponentExample from "@/components/content/documentantion/ComponentExample";

const ModalGuideline: React.FC<any> = (): ReactElement => {
  return (
    <div>
      <h3>Modal</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Modal component is used when we want to render some components inside a dialog.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={modal_props} title="Modal Props" />

      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Modal component as portal.</NotificationHeader>
        <NotificationBody>Modal example rendering as portal (renderAsPortal true).</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "modal.tsx", code: modal_portal }]} componentExample={<ModalExamplePortal />} />

      <Notification show read className="static-notification mb6">
        <NotificationHeader>Modal component.</NotificationHeader>
        <NotificationBody>Modal example (renderAsPortal false).</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "modal.tsx", code: modal }]} componentExample={<ModalExample />} />
    </div>
  );
};

export default ModalGuideline;
