import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Início</h1>} />
        <Route path="/create" element={<h1>Criar</h1>} />
        <Route path="/update/:id" element={<h1>Atualizar</h1>} />
        <Route path="/read/:id" element={<h1>Ler</h1>} />
        <Route path="/delete/:id" element={<h1>Excluir</h1>} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
