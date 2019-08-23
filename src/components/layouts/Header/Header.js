import React, { Suspense } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppHeader, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import Loading from 'components/common/Loading'

import logo from 'assets/img/brand/logo.svg'
import sygnet from 'assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const Header = ( {onLogout} ) => {
 
  return (
    <Suspense  fallback={Loading}>
      <AppHeader>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="mr-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">1</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-people"><Badge pill color="warning">5</Badge></i></NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto mr-3" navbar>
          <UncontrolledDropdown  nav inNavbar>
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
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;