import React, { Component } from 'react';
import classes from './TVshowsPage.module.sass';
import { connect } from 'react-redux';
import Loader from '../../../components/Loader';
import ItemsList from '../../../components/ItemsList/ItemsList';
import { Container } from 'reactstrap';
import { fetchPopular } from '../../../redux/actions/movies';

class TVshowsPage extends Component {
  componentDidMount() {
    this.props.fetchPopular('tv');
  }

  render() {
    const { loading, tvShows } = this.props;
    return (
      <main className={classes.HomePage}>
        {loading ? (
          <Loader />
        ) : (
          <Container>
            <ItemsList itemsList={tvShows} />
          </Container>
        )}
      </main>
    );
  }
}

const mapStateToProps = ({ loading, movies: { tvShows } }) => ({
  loading,
  tvShows,
});

const mapDispatchToProps = {
  fetchPopular,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TVshowsPage);
