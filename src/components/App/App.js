import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

import Loading from 'components/common/Loading'

const Main = React.lazy(() => import('../pages/Main'))
const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'))

/*const Page404 = React.lazy(() => import('../../views/Pages/Page404/Page404'));
const Page500 = React.lazy(() => import('../../views/Pages/Page500/Page500'));*/

const App = () => {
  return (
    <Router>
        <React.Suspense fallback={Loading}>
          <Switch>
            <Route exact path="/" name="Home" render={props => <Main {...props}/>} />
            <Route path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route path="/register" name="Register Page" render={props => <Register {...props}/>} />
          </Switch>
        </React.Suspense>
    </Router>
  );
}

export default App;
