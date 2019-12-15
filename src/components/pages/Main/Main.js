import React, { Suspense, useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import navigation from '_nav';
import * as router from 'react-router-dom';
// routes config

import io from 'socket.io-client';
import logger from 'logger';

import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';
import Modal from 'components/common/Modal';
import Loading from 'components/common/Loading';
import './Main.scss';

import routes from 'routes';

import {
  status,
  onConnect,
  onDisconnect,
  getAllAlarms,
  updateAlarm,
  addAlarm,
  onAuth,
  onError,
  onLogout,
  updateOperators,
  addOperator,
  deleteOperator,
  auth,
  getAllAppUsers,
  getAllCpUsers,
  appUserAdded,
  cpUserAdded,
  cpUserDeclined,
  appUserDeclined,
} from 'store';

import {
  AppSidebar,
  AppSidebarNav,
} from '@coreui/react';

const Main = () => {
  const [isReady, setIsReady] = useState(false);
  const [socket, setUpSocket] = useState(null);
  const authFromStore = useStore(auth);
  const socketUrl = process.env.REACT_APP_SOCKET;

  useEffect(() => {
    const user = {
      token: localStorage.getItem('token'),
      user: localStorage.getItem('user'),
    };
    const params = {};
    if (user.user) {
      user.user = JSON.parse(user.user);
    }
    if (user.token) {
      onAuth(user);
      params.query = `token=${user.token}`;
    }
    setUpSocket(io(socketUrl, params));
  }, [socketUrl]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on('open', () => {

    });

    socket.on('connect', () => {
      logger.log('info', 'Successfuly connected');
      setIsReady(true);
      onConnect();
    });

    socket.on('srvUpdateAlarmListAll', (data) => {
      console.log('srvUpdateAlarmListAll: ', data);
      getAllAlarms(data);
    });

    socket.on('srvCreateNewAlarm', (data) => {
      console.log('srvCreateNewAlarm: ', data);
      addAlarm(data);
    });

    socket.on('srvUpdateAlarm', (data) => {
      console.log('srvUpdateAlarm: ', data);
      updateAlarm(data);
    });

    socket.on('srvUpdateUserList', (data) => {
      console.log('srvUpdateUserList: ', data);
      updateOperators(data);
    });

    socket.on('srvNewUserConnected', (data) => {
      console.log('srvNewUserConnected: ', data);
      if (data !== authFromStore.user.id) {
        addOperator(data);
      }
    });

    socket.on('srvNewUserDisconnected', (data) => {
      console.log('srvNewUserDisconnected: ', data);
      deleteOperator(data);
    });

    socket.on('srvSendAllCpUserList', (data) => {
      console.log('srvSendAllCpUserList ', data);
      getAllCpUsers(data);
    });

    socket.on('srvSendAllAppUserList', (data) => {
      console.log('srvSendAllAppUserList', data);
      getAllAppUsers(data);
    });

    socket.on('srvUpdateCpUser', (data) => {
      console.log('srvUpdateCpUser', data);
      cpUserAdded(data);
    });

    socket.on('srvApproveAppUser', (data) => {
      console.log('srvApproveAppUser', data);
      appUserAdded(data);
    });

    socket.on('srvDeclineAppUser', (data) => {
      console.log('srvDeclineAppUser', data);
      appUserDeclined(data);
    });

    socket.on('srvDeclineCpUser', (data) => {
      console.log('srvDeclineCpUser', data);
      cpUserDeclined(data);
    });

    socket.on('srvUpdateAllCpUserList', (data) => {
      console.log('srvUpdateAllCpUserList', data);
      getAllCpUsers(data);
    });

    socket.on('srvUpdateAllAppUserList', (data) => {
      console.log('srvUpdateAllAppUserList', data);
      getAllAppUsers(data);
    });

    socket.on('srvErrMessage', (data) => {
      console.log('srvErrMessage: ', data);
      if (data.code === 500 || data.code === 3 || data.code === 4) {
        onLogout();
      }
      onError(data.code);
    });

    socket.on('disconnect', (msg) => {
      logger.log('error', msg);
      console.log('Потеряно соедение с сервером');
      onDisconnect();
    });

    const refetchIntervalID = setInterval(() => {
      socket.emit('cpGiveMeUserList');
    }, 1000 * 60 * 5); // 5 minutes

    // eslint-disable-next-line consistent-return
    return function clearIntervalId() {
      clearInterval(refetchIntervalID);
    };
  }, [socket, authFromStore, socketUrl]);

  const statusFromStore = useStore(status);
  return isReady ? (
    <React.Fragment>
      <div className="app">
        <Header socket={socket} setUpSocket={setUpSocket} />
        <div className="app-body">
          <AppSidebar display="lg">
            <Suspense>
              <AppSidebarNav navConfig={navigation} router={router}/>
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
        isOpen={statusFromStore === 'disconnecting'}
        title={'Потеряно соединение'}
        text={'Ожидается повторное соединение'}
        modalStyle ={'modal-danger'}
        noControls
      />
    </React.Fragment>
  ) : <Loading />;
};

Main.propTypes = {

};

export default Main;
