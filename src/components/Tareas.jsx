import React from 'react'

export default function Tareas({tareas,escenario}) {
  console.log(tareas)
  console.log(escenario)
  return (
    <div>
        <h2>Escenario:</h2>
        <h3>{escenario}</h3>
        <h2>Tareas</h2>

      {tareas.map( (tarea, index) => {
        return (
        <div key={index}>
          <h3>tarea {index+1}</h3>
          <p>{tarea.texto}</p>
          <p>Tiempo de tarea: {tarea.tiempo}</p>
        </div>
        )
        
      })}
    </div>
    
  )
}
