import React from 'react';
import { POSTER_IMG_BASE_URL } from '../config/constants.js';
import Movie from './Movie';
import { MOVIE_CATEGORY_STRING } from '../config/constants.js';
import { isEmpty } from 'lodash';
import Slider from 'react-slick';

const carouselSettings = {
  dots: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

class MovieList extends React.PureComponent {
  componentDidMount() {
    const { type, movieType = {}, getMoviesByType } = this.props;
    if (!movieType[type]) {
      getMoviesByType(type);
    }
  }

  render() {
    const { type, movieType = {}, setSelectedMovie } = this.props;
    const response = movieType[type];
    if (isEmpty(response)) {
      return null;
    }
    const { results } = response;
    let movieCollection = results.map(currentResult => {
      return (
        <Movie
          key={currentResult.id}
          title={currentResult.title}
          image={`${POSTER_IMG_BASE_URL}${currentResult.poster_path}`}
          movieId={currentResult.id}
          movieType={currentResult.genre_ids}
          stars={currentResult.vote_average}
          setSelectedMovie={setSelectedMovie}
        />
      );
    });

    let slider = (
      <Slider className="carousel" {...carouselSettings}>
        {movieCollection}
      </Slider>
    );

    return (
      <div className="movie-list">
        <h2 className="movie-title">{MOVIE_CATEGORY_STRING[type]}</h2>
        <div className="movie-collection">{slider}</div>
      </div>
    );
  }
}

export default MovieList;
