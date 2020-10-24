export const _transformMovies = (movie) => {
  return {
    name: movie.title,
    id: movie.id,
    img: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
    overview: movie.overview,
  };
};
export const _transformTvShow = (tvShow) => {
  return {
    name: tvShow.name,
    id: tvShow.id,
    img: `https://image.tmdb.org/t/p/w200${tvShow.poster_path}`,
    overview: tvShow.overview,
  };
};

export const _transformPersons = (person) => {
  return {
    id: person.id,
    name: person.name,
    img: `https://image.tmdb.org/t/p/w200${person.profile_path}`,
  };
};
