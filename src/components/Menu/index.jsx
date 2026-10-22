
import { Link } from "react-router-dom"
import "./Menu.css"

function Menu() {
  return (
    <header className="menu">
      <h2 className="menu-titulo">CATÁLOGO DE FILMES</h2>

      <nav>
        <ul className="menu-lista">
          <li><Link to="/">INÍCIO</Link></li>
          <li><Link to="/create">CRIAR</Link></li>
          <li><Link to="/update">ALTERAR</Link></li>
          <li><Link to="/delete">APAGAR</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
