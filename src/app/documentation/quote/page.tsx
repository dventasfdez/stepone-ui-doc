"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import { AvatarWithoutImageQuote, CompleteAvatarQuote, DefaultQuote, avatar_without_image_quote, complete_avatar_quote, default_quote, quote_props } from "./quote-examples";

const QuoteGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>Quote</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Quote component displays a quotation from a person or source, e.g., a publication.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={quote_props} title="Quote Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Default Quote</NotificationHeader>
        <NotificationBody>Example of a default quote with only quote prop added.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "default_quote.tsx", code: default_quote }]} componentExample={<DefaultQuote />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Quote with complete avatar</NotificationHeader>
        <NotificationBody>Example of a quote with complete avatar by adding avatar prop.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "complete_avatar_quote.tsx", code: complete_avatar_quote }]} componentExample={<CompleteAvatarQuote />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Quote with avatar without image</NotificationHeader>
        <NotificationBody>Example of a quote with avatar without image by adding avatar without image prop.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "avatar_without_image_quote.tsx", code: avatar_without_image_quote }]} componentExample={<AvatarWithoutImageQuote />} />
    </NoSSR>
  );
};

export default QuoteGuideline;
