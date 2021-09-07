import sortBy from 'utils/sortBy';

function filterCardsData(cards, listId) {
  const filteredData = cards.filter(({ idList }) => idList === listId);
  return sortBy(filteredData, 'pos', false);
}

export default function getListsAndCardsData(state) {
  const { cards } = state.cards;
  const { lists } = state.lists;
  const data = {};
  const sortedList = sortBy(lists, 'pos');
  sortedList.forEach(({ id, name }) => {
    data[id] = {
      name,
      items: filterCardsData(cards, id),
    };
  });
  return data;
}
