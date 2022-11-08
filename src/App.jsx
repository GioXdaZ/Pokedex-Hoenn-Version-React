import React from "react";
import "../src/components/Background.css";
import "./App.css";
import { Pokedex } from "./components/Pokedex";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="background-body flex justify-center items-center h-[800px]">
        <Pokedex></Pokedex>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
