import React from 'react';
import  '../style.css';
const MovieCard = ({film})=>{
    return(
            <div className="wrap">
                <div className="card">
                    <img src={film.postUrl} alt="moviepix" />
                    <h1>{film.title}</h1>
                    <p>{film.description}</p>
                    

                </div>

            </div>
    )
}
export default MovieCard;