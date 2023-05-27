import React from 'react';
import '../style.css'
import{useState} from 'react';


const MovieFilter= ({movie,setMovie})=>{
    const [data,setData]= useState({title:"",rating:""});
    const [seen,setSeen]= useState(false);
    const[clear,setClear] = useState(false);
    const [kurd,setKurd] = useState(false)
     
    const handleSelect= (e) =>{
        const{name,value}=e.target
        e.target.value==='Rating'?setClear(true):setSeen(true)
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
       const {name,value}=e.target
       setData((prev)=>{return{...prev,[name]:value}})
    }
    const filteredFilm= movie.filter(film=>{return film.title===data.title})

    return(
        <div>
            <div className='bolt'>
             <form action="" onSubmit ={handleSubmit}>
                 <label for="moviesearch">MovieSearch:</label>
                 <select name="moviesearch" id="moviesearch"  placeholder="search" onChange={handleSelect}>
                     <option value="">please select</option>
                     <option value="Title">Title</option>
                     <option value="Rating">Rating</option>
                 </select>
                 <label  for="title" className={seen?"labT":"labF"} >Title:</label>
                 <input type="text" name='title' className={seen?"inpT":"inpF"} onChange={handleSubmit} />
                 <label for="Rating" className={clear?"belT":"belF"}>Rating</label>
                 <select name="rating" id="Rating"  className={clear?"selT":"selF"} onChange={handleSubmit}>
                     <option value="">please select</option>
                     <option value="G">G</option>
                     <option value="G">PG</option>
                     <option value="PG-13">PG-13</option>
                     <option value="R">R</option>
                 </select>
                 <button  className={ seen||clear?"btnT":"btnF"} onClick={handleSubmit} >submit</button>
               
              </form>
            </div>
            

            
        </div>

    )
}
export default MovieFilter;