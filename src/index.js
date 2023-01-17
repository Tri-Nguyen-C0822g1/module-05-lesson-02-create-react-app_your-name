import React from "react";
import ReactDOM from "react-dom/client";

const name = "Son chan thu";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement("h1", { style: { textAlign: "center" } }, name)
);