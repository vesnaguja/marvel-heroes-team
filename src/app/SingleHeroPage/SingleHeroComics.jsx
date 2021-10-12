import { Card, Col, Image } from "react-bootstrap";
import "./SingleHeroComics.css";

const SingleHeroComics = ({ comic }) => {
  return (
    <Col sm={6} md={4} lg={3} xl={2} className="container-for-comics-img-and-title">
      <Card className="bg-dark text-white">
        <Card.Img src={`${comic.thumbnail.path}/landscape_medium.${comic.thumbnail.extension}`} alt="Comic image" />
        <Card.ImgOverlay className="">
          <Card.Text className="bg-dark comics-title p-1">{comic.title}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default SingleHeroComics;
