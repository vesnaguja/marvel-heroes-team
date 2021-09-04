import { CharacterCard } from "./CharacterCard";

export const CardGrid = ({ searchedHeroes, addHandler }) => {
  return (
    <div className="col">
      <div className="row">
        {searchedHeroes.map((hero) => {
          return <CharacterCard hero={hero}  key={hero.id} addHandler={addHandler} />;
        })}
      </div>
    </div>
  );
};
