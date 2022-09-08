import React from "react";
import Pagination from "./Pagination";
import Table from "./Table";
import usePagination from "./usePagination";

// const [{ actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy }, { goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage }] = usePagination(dataEntries);

export default function PaginatedTable({ dataItems }: any) {
  console.log("PAGINATED TABLE");
  console.log(dataItems);
  const [paginationState, paginationActions] = usePagination(dataItems, 10);
  console.log(paginationState, paginationActions);
  return (
    <div>
      <Table dataItems={dataItems} header={["Name", "Price"]} />
      <Pagination paginationState={paginationState} paginationActions={""} />
    </div>
  );
}
