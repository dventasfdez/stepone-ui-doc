"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  DisabledFileUploader,
  disabled_file_uploader,
  DragAndDropFileUploader,
  drag_and_drop_file_uploader,
  file_uploader_props,
  FullWidthFileUploader,
  full_width_file_uploader,
  MultipleFileUploader,
  multiple_file_uploader,
  SecondaryFileUploader,
  SimpleFileUploader,
  simple_file_uploader,
  SmallFileUploader,
  small_file_uploader,
  MultipleDragFileUploader,
  multiple_drag_file_uploader,
  disabled_drag_file_uploader,
  DisabledDragFileUploader,
} from "./file-uploader-examples";

const FileUploaderGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>FileUploader</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>FileUploader component is a styled component. This component has the following props to control its different states and variants.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={file_uploader_props} title="FileUploader Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Simple FileUploader</NotificationHeader>
        <NotificationBody>Simple default FileUploader example</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "simple_file_uploader.tsx", code: simple_file_uploader }]} componentExample={<SimpleFileUploader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Small FileUploader</NotificationHeader>
        <NotificationBody>Small FileUploader example by adding small props</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "small_file_uploader.tsx", code: small_file_uploader }]} componentExample={<SmallFileUploader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Drag and Drop FileUploader</NotificationHeader>
        <NotificationBody>Drag and Drop FileUploader example by adding dragAndDrop props</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "drag_and_drop_file_uploader.tsx", code: drag_and_drop_file_uploader }]} componentExample={<DragAndDropFileUploader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Full width FileUploader</NotificationHeader>
        <NotificationBody>Full width FileUploader example by adding fullWidth props</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "full_width_file_uploader.tsx", code: full_width_file_uploader }]} componentExample={<FullWidthFileUploader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Multiple FileUploader</NotificationHeader>
        <NotificationBody>Multiple FileUploader example by adding multiple props</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "multiple_file_uploader.tsx", code: multiple_file_uploader }]} componentExample={<MultipleFileUploader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Multiple Drag and Drop FileUploader</NotificationHeader>
        <NotificationBody>Multiple Drag and Drop FileUploader example by adding multiple props</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "multiple_drag_file_uploader.tsx", code: multiple_drag_file_uploader }]} componentExample={<MultipleDragFileUploader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Secondary FileUploader</NotificationHeader>
        <NotificationBody>Secondary FileUploader example by adding secondary props</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "secondary_uploader.tsx", code: multiple_file_uploader }]} componentExample={<SecondaryFileUploader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Disabled FileUploader</NotificationHeader>
        <NotificationBody>Disabled FileUploader example by adding disabled props</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "disabled_file_uploader.tsx", code: disabled_file_uploader }]} componentExample={<DisabledFileUploader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Disabled Drag and Drop FileUploader</NotificationHeader>
        <NotificationBody>Disabled Drag and Drop FileUploader example by adding disabled props</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "disabled_multiple_file_uploader.tsx", code: disabled_drag_file_uploader }]} componentExample={<DisabledDragFileUploader />} />
    </NoSSR>
  );
};

export default FileUploaderGuideline;
