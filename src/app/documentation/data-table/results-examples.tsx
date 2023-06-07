"use client";
import Results from "@/components/content/results/results";
import NoSSR from "@/components/shared/notifications/noSSR/noSSR";
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
      <NoSSR>
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
      </NoSSR>
    );
  }
}

export default ResultsExample;
