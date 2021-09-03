import { CharacterCard } from "./CharacterCard";

export const CardGrid = ({ searchedHeroes }) => {
  return (
    <div className="col">
      <div className="row">
        {searchedHeroes.map((hero) => {
          return <CharacterCard hero={hero.name} heroPhoto={hero.thumbnail} key={hero.id} />;
        })}
      </div>
    </div>
  );
};
