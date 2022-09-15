import React from "react";

export default function Button({ buttonPage, handler }: any) {
  return (
    <button onClick={() => handler(buttonPage)}>
      {buttonPage}
    </button>
  );
}
