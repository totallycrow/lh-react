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
      <button onClick={() => handleOnClick(1)}>First Page</button>
    );

    const lastPageButton = (
      <button onClick={() => handleOnClick(lastPageIndex)}>
        lastPageIndex
      </button>
    );

    buttonsArray.push(firstPageButton);

    for (let i = 2; i < paginationState.lastPageIdx; i++) {
      buttonsArray.push(<button onClick={() => handleOnClick(i)}>{i}</button>);
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
