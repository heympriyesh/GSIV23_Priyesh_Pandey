import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./css/moviecard.css";
const MovieCard = () => {
  return (
    <Card sx={{ maxWidth: 220 }} className="card_styl">
      <CardActionArea>
        <div className="image">
          <CardMedia
            component="img"
            height="330"
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/elTZhUPe0uFaTrqISJZoVXSJHxf.jpg"
            alt="green iguana"
          />
        </div>
        <CardContent
          style={{
            padding: "10px",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="_top_movie_name_rating"
          >
            <div className="__text-trucate">Meg 2: The Trench</div>
            <div className="_rating">7.5</div>
          </Typography>
          <Typography variant="p" component="div" className="_des_small">
            An exploratory dive into the deepest depths of the ocean of a daring
            research team spirals into chaos when a malevolent mining operation
            threatens their mission and forces them into a high-stakes battle
            for survival
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
