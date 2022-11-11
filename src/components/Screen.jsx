import React, { useEffect } from "react";
import "../App.css";
import ErrorPokemon from "../assets/no-signal.gif";
import LoadingPokemon from "../assets/loader.gif";

export const Screen = ({ pokemon, loading, error, pokemonID, species }) => {
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
        <img src={LoadingPokemon} alt="Loading" className="pokedex-no-screen" />
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
