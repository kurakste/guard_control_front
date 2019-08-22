import React, { Suspense } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppHeader, AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
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
      <AppHeader fixed>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/map" className="nav-link" >Карта</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">Пользователи</Link>
          </NavItem>
        </Nav>
        <Nav className="mr-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">1</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"><Badge pill color="warning">5</Badge></i></NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Аккаунт</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Ваш профиль</DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Настройки</strong></DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Настройки приложения</DropdownItem>
              <DropdownItem><i className="fa fa-shield"></i> Блокировка</DropdownItem>
              <DropdownItem onClick={e => onLogout(e)}><i className="fa fa-lock"></i> Выход</DropdownItem>
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