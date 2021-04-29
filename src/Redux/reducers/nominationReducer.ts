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
    removeNomination: (state, action: PayloadAction<string>) =>
      state.filter((movie: Movie) => movie.imdbID !== action.payload),
    voidNominations: () => [],
  },
});

export const {
  addNomination,
  removeNomination,
  voidNominations,
} = slice.actions;
export default slice.reducer;
