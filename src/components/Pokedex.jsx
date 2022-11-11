import React, { useEffect, useState } from "react";
import "../App.css";
import Reload from "../assets/reload.svg";
import GitHub from "../assets/github.svg";
import SearchIcon from "../assets/search.svg";
import ErrorPokemon from "../assets/no-signal.gif";
import LoadingPokemon from "../assets/loader.gif";

export const Pokedex = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const RandomId = Math.floor(Math.random() * 385 + 1);
  const [pokemonID, setPokemonID] = useState(RandomId);
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

  const searchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonName(data);
        setPokemonID(data.name);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
    let setPokemonName = (data) => {
      let pokemonName = data.name;
      setPokemonName = document.getElementById("search-pokemon").value;
    };
  };

  const Screen = (species) => {
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`)
        .then((res) => res.json())
        .then((data) => speciesInfo(data));
      const speciesInfo = (data) => {
        species = data.flavor_text_entries[8].flavor_text;
        const pokemonInfo = document.querySelector(".pokemon-entries");
        pokemonInfo.textContent = species.toUpperCase();
      };
    }, []);

    if (error) {
      return (
        <div className="container-screen--1">
          <img src={ErrorPokemon} alt="Error" className="pokedex-no-screen" />
        </div>
      );
    }

    return (
      <div className="screen flex flex-col gap-1 py-2 px-2">
        {!pokemon || loading ? (
          <img
            src={LoadingPokemon}
            alt="Loading"
            className="pokedex-no-screen"
          />
        ) : (
          <div className="container-screen--1 flex flex-row gap-2">
            <img
              className="pokemon-img flex justify-center items-center"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />

            <div className="pokemon-info flex flex-col gap-2 justify-center align-start">
              <div className="pokemon-name">
                NAME: {pokemon.name.toUpperCase()}
              </div>
              <div className="pokemon-number">NUM DEX NAT: {pokemon.id}</div>
              <div className="pokemon-height">HEIGHT: {pokemon.height}</div>
              <div className="pokemon-height">WEIGHT: {pokemon.weight}</div>
            </div>
          </div>
        )}
        <div className="container-screen--2 flex flex-row">
          <div className="pokemon-entries flex justify-start items-start text-sm text-justify"></div>
        </div>
      </div>
    );
  };

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
              <a
                href="https://github.com/GioXdaZ/Pokedex-Hoenn-Version-React"
                target="_blank"
                className="button btn-2 flex justify-center items-center"
              >
                <img src={GitHub} alt="GitHub" className="scale-150" />
              </a>
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
          <div className="bg-screen flex flex-col gap-2">
            <Screen
              pokemon={pokemon}
              loading={loading}
              error={error}
              pokemonID={pokemonID}
              setPokemon={setPokemon}
              pokemonName={pokemonName}
              setPokemonName={setPokemonName}
            />

            <div className="container-screen--3 flex flex-row gap-1">
              <label className="search-pokemon flex flex-row">
                <input
                  type="text"
                  placeholder="Enter name or number of Pokemon"
                  className="input w-full h-[25px] bg-gray-700"
                  autoComplete="off"
                  id="search-pokemon"
                  name="pokemon"
                  onChange={(event) => {
                    setPokemonName(event.target.value.toLocaleLowerCase());
                  }}
                />

                <button
                  type="submit"
                  onClick={searchPokemon}
                  className="btn btn-xs w-6 bg-red-700 hover:bg-red-300 flex justify-center items-center"
                >
                  <img
                    src={SearchIcon}
                    alt="SearchIcon"
                    className="scale-150"
                  />
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
