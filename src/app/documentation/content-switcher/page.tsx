"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
import {
  contentSwitcher_props,
  BadgesContentSwitcher,
  badges_content_switcher,
  badges_data_mock_file,
  data_mock_file,
  DisabledContentSwitcher,
  disabled_content_switcher,
  disabled_data_mock_file,
  DividerContentSwitcher,
  divider_content_switcher,
  IconsContentSwitcher,
  icons_content_switcher,
  icons_data_mock_file,
  SmallContentSwitcher,
  small_content_switcher,
  simple_content_switcher,
  SimpleContentSwitcher,
} from "./content-switcher-example";

const ContentSwitcherGuideline: React.FC<any> = (): ReactElement => {
  return (
    <>
      <h3>ContentSwitcher</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>The ContentSwitcher is a styled component that toggles the visible information.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={contentSwitcher_props} title="ContentSwitcher Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Simple ContentSwitcher example</NotificationHeader>
        <NotificationBody>Example of a simple ContentSwitcher with title and id props passed.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "simple-content-switcher.tsx", code: simple_content_switcher },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<SimpleContentSwitcher />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Small ContentSwitcher example</NotificationHeader>
        <NotificationBody>Example of a ContentSwitcher with small props passed.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "small-content-switcher.tsx", code: small_content_switcher },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<SmallContentSwitcher />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>ContentSwitcher with icons example</NotificationHeader>
        <NotificationBody>Example of a ContentSwitcher with icon props passed.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "icons-content-switcher.tsx", code: icons_content_switcher },
          { name: "data-mock-file.ts", code: icons_data_mock_file, language: "javascript" },
        ]}
        componentExample={<IconsContentSwitcher />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>ContentSwitcher with badges example</NotificationHeader>
        <NotificationBody>Example of a ContentSwitcher with badge props passed.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "badges-content-switcher.tsx", code: badges_content_switcher },
          { name: "data-mock-file.ts", code: badges_data_mock_file, language: "javascript" },
        ]}
        componentExample={<BadgesContentSwitcher />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>ContentSwitcher with divider example</NotificationHeader>
        <NotificationBody>Example of a ContentSwitcher with divider props passed.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "divider-content-switcher.tsx", code: divider_content_switcher },
          { name: "data-mock-file.ts", code: badges_data_mock_file, language: "javascript" },
        ]}
        componentExample={<DividerContentSwitcher />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Disabled ContentSwitcher example</NotificationHeader>
        <NotificationBody>Example of a ContentSwitcher with disabled props passed.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "disabled-content-switcher.tsx", code: disabled_content_switcher },
          { name: "data-mock-file.ts", code: disabled_data_mock_file, language: "javascript" },
        ]}
        componentExample={<DisabledContentSwitcher />}
      />
    </>
  );
};

export default ContentSwitcherGuideline;
