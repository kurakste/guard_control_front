import React from 'react';
import { useStore } from 'effector-react';
import PropTypes from 'prop-types';

import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
} from 'reactstrap';

import ReactTable from 'react-table';

import { roleChecker } from 'helpers';

import { users } from 'store';

import 'react-table/react-table.css';

const RegRequestsTable = ({ onClick }) => {
  const usersFromStore = useStore(users);

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
