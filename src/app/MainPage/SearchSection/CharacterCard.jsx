import { Card, Button } from "react-bootstrap";

import "./CharacterCard.css";

export const CharacterCard = ({ hero, addHandler }) => {
  const onClick = () => {
    addHandler(hero);
  };
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-4">

      <Card border="light" className="border-3 px-3 card-box">
        <Card.Header className="bg-white border-0 ps-0 text-center">{hero.name}</Card.Header>

        <Card.Img
          variant="top"
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          className="border border-3 border-light hero-img-card"
        />

        <Card.Body className="d-flex justify-content-between">
          <Button variant="btn btn-outline-dark rounded">Info</Button>
          <Button variant="btn btn-outline-dark rounded" onClick={onClick}>
            Add
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
