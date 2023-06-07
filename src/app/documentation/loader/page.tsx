"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  CircularLoader,
  ErrorLoader,
  SimpleLoader,
  SpinnerLoader,
  SubtitleLoader,
  SuccessLoader,
  TitleLoader,
  circular_loader,
  error_loader,
  loader_props,
  simple_loader,
  spinner_loader,
  subtitle_loader,
  success_loader,
  title_loader,
} from "./loader-examples";

const LoaderGuideline: React.FC<any> = (): ReactElement => {
  return (
    <>
      <h3>Loader</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Loader is a styled component use it as a placeholder while we wait the content to be loaded.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={loader_props} title="Loader Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Spinner Loader</NotificationHeader>
        <NotificationBody>Example of a Spinner Loader by adding spinner props.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "spinner_loader.tsx", code: spinner_loader }]} componentExample={<SpinnerLoader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Simple Loader</NotificationHeader>
        <NotificationBody>Simple loader example with automatic props added.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "simple_loader.tsx", code: simple_loader }]} componentExample={<SimpleLoader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Loader with title</NotificationHeader>
        <NotificationBody>Example of a Loader with title by adding title props.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "title_loader.tsx", code: title_loader }]} componentExample={<TitleLoader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Loader with title</NotificationHeader>
        <NotificationBody>Example of a Loader with subtitle by adding subtitle props.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "subtitle_loader.tsx", code: subtitle_loader }]} componentExample={<SubtitleLoader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Circular Loader</NotificationHeader>
        <NotificationBody>Example of a Circular Loader with subtitle by adding subtitle, title and percentage props.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "circular_loader.tsx", code: circular_loader }]} componentExample={<CircularLoader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Error Loader</NotificationHeader>
        <NotificationBody>Example of a Loader with error status by adding error props.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "error_loader.tsx", code: error_loader }]} componentExample={<ErrorLoader />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Success Loader</NotificationHeader>
        <NotificationBody>Example of a Loader with success status by adding success props.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "success_loader.tsx", code: success_loader }]} componentExample={<SuccessLoader />} />
    </>
  );
};

export default LoaderGuideline;
