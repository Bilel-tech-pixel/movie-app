import React, { Component } from 'react';
import MovieCard from './MovieCard'

class ListMovies extends Component {



    render() {
        return (
            <div className="d-flex">
                {this.props.movies.map(el => <MovieCard movie={el} key={el.id}/>)}
            </div>
        );
    }
}

export default ListMovies;