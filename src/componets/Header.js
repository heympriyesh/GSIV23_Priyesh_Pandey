import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { Home } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { emptyValue, fetchMovies } from "../store/slice/movieList";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: "#DFDFDF",
  "&:hover": {
    backgroundColor: "#DFDFDF",
  },
  marginLeft: 0,
  width: "100%",
  color: "#9B9B9B",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(1),
    width: "80%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  color: "#9B9B9B",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#4A4A4A",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    //   color:"#9B9B9B",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "80ch",
      },
    },
  },
}));
const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  display: "flex",
  backgroundColor: "white",
}));

const Header = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();

  const handleChange = (value) => {
    if (value.length === 0) {
      setSearch(value);
      dispatch(emptyValue());
      dispatch(fetchMovies({ page: 1 }));
    } else {
      setSearch(value);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.length != 0) {
        dispatch(emptyValue());
        dispatch(fetchMovies({ page: 1, search }));
      }
    }, 400);
    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ToolbarStyle>
          {location.pathname.includes("/detail") ? (
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ color: "#4A4A4A" }}
            >
              Movie Details
            </Typography>
          ) : (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
              />
            </Search>
          )}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              navigate("/");
            }}
          >
            <Home style={{ color: "#4A4A4A" }} />
          </IconButton>
        </ToolbarStyle>
      </AppBar>
    </Box>
  );
};

export default Header;
