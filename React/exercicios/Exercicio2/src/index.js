import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const nome = "Fabio Abreu";
const ano = new Date().getFullYear();
const img = "https://picsum.photos/200";

root.render(
  <StrictMode>
    <div>
      <h1 className="title" contentEditable="true" spellCheck="false">
        Minha Familia
      </h1>
      <img src={img + "?blur"} alt="foto aleatoria" />
      <ul>
        <li>Vania</li>
        <li>Fabio</li>
        <li>Vitoria</li>
        <li>Maria</li>
        <li>Lisa</li>
      </ul>
      <p>Criado por {nome}</p>
      <p>Copyright {ano}</p>
    </div>
  </StrictMode>
);
