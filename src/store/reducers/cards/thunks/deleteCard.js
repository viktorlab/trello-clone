import { IN_PROGRESS, FAILED, SUCCEEDED } from 'constants/fetchingStatus';
import cardsService from 'services/cardsService';
import { setFetching, deleteCard as deleteCardAction } from '../slice';

function deleteCard(cardId) {
  return async function deleteCardThunk(dispatch, getState) {
    try {
      const { fetching } = getState().cards;

      if (fetching === IN_PROGRESS) {
        return;
      }

      dispatch(setFetching(IN_PROGRESS));

      const data = await cardsService.deleteCard(cardId);
      if (!data) {
        dispatch(setFetching(FAILED));
      }

      dispatch(deleteCardAction(cardId));
      dispatch(setFetching(SUCCEEDED));
    } catch (error) {
      console.error(error);
      dispatch(setFetching(FAILED));
    }
  };
}

export default deleteCard;
