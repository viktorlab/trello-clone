import { useDispatch } from 'react-redux';
import deleteBoard from 'store/reducers/boards/thunks/deleteBoard';
import { DeleteButton } from './styles/deleteBoardStyles';

function DeleteBoard({ boardId }) {
  const dispatch = useDispatch();

  const handleOnRemoveBoard = () => {
    if (boardId) {
      dispatch(deleteBoard(boardId));
    }
  };

  return <DeleteButton onClick={handleOnRemoveBoard}>x</DeleteButton>;
}

export default DeleteBoard;
