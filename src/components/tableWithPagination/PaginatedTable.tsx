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

// const [{ actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy }, { goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage }] = usePagination(dataEntries);

export default function PaginatedTable({ dataItems }: any) {
  console.log("PAGINATED TABLE");
  console.log(dataItems);
  const [paginationState, paginationActions] = usePagination(dataItems, 5);
  console.log(paginationState, paginationActions);

  console.log("PAGINATION STATE");
  console.log(paginationState);

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
