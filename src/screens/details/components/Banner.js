import React from 'react';
const Banner = ({ info }) => {
  let { poster_path } = info;
  return (
    <div
      className="movie--banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`
      }}
    />
  );
};

export default Banner;
