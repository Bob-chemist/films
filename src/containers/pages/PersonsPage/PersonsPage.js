import React, { Component } from 'react';
import classes from './PersonsPage.module.sass';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchPopular } from '../../../redux/actions/getData';
import Loader from '../../../components/Loader';
import ItemsList from '../../../components/ItemsList/ItemsList';

class PersonsPage extends Component {
  componentDidMount() {
    this.props.fetchPopular('person');
  }
  render() {
    const { loading, persons } = this.props;
    return (
      <main className={classes.HomePage}>
        {loading ? (
          <Loader />
        ) : (
          <Container>
            <ItemsList itemsList={persons} />
          </Container>
        )}
      </main>
    );
  }
}

const mapStateToProps = ({ popular: { loading, persons } }) => ({
  loading,
  persons,
});

const mapDispatchToProps = {
  fetchPopular,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonsPage);
