import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalWindow from 'components/common/modalWindow/ModalWindow';
import { Form, Input, SubmitButton } from 'components/boards/components/addNewBoard/styles/addNewBoardStyles';
import updateList from 'store/reducers/lists/thunks/updateList';

function UpdateListName({ onClose, show, listName, listId }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();

  const handleOnInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateList(listId, { name: inputValue }));
    onClose();
  };

  return (
    <ModalWindow width='300px' height='100px' onClose={onClose} show={show}>
      <Form onSubmit={handleOnFormSubmit}>
        <Input
          type='text'
          autoFocus
          defaultValue={listName}
          onChange={handleOnInputChange}
          placeholder='Update list title'
        />
        <SubmitButton type='submit'>Update list</SubmitButton>
      </Form>
    </ModalWindow>
  );
}

export default UpdateListName;
