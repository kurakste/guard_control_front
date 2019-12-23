import React, { useState } from 'react';
import { useStore } from 'effector-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap';

import Modal from 'components/common/Modal';

import {
  errors,
  onError,
} from 'store';

import { errorCodeChecker } from 'helpers';

const apiUrl = process.env.REACT_APP_URL;

const Register = ({ history }) => {
  const errorsFromStore = useStore(errors);
  const [firstName, onFirstNameChange] = useState('');
  const [lastName, onLastNameChange] = useState('');
  const [middleName, onMiddleNameChange] = useState('');
  const [email, onEmailChange] = useState('');
  const [pass, onPasswordChange] = useState('');
  const [tel, onTelChange] = useState('');
  const [passConfirm, onPassConfirmChange] = useState('');
  const [validation, onValidationError] = useState('');

  const [regModalIsShown, showRegModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passConfirm !== pass) {
      onValidationError('Подтверждение пароля не совпадает с паролем');
      return;
    }
    const user = new FormData();
    user.append('firstName', firstName);
    user.append('middleName', middleName);
    user.append('lastName', lastName);
    user.append('tel', tel);
    user.append('email', email);
    user.append('password', pass);
    const response = await fetch(`${apiUrl}user-new-cp`, {
      method: 'POST',
      body: user,
    });
    const result = await response.json();
    // console.log(result);
    if (result.success) {
      showRegModal(result.success);
    } else {
      onError(result.errorCode);
    }
  };

  const redirectToAuth = (e) => {
    e.preventDefault();
    history.push('/login');
  };
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={handleSubmit}>
                  <h1>Регистрация</h1>
                  {(errorsFromStore.error < 3 || errorsFromStore.error === 7)
                    ? <p className="text-danger">{errorCodeChecker(errorsFromStore.error)}</p>
                    : <p className="text-muted">Создайте свой аккаунт</p>}
                  {validation && <p className="text-danger">{validation}</p>}
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Имя"
                      autoComplete="firstName"
                      value={firstName}
                      onChange={e => onFirstNameChange(e.target.value)} />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-people"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Отчество"
                      autoComplete="middleName"
                      value={middleName}
                      onChange={e => onMiddleNameChange(e.target.value)} />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-people"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Фамилия"
                      autoComplete="lastName"
                      value={lastName}
                      onChange={e => onLastNameChange(e.target.value)} />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Email"
                      autoComplete="email"
                      value={email}
                      onChange={e => onEmailChange(e.target.value)}
                      />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-phone"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="телефон"
                      autoComplete="tel"
                      value={tel}
                      onChange={e => onTelChange(e.target.value)} />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="password"
                      placeholder="Пароль"
                      autoComplete="new-password"
                      value={pass}
                      onChange={e => onPasswordChange(e.target.value)}
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
                      placeholder="Повторите пароль"
                      autoComplete="new-password"
                      value={passConfirm}
                      onChange={e => onPassConfirmChange(e.target.value)}
                    />
                  </InputGroup>
                  <Button
                    color="success"
                    block
                    type="submit"
                    disabled={!(firstName && lastName && email && passConfirm && pass)}
                    >
                      Создать аккаунт</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal
          isOpen={regModalIsShown}
          title={'Регистрация пользователя'}
          text={'Пользователь успешно зарегестрирован. После подтверждения вашей учётной записи администратором системы, вам будет доступна авторизация'}
          modalStyle ={'modal-success'}
          submitColor={'success'}
          onSubmit={redirectToAuth}
          onCancel={() => {
            onFirstNameChange('');
            onLastNameChange('');
            onEmailChange('');
            onPasswordChange('');
            onTelChange('');
            onPassConfirmChange('');
            onValidationError('');
            showRegModal(false);
          }}
        />
      </Container>
    </div>
  );
};

Register.propTypes = {
  socket: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Register);
