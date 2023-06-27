import { Component } from "react";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import { moviesArray } from "./moviesData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      moviesArray: moviesArray,
      cartItems: {},
      cartCount: 0
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

  toggleFav = (index) => {
    const { moviesArray } = this.state;
    moviesArray[index].isFav = !moviesArray[index].isFav;
    this.setState({
      moviesArray: moviesArray
    })

  }


  toggleCartCount = (index) => {
    const{moviesArray} = this.state;
    let {cartCount} = this.state;
    if(moviesArray[index].isAddToCart){
      cartCount += 1;
    }else{
      cartCount -= 1;
    }
    moviesArray[index].isAddToCart = ! moviesArray[index].isAddToCart;
    this.setState({
      moviesArray:moviesArray,
      cartCount:cartCount
    });
  }


  render(){
    const {moviesArray,cartItems,cartCount} = this.state;
    return(
    <>
      <NavBar cartItems={cartItems}  cartCount={cartCount}></NavBar>
      <MovieList moviesArray={moviesArray}
                 decreaseStar = {this.decreaseStar}
                 increaseStar = {this.increaseStar}
                 toggleFav = {this.toggleFav}
                 toggleCartCount={this.toggleCartCount}
      > </MovieList>
    </>
    )
  }


}

export default App;
