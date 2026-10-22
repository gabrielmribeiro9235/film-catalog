import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./components/Menu";
import Inicio from "./components/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/create" element={<h1>Criar</h1>} />
        <Route path="/update" element={<h1>Atualizar</h1>} />
        <Route path="/read/:id" element={<h1>Ler</h1>} />
        <Route path="/delete" element={<h1>Excluir</h1>} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
