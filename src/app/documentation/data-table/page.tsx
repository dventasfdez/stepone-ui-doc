"use client";
import React, { ReactElement } from "react";

import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ResultsExample, { result_props, results_example } from "./results-examples";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";

const ResultsGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>Results</h3>

      <ComponentExample codeExample={[{ name: "results_example.tsx", code: results_example }]} componentExample={<ResultsExample />} />
      <ComponentPropsTable propsDefinition={result_props} title="Results Props" />
    </NoSSR>
  );
};

export default ResultsGuideline;
