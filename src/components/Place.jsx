import {useDispatch} from "react-redux";
import { deletePlace } from "../features/reducers/placesSlice.js";
import {togglePlaceLike} from "../features/reducers/placesSlice.js";

function Place({ id, name, link, country, isLiked, setEditableId }) {
  const dispatch = useDispatch();

  const handlerLike = () => {
    dispatch(togglePlaceLike({id}))
  };

  const handlerRemovePlace = () => {
    dispatch(deletePlace({id}))

  }

  const handlerEditPlace = () => {
    setEditableId(id)
  }

  return (
    <li className="places__list-item" >
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

        <img className="place__photo" src={link} alt={name} />
        <h2 className="place__name">{name}</h2>
        <h2 className="place__country">{country}</h2>
        <button
          className={
            "place__button-like " +
            (isLiked === "true" ? "place__button-like_liked" : "")
          }
          type="button"
          aria-label="Лайк"
          onClick={handlerLike}
        ></button>
      </article>
    </li>
  );
}

export default Place;