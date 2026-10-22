import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import axios from 'axios';
import './Criar.css';

function Criar() {
    const navigate = useNavigate();

    const nomeRef = useRef();
    const generoRef = useRef();
    const anoRef = useRef();

    const criarFilme = () => {
        const nome = nomeRef.current.value;
        const genero = generoRef.current.value;
        const ano = anoRef.current.value;

        if (!nome) {
            alert("O Nome não pode ser vazio");
            return;
        }

        if (!genero) {
            alert("O Gênero não pode ser vazio");
            return;
        }

        if (!ano) {
            alert("O Ano não pode ser vazio");
            return;
        }

        if (Number.isNaN(Number(ano)) || !Number.isInteger(Number(ano)) || Number(ano) <= 0) {
            alert("Ano deve ser um valor inteiro positivo")
            return;
        }

        if (Number(ano) < 1888) {
            alert("Não existem filmes com Ano anterior a 1888")
            return;
        }

        if (Number(ano) > new Date().getFullYear()) {
            alert(`Ano ínvalido. Ano atual: ${new Date().getFullYear()} Ano inserido: ${ano}`);
            return;
        }

        axios.post("https://6ada665f7512f497b3ffeafa.mockapi.io/filmes", {
            "nome": nome,
            "genero": genero,
            "ano": ano
        }).then(() => navigate("/"))
        .catch(() => alert("Houve um erro ao criar o novo filme"));
    }

    return (
        <form className="form-criar" onSubmit={(e) => e.preventDefault()}>
            <h3 className="form-criar-titulo">Criar Filme</h3>

            <div className="form-criar-campo">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" ref={nomeRef} placeholder="Digite o nome do filme" />
            </div>

            <div className="form-criar-campo">
                <label htmlFor="genero">Gênero:</label>
                <input type="text" id="genero" ref={generoRef} placeholder="Digite o gênero do filme" />
            </div>

            <div className="form-criar-campo">
                <label htmlFor="ano">Ano:</label>
                <input type="text" id="ano" ref={anoRef} placeholder="Digite o ano do filme" />
            </div>

            <div className="form-criar-botoes">
                <button type="button" className="botao-criar" onClick={() => criarFilme()}>
                    Criar
                </button>
                <button type="button" className="botao-cancelar" onClick={() => navigate("/")}>
                    Cancelar
                </button>
            </div>
        </form>
    )
}

export default Criar