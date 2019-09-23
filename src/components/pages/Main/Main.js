import React, { Suspense } from 'react';
import { useStore } from 'effector-react';
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
import Modal from 'components/common/Modal';
import './Main.scss';

import routes from 'routes';

import {
  status,
} from 'store';

import {
  AppSidebar,
  AppSidebarNav,
} from '@coreui/react';

const Main = ({ history, socket, ...props }) => {
  const statusFromStore = useStore(status);

  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <div className="app-body">
          <AppSidebar display="lg">
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
                      <route.component {...renderProps} socket={socket}/>
                    )} />
              ) : (null)))}
              <Redirect from="/" to="/main" />
            </Switch>
            <Footer />
          </main>
        </div>
      </div>
      <Modal
        isOpen={Boolean(!statusFromStore)}
        title={'Потеряно соединение'}
        text={'Ожидается повторное соединение'}
        modalStyle ={'modal-danger'}
        noControls
      />
    </React.Fragment>
  );
};

Main.propTypes = {
  history: PropTypes.object.isRequired,
  socket: PropTypes.object.isRequired,
};

export default Main;
