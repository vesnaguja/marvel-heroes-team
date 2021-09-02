import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Header } from "./sharedComponents/Header";
import { MainPage } from "../app/MainPage/MainPage";

import { getCharacters } from "../services/heroService";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharacters(data);
        return data;
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <Header />
      <MainPage />
    </>
  );
}

export default App;
