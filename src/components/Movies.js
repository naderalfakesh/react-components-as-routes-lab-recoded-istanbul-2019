import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
       <h1>Home Page</h1>
        {
          movies.map((movie)=>
          <div>
          <h2>{movie.title}<h2>
          <p>{movie.time}</p>
          <ul>
          {movie.genres.map(gen=><li>gen</li>)}
          </ul>
          </div>
          )
        }
    </div>
  );
};

export default Movies;
