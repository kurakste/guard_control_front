import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Button,

} from 'reactstrap';

import Modal from 'components/common/Modal';

const UserPanelConrols = ({ user, clearUser, socket }) => {
  const [isVerifyModalOpened, toggleVerifyModal] = useState(false);
  const [isDeclineModalOpened, toggleDeclineModal] = useState(false);
  const [comment, setComment] = useState('');
  const onCommentChange = (e) => setComment(e.target.value);
  const onVerifyCancel = () => {
    toggleVerifyModal(false);
  };

  const onDeclineCancel = () => {
    toggleDeclineModal(false);
  };
  const disabled = user.role === 35 || user.role === 36;
  const onVerify = () => {
    let event = '';

    if (user.role === 31) {
      event = 'cpAppUserApprove';
    }
    if (user.role === 32) {
      event = 'cpCpUserApprove';
    }
    if (!event) {
      return;
    }
    socket.emit(event, {
      payload: user,
    });
    onVerifyCancel(false);
    clearUser(null);
  };

  const onDecline = () => {
    let event = '';

    if (user.role === 31) {
      event = 'cpAppUserDecline';
    }
    if (user.role === 32) {
      event = 'cpCpUserDecline';
    }
    if (!event) {
      return;
    }
    const userToSend = { ...user };
    userToSend.notes = comment;

    socket.emit(event, {
      payload: userToSend,
    });
    toggleDeclineModal(false);
    clearUser(null);
  };

  return (
    <React.Fragment>
      <Row className='buttons-container mr-0 ml-0' >
        <Button color="ghost-success" onClick={toggleVerifyModal} disabled={disabled}>
          <i className="fa fa-check"></i>&nbsp;Подтвердить
        </Button>
        <Button color="ghost-danger" onClick={toggleDeclineModal} disabled={disabled}>
          <i className="fa fa-close"></i>&nbsp;Отклонить
        </Button>
        <Button color="ghost-primary" onClick={() => clearUser(null)}>
          <i className="fa fa-undo"></i>&nbsp;Вернуться
        </Button>
      </Row>
      <Modal
        isOpen={Boolean(isVerifyModalOpened)}
        onSubmit={onVerify}
        onCancel={onVerifyCancel}
        title={'Подтверждение регистрации'}
        text={'Подтвердить регистрацию пользователя?'}
        modalStyle ={'modal-success'}
        submitColor={'success'}
      />
      <Modal
        isOpen={Boolean(isDeclineModalOpened)}
        onSubmit={onDecline}
        onCancel={() => onDeclineCancel(false)}
        title={'Отменить заявку'}
        text={'Укажите причину отмены'}
        withInput
        value={comment}
        onChange={onCommentChange}
        modalStyle ={'modal-danger'}
        submitColor={'danger'}
      />
    </React.Fragment>
  );
};

UserPanelConrols.propTypes = {
  clearUser: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserPanelConrols;
