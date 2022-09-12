import React from "react";
import Pagination from "./Pagination";
import Table from "./Table";
import usePagination from "./usePagination";

interface IPaginationState {
  actualPageIdx: number;
  lastPageIdx: any;
  // entriesOnSelectedPage: Array<any>;
  isBusy: boolean;
}

export default function PaginatedTable({ dataItems }: any) {
  const [paginationState, paginationActions, pageItems] = usePagination(
    dataItems,
    5
  );

  console.log("FIRST PAGE ENTRIES");
  console.log(pageItems);

  return (
    <div>
      <Table dataItems={pageItems} header={["Name", "Price"]} />
      <Pagination
        paginationState={paginationState}
        paginationActions={paginationActions}
      />
    </div>
  );
}
