import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppMemo from "./routes/usememo";
import Authtoken from "./components/Authtoken";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="usememo" element={<AppMemo />} />
        </Route>

        {/* AUTH TOKEN */}
        <Route
          path="/secure-link"
          element={
            <Authtoken redirectTo="/login">
              {/* SECURE PAGE */}
              <AppMemo />
            </Authtoken>
          }
        ></Route>
        {/* HANDLE DEFAULT */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>

    {/* <AppAuth />
    <AppMemo /> */}
  </div>
);
