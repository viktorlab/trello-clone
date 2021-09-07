import store from 'store';
import { addNewBoard, deleteBoard } from './slice';

test('it should add new board', () => {
  let state = store.getState().boards;
  const initialBoardsCount = state.boards.length;

  store.dispatch(addNewBoard({ id: '1', name: 'New board' }));
  state = store.getState().boards;
  const newlyAddedBoard = state.boards?.find(({ id }) => id === '1');

  expect(newlyAddedBoard?.name).toBe('New board');
  expect(state.boards.length).toBeGreaterThan(initialBoardsCount);
});

test('it should delete a board by board id', () => {
  let state = store.getState().boards;
  const initialBoardsCount = state.boards.length;

  store.dispatch(deleteBoard('1'));
  state = store.getState().boards;

  expect(state.boards.length).toBeLessThanOrEqual(initialBoardsCount);
});
