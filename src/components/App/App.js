import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { renderRoutes } from 'react-router-config';
import './App.scss';
import Loading from 'components/common/Loading';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from '../common/PrivateRoute';

/* const Page404 = React.lazy(() => import('../../views/Pages/Page404/Page404'));
const Page500 = React.lazy(() => import('../../views/Pages/Page500/Page500')); */


const App = () => (
  <Router>
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
        <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
        <PrivateRoute path='/' component={Main} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default App;
