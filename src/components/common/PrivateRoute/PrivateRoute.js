import React from 'react';
import PropTypes from 'prop-types';
import { useStore } from 'effector-react';

import {
  Redirect,
  Route,
} from 'react-router-dom';

import {
  auth,
} from 'store';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authFromStore = useStore(auth);
  return (<Route {...rest} render={(props) => (
    authFromStore.isAuthed
      ? <Component {...props} {...rest} />
      : <Redirect to='/login' />
  )} />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
