import { IN_PROGRESS, FAILED, SUCCEEDED } from 'constants/fetchingStatus';
import cardsService from 'services/cardsService';
import { setFetching, updateComment as updateCommentAction } from '../slice';

function updateComment(commentId, params) {
  return async function updateCommentThunk(dispatch, getState) {
    try {
      const { fetching } = getState().comments;

      if (fetching === IN_PROGRESS) {
        return;
      }

      dispatch(setFetching(IN_PROGRESS));

      const data = await cardsService.updateCommentFromCard(commentId, params);
      if (!data) {
        dispatch(setFetching(FAILED));
      }

      dispatch(updateCommentAction(data));
      dispatch(setFetching(SUCCEEDED));
    } catch (error) {
      console.error(error);
      dispatch(setFetching(FAILED));
    }
  };
}

export default updateComment;
