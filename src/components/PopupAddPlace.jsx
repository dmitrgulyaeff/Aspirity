import { useState, useContext } from "react";
import { Context } from "../utils/context";

function PopupAddPlace({ visible, setVisible }) {
  const { places, setPlaces, setCountrys } = useContext(Context);
  // const [visible, setVisible] = useState(true);
  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [link, setLink] = useState();

  const handlerClosePopup = (event) => {
    if (event.target === event.currentTarget) {
      setVisible(false);
    }
  };

  const AddPlace = async (data) => {
    const newPlace = {};
    const id = Math.floor(Math.random() * Date.now());
    newPlace[id] = { ...data, isLiked: false };

    const newPlaces = JSON.parse(
      JSON.stringify(Object.assign(places, newPlace))
    );
    setPlaces(newPlaces);
  };

  return (
    <div>
      <h2 className="popup__title">Добавить место</h2>
      <form
        className="popup__form"
        name="place-editing"
        onSubmit={(event) => {
          event.preventDefault();
          AddPlace({ name, country, link });
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
          required
        />
        <button
          className="popup__form-button-submit popup__form-button-submit_el_edit-profile"
          type="submit"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
export default PopupAddPlace;
