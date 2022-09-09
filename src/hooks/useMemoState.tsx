import React from "react";
import { useState, useMemo, useCallback } from "react";
const R = require("ramda");

const useMemoState = <T,>(initialState: T): [T, Function] => {
  const [data, setData] = useState<T>(initialState);

  const memoSetState = useCallback(
    (val: T) => {
      console.log("set state triggered");
      // Validate
      if (!val || !data) throw new Error("error");

      if (!R.equals(val, data)) {
        setData(val);
        console.log("SetState fired");
      } else {
        console.log("SetState ignored");
      }
    },
    [data]
  );
  return [data, memoSetState];
};

export default useMemoState;
