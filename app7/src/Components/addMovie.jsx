import React from 'react';
import {useState} from 'react';
import '../style.css'


const AddMovie= ({detail,setDetail,movie,setMovie}) =>{
    
  const [show,setShow]= useState(false);
  const handleShow= () => {
    setShow(!show)
  }; 
  const handleChange= (e) =>{
    const {name,value}= e.target;
    setDetail((prev) => {return{...prev,[name]:value }} )

  } 
  const formSubmit= (e) => {
    e.preventDefault()
    setMovie((movie) =>{return([...movie,detail])})

  } 
        
    return(
      <div >
        <div><button onClick={handleShow}>addmovie</button></div>
        <div  >
          <form className={show?"kit":"kat"} onSubmit={formSubmit}>
            <label >title:</label>
            <input  type="text" name="title"  onChange={handleChange}/>
            <br />
            <br />
            <label >description:</label>
            <textarea  type="text" name="description"  onChange={handleChange} />
            <br />
            <br />
            <label >Url:</label>
            <input type="string" name="postUrl"  onChange={handleChange}/>
            <br />
            <br />
            <label for="rating">choose rating:</label>
            <select name='rating' id='rating'  onChange={handleChange}>
              <option value='PG'>PG</option>
              <option valu='G'>G</option>
              <option value='R'>R</option>
              <option value='PG-13'>PG-13</option>
            </select>
            <br />
            <br />
            <button onClick={formSubmit}>clicksubmit </button>
          </form>
        </div>
      </div>
    )
      }
  export default AddMovie;