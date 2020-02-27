import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';


class Search extends Component {
    constructor() {
        super();
        this.state = {
          rating: 1
        };
      }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
    render() {
        return (
            <div  className="d-flex align-items-center mt-4">
                <input className="tag-search mr-2" type="text" onChange={e=>this.props.search(e.target.value)} name="seach"/>
                <div className="d-flex">
                    <p className="m-0">Minimum Rating:</p>
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={this.state.rating}
                        onStarClick={this.onStarClick.bind(this)}
                    />

                </div>
            </div>
        );
    }
}

export default Search;