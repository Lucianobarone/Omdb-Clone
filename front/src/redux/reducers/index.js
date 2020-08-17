import { combineReducers } from 'redux';

import moviesReducer from './movies-reducer';
import loginReducer from './login-reducer';
import favoritosReducer from './favoritos-reducer'





export default combineReducers({
    movies: moviesReducer,
    login: loginReducer ,
    favoritos : favoritosReducer

  });