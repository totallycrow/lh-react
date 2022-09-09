import React from "react";
import Pagination from "./Pagination";
import Table from "./Table";
import usePagination from "./usePagination";

interface IPaginationState {
  actualPageIdx: number;
  lastPageIdx: any;
  entriesOnSelectedPage: Array<any>;
  isBusy: boolean;
}

export default function PaginatedTable({ dataItems }: any) {
  const [paginationState, paginationActions] = usePagination(dataItems, 5);

  return (
    <div>
      <Table
        dataItems={paginationState.entriesOnSelectedPage}
        header={["Name", "Price"]}
      />
      <Pagination
        paginationState={paginationState}
        paginationActions={paginationActions}
      />
    </div>
  );
}
