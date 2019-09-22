/* global localStorage */
import React, { useEffect, useState } from 'react';
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

  const socketUrl = process.env.REACT_APP_SOCKET;

  useEffect(() => {
    const user = {
      token: localStorage.getItem('token'),
      user: localStorage.getItem('user'),
    };
    if (user.token) {
      onAuth(user);
    }
    const params = { query: `token=${user.token}` };
    setUpSocket(io(socketUrl, params));
  }, []);

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

    socket.on('srvLoginOk', (data) => {
      console.log('srvLoginOk: ', data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.user);
      socket.disconnect();
      const params = { query: `token=${data.token}` };
      setUpSocket(io(socketUrl, params));
      onAuth(data);
    });

    socket.on('srvErrMessage', (data) => {
      console.log('srvErrMessage: ', data);
      onError(data.code);
    });

    socket.on('disconnect', (msg) => {
      logger.log('error', msg);
      onDisconnect();
    });
  }, [socket]);
  return isReady ? (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} socket={socket}/>} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props} socket={socket}/>} />
          <PrivateRoute path='/' component={Main} socket={socket}/>
        </Switch>
      </React.Suspense>
    </Router>
  ) : <Loading />;
};

export default App;
