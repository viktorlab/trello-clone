import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fetching: null,
  lists: [],
};

function setFetchingFunction(state, action) {
  return {
    ...state,
    fetching: action.payload,
  };
}

function setListsFunction(state, action) {
  return {
    ...state,
    lists: action.payload,
  };
}

function addNewListFunction(state, action) {
  return {
    ...state,
    lists: [...state.lists, action.payload],
  };
}

function updateListFunction(state, action) {
  const currentState = state.lists.filter(({ id }) => id !== action.payload.id);

  return {
    ...state,
    lists: [...currentState, action.payload],
  };
}

const slice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    setFetching: setFetchingFunction,
    setLists: setListsFunction,
    addNewList: addNewListFunction,
    updateList: updateListFunction,
  },
});

export const { setFetching, setLists, addNewList, updateList } = slice.actions;
export default slice.reducer;
