/* global localStorage */
import React, { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import {
  newAppUsers,
  newCpUsers,
  alarms,
  auth,
  onLogout,
} from 'store';
import { useStore } from 'effector-react';

import io from 'socket.io-client';

import {
  Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem,
} from 'reactstrap';

import './Header.scss';

import PropTypes from 'prop-types';

import { AppHeader, AppSidebarToggler } from '@coreui/react';
import Loading from 'components/common/Loading';

const Header = ({ socket, setUpSocket }) => {
  const appUsersFromStore = useStore(newAppUsers);
  const cpUsersFromStore = useStore(newCpUsers);
  const alarmsFromStore = useStore(alarms);
  const authFromStore = useStore(auth);
  const socketUrl = process.env.REACT_APP_SOCKET;
  const logOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    onLogout();
    socket.disconnect();
    const params = {};
    setUpSocket(io(socketUrl, params));
  };

  return (
    <Suspense fallback={Loading}>
      <AppHeader>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/main" className="nav-link">
              <i className="icon-bell">
                <Badge pill color={alarmsFromStore.length ? 'danger' : 'success'}>
                  {alarmsFromStore.length}
                </Badge>
              </i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/reg" className="nav-link">
              <i className="icon-people">
                <Badge pill color={appUsersFromStore.length || cpUsersFromStore.length ? 'warning' : 'success'}>
                  {[...cpUsersFromStore, ...appUsersFromStore].length}
                </Badge>
              </i>
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto mr-3" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className="text-primary" nav caret>
              {authFromStore.user.email}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={logOut}>
                Выйти из системы
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </AppHeader>
    </Suspense>
  );
};
Header.propTypes = {
  socket: PropTypes.object.isRequired,
  setUpSocket: PropTypes.func.isRequired,
};

export default Header;
