import styled from 'styled-components';

export const Root = styled.section`
  display: flex;
  gap: 1em;
  align-items: start;
  padding: 0 0.8rem 0.8rem;
  overflow-x: auto;
  height: calc(100vh - 8.6rem);

  ::-webkit-scrollbar {
    height: 2.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #66a3c7;
    border: 0.8rem solid #0079bf;
    border-top-width: 0;
  }
`;

export const AddNewListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 250px;
  height: 60px;
  border-radius: 4px;
  padding: 8px;
  background: #ffffff3d;
  color: white;
  cursor: pointer;
  opacity: 0.6;

  :hover {
    opacity: 1;
  }
`;
