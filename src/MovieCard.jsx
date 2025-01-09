import React from 'react'
import StarRatingComponent from 'react-rating-stars-component'
import { Link } from 'react-router'


const MovieCard = ({movie}) => {
  return (
    <div>
    <div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={movie.main_img}/>
      <h1>{movie.title}</h1>
      <StarRatingComponent
          name="rate1"
          starCount={10}
          value={movie.rate}
          />
      <h4>{movie.date} {movie.Creator}</h4>
      <span class="minutes">{movie.duration}</span>
      <p class="type">{movie.genre}</p>
    </div>
    <br/>
    <br/>
    <div class="movie_desc">
      <p class="text">
        {movie.description}
      </p>
      <Link to={`/trailer/${movie.id}`} >Trailer</Link>
    </div>
  </div>
  <div class="blur_back "></div>
</div>
    </div>
  )
}

export default MovieCard