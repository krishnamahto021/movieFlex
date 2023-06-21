import { Component } from 'react';
import './movieFlex.css';
class Movie extends Component {
    render() {
        return (
            <>
                <div className="movie-list">
                    <div className="movie-container">
                        <div className="left">
                            <img src="https://m.media-amazon.com/images/I/91zzAMkVCUL._AC_UF1000,1000_QL80_.jpg" alt="movie-poster" className='poster' />
                        </div>
                        <div className="right">
                            <div className="title">
                                <span id="movie-title">The Avengers</span>

                            </div>
                            <div className="plot">
                                <span id="movie-plot">The remaining Avengers team up to reverse the devastating effects of Thanos' snap and restore balance to the universe</span>

                            </div>
                            <div className="price"><span id="movie-price">
                                Rs.99
                            </span></div>

                            <div className="footer">
                                <div className="rating"><span id="movie-rating">4.8</span></div>
                                <div className="starcount">
                                    <img src="https://cdn-icons-png.flaticon.com/128/43/43625.png" alt="starminus" id='star-minus' />
                                    <img src="
                                https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" id='star-img' />
                                    <img src="https://cdn-icons-png.flaticon.com/128/748/748113.png" alt="starplus" id='star-plus' />
                                </div>
                                <div className="favourite"><button id='fav-btn'>Add to Favourites</button></div>
                                <div className="buy"><button id='buy-btn'>Buy</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

};

export default Movie;