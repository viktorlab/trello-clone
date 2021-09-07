import styled from 'styled-components';

export const Root = styled.div`
  padding: 10rem;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1rem;
  justify-content: center;

  > :last-child {
    margin-top: 20px;
  }

  a {
    text-decoration: none;
  }
`;

export const BoardItemContainer = styled.div``;

export const BoardItem = styled.div`
  width: 250px;
  height: 100px;
  line-height: 100px;
  background: ${({ theme, color }) => color ?? theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  text-align: center;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;
