import styled from 'styled-components';
import { Edit } from 'react-feather';

export const Root = styled.div`
  display: grid;
  grid-template-rows: auto minmax(auto, 1fr) auto;
  border-radius: 0.3rem;
  background-color: #e2e4e6;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled(Edit)`
  width: 16px;
  margin-right: 14px;
  opacity: 0.6;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;

export const ListTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  padding: 1rem;
  cursor: pointer;
`;

export const DNDContainer = styled.div`
  margin: 8px;
`;

export const ListContainer = styled.div`
  background: ${({ isDraggingOver }) => (isDraggingOver ? 'lightblue' : 'transparent')};
  border-radius: 4px;
  padding: 4px;
  width: 250px;
  min-height: 500px;
`;

export const AddNewCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 100px;
  background: transparent;
  border-radius: 4px;
  padding: 8px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.palette.common.grey};
  opacity: 0.6;
  cursor: pointer;

  :hover {
    background: #091e4214;
    color: #172b4d;
  }
`;
