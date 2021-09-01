import { ListGroup } from "react-bootstrap";

import { HeroListItem } from "./HeroListItem";

export const HeroList = () => {
  return (
    <div className="col">
      <ListGroup>
        <HeroListItem />
        <HeroListItem />
        <HeroListItem />
        <HeroListItem />
      </ListGroup>
    </div>
  );
};
