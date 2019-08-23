import React from 'react'

import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button
} from 'reactstrap';

import './RegRequests.scss'

const users = [
  {id: "1", name:"Алевтина", surname:"Фихтенгольц", fathername:"Олеговна", company:"Перетёрочка"},
  {id: "2", name:"Сергей", surname:"Коровин", fathername:"Сергеевич", company:"Промрыбзавторг"},
]

const RegRequests = ( {history} ) => {
  
  const onRegCheck = (id) => {
    history.push(`/reg/${id}`)
  }

  return (
    <div className="animated fadeIn table-container">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-clock-o"></i> Ожидают подтверждения
            </CardHeader>
            <CardBody>
              <Table responsive> 
                <thead>
                  <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Название организации</th>
                    <th>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => {
                    return (
                      <tr key={user.id} onDoubleClick={()=>{onRegCheck(user.id)}}>
                        <td>{user.surname}</td>
                        <td>{user.name}</td>
                        <td>{user.fathername}</td>
                        <td>{user.company}</td>
                        <td>
                          <Button color="ghost-success" onClick={()=>{onRegCheck(user.id)}}>
                            <i className="fa fa-check"></i>&nbsp;Проверить
                          </Button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default RegRequests