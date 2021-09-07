import store from 'store';
import { addNewList } from 'store/reducers/lists/slice';

test('it should add new list', () => {
  let state = store.getState().lists;
  const initialListsCount = state.lists.length;

  store.dispatch(addNewList({ id: '1', name: 'New list' }));
  state = store.getState().lists;
  const newlyAddedList = state.lists?.find(({ id }) => id === '1');

  expect(newlyAddedList?.name).toBe('New list');
  expect(state.lists.length).toBeGreaterThan(initialListsCount);
});
