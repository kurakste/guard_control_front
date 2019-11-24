/* global localStorage */
import React, { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import io from 'socket.io-client';
import logger from 'logger';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import Loading from 'components/common/Loading';

import {
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
} from 'store';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from '../common/PrivateRoute';

/* const Page404 = React.lazy(() => import('../../views/Pages/Page404/Page404'));
const Page500 = React.lazy(() => import('../../views/Pages/Page500/Page500')); */


const App = () => {
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

    socket.on('srvLoginOk', (data) => {
      console.log('srvLoginOk: ', data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      socket.disconnect();
      const params = { query: `token=${data.token}` };
      setUpSocket(io(socketUrl, params));
      onAuth(data);
    });

    socket.on('srvSendAllCpUserList', (data) => {
      console.log('srvSendAllCpUserList ', data);
      getAllCpUsers(data);
    });

    socket.on('srvSendAllAppUserList', (data) => {
      console.log('srvSendAllAppUserList', data);
      getAllAppUsers(data);
    });

    socket.on('srvUpdateOneCpUser', (data) => {
      console.log('srvUpdateOneCpUser', data);
      cpUserAdded(data);
    });

    socket.on('srvUpdateOneAppUser', (data) => {
      console.log('srvUpdateOneAppUser', data);
      appUserAdded(data);
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
      onDisconnect();
    });
  }, [socket, authFromStore, socketUrl]);
  return isReady ? (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} socket={socket}/>} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props} socket={socket}/>} />
          <PrivateRoute path='/' component={Main} socket={socket} setUpSocket={setUpSocket} />
        </Switch>
      </React.Suspense>
    </Router>
  ) : <Loading />;
};

export default App;
