import { createSlice } from "@reduxjs/toolkit";
import { initialPlaces } from "../../data/constants/initialData.js";

const placesSlice = createSlice({
  name: "places", initialState: {
    value: initialPlaces
  },
  reducers: {
    addPlace: (state, action) => {
      state.value[Math.floor(Math.random() * Date.now())] = Object.assign(action.payload["data"], { isLiked: "false" });
    },
    deletePlace: (state, action) => {
      const id = action.payload["id"];
      delete state.value[id];
    },
    editPlace: (state, action) => {
      const id = action.payload["id"];
      state.value[id] = action.payload["updatedData"];
    },
    togglePlaceLike: (state, action) => {
      const id = action.payload["id"];
      state.value[id]["isLiked"] = (state.value[id]["isLiked"] === "true") ? "false" : "true";
    }
  }
});

export const { addPlace, deletePlace, editPlace, togglePlaceLike } = placesSlice.actions;

// export const selectPlaces = (state) => state.counter.value

export default placesSlice.reducer;
