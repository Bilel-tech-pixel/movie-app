import React, { Component } from 'react';
import MovieCard from './MovieCard'
import Hoc from './Hoc'
class ListMovies extends Component {



    render() {
        return (
            <div className="d-flex juste">
                {this.props.movies.map(el => <MovieCard movie={el} key={el.id}/>)}
            </div>
        );
    }
}

export default Hoc(ListMovies);