import React from 'react'
import { Link } from 'react-router-dom'

export const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>
      </ol>

    </nav>
  )
}
