import React, { Suspense } from 'react';
import { Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import {
  Link,
  NavLink,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import navigation from '_nav';
import * as router from 'react-router-dom';
// routes config

import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';

import './Main.scss';

import routes from 'routes';


import {
  AppSidebar,
  AppSidebarNav,
  AppHeader,
} from '@coreui/react';

const Main = ({ history, ...props }) => {
  const signOut = (e) => {
    e.preventDefault();
    history.push('/login');
  };

  return (
    <div className="app">
      <Header onLogout={signOut}/>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <Suspense>
            <AppSidebarNav navConfig={navigation} {...props} router={router}/>
          </Suspense>
        </AppSidebar>
        <main className="main">
          <AppHeader className="main-header">
            <Nav className="d-md-down-none" navbar>
              <NavItem className="px-3">
                <NavLink to="/main" className="nav-link" >Главный</NavLink>
              </NavItem>
              <NavItem className="px-3">
                <Link to="/data" className="nav-link">Данные</Link>
              </NavItem>
            </Nav>
          </AppHeader>
          <Switch>
            {routes.map((route, idx) => (route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={renderProps => (
                    <route.component {...renderProps} />
                  )} />
            ) : (null)))}
            <Redirect from="/" to="/main" />
          </Switch>
          <Footer />
        </main>
      </div>
    </div>
  );
};

Main.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Main;
