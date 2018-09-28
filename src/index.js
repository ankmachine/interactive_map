import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Heading from "./Heading";
import SvgClick from "./SvgClick";

function App() {
  return (
    <div className="App">
      <Heading />
      <SvgClick />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
