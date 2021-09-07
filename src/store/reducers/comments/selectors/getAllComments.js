import moment from 'moment';

export default function getAllComments(state) {
  return state.comments.comments.map(({ data, id, memberCreator, date }) => ({
    id,
    text: data.text,
    cardId: data.card.id,
    createdBy: memberCreator.fullName,
    createdDate: moment(date).fromNow(),
  }));
}
