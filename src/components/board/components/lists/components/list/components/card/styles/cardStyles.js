import styled from 'styled-components';
import { Edit2, X } from 'react-feather';

export const CardContainer = styled.div`
  user-select: none;
  padding: 16px;
  margin: 0 0 8px 0;
  min-height: 50px;
  background: ${({ isDragging }) => (isDragging ? '#263B4A' : '#fff')};
  color: ${({ isDragging }) => (isDragging ? '#fff' : '#4d4d4d')};
  border-radius: 4px;
  font-weight: 600;
`;

export const DeleteButton = styled(X)`
  position: relative;
  top: -12px;
  left: 212px;
  width: 15px;
  cursor: pointer;
  opacity: 0.6;

  :hover {
    opacity: 1;
  }
`;

export const EditButton = styled(Edit2)`
  position: relative;
  top: -12px;
  left: 180px;
  width: 14px;
  cursor: pointer;
  opacity: 0.6;

  :hover {
    opacity: 1;
  }
`;
