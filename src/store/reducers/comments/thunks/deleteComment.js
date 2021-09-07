import { IN_PROGRESS, FAILED, SUCCEEDED } from 'constants/fetchingStatus';
import cardsService from 'services/cardsService';
import { setFetching, deleteComment as deleteCommentAction } from '../slice';

function deleteComment(commentId) {
  return async function deleteCommentThunk(dispatch, getState) {
    try {
      const { fetching } = getState().comments;

      if (fetching === IN_PROGRESS) {
        return;
      }

      dispatch(setFetching(IN_PROGRESS));

      const data = await cardsService.deleteCommentFromCard(commentId);
      if (!data) {
        dispatch(setFetching(FAILED));
      }

      dispatch(deleteCommentAction(commentId));
      dispatch(setFetching(SUCCEEDED));
    } catch (error) {
      console.error(error);
      dispatch(setFetching(FAILED));
    }
  };
}

export default deleteComment;
