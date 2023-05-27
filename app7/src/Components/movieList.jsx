import React from 'react';
import MovieCard from './movieCard';
//import MovieDetail from './movieDetail';
import  '../style.css';
import {Link} from 'react-router-dom';


const MovieList= ({Movie})=>{
    
    
    
    return(
        <div  className="bucket">
           {Movie.map(film=>(<div key={film.id}><Link  to={`/${film.id}`}><MovieCard  film={film} /></Link></div>))}
        </div>
    )
}
export default MovieList;