import React from "react";
import Header from "../componets/Header";
import MovieCard from "../componets/MovieCard";
import { Grid } from "@mui/material";

const MovieList = () => {
  return (
    <>
      <Header />
      <div
        className="__move_list_main"
        style={{
          margin: "30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={4} lg={2}>
            <MovieCard />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MovieCard />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MovieCard />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MovieCard />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MovieCard />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MovieCard />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MovieList;
