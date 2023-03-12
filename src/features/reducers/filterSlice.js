import {createSlice} from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter", initialState: {
      value: {},
    },
    reducers: {
      setFilter: (state, action) => {
        const fieldsChange = Object.keys(action.payload);
        fieldsChange.map((field) => {
          const filterValue = action.payload[field];
          if (filterValue === "") {
            delete state.value[field]
          } else {
            return state.value[field] = filterValue;
          }
        })
      }
    }
  }
);

export const {setFilter} = filterSlice.actions


export default filterSlice.reducer
