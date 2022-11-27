import React from "react";

export default function Tareas({ tareas, escenario }) {
  console.log(tareas);
  console.log(escenario);
  return (
    <div className="container">
      <h2 className="titulo">Escenario:</h2>
      <h3 className="subtitulo">{escenario}</h3>
      <h2 className="titulo">Tareas:</h2>

      <div >
        {tareas.map((tarea, index) => {
          return (
            <div className="tareasContainer" key={index}>
              <h3 className="titulo">Tarea {index + 1}</h3>
              <p className="subtitulo">{tarea.texto}</p>
              <p className="tiempoTarea">Tiempo de tarea: {tarea.tiempo}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
