import { Component } from "react";
import Movie from "./MovieFlex";


class MovieList extends Component {
    render() {
        const { moviesArray, increaseStar, decreaseStar, toggleFav,toggleCartCount } = this.props;
        return (
            <>
                {moviesArray.map((movie, index) => (
                    <Movie movie={movie} increaseStar={increaseStar} key={index} decreaseStar={() => decreaseStar(index)} toggleFav={() => toggleFav(index)}  toggleCartCount={()=>toggleCartCount(index)}/>
                ))}
            </>
        )
    }

}



export default MovieList;