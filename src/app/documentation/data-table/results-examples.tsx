"use client";
import Results from "@/components/content/results/results";
import { Component } from "react";
import { SelectInput } from "stepone-ui/forms";

const columnsExample = [
  { title: "Name", columnKey: "title", sortable: true, filterOptions: [] },
  { title: "Category", columnKey: "categoryId", sortable: true, filterOptions: [] },
  { title: "Created by", columnKey: "createdByUser", sortable: true, filterOptions: [], type: "object" },
  { title: "Created on", columnKey: "createdOn", sortable: true, filterOptions: [], type: "date" },
];

export const mockAPICall = async (filters: any) => {
  //in this function you'd usually call the backend to retrieve some data and pass the filters and the shortby
  const _mock_data = [
    { title: "result 1", categoryId: "Ipsum", createdByUser: "Pablo Martín", createdOn: "01/01/2022" },
    { title: "result 2", categoryId: "Ipsum", createdByUser: "John Snow", createdOn: "02/01/2022" },
    { title: "result 3", categoryId: "Ipsum", createdByUser: "Frodo", createdOn: "03/01/2022" },
    { title: "result 4", categoryId: "Lorem", createdByUser: "El Risitas", createdOn: "04/01/2022" },
    { title: "result 5", categoryId: "Dolor", createdByUser: "La Veneno", createdOn: "05/01/2022" },
    { title: "result 1", categoryId: "Ipsum", createdByUser: "Pablo Martín", createdOn: "01/01/2022" },
    { title: "result 2", categoryId: "Ipsum", createdByUser: "John Snow", createdOn: "02/01/2022" },
    { title: "result 3", categoryId: "Ipsum", createdByUser: "Frodo", createdOn: "03/01/2022" },
    { title: "result 4", categoryId: "Lorem", createdByUser: "El Risitas", createdOn: "04/01/2022" },
    { title: "result 5", categoryId: "Dolor", createdByUser: "La Veneno", createdOn: "05/01/2022" },
    { title: "result 1", categoryId: "Ipsum", createdByUser: "Pablo Martín", createdOn: "01/01/2022" },
    { title: "result 2", categoryId: "Ipsum", createdByUser: "John Snow", createdOn: "02/01/2022" },
    { title: "result 3", categoryId: "Ipsum", createdByUser: "Frodo", createdOn: "03/01/2022" },
    { title: "result 4", categoryId: "Lorem", createdByUser: "El Risitas", createdOn: "04/01/2022" },
    { title: "result 5", categoryId: "Dolor", createdByUser: "La Veneno", createdOn: "05/01/2022" },
    { title: "result 1", categoryId: "Ipsum", createdByUser: "Pablo Martín", createdOn: "01/01/2022" },
    { title: "result 2", categoryId: "Ipsum", createdByUser: "John Snow", createdOn: "02/01/2022" },
    { title: "result 3", categoryId: "Ipsum", createdByUser: "Frodo", createdOn: "03/01/2022" },
    { title: "result 4", categoryId: "Lorem", createdByUser: "El Risitas", createdOn: "04/01/2022" },
    { title: "result 5", categoryId: "Dolor", createdByUser: "La Veneno", createdOn: "05/01/2022" },
  ];
  //here we're just mocking a simple category filter
  //this would be the response from the backend
  _mock_data.sort((a: any, b: any) => {
    let nameA: any = a[filters.sortBy],
      nameB: any = b[filters.sortBy];
    const valueA = nameA && typeof nameA === "object" ? nameA.label : nameA;
    const valueB = nameB && typeof nameB === "object" ? nameB.label : nameB;
    if (filters.sortDirection === "asc") {
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
    } else {
      if (valueA > valueB) return -1;
      if (valueA < valueB) return 1;
    }
    return 0;
  });

  let dataBeforePaginaton = _mock_data.filter((item) => !filters.categoryId || item.categoryId === filters.categoryId);
  const start = filters ? filters.page * filters.perPage - filters.perPage : 0;
  const end = filters ? filters.page * filters.perPage : 0;
  const dataAfterPagination = dataBeforePaginaton ? dataBeforePaginaton.slice(start, end) : dataBeforePaginaton;

  return {
    count: dataBeforePaginaton.length,
    data: dataAfterPagination,
  };
};

