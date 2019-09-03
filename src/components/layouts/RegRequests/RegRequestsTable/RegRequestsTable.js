import React, { useState } from 'react';
import { useStore } from 'effector-react';
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

import { users } from 'store';

import 'react-table/react-table.css';

const RegRequestsTable = ({ onClick }) => {
  const usersFromStore = useStore(users);
  const [activeTab, swithcTab] = useState('appUsers');

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
                <NavItem name="appUsers" onClick={(e) => swithcTab(e.target.name)}>
                  <NavLink href="#" active = {activeTab === 'appUsers'}>Пользователи приложения</NavLink>
                </NavItem>
                <NavItem name="сpUsers" onClick={(e) => swithcTab(e.target.name)}>
                  <NavLink href="#" active = {activeTab === 'сpUsers'} >Пользователи контрольной панели</NavLink>
                </NavItem>
              </Nav>
              <ReactTable
                data={usersFromStore}
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
};


export default RegRequestsTable;
