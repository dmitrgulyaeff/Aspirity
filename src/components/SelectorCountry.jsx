import {useDispatch, useSelector} from "react-redux";
import {getUniqueKey} from "../data/constants/functions.js";
import {setFilter} from "../features/reducers/filterSlice.js";

function SelectorCountry() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries.value);
  const filterCountry = useSelector((store) => store.filter.value.country);
  return (
    <select className="selector" value={filterCountry} title="country" onChange={(event) => {dispatch(setFilter({"country": event.target.value}))}}>
      <option key={getUniqueKey()} value="">Любая</option>
      {countries.map(country => {
        return (
          <option   key={getUniqueKey()} value={country}>
            {country}
          </option>
        )
      })}
    </select>
 );
}


export default SelectorCountry;