import React, { useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import StarRatingComponent from 'react-rating-stars-component'

const Add = ({ show, handleClose, addMovie }) => {
    
  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    title: '',
    duration: '',
    date: '',
    Creator: '',
    rate: 0,
    genre: '',
    description: '',
    main_img: '',
  });
  const onStarClick=(nextValue,prevValue,name)=>{
    setNewMovie({...newMovie,rate:nextValue});
}

  const handleChange = (e) => {
    setNewMovie({...newMovie,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie title"
                name="title"
                onChange={handleChange}
              />
              
              <StarRatingComponent
                  name="rate1"
                  starCount={6}
                  value={newMovie.rate}
                  onStarClick={onStarClick}
                  
                  />
            </Form.Group>
            <Form.Group controlId="formDuration">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter duration"
                name="duration"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter release date"
                name="date"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formCreator">
              <Form.Label>Creator</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter creator"
                name="Creator"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formRate">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter rate"
                name="rate"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter genre"
                name="genre"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                name="description"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Main Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter main image URL"
                name="main_img"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{addMovie(newMovie);handleClose()}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
