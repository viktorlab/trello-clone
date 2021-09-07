import Modal from 'react-modal';
import { X as CloseIcon } from 'react-feather';
import {
  Title,
  CloseButton,
  CloseButtonContainer,
  ModalWindowContent,
} from 'components/common/modalWindow/styles/modalWindowStyles';

Modal.setAppElement('#root');

function ModalWindow({ show, onClose, title, children, width, height }) {
  const style = { content: { height, width } };

  return (
    <Modal isOpen={show} onRequestClose={onClose} className='modal' overlayClassName='overlay' style={style}>
      <CloseButtonContainer className='close-btn-ctn'>
        <Title>{title}</Title>
        <CloseButton onClick={onClose} />
      </CloseButtonContainer>
      <ModalWindowContent>{children}</ModalWindowContent>
    </Modal>
  );
}

export default ModalWindow;
