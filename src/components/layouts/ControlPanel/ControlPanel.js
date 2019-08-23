import React from 'react'

import {
  Col,
  Row,
  Container,
  ListGroup, 
  ListGroupItem
} from 'reactstrap';

import './ControlPanel.scss'

const ControlPanel = () => {
  return  (
    <React.Fragment>
      <Container fluid className="main-container">
        <Row>
          <Col lg='10' className="map-container">
            <Row className="map">
              <div> 
                Here will be a map
              </div>
            </Row>
            <Row className="info-container">
              <div> 
                Here will be a CHOP info
              </div>
            </Row>
          </Col>
          <Col className="status-container">
            <ListGroup className="list-group-accent" tag={'div'}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Статус события</ListGroupItem>
                <ListGroupItem action tag="a" href="#" className="list-group-item-accent-success list-group-item-divider">
                  <div> <strong>Заявка закрыта</strong> </div>
                  <small className="text-muted mr-3">
                    <i className="icon-calendar"></i>&nbsp; 14:30
                  </small>
                  <small className="text-muted">
                    <i className="icon-location-pin"></i>ул. Гагарина
                  </small>
                </ListGroupItem>
                <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                  <div>На место выдвинулся <strong>"Бэтмэн"</strong> </div>
                  <small className="text-muted mr-3">
                    <i className="icon-calendar"></i>&nbsp; 13:30
                  </small>
                  <small className="text-muted">
                    <i className="icon-location-pin"></i> ул. Гагарина
                  </small>
                </ListGroupItem>
                <ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
                  <div>Событие в <strong>"магазин Перетёрочка"</strong></div>
                  <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 12 - 13:00</small>
                  <small className="text-muted">
                    <i className="icon-location-pin"></i> ул. Гагарина
                  </small>
                </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default ControlPanel