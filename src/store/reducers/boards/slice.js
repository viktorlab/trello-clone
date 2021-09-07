import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fetching: null,
  boards: [],
};

function setFetchingFunction(state, action) {
  return {
    ...state,
    fetching: action.payload,
  };
}

function setBoardsFunction(state, action) {
  return {
    ...state,
    boards: action.payload,
  };
}

function addNewBoardFunction(state, action) {
  return {
    ...state,
    boards: [...state.boards, action.payload],
  };
}

function deleteBoardFunction(state, action) {
  return {
    ...state,
    boards: state.boards.filter(({ id }) => id !== action.payload),
  };
}

const slice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setFetching: setFetchingFunction,
    setBoards: setBoardsFunction,
    addNewBoard: addNewBoardFunction,
    deleteBoard: deleteBoardFunction,
  },
});

export const { setFetching, setBoards, addNewBoard, deleteBoard } = slice.actions;
export default slice.reducer;
