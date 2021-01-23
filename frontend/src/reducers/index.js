import loggedReducer from './isLogged';
import cardsReducer from'./cards';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
  isLogged: loggedReducer,
  cards: cardsReducer
});

export default allReducer;