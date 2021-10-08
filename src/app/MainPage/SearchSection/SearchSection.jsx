import { useState, useEffect } from "react";
import { getCharacters } from "../../../services/heroService";

import { Search } from "./Search";
import { CardGrid } from "./CardGrid";

export const SearchSection = (props) => {
  const [searchedHeroes, setSearchedHeroes] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => {
      setSearchedHeroes(data);
    });
  }, []);

  const updateSearchedHeroesHandler = (value) => {
    setSearchedHeroes(value);
  };

  return (
    <div className="col-sm-12 col-md-6 col-xl-8">
      <Search updateSearchedHeroesHandler={updateSearchedHeroesHandler} />
      <CardGrid searchedHeroes={searchedHeroes} addHandler={props.addHandler} />
    </div>
  );
};
