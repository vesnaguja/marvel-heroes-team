import { ListGroup } from "react-bootstrap";

export const HeroListItem = () => {
  return (
    <ListGroup.Item className="d-flex row p-0 ms-2 my-2 border-3 border-secondary">
      <img src="/images/ph.jpg" alt="" className="col-2  border-end border-3 border-secondary"/>
      <h5 className="col-10 d-flex mb-0 align-items-center">Some Hero</h5>
    </ListGroup.Item>
  );
};
