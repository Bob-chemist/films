import React, { Component } from 'react';
import classes from './MoviesPage.module.sass';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchPopular } from '../../../redux/actions/getData';
import Loader from '../../../components/Loader';
import ItemsList from '../../../components/ItemsList/ItemsList';

class MoviesPage extends Component {
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

const mapStateToProps = ({ popular: { loading, movies } }) => ({
  loading,
  movies,
});

const mapDispatchToProps = {
  fetchPopular,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage);
