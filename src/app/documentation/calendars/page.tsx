"use client";
import React, { ReactElement } from "react";
import Notification, { NotificationBody, NotificationHeader } from "stepone-ui/notification";
import ComponentPropsTable from "@/components/content/documentantion/component-props-table";
import ComponentExample from "@/components/content/documentantion/ComponentExample";
import {
  SimpleCalendar,
  DefaultDateCalendar,
  defaultDate_calendar,
  MininumDateCalendar,
  minDate_calendar,
  maxDate_calendar,
  MaximumDateCalendar,
  selectedDates_calendar,
  SelectedDatesCalendar,
  activeDates_calendar,
  ActiveDatesCalendar,
  calendar_props,
  simple_calendar,
  data_mock_file,
  minDate_data_mock_file,
  maxDate_data_mock_file,
  selectedDates_data_mock_file,
  activeDates_data_mock_file,
  disabledDates_calendar,
  DisabledDatesCalendar,
  disabledDates_data_mock_file,
} from "./calendar-examples";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
const CalendarGuideline: React.FC<any> = (): ReactElement => {
  return (
    <>
      <h3>Calendars</h3>
      <Notification show read className="static-notification mb6">
        <NotificationBody>The Calendars component is used when we want to render a styled calendar.This component has props to control its different states and variants.</NotificationBody>
      </Notification>
      <ComponentPropsTable propsDefinition={calendar_props} title="Calendar Props" />
      <hr className="mb3" />
      <h4>Examples</h4>
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Simple Calendar</NotificationHeader>
        <NotificationBody>Example of a simple Calendar with no properties.</NotificationBody>
      </Notification>
      <ComponentExample codeExample={[{ name: "simple-calendar.tsx", code: simple_calendar }]} componentExample={<SimpleCalendar />} />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Default Date Calendar</NotificationHeader>
        <NotificationBody>Example of a Calendar with defaultDate props passed to our calendar.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "defaultDate_calendar.tsx", code: defaultDate_calendar },
          { name: "data-mock-file.ts", code: data_mock_file, language: "javascript" },
        ]}
        componentExample={<DefaultDateCalendar />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Minimun Date Calendar</NotificationHeader>
        <NotificationBody>Example of a Calendar with minDate props passed to our calendar.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "minimumDate_calendar.tsx", code: minDate_calendar },
          { name: "data-mock-file.ts", code: minDate_data_mock_file, language: "javascript" },
        ]}
        componentExample={<MininumDateCalendar />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Maximum Date Calendar</NotificationHeader>
        <NotificationBody>Example of a Calendar with maxDate props passed to our calendar.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "maximumDate_calendar.tsx", code: maxDate_calendar },
          { name: "data-mock-file.ts", code: maxDate_data_mock_file, language: "javascript" },
        ]}
        componentExample={<MaximumDateCalendar />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Selected Dates Calendar</NotificationHeader>
        <NotificationBody>Example of a Calendar with selectedDates props passed to our calendar.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "selectedDates_calendar.tsx", code: selectedDates_calendar },
          { name: "data-mock-file.ts", code: selectedDates_data_mock_file, language: "javascript" },
        ]}
        componentExample={<SelectedDatesCalendar />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Active Dates Calendar</NotificationHeader>
        <NotificationBody>Example of a Calendar with activeDates props passed to our calendar.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "activeDates_calendar", code: activeDates_calendar },
          { name: "data-mock-file.ts", code: activeDates_data_mock_file, language: "javascript" },
        ]}
        componentExample={<ActiveDatesCalendar />}
      />
      <Notification show read className="static-notification mb6">
        <NotificationHeader>Disabled Dates Calendar</NotificationHeader>
        <NotificationBody>Example of a Calendar with disabledDates props passed to our calendar.</NotificationBody>
      </Notification>
      <ComponentExample
        codeExample={[
          { name: "disabledDates_calendar", code: disabledDates_calendar },
          { name: "data-mock-file.ts", code: disabledDates_data_mock_file, language: "javascript" },
        ]}
        componentExample={<DisabledDatesCalendar />}
      />
    </>
  );
};

export default CalendarGuideline;
