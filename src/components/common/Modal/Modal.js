import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal as ReactstrapModal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Input,
} from 'reactstrap';

const Modal = (props) => {
  const {
    isOpen,
    onSubmit,
    onCancel,
    title,
    text,
    modalStyle = 'modal-primary',
    submitColor = 'primary',
    className,
    noControls = false,
    withInput = false,
    value = '',
    onChange,
  } = props;
  return (
    <ReactstrapModal isOpen={isOpen} toggle={onCancel} className={`${className} + ' ' + ${modalStyle}`}>
      <ModalHeader toggle={onCancel}>{title}</ModalHeader>
      <ModalBody>
        {text}
        {withInput && (<Input className="my-2" value={value} onChange={onChange}/>)}
      </ModalBody>
      {!noControls && (
        <ModalFooter>
          <Button
            color={submitColor}
            onClick={onSubmit}
            disabled={(withInput && !value)}
          >Подтвердить</Button>{' '}
          <Button color="secondary" onClick={onCancel}>Отмена</Button>
        </ModalFooter>
      )}
    </ReactstrapModal>
  );
};

Modal.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  noControls: PropTypes.bool,
  withInput: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  modalStyle: PropTypes.string,
  className: PropTypes.string,
  submitColor: PropTypes.string,
};

export default Modal;
