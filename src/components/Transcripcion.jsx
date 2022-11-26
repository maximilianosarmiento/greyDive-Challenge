import React from "react";

export default function Transcripcion(transcripcion) {
  return (
    <div>
    <h2>Transcripción:</h2>
        <p>{transcripcion.transcripcion.replace(/\n/g, "<br />")}</p>
    </div>
  );
}
