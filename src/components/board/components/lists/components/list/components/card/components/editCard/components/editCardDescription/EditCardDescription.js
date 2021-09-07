import { useState } from 'react';
import { useDispatch } from 'react-redux';
import updateCard from 'store/reducers/cards/thunks/updateCard';
import { Button, FormContainer, EditCardDescriptionIcon, Root, TextArea } from '../../styles/editCardStyles';

function EditCardDescription({ card }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(card.name);
  const handleOnInputChange = (e) => setInputValue(e.target.value);

  const handleUpdateCardName = () => {
    dispatch(updateCard(card.id, { desc: inputValue }));
  };

  return (
    <Root>
      <EditCardDescriptionIcon />
      <FormContainer>
        <TextArea defaultValue={card.desc} onChange={handleOnInputChange} placeholder='Description' />
        <Button onClick={handleUpdateCardName} type='button'>
          Update
        </Button>
      </FormContainer>
    </Root>
  );
}

export default EditCardDescription;
