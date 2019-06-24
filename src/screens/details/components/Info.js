import React from 'react';
import { Row, Col } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';

const Info = ({ info }) => {
  if (isEmpty(info)) {
    return null;
  }
  let { title, overview, genres, credits, popularity } = info;

  // Get genres
  genres = isEmpty(genres) ? [] : genres;
  let genresHtml = genres.map(genre => (
    <span key={genre.id}>{`${genre.name}, `}</span>
  ));

  // Get cast
  let { cast } = credits;
  cast = isEmpty(cast) ? [] : cast;
  let castsHtml = cast.map((item, index) => (
    <span key={item.cast_id}>
      <Link to={`/actor/${item.cast_id}`}>{`${item.name}, `}</Link>
    </span>
  ));

  // Get director
  let { crew } = credits;
  crew = isEmpty(crew) ? [] : crew;
  let directors = crew.filter(item => item.department === 'Directing');
  let directorsHtml = directors.map((item, index) => (
    <span key={index}>{`${item.name} `}</span>
  ));

  return (
    <div className="movie--info">
      <Row>
        <Col sm={6}>
          <h1>{title}</h1>
          <p>{overview}</p>
        </Col>
        <Col sm={6}>
          <section className="movie--card">
            <div className="movie--card-row">
              <strong>Genre</strong>
              <span>{genresHtml}</span>
            </div>
            <div className="movie--card-row">
              <strong>Casts</strong>
              <span>{castsHtml}</span>
            </div>
            <div className="movie--card-row">
              <strong>Director</strong>
              <span>{directorsHtml}</span>
            </div>
            <div className="movie--card-row">
              <strong>Popularity</strong>
              <span>{popularity}</span>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Info;
