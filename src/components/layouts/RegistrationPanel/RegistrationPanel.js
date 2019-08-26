import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

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
  DropdownItem
} from 'reactstrap';

import './RegistrationPanel.scss'
import users from '../RegRequests/_users'

/* я бы предложил брать id активного юзера из стэйта */

const RegistrationPanel = ( {withControls, location: { pathname }} ) => {
  
  const id = Number.parseInt(pathname.replace('/reg/', '')) 
  const user = users.filter(user => user.id === id)[0]

  const [isOpen, toggleIsOpen] = useState()
  return (
    <React.Fragment>
      {withControls && 
        <Row className='buttons-container'>
          <Button color="ghost-success">
            <i className="fa fa-check"></i>&nbsp;Подтвердить
          </Button>
          <ButtonDropdown  isOpen={isOpen} toggle={()=>toggleIsOpen(!isOpen)}>
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
          <Col md="6" className="card-container">
            <Card>
              <CardHeader>
                Фото
              </CardHeader>
              <CardBody className='image-container'>
                {user && <img src={user.img} alt="user's face" className="card-image" />}
              </CardBody>
            </Card>
          </Col>
          <Col md="6" className="card-container">
            <Card>
              <CardHeader>
                ФИО, контактные данные
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className='cards-container'>
          <Col md="6" className="card-container">
            <Card>
              <CardHeader>
                Паспорт, первый разворот
              </CardHeader>
              <CardBody className='image-container'>
                {user && <img src={user.pasImg1} alt="user's face" className="card-image" />}
              </CardBody>
            </Card>
          </Col>
          <Col md="6" className="card-container">
            <Card>
              <CardHeader>
                Паспорт, второй разворот
              </CardHeader>
              <CardBody>
                {user && <img src={user.pasImg2} alt="user's face" className="card-image"/>}
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default withRouter(RegistrationPanel)