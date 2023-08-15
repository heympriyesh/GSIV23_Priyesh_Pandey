import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "../componets/Header";
import "./css/movie_detail.css";
import { fetchMoviesDetails } from "../store/slice/movieDetails";
import Loader from "../componets/Loader";
import { emptyValue } from "../store/slice/movieList";
import noImagFound from "../assets/image/no_image_found.jpg";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movieDetail);
  const { movie_id } = useParams();
  useEffect(() => {
    dispatch(fetchMoviesDetails(movie_id));
    dispatch(emptyValue([]));
  }, []);

  const addDefaultSrc = (ev) => {
    ev.target.src = noImagFound;
  };

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours + ":" + minutes}`;
  };
  return (
    <>
      <Header />
      {data?.isLoading && <Loader />}
      <div className="_main_">
        <div className="_movie_detail_img_container">
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data?.data?.poster_path}`}
            onError={(event) => addDefaultSrc(event)}
          />
        </div>
        <div className="__rest_detail">
          <h2 className="_movie_name">
            {data?.data?.original_title}{" "}
            <span className="__movie_detail_rating">
              {data?.data?.vote_average}
            </span>
          </h2>
          <p className="_year_length_director">
            {data?.data?.release_date} |{" "}
            {toHoursAndMinutes(data?.data?.runtime)}
          </p>
          <p className="_cast">Cast : ---</p>
          <p className="_desc_"> Description : {data?.data?.overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
