import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import "./row.css";

const Row = ({title, fetchUrl, isLargeRow}) => {

  const base_url = "https://image.tmdb.org/t/p/original";

  const[movies, setMovies] = useState([]);

  useEffect(()=>{
    const fetchData = async() => {
      const response = await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`)
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, []);

  const handleClick = () =>{}

  return (
    <div className="row">
          <h2>{title}</h2>
          <div className="row-posters">
                {movies && movies.map((movie) => (
          <img onclick={() => handleClick(movie)}
          key={movie.id}
          className={`row-poster ${isLargeRow && "row-posterLarge"}`}
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}` }
          alt= {movie.name}
          />
      ))}
        </div>
  </div>
  )

}

export default Row;
