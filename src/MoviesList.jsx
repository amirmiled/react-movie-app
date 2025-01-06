import React, { useState } from 'react'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Add';
import { Button } from 'react-bootstrap';



const MoviesList = ({movies,addMovie}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <div>
    <br/><br/><br/>
    <Button variant="success" onClick={handleShow}>Add Movie</Button>
    <Add  addMovie={addMovie} show={show} handleClose={handleClose}/>
    {movies.map( el => <MovieCard movie={el}/>)}
    </div>
  )
}

export default MoviesList


