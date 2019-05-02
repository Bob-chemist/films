import React, { Component } from 'react';
import classes from './HomePage.module.sass';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchPopular } from '../../../redux/actions/movies';
import Loader from '../../../components/Loader';
import ItemsList from '../../../components/ItemsList/ItemsList';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchPopular('movie');
    this.props.fetchPopular('tv');
    this.props.fetchPopular('person');
  }

  render() {
    const { loading, movies, tvShows, persons } = this.props;
    return (
      <main className={classes.HomePage}>
        {loading ? <Loader /> : <Container>Home Page</Container>}
      </main>
    );
  }
}

const mapStateToProps = ({
  movies: { loading, movies, tvShows, persons },
}) => ({
  loading,
  movies,
  tvShows,
  persons,
});

const mapDispatchToProps = {
  fetchPopular,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
