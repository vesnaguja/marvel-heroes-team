import { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";

const SingleHeroDetails = ({ hero }) => {
  return (
    <Fragment>
      <Row>
        <Col sm={12} md={12} lg={5}>
          <Image className="pb-3" src={`${hero.thumbnail.path}/landscape_incredible.${hero.thumbnail.extension}`} />
        </Col>
        <Col sm={12} md={12} lg={1}>
          <div></div>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <h2>{hero.name}</h2>
          <p>{hero.description}</p>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SingleHeroDetails;
