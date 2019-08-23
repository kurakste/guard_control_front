import React from 'react'

import {
  Col,
  Row,
  Container,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';

import './RegistrationPanel.scss'

const RegistrationPanel = ( {withControls} ) => {
  return (
    <Container fluid className="info-container">
      <Row>
        <Col md="6" className="card-container">
          <Card>
            <CardHeader>
              Card title
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Col>
        <Col md="6" className="card-container">
          <Card>
            <CardHeader>
              Card title
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="6" className="card-container">
          <Card>
            <CardHeader>
              Card title
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Col>
        <Col md="6" className="card-container">
          <Card>
            <CardHeader>
              Card title
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default RegistrationPanel