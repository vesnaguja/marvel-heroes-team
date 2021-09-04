import { useState } from "react";
import { Container } from "react-bootstrap";

import { SearchSection } from "./SearchSection/SearchSection.jsx";
import { MyTeamSection } from "./MyTeamSection/MyTeamSection.jsx";

export const MainPage = () => {
  const [addedHero, setAddedHero] = useState([]);

  const addHandler = (hero) => {
    const newState = [...addedHero];

    const indexOfNewHero = newState.findIndex((current) => current.id === hero.id);
    if(indexOfNewHero !== -1) return;

    newState.push(hero);
    setAddedHero(newState);
  };

  console.log('main page: ' + addedHero);

  return (
    <Container>
      <div className="d-flex row">
        <SearchSection addHandler={addHandler} />
        <MyTeamSection addedHero={addedHero} />
      </div>
    </Container>
  );
};
