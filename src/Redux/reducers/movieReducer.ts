import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types";

type MovieState = Movie[];
const initialState: MovieState = [];
const slice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => action.payload,
    voidMovies: (state) => [],
  },
});

export const { setMovies, voidMovies } = slice.actions;
export default slice.reducer;
