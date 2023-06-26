import { Component } from "react";
import "./movieFlex.css";
class Movie extends Component {

  render() {
    const { movie, increaseStar, decreaseStar ,toggleFav,toggleCart} = this.props;

    return (
      <>
        <div className="movie-list">
          <div className="movie-container">
            <div className="left">
              <img
                src={movie.img}
                alt="movie-poster"
                className="poster"
              />
            </div>
            <div className="right">
              <div className="title">
                <span id="movie-title">{movie.movieTitle}</span>
              </div>
              <div className="plot">
                <span id="movie-plot">{movie.moviePlot}</span>
              </div>
              <div className="price">
                <span id="movie-price">Rs.{movie.moviePrice}</span>
              </div>

              <div className="footer">
                <div className="rating">
                  <span id="movie-rating">{movie.movieRating}</span>
                </div>
                <div className="starcount">
                  <img
                    src='https://cdn-icons-png.flaticon.com/128/43/43625.png'
                    alt="starminus"
                    id="star-minus"
                    onClick={decreaseStar}
                  />
                  <img
                    src="
                                https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt="star"
                    id="star-img"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                    alt="starplus"
                    id="star-plus"
                    onClick={() => { increaseStar(movie) }}
                  />
                  <span id="star-count">{movie.movieStarCount}</span>
                </div>
                <div className="favourite" >
                <button id={movie.isFav ? 'fav':'unFav'}className="btn" onClick={toggleFav}> {movie.isFav?'Favourite':'Unfavourite'}  </button>
                </div>
                <div className="add-to-cart" >
                  <button id={movie.isAddToCart?'addCart':'undoAddCart'} className="btn" onClick={toggleCart}>{movie.isAddToCart?'Add to Cart':'Remove'}  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Movie.defaultProps = {
    movie: {
      movieTitle: "Default Movie Title",
      moviePlot: "Default Movie Plot",
      moviePrice: 0,
      movieRating: 0,
      movieStarCount: 0,
      isFav: false,
      isAddToCart: false,
      img: "",
    },
  };

export default Movie;
