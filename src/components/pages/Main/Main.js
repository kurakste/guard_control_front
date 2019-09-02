import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import {
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
