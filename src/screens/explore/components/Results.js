import React from 'react';
import useFetch from '../../../hooks/useFetch';
import Movie from '../../../components/Movie';
import isEmpty from 'lodash/isEmpty';

const Results = ({ query }) => {
  const { loading, error, res } = useFetch({
    url: `https://api.themoviedb.org/3/search/multi`,
    params: {
      query: query,
      page: 1,
      include_adult: false
    }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isEmpty(error)) {
    return <p className="alert alert-danger">{JSON.stringify(error)}</p>;
  }

  const { results } = res;
  let searchResults = '';
  if (isEmpty(results)) {
    searchResults = (
      <p className="alert alert-info no-results-alert">No results</p>
    );
  } else {
    searchResults = results.map(movie => {
      return (
        <Movie
          key={movie.id}
          title={movie.title}
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          movieId={movie.id}
          movieType={movie.genre_ids}
          stars={movie.vote_average}
        />
      );
    });
  }

  return (
    <div className="search-results">
      <h2>Results</h2>
      <div id="results">{searchResults}</div>
    </div>
  );
};

export default Results;
