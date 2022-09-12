import React from "react";

export default function Button({ buttonPage, handler }: any) {
  return (
    <button key={crypto.randomUUID()} onClick={() => handler(buttonPage)}>
      {buttonPage}
    </button>
  );
}
