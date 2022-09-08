import React from "react";
import { useState, useEffect } from "react";

// { actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy }

export default function usePagination(dataEntries: any, elementsOnPage = 50) {
  const defaultState = {
    actualPageIdx: 0,
    lastPageIdx: 0,
    entriesOnSelectedPage: [],
    isBusy: false,
  };

  const testState = {
    actualPageIdx: 1,
    lastPageIdx: 2,
    entriesOnSelectedPage: dataEntries,
    isBusy: false,
  };

  const [paginationState, setPaginationState] = useState(defaultState);

  useEffect(() => {
    setPaginationState(testState);
  }, []);

  return [paginationState, "actions"];
}
