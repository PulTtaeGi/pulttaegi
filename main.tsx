import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./ErrorPage";
import First from "./First";
import Second from "./Second";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Second/>
  </React.StrictMode>
);
