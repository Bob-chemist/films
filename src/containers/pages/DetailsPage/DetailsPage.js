import { Component } from 'react';
import classes from './DetailsPage.module.sass';

export default class DetailsPage extends Component {
  render() {
    const { name, overview } = this.props.item;
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
