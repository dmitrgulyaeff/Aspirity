import { useDispatch, useSelector } from "react-redux";
import {getUniqueKey} from "../data/constants/functions.js";
import {setFilter} from "../features/reducers/filterSlice.js";

function SelectorIsLiked() {
  const dispatch = useDispatch();
  const filterIsLiked = useSelector((store) => store.filter.value.isLiked);

  return (
    <select className="selector" title="isLiked" value={filterIsLiked} onChange={(event) => {dispatch(setFilter({"isLiked": event.target.value}))}}>
      <option key={getUniqueKey()} value="">Без разницы</option>
      <option key={getUniqueKey()} value="false">Есть</option>
      <option key={getUniqueKey()} value="true">Нет</option>
    </select>
  );
}

export default SelectorIsLiked;
