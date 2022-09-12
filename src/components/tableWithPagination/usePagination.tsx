import React from "react";
import { useState, useEffect, useCallback, useMemo } from "react";

interface IPaginationState {
  actualPageIdx: number;
  lastPageIdx: any;
  // entriesOnSelectedPage: Array<any>;
  isBusy: boolean;
}

const dummyState = {
  actualPageIdx: 1,
  lastPageIdx: 0,
  isBusy: false,
};

export default function usePagination(
  dataEntries: any,
  elementsOnPage = 10
): [IPaginationState, any, any] {
  const lastPage = useMemo(() => {
    return Math.ceil(dataEntries.length / elementsOnPage);
  }, [dataEntries, elementsOnPage]);
  dummyState.lastPageIdx = lastPage;

  const [paginationState, setPaginationState] = useState(dummyState);
  //

  const firstPageEntries = useMemo(
    () => dataEntries.slice(0, elementsOnPage),
    [dataEntries, elementsOnPage]
  );

  const pageItems = useMemo(() => {
    if (paginationState.actualPageIdx === 1) {
      return firstPageEntries;
    }

    const endIndex = paginationState.actualPageIdx * elementsOnPage;
    const startIndex = endIndex - elementsOnPage;

    return dataEntries.slice(startIndex, endIndex);
  }, [
    paginationState.actualPageIdx,
    elementsOnPage,
    firstPageEntries,
    dataEntries,
  ]);

  const setActualPageIdx = useCallback(
    (pageNumber: number) =>
      setPaginationState((prevState) => {
        let newState = { ...prevState };
        newState.actualPageIdx = pageNumber;
        return newState;
      }),
    []
  );

  const setNewPage = useCallback((page: number) => {
    setPaginationState((prevState) => ({ ...prevState, currentPage: page }));
  }, []);

  const paginationActions = {
    // setNewDataItemsForPage: setNewDataItemsForPage,
    setActualPageIdx: setActualPageIdx,
  };

  // useEffecty 1. asynchroniczne, 2. do synchronizowania UI który zmienia się w czasie, []

  return [paginationState, paginationActions, pageItems];
}
