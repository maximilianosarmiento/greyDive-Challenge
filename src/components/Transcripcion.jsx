import React from "react";

export default function Transcripcion(transcripcion) {
  return (
    <div className="container">
      <h2 className="titulo">Transcripción:</h2>
      <p className="parrafoTranscripcion">
        {transcripcion.transcripcion.replace(/<br\s*[/]?>/gi, "\n")}
      </p>
    </div>
  );
}
