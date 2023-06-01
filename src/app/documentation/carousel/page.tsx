"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import {
  DefaultCarousel,
  MaxElementCarousel,
  OutlinedCarousel,
  carousel_props,
  data_mock_file,
  default_carousel,
  maxElement_data_mock_file,
  max_element_carousel,
  outlined_carousel,
} from "./carousel-examples";

const CarouselGuideline: React.FC<any> = (): ReactElement => {
  return (
    <div>
      <h3>Carousel</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>The Carousel is a component which its purpose is to separate either blocks of text, images or card.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={carousel_props} title="Carousel Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Default Carousel</NotificationHeader>
        <NotificationBody>Example of a default Carousel.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "default_carousel.tsx", code: default_carousel },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<DefaultCarousel />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Outlined Carousel</NotificationHeader>
        <NotificationBody>Outlined Carousel example by adding outlined prop.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "outlined_carousel.tsx", code: outlined_carousel },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<OutlinedCarousel />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Carousel with max element</NotificationHeader>
        <NotificationBody>Carousel with max element example.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "max_element_carousel.tsx", code: max_element_carousel },
          { name: "data-mock-file.ts", code: maxElement_data_mock_file, language: "javascript" },
        ]}
        componentExample={<MaxElementCarousel />}
      />
    </div>
  );
};

export default CarouselGuideline;
