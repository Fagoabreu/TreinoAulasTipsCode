import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const hourNow = new Date().getHours();

let message;
let customStyle = {
  color: "black",
};

if (hourNow <= 12) {
  message = "bom dia!";
  customStyle.color = "red";
} else if (hourNow <= 18) {
  message = "Boa tarde!";
  customStyle.color = "green";
} else {
  message = "Boa noite!";
  customStyle.color = "blue";
}

root.render(
  <StrictMode>
    <h1 className="title" style={customStyle}>
      {message}
    </h1>
  </StrictMode>
);
