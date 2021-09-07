import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { IN_PROGRESS } from 'constants/fetchingStatus';
import updateCard from 'store/reducers/cards/thunks/updateCard';
import getFetchingStatus from 'store/reducers/cards/selectors/getFetchingStatus';
import { Plus } from 'react-feather';
import AddNewList from 'components/board/components/lists/components/addNewList/AddNewList';
import { onDragEnd } from './onDragEnd';
import { AddNewListContainer, Root } from './styles/listsStyles';
import List from './components/list/List';

function Lists({ listsAndCardsData }) {
  const dispatch = useDispatch();
  const [lists, setLists] = useState({});
  const [cardPosition, setCardPosition] = useState();
  const [cardId, setCardId] = useState();
  const [listId, setListId] = useState();
  const fetching = useSelector(getFetchingStatus);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (cardId && cardPosition) {
      dispatch(updateCard(cardId, { pos: cardPosition, idList: listId }));
    }
  }, [cardId, cardPosition]);

  useEffect(() => {
    if (fetching !== IN_PROGRESS) {
      setLists(listsAndCardsData);
    }
  }, [listsAndCardsData]);

  const handleOnDragEnd = (result) => {
    return onDragEnd(result, lists, setLists, setListId, setCardId, setCardPosition);
  };

  return (
    <Root>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {Object.entries(lists).map(([listId, list]) => (
          <List key={listId} list={list} listId={listId} />
        ))}
      </DragDropContext>
      <AddNewListContainer onClick={handleShowModal}>
        <Plus />
        Add new list
      </AddNewListContainer>
      <AddNewList show={showModal} onClose={handleCloseModal} />
    </Root>
  );
}

export default Lists;
