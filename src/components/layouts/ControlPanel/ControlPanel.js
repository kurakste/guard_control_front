import React from 'react'

import {
  Col,
  Row,
  Container,
} from 'reactstrap';

import './ControlPanel.scss'

const ControlPanel = () => {
  return  (
    <React.Fragment>
      <Container fluid className="main-container">
        <Row>
          <Col lg='8' className="map-container">
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
            Here will be status
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default ControlPanel