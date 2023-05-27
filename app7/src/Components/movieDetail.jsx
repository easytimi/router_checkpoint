import React from 'react';
import '../style.css'
import FilmDetail from './filmDetail';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';



  const MovieDetail= ({movie})=> {
  const params= useParams();
  const navigate= useNavigate();
  const data= params.id;
  const c= Number(data);
  const handleClick= () =>{
        navigate('/',{replace:true})
  }
           
    
    return(
       <div  className="file">
         <div><h1>MOVIE DETAILS</h1></div>
          <div>
                     
           {movie.map((film) =>{
            if(film.id===c){
            return(
            <FilmDetail  key={film.id} film={film} />
            )}})}
                <div className="btn"><button onClick={handleClick}>Go back Home</button></div>   
          </div>

         
                 
        
       </div>
    )
};

export default MovieDetail;