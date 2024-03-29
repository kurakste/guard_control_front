import React from 'react';
import PropTypes from 'prop-types';

import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import ReactTable from 'react-table';

import { roleChecker } from 'helpers';

import 'react-table/react-table.css';

const RegRequestsTable = (props) => {
  const {
    onClick,
    users,
    switchTab,
    active,
  } = props;

  const columns = [
    {
      Header: 'Имя',
      accessor: 'firstName',
    },
    {
      Header: 'Фамилия',
      accessor: 'lastName',
    },
    {
      Header: 'Адрес эл. почты',
      accessor: 'email',
    },
    {
      Header: 'Роль',
      accessor: 'role',
      Cell: role => <span>{roleChecker(role.value)}</span>,
    },
    {
      Header: 'Действия',
      accessor: 'id',
      Cell: id => (
        <Button color="ghost-success" onClick={() => { onClick(id.value); }}>
          <i className="fa fa-check"></i>&nbsp;Проверить
        </Button>
      ),
    },
  ];

  return (
    <div className="animated fadeIn table-container">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-clock-o"></i> Ожидают подтверждения
            </CardHeader>
            <CardBody>
              <Nav tabs>
                <NavItem>
                  <NavLink href="#"
                   active = {active === 'newAppUsers'}
                   name="newAppUsers"
                   onClick={(e) => {
                     e.preventDefault();
                     switchTab(e.target.name);
                   }}
                   >Новые пользователи приложения</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"
                    active = {active === 'newCpUsers'}
                    name="newCpUsers"
                    onClick={(e) => {
                      e.preventDefault();
                      switchTab(e.target.name);
                    }}
                  >Новые пользователи контрольной панели</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"
                   active = {active === 'appUsers'}
                   name="appUsers"
                   onClick={(e) => {
                     e.preventDefault();
                     switchTab(e.target.name);
                   }}
                   >Пользователи приложения</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"
                    active = {active === 'сpUsers'}
                    name="cpUsers"
                    onClick={(e) => {
                      e.preventDefault();
                      switchTab(e.target.name);
                    }}
                  >Пользователи контрольной панели</NavLink>
                </NavItem>
              </Nav>
              <ReactTable
                data={users}
                columns={columns}
                previousText='Предыдущая страница'
                nextText='Следующая страница'
                pageText= 'Страница'
                ofText= 'из'
                rowsText= 'строк'
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

RegRequestsTable.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  switchTab: PropTypes.func.isRequired,
};


export default RegRequestsTable;
