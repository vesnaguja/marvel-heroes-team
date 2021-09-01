import { Form, FormControl, Button } from "react-bootstrap";

export const Search = () => {
  return (
    <Form className="py-5 mt-5 ms-0 d-flex col-4">
      <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
      <Button variant="secondary rounded-pill">Search</Button>
    </Form>
  );
};


