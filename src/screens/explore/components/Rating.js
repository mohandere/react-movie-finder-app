import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Rating = () => {
  const [rating, setRating] = useState('');
  const handleFormSubmit = e => e.preventDefault();

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="range"
          min="1"
          max="10"
          step="1"
          onChange={setRating}
          value={rating}
        />
      </Form.Group>
    </Form>
  );
};
export default Rating;
