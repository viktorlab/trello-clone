import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalWindow from 'components/common/modalWindow/ModalWindow';
import { Form, Input, SubmitButton } from 'components/boards/components/addNewBoard/styles/addNewBoardStyles';
import { useParams } from 'react-router-dom';
import addNewList from 'store/reducers/lists/thunks/addNewList';

function AddNewList({ onClose, show }) {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();

  const handleOnInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    if (boardId) {
      dispatch(addNewList({ idBoard: boardId, name: inputValue, pos: 'bottom' }));
    }
    onClose();
  };

  return (
    <ModalWindow width='300px' height='100px' onClose={onClose} show={show}>
      <Form onSubmit={handleOnFormSubmit}>
        <Input type='text' autoFocus onChange={handleOnInputChange} placeholder='Add new list' />
        <SubmitButton type='submit'>Submit</SubmitButton>
      </Form>
    </ModalWindow>
  );
}

export default AddNewList;
