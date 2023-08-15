import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchMovies = createAsyncThunk("fetchMovies", async (page = 1) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&sort_by=primary_release_date.asc`,
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

const movieListSlice = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    totalPage: 1,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      console.log("🚀 ~ action:", action);
      state.isLoading = false;
      state.data = [...state.data,...action.payload.results];
      state.totalPage=action.payload.total_pages;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      console.error("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default movieListSlice.reducer;
