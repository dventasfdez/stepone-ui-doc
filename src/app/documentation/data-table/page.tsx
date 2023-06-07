"use client";
import React, { ReactElement } from "react";

import {
  ComplexFilterResult,
  FilterResult,
  SimpleResult,
  complex_filter_data_mock_file,
  complex_filter_result,
  complex_filter_section,
  data_mock_file,
  filter_data_mock_file,
  filter_result,
  result_columns_props,
  result_props,
  simple_result,
} from "./results-examples";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import ComponentExample from "@/components/content/documentantion/ComponentExample";

const ResultsGuideline: React.FC<any> = (): ReactElement => {
  return (
    <div>
      <h3>Results</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>The Results component is used when we want to render a table, where the data can be filtered, sorted or is loaded as async data</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={result_props} title="Results Props" />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Function fetchResults</NotificationHeader>
        <NotificationBody>The fetchResults function, recive as a parameter an object that include the names of all applied filters (could be of type FiltersResults)</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={result_columns_props} title="Type Columns" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Simple Results</NotificationHeader>
        <NotificationBody>Example of a simple Results table with no filters and default rows and headers</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "simple-result.tsx", code: simple_result },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<SimpleResult />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Filter Results</NotificationHeader>
        <NotificationBody>Example of a Results table with basic filters (search, pagination and sorting)</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "filter-result.tsx", code: filter_result },
          { name: "data-mock-file.ts", code: filter_data_mock_file, language: "javascript" },
        ]}
        componentExample={<FilterResult />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Complex Filter Results</NotificationHeader>
        <NotificationBody>Example of a Results table with complex filters (search, pagination, sorting and a value selector)</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "filter-result.tsx", code: complex_filter_result },
          { name: "filter-section.tsx", code: complex_filter_section },
          { name: "data-mock-file.ts", code: complex_filter_data_mock_file, language: "javascript" },
        ]}
        componentExample={<ComplexFilterResult />}
      />
    </div>
  );
};

export default ResultsGuideline;
