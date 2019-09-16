import React, { Suspense, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import logger from 'logger';
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
import Loading from 'components/common/Loading';
import './Main.scss';

import routes from 'routes';

import {
  onConnect,
  onDisconnect,
  getAllAlarms,
  updateAlarm,
  addAlarm,
} from 'store';

import {
  AppSidebar,
  AppSidebarNav,
} from '@coreui/react';

const Main = ({ history, ...props }) => {
  const [isReady, setIsReady] = useState(false);
  const [socket, setUpSocket] = useState(null);

  useEffect(() => {
    const socketUrl = process.env.REACT_APP_SOCKET;
    setUpSocket(io(socketUrl));
  }, []);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on('open', () => {

    });

    socket.on('connect', () => {
      logger.log('info', 'Successfuly connected');
      onConnect();
    });

    socket.on('srvUpdateAlarmListAll', (data) => {
      console.log('srvUpdateAlarmListAll: ', data);
      setIsReady(true);
      getAllAlarms(data.payload);
    });

    socket.on('srvCreateNewAlarm', (data) => {
      console.log('srvCreateNewAlarm: ', data);
      addAlarm(data.payload);
    });

    socket.on('srvUpdateAlarm', (data) => {
      console.log('srvUpdateAlarm: ', data);
      updateAlarm(data);
    });

    socket.on('disconnect', (msg) => {
      logger.log('error', msg);
      onDisconnect();
    });
  }, [socket]);

  const signOut = (e) => {
    e.preventDefault();
    history.push('/login');
  };

  return isReady ? (
    <div className="app">
      <Header onLogout={signOut}/>
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
  ) : <Loading />;
};

Main.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Main;
