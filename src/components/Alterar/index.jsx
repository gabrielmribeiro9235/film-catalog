import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Alterar.css";

function Alterar() {
    const navigate = useNavigate();
    const idRef = useRef();
    const nomeRef = useRef();
    const generoRef = useRef();
    const anoRef = useRef();
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [conteudo, setConteudo] = useState(null);

    const atualizarFilme = (id) => {
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

        if (
            Number.isNaN(Number(ano)) ||
            !Number.isInteger(Number(ano)) ||
            Number(ano) <= 0
        ) {
            alert("Ano deve ser um valor inteiro positivo");
            return;
        }

        if (Number(ano) < 1888) {
            alert("Não existem filmes com Ano anterior a 1888");
            return;
        }

        if (Number(ano) > new Date().getFullYear()) {
            alert(
                `Ano inválido. Ano atual: ${new Date().getFullYear()} Ano inserido: ${ano}`
            );
            return;
        }

        axios.put("https://6ada665f7512f497b3ffeafa.mockapi.io/filmes/" + id, {
            nome: nome,
            genero: genero,
            ano: ano
        })
            .then(() => navigate("/"))
            .catch(() => alert("Houve um erro ao atualizar o filme"));
    };

    const buscarFilme = (id) => {
        if (!id) return;

        setMostrarInfo(true);
        setConteudo(null);

        axios.get("https://6ada665f7512f497b3ffeafa.mockapi.io/filmes/" + id)
            .then((res) => {
                setConteudo(
                    <form
                        className="alterar-formulario"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="alterar-campo">
                            <label htmlFor="nome">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                ref={nomeRef}
                                defaultValue={res.data.nome}
                                placeholder="Digite o nome do filme"
                            />
                        </div>

                        <div className="alterar-campo">
                            <label htmlFor="genero">Gênero:</label>
                            <input
                                type="text"
                                id="genero"
                                ref={generoRef}
                                defaultValue={res.data.genero}
                                placeholder="Digite o gênero do filme"
                            />
                        </div>

                        <div className="alterar-campo">
                            <label htmlFor="ano">Ano:</label>
                            <input
                                type="text"
                                id="ano"
                                ref={anoRef}
                                defaultValue={res.data.ano}
                                placeholder="Digite o ano do filme"
                            />
                        </div>

                        <div className="alterar-botoes">
                            <button
                                type="button"
                                className="alterar-botao"
                                onClick={() => atualizarFilme(id)}
                            >
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
                );
            })
            .catch(() => {
                setConteudo(
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
                );
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

            {mostrarInfo && conteudo}
        </div>
    );
}

export default Alterar;
