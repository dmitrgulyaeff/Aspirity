import { useSelector } from "react-redux";
import Place from "./Place.jsx";

function PlacesList({ setEditableId }) {
  const placesObj = useSelector((store) => store.places.value);
  const filter = useSelector((store) => store.filter.value);
  return (
    <section className="places">
      <ul className="places__list">
        {Object.keys(placesObj).map((id) => {
          if (
            !Object.keys(filter).some((field) => {
              return placesObj[id][field] !== filter[field];
            })
          ) {
            return <Place setEditableId={setEditableId} key={id} id={id} name={placesObj[id]["name"]}
                          link={placesObj[id]["link"]}
                          country={placesObj[id]["country"]} isLiked={placesObj[id]["isLiked"]} />;
          }

        })}
      </ul>
    </section>
  );
}

export default PlacesList;
