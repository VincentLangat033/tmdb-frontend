import React from 'react'
import './movie.css'

function Movie() {

  
  return (
    <div>
      <main id="main">
        <div class="movie">
            <img src="./assets/images/movies-zangu.png" alt="" />
            <div class="movie-info">
                <h3>Movie title</h3>
                <span class="green">6.9</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Numquam labore 
                debitis ab non provident autem eligendi vero, veniam reprehenderit co
                rporis et sed doloribus molestias, accusamus expedita nemo voluptate doloremque quasi.
                
                <form action="#">
                    <input type="text" placeholder="Your Rating" class="yourRating" id="yourRating" />
                    <input type="btn" name="Your Rating" id="buttonRating" />
                    <input type="button" value="" />
                </form>
            </div>
        </div>
        <div class="movie">
            <img src="./assets/images/movies-zangu.png" alt="" />
            <div class="movie-info">
                <h3>Movie title</h3>
                <span class="orange">6.9</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Numquam labore 
                debitis ab non provident autem eligendi vero, veniam reprehenderit co
                rporis et sed doloribus molestias, accusamus expedita nemo voluptate doloremque quasi.
            </div>
        </div>
        <div class="movie">
            <img src="./assets/images/movies-zangu.png" alt="" />
            <div class="movie-info">
                <h3>Movie title</h3>
                <span class="red">6.9</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Numquam labore 
                debitis ab non provident autem eligendi vero, veniam reprehenderit co
                rporis et sed doloribus molestias, accusamus expedita nemo voluptate doloremque quasi.
            </div>
        </div>
    </main>

    </div>
  )
}

export default Movie