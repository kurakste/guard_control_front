import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Button,

} from 'reactstrap';

import { verifyUser, declineUser } from 'apiProvider';
import { getAppUsers, getCpUsers } from 'store';

import Modal from 'components/common/Modal';

const UserPanelConrols = ({ id, role, clearUser }) => {
  const [isVerifyModalOpened, toggleVerifyModal] = useState(false);
  const [isDeclineModalOpened, toggleDeclineModal] = useState(false);

  const onVerifyCancel = () => {
    toggleVerifyModal(false);
  };

  const onDeclineCancel = () => {
    toggleDeclineModal(false);
  };

  const onVerify = () => {
    verifyUser(id, role)
      .then(getAppUsers())
      .then(getCpUsers())
      .then(onVerifyCancel(false)) // убрать модалку
      .then(clearUser(null)); // обнулить пользователя на ревью
  };

  const onDecline = () => {
    declineUser(id, role)
      .then(getAppUsers())
      .then(getCpUsers())
      .then(onDeclineCancel(false)) // убрать модалку
      .then(clearUser(null)); // обнулить пользователя на ревью
  };

  return (
    <React.Fragment>
      <Row className='buttons-container'>
        <Button color="ghost-success" onClick={toggleVerifyModal}>
          <i className="fa fa-check"></i>&nbsp;Подтвердить
        </Button>
        <Button color="ghost-danger" onClick={toggleDeclineModal}>
          <i className="fa fa-close"></i>&nbsp;Отменить
        </Button>
      </Row>
      <Modal
        isOpen={Boolean(isVerifyModalOpened)}
        onSubmit={onVerify}
        onCancel={onVerifyCancel}
        title={'Подтверждение регистрации'}
        text={'Подтвердить регистрацию пользователя?'}
        style ={'modal-success'}
        submitColor={'success'}
      />
      <Modal
        isOpen={Boolean(isDeclineModalOpened)}
        onSubmit={onDecline}
        onCancel={onDeclineCancel}
        title={'Подтверждение отказа'}
        text={'Подтвердить отказ в регистрации пользователя?'}
        style ={'modal-danger'}
        submitColor={'danger'}
      />
    </React.Fragment>
  );
};

UserPanelConrols.propTypes = {
  id: PropTypes.number.isRequired,
  role: PropTypes.number.isRequired,
  clearUser: PropTypes.func.isRequired,
};

export default UserPanelConrols;
