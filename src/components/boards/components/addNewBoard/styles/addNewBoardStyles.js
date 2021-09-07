import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  border: ${({ theme }) => theme.border};
  border-radius: 4px;
  resize: vertical;
  margin-bottom: 8px;
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.palette.button.primary};
  color: ${({ theme }) => theme.palette.common.light};
  border: none;
  border-radius: 4px;
  height: 30px;
  cursor: pointer;
  opacity: 0.8;

  :hover {
    opacity: 2;
  }
`;
