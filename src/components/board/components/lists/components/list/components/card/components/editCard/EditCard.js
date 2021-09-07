import { useEffect } from 'react';
import ModalWindow from 'components/common/modalWindow/ModalWindow';
import { useDispatch, useSelector } from 'react-redux';
import fetchCardComments from 'store/reducers/comments/thunks/fetchCardComments';
import getAllComments from 'store/reducers/comments/selectors/getAllComments';
import Comments from 'components/board/components/lists/components/list/components/card/components/editCard/components/comments/Comments';
import EditCardDescription from './components/editCardDescription/EditCardDescription';
import EditCardName from './components/editCardName/EditCardName';

function EditCard({ onClose, show, card }) {
  const dispatch = useDispatch();
  const comments = useSelector(getAllComments);
  useEffect(() => {
    if (card.id && show) {
      dispatch(fetchCardComments(card.id));
    }
  }, [show]);

  return (
    <ModalWindow width='768px' height='800px' onClose={onClose} show={show}>
      <EditCardName card={card} />
      <EditCardDescription card={card} />
      <Comments comments={comments} cardId={card.id} />
    </ModalWindow>
  );
}

export default EditCard;
