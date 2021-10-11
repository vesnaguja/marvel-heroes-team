import { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { getSingleHero } from "../../services/heroService";
import { Header } from "../sharedComponents/Header";
import SingleHeroDetails from "./SingleHeroDetails";

export const SingleHeroPage = () => {
  let { id } = useParams("id");

  const [singleHero, setSingleHero] = useState({});

  useEffect(() => {
    // getSingleHero(id).then((heroData) => {
    //   setSingleHero(heroData);
    // });

    async function getHeroAndSetState() {
      const heroData = await getSingleHero(id);
      setSingleHero(heroData);
    }

    getHeroAndSetState();
  }, [id]);

  return (
    <Fragment>
      <Header title={"SINGLE CHARACTER"} />
      <Container>
        <SingleHeroDetails hero={singleHero} key={singleHero.id} />
      </Container>
    </Fragment>
  );
};

export default SingleHeroPage;
