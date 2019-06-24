import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';

import MovieList from '../../components/MovieList';
import {
  getMoviesByType,
  setSelectedMovie,
  clearSelectedMovie
} from '../../actions/movies-actions';
import { fetchMovie } from '../../actions/movie-actions';
import { MOVIE_CATEGORY } from '../../config/constants.js';
import './home.scss';

class Home extends React.PureComponent {
  render() {
    const {
      getMoviesByType,
      movieType,
      setSelectedMovie
    } = this.props;
    return (
      <Container>
        <MovieList
          type={MOVIE_CATEGORY.LATEST}
          getMoviesByType={getMoviesByType}
          movieType={movieType}
          setSelectedMovie={setSelectedMovie}
        />
        <MovieList
          type={MOVIE_CATEGORY.TRENDING}
          getMoviesByType={getMoviesByType}
          movieType={movieType}
          setSelectedMovie={setSelectedMovie}
        />
        {/*<MovieDetailsPopup*/}
        {/*    clearSelectedMovie={clearSelectedMovie}*/}
        {/*    selectedMovie={selectedMovie}*/}
        {/*    fetchMovie={fetchMovie}*/}
        {/*    info={info}*/}
        {/*/>*/}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { movieType, movieReducer } = state;
  const { selectedMovie } = movieType;
  const { info } = movieReducer;
  return {
    movieType,
    selectedMovie,
    info
  };
};

const mapDispatchToProps = dispatch => ({
  getMoviesByType: type => dispatch(getMoviesByType(type)),
  setSelectedMovie: id => dispatch(setSelectedMovie(id)),
  fetchMovie: id => dispatch(fetchMovie(id)),
  clearSelectedMovie: () => dispatch(clearSelectedMovie())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
