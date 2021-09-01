import { CharacterCard } from "./CharacterCard";

export const CardGrid = () => {
  return (
    <div className="col">
      <div className="row">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </div>
  );
};
