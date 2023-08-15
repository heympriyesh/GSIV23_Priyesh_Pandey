import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchMoviesDetails = createAsyncThunk("fetchMoviesDetailsSlice", async (movie_id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}`,
    {
      headers: {
        Authorization:
          `Bearer ${process.env.REACT_APP_APIKEY}`,
      },
    }
  );
  return response.json();
});

// https://api.themoviedb.org/3/movie/movie_id?language=en-US
// API_KEY = 'YOUR_API_KEY'
// BASE_URL = 'https://api.themoviedb.org/3'
// SEARCH_ENDPOINT = '/search/movie'
// LANGUAGE = 'en-US'
// QUERY = 'your_search_keyword'

const fetchMoviesDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMoviesDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMoviesDetails.rejected, (state, action) => {
      console.error("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default fetchMoviesDetailsSlice.reducer;
