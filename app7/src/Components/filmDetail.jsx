import '../style.css'
import ReactPlayer from 'react-player';

const FilmDetail= ({film}) =>{
    return(
        <div>
            <div className="file">
              {
               <>
               <img src={film.postUrl} alt="moviepix" />
               <h2>{film.plot}</h2>
               <div>
              <ReactPlayer url={`${film.trailer}`}controls={true}/>
               
               </div>
               
               
               </>
                
                   
              }  
            
            </div>
        </div>

    )
}

export default  FilmDetail;