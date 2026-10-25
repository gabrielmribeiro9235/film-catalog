import { Link, useLocation } from "react-router-dom"
import "./Menu.css"

function Menu() {
  const location = useLocation()

  return (
    <header className="menu">
      <h2 className="menu-titulo">CATÁLOGO DE FILMES</h2>

      <nav>
        <ul className="menu-lista">
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>INÍCIO</Link></li>
          <li><Link to="/create" className={location.pathname === "/create" ? "active" : ""}>CRIAR</Link></li>
          <li><Link to="/update" className={location.pathname === "/update" ? "active" : ""}>ALTERAR</Link></li>
          <li><Link to="/delete" className={location.pathname === "/delete" ? "active" : ""}>APAGAR</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
