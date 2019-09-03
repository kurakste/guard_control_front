import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

import Loading from 'components/common/Loading';

import './UserPanel.scss';

const UserPanel = (props) => {
  const {
    withControls,
    submitUser,
    declineUser,
    rejectUser,
    user,
  } = props;
  const [isOpen, toggleIsOpen] = useState();
  const [isSubmitModalOpened, toggleSubmitModal] = useState(false);
  const [isRejectModalOpened, toggleRejectModal] = useState(false);
  const apiUrl = process.env.REACT_APP_URL;
  return (
    <React.Suspense fallback={<Loading />}>
      <React.Fragment>
        {withControls
          && <React.Fragment>
            <Row className='buttons-container'>
              <Button color="ghost-success" onClick={toggleSubmitModal}>
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
              <Button color="ghost-danger" onClick={toggleRejectModal}>
                <i className="fa fa-close"></i>&nbsp;Отменить
              </Button>
            </Row>
            <Modal
                isOpen={Boolean(isSubmitModalOpened)}
                toggle={toggleSubmitModal}
                className={'modal-success'}>
              <ModalHeader toggle={toggleSubmitModal}>Запрос подтверждения</ModalHeader>
              <ModalBody>
                Подтвердить согласование пользователя
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={submitUser}>Подтвердить</Button>{' '}
                <Button color="secondary" onClick={() => toggleSubmitModal(!isSubmitModalOpened)}>Отменить</Button>
              </ModalFooter>
            </Modal>
            <Modal
                isOpen={Boolean(isRejectModalOpened)}
                toggle={toggleRejectModal}
                className={'modal-danger'}>
              <ModalHeader toggle={toggleRejectModal}>Запрос подтверждения</ModalHeader>
              <ModalBody>
                Подтвердить отклонение заявки пользователя
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={() => declineUser(user.id)}>Подтвердить</Button>{' '}
                <Button color="secondary" onClick={() => toggleRejectModal(!isRejectModalOpened)}>Отменить</Button>
              </ModalFooter>
            </Modal>
          </React.Fragment>
        }
          <div className='cards-container'>
            <div className="card-container pt-2 pl-2 pr-1 pb-1">
              <Card>
                <CardHeader>
                  Фото
                </CardHeader>
                <CardBody >
                  {user && <img src={`${apiUrl}img/${user.img}`} alt="user's face" className="card-image" />}
                </CardBody>
              </Card>
            </div>
            <div className="card-container pt-2 pb-1 pl-1 pr-2">
              <Card>
                <CardHeader>
                  ФИО, контактные данные
                </CardHeader>
                <CardBody>
                  <ListGroup flush>
                    <ListGroupItem>
                      <strong>Фамилия: </strong>
                      {user.lastName}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Имя: </strong>
                      {user.firstName}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Адрес эл. почты: </strong>
                      <a href={`mailto:${user.email}`}>
                        {user.email}
                      </a>
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Телефон: </strong>
                      <a href={`tel:${user.tel}`}>
                        {user.tel}
                      </a>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </div>
            <div className="card-container pt-1 pl-2 pr-1 pb-2">
              <Card>
                <CardHeader>
                  Паспорт, первый разворот
                </CardHeader>
                <CardBody >
                  <img src={`${apiUrl}img/${user.pasImg1}`} alt="user's passport, 1st page" className="card-image" />
                </CardBody>
              </Card>
            </div>
            <div className="card-container card-container pt-1 pb-2 pl-1 pr-2">
              <Card>
                <CardHeader>
                  Паспорт, второй разворот
                </CardHeader>
                <CardBody>
                  <img src={`${apiUrl}img/${user.pasImg2}`} alt="user's passport, 1st page" className="card-image"/>
                </CardBody>
              </Card>
            </div>
          </div>
      </React.Fragment>
    </React.Suspense>
  );
};

UserPanel.propTypes = {
  withControls: PropTypes.bool,
  user: PropTypes.object.isRequired,
  submitUser: PropTypes.func,
  declineUser: PropTypes.func,
  rejectUser: PropTypes.func,
};

export default UserPanel;
