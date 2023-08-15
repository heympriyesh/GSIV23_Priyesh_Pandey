import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
// import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Home } from '@mui/icons-material';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "10px",
    backgroundColor: '#DFDFDF',
    '&:hover': {
      backgroundColor: "#DFDFDF",
    },
    marginLeft: 0,
    width: '100%',
    color:"#9B9B9B",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(1),
        width: '80%',
      },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:"10px"
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#4A4A4A',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    //   color:"#9B9B9B",
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          width: '80ch',
        },
      },
    },
  }));
  const ToolbarStyle= styled(Toolbar)(({ theme }) => ({
    justifyContent:'space-between',
    display:'flex',
    backgroundColor:"white"
  }));

  const Header = () => {
    const [search,setSearch]=useState("");
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <ToolbarStyle> 
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={search}
                  onChange={(e)=>{setSearch(e.target.value);console.log('event.',e.target.value)}}
                />
              </Search>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={e=>navigate('/')}
              >
                <Home  style={{color:"#4A4A4A"}}/>
              </IconButton>
            
            </ToolbarStyle>
          </AppBar>
        </Box>
      );
}

export default Header