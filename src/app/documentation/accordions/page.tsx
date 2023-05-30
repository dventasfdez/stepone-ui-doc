"use client";
import React, { ReactElement } from "react";

import {
  accordion_props,
  FilledAccordion,
  filled_accordion,
  HelperTextAccordion,
  helperText_accordion,
  others_accordion,
  OthersAccordion,
  group_accordion,
  GroupAccordion,
  opened_accordion,
  OpenedAccordion,
  simple_accordion,
  SimpleAccordion,
  data_mock_file,
  helper_data_mock_file,
} from "./accordion-examples";

import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";

const AccordionGuideline: React.FC<any> = (): ReactElement => {
  return (
    <div>
      <h3>Accordion</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>The Accordion is a styled component that shows and hides its contents.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={accordion_props} title="Accordion Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Simple Accordion example</NotificationHeader>
        <NotificationBody>Example of a simple Accordion with no props passed.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "simple-accordion.tsx", code: simple_accordion },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<SimpleAccordion />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Filled Accordion Example</NotificationHeader>
        <NotificationBody>Example of an Accordion with filled props passed.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "filled-accordion.tsx", code: filled_accordion },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<FilledAccordion />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Helper Text Accordion</NotificationHeader>
        <NotificationBody>This variant can be used by implementing Accordion with child AccordionHeader with a child text tag with class .accordion-helper-text</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "helperText_accordion.tsx", code: helperText_accordion },
          { name: "data-mock-file.ts", code: helper_data_mock_file, language: "javascript" },
        ]}
        componentExample={<HelperTextAccordion />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Others Accordion</NotificationHeader>
        <NotificationBody>
          We have infinite variants to Accordion component. His two child components can receive any elements of HTML, this gives us enough flexibility to be able to lay out as the application
          requires.
        </NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "others_accordion.tsx", code: others_accordion },
          { name: "data-mock-file.ts", code: helper_data_mock_file, language: "javascript" },
        ]}
        componentExample={<OthersAccordion />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Group Accordion</NotificationHeader>
        <NotificationBody>
          If is necesarry group different accordions we have a style for this variant. This variant can be used by implementing div HTML tag with class .accordion-group and in this container add
          different Accordion components as a childs.
        </NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "group_accordion.tsx", code: group_accordion }]} componentExample={<GroupAccordion />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Opened Accordion</NotificationHeader>
        <NotificationBody>Is possible to configure Accordion component with state open to default. We can impleting with defaultShow attribute.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "opened_accordion.tsx", code: opened_accordion },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<OpenedAccordion />}
      />
    </div>
  );
};

export default AccordionGuideline;
