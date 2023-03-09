import React from "react";
import { useState } from "react";
import { Context } from "../utils/context";
import { defaultPlaces } from "../utils/constants";
import Places from "../components/Places";
import Popup from "./Popup";
import PopupAddPlace from "../components/PopupAddPlace";
import PopupEditPlace from "./PopupEditPlace";
import SelectCountry from "./SelectCountry";
function App() {
  const [places, setPlaces] = useState(defaultPlaces);
  const [popupAddActive, setPopupAddActive] = useState(false);
  const [editId, setEditId] = useState();
  const [popupEditActive, setPopupEditActive] = useState(false);
  const [countrys, setCountrys] = useState(["Россия", "США", "Канада"]);
  const [country, setCountry] = useState("aboba");
  const [isLiked, setIsLiked] = useState("truefalse");
  return (
    <Context.Provider
      value={{
        places,
        setPlaces,
        setEditId,
        setPopupEditActive,
        countrys,
        setCountrys,
      }}
    >
      <SelectCountry countrys={countrys} setCountry={setCountry} />
      <select
        title="like"
        name="like"
        id="like"
        onChange={(event) => {
          setIsLiked(event.target.value);
        }}
      >
        <option value="truefalse">Лайкнутные + не лайкнутые</option>
        <option value={true}>Только лайкнутные</option>
        <option value={false}>Только не лайкнутые</option>
      </select>
      <button type="button" onClick={() => setPopupAddActive(true)}>
        Добавить место
      </button>
      <Places props={places} country={country} isLiked={isLiked} />
      <Popup visible={popupAddActive} setVisible={setPopupAddActive}>
        <PopupAddPlace />
      </Popup>
      <Popup visible={popupEditActive} setVisible={setPopupEditActive}>
        <PopupEditPlace
          id={editId || Object.keys(places)[0]}
          setId={setEditId}
        />
      </Popup>
    </Context.Provider>
  );
}

export default App;
