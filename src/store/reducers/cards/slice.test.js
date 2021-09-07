import store from 'store';
import { addNewCard, deleteCard } from 'store/reducers/cards/slice';

test('it should add new card', () => {
  let state = store.getState().cards;
  const initialCardsCount = state.cards.length;

  store.dispatch(addNewCard({ id: '1', name: 'New card' }));
  state = store.getState().cards;
  const newlyAddedCard = state.cards?.find(({ id }) => id === '1');

  expect(newlyAddedCard?.name).toBe('New card');
  expect(state.cards.length).toBeGreaterThan(initialCardsCount);
});

test('it should delete a card by id', () => {
  let state = store.getState().cards;
  const initialCardsCount = state.cards.length;

  store.dispatch(deleteCard('1'));
  state = store.getState().cards;

  expect(state.cards.length).toBeLessThanOrEqual(initialCardsCount);
});
