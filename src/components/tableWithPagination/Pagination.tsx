import React from "react";

export default function Pagination({
  paginationState,
  paginationActions,
}: any) {
  console.log("Start Pagination Component");
  console.log(paginationState);
  return <div>{paginationState.entriesOnSelectedPage.length}</div>;
}
