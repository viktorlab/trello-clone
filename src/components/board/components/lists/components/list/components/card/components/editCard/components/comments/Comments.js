import AddNewComment from './components/addNewComment/AddNewComment';
import Comment from './components/comment/Comment';
import { FormContainer, Root } from '../../styles/editCardStyles';

function Comments({ comments, cardId }) {
  return (
    <Root>
      <FormContainer>
        <AddNewComment cardId={cardId} />
        {comments.map(({ id, text, createdBy, createdDate }) => (
          <Comment key={id} text={text} id={id} createdBy={createdBy} createdDate={createdDate} />
        ))}
      </FormContainer>
    </Root>
  );
}

export default Comments;
