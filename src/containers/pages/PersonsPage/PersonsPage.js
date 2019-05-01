import React, { Component } from 'react';
import classes from './PersonsPage.module.sass';
import { Container } from 'reactstrap';

export default class PersonsPage extends Component {
  render() {
    return (
      <main className={classes.PersonsPage}>
        <Container>PersonsPage</Container>
      </main>
    );
  }
}
