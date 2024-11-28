

import estilo from './home.module.css'
import api from "../../servicos/api"
import { useEffect, useState } from 'react';
function Home(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: 'fedd5ac8d56e70cae9d56193885dba8b',
                    language: 'pt-BR',
                    page: 1
                }
            })
            console.log(response.data.results);
            setFilmes(response.data.results);
        }
    loadFilmes();
    }, [])

    return(
        <div>
           <h1 className={estilo.titulo}>home</h1>
           {filmes.map((filme) => (
            <div key={filme.id}>
                <a href={`/detalhes/${filme.id}`}>
                    <h2>{filme.title}</h2>
                    </a>
                
                
            </div>
           ))}
        </div>
    );
}

export default Home;