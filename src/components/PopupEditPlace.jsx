import { useState, useContext } from "react";
import { Context } from "../utils/context";

function PopupEditPlace({ id, setId }) {
  const { places, setPlaces, countrys, setCountrys } = useContext(Context);
  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [link, setLink] = useState();

  const handlerClosePopup = (event) => {
    if (event.target === event.currentTarget) {
      setVisible(false);
    }
  };

  const editPlace = ({ name, country, link }) => {
    name = name ? name : places[id]["name"];
    country = country ? country : places[id]["country"];
    link = link ? link : places[id]["link"];

    const newPlace = {};
    newPlace[id] = { name, country, link, isLiked: false };
    console.log(newPlace);
    const newPlaces = JSON.parse(
      JSON.stringify(Object.assign(places, newPlace))
    );
    setPlaces(newPlaces);
    setCountrys(Array.from(new Set([...countrys, ...country])));
  };

  return (
    <div>
      <h2 className="popup__title">Изменить место</h2>
      <form
        className="popup__form"
        name="place-editing"
        onSubmit={(event) => {
          event.preventDefault();
          editPlace({ name, country, link });
        }}
      >
        <input
          className="popup__form-input popup__form-input_el_name"
          type="text"
          placeholder="Место"
          name="name"
          minLength="2"
          maxLength="40"
          onChange={(event) => setName(event.target.value)}
          defaultValue={places[id]["name"]}
          key={id * 1234}
          required
        />
        <input
          className="popup__form-input"
          type="text"
          placeholder="Страна"
          name="country"
          minLength="2"
          maxLength="200"
          onChange={(event) => setCountry(event.target.value)}
          key={id * 755}
          defaultValue={places[id]["country"]}
          required
        />
        <input
          className="popup__form-input"
          type="url"
          placeholder="Ссылка на фото"
          name="link"
          minLength="2"
          maxLength="200"
          onChange={(event) => setLink(event.target.value)}
          defaultValue={places[id]["link"]}
          key={id * 457}
          required
        />
        <button
          className="popup__form-button-submit popup__form-button-submit_el_edit-profile"
          type="submit"
        >
          Изменить
        </button>
      </form>
    </div>
  );
}
export default PopupEditPlace;
