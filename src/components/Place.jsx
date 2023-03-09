import { useState, useContext } from "react";
import { Context } from "../utils/context";

function Place(props) {
  const { deletePlace, setIsLike, places, setEditId, setPopupEditActive } =
    useContext(Context);
  props = props.props;
  const [isLiked, setIsLiked] = useState(places[props.id]["isLiked"]);
  const handleLike = () => {
    setIsLike(!isLiked);
    setIsLike(props.id, isLiked);
    console.log(places);
  };

  const [visible, setVisible] = useState(true);
  const handlerRemovePlace = () => {
    setVisible(false);
    deletePlace(props.id);
  };

  const handlerEditPlace = async () => {
    const newId = props.id;
    await setEditId(() => newId);
    await setPopupEditActive(true);
  };

  return visible ? (
    <li className="places__list-item" id={props.id}>
      <article className="place">
        <button
          className="place__button-delete-place"
          type="button"
          aria-label="Удалить"
          onClick={handlerRemovePlace}
        ></button>
        <button
          className="place__button-edit"
          type="button"
          aria-label="Редактировать"
          onClick={handlerEditPlace}
        ></button>

        <img className="place__photo" src={props.link} alt={props.name} />
        <h2 className="place__name">{props.name}</h2>
        <h2 className="place__country">{props.country}</h2>
        <button
          className={
            "place__button-like " +
            (isLiked === "true" ? "place__button-like_liked" : "")
          }
          type="button"
          aria-label="Лайк"
          onClick={handleLike}
        ></button>
      </article>
    </li>
  ) : (
    ""
  );
}

export default Place;
