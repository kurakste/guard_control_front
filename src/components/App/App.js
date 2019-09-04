import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import io from 'socket.io-client';
import logger from 'logger';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import Loading from 'components/common/Loading';
import { onConnect, onDisconnect } from 'store';

const Main = React.lazy(() => import('../pages/Main'))
const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'))

/* const Page404 = React.lazy(() => import('../../views/Pages/Page404/Page404'));
const Page500 = React.lazy(() => import('../../views/Pages/Page500/Page500')); */

const App = () => {
  useEffect(() => {
    const socketUrl = process.env.REACT_APP_SOCKET;
    const socket = io(socketUrl);
    socket.on('open', () => {
      
    });
  
    socket.on('connect', () => {
      logger.log('info', 'Successfuly connected')
      onConnect();
    });
  
    socket.on('disconnect', (msg) => {
      logger.log('error', msg)
      onDisconnect();
    });
  },[])
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
          <Route path="/" name="Home" render={props => <Main {...props}/>} />
        </Switch>
      </React.Suspense>
    </Router>    
  )
};

export default App;
