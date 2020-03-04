import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {
          directors.map((director)=>{
          return 
          <div key={Math.random()}>
          <h2>{director.name}<h2>
          <ul>
          {director.movies.map(gen=><li>gen</li>)}
          </ul>
          </div>}
          )
        }
    </div>
  );
}

export default Directors
