import { useState } from 'react';
import { useDispatch } from 'react-redux';
import updateCard from 'store/reducers/cards/thunks/updateCard';
import { Button, FormContainer, EditCardNameIcon, Root, TextArea } from '../../styles/editCardStyles';

function EditCardName({ card }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(card.name);
  const handleOnInputChange = (e) => setInputValue(e.target.value);

  const handleUpdateCardName = () => {
    dispatch(updateCard(card.id, { name: inputValue }));
  };

  return (
    <Root>
      <EditCardNameIcon />
      <FormContainer>
        <TextArea defaultValue={card.name} autoFocus onChange={handleOnInputChange} placeholder='Title' />
        <Button onClick={handleUpdateCardName} type='button'>
          Update
        </Button>
      </FormContainer>
    </Root>
  );
}

export default EditCardName;
