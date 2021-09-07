import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fetching: null,
  comments: [],
};

function setFetchingFunction(state, action) {
  return {
    ...state,
    fetching: action.payload,
  };
}

function setCommentsFunction(state, action) {
  return {
    ...state,
    comments: action.payload,
  };
}

function addNewCommentFunction(state, action) {
  return {
    ...state,
    comments: [...state.comments, action.payload],
  };
}

function updateCommentFunction(state, action) {
  const currentState = state.comments.filter(({ id }) => id !== action.payload.id);

  return {
    ...state,
    comments: [...currentState, action.payload],
  };
}

function deleteCommentFunction(state, action) {
  return {
    ...state,
    comments: state.comments.filter(({ id }) => id !== action.payload),
  };
}

const slice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setFetching: setFetchingFunction,
    setComments: setCommentsFunction,
    addNewComment: addNewCommentFunction,
    updateComment: updateCommentFunction,
    deleteComment: deleteCommentFunction,
  },
});

export const { setFetching, setComments, addNewComment, updateComment, deleteComment } = slice.actions;
export default slice.reducer;
