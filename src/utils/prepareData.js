export const _transformMovies = movie => {
  return {
    name: movie.title,
    id: movie.id,
    img: movie.poster_path,
    overview: movie.overview,
  };
};
export const _transformTvShow = tvShow => {
  return {
    name: tvShow.name,
    id: tvShow.id,
    img: tvShow.poster_path,
    overview: tvShow.overview,
  };
};

export const _transformPersons = person => {
  return {
    id: person.id,
    name: person.name,
    img: person.profile_path,
  };
};
