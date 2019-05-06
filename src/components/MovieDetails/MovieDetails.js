import React, { Component } from 'react';
import classes from './MovieDetails.module.sass';
import { connect } from 'react-redux';
import { fetchDetails } from '../../redux/actions/getData';
import Loader from '../Loader';
import { Container, Row, Col } from 'reactstrap';

class MovieDetails extends Component {
  componentDidMount() {
    this.props.fetchDetails('movie', this.props.id.match.params.id);
  }

  renderList = arr => {
    return arr.map(item => {
      return <div key={'list' + Math.random()}>{item.name}</div>;
    });
  };

  render() {
    console.log(this.props.loading);
    const {
      loading,
      details: { title, genres, runtime, overview, backdrop_path },
    } = this.props;

    return loading ? (
      <Loader />
    ) : (
      <Container>
        <Row>
          <Col sm="12">
            <h2>{title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt={title}
            />
          </Col>

          <Col sm={{ size: 10, offset: 1 }} md={{ size: 4, offset: 0 }}>
            <div className={classes.genres}>
              Жанр: {this.renderList(genres)}
            </div>
            <div>Продолжительность {runtime} мин.</div>
          </Col>
          <Col md="8">{overview}</Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ popular: { loading, details } }) => ({
  loading,
  details,
});

const mapDispatchToProps = { fetchDetails };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
