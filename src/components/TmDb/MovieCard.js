import React from 'react';


const MovieCard = ({movie, selectMovie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
        <div onClick={() => selectMovie(movie)} className={"movie"}>
            <div className="movie-title">
                {movie.poster_path &&
                <img src={IMAGE_PATH + movie.poster_path} alt={movie.title}/>
                }
                <div className={"flex between movie-infos"}>
                    <h5 className={"movie-title"}>{movie.title}</h5>
                   <h6 className='movie-average'>{movie.vote_average ? <span className={"movie-voting"}>{movie.vote_average}</span> : null} </h6> 
                </div>
            </div>
        </div>
    );
};


export default MovieCard;