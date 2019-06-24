import React from 'react';
import isEmpty from 'lodash/isEmpty';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/Carousel';

const RelatedMovies = ({ movieId }) => {
  const { loading, error, res } = useFetch({
    url: `https://api.themoviedb.org/3/movie/${movieId}/similar`,
    params: {
      page: 1
    }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isEmpty(error)) {
    return <p className="alert alert-danger">{JSON.stringify(error)}</p>;
  }
  return (
    <div className="related-movies">
      <h2>Related movies</h2>
      <Carousel slides={res.results} />
    </div>
  );
};

export default RelatedMovies;
