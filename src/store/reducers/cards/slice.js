import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fetching: null,
  cards: [],
};

function setFetchingFunction(state, action) {
  return {
    ...state,
    fetching: action.payload,
  };
}

function setCardsFunction(state, action) {
  return {
    ...state,
    cards: action.payload,
  };
}

function addNewCardFunction(state, action) {
  return {
    ...state,
    cards: [...state.cards, action.payload],
  };
}

function updateCardFunction(state, action) {
  const currentState = state.cards.filter(({ id }) => id !== action.payload.id);

  return {
    ...state,
    cards: [...currentState, action.payload],
  };
}

function deleteCardFunction(state, action) {
  return {
    ...state,
    cards: state.cards.filter(({ id }) => id !== action.payload),
  };
}

const slice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setFetching: setFetchingFunction,
    setCards: setCardsFunction,
    addNewCard: addNewCardFunction,
    updateCard: updateCardFunction,
    deleteCard: deleteCardFunction,
  },
});

export const { setFetching, setCards, addNewCard, updateCard, deleteCard } = slice.actions;
export default slice.reducer;
