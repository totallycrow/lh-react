import React from "react";
import { useState, useMemo, useCallback, useEffect } from "react";
import "../App.css";
import useMemoState from "../hooks/useMemoState";

const R = require("ramda");

// MAIN APP // TESTING

function AppMemo() {
  console.log("Render from App");

  const mockDefaultState = { val: 5 };
  const mockNewState = { val: 6 };
  const mockNewState2 = { val: 56 };

  const [state, setState] = useMemoState(mockDefaultState);

  console.log("DEFAULT STATE: ");
  console.log(state);

  useEffect(() => {
    // OK
    if (typeof setState === "function") {
      setState(mockDefaultState);
    }
    // OK
    if (typeof setState === "function") {
      setState(mockNewState);
    }

    if (typeof setState === "function") {
      setState(mockNewState2);
    }
  }, []);

  return (
    <div className="App">
      <h1>TEST</h1>
      <div>
        <>State: {state.val}</>
      </div>
    </div>
  );
}

export default AppMemo;
