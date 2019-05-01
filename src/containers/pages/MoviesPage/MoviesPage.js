import React, { Component } from 'react';
import classes from './MoviesPage.module.sass';
import { Container } from 'reactstrap';

export default class MoviesPage extends Component {
  render() {
    return (
      <main className={classes.MoviesPage}>
        <Container>MoviesPage</Container>
      </main>
    );
  }
}
