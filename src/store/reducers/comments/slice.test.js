import store from 'store';
import { addNewComment, deleteComment } from 'store/reducers/comments/slice';

test('it should add new comment', () => {
  let state = store.getState().comments;
  const initialCardsCount = state.comments.length;

  store.dispatch(addNewComment({ id: '1', name: 'New comment' }));
  state = store.getState().comments;
  const newlyAddedCard = state.comments?.find(({ id }) => id === '1');

  expect(newlyAddedCard?.name).toBe('New comment');
  expect(state.comments.length).toBeGreaterThan(initialCardsCount);
});

test('it should delete a comment by id', () => {
  let state = store.getState().comments;
  const initialCardsCount = state.comments.length;

  store.dispatch(deleteComment('1'));
  state = store.getState().comments;

  expect(state.comments.length).toBeLessThanOrEqual(initialCardsCount);
});
