import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ExpenseChart from "./components/ExpenseChart/ExpenseChart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExpenseChart />
  </React.StrictMode>
);
