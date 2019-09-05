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

const ControlPanelHeader = ({ onClick, status }) => {
  const [isTakenModalShown, toggleTakenModal] = useState(false);
  const [isGroupSendModalShown, toggleGroupSendModal] = useState(false);
  const [isDeclineModalShown, toggleDeclineModal] = useState(false);
  const [isDeleteModalShown, toggleDeleteModal] = useState(false);
  return (
    <div className="control-panel-header">
      <React.Fragment>
        <div className='d-flex justify-content-around'>
          <Button
            color="ghost-primary"
            disabled={status !== 0}
            onClick={() => toggleTakenModal(true)}
            >
            Принять в обработку
          </Button>
          <Button
            color="ghost-success"
            disabled={status !== 1}
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
        onSubmit={() => toggleTakenModal(false)}
        onCancel={() => toggleTakenModal(false)}
        title={'Принять тревогу в обработку'}
        text={'Подтвердить статус заявки?'}
        style ={'modal-primary'}
        submitColor={'primary'}
      />
      <Modal
        isOpen={Boolean(isGroupSendModalShown)}
        onSubmit={() => toggleGroupSendModal(false)}
        onCancel={() => toggleGroupSendModal(false)}
        title={'Направить группу'}
        text={'Подтвердить отправку группы?'}
        style ={'modal-success'}
        submitColor={'success'}
      />
      <Modal
        isOpen={Boolean(isDeclineModalShown)}
        onSubmit={() => toggleDeclineModal(false)}
        onCancel={() => toggleDeclineModal(false)}
        title={'Отменить заявку'}
        text={'Подтвердить отмену заявки?'}
        style ={'modal-warning'}
        submitColor={'warning'}
      />
      <Modal
        isOpen={Boolean(isDeleteModalShown)}
        onSubmit={() => toggleDeleteModal(false)}
        onCancel={() => toggleDeleteModal(false)}
        title={'Удалить заявку'}
        text={'Подтвердить удаление заявки?'}
        style ={'modal-danger'}
        submitColor={'danger'}
      />
    </div>
  );
};

ControlPanelHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
};

export default ControlPanelHeader;
