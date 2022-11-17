import React from "react";
import "../src/components/Background.css";
import "./App.css";
import { Pokedex } from "./components/Pokedex";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Pokedex className="flex justify-center items-center" />
      <Footer></Footer>
    </div>
  );
}

export default App;
