import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import './ControlPanelHeader.scss';

const ControlPanelHeader = ({ onClick }) => (
  <div className="control-panel-header">
    <Nav>
      <NavItem>
        <NavLink href='#' onClick={() => { onClick(0); }}>Карта</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#' onClick={() => { onClick(1); }}>Данные</NavLink>
      </NavItem>
    </Nav>
  </div>
);

ControlPanelHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ControlPanelHeader;
