import React from "react";
import "../App.css";

export const Screen = () => {
  return (
    <div className="screen flex flex-col gap-1 py-2 px-2">
      <div className="container-screen--1 flex flex-row gap-2">
        <img className="pokemon-img" src="" alt="" />
        <div className="pokemon-list">
          <div className="pokemon-number"></div>
          <div className="pokemon-name"></div>
        </div>
      </div>
      <div className="container-screen--2 flex flex-row">
        <div className="pokemon-info"></div>
      </div>
      <div className="container-screen--3 flex flex-row gap-1">
        <div className="search-pokemon"></div>
        <button className="btn btn-xs w-6 bg-red-700 hover:bg-red-300 flex justify-center items-center"></button>
      </div>
    </div>
  );
};
