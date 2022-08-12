import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { userReducer } from "../features/userSlice";
import { moviesReducer } from "../features/moviesSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
