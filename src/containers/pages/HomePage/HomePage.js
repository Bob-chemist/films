import { Component } from 'react';
import classes from './HomePage.module.sass';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchHomePage } from '../../../redux/actions/getData';
import Loader from '../../../components/Loader';
import RowList from '../../../components/RowList/RowList';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchHomePage();
  }

  // componentDidUpdate() {
  //   this.props.fetchHomePage();
  // }

  render() {
    const { loading, movies, tvShows, persons } = this.props;
    return (
      <main className={classes.HomePage}>
        {loading ? (
          <Loader />
        ) : (
          <Container>
            <h2>Лучшие фильмы</h2>
            <RowList type="movies" list={movies} />
            <h2>Лучшие сериалы</h2>
            <RowList type="tvshows" list={tvShows} />
            <h2>Популярные актеры</h2>
            <RowList type="persons" list={persons} />
          </Container>
        )}
      </main>
    );
  }
}

const mapStateToProps = ({
  popular: { loading, movies, tvShows, persons },
}) => ({
  loading,
  movies,
  tvShows,
  persons,
});

const mapDispatchToProps = {
  fetchHomePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
