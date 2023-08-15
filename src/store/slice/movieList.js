import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchMovies = createAsyncThunk(
  "fetchMovies",
  async ({ page = 1, search = null }) => {
    console.log("query", search);
    const response = await fetch(
      search
        ? `https://api.themoviedb.org/3/search/movie?language=en-US&page=${page}&query=${search}`
        : `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&sort_by=primary_release_date.asc`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_APIKEY}`,
        },
      }
    );
    return response.json();
  }
);



const movieListSlice = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    totalPage: 1,
    currentPage: 1,
  },
  reducers: {
    emptyValue: (state, action) => {
      state.data = action.payload || [];
      state.isError = false;
      state.totalPage = 1;
      state.isLoading = false;
      state.currentPage = 1;
    },
    incrementCurrentPage: (state) => {
      state.currentPage += 1;
    },
    setCurrentPageToDefault: (state) => {
      state.currentPage = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, ...action.payload.results];
      state.totalPage = action.payload.total_pages;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      console.error("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
  },
});
export const { emptyValue, incrementCurrentPage, setCurrentPageToDefault } =
  movieListSlice.actions;
export default movieListSlice.reducer;
