import { useState } from 'react';
import boardsService from 'services/boardsService';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { BoardNameContainer, Input, Root } from './styles/boardNameStyles';

function BoardName({ boardName, boardId }) {
  const history = useHistory();
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState();

  const handleOnBlur = () => {
    setEditing(false);
  };

  const handleSetEditing = () => {
    setEditing(true);
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnKeyPress = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await boardsService.updateBoard(boardId, { name: inputValue });
        if (data) {
          history.push('/');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Root onBlur={handleOnBlur}>
      {!editing && <BoardNameContainer onClick={handleSetEditing}>{boardName}</BoardNameContainer>}
      {editing && (
        <Input autoFocus type='text' onChange={handleOnChange} onKeyPress={handleOnKeyPress} defaultValue={boardName} />
      )}
    </Root>
  );
}

export default BoardName;
