import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalWindow from 'components/common/modalWindow/ModalWindow';
import addNewBoard from 'store/reducers/boards/thunks/addNewBoard';
import { Form, Input, SubmitButton } from './styles/addNewBoardStyles';

function AddNewBoard({ onClose, show }) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState();

  const handleOnInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewBoard({ name: inputValue }));
    onClose();
  };

  return (
    <ModalWindow width='300px' height='100px' onClose={onClose} show={show}>
      <Form onSubmit={handleOnFormSubmit}>
        <Input autoFocus type='text' onChange={handleOnInputChange} placeholder='Add board title' />
        <SubmitButton type='submit'>Submit</SubmitButton>
      </Form>
    </ModalWindow>
  );
}

export default AddNewBoard;
