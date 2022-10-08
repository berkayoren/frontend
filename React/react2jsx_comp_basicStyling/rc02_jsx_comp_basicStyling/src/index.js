import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
import "./index.css";

const element = () => {
  return (
    <>
      <h1>Hello React</h1>
      <p>Merhaba</p>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element());
