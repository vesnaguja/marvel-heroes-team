import { ListGroup } from "react-bootstrap";

import { HeroListItem } from "./HeroListItem";

export const HeroList = ({ addedHero }) => {
  return (
    <ListGroup className="row">
      {addedHero.map((oneHero) => {
        return <HeroListItem oneHero={oneHero} key={oneHero.id} />;
      })}
    </ListGroup>
  );
};