class ResultsExample extends Component<any> {
  fetchData = async (filters: any) => {
    return await mockAPICall(filters);
  };

  render() {
    return (
      <div className="g-item_16 g-item-tablet_8 g-item-mobile_4 mb8">
        {/* Please check the results PROPS interface for extra options. */}
        <Results filterOnChange={true} columns={columnsExample} itemsPerPage={[2, 5, 10]} defaultColumns={columnsExample} fetchResults={this.fetchData}>
          {/* In this area you can add anything you want, it will appear on top of the table.
          If you add form INPUTS theyll be automatically serialize and sent to fetchResults function as the filters. */}
          <SelectInput label="Sample category filter" name="categoryId">
            <option value="">Select a category</option>
            <option value="Ipsum">Ipsum</option>
            <option value="Lorem">Lorem</option>
            <option value="Dolor">Dolor</option>
          </SelectInput>
        </Results>
      </div>
    );
  }
}
export const result_props = [
  { name: "columns", use: true, type: "Columns", link: true, definition: "The list of collumns that the user has selected to show" },
  { name: "fetchResults", use: true, type: "Function", link: true, definition: "The function that retrieves the data that will be displayed in the results. Needs to be async." },
  { name: "defaultColumns", use: true, type: "any[]", link: true, definition: "the list of all the possible colums" },
  {
    name: "columns",
    link: true,
    use: true,
    type: "any[]",
    definition: "the list of collumns that the user has selected to show",
  },
  {
    name: "fetchResults",
    link: true,
    use: true,
    type: "Function",
    definition: "the function that retrieves the data that will be displayed in the results",
  },
  { name: "clientFiltering", use: false, type: "boolean", link: true, definition: "if you want to do the filtering on the client side and not the backend" },

  {
    name: "filterOnChange",
    link: true,
    use: false,
    type: "boolean",
    definition: "if you want the results to refresh when any input inside it changes or only when submit is triggered",
  },
  {
    name: "updateColumnsConfiguration",
    link: true,
    use: false,
    type: "Function",
    definition: "callback to save the columns configuration",
  },
  {
    name: "children",
    link: true,
    use: false,
    type: "any",
    definition: "these are the components dispayed inside the result form but above the table/grid",
  },
  {
    name: "renderItems",
    link: true,
    use: false,
    type: "Function",
    definition: "method to override how the result items are rendered",
  },
  {
    name: "renderHeader",
    link: true,
    use: false,
    type: "Function",
    definition: "Method to override how the result items are rendered",
  },
  {
    name: "disableURLFilters",
    link: true,
    use: false,
    type: "boolean",
    definition: "disables the URL filters, when a filter changes to add it or not to the URL",
  },
  {
    name: "noFiltersNoFetch",
    link: true,
    use: false,
    type: "boolean",
    definition: "if the filters are empty, avoid to fetch the data and leave the table empty",
  },
  {
    name: "filterResults",
    link: true,
    use: false,
    type: "Function",
    definition: "function to override the filtering when it's client side",
  },
  {
    name: "forceRefresh",
    link: true,
    use: false,
    type: "number",
    definition: "force the refresh of the table, repeating a fetch. Usefull if for instance you modified or removed the data",
  },
  {
    name: "defaultFiltersResults",
    link: true,
    use: false,
    type: "FiltersResults",
    definition: "list of default filters when results is mounted",
  },
  {
    name: "customClientSideSort",
    link: true,
    use: false,
    type: "Function",
    definition: "to override the shorting if it's client side",
  },
  {
    name: "hideTableConfiguration",
    link: true,
    use: false,
    type: "boolean",
    definition: "hides the dropdown that allows the user to change the columns and their order",
  },
  {
    name: "hideFiltersSummary",
    link: true,
    use: false,
    type: "boolean",
    definition: "hides the tags that display the selected filters",
  },
  {
    name: "itemsPerPage",
    link: true,
    use: false,
    type: "number[]",
    definition: "how many items are in each page (for rendering the pagination)",
  },
  {
    name: "disablePagination",
    link: true,
    use: false,
    type: "boolean",
    definition: "removes the pagination",
  },
  {
    name: "showTopScroll",
    link: true,
    use: false,
    type: "boolean",
    definition: "removes the pagination",
  },
  {
    name: "disableFilters",
    link: true,
    use: false,
    type: "boolean",
    definition: "Removes the filtering functionality",
  },
];

