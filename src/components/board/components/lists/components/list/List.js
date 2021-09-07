import { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Plus } from 'react-feather';
import AddNewCard from 'components/board/components/lists/components/list/components/addNewCard/AddNewCard';
import UpdateListName from './components/updateListName/UpdateListName';
import Card from './components/card/Card';
import {
  AddNewCardContainer,
  DNDContainer,
  Icon,
  ListContainer,
  ListTitle,
  Root,
  TitleContainer,
} from './styles/listStyles';

function List({ list, listId }) {
  const [showUpdateListModal, setShowUpdateListModal] = useState(false);
  const [showAddNewCardModal, setAddNewCardModal] = useState(false);

  const handleShowUpdateListModal = () => setShowUpdateListModal(true);
  const handleCloseUpdateListModal = () => setShowUpdateListModal(false);

  const handleShowAddNewCardModal = () => setAddNewCardModal(true);
  const handleCloseAddNewCardModal = () => setAddNewCardModal(false);

  return (
    <Root>
      <TitleContainer>
        <ListTitle>{list.name}</ListTitle>
        <Icon onClick={handleShowUpdateListModal} />
      </TitleContainer>
      <DNDContainer style={{ margin: 8 }}>
        <Droppable droppableId={listId} key={listId}>
          {(provided, snapshot) => (
            <ListContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {list.items.map((item, index) => (
                <Card key={item.id} card={item} index={index} />
              ))}
              {provided.placeholder}
            </ListContainer>
          )}
        </Droppable>
      </DNDContainer>
      <AddNewCardContainer onClick={handleShowAddNewCardModal}>
        <Plus />
        Add new card
      </AddNewCardContainer>
      <AddNewCard onClose={handleCloseAddNewCardModal} show={showAddNewCardModal} listId={listId} />
      <UpdateListName
        onClose={handleCloseUpdateListModal}
        show={showUpdateListModal}
        listName={list.name}
        listId={listId}
      />
    </Root>
  );
}

export default List;
