

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
        <div className={estilo.corpo}>
           <div className={estilo.bar}>
                <h1 className={estilo.titulo}>Início</h1>
           </div>
           {filmes.map((filme) => (
            <div   className={estilo.filmes}  key={filme.id}>
                <a href={`/detalhes/${filme.id}`}>
                    <h2>{filme.title}</h2>
                    <img className={estilo.foto} src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="" />
                    </a>
                    
                    
                
                
            </div>
           ))}
        </div>
    );
}

export default Home;