import {useDispatch} from "react-redux";
import {deletePlace} from '../features/reducers/placesSlice.js'

function ButtonDeletePlace() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(deletePlace({id: 1}))}>DELETE</button>
  )
}

export default ButtonDeletePlace
