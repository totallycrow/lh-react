import React from "react";

export default function Pagination({
  paginationState,
  paginationActions,
}: any) {
  const handleOnClick = (page: number) => {
    paginationActions.setActualPageIdx(page);
  };

  const generateButtons = () => {
    let buttonsArray = [];
    const lastPageIndex = paginationState.lastPageIdx;

    const firstPageButton = (
      <button key="first-page-button" onClick={() => handleOnClick(1)}>
        First Page
      </button>
    );

    const lastPageButton = (
      <button
        key="last-page-button"
        onClick={() => handleOnClick(lastPageIndex)}
      >
        lastPageIndex
      </button>
    );

    buttonsArray.push(firstPageButton);

    // KEY FOR BUTTONS?
    for (let i = 2; i < paginationState.lastPageIdx; i++) {
      buttonsArray.push(
        <button key={crypto.randomUUID()} onClick={() => handleOnClick(i)}>
          {i}
        </button>
      );
    }

    buttonsArray.push(lastPageButton);
    return buttonsArray;
  };

  return (
    <>
      <div>Select Page</div>
      {generateButtons()}
    </>
  );
}
