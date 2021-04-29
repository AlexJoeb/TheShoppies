import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";
import nominationReducer from "./reducers/nominationReducer";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    nominations: nominationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV !== "production"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
