import { IN_PROGRESS, FAILED, SUCCEEDED } from 'constants/fetchingStatus';
import boardsSerice from 'services/boardsService';
import { setFetching, deleteBoard as deleteBoardAction } from '../slice';

function deleteBoard(boardId) {
  return async function deleteBoardThunk(dispatch, getState) {
    try {
      const { fetching } = getState().boards;

      if (fetching === IN_PROGRESS) {
        return;
      }

      dispatch(setFetching(IN_PROGRESS));

      const data = await boardsSerice.deleteBoard(boardId);

      if (!data) {
        dispatch(setFetching(FAILED));
      }

      dispatch(deleteBoardAction(boardId));
      dispatch(setFetching(SUCCEEDED));
    } catch (error) {
      console.error(error);
      dispatch(setFetching(FAILED));
    }
  };
}

export default deleteBoard;
