import React from "react";
import "../App.css";
import { Screen } from "./Screen";

export const Pokedex = () => {
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
              <div className="button btn-1"></div>
              <div className="button btn-2"></div>
            </div>
          </div>
          <div className="green-light flex absolute"></div>
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
            <Screen />
          </div>
        </div>
      </div>
    </div>
  );
};
