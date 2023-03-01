import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NavBar } from "./App";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);
