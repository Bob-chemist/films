import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  HomePage,
  MoviesPage,
  TVshowsPage,
  PersonsPage,
} from './containers/pages';
import MovieDetails from './components/MovieDetails/MovieDetails';
import TvshowDetails from './components/TvshowDetails/TvshowDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:id" render={id => <MovieDetails id={id} />} />
        <Route path="/tvshows" exact component={TVshowsPage} />
        <Route path="/tvshows/:id" render={id => <TvshowDetails id={id} />} />
        <Route path="/persons" exact component={PersonsPage} />
        <Route path="/persons/:id" component={PersonsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
