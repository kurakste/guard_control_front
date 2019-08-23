import React, { Suspense } from 'react';
import { Container, Nav, NavItem} from 'reactstrap';
import { Link, NavLink, Switch, Redirect, Route } from 'react-router-dom'; 
import navigation from '_nav';
import * as router from 'react-router-dom';
// routes config

import Header from 'components/layouts/Header'
import Aside from 'components/layouts/Aside'
import Loading from 'components/common/Loading'
import ControlDesc from 'components/layouts/ControlDesc'

import './Main.scss'

import routes from 'routes';


import {
  AppAside,
  AppSidebar,
  AppSidebarNav,
  AppHeader,
} from '@coreui/react';

const Main = ( {history, ...props} ) => {
  const signOut = (e) => {
    e.preventDefault()
    history.push('/login')
  }

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
          <AppHeader className="main-header" fixed>
            <Nav className="d-md-down-none" navbar>
              <NavItem className="px-3">
                <NavLink to="/main" className="nav-link" >Главный</NavLink>
              </NavItem>
              <NavItem className="px-3">
                <Link to="/reg" className="nav-link">Данные</Link>
              </NavItem>
            </Nav>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component {...props} />
                      )} />
                  ) : (null);
                })}
                <Redirect from="/" to="/main" />
              </Switch>
            </Container>            
          </AppHeader>
        </main>
      </div>
    </div>

  )
}

export default Main
