import React from "react";

export default function Header({ cliente, tester }) {
  return (
    <div className="header container">
      <h1 className="titulo">Cliente: {cliente}</h1>
      <h2 className="subtitulo">Test: Test de Usabilidad de Sitio Web</h2>
      <h2 className="subtitulo">Tester: {tester}</h2>
    </div>
  );
}
