"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  DropdownMenuCheckbox,
  DropdownMenuDivider,
  DropdownMenuIcons,
  DropdownMenuRadio,
  TextListDropdown,
  data_mock_file,
  dropdown_checkbox,
  dropdown_divider,
  dropdown_icons,
  dropdown_props,
  dropdown_radio,
  text_list_dropdown,
} from "./dropdown-menu-examples";

const DropdownMenuGuideline: React.FC<any> = (): ReactElement => {
  return (
    <>
      <h3>DropdownMenu</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>The DropdownMenu component renders a dropdown menu list when they click on a button.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={dropdown_props} title="DropdownMenu Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>DropdownMenu with simple text list</NotificationHeader>
        <NotificationBody>Example of a DropdownMenu with simple text list.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "text_list_dropdown.tsx", code: text_list_dropdown },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<TextListDropdown />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>DropdownMenu with divider</NotificationHeader>
        <NotificationBody>Example of a DropdownMenu with divider added.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "dropdown_divider.tsx", code: dropdown_divider },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<DropdownMenuDivider />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>DropdownMenu with icons</NotificationHeader>
        <NotificationBody>Example of a DropdownMenu with icons added.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "dropdown_icons.tsx", code: dropdown_icons },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<DropdownMenuIcons />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>DropdownMenu with checkbox</NotificationHeader>
        <NotificationBody>Example of a DropdownMenu with checkbox added.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "dropdown_checkbox.tsx", code: dropdown_checkbox },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<DropdownMenuCheckbox />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>DropdownMenu with radio</NotificationHeader>
        <NotificationBody>Example of a DropdownMenu with radio buttons list added.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "dropdown_radio.tsx", code: dropdown_radio },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<DropdownMenuRadio />}
      />
    </>
  );
};

export default DropdownMenuGuideline;
