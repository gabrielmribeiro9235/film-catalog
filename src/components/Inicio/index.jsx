
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Inicio.css'

function Inicio() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        axios.get("https://6ada665f7512f497b3ffeafa.mockapi.io/filmes")
            .then((res) => res.data)
            .then((data) => setFilmes(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <ul className="filmes-lista">
            {filmes.map(filme => (
                <Link key={filme.id} to={"/read/" + filme.id} className="filme-link">
                    <li className="filme-item">
                        <span className="filme-id"><strong>Id:</strong> {filme.id}</span>
                        <span className="filme-nome"><strong>Nome:</strong> {filme.nome}</span>
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default Inicio
