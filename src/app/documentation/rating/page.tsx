"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import { AlternativeAmountRating, DefaultAmountRating, LabelRating, alternative_rating, default_rating, label_rating, rating_props } from "./rating-examples";

const RatingGuideline: React.FC<any> = (): ReactElement => {
  return (
    <div>
      <h3>Rating</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>Rating component displays sort of numbers to rate something. It is used to display a rating value in a form.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={rating_props} title="Rating Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Default amount Rating</NotificationHeader>
        <NotificationBody>Example of a rating with default amount.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "default_rating.tsx", code: default_rating }]} componentExample={<DefaultAmountRating />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Alternative amount Rating</NotificationHeader>
        <NotificationBody>Example of a rating with alternative amount.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "alternative_rating.tsx", code: alternative_rating }]} componentExample={<AlternativeAmountRating />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Rating with label</NotificationHeader>
        <NotificationBody>Example of a rating with label by adding label prop.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "label_rating.tsx", code: label_rating }]} componentExample={<LabelRating />} />
    </div>
  );
};

export default RatingGuideline;
