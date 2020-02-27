import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component'

class MovieCard extends Component {
    render() {
        return (
            <div>
                <img src={this.props.movie.image} />
                <div className="">
                    <h3>{this.props.movie.title}</h3>
                    <h3>{this.props.movie.year}</h3>
                </div>
                <StarRatingComponent
                    name="rating"
                    starCount={5}
                    value={this.props.movie.rating}
                    onStarClick={this.onStarClick}
                />
            </div>
        );
    }
}

export default MovieCard;