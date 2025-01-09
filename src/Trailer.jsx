import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router";

const Trailer = ({movie}) => {
  const {id}=useParams();
  const foundMovie=movie.find((el)=>el.id === +id)
  return (
    <div>
    <h1>{foundMovie.title}</h1>
      <iframe
        width="560"
        height="315"
        src={foundMovie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{foundMovie.description}</h3>
      <Link to={"/"}><Button>Back To Home</Button></Link>
    </div>
  );
};

export default Trailer;
