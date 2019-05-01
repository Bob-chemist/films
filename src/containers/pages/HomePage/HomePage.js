import React, { Component } from 'react';
import classes from './HomePage.module.sass';
import { getPopularMovies } from '../../../API/API';
import { Container } from 'reactstrap';

export default class HomePage extends Component {
  render() {
    const response = getPopularMovies();
    //console.log(response.data);

    return (
      <main>
        <Container>{'ffff'}</Container>
      </main>
    );
  }
}
