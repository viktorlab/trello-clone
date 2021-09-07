import { IN_PROGRESS, FAILED, SUCCEEDED } from 'constants/fetchingStatus';
import cardsService from 'services/cardsService';
import { setFetching, updateCard as updateCardAction } from '../slice';

function updateCard(cardId, params) {
  return async function updateCardThunk(dispatch, getState) {
    try {
      const { fetching } = getState().cards;

      if (fetching === IN_PROGRESS) {
        return;
      }

      dispatch(setFetching(IN_PROGRESS));

      const data = await cardsService.updateCard(cardId, params);
      if (!data) {
        dispatch(setFetching(FAILED));
      }

      dispatch(updateCardAction(data));
      dispatch(setFetching(SUCCEEDED));
    } catch (error) {
      console.error(error);
      dispatch(setFetching(FAILED));
    }
  };
}

export default updateCard;
