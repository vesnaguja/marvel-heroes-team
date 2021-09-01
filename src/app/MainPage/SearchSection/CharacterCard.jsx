import { Card, Button } from "react-bootstrap";

export const CharacterCard = () => {
  return (
    <div className="col-4 p-0">
      <Card border="secondary" className="m-2 border-3 px-4">
        <Card.Header className="bg-white border-0 ps-0">Some Hero</Card.Header>
        <Card.Img variant="top" src="/images/ph.jpg" className="border border-3 border-secondary"/>
        <Card.Body className="d-flex justify-content-between">
          <Button variant="secondary rounded-pill">Info</Button>
          <Button variant="secondary rounded-pill">Add</Button>
        </Card.Body>
      </Card>
    </div>
  );
};


