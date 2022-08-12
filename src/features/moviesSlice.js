import { createSlice } from "@reduxjs/toolkit";
import logger from "redux-logger";

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
  selectedMovie: null,
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
    selectMovie: (state, action) => {
      state.selectedMovie = {
        backgroundImg: action.payload.backgroundImg,
        cardImg: action.payload.cardImg,
        description: action.payload.description,
        subTitle: action.payload.subTitle,
        title: action.payload.title,
        titleImg: action.payload.titleImg,
        type: action.payload.type,
      };
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([logger]),
  },
});

export const { setMovies, selectMovie } = moviesSlice.actions;
export const selectRecommend = (state) => state.movies.recommend;
export const selectNewDisney = (state) => state.movies.newDisney;
export const selectTrending = (state) => state.movies.trending;
export const selectOriginal = (state) => state.movies.original;
export const selectMovieSelector = (state) => state.movies.selectedMovie;
export const moviesReducer = moviesSlice.reducer;
