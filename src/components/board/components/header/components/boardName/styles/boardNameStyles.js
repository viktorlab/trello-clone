import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
`;

export const BoardNameContainer = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.4em;
  color: white;
  font-weight: 600;
  opacity: 0.6;
  cursor: pointer;

  :hover {
    opacity: 1;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Input = styled.input`
  margin: 4px;
`;
