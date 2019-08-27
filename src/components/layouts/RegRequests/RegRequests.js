import React from 'react';
import { useStore } from 'effector-react';

import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
} from 'reactstrap';

import ReactTable from 'react-table';
import PropTypes from 'prop-types';

import { roleChecker } from 'helpers';
/* Заглушка юзеров */
import { users } from 'store';
import usersFromFile from './_users';


import './RegRequests.scss';
import 'react-table/react-table.css';

const RegRequests = ({ history }) => {
  const usersFromStore = useStore(users);
  console.log(usersFromStore);
  const onRegCheck = (id) => {
    history.push(`/reg/${id}`);
  };

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
        <Button color="ghost-success" onClick={() => { onRegCheck(id.value); }}>
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
              <ReactTable
                data={usersFromFile}
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

RegRequests.propTypes = {
  history: PropTypes.object.isRequired,
};


export default RegRequests;
