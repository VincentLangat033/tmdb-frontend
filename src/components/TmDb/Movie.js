import {useEffect, useState} from "react"
import './movie.css'
import axios from 'axios'
import Youtube from 'react-youtube'
import MovieCard from "./MovieCard"

function Movie() {
    const MOVIE_API = "https://api.themoviedb.org/3/"
    const SEARCH_API = MOVIE_API + "search/movie"
    const DISCOVER_API = MOVIE_API + "discover/movie"
    const API_KEY = "f4726bbe13ac95e896f3571c43f3519f"
    const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280"
    // const API_KEY = 'api_key=f4726bbe13ac95e896f3571c43f3519f';
// const API_KEY = 'api_key=50b389526ca9b840b2cef75d8b8f512e';
const BASE_URL = 'https://api.themoviedb.org/3';
const GENRE_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&';

    const [playing, setPlaying] = useState(false)
    const [trailer, setTrailer] = useState(null)
    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [genreKey, setGenreKey] = useState("crime")
    const [movie, setMovie] = useState({title: "Loading Movies"})
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [movieList, setMovieList] = useState([])

    let selectedGenre = []
// An array of sample genres I would like to display
const genres = [
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
  
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]


const renderTags = ()=>(
    genres.map(genre=>(
        <div className="tag">{genre.name}</div>
    ))
)

    useEffect(() => {
        fetchMovies()
        fetchMoviesByGenres();
    }, [selectedGenres])

    const fetchMovies = async (event) => {
        if (event) {
            event.preventDefault()
        }

        const {data} = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
            params: {
                api_key: API_KEY,
                query: searchKey
            }
        })

        console.log(data.results[0])
        setMovies(data.results)
        setMovieList(data.results)
        // console.log("Movies: " + data.results[0])
        setMovie(data.results[0])
        // saveMoviesToDatabase(data.results);

        if (data.results.length) {
            await fetchMovie(data.results[0].id)
        }
    }

    const saveMoviesToDatabase = async () => {
        try {
          const response = await axios.post('http://localhost:3000/movies', { movies });
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };

    const fetchMoviesByGenres = async (event) => {
        if (event) {
            event.preventDefault()
        }

        if (selectedGenres.length === 0) {
          return;
        }
        const genreIds = selectedGenres.map(genre => genre.id);
        const url = `${MOVIE_API}/discover/movie?api_key=${API_KEY}&with_genres=${genreIds.join(',')}`;
        const response = await axios.get(url);
        setMovies(response.data.results);
        setMovie(response.data.results[0])
        if (response.data.results.length) {
            await fetchMovie(response.data.results[0].id)
        }
      }
      const handleGenreClick = (genre) => {
        const index = selectedGenres.findIndex(selectedGenre => selectedGenre.id === genre.id);
        if (index !== -1) {
          const updatedGenres = [...selectedGenres];
          updatedGenres.splice(index, 1);
          setSelectedGenres(updatedGenres);
        } else {
          setSelectedGenres([...selectedGenres, genre]);
        }
      };

   

    const fetchMovie = async (id) => {
        const {data} = await axios.get(`${MOVIE_API}movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos"
            }
        })

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
            setTrailer(trailer ? trailer : data.videos.results[0])
        }

        setMovie(data)
    }


    const selectMovie = (movie) => {
        fetchMovie(movie.id)
        setPlaying(false)
        setMovie(movie)
        window.scrollTo(0, 0)
    }

    const renderMovies = () => (
        movies.map(movie => (
            <MovieCard
                selectMovie={selectMovie}
                key={movie.id}
                movie={movie}
            />
        ))
    )

    return (
        <div className="App">
            <header className="center-max-size header">
                <span className={"brand"}>Movie App</span>
                <form className="form" onSubmit={fetchMovies}>
                    <input className="search" type="text" id="search"
                           onInput={(event) => setSearchKey(event.target.value)}/>
                    <button className="submit-search" type="submit"><i className="fa fa-search"></i></button>
                </form>
                
            </header>
            {/* <h5>{renderTags()}</h5> */}
            <div>
        {genres.map((genre) => (
          <button className="tag" key={genre.id} onClick={() => handleGenreClick(genre)} style={{backgroundColor: selectedGenres.some(selectedGenre => selectedGenre.id === genre.id) ? 'green' : 'blue'}}>
            {genre.name}
          </button>
        ))}
      </div>
            {movies.length ?
                <main>
                    {movie ?
                        <div className="poster"
                             style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})`}}>
                            {playing ?
                                <>
                                    <Youtube
                                        videoId={trailer.key}
                                        className={"youtube amru"}
                                        containerClassName={"youtube-container amru"}
                                        opts={
                                            {
                                                width: '1200px',
                                                height: '500px',
                                                playerVars: {
                                                    autoplay: 1,
                                                    controls: 0,
                                                    cc_load_policy: 0,
                                                    fs: 0,
                                                    iv_load_policy: 0,
                                                    modestbranding: 0,
                                                    rel: 0,
                                                    showinfo: 0,
                                                },
                                            }
                                        }
                                    />
                                    <button onClick={() => setPlaying(false)} className={"button close-video"}>Close
                                    </button>
                                </> :
                                <div className="center-max-size">
                                    <div className="poster-content">
                                        {trailer ?
                                            <button className={"button play-video"} onClick={() => setPlaying(true)}
                                                    type="button">Play
                                                Trailer</button>
                                            : 'Sorry, no trailer available'}
                                        <h1>{movie.title}</h1>
                                        <p>{movie.overview}</p>
                                        {/* <h6>{movie.average}</h6> */}
                                    </div>
                                </div>
                            }
                        </div>
                        : null}

                    <div className={"center-max-size movie-container"}>
                        {renderMovies()}
                        {/* <button onClick={saveMoviesToDatabase}>Save Movies to Database</button> */}
                        {/* console.log(fetchGenres()) */}
                    </div>
                </main>
                : 'Sorry, no movies found'}
        </div>
    );
}

export default Movie;
