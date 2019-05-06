import React from 'react';
import classes from './ItemsList.module.sass';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ItemsList = props => {
  const { itemsList } = props;

  return itemsList.map((item, idx) => {
    const { id, name, overview, img } = item;
    return (
      <Row className={classes.movie} key={`home${idx}`}>
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 3, offset: 0 }}>
          <img className={classes.img} src={img} alt={name} />
        </Col>
        <Col sm="12" md={{ size: 9, offset: 0 }}>
          <Link className={classes.Title} to={id.toString()}>
            {name}
          </Link>
          <div>{overview}</div>
        </Col>
      </Row>
    );
  });
};

export default ItemsList;
