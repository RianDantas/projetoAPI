

import estilo from './home.module.css'
import api from "../../servicos/api"
import { useEffect, useState } from 'react';
function Home() {

    const [filmes, setFilmes] = useState([]);
    const [pesquisa, setpesquisa] = useState();

    function handleInputChange(e) {
        e.preventDefault();

        console.log(e.target[0].value)
        setpesquisa(e.target[0].value)
    }

    async function pesquisaFilmes(e) {

        const response = await api.get(`search/movie?query=${pesquisa}`, {
            params: {
                api_key: 'fedd5ac8d56e70cae9d56193885dba8b',
                language: 'pt-BR',
                page: 1
            }
        })
        console.log(response.data.results);
        setFilmes(response.data.results);
    }


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

    useEffect(() => {
        if (pesquisa) {
            pesquisaFilmes();
        } else {
            loadFilmes();
        }


    }, [pesquisa])


    return (
        <div className={estilo.corpo}>
            <div className={estilo.bar}>
                <h1 className={estilo.titulo}>Início</h1>

                <form onSubmit={(e) => handleInputChange(e)} className='search'>
                    <input type="text" placeholder='Pesqueisar' id='search' />
                    <input type="submit" />
                </form>

            </div>
            {filmes.map((filme) => (
                
                <div className={estilo.filmes} key={filme.id}>
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