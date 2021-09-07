import { useDispatch } from 'react-redux';
import { useState } from 'react';
import addNewComment from 'store/reducers/comments/thunks/addNewComment';
import {
  TextArea,
  Container,
  CommentsWrapper,
  AvatarIcon,
  ButtonsContainer,
  Button,
} from '../../../../styles/editCardStyles';

function AddNewComment({ cardId }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleOnChangeInputValue = (e) => setInputValue(e.target.value);

  const handleOnAddNewComment = () => {
    if (cardId) {
      dispatch(addNewComment(cardId, { text: inputValue }));
    }
    setInputValue('');
  };

  return (
    <Container>
      <CommentsWrapper>
        <AvatarIcon />
        <TextArea onChange={handleOnChangeInputValue} value={inputValue} placeholder='Write a comment...' />
      </CommentsWrapper>
      <ButtonsContainer>
        <Button type='button' onClick={handleOnAddNewComment}>
          Add new comment
        </Button>
      </ButtonsContainer>
    </Container>
  );
}

export default AddNewComment;
