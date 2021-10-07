import { HeroList } from "./HeroList";

export const MyTeamSection = ({myTeamList, deleteHeroHandler}) => {
  return (
    <div className="col-3 pt-5 mt-5">
      <h4 className="pb-5 ps-4">My Team</h4>
      <HeroList myTeamList={myTeamList} deleteHeroHandler={deleteHeroHandler} />
    </div>
  );
};
