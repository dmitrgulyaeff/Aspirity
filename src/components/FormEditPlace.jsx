import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPlace } from "../features/reducers/placesSlice.js";
import { addCountry } from "../features/reducers/countriesSlice.js";


function FormEditPlace({ id, setId }) {
  const placesObj = useSelector((store) => store.places.value);

    console.log(placesObj);
    console.log(placesObj[id]);
    console.log(placesObj[id]["name"]);
    const dispatch = useDispatch();
    const [name, setName] = useState(`${placesObj[id]["name"]}`);
    const [country, setCountry] = useState(`${placesObj[id]["country"]}`);
    const [link, setLink] = useState(`${placesObj[id]["link"]}`);

  return (
    <>
      <h2 className="popup__title">Редактировать место</h2>
      <form
        className="popup__form"
        name="place-editing"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(editPlace({
            id,
            updatedData:
              {
                name, country, link
              }
          }));
          dispatch(addCountry(country));
          setId(false);
        }}
      >
        <input
          className="popup__form-input popup__form-input_el_name"
          type="text"
          placeholder="Место"
          name="name"
          minLength="2"
          maxLength="40"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
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
          value={country}
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
          value={link}
          required
        />
        <button
          className="popup__form-button-submit popup__form-button-submit_el_edit-profile"
          type="submit"
        >
          Изменить
        </button>
      </form>
    </>
  );
}

export default FormEditPlace;