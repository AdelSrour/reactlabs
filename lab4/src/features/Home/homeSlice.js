import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    movies: [],
    isLoading: true,
    errorMessage: "",
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const { setMovies, setIsLoading, setErrorMessage } = homeSlice.actions;
export default homeSlice.reducer;
