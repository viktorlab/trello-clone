import { IN_PROGRESS, FAILED, SUCCEEDED } from 'constants/fetchingStatus';
import batchService from 'services/batchService';
import { setFetching, setLists } from '../slice';
import { setCards } from '../../cards/slice';

function fetchListsAndCards(boardId) {
  return async function fetchListsAndCardsThunk(dispatch, getState) {
    try {
      const { fetching } = getState().lists;

      if (fetching === IN_PROGRESS) {
        return;
      }

      dispatch(setFetching(IN_PROGRESS));

      const data = await batchService.getListsAndCardsByBoardId(boardId);

      if (!data) {
        dispatch(setFetching(FAILED));
      }

      const [cards, lists] = data;

      dispatch(setCards(cards[200]));
      dispatch(setLists(lists[200]));
      dispatch(setFetching(SUCCEEDED));
    } catch (error) {
      console.error(error);
      dispatch(setFetching(FAILED));
    }
  };
}

export default fetchListsAndCards;
