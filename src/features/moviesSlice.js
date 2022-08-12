import { createSlice } from "@reduxjs/toolkit";
import logger from "redux-logger";

const initialState = {
  recommend: [
    {
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.",
      id: "Is1EwtQGq6nW6aTxmkGP",
      subTitle: "2018 • 7m • Family, Fantasy, Kids, Animation",
      title: "Bao",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78",
      type: "recommend",
      v: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg",
    },
  ],
  newDisney: null,
  original: null,
  trending: null,
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

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([logger]),
  },
});

export const { setMovies } = moviesSlice.actions;
export const selectRecommend = (state) => state.movies.recommend;
export const selectNewDisney = (state) => state.movies.newDisney;
export const selectTrending = (state) => state.movies.trending;
export const selectOriginal = (state) => state.movies.original;

export const moviesReducer = moviesSlice.reducer;
