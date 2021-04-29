import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types";
import axios from "axios";
import { OMDB_API_KEY } from "../../config.js";
type LoadingState = "idle" | "pending" | "succeeded" | "failed";
interface MovieState {
  movies: Movie[];
  loading: LoadingState;
}
const initialState: MovieState = {
  movies: [],
  loading: "idle",
};
const slice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    voidMovies: (state) => {
      state.movies = [];
    },
    setLoading: (state, action: PayloadAction<LoadingState>) => {
      state.loading = action.payload;
    },
  },
});

export const { setMovies, voidMovies, setLoading } = slice.actions;
export const fetchMovies = createAsyncThunk(
  "movies/fetch",
  async (title: string, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading("pending"));
    const result = await axios
      .get(
        `http://www.omdbapi.com/?s=${title}&type=movie&r=json&apikey=${OMDB_API_KEY}`
      )
      .then(({ data: { Search } }) => {
        dispatch(setLoading("succeeded"));
        dispatch(setMovies(Search));
        return Search;
      })
      .catch((error) => {
        console.error(error);
        dispatch(setLoading("failed"));
        dispatch(voidMovies());
        return [];
      });
    return result as Movie[];
  }
);
export default slice.reducer;
