"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import { DefaultSearchbox, FilledSearchbox, SmallSearchbox, default_searchbox, disabled_searchbox, filled_searchbox, searchbox_props, small_searchbox } from "./searchbox-examples";

const SearchboxGuideline: React.FC<any> = (): ReactElement => {
  return (
    <NoSSR>
      <h3>Searchbox</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>The Searchbox is a styled component that allows users to search and filter data.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={searchbox_props} title="Searchbox Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Default searchbox</NotificationHeader>
      </Notification>
      <ComponentExample codeExample={[{ name: "default_searchbox.tsx", code: default_searchbox }]} componentExample={<DefaultSearchbox />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Small searchbox</NotificationHeader>
        <NotificationBody>Example of small searchbox by adding small prop.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "small_searchbox.tsx", code: small_searchbox }]} componentExample={<SmallSearchbox />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Filled searchbox</NotificationHeader>
        <NotificationBody>Example of searchbox with value by adding value prop.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "filled_searchbox.tsx", code: filled_searchbox }]} componentExample={<FilledSearchbox />} />
      {/* <Notification show read className="static-notification mb6">
        <NotificationHeader>Disabled searchbox</NotificationHeader>
        <NotificationBody>Example of disabled searchbox by adding disabled prop.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "disabled_searchbox.tsx", code: disabled_searchbox }]} componentExample={<DisabledSearchInput />} /> */}
    </NoSSR>
  );
};

export default SearchboxGuideline;
