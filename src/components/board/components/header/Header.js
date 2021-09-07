import { Trello } from 'react-feather';
import { Link } from 'react-router-dom';
import BoardName from './components/boardName/BoardName';
import { Logo, Root, Title } from './styles/headerStyles';

function Header({ boardName, boardId }) {
  return (
    <Root>
      <BoardName boardName={boardName} boardId={boardId} />
      <Link to='/'>
        <Logo className='logo'>
          <Trello />
          <Title>Trello</Title>
        </Logo>
      </Link>
    </Root>
  );
}

export default Header;
