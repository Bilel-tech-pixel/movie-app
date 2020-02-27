import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class Rating extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick = (nextValue, prevValue, name) => {
    this.props.rating(nextValue)
    this.setState({
      rating: nextValue
    })
  }

  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        
        <StarRatingComponent 
          name="rating" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick}
        />
      </div>
    );
  }
}
export default Rating