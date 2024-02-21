import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "./components/application";

import { BrowserRouter, HashRouter } from "react-router-dom";

import { ErnaNews } from "./components/ernaNews";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>,
);
