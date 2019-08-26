import React from 'react'

import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
} from 'reactstrap';
import ReactTable from 'react-table'
import './RegRequests.scss'
import 'react-table/react-table.css'


import { roleChecker } from 'helpers'
/* Заглушка юзеров */
import users from './_users'

const RegRequests = ( {history} ) => {

  const onRegCheck = (id) => {
    history.push(`/reg/${id}`)
  }

  const columns =[
    {
      Header: 'Имя',
      accessor: 'firstName'
    }, 
    {
      Header: 'Фамилия',
      accessor: 'lastName'
    }, 
    {
      Header: 'Адрес эл. почты',
      accessor: 'email'
    },
    {
      Header: 'Роль',
      accessor: 'role',
      Cell: role => {
        return <span>
        {
          roleChecker(role.value)
        }
        </span>
      }
    },  
    {
      Header: 'Действия',
      accessor: 'id',
      Cell: id => {
        return (
          <Button color="ghost-success" onClick={()=>{onRegCheck(id.value)}}>
            <i className="fa fa-check"></i>&nbsp;Проверить
          </Button>
        )
      }
    },  
  ]

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
  )
}

export default RegRequests