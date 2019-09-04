import React, { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { appUsers, cpUsers, alarms } from 'store';
import { useStore } from 'effector-react';

import {
  Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem,
} from 'reactstrap';

import PropTypes from 'prop-types';

import { AppHeader, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import Loading from 'components/common/Loading';

import logo from 'assets/img/brand/logo.svg';
import sygnet from 'assets/img/brand/sygnet.svg';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const Header = ({ onLogout }) => {
  const notifications = {
    appUsers: useStore(appUsers),
    cpUsers: useStore(cpUsers),
    alarms: useStore(alarms),
  };
  return (
    <Suspense fallback={Loading}>
      <AppHeader fixed>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={
            {
              src: logo, width: 89, height: 25, alt: 'CoreUI Logo',
            }
          }
          minimized={
            {
              src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo',
            }
          }
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="mr-auto" navbar>
          {notifications.alarms.length && (
            <NavItem className="d-md-down-none">
              <NavLink to="/main" className="nav-link">
                <i className="icon-bell">
                  <Badge pill color="danger">
                    {notifications.alarms.length}
                  </Badge>
                </i>
              </NavLink>
            </NavItem>
          )}
          {[...notifications.appUsers, ...notifications.cpUsers].length && (
            <NavItem className="d-md-down-none">
              <NavLink to="/reg" className="nav-link">
                <i className="icon-people">
                  <Badge pill color="warning">
                    {[...notifications.appUsers, ...notifications.cpUsers].length}
                  </Badge>
                </i>
              </NavLink>
            </NavItem>
          )}
        </Nav>
        <Nav className="ml-auto mr-3" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className="text-primary" nav caret>
              username@guardcontrol.ru
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={onLogout}>
                Выйти из системы
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </AppHeader>
    </Suspense>
  );
};
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;


Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Header;
