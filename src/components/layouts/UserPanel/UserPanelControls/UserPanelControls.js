import React, { useState } from 'react';

import {
  Row,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import Modal from 'components/common/Modal';

const UserPanelConrols = () => {
  const [isOpen, toggleIsOpen] = useState();
  const [isVerifyModalOpened, toggleVerifyModal] = useState(false);
  const onVerifyCancel = () => {
    toggleVerifyModal(false);
  };
  return (
    <React.Fragment>
      <Row className='buttons-container'>
        <Button color="ghost-success" onClick={toggleVerifyModal}>
          <i className="fa fa-check"></i>&nbsp;Подтвердить
        </Button>
        <ButtonDropdown isOpen={isOpen} toggle={() => toggleIsOpen(!isOpen)}>
          <DropdownToggle caret color="ghost-warning">
            Отклонить
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Укажите причину</DropdownItem>
            <DropdownItem disabled>Не понравился</DropdownItem>
            <DropdownItem>Плохой скан паспорта</DropdownItem>
            <DropdownItem>Паспорт не соответствет данным</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <Button color="ghost-danger">
          <i className="fa fa-close"></i>&nbsp;Отменить
        </Button>
      </Row>
      <Modal
        isOpen={Boolean(isVerifyModalOpened)}
        onSubmit={onVerifyCancel}
        onCancel={onVerifyCancel}
        title={'Подтверждение регистрации'}
        text={'Подтвердить регистрацию пользователя?'}
        style ={'modal-success'}
      />
    </React.Fragment>
  );
};

export default UserPanelConrols;
