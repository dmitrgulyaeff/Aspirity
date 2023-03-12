import store from "../app/store.js";
import { Provider } from "react-redux";
import PlacesList from "../components/PlacesList.jsx";
import SelectorCountry from "../components/SelectorCountry.jsx";
import SelectorIsLiked from "./SelectorIsLiked.jsx";
import { useState } from "react";
import Popup from "./Popup.jsx";
import FormAddPlace from "./FormAddPlace.jsx";
import FormEditPlace from "./FormEditPlace.jsx";


function App() {
  const [popupAddActive, setPopupAddActive] = useState(false);
  const [editableId, setEditableId] = useState(false);
  return (<Provider store={store}>


    <section className="container">
      <button className="button-add-place" type="button" onClick={() => setPopupAddActive(true)}>
        Добавить место
      </button>
      <ul className="selectors">
        <li className="selectors-item">
          <p className="selector-description">Страна:</p>
          <SelectorCountry />
        </li>
        <li className="selectors-item">
          <p className="selector-description">Лайки:</p>
          <SelectorIsLiked />
        </li>

      </ul>
    </section>


    <PlacesList setEditableId={setEditableId} />
    <Popup visible={popupAddActive} setVisible={setPopupAddActive}>
      <FormAddPlace />
    </Popup>
    <Popup visible={editableId !== false} setVisible={setEditableId}>
      {editableId ? <FormEditPlace id={editableId} setId={setEditableId} /> : <>
        <h2 className="popup__title">Редактировать место</h2>
        <form
          className="popup__form"
        >
          <input
            className="popup__form-input"
          />
          <input
            className="popup__form-input"
          />
          <input
            className="popup__form-input"
          />
          <button
            className="popup__form-button-submit popup__form-button-submit_el_edit-profile"
          >
            Изменить
          </button>
        </form>
      </>}
    </Popup>
  </Provider>);
}

export default App;
