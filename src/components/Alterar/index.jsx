import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import validarFilme from "../../utils/validarFilme";
import "./Alterar.css";

function Alterar() {
    const navigate = useNavigate();
    const idRef = useRef();
    const nomeRef = useRef();
    const generoRef = useRef();
    const anoRef = useRef();
    const [filme, setFilme] = useState(null);
    const [erroBusca, setErroBusca] = useState(false);

    const atualizarFilme = (event) => {
        event.preventDefault();

        const nome = nomeRef.current.value;
        const genero = generoRef.current.value;
        const ano = anoRef.current.value;

        const erro = validarFilme(nome, genero, ano);

        if (erro) {
            alert(erro);
            return;
        }

        axios.put("https://6ada665f7512f497b3ffeafa.mockapi.io/filmes/" + filme.id, {
            nome: nome,
            genero: genero,
            ano: Number(ano)
        })
            .then(() => navigate("/"))
            .catch(() => alert("Houve um erro ao atualizar o filme"));
    };

    const buscarFilme = (id) => {
        if (!id) return;

        setFilme(null);
        setErroBusca(false);

        axios.get("https://6ada665f7512f497b3ffeafa.mockapi.io/filmes/" + id)
            .then((res) => {
                setFilme(res.data);
            })
            .catch(() => {
                setErroBusca(true);
            });
    };

    return (
        <div className="alterar-container">
            <h3 className="alterar-titulo">Busca e Edição de Filme</h3>

            <div className="alterar-busca">
                <label htmlFor="id">Id:</label>
                <input
                    type="text"
                    id="id"
                    ref={idRef}
                    className="alterar-input-id"
                />

                <div className="alterar-botoes-busca">
                    <button
                        type="button"
                        className="alterar-botao"
                        onClick={() => buscarFilme(idRef.current.value)}
                    >
                        Procurar
                    </button>

                    <button
                        type="button"
                        className="alterar-botao-cancelar"
                        onClick={() => navigate("/")}
                    >
                        Cancelar
                    </button>
                </div>
            </div>

            {filme && (
                <form className="alterar-formulario" onSubmit={atualizarFilme}>
                    <div className="alterar-campo">
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            ref={nomeRef}
                            defaultValue={filme.nome}
                            placeholder="Digite o nome do filme"
                        />
                    </div>

                    <div className="alterar-campo">
                        <label htmlFor="genero">Gênero:</label>
                        <input
                            type="text"
                            id="genero"
                            ref={generoRef}
                            defaultValue={filme.genero}
                            placeholder="Digite o gênero do filme"
                        />
                    </div>

                    <div className="alterar-campo">
                        <label htmlFor="ano">Ano:</label>
                        <input
                            type="text"
                            id="ano"
                            ref={anoRef}
                            defaultValue={filme.ano}
                            placeholder="Digite o ano do filme"
                        />
                    </div>

                    <div className="alterar-botoes">
                        <button type="submit" className="alterar-botao">
                            Alterar
                        </button>

                        <button
                            type="button"
                            className="alterar-botao-cancelar"
                            onClick={() => navigate("/")}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            )}

            {erroBusca && (
                <div className="alterar-erro">
                    <p>Id não encontrado</p>
                    <button
                        type="button"
                        className="alterar-botao-voltar"
                        onClick={() => navigate("/")}
                    >
                        Voltar
                    </button>
                </div>
            )}
        </div>
    );
}

export default Alterar;
