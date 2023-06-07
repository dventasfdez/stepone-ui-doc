import React, { ReactElement, useState } from "react";
import { TextInput } from "stepone-ui/forms";
import Results from "stepone-ui/results";

export interface FiltersResults {
  page?: number;
  perPage?: number;
  search?: string;
  sortBy?: string;
  sortDirection?: string;
  [others: string]: any;
}

export const result_props = [
  { name: "defaultColumns", use: true, type: "Columns", link: true, definition: "The list of all the possible colums" },
  { name: "columns", use: true, type: "Columns", link: true, definition: "The list of collumns that the user has selected to show" },
  { name: "fetchResults", use: true, type: "Function", definition: "The function that retrieves the data that will be displayed in the results. Needs to be async." },
  {
    name: "filterOnChange",
    use: false,
    type: "boolean",
    definition: "If you want the results to refresh when any input inside it changes or only when submit is triggered",
  },
];

export const result_columns_props = [
  { name: "title", use: true, type: "string", definition: "Title of the column" },
  { name: "columnKey", use: true, type: "string", definition: "Key of the element row property" },
  { name: "sortable", use: false, type: "boolean", definition: "Indicates if the table is sortable by the column" },
];

const data_mock: any = [
  { name: "Tony Stark", email: "ironman@oficial-avengers.com", location: "Stark Tower" },
  { name: "Steve Rogers", email: "captain.america@oficial-avengers.com", location: "Avengers Building" },
  { name: "Natasha Romanoff", email: "black.widow@oficial-avengers.com", location: "Budapest" },
  { name: "Bruce Banner", email: "hulk@oficial-avengers.com", location: "Stark Tower" },
  { name: "Clint Barton", email: "hawkeye@oficial-avengers.com", location: "Budapest" },
  { name: "Thor Odinson", email: "thor@oficial-avengers.com", location: "Asgard" },
];

const data_mock_2: any = [
  { name: "Tony Stark", email: "ironman@oficial-avengers.com", location: "Stark Tower" },
  { name: "Steve Rogers", email: "captain.america@oficial-avengers.com", location: "Avengers Building" },
  { name: "Natasha Romanoff", email: "black.widow@oficial-avengers.com", location: "Budapest" },
  { name: "Bruce Banner", email: "hulk@oficial-avengers.com", location: "Stark Tower" },
  { name: "Clint Barton", email: "hawkeye@oficial-avengers.com", location: "Budapest" },
  { name: "Thor Odinson", email: "thor@oficial-avengers.com", location: "Asgard" },
];

// SIMPLE RESULTS EXAMPLE
export const SimpleResult: React.FC<any> = (): ReactElement => {
  const columns: any = [
    { title: "Name", columnKey: "name" },
    { title: "Email", columnKey: "email" },
    { title: "Location", columnKey: "location" },
  ];

  async function fetchTableData() {
    try {
      // Here sould be an API call with await
      const response = data_mock;
      return { count: response?.length, data: response };
    } catch (e) {
      return undefined;
    }
  }

  return <Results columns={columns} defaultColumns={columns} fetchResults={fetchTableData} hideTableConfiguration disablePagination></Results>;
};

export const simple_result = `
import React, { ReactElement } from "react";
import Results from "../../shared/results/results";
import { data_mock } from "./data-mock-file"

const SimpleResult: React.FC<any> = (): ReactElement => {
  const columns: any = [
    { title: "Name", columnKey: "name" },
    { title: "Email", columnKey: "email" },
    { title: "Location", columnKey: "location" },
  ];

  async function fetchTableData() {
    try {
      // Here sould be an API call with await
      const response = data_mock 
      return { count: response?.length, data: response };
    } catch (e) {
      return undefined;
    }
  }

  return <Results columns={columns} defaultColumns={columns} fetchResults={fetchTableData} hideTableConfiguration disablePagination ></Results>;
};

export default SimpleResult
`;

