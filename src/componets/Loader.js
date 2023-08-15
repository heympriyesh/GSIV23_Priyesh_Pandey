import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./css/loader.css";
const Loader = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-div">
        <CircularProgress
          color="success"
          style={{
            height: "100px",
            width: "100px",
            color: "#34A853",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
