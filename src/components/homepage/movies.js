import React from 'react';
import MovieItem from './movieitem';
import './movies.css';

function Movies(props) {
    return (
        <div className="movies">
            {props.items.map((movie)=> (
                <MovieItem
                    key={movie.id}
                    title={movie.title}
                    rating={movie.rating}
                    image={movie.image}
                />
            ))}
        </div>
    );
}

export default Movies;
