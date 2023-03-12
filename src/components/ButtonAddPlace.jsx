import { useDispatch } from "react-redux";
import { addPlace } from "../features/reducers/placesSlice.js";
import { addCountry } from "../features/reducers/countriesSlice.js";

function ButtonAddPlace() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addPlace({ data: { country: "USA" } }));
        dispatch(addCountry("USA"));
      }}
    >
      ADD
    </button>
  );
}

export default ButtonAddPlace;
