import {useDispatch} from "react-redux";
import {editPlace} from '../features/reducers/placesSlice.js'

function ButtonEditPlace() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(editPlace({id: 2, updatedData: {123: "aboba"}}))}>EDIT</button>
  )
}

export default ButtonEditPlace
