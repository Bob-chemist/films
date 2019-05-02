import React from 'react';
import classes from './ItemsList.module.sass';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ItemsList = props => {
  const { itemsList } = props;

  return itemsList.map((item, idx) => {
    const { id, name, overview, poster_path } = item;
    return (
      <Row className={classes.movie} key={`home${idx}`}>
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 3, offset: 0 }}>
          <img
            className={classes.img}
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={name}
          />
        </Col>
        <Col sm="12" md={{ size: 9, offset: 0 }}>
          <Link className={classes.Title} to={`movies/${id}`}>
            {' '}
            {name}
          </Link>
          <div>{overview}</div>
        </Col>
      </Row>
    );
  });
};

export default ItemsList;