export const results_example = `
import Results from "@/components/content/results/results";
import { Component } from "react";
import { SelectInput } from "stepone-ui/forms";

const columnsExample = [
  { title: "Name", columnKey: "title", sortable: true, filterOptions: [] },
  { title: "Category", columnKey: "categoryId", sortable: true, filterOptions: [] },
  { title: "Created by", columnKey: "createdByUser", sortable: true, filterOptions: [], type: "object" },
  { title: "Created on", columnKey: "createdOn", sortable: true, filterOptions: [], type: "date" },
];

export const mockAPICall = async (filters: any) => {
  //in this function you'd usually call the backend to retrieve some data and pass the filters and the shortby
  const _mock_data = [
    { title: "result 1", categoryId: "Ipsum", createdByUser: "Pablo Martín", createdOn: "01/01/2022" },
    { title: "result 2", categoryId: "Ipsum", createdByUser: "John Snow", createdOn: "02/01/2022" },
    { title: "result 3", categoryId: "Ipsum", createdByUser: "Frodo", createdOn: "03/01/2022" },
    { title: "result 4", categoryId: "Lorem", createdByUser: "El Risitas", createdOn: "04/01/2022" },
    { title: "result 5", categoryId: "Dolor", createdByUser: "La Veneno", createdOn: "05/01/2022" },
  ];
  //here we're just mocking a simple category filter
  //this would be the response from the backend
  _mock_data.sort((a: any, b: any) => {
    let nameA: any = a[filters.sortBy],
      nameB: any = b[filters.sortBy];
    const valueA = nameA && typeof nameA === "object" ? nameA.label : nameA;
    const valueB = nameB && typeof nameB === "object" ? nameB.label : nameB;
    if (filters.sortDirection === "asc") {
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
    } else {
      if (valueA > valueB) return -1;
      if (valueA < valueB) return 1;
    }
    return 0;
  });

  let dataBeforePaginaton = _mock_data.filter((item) => !filters.categoryId || item.categoryId === filters.categoryId);
  const start = filters ? filters.page * filters.perPage - filters.perPage : 0;
  const end = filters ? filters.page * filters.perPage : 0;
  const dataAfterPagination = dataBeforePaginaton ? dataBeforePaginaton.slice(start, end) : dataBeforePaginaton;

  return {
    count: dataBeforePaginaton.length,
    data: dataAfterPagination,
  };
};

class ResultsExample extends Component<any> {
  fetchData = async (filters: any) => {
    return await mockAPICall(filters);
  };

  render() {
    return (
      <div className="g-item_16 g-item-tablet_8 g-item-mobile_4 mb8">
        <h3 className="hero mb2">Results</h3>
        {/* Please check the results PROPS interface for extra options. */}
        <Results filterOnChange={true} columns={columnsExample} itemsPerPage={[2, 5, 10]} defaultColumns={columnsExample} fetchResults={this.fetchData}>
          {/* In this area you can add anything you want, it will appear on top of the table.
          If you add form INPUTS theyll be automatically serialize and sent to fetchResults function as the filters. */}
          <SelectInput label="Sample category filter" name="categoryId">
            <option value="">Select a category</option>
            <option value="Ipsum">Ipsum</option>
            <option value="Lorem">Lorem</option>
            <option value="Dolor">Dolor</option>
          </SelectInput>
        </Results>
      </div>
    );
  }
}
`;

export default ResultsExample;
