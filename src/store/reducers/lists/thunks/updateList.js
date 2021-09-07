import listsService from 'services/listsService';
import { updateList as updateListAction } from '../slice';

function updateList(listId, params) {
  return async function updateListThunk(dispatch) {
    try {
      const data = await listsService.updateList(listId, params);
      if (!data) {
        return;
      }

      dispatch(updateListAction(data));
    } catch (error) {
      console.error(error);
    }
  };
}

export default updateList;
