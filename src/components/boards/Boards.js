import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchBoards from 'store/reducers/boards/thunks/fetchBoards';
import getAllBoards from 'store/reducers/boards/selectors/getAllBoards';
import getFetchingStatus from 'store/reducers/boards/selectors/getFetchingStatus';
import { IN_PROGRESS } from 'constants/fetchingStatus';
import Loader from 'components/common/loader/Loader';
import { Root, BoardItem, BoardItemContainer } from './styles/boardStyles';
import AddNewBoard from './components/addNewBoard/AddNewBoard';
import DeleteBoard from './components/deleteBoard/DeleteBoard';

function Boards() {
  const [showModal, setShowModal] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
  }, []);

  const fetching = useSelector(getFetchingStatus);
  const boards = useSelector(getAllBoards);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  if (fetching === IN_PROGRESS) {
    return <Loader />;
  }

  return (
    <Root>
      {boards?.map(({ name, id }) => (
        <BoardItemContainer key={id}>
          <DeleteBoard boardId={id} />
          <Link to={`/board/${id}/${name}`}>
            <BoardItem>{name}</BoardItem>
          </Link>
        </BoardItemContainer>
      ))}
      <BoardItem color='grey' onClick={handleShowModal}>
        Create new board
      </BoardItem>
      <AddNewBoard onClose={handleCloseModal} show={showModal} />
    </Root>
  );
}

export default Boards;
