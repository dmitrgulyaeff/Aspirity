import { createSlice } from "@reduxjs/toolkit";
import { arrayCountries } from "../../data/constants/initialData.js";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    value: Array(...new Set(arrayCountries)),
  },
  reducers: {
    addCountry: (state, action) => {
      const newCountry = action.payload;
      if (state.value.indexOf(newCountry) === -1) {
        state.value.push(newCountry);
      }
    },
  },
});

export const { addCountry } = countriesSlice.actions;

export default countriesSlice.reducer;
