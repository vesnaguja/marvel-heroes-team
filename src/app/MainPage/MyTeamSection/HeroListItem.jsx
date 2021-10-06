import { ListGroup } from "react-bootstrap";

export const HeroListItem = ({oneHero}) => {
  console.log('adddedHero: ' + oneHero);
  return (
    <ListGroup.Item className="d-flex row p-0 ms-2 my-2 border-3 border-secondary">
      <img src={`${oneHero.thumbnail.path}/standard_small.${oneHero.thumbnail.extension}`} alt="" className="col-2 border-end border-3 border-secondary"/>
      <h5 className="col-10 d-flex mb-0 align-items-center">{oneHero.name}</h5>
    </ListGroup.Item>
  );
};
