import { useState } from "react";
import { Container } from "react-bootstrap";

import { SearchSection } from "./SearchSection/SearchSection.jsx";
import { MyTeamSection } from "./MyTeamSection/MyTeamSection.jsx";

export const MainPage = () => {
  const [myTeamList, setMyTeamList] = useState([]);

  const addHandler = (hero) => {
    console.log("hero je " + hero.name);
    const newState = [...myTeamList];

    const indexOfNewHero = newState.findIndex((current) => current.id === hero.id);
    if (indexOfNewHero !== -1) return;

    newState.push(hero);
    setMyTeamList(newState);
  };

  let deleteHeroHandler = (hero) => {
    setMyTeamList((prevState) => prevState.filter((obj) => obj.id !== hero.id));
  };

  

  return (
    <Container>
      <div className="d-flex row">
        <SearchSection addHandler={addHandler} />
        <MyTeamSection myTeamList={myTeamList} deleteHeroHandler={deleteHeroHandler} />
      </div>
    </Container>
  );
};
