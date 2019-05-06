import React, { Component } from 'react';
import classes from './DetailsPage.module.sass';
import { connect } from 'react-redux';

export default class DetailsPage extends Component {
  render() {
    const { id, name, overview } = this.props.item;
    return (
      <div className={classes.DetailsPage}>
        <div>
          <h1>{name}</h1>
          <div>{overview}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {};
