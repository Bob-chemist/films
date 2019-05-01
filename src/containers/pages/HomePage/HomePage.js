import React, { Component } from 'react';
import classes from './HomePage.module.sass';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchMovies } from '../../../redux/actions/movies';
import Loader from '../../../components/Loader';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  renderList = arr => {
    return arr.map((item, idx) => {
      return <div key={idx}>{item.title}</div>;
    });
  };
  render() {
    return (
      <main className={classes.HomePage}>
        {this.props.loading ? (
          <Loader />
        ) : (
          <Container>{this.renderList(this.props.movies.movies)}</Container>
        )}
      </main>
    );
  }
}

const mapStateToProps = ({ loading, movies }) => ({
  loading,
  movies,
});

const mapDispatchToProps = {
  fetchMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
