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
  }

  render() {
    const { loading, movies } = this.props;
    return (
      <main className={classes.HomePage}>
        {loading ? (
          <Loader />
        ) : (
          <Container>
            <ItemsList itemsList={movies} />
          </Container>
        )}
      </main>
    );
  }
}

const mapStateToProps = ({ loading, movies: { movies } }) => ({
  loading,
  movies,
});

const mapDispatchToProps = {
  fetchPopular,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
