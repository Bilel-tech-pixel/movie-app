import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

class AddModal extends Component {
  state = {
      show: false
    }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  add = () =>{
    this.props.add({
      name: this.state.name,
      year: this.state.year,
      image: this.state.image,
      rating: this.state.rating,
    })   //pass the state
    this.setState({show: false})
  }
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          +
        </Button>
​
        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" name="name" onChange={this.handleChange} />
              </div>
              <div>
                <label>Image:</label>
                <input type="text" name="image" onChange={this.handleChange} />
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" name="rating" onChange={this.handleChange} />
              </div>
              <div>
                <label>Year:</label>
                <input type="text" name="year" onChange={this.handleChange} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.add} >
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;