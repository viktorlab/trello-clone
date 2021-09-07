import { IN_PROGRESS, FAILED, SUCCEEDED } from 'constants/fetchingStatus';
import boardsSerice from 'services/boardsService';
import { setFetching, addNewBoard as addNewBoardAction } from '../slice';

function addNewBoard(requestBody) {
  return async function addNewBoardThunk(dispatch, getState) {
    try {
      const { fetching } = getState().boards;

      if (fetching === IN_PROGRESS) {
        return;
      }

      dispatch(setFetching(IN_PROGRESS));

      const data = await boardsSerice.addNewBoard(requestBody);

      if (!data) {
        dispatch(setFetching(FAILED));
      }

      dispatch(addNewBoardAction(data));
      dispatch(setFetching(SUCCEEDED));
    } catch (error) {
      console.error(error);
      dispatch(setFetching(FAILED));
    }
  };
}

export default addNewBoard;
