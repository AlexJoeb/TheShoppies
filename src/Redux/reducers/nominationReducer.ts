import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types";

type NominationState = Movie[];
const initialState: NominationState = [];
const slice = createSlice({
  name: "nominations",
  initialState,
  reducers: {
    addNomination: (state, action: PayloadAction<Movie>) => [
      ...state,
      action.payload,
    ],
    removeNomination: (state, action: PayloadAction<Movie>) =>
      state.filter((movie: Movie) => !Object.is(movie, action.payload)),
    voidNominations: (state) => [],
  },
});

export const {
  addNomination,
  removeNomination,
  voidNominations,
} = slice.actions;
export default slice.reducer;
