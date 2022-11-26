import React from 'react'

export default function Header({cliente, tester}) {
  return (
    <div>
        <h1>Cliente: {cliente}</h1>
        <h2>Test: Test de Usabilidad de Sitio Web</h2>
        <h2>Tester: {tester}</h2>
    </div>
  )
}
