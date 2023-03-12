import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlace } from "../features/reducers/placesSlice.js";
import { addCountry } from "../features/reducers/countriesSlice.js";


function FormAddPlace() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [link, setLink] = useState();

  return (
    <>
      <h2 className="popup__title">Добавить место</h2>
      <form
        className="popup__form"
        name="place-editing"
        onSubmit={(event) => {
          event.preventDefault();
          console.log({ name, country, link });
          dispatch(addPlace({
            data:
              {
                name, country, link
              }
          }));
          dispatch(addCountry( country ));
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
    </>
  );
}

export default FormAddPlace;