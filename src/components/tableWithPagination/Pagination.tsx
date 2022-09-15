import React from "react";
import Button from "./Button";

export default function Pagination({
  paginationState,
  paginationActions,
}: any) {
  const handleOnClick = (page: number) => {
    paginationActions.setActualPageIdx(page);
  };

  console.log("PAGINATION COMPONENT");

  console.log(paginationState);
  const lastPageIndex = paginationState.lastPageIdx;
  console.log(lastPageIndex);
  const buttonsIndexes = Array.from(
    { length: lastPageIndex },
    (element, i) => i + 1
  );

  console.log(buttonsIndexes);

  return (
    <>
      <div>Select Page</div>
      <div>
        {buttonsIndexes.map((index) => (
          <Button
            key={crypto.randomUUID()}
            buttonPage={index}
            handler={() => handleOnClick(index)}
          />
        ))}
      </div>
    </>
  );
}
