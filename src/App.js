import React from "react";
import "./App.css";
import MangaCarousel from "./components/MangaCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="SliderTitle">Top Manga</h2>
        <MangaCarousel />
      </header>
    </div>
  );
}

export default App;
