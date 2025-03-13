import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "blue";

root.render(
  <StrictMode>
    <h1 style={customStyle}>Fabio Abreu</h1>
  </StrictMode>
);
