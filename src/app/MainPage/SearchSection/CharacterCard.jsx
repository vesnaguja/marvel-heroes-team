import { Card, Button } from "react-bootstrap";

import "./CharacterCard.css";

export const CharacterCard = ({ hero, addHandler }) => {
  const onClick = () => {
    addHandler(hero);
  };
  return (
    <div className="col-4 p-0">
      <Card border="light" className="m-2 border-3 px-4 card-box">
        <Card.Header className="bg-white border-0 ps-0 text-center">{hero.name}</Card.Header>

        <Card.Img
          variant="top"
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          className="border border-3 border-light hero-img-card"
        />

        <Card.Body className="d-flex justify-content-between">
          <Button variant="secondary rounded-pill">Info</Button>
          <Button variant="secondary rounded-pill" onClick={onClick}>
            Add
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
