import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Search = () => {
  const [query, setQuery] = useState('');
  const handleFormSubmit = e => e.preventDefault();

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Search movies, actors, genre..."
          onChange={setQuery}
          value={query}
        />
      </Form.Group>
    </Form>
  );
};
export default Search;
