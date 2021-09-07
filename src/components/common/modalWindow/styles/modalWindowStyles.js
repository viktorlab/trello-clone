import styled from 'styled-components';
import { X } from 'react-feather';

export const CloseButtonContainer = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  flex: 1 90%;
`;

export const CloseButton = styled(X)`
  width: 20px;
  background: transparent;
  color: ${({ theme }) => theme.palette.common.grey};
  cursor: pointer;
`;

export const ModalWindowContent = styled.div``;
