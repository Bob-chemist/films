export const fromMovies = arr => {
  return arr.map(item => {
    item.name = item.title;
    return item;
  });
};
