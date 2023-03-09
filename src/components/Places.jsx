import { useState, useContext } from "react";
import { Context } from "../utils/context";
import Place from "./Place";

function Places({ props, country, isLiked }) {
  const { places, setPlaces, setEditId, setPopupEditActive } =
    useContext(Context);

  function deletePlace(id) {
    delete places[id];
  }

  function setIsLike(id, value) {
    places[id]["isLiked"] = value;
  }

  function generatePlace(id) {
    return <Place key={id} props={{ ...props[id], id }} />;
  }

  return (
    <Context.Provider
      value={{ deletePlace, setIsLike, places, setEditId, setPopupEditActive }}
    >
      <ul className="places__list">
        {Object.keys(props).map((id) => {
          const place = places[id];
          {
            /* console.log("сравнение", place["isLiked"] == isLiked);
          console.log("isLiked", isLiked);
          console.log('place["isLiked"]', place["isLiked"]); */
          }
          if (
            (country === "aboba" || place["country"] === country) &&
            (isLiked == "truefalse" || place["isLiked"] === isLiked)
          )
            return generatePlace(id);
        })}
      </ul>
    </Context.Provider>
  );
}

export default Places;
