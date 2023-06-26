import { Component } from "react";
import Movie from "./MovieFlex";

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            moviesArray: [
                {
                    movieTitle: "The avengers",
                    moviePlot: "The remaining Avengers team up to reverse the devastating effects of Thanos snap and restore balance to the universe",
                    moviePrice: 99,
                    movieRating: 0,
                    movieStarCount: 0,
                    isFav:true,
                    isAddToCart:true,
                    img: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                },
                {
                    movieTitle: "Captain America",
                    moviePlot: "A patriotic super-soldier fights against evil forces to protect the world and uphold justice",
                    moviePrice: 49,
                    movieRating: 0,
                    movieStarCount: 0,
                    isFav:true,
                    isAddToCart:true,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHlDCWUqPTcc0tnTs0kS7ugXTf-E_jcku_OmH6ns&s'
                },
                {
                    movieTitle: "",
                    moviePlot: "A brilliant billionaire inventor uses a high-tech suit to become a superhero and defend humanity from threats",
                    moviePrice: 199,
                    movieRating: 0,
                    movieStarCount: 0,
                    isFav:true,
                    isAddToCart:true,
                    img: 'https://i.etsystatic.com/35330351/r/il/62b946/3917240214/il_fullxfull.3917240214_n3ti.jpg'

                }

            ]
        }
    };

    increaseStar = (movie) => {
        const { moviesArray } = this.state;
        const movieIndex = moviesArray.indexOf(movie);
        if (moviesArray[movieIndex].movieStarCount >= 5) {
            return;
        }

        moviesArray[movieIndex].movieStarCount += 0.5;
        this.setState({
            moviesArray: moviesArray
        })
    }

    decreaseStar = (index) => {
        const { moviesArray } = this.state;
        if (moviesArray[index].movieStarCount <= 0) {
            return;
        }
        moviesArray[index].movieStarCount -= 0.5;
        this.setState({
            moviesArray: moviesArray
        })
    }

    toggleFav = (index)=> {
        const {moviesArray} = this.state;
        moviesArray[index].isFav = !moviesArray[index].isFav;
        this.setState({
            moviesArray:moviesArray
        })      

    }

    toggleCart = (index)=> {
        const {moviesArray} = this.state;
        moviesArray[index].isAddToCart = !moviesArray[index].isAddToCart;
        this.setState({
            moviesArray:moviesArray
        })      

    }

 



    render() {
        const { moviesArray } = this.state;
        return (
            <>
                {moviesArray.map((movie, index) => (
                    <Movie movie={movie} increaseStar={this.increaseStar} key={index} decreaseStar={() => this.decreaseStar(index)} toggleFav = {()=>this.toggleFav(index)} toggleCart={()=>this.toggleCart(index)}  />
                ))}
            </>
        )
    }

}



export default MovieList;