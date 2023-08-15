import * as React from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import noImagFound from '../assets/image/no_image_found.jpg'
import "./css/moviecard.css";
const MovieCard = ({data}) => {
  
  const navigate = useNavigate();
  
  const addDefaultSrc=(ev)=>{
    ev.target.src = noImagFound
  }
  
  return (

    <Card sx={{ maxWidth: 270 }} className="card_styl" onClick={()=>navigate(`/detail/${data?.id}`)}>
      <CardActionArea>
        <div className="image">
          <CardMedia
            component="img"
            height="300"
            image={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`}
            alt="green iguana"
            onError={(event)=>addDefaultSrc(event)}
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
            <div className="__text-trucate">{data.original_title}</div>
            <div className="_rating">{data.vote_average}</div>
          </Typography>
          <Typography variant="p" component="div" className="_des_small">
           {data.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
