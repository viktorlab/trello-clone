import styled from 'styled-components';

export const Root = styled.header`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 3fr 4fr;
  height: 40px;
  padding: 0 0.8rem;
  background-color: #0067a3;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  a {
    display: flex;
    text-decoration: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: white;
  font-size: 1.3em;
  font-weight: 600;
  cursor: pointer;
  opacity: 0.5;

  :hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h1``;
