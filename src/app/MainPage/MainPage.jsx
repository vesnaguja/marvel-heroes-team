import { Container } from "react-bootstrap";

import { Search } from "./Search";

export const MainPage = () => {
  return (
    <Container>
      <div className="d-flex row">
        <Search />
      </div>
    </Container>
  );
};
