import { Container } from "react-bootstrap";

import { SearchSection } from "./SearchSection/SearchSection.jsx";
import { MyTeamSection } from "./MyTeamSection/MyTeamSection.jsx";

export const MainPage = () => {
  return (
    <Container>
      <div className="d-flex row">
      <SearchSection />
      <MyTeamSection />
      </div>
      
    </Container>
  );
};
