import { Container } from "react-bootstrap";

export const Header = ({title}) => {
  return (
    <div className="mb-5 header">
      <Container>
        <h2 className="fs-2 text-light fw-bold m-0 text-center p-2" href="/">
          {title}
        </h2>
      </Container>
    </div>
  );
};
