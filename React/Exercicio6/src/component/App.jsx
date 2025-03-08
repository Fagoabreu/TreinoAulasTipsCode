import React from "react";
import Heading from "./Heading";
import pi, { multiplePI } from "./Math";
import "./styles.css";

function App() {
  return (
    <div>
      <Heading />
      <div>
        <p>{pi}</p>
        <p>Pi * 3 = {multiplePI(3)}</p>
      </div>
    </div>
  );
}

export default App;
