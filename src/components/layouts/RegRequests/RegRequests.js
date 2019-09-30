import React, { useState } from 'react';
import {
  appUsers,
  cpUsers,
  newAppUsers,
  newCpUsers,
} from 'store';
import { useStore } from 'effector-react';
import PropTypes from 'prop-types';
import './RegRequests.scss';

import RegRequestsTable from './RegRequestsTable';
import UserPanel from '../UserPanel';


const RegRequests = ({ socket }) => {
  const users = {
    appUsers: useStore(appUsers),
    cpUsers: useStore(cpUsers),
    newAppUsers: useStore(newAppUsers),
    newCpUsers: useStore(newCpUsers),
  };

  const [onReview, setOnReview] = useState(null);
  const [activeTab, switchTab] = useState('newAppUsers');

  const onRegCheck = (id) => {
    const userOnReview = users[activeTab].filter(user => user.id === id)[0];
    setOnReview(userOnReview);
  };

  return (
    !onReview
      ? <RegRequestsTable
          onClick={onRegCheck}
          users={users[activeTab]}
          switchTab={switchTab}
          active={activeTab}
        />
      : <UserPanel
          socket={socket}
          user={onReview}
          withControls
          clearUser={setOnReview}
        />
  );
};

RegRequests.propTypes = {
  socket: PropTypes.object.isRequired,
};


export default RegRequests;
