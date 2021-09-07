import { combineReducers } from '@reduxjs/toolkit';
import boards from './boards/slice';
import lists from './lists/slice';
import cards from './cards/slice';
import comments from './comments/slice';

export default combineReducers({
  boards,
  lists,
  cards,
  comments,
});
