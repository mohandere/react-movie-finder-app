import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/movie-actions';
import isEmpty from 'lodash/isEmpty';
import Container from 'react-bootstrap/Container';
import Banner from './components/Banner';
import Info from './components/Info';
import RelatedMovies from './components/RelatedMovies';

import './details.scss';

class Details extends React.PureComponent {
  componentDidMount() {
    let { params } = this.props.match;
    this.props.fetchMovie(params.ID);
  }

  render() {
    let { movieReducer, match } = this.props;
    let { isFetching, info, error } = movieReducer;

    if (isFetching) {
      return <p>Loading...</p>;
    }

    if (!isEmpty(error)) {
      return <p className="alert alert-danger">{JSON.stringify(error)}</p>;
    }

    return (
      <>
        <Banner info={info} />
        <Container>
          <Info info={info} />
          <RelatedMovies movieId={match.params.ID} />
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: movieId => dispatch(fetchMovie(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
