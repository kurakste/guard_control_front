import React from 'react';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';
/*
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
*/
// import UserPanel from '../UserPanel';
import ControlPanelAlarms from './components/ControlPanelAlarms';
import ControlPanelHeader from './components/ControlPanelHeader';
import ControlPanelMap from './components/ControlPanelMap';
import ControlPanelInfo from './components/ControlPanelInfo';

import './ControlPanel.scss';

const ControlPanel = () => (
  <React.Fragment>
    <Container fluid className="main-container">
      <Row>
        <Col lg='2' className='alarms-container'>
          <ControlPanelAlarms />
        </Col>
        <Col className="px-0 d-flex flex-column">
          <ControlPanelHeader />
          <ControlPanelMap />
          <ControlPanelInfo />
        </Col>
        <Col lg='2' className='events-container'>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);
/*
const ControlPanel = () => (
  <React.Fragment>
      <Container fluid className="main-container">
        <AppHeader className="main-header">
          <Nav className="d-md-down-none" navbar>
            <NavItem className="px-3">
              <NavLink to="/main" className="nav-link" >Главный</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <Link to="/main/data" className="nav-link">Данные</Link>
            </NavItem>
          </Nav>
        </AppHeader>
        <Switch>
          <Route path="/main/data" name="data" component={RegistrationPanel} />
          <Route exact path="/main" name="map" component={Map} />
          <Redirect from="/" to="/main" />
        </Switch>
      </Container>
    </React.Fragment>
);
*/
export default ControlPanel;
