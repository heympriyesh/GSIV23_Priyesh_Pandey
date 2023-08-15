import React, { useEffect, useState } from "react";
import Header from "../componets/Header";
import MovieCard from "../componets/MovieCard";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/slice/movieList";
import Loader from "../componets/Loader";

const MovieList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.movieList);
  const [page, setPage] = useState(1);
  // console.log("🚀 ~ page:", state);
  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // console.log('inside')
        setPage((prev) => prev + 1);
        // dispatch(fetchMovies(page));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);
  return (
    <>
      <Header />
      {state?.isLoading && <Loader />}

      <div
        className="__move_list_main"
        style={{
          margin: "30px",
        }}
      >
        <Grid container spacing={2}>
          {state.data &&
            state.data &&
            state.data.map((data,index) => {
              return (
                <Grid item xs={6} md={4} lg={2} key={data?.id + index+ data?.original_title}>
                  <MovieCard data={data} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default MovieList;