export const data_mock_file = `
export const data_mock = [
  { name: "Tony Stark", email: "ironman@oficial-avengers.com", location: "Stark Tower" },
  { name: "Steve Rogers", email: "captain.america@oficial-avengers.com", location: "Avengers Building" },
  { name: "Natasha Romanoff", email: "black.widow@oficial-avengers.com", location: "Budapest" },
  { name: "Bruce Banner", email: "hulk@oficial-avengers.com", location: "Stark Tower" },
  { name: "Clint Barton", email: "hawkeye@oficial-avengers.com", location: "Budapest" },
  { name: "Thor Odinson", email: "thor@oficial-avengers.com", location: "Asgard" },
];
`;

// FILTER RESULTS EXAMPLE
const perPage = 3;
async function fetchResults(page: number, search: string, order: string, location?: string) {
  let response: any[] = data_mock_2?.map((dm: any) => dm);
  // Filter by location
  if (location && location !== "-1") response = response?.filter((resp: any) => resp?.location === location);
  // Search by name
  response = response?.filter((resp: any) => resp?.name?.toLowerCase()?.includes(search?.toLowerCase()));
  // Order
  const property = order?.split(",")?.[0];
  const direction = order?.split(",")?.[1];
  if (direction === "desc") response?.sort((a, b) => (a?.[property] > b?.[property] ? 1 : b?.[property] > a?.[property] ? -1 : 0));
  else response?.sort((a, b) => (a?.[property] < b?.[property] ? 1 : b?.[property] < a?.[property] ? -1 : 0));
  // Pagination
  response = response?.slice((page - 1) * perPage, page * perPage);
  return response;
}

export const FilterResult: React.FC<any> = (): ReactElement => {
  const columns: any = [
    { title: "Name", columnKey: "name", sortable: true },
    { title: "Email", columnKey: "email", sortable: true },
    { title: "Location", columnKey: "location", sortable: true },
  ];

  async function fetchTableData(filters: any) {
    try {
      const { page, search, sortBy, sortDirection } = filters;
      const order = `${sortBy},${sortDirection}`;
      const response = await fetchResults(page || 1, search || "", order);
      return { count: data_mock_2?.length, data: response };
    } catch (e) {
      return undefined;
    }
  }

  return (
    <Results
      columns={columns}
      defaultColumns={columns}
      fetchResults={fetchTableData}
      defaultFiltersResults={{ perPage, sortBy: "name", sortDirection: "desc" }}
      filterOnChange
      hideTableConfiguration
      hideFiltersSummary
    >
      <div className="data-table-top-toolbar">
        <TextInput className="searchbox-container" type="text" name="search" id="search-input" small placeholder="Search" />
      </div>
    </Results>
  );
};

export const filter_result = `
import React, { ReactElement } from "react";
import Results from "../../shared/results/results";
import { FiltersResults, ORDER_AD_USER_NAME_ASC } from "../../../constants";
import { data_mock, fetchResults } from "./data-mock-file"

const FilterResult: React.FC<any> = (): ReactElement => {
  const perPage = 3;
  const columns: any = [
    { title: "Name", columnKey: "name", sortable: true },
    { title: "Email", columnKey: "email", sortable: true },
    { title: "Location", columnKey: "location", sortable: true },
  ];

  async function fetchTableData(filters: FiltersResults) {
    try {
      const { page, search, sortBy, sortDirection } = filters;
      const order = '{sortBy},{sortDirection}';
      const response = await fetchResults(page || 1, search || "", order || ORDER_AD_USER_NAME_ASC);
      return { count: data_mock?.length, data: response };
    } catch (e) {
      return undefined;
    }
  }

  return (
    <Results
      columns={columns}
      defaultColumns={columns}
      fetchResults={fetchTableData}
      defaultFiltersResults={{ perPage, sortBy: "name", sortDirection: "desc" }}
      filterOnChange
      hideTableConfiguration
      hideFiltersSummary
      
    >
      <div className="data-table-top-toolbar">
        <SearchInput className="searchbox-container" type="text" name="search" id="search-input" small placeholder="Search" />
      </div>
    </Results>
  );
};

export default FilterResult
`;

