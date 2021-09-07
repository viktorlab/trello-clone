import listsService from 'services/listsService';
import { addNewList as addNewListAction } from '../slice';

function addNewList(params) {
  return async function addNewListThunk(dispatch) {
    try {
      const data = await listsService.addNewList(params);
      if (!data) {
        return;
      }

      dispatch(addNewListAction(data));
    } catch (error) {
      console.error(error);
    }
  };
}

export default addNewList;
