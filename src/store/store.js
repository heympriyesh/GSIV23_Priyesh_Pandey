import {configureStore} from '@reduxjs/toolkit';
import movieReducer from './slice/movieList';
import movieDetailReducer from './slice/movieDetails';

export const store=configureStore({
    reducer:{
        movieList:movieReducer,
        movieDetail:movieDetailReducer
    }
})