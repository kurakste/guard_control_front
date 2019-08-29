import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Col,
  Row,
  Container,
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
} from 'reactstrap';

import Loading from 'components/common/Loading';

import './UserPanel.scss';

const UserPanel = ({ withControls, user }) => {
  const [isOpen, toggleIsOpen] = useState();
  const apiUrl = process.env.REACT_APP_URL;
  return (
    <React.Suspense fallback={<Loading />}>
      <React.Fragment>
        {withControls
          && <Row className='buttons-container'>
            <Button color="ghost-success">
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
        }
        <Container fluid className="info-container">
          <Row className='cards-container'>
            <Col className="card-container col-6">
              <Card>
                <CardHeader>
                  Фото
                </CardHeader>
                <CardBody className='image-container'>
                  {user && <img src={`${apiUrl}img/${user.img}`} alt="user's face" className="card-image" />}
                </CardBody>
              </Card>
            </Col>
            <Col className="card-container col-6">
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
            </Col>
          </Row>
          <Row className='cards-container'>
            <Col className="card-container col-6">
              <Card>
                <CardHeader>
                  Паспорт, первый разворот
                </CardHeader>
                <CardBody className='image-container'>
                  <img src={`${apiUrl}img/${user.pasImg1}`} alt="user's passport, 1st page" className="card-image" />
                </CardBody>
              </Card>
            </Col>
            <Col className="card-container col-6">
              <Card>
                <CardHeader>
                  Паспорт, второй разворот
                </CardHeader>
                <CardBody>
                  <img src={`${apiUrl}img/${user.pasImg2}`} alt="user's passport, 1st page" className="card-image"/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    </React.Suspense>
  );
};

UserPanel.propTypes = {
  withControls: PropTypes.bool,
  user: PropTypes.object.isRequired,
};

export default UserPanel;
