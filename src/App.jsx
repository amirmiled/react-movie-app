import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoviesList from './MoviesList'
import { useState } from 'react'
import Search from './Search'


function App() {
  const [newRate,setNewRate] = useState(1)
  const [keysearch, setKeysearch] = useState("")
  const[movies,setMovies]= useState([

    { id:1,
      main_img:
        "https://oblikon.net/wp-content/uploads/squid_game_front.jpg",
      second_img:
        "https://www.apple.com/tv-pr/shows-and-films/g/ghosted/images/show-home-graphic-header/key-art-01/4x1/ATV_Ghosted_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1679921867918",
    title:"Squid Game",
    duration:"349min",
    date:"2025",
    Creator:"sang",
    rate:6,
    genre:"action , suspense",
    description:"Squid Game is a South Korean series where contestants risk their lives in deadly games to win a massive cash prize.", 
    trailer:"https://www.youtube.com/watch?v=IAdCsNtEuBU"
  },
    { id:2,
        main_img:
          "https://fr.web.img5.acsta.net/c_310_420/pictures/23/03/07/10/22/0062410.jpg",
        second_img:
          "https://www.apple.com/tv-pr/shows-and-films/g/ghosted/images/show-home-graphic-header/key-art-01/4x1/ATV_Ghosted_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1679921867918",
      title:"Ghosted",
      duration:"154min",
      date:"2022",
      Creator:"amir",
      rate:2,
      genre:"action , romance",
      description:"Ghosted est un film réalisé par Dexter Fletcher avec Ana de Armas", 
      trailer:"https://www.youtube.com/watch?v=IAdCsNtEuBU"
    },

    { id:3,
      main_img:
        "https://fr.web.img6.acsta.net/pictures/23/02/10/10/56/3228985.jpg",
      second_img:
        "https://www.justgeek.fr/wp-content/uploads/2022/10/creed-3-film-bande-annonce-550x309.jpg",
    title:"creed 3",
    duration:"140min",
    date:"2020",
    Creator:"amir",
    rate:4,
    genre:"sport , drame",
    description:"Synopsis. Idole de la boxe et entouré de sa famille, Adonis Creed n'a plus rien à prouver", 
  },

  { id:4,
    main_img:
      "https://fr.web.img6.acsta.net/pictures/23/01/20/12/15/5780701.jpg",
    second_img:
      "https://static.standard.co.uk/2023/01/19/16/scream6.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
  title:"scream 6",
  duration:"130min",
  date:"2023",
  Creator:"amir",
  rate:5,
  genre:"horreur",
  description:"One year after the Woodsboro killings orchestrated by Richie Kirsch and Amber Freeman,", 
},
  ])
  const search =(text)=>{
    setKeysearch(text)
  }
const setRate=(rate)=>{
  setNewRate(rate)

}

const addMovie = (movie) => {
  setMovies(movies.concat(movie));
  handleClose();
};

  return (
      <div className='App'>
      <Search search={search} setRate={setRate} newRate={newRate}/>
      <MoviesList addMovie={addMovie} movies={movies.filter( el=> el.rate>= newRate && el.title.toLowerCase().includes(keysearch.toLowerCase().trim()))}/>
      </div>
  );
}

export default App 


