import { Form, FormControl, Button } from "react-bootstrap";

export const Search = () => {
  return (
    <Form className="d-flex pt-5 mt-5 col-3">
      <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
      <Button variant="secondary rounded-pill">Search</Button>
    </Form>
  );
};
