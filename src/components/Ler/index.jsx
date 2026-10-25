
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Ler.css';

function Ler() {
    const navigate = useNavigate();
    const [filme, setFilme] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get("https://6ada665f7512f497b3ffeafa.mockapi.io/filmes/" + id)
            .then(res => setFilme(res.data))
            .catch(() => navigate("/notfound"));
    }, []);

    return (
        <div className="ler">
            <h3 className="ler-titulo">Detalhes do Filme</h3>

            <div className="ler-detalhes">
                <p><strong>Nome:</strong><span>{filme?.nome}</span></p>
                <p><strong>Gênero:</strong><span>{filme?.genero}</span></p>
                <p><strong>Ano:</strong><span>{filme?.ano}</span></p>
            </div>

            <button
                type="button"
                className="botao-voltar"
                onClick={() => navigate("/")}
            >
                Voltar
            </button>
        </div>
    )
}

export default Ler