export const filter_data_mock_file = `
const data_mock = [
  { name: "Tony Stark", email: "ironman@oficial-avengers.com", location: "Stark Tower" },
  { name: "Steve Rogers", email: "captain.america@oficial-avengers.com", location: "Avengers Building" },
  { name: "Natasha Romanoff", email: "black.widow@oficial-avengers.com", location: "Budapest" },
  { name: "Bruce Banner", email: "hulk@oficial-avengers.com", location: "Stark Tower" },
  { name: "Clint Barton", email: "hawkeye@oficial-avengers.com", location: "Budapest" },
  { name: "Thor Odinson", email: "thor@oficial-avengers.com", location: "Asgard" },
];

export async function fetchResults(page: number, search: string, order: string) {
  const perPage = 3;
  let response: any[] = data_mock_2?.map((dm: any) => dm);
  // Search by name
  response = response?.filter((resp: any) => resp?.name?.toLowerCase()?.includes(search?.toLowerCase()));
  // Order
  const property = order?.split(",")?.[0];
  const direction = order?.split(",")?.[1];
  if (direction === "desc") response?.sort((a, b) => (a?.[property] > b?.[property] ? 1 : b?.[property] > a?.[property] ? -1 : 0));
  else response?.sort((a, b) => (a?.[property] < b?.[property] ? 1 : b?.[property] < a?.[property] ? -1 : 0));
  // Pagination
  response = response?.slice((page - 1) * perPage, page * perPage);
  return response;
}
`;

export const ComplexFilterResult: React.FC<any> = (): ReactElement => {
  const columns: any = [
    { title: "Name", columnKey: "name", sortable: true },
    { title: "Email", columnKey: "email", sortable: true },
    { title: "Location", columnKey: "location", sortable: true },
  ];
  const locations = [
    { label: "Asgard", value: "Asgard" },
    { label: "Budapest", value: "Budapest" },
    { label: "Stark Tower", value: "Stark Tower" },
    { label: "Avengers Building", value: "Avengers Building" },
  ];

  const [showFilters, setShowFilters] = useState(false);

  async function fetchTableData(filters: FiltersResults) {
    try {
      const { page, search, sortBy, sortDirection, location } = filters;
      const order = `${sortBy},${sortDirection}`;
      const response = await fetchResults(page || 1, search || "", order, location);
      return { count: data_mock_2?.length, data: response };
    } catch (e) {
      return undefined;
    }
  }

  return (
    <Results
      columns={columns}
      defaultColumns={columns}
      fetchResults={fetchTableData}
      defaultFiltersResults={{ perPage, sortBy: "name", sortDirection: "desc" }}
      filterOnChange
      hideTableConfiguration
      hideFiltersSummary
    >
      <div className="data-table-top-toolbar">
        <TextInput className="searchbox-container" type="text" name="search" id="search-input" small placeholder="Search" />
        {/* <button type="button" className="button-secondary" onClick={() => setShowFilters(!showFilters)}>
          Filters
        </button> */}
      </div>
      {/* {showFilters ? (
        <FilteredSearch>
          <FilteredSearchTopSection>
            <SelectInput name="location">
              <option value={-1}>All Locations</option>
              {locations?.map((role: any) => (
                <option key={role?.value} id={role?.value} value={role?.value}>
                  {role?.label}
                </option>
              ))}
            </SelectInput>
          </FilteredSearchTopSection>
        </FilteredSearch>
      ) : (
        <></>
      )} */}
    </Results>
  );
};

