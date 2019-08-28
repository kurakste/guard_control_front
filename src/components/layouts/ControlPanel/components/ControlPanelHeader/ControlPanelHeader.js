import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './ControlPanelHeader.scss';

const ControlPanelHeader = () => (
  <div className="control-panel-header">
    <Nav>
      <NavItem>
        <NavLink href="#">Карта</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Данные</NavLink>
      </NavItem>
    </Nav>
  </div>
);

export default ControlPanelHeader;
