import React from "react";
import { useState, useMemo, useCallback } from "react";
const R = require("ramda");

// // jeśli ten kod tworzący state
// const [value, setter] = useMemoState({ val: 0 });

// // zostanie wywołany w ten sposób i zadziała:
// setter({ val: 0 }); // -> tu zostanie wykonana zmiana stanu

// setter({ val: 0 }); // -> tu nie zostanie wykonana zmiana stanu

// *******************************************************
// *******************************************************
// *******************************************************

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
