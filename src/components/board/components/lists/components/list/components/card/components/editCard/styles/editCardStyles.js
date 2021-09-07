import styled from 'styled-components';
import { Edit, AlignLeft, User } from 'react-feather';

export const Root = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditCardNameIcon = styled(Edit)`
  margin-top: 8px;
  color: #5e6c84;
`;

export const EditCardDescriptionIcon = styled(AlignLeft)`
  margin-top: 8px;
  color: #5e6c84;
`;

export const AvatarIcon = styled(User)`
  margin-top: 12px;
  color: #5e6c84;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
`;

export const TextArea = styled.textarea`
  border-radius: 4px;
  resize: none;
  height: 40px;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  background: transparent;
  cursor: pointer;
  text-decoration: underline;
  margin: 8px 0 8px 0;
  color: #5e6c84;

  :hover {
    color: #172b4d;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-left: 30px;
  margin-bottom: 6px;
`;

export const CreatedBy = styled.div`
  font-size: 1em;
  font-weight: 800;
  color: #172b4d;
`;

export const CreatedDate = styled.div`
  font-size: 0.7em;
  color: #5e6c84;
`;
