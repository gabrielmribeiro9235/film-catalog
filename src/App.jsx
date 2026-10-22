import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./components/Menu";
import Inicio from "./components/Inicio";
import Criar from "./components/Criar";
import Ler from "./components/Ler";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/create" element={<Criar />} />
        <Route path="/update" element={<h1>Atualizar</h1>} />
        <Route path="/read/:id" element={<Ler />} />
        <Route path="/delete" element={<h1>Excluir</h1>} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
