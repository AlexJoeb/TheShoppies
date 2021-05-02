import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types";
import axios from "axios";
import { OMDB_API_KEY } from "../../config.js";

type NominationState = Movie[];
const initialState: NominationState = [];
const slice = createSlice({
  name: "nominations",
  initialState,
  reducers: {
    addNomination: (state, action: PayloadAction<Movie>) => {
      const nominationsInLocal = localStorage.getItem("nominations");
      if (!nominationsInLocal) {
        localStorage.setItem("nominations", action.payload.imdbID);
      } else {
        if (!nominationsInLocal.includes(action.payload.imdbID)) {
          localStorage.setItem(
            "nominations",
            `${nominationsInLocal},${action.payload.imdbID}`
          );
        }
      }
      return state.filter((movie) => movie.imdbID === action.payload.imdbID)
        .length >= 1
        ? state
        : [...state, action.payload];
    },
    removeNomination: (state, action: PayloadAction<string>) => {
      const nominationsInLocal = localStorage.getItem("nominations");
      if (!nominationsInLocal) return;
      else {
        localStorage.setItem(
          "nominations",
          nominationsInLocal
            .split(",")
            .filter((id) => id !== action.payload)
            .join(",")
        );
      }
      return state.filter((movie: Movie) => movie.imdbID !== action.payload);
    },
    voidNominations: () => [],
  },
});

export const {
  addNomination,
  removeNomination,
  voidNominations,
} = slice.actions;
export const fetchPriorNominations = createAsyncThunk(
  "nominations/fetch",
  async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;
    // TODO Check to see if there are prior nominations.
    // Saved as: "1,2,3,4,5"
    const nominationsInStorage = localStorage.getItem("nominations");
    if (!nominationsInStorage) return;
    const ids: string[] = nominationsInStorage.split(",");
    ids.forEach(async (id) => {
      // Take ID and fetch the movie from the database.
      await axios
        .get(
          `https://www.omdbapi.com/?i=${id}&type=movie&r=json&apikey=${OMDB_API_KEY}`
        )
        .then(({ data: { Poster, Title, Type, Year, imdbID } }) => {
          dispatch(
            addNomination({
              imdbID,
              Year,
              Type,
              Title,
              Poster,
            })
          );
        })
        .catch((error) => {
          console.error(error);
          return [];
        });
    });
  }
);
export default slice.reducer;
