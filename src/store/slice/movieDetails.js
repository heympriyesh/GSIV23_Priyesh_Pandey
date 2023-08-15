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

const fetchMoviesDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers:{
    emptyMovieDetailValue:(state,action) => {
      state.data=action.payload || null;
      state.isError=false;
      state.isLoading=false;
    }
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
export const {emptyMovieDetailValue} =fetchMoviesDetailsSlice.actions;

export default fetchMoviesDetailsSlice.reducer;
