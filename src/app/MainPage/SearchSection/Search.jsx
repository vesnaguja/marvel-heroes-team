import { useRef } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { getSearchedHeroes } from "../../../services/heroService";

export const Search = ({updateSearchedHeroesHandler}) => {

  const searchBox = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const searchedString = searchBox.current.value.trim().toLowerCase();
    getSearchedHeroes(searchedString).then(res => updateSearchedHeroesHandler(res))
  }


  return (
    <Form className="py-5 mt-5 ms-0 d-flex col-4" onSubmit={submitHandler}>
      <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" ref={searchBox} />
      <Button variant="secondary rounded-pill" type="submit">Search</Button>
    </Form>
  );
};


