import { ListGroup } from "react-bootstrap";
import { ImBin } from "react-icons/im";

export const HeroListItem = ({ oneHero }) => {
  console.log("adddedHero: " + oneHero);
  return (
    <ListGroup.Item className="col ms-3 my-2 border-3 border-secondary p-0">
      <div className="row align-items-center">
        <div className="col-3">
          <img src={`${oneHero.thumbnail.path}/standard_small.${oneHero.thumbnail.extension}`} alt="" className="w-100" />
        </div>

        <div className="col-7 text-start">
          <h5 className="">{oneHero.name}</h5>
        </div>

        <div className="col-2 text-center">
          <ImBin size="25px" className="text-danger" />
        </div>
      </div>
    </ListGroup.Item>
  );
};
