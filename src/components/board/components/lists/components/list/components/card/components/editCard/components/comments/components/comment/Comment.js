import { useState } from 'react';
import { useDispatch } from 'react-redux';
import deleteComment from 'store/reducers/comments/thunks/deleteComment';
import updateComment from 'store/reducers/comments/thunks/updateComment';
import {
  AvatarIcon,
  TextArea,
  Container,
  CommentsWrapper,
  Button,
  ButtonsContainer,
  CommentInfo,
  CreatedBy,
  CreatedDate,
} from '../../../../styles/editCardStyles';

function Comment({ id, text, createdBy, createdDate }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(text);

  const handleOnChangeInputValue = (e) => setInputValue(e.target.value);

  const handleOnCommentUpdate = () => {
    if (id) {
      dispatch(updateComment(id, { text: inputValue }));
    }
  };

  const handleOnCommentDelete = () => {
    if (id) {
      dispatch(deleteComment(id));
    }
  };

  return (
    <Container>
      <CommentInfo>
        <CreatedBy>{createdBy}</CreatedBy>
        <CreatedDate>{createdDate}</CreatedDate>
      </CommentInfo>
      <CommentsWrapper>
        <AvatarIcon />

        <TextArea defaultValue={text} onChange={handleOnChangeInputValue} />
      </CommentsWrapper>
      <ButtonsContainer>
        <Button type='button' onClick={handleOnCommentUpdate}>
          Update
        </Button>
        <Button type='button' onClick={handleOnCommentDelete}>
          Delete
        </Button>
      </ButtonsContainer>
    </Container>
  );
}

export default Comment;
