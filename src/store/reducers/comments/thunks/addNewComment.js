import { IN_PROGRESS, FAILED, SUCCEEDED } from 'constants/fetchingStatus';
import cardsService from 'services/cardsService';
import { setFetching, addNewComment as addNewCommentAction } from '../slice';

function addNewComment(cardId, params) {
  return async function addNewCommentThunk(dispatch, getState) {
    try {
      const { fetching } = getState().comments;

      if (fetching === IN_PROGRESS) {
        return;
      }

      dispatch(setFetching(IN_PROGRESS));

      const data = await cardsService.addNewCommentToCard(cardId, params);
      if (!data) {
        dispatch(setFetching(FAILED));
      }

      dispatch(addNewCommentAction(data));
      dispatch(setFetching(SUCCEEDED));
    } catch (error) {
      console.error(error);
      dispatch(setFetching(FAILED));
    }
  };
}

export default addNewComment;
