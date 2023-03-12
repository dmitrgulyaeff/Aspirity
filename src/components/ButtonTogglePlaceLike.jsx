import {useDispatch} from "react-redux";
import {togglePlaceLike} from "../features/reducers/placesSlice.js";
function ButtonTogglePlaceLike() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(togglePlaceLike({id: 2}))}>TOGGLE</button>
  )
}

export default ButtonTogglePlaceLike
