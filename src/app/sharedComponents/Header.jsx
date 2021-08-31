import { Navbar, Container } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="light" className="fixed-top mb-5">
      <Container>
        <Navbar.Brand href="/">Hero Team</Navbar.Brand>
      </Container>
    </Navbar>
  );
};