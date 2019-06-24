import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Results from './components/Results';
import './explore.scss';

const Explore = () => {
  const [query, setQuery] = useState('harry potter'); // default query
  const [rating, setRating] = useState('');

  const handleFormSubmit = e => e.preventDefault();
  const handleOnQueryChange = e => setQuery(e.target.value);
  const handleRatingChange = e => setRating(e.target.value);

  return (
    <div id="explore" className="page">
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Search movies, actors, genre..."
                  onChange={handleOnQueryChange}
                  value={query}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <h4>Movie Rating</h4>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="range"
                  id="rating"
                  name="rating"
                  min="0"
                  max="10"
                  step="1"
                  onChange={handleRatingChange}
                  value={rating}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Results query={query} />
      </Container>
    </div>
  );
};

export default Explore;
