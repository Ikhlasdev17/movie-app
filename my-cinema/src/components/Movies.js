import React from 'react';
import Movie from "./Movie";
import photo from "../assets/3828537.jpg"
const Movies = (props) => {
    const {movies = []} = props;
    return (
        <div className="movies">
            {movies.length ? movies.map(movie => {
               return <Movie key={movie.imdbID} {...movie} />
            }) : <img src={photo} alt="404 not found..." className="not-found-photo"/>}
        </div>
    );
};



export default Movies;