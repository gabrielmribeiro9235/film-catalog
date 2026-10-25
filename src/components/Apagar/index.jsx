import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Apagar.css";

function Apagar() {
    const navigate = useNavigate();
    const idRef = useRef();
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [conteudo, setConteudo] = useState(null);

    const apagarFilme = (id) => {
        const opcao = confirm("Certeza que quer apagar o filme?");

        if (!opcao) return;

        axios.delete("https://6ada665f7512f497b3ffeafa.mockapi.io/filmes/" + id)
            .then(() => navigate("/"))
            .catch(() => alert("Houve um erro ao apagar o filme"));
    };

    const buscarFilme = (id) => {
        if (!id) return;

        setMostrarInfo(true);
        setConteudo(null);

        axios.get("https://6ada665f7512f497b3ffeafa.mockapi.io/filmes/" + id)
            .then((res) => {
                setConteudo(
                    <div className="apagar-detalhes">
                        <h3 className="apagar-detalhes-titulo">
                            Dados do Filme
                        </h3>

                        <div className="apagar-detalhes-lista">
                            <p>
                                <strong>Nome:</strong>
                                <span>{res.data.nome}</span>
                            </p>

                            <p>
                                <strong>Gênero:</strong>
                                <span>{res.data.genero}</span>
                            </p>

                            <p>
                                <strong>Ano:</strong>
                                <span>{res.data.ano}</span>
                            </p>
                        </div>

                        <div className="apagar-detalhes-botoes">
                            <button
                                type="button"
                                className="apagar-botao-excluir"
                                onClick={() => apagarFilme(id)}
                            >
                                Apagar
                            </button>

                            <button
                                type="button"
                                className="apagar-botao-cancelar"
                                onClick={() => navigate("/")}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                );
            })
            .catch(() => {
                setConteudo(
                    <div className="apagar-erro">
                        <p>Id não encontrado</p>

                        <button
                            type="button"
                            className="apagar-botao-voltar"
                            onClick={() => navigate("/")}
                        >
                            Voltar
                        </button>
                    </div>
                );
            });
    };

    return (
        <div className="apagar-container">
            <h3 className="apagar-titulo">
                Busca e Remoção de Filme
            </h3>

            <div className="apagar-busca">
                <label htmlFor="id">Id:</label>

                <input
                    type="text"
                    id="id"
                    ref={idRef}
                    className="apagar-input-id"
                />

                <div className="apagar-busca-botoes">
                    <button
                        type="button"
                        className="apagar-botao-procurar"
                        onClick={() => buscarFilme(idRef.current.value)}
                    >
                        Procurar
                    </button>

                    <button
                        type="button"
                        className="apagar-botao-cancelar"
                        onClick={() => navigate("/")}
                    >
                        Cancelar
                    </button>
                </div>
            </div>

            {mostrarInfo && conteudo}
        </div>
    );
}

export default Apagar;
