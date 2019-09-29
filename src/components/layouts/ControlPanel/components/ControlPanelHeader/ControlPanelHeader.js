import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

import Modal from 'components/common/Modal';

import './ControlPanelHeader.scss';

const ControlPanelHeader = ({ onClick, alarm, socket }) => {
  const [isTakenModalShown, toggleTakenModal] = useState(false);
  const [isGroupSendModalShown, toggleGroupSendModal] = useState(false);
  const [isDeclineModalShown, toggleDeclineModal] = useState(false);
  const [isDeleteModalShown, toggleDeleteModal] = useState(false);
  const [comment, setComment] = useState('');
  const onCommentChange = (e) => setComment(e.target.value);

  const takeAlarmInProcessing = () => {
    socket.emit('cpPickedUpAlarm', {

      payload: alarm,
    });
    toggleTakenModal(false);
  };

  const sendGroup = () => {
    socket.emit('cpAlarmGbrSent', {

      payload: alarm,
    });
    toggleGroupSendModal(false);
  };

  const declineAlarm = () => {
    const payload = { ...alarm };
    payload.notes = comment;
    socket.emit('cpAlarmDecline', {

      payload,
    });
    toggleDeclineModal(false);
  };

  const closeAlarm = () => {
    socket.emit('cpAlarmClosed', {

      payload: alarm,
    });
    toggleDeleteModal(false);
  };

  return (
    <div className="control-panel-header">
      <React.Fragment>
        <div className='d-flex justify-content-around'>
          <Button
            color="ghost-primary"
            disabled={Number(alarm.status) !== 0}
            onClick={() => toggleTakenModal(true)}
            >
            Принять в обработку
          </Button>
          <Button
            color="ghost-success"
            disabled={Number(alarm.status) !== 10}
            onClick={() => toggleGroupSendModal(true)}
            >
            Отправить группу
          </Button>
          <Button
            color="ghost-warning"
            onClick={() => toggleDeclineModal(true)}
          >
            Отклонить
          </Button>
          <Button
            color="ghost-danger"
            onClick={() => toggleDeleteModal(true)}
          >
            Закрыть
          </Button>
        </div>
        <Nav>
          <NavItem>
            <NavLink href='#' onClick={() => { onClick(0); }}>Карта</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#' onClick={() => { onClick(1); }}>Данные клиента</NavLink>
          </NavItem>
        </Nav>
      </React.Fragment>
      <Modal
        isOpen={Boolean(isTakenModalShown)}
        onSubmit={takeAlarmInProcessing}
        onCancel={() => toggleTakenModal(false)}
        title={'Принять тревогу в обработку'}
        text={'Подтвердить статус заявки?'}
        modalStyle ={'modal-primary'}
        submitColor={'primary'}
      />
      <Modal
        isOpen={Boolean(isGroupSendModalShown)}
        onSubmit={sendGroup}
        onCancel={() => toggleGroupSendModal(false)}
        title={'Направить группу'}
        text={'Подтвердить отправку группы?'}
        modalStyle ={'modal-success'}
        submitColor={'success'}
      />
      <Modal
        isOpen={Boolean(isDeclineModalShown)}
        onSubmit={declineAlarm}
        onCancel={() => toggleDeclineModal(false)}
        title={'Отменить заявку'}
        text={'Укажите причину отмены'}
        withInput
        value={comment}
        onChange={onCommentChange}
        modalStyle ={'modal-warning'}
        submitColor={'warning'}
      />
      <Modal
        isOpen={Boolean(isDeleteModalShown)}
        onSubmit={closeAlarm}
        onCancel={() => toggleDeleteModal(false)}
        title={'Закрыть заявку'}
        text={'Подтвердить закрытие заявки?'}
        modalStyle ={'modal-danger'}
        submitColor={'danger'}
      />
    </div>
  );
};

ControlPanelHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  alarm: PropTypes.object.isRequired,
  socket: PropTypes.object.isRequired,
};

export default ControlPanelHeader;
