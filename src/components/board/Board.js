import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchListsAndCards from 'store/reducers/lists/thunks/fetchListsAndCards';
import getListsAndCardsData from 'store/reducers/lists/selectors/getListsAndCardsData';
import Header from 'components/board/components/header/Header';
import Loader from 'components/common/loader/Loader';
import getFetchingStatus from 'store/reducers/lists/selectors/getFetchingStatus';
import { IN_PROGRESS } from 'constants/fetchingStatus';
import Lists from './components/lists/Lists';

function Board() {
  const dispatch = useDispatch();
  const { boardId, boardName } = useParams();
  const fetching = useSelector(getFetchingStatus);
  const listsAndCardsData = useSelector(getListsAndCardsData);

  useEffect(() => {
    if (boardId) {
      dispatch(fetchListsAndCards(boardId));
    }
  }, []);

  if (fetching === IN_PROGRESS) {
    return <Loader />;
  }

  return (
    <>
      <Header boardName={boardName} boardId={boardId} />
      <Lists listsAndCardsData={listsAndCardsData} />
    </>
  );
}

export default Board;
