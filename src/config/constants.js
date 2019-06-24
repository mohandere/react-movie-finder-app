const MOVIE_DB_API_BASE_URL = 'https://api.themoviedb.org/3';
const POSTER_IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const MOVIE_CATEGORY_URL = {
  LATEST: `${MOVIE_DB_API_BASE_URL}/movie/now_playing?language=en-US&include_adult=false&api_key=`,
  TRENDING: `${MOVIE_DB_API_BASE_URL}/trending/movie/week?api_key=`
};

const MOVIE_CATEGORY = {
  LATEST: 'LATEST',
  TRENDING: 'TRENDING'
};

const MOVIE_CATEGORY_STRING = {
  LATEST: 'Latest',
  TRENDING: 'Trending'
};


export {
  MOVIE_DB_API_BASE_URL,
  POSTER_IMG_BASE_URL,
  MOVIE_CATEGORY,
  MOVIE_CATEGORY_STRING,
  MOVIE_CATEGORY_URL
};
