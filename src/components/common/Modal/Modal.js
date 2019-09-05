import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal as ReactstrapModal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
} from 'reactstrap';

const Modal = (props) => {
  const {
    isOpen,
    onSubmit,
    onCancel,
    title,
    text,
    style = 'modal-primary',
    submitColor = 'primary',
    className,
  } = props;
  return (
    <ReactstrapModal isOpen={isOpen} toggle={onCancel} className={`${className} + ' ' + ${style}`}>
      <ModalHeader toggle={onCancel}>{title}</ModalHeader>
      <ModalBody>
        {text}
      </ModalBody>
      <ModalFooter>
        <Button color={submitColor} onClick={onSubmit}>Подтвердить</Button>{' '}
        <Button color="secondary" onClick={onCancel}>Отмена</Button>
      </ModalFooter>
    </ReactstrapModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.string,
  className: PropTypes.string,
  submitColor: PropTypes.string,
};

export default Modal;
