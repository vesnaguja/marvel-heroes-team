import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "./sharedComponents/Header";
import { MainPage } from "../app/MainPage/MainPage";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}

export default App;
