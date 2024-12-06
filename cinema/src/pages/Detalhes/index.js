import { useEffect, useState } from 'react';
import api from "../../servicos/api"
import { useParams } from 'react-router-dom';

function Detalhes(){

    const [filme, setFilme] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        async function loadFilme() {
            const response = await api.get(`movie/${id}`, {
                params: {
                    api_key: 'fedd5ac8d56e70cae9d56193885dba8b',
                    language: 'pt-BR',
                    page: 1
                }
            })
            // console.log(response.data);
            response.data.genres?.map((item)=>{
                console.log(item.name)
            })
            setFilme(response.data);
        }
    loadFilme();
    }, [])

    return(
        <div>
           <h1>{filme.title}</h1>

           <img src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`} alt="" />
                {/* <p>{filme.backdrop_path}</p> */}
                <h3>{filme.release_date}</h3>
                <h3>{filme.overview}</h3>


             {filme.genres?.map((item)=>{
                    return (
                        <>
                        <p>{item.name}</p>
                        </>
                    )
                })} 

                
        </div>
    );
}

export default Detalhes;
