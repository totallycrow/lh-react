import React from "react";
import { useState, useEffect, useCallback } from "react";

interface IPaginationState {
  actualPageIdx: number;
  lastPageIdx: any;
  entriesOnSelectedPage: Array<any>;
  isBusy: boolean;
}

export default function usePagination(
  dataEntries: any,
  elementsOnPage = 10
): [IPaginationState, any] {
  const dummyState = {
    actualPageIdx: 0,
    lastPageIdx: 0,
    entriesOnSelectedPage: [],
    isBusy: false,
  };

  // MEMOIZE FUNCTIONS / VARIABLES?
  const allEntries = dataEntries.slice(0);

  const getTotalPagesCount = (maxElements: number, dataSet: Array<any>) =>
    Math.ceil(dataSet.length / maxElements);

  const getFirstPageEntries = () => allEntries.slice(0, elementsOnPage);

  const getPageItems = (
    page: number,
    maxElements: number,
    dataSet: Array<any>
  ) => {
    if (page === 1) {
      return getFirstPageEntries();
    }

    const endIndex = page * maxElements;
    const startIndex = endIndex - maxElements;

    return allEntries.slice(startIndex, endIndex);
  };

  const [paginationState, setPaginationState] = useState(dummyState);

  const setActualPageIdx = (pageNumber: number) =>
    setPaginationState((prevState) => {
      let newState = { ...prevState };
      newState.actualPageIdx = pageNumber;
      return newState;
    });

  const setNewDataItemsForPage = (page: number) => {
    const newData = getPageItems(page, elementsOnPage, allEntries);

    setPaginationState((prevState) => {
      let newState = { ...prevState };
      newState.entriesOnSelectedPage = newData;
      return newState;
    });
  };

  // FIRST RENDER
  useEffect(() => {
    const initialState = {
      actualPageIdx: 1,
      lastPageIdx: getTotalPagesCount(elementsOnPage, allEntries),
      entriesOnSelectedPage: getFirstPageEntries(),
      isBusy: false,
    };
    setPaginationState(initialState);
  }, []);

  // ON PAGE CHANGE
  useEffect(() => {
    setNewDataItemsForPage(paginationState.actualPageIdx);
  }, [paginationState.actualPageIdx]);

  const paginationActions = {
    setNewDataItemsForPage: setNewDataItemsForPage,
    setActualPageIdx: setActualPageIdx,
  };

  return [paginationState, paginationActions];
}
