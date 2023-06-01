"use client";
import React, { ReactElement } from "react";
import Calendar from "stepone-ui/calendar";

export const calendar_props = [
  { name: "defaultDate", use: false, type: "number", definition: "The timestamp value of any of the days of the month we want to display." },
  { name: "minDate", use: false, type: "number", definition: "The timestamp value of the minimum date we will can selected." },
  { name: "maxDate", use: false, type: "number", definition: "The timestamp value of the maximum date we will can selected." },
  { name: "selectedDates", use: false, type: "number", definition: "The timestamp values array of the dates selected." },
  { name: "activeDates", use: false, type: "number", definition: "The timestamp values of the dates between two selected dates." },
  { name: "disabledDates", use: false, type: "number", definition: "The timestamp values of the disabled dates." },
];

const data_mock = 1682410821216;
const data_mock_2 = 1680250821219;
const data_mock_3 = [1680769221219, 1681114821219, 1681287621219, 1681546821219];
const data_mock_4 = [1681419600000, 1681506000000, 1681592400000, 1681678800000, 1681765200000, 1681851600000, 1681938000000, 1682024400000, 1682110800000, 1682197200000, 1682283600000];
const data_mock_5 = [1681374021219, 1682410821219];

// SIMPLE CALENDAR EXAMPLE
export const SimpleCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar />;
};

export const simple_calendar = `
import React, { ReactElement } from "react";
import Calendar from "stepone-ui/calendar";

const SimpleCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar />;
};

export default SimpleCalendar
`;

// DEFAULT DATE CALENDAR EXAMPLE
export const DefaultDateCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar defaultDate={data_mock} />;
};

export const defaultDate_calendar = `
import React, { ReactElement } from "react";
import Calendar from "stepone-ui/calendar";
import { data_mock } from "./data-mock-file";
    
const defaultDateCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar defaultDate={data_mock} />
};

export default defaultDateCalendar
`;

export const data_mock_file = `
export const data_mock = 1682410821216;
`;

// MINIMUM DATE CALENDAR EXAMPLE
export const MininumDateCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar minDate={data_mock_2} />;
};

export const minDate_calendar = `
import React, { ReactElement } from "react";
import Calendar from "stepone-ui/calendar";
import { data_mock } from "./data-mock-file";
    
const minDateCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar minDate={data_mock} />
};

export default minDateCalendar
`;

export const minDate_data_mock_file = `
export const data_mock = 1680250821219;
`;

// MAXIMUM DATE CALENDAR EXAMPLE
export const MaximumDateCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar maxDate={data_mock_2} />;
};

export const maxDate_calendar = `
import React, { ReactElement } from "react";
import Calendar from "stepone-ui/calendar";
import { data_mock } from "./data-mock-file";
      
const maxDateCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar maxDate={data_mock} />
};
  
export default maxDateCalendar
`;

export const maxDate_data_mock_file = `
export const data_mock = 1680250821219;
`;

// SELECTED DATE CALENDAR EXAMPLE
export const SelectedDatesCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar selectedDates={data_mock_3} />;
};

export const selectedDates_calendar = `
import React, { ReactElement } from "react";
import Calendar from "stepone-ui/calendar";
import { data_mock } from "./data-mock-file";
      
const selectedDatesCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar selectedDates={data_mock} />
};
  
export default selectedDatesCalendar
`;

export const selectedDates_data_mock_file = `
export const data_mock = [1680769221219, 1681114821219, 1681287621219, 1681546821219];
`;

// ACTIVE DATE CALENDAR EXAMPLE
export const ActiveDatesCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar activeDates={data_mock_4} selectedDates={data_mock_5} />;
};

export const activeDates_calendar = `
import React, { ReactElement } from "react";
import Calendar from "stepone-ui/calendar";
import { activeDates_data_mock, selectedDates_data_mock } from "./data-mock-file";
        
const activeDatesCalendar: React.FC<any> = (): ReactElement => {
  return (  
    <Calendar
      activeDates={activeDates_data_mock}
      selectedDates={selectedDates_data_mock}
    />
  );
};
    
export default activeDatesCalendar
`;

export const activeDates_data_mock_file = `
export const activeDates_data_mock = [1681419600000, 1681506000000, 1681592400000, 1681678800000, 1681765200000, 1681851600000, 1681938000000, 1682024400000, 1682110800000, 1682197200000, 1682283600000];
export const selectedDates_data_mock = [1681374021219, 1682410821219];
`;

// DISABLED DATE CALENDAR EXAMPLE
export const DisabledDatesCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar disabledDates={data_mock_3} />;
};

export const disabledDates_calendar = `
import React, { ReactElement } from "react";
import Calendar from "stepone-ui/calendar";
import { data_mock } from "./data-mock-file";
        
const disabledDatesCalendar: React.FC<any> = (): ReactElement => {
  return <Calendar disabledDates={data_mock} />;
};
    
export default disabledDatesCalendar
`;

export const disabledDates_data_mock_file = `
export const data_mock = [1680769221219, 1681114821219, 1681287621219, 1681546821219];
`;
