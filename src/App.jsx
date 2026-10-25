import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./components/Menu";
import Inicio from "./components/Inicio";
import Criar from "./components/Criar";
import Ler from "./components/Ler";
import Alterar from "./components/Alterar";
import Apagar from "./components/Apagar";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/create" element={<Criar />} />
        <Route path="/update" element={<Alterar />} />
        <Route path="/read/:id" element={<Ler />} />
        <Route path="/delete" element={<Apagar />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
