import styled from 'styled-components';

export const DeleteButton = styled.button`
  border: none;
  background: transparent;
  position: relative;
  top: 20px;
  right: -5px;
  height: 20px;
  width: 20px;
  text-align: center;
  line-height: 20px;
  opacity: 0.8;
  z-index: 10;
  color: ${({ theme }) => theme.palette.common.light500};
  font-size: 1em;
  font-weight: 900;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.palette.common.light};
    opacity: 1;
  }
`;
