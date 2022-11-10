import React, { useEffect, useState } from "react";
import "../App.css";
import { Screen } from "./Screen";
import Reload from "../assets/reload.svg";
import GitHub from "../assets/github.svg";

export const Pokedex = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const RandomId = Math.floor(Math.random() * 385 + 1);
  const [pokemonID, setPokemonId] = useState(RandomId);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [pokemonID]);

  const RefreshPage = () => window.location.reload(false);

  if (error) {
    let lightColor = document.getElementById("light");
    lightColor.classList.remove("light-color-g");
    lightColor.classList.add("light-color-r");
  }

  return (
    <div className="pokedex-container flex flex-col justify-center items-center w-full h-[600px]">
      <div className="pokeball flex justify-center items-center">
        <div className="pokeball-line"></div>
        <div className="pokeball-center flex justify-center items-center">
          <div className="pokeball-center-light"></div>
        </div>
      </div>
      <div className="border-pokedex flex justify-center items-center">
        <div className="pokedex">
          <div className="bg-line flex justify-center mt-40">
            <div className="buttons-container flex flex-col">
              <button className="button btn-1" onClick={RefreshPage}>
                <img className="reload" src={Reload} alt="Reload" />
              </button>
              <button className="button btn-2 flex justify-center items-center">
                <img src={GitHub} alt="GitHub" className="scale-150" />
              </button>
            </div>
          </div>
          <div
            id="light"
            className="green-light light-color-g flex absolute"
          ></div>
          <div className="tiny-buttons-container flex flex-col justify-center gap-1">
            <div className="tiny-container">
              <div className="tiny-btn"></div>
            </div>
            <div className="tiny-container">
              <div className="tiny-btn"></div>
            </div>
          </div>
          <div className="sound-container flex flex-col absolute gap-2">
            <div className="line-sound"></div>
            <div className="line-sound"></div>
            <div className="line-sound"></div>
            <div className="line-sound"></div>
            <div className="line-sound"></div>
          </div>
          <div className="bg-pokeball"></div>
          <div className="bg-screen">
            <Screen
              pokemon={pokemon}
              loading={loading}
              error={error}
              pokemonID={pokemonID}
              setPokemon={setPokemon}
              pokemonName={pokemonName}
              setPokemonName={setPokemonName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
