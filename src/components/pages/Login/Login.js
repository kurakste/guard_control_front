import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Button,
  Card,
  CardBody,
  CardGroup, Col,
  Container, Form,
  Input, InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap';

import {
  auth,
  errors,
} from 'store';

import { errorCodeChecker } from 'helpers';

const Login = ({ socket }) => {
  const errorsFromStore = useStore(errors);
  const authFromStore = useStore(auth);
  const [login, onLoginChange] = useState('');
  const [pass, onPasswordChange] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('cpSignIn', {
      payload: { email: login, password: pass },
    });
  };
  return !authFromStore.isAuthed ? (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <h1>Guard Control</h1>
                    {errorsFromStore.error >= 6
                      ? <p className="text-danger">{errorCodeChecker(errorsFromStore.error)}</p>
                      : <p className="text-muted">Войдите в свой аккаунт</p>}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Имя пользователя"
                        autoComplete="username"
                        value={login}
                        onChange={e => onLoginChange(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Пароль"
                        autoComplete="current-password"
                        value={pass}
                        onChange={e => onPasswordChange(e.target.value)}
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4">Войти</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CardBody className="text-center">
                  <div>
                    <h2>Регистрация</h2>
                    <p>Для использования функционала системы,
                      необходимо пройти процедуру авторизации</p>
                    <Link to="/register">
                      <Button color="primary" className="mt-3" active tabIndex={-1}>Зарегистрируйтесь сейчас!</Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  ) : <Redirect to='/main' />;
};
Login.propTypes = {
  socket: PropTypes.object.isRequired,
};

export default Login;
