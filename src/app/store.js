import { configureStore } from "@reduxjs/toolkit";
import placesReducer from "../features/reducers/placesSlice.js";
import filterReducer from "../features/reducers/filterSlice.js";
import countriesReducer from "../features/reducers/countriesSlice.js";

export default configureStore({
  reducer: {
    places: placesReducer,
    filter: filterReducer,
    countries: countriesReducer,
  },
});
