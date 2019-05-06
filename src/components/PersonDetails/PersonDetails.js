import React, { Component } from 'react';
import classes from './PersonDetails.module.sass';
import { Container, Row, Col } from 'reactstrap';
import { fetchDetails } from '../../API/API';
import Loader from '../Loader';

class PersonDetails extends Component {
  state = {
    loading: true,
    person: {
      name: '',
      biography: '',
    },
  };
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const person = await fetchDetails('person', this.props.id.match.params.id);
    console.log(person);
    this.setState({ loading: false, person });
  };

  render() {
    const {
      name,
      birthday,
      biography,

      profile_path,
    } = this.state.person;
    return this.state.loading ? (
      <Loader />
    ) : (
      <Container>
        <Row>
          <Col sm="12">
            <h2>{name}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
            />
          </Col>

          <Col sm={{ size: 10, offset: 1 }} md={{ size: 4, offset: 0 }}>
            <div className={classes.genres}>Дата рождения: {birthday}</div>
          </Col>
          <Col md="8">{biography}</Col>
        </Row>
      </Container>
    );
  }
}

export default PersonDetails;
