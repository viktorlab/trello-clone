import Boards from 'components/boards/Boards';
import Board from 'components/board/Board';

const routes = [
  {
    path: '/',
    name: 'Boards',
    component: Boards,
    exact: true,
  },
  {
    path: '/board/:boardId/:boardName',
    name: 'Board',
    component: Board,
    exact: true,
  },
];

export default routes;
