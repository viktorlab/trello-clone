import { IN_PROGRESS, FAILED, SUCCEEDED } from 'constants/fetchingStatus';
import cardsService from 'services/cardsService';
import { setFetching, addNewCard as addNewCardAction } from '../slice';

function addNewCard(params) {
  return async function addNewCardThunk(dispatch, getState) {
    try {
      const { fetching } = getState().cards;

      if (fetching === IN_PROGRESS) {
        return;
      }

      dispatch(setFetching(IN_PROGRESS));

      const data = await cardsService.addNewCard(params);
      if (!data) {
        dispatch(setFetching(FAILED));
      }

      dispatch(addNewCardAction(data));
      dispatch(setFetching(SUCCEEDED));
    } catch (error) {
      console.error(error);
      dispatch(setFetching(FAILED));
    }
  };
}

export default addNewCard;
