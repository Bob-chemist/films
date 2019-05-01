import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import {
  HomePage,
  MoviesPage,
  TVshowsPage,
  PersonsPage,
} from './containers/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/tvshows" component={TVshowsPage} />
        <Route path="/persons" component={PersonsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
