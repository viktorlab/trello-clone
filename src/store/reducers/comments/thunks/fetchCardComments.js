import { IN_PROGRESS, FAILED, SUCCEEDED } from 'constants/fetchingStatus';
import cardsService from 'services/cardsService';
import { setFetching, setComments } from '../slice';

function fetchCardComments(cardId) {
  return async function fetchCardCommentsThunk(dispatch, getState) {
    try {
      const { fetching } = getState().comments;

      if (fetching === IN_PROGRESS) {
        return;
      }

      dispatch(setFetching(IN_PROGRESS));

      const data = await cardsService.getCommentsFromACard(cardId);

      if (!data) {
        dispatch(setFetching(FAILED));
      }

      dispatch(setComments(data));
      dispatch(setFetching(SUCCEEDED));
    } catch (error) {
      console.error(error);
      dispatch(setFetching(FAILED));
    }
  };
}

export default fetchCardComments;
