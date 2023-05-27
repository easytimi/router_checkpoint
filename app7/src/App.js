import './App.css';
import {useState} from 'react';
import MovieList from "./Components/movieList";
import MovieFilter from './Components/movieFilter';
import AddMovie from './Components/addMovie';
import MovieDetail from './Components/movieDetail';
import {Routes,Route} from 'react-router-dom'

const App = () => {
  const [movie,setMovie]= useState([{
    id:1,
    title:"Ambulance",
    description:"Decorated war veteran Will Sharp is desperate for money because his wife is suffering from cancer and needs urgent experimental surgery...",
    
    postUrl:require('./assets/Ambulance.jpg'),
    rating:"G",
    plot:`Over one day across the streets of L.A., three lives will change forever.
     In this breakneck thriller from director-producer Michael Bay, decorated veteran Will
      Sharp (Emmy winner Yahya Abdul-Mateen II, Candyman, The Matrix Resurrections), 
      desperate for money to cover his wife's medical bills, asks for help from the one
       person he knows he shouldn't--his adoptive brother Danny (Oscar® nominee Jake Gyllenhaal, Zodiac, Spider-Man: Far From Home). A charismatic career criminal, Danny instead offers him a score: the biggest bank heist in Los Angeles history: $32 million. With his wife's survival on the line, Will can't say no. But when their getaway goes spectacularly wrong, the desperate brothers hijack an ambulance with a wounded cop clinging to life and ace EMT Cam Thompson (Eiza González, Fast & Furious Presents: Hobbs & Shaw, Baby Driver) onboard. In a high-speed pursuit that never stops, Will and Danny must evade a massive, city-wide law enforcement response, keep their hostages alive, and somehow try not to kill each other, all while executing the most insane escape L.A.
     has ever seen.`,
    
    trailer:'https://www.youtube.com/watch?v=7NU-STboFeI&t=7s'
  },{
    id:2,
    title:"Devotion",
    description:"The film is based on the description of the book with the same name published in 2015..",
    postUrl:require('./assets/Devotion.jpg'),
    rating:"G",
    plot:`1950. At the outbreak of the Korean war, two US Navy pilots, 
    Ensign Jesse Brown (Majors) — the first Black aviator in US military history — and
     Lieutenant Tom Hudner (Glen Powell), forge a friendship while risking their lives for 
     their country.
    `,
    trailer:'https://www.youtube.com/watch?v=-2qpKUExOnE'
  },{
    id:3,
    title:"Black Panther",
    description:"King T’Challa has been severely ill and the destruction of the heart-shaped herb caused by Killmonger makes it impossible for him to find a cure...",
    postUrl:require('./assets/Panther.webp'),
    rating:"G",
    plot:`Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of 
    Black Panther to defeat his foes and secure the safety of his people and their way of
     life.`,
    trailer:'https://www.youtube.com/watch?v=xjDjIWPwcPU'
  },{
    id:4,
    title:"Bullet Train",
    description:"Ladybug is an agent of a mysterious organization, which entrusts him with tasks beyond the boundaries of legality. ",
    postUrl:require('./assets/Bullet-Train.jpg'),
    rating:"G",
    plot:`Code name, Ladybug, is a hitman who's had difficult times and is working with a 
    therapist to reduce stress in his life and to be more positive. He's actively trying to be less violent. He's given an assignment to steal a briefcase from a moving bullet train. Unfortunately for Ladybug, the case is in the possession of other hitmen. Oh, and there are also several other dangerous people and 1 snake aboard the train. As the journey progresses, the briefcase changes hands several times and the reason so many violent people are on the train becomes apparent. The plot is carried on by 
    the device of sudden cuts to earlier events to explain how the current situation 
    develops.`,
    trailer:'https://www.youtube.com/watch?v=0IOsk2Vlc4o'
  },
])
   let boom= movie.length + 1 ;
  const [detail,setDetail] = useState({
    id:{boom},
    title:'',
    description:'',
    postUrl:'',
    rating:''
  })
  
 

  return (
   
      <div className="App">
        <Routes>
          <Route path='/' element={
          <> 
          <div>
        <MovieFilter movie={movie}/>
        <MovieList  Movie={movie}/>
          </div>
      <div>
        <AddMovie detail={detail} setDetail={setDetail} movie={movie} setMovie={setMovie}  />
      </div></>} />
          <Route path='/:id'  element={<MovieDetail  movie={movie}/>}> </Route>
        </Routes> 
      </div>
      
     
  );
}

export default App;


