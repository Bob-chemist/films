import React from 'react';
import classes from './RowList.module.sass';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const RowList = ({ list }) => {
  const [item0, item1, item2, item3, item4] = list;
  return (
    <Row className={`no-gutters ${classes.RowList}`}>
      <Col sm="12" md="6">
        <Link to={`/${item0.id}`}>
          <div
            style={{
              background: `#fff url(${item0.img}) no-repeat center center`,
              backgroundSize: '100% auto',
              height: 400,
              width: '100%',
            }}
          >
            <span className={classes.first}>{item0.name}</span>
          </div>
        </Link>
      </Col>
      <Col sm="6" md="3">
        <Link to={`/${item1.id}`}>
          <div
            style={{
              background: `#fff url(${item1.img}) no-repeat center center`,
              backgroundSize: '100% auto',
              height: 200,
            }}
          >
            <span>{item1.name}</span>
          </div>
        </Link>
        <Link to={`/${item2.id}`}>
          <div
            style={{
              background: `#fff url(${item2.img}) no-repeat center center`,
              backgroundSize: '100% auto',
              height: 200,
            }}
          >
            <span>{item2.name}</span>
          </div>
        </Link>
      </Col>
      <Col sm="6" md="3">
        <Link to={`/${item3.id}`}>
          <div
            style={{
              background: `#fff url(${item3.img}) no-repeat center center`,
              backgroundSize: '100% auto',
              height: 200,
            }}
          >
            <span>{item3.name}</span>
          </div>
        </Link>
        <Link to={`/${item4.id}`}>
          <div
            style={{
              background: `#fff url(${item4.img}) no-repeat center center`,
              backgroundSize: '100% auto',
              height: 200,
            }}
          >
            <span>{item4.name}</span>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default RowList;
