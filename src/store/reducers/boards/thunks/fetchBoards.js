import { IN_PROGRESS, FAILED, SUCCEEDED } from 'constants/fetchingStatus';
import boardsSerice from 'services/boardsService';
import { setFetching, setBoards } from '../slice';

function fetchBoards() {
  return async function fetchBoardsThunk(dispatch, getState) {
    try {
      const { fetching } = getState().boards;

      if (fetching === IN_PROGRESS) {
        return;
      }

      dispatch(setFetching(IN_PROGRESS));

      const data = await boardsSerice.getAllBoards();

      if (!data) {
        dispatch(setFetching(FAILED));
      }

      dispatch(setBoards(data));
      dispatch(setFetching(SUCCEEDED));
    } catch (error) {
      console.error(error);
      dispatch(setFetching(FAILED));
    }
  };
}

export default fetchBoards;
