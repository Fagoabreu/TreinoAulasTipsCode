import React from "react";
import { createRoot } from "react-dom/client";

const name = "Fabio";
const sobrenome = "Abreu";
const luckNumber = Math.floor(Math.random() * 100);

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Olá, {` ${name} ${sobrenome} `}</h1>
    <p>Numero da sorte {luckNumber}</p>
    <h2>Familia</h2>
    <ul>
      <li>Fabio</li>
      <li>Vania</li>
      <li>Vitoria</li>
      <li>Maria</li>
      <li>Lisa</li>
    </ul>
  </div>
);