export const complex_filter_result = `
import React, { ReactElement, useState } from "react";
import Results from "../../shared/results/results";
import { FiltersResults, ORDER_AD_USER_NAME_ASC } from "../../../constants";
import { data_mock, fetchResults } from "./data-mock-file"
import { FilteredSearch, FilteredSearchTopSection } from "@adeccoux/tag-ds";
import { SelectInput } from "../../shared/forms";
import { FilterSection } from "./filter-section"

const FilterResult: React.FC<any> = (): ReactElement => {
  const perPage = 3;
  const columns: any = [
    { title: "Name", columnKey: "name", sortable: true },
    { title: "Email", columnKey: "email", sortable: true },
    { title: "Location", columnKey: "location", sortable: true },
  ];

  async function fetchTableData(filters: FiltersResults) {
    try {
      const { page, search, sortBy, sortDirection } = filters;
      const order = '{sortBy},{sortDirection}';
      const response = await fetchResults(page || 1, search || "", order || ORDER_AD_USER_NAME_ASC);
      return { count: data_mock?.length, data: response };
    } catch (e) {
      return undefined;
    }
  }

  return (
    <Results
      columns={columns}
      defaultColumns={columns}
      fetchResults={fetchTableData}
      defaultFiltersResults={{ perPage, sortBy: "name", sortDirection: "desc" }}
      filterOnChange
      hideTableConfiguration
      hideFiltersSummary
      
    >
      <FilterSection />
    </Results>
  );
};

export default FilterResult
`;

export const complex_filter_section = `
import React, { ReactElement, useState } from "react";
import { FilteredSearch, FilteredSearchTopSection } from "@adeccoux/tag-ds";
import { SelectInput } from "../../shared/forms";

const FilterSection: React.FC<any> = (): ReactElement => {
  const locations = [
    { label: "Asgard", value: "Asgard" },
    { label: "Budapest", value: "Budapest" },
    { label: "Stark Tower", value: "Stark Tower" },
    { label: "Avengers Building", value: "Avengers Building" },
  ];

  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <div className="data-table-top-toolbar">
        <SearchInput className="searchbox-container" type="text" name="search" id="search-input" small placeholder="Search" />
        <button type="button" className="button-secondary" onClick={() => setShowFilters(!showFilters)}>
          Filters
        </button>
      </div>
      {showFilters && (
        <FilteredSearch>
          <FilteredSearchTopSection>
            <SelectInput name="location">
              <option value={-1}>All Locations</option>
              {locations?.map((role: any) => (
                <option key={role?.value} id={role?.value} value={role?.value}>
                  {role?.label}
                </option>
              ))}
            </SelectInput>
          </FilteredSearchTopSection>
        </FilteredSearch>
      )}
    </>
  );
};

export default FilterSection
`;

export const complex_filter_data_mock_file = `
const data_mock = [
  { name: "Tony Stark", email: "ironman@oficial-avengers.com", location: "Stark Tower" },
  { name: "Steve Rogers", email: "captain.america@oficial-avengers.com", location: "Avengers Building" },
  { name: "Natasha Romanoff", email: "black.widow@oficial-avengers.com", location: "Budapest" },
  { name: "Bruce Banner", email: "hulk@oficial-avengers.com", location: "Stark Tower" },
  { name: "Clint Barton", email: "hawkeye@oficial-avengers.com", location: "Budapest" },
  { name: "Thor Odinson", email: "thor@oficial-avengers.com", location: "Asgard" },
];

export async function fetchResults(page: number, search: string, order: string, location?: string) {
  const perPage = 3;
  let response: any[] = data_mock_2?.map((dm: any) => dm);
  // Filter by location
  if (location) response = response?.filter((resp: any) => resp?.location === location);
  // Search by name
  response = response?.filter((resp: any) => resp?.name?.toLowerCase()?.includes(search?.toLowerCase()));
  // Order
  const property = order?.split(",")?.[0];
  const direction = order?.split(",")?.[1];
  if (direction === "desc") response?.sort((a, b) => (a?.[property] > b?.[property] ? 1 : b?.[property] > a?.[property] ? -1 : 0));
  else response?.sort((a, b) => (a?.[property] < b?.[property] ? 1 : b?.[property] < a?.[property] ? -1 : 0));
  // Pagination
  response = response?.slice((page - 1) * perPage, page * perPage);
  return response;
}
`;
