import { CharacterCard } from "./CharacterCard";
import { useState, useEffect } from "react";
import { getCharacters } from "../../../services/heroService";

export const CardGrid = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharacters(data);
        return data;
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="col">
      <div className="row">
        {characters.map((character) => {
          return (
            <CharacterCard
              hero={character.name}
              heroPhoto={character.thumbnail}
              key={character.id}
            />
          );
        })}
      </div>
    </div>
  );
};
