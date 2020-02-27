import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './Rating'
import ListMovies from './ListMovies'
import { render } from 'react-dom';
import AddModal from './AddModal'



class App extends React.Component{
  state = {
    movies : [
      {
        id:"1",
        image:"https://static.fnac-static.com/multimedia/0/Images/BE/NR/ca/73/6b/7041994/1540-1/tsp20150505205730/B-RAMBO-4-EXPENDABLES-COLLECTION-VN.jpg",
        title:"rambo 4",
        rating:3,
        year:"2015"
      },
      {
        id:"2",
        image:"https://images-na.ssl-images-amazon.com/images/I/81kuwUqCWBL._SY355_.jpg",
        title:"rambo 3",
        rating:4,
        year:"2007"
      },
      {
        id:"3",
        image:"https://p3.storage.canalblog.com/31/18/1349409/115030821.jpg",
        title:"le jeu de la mort ",
        rating:5,
        year:"1987"
      }
  ],
  rating:1,
  keyword:"",
  isLoading:true
  }
  addMovie = (movie) =>{
    this.setState({
      movies: this.state.movies.concat(movie)
    })
  }
  getkeyword = (word) =>{
    this.setState({
      keyword : word
    })
  }
  getRating = (rate) =>{
    this.setState({
      rating : rate
    })
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({isLoading:false})
    },5000);
  }
  render() {
     return (
    <div className="container">
      <Search search={y=>this.getkeyword(y)} />
      <Rating rating={z=>this.getRating(z)}  />
      <ListMovies isloading={this.state.isLoading} movies={this.state.movies.filter(el => el.rating >= this.state.rating && el.title.toLowerCase().includes(this.state.keyword.toLowerCase().trim()))}/> 
      <AddModal add = {(movie) => this.addMovie(movie)} />
    </div>
  );
}

}

export default App;
