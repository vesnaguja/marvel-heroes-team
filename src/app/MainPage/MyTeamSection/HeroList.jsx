import { ListGroup } from "react-bootstrap";

import { HeroListItem } from "./HeroListItem";

export const HeroList = ({ addedHero }) => {
  return (
    <div className="col">
      <ListGroup>
        {addedHero.map((oneHero) => {
          return <HeroListItem oneHero={oneHero} key={oneHero.id} />
        })}
       
      </ListGroup>
    </div>
  );
};
