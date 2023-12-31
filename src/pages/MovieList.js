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
  console.log("state", state);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchMovies({ page }));
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 3 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
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
        {state?.data && state.data.length != 0 ? (
          <Grid container spacing={2}>
            {state?.data &&
              state?.data.map((data, index) => {
                return (
                  <Grid
                    item
                    xs={6}
                    md={4}
                    lg={2}
                    key={data?.id + index + data?.original_title}
                  >
                    <MovieCard data={data} />
                  </Grid>
                );
              })}
          </Grid>
        ) : (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50% ,-50%)",
              fontSize: "40px",
              color: "#CF3721",
              whiteSpace:"nowrap"
            }}
          >
           {!state.isLoading?"No Data Found":""} 
          </div>
        )}
      </div>
    </>
  );
};

export default MovieList;
