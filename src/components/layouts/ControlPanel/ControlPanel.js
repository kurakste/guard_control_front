import React from 'react';

import {
  Container,
  Nav,
  NavItem,
} from 'reactstrap';

import { AppHeader } from '@coreui/react';


import {
  Link,
  NavLink,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import Map from '../Map';
import RegistrationPanel from '../RegistrationPanel';

import './ControlPanel.scss';

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

export default ControlPanel;
