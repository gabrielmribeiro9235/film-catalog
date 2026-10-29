import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import axios from 'axios';
import validarFilme from '../../utils/validarFilme';
import './Criar.css';

function Criar() {
    const navigate = useNavigate();

    const nomeRef = useRef();
    const generoRef = useRef();
    const anoRef = useRef();

    const criarFilme = (event) => {
        event.preventDefault();

        const nome = nomeRef.current.value;
        const genero = generoRef.current.value;
        const ano = anoRef.current.value;

        const erro = validarFilme(nome, genero, ano);

        if (erro) {
            alert(erro);
            return;
        }

        axios.post("https://6ada665f7512f497b3ffeafa.mockapi.io/filmes", {
            "nome": nome,
            "genero": genero,
            "ano": Number(ano)
        }).then(() => navigate("/"))
        .catch(() => alert("Houve um erro ao criar o novo filme"));
    }

    return (
        <form className="form-criar" onSubmit={criarFilme}>
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
                <button type="submit" className="botao-criar">
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