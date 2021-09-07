import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalWindow from 'components/common/modalWindow/ModalWindow';
import { Form, Input, SubmitButton } from 'components/boards/components/addNewBoard/styles/addNewBoardStyles';
import addNewCard from 'store/reducers/cards/thunks/addNewCard';

function AddNewCard({ onClose, show, listId }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();

  const handleOnInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewCard({ idList: listId, name: inputValue, pos: 'bottom' }));
    onClose();
  };

  return (
    <ModalWindow width='300px' height='100px' onClose={onClose} show={show}>
      <Form onSubmit={handleOnFormSubmit}>
        <Input type='text' autoFocus onChange={handleOnInputChange} placeholder='Add new card' />
        <SubmitButton type='submit'>Submit</SubmitButton>
      </Form>
    </ModalWindow>
  );
}

export default AddNewCard;
