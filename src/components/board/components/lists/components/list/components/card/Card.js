import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import deleteCard from 'store/reducers/cards/thunks/deleteCard';
import EditCard from 'components/board/components/lists/components/list/components/card/components/editCard/EditCard';
import { CardContainer, DeleteButton, EditButton } from './styles/cardStyles';

function Card({ card, index }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState();

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleDeleteCard = () => {
    if (card.id) {
      dispatch(deleteCard(card.id));
    }
  };

  return (
    <>
      <Draggable draggableId={card.id} index={index}>
        {(provided, snapshot) => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            style={{ ...provided.draggableProps.style }}
          >
            <DeleteButton onClick={handleDeleteCard} />
            <EditButton onClick={handleShowModal} />
            {card.name}
          </CardContainer>
        )}
      </Draggable>
      <EditCard onClose={handleCloseModal} show={showModal} card={card} />
    </>
  );
}

export default Card;
