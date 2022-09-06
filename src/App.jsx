import { useState, useEffect } from "react";
import PreviewCard from "./components/PreviewCard";
import Navigation from "./components/Navigation";
import Titel from "./components/Titel";

import reactLogo from "./assets/react.svg";
import "./index.css";

function App() {
  return (
    <>
      <header className="title-container">
        <Titel></Titel>
      </header>
      <main>
        <Navigation></Navigation>
        <PreviewCard></PreviewCard>
        <Navigation></Navigation>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
