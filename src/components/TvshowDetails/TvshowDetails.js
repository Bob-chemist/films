import { useState, useEffect } from 'react';
import classes from './TvshowDetails.module.sass';
import { Axios } from '../../API/API';
import Loader from '../Loader';
import { Container, Row, Col } from 'reactstrap';

import token from '../../API/APItoken';

const TvshowDetails = (props) => {
  const [loading, setLoading] = useState(true);
  const [tvshow, setTvshow] = useState({
    backdrop_path: '',
    genres: [],
    name: '',
    number_of_episodes: 0,
    number_of_seasons: 0,
    overview: '',
  });

  const fetchDetails = async (section, id) => {
    try {
      const response = await Axios.get(
        `${section}/${id}?api_key=${token}&language=ru-RU`
      );

      setTvshow(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchDetails('tv', props.id.match.params.id);
  }, [props.id.match.params.id]);

  const renderList = (arr) => {
    return arr.map((item) => {
      return <div key={'list' + Math.random()}>{item.name}</div>;
    });
  };

  const {
    name,
    backdrop_path,
    genres,
    number_of_episodes,
    number_of_seasons,
    overview,
  } = tvshow;

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Row>
        <Col sm="12">
          <h2>{name}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={name}
          />
        </Col>

        <Col sm={{ size: 10, offset: 1 }} md={{ size: 4, offset: 0 }}>
          <div className={classes.genres}>Жанр: {renderList(genres)}</div>
          <div>
            Продолжительность {number_of_seasons} сезонов, всего{' '}
            {number_of_episodes} серий.
          </div>
        </Col>
        <Col md="8">{overview}</Col>
      </Row>
    </Container>
  );
};

export default TvshowDetails;
