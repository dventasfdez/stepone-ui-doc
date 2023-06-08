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
      <h3 className="hero mb2">Data tables</h3>
      <p>
        StepOne provides a powerful and flexible data table component that allows you to display and manipulate tabular data efficiently. Whether you need to present large datasets, perform sorting
        and filtering operations, or enable pagination, StepOne's data tables can help you achieve these tasks with ease. In this guide, we will explore what StepOne's data tables are for and how to
        use them effectively in your web applications.
      </p>
      <h4>What are Data Tables?</h4>
      <p>
        Data tables are a fundamental element in web development used to organize and display structured data in a tabular format. StepOne's data table component enhances this functionality by
        providing advanced features such as sorting, filtering, pagination, and responsive design, allowing users to interact with and analyze data more effectively.
      </p>
      <h4>Examples</h4>
      <ComponentExample codeExample={[{ name: "results_example.tsx", code: results_example }]} componentExample={<ResultsExample />} />
      <h4>Configuring Data Table Features</h4>
      <p>
        StepOne's data tables offer several configuration options to customize their behavior and appearance. Here are some common configuration options you can specify when initializing a data table:
      </p>
      <ComponentPropsTable propsDefinition={result_props} title="Results Props" />
      <h4>Conclusion</h4>
      <p>
        StepOne's data table component offers a powerful and flexible solution for displaying and manipulating tabular data in your web applications. By following the steps outlined in this guide and
        configuring the desired features, you can create interactive and visually appealing data tables that enhance data presentation and user experience.
      </p>
    </NoSSR>
  );
};

export default ResultsGuideline;
