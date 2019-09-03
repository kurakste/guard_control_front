import React, { useState, useEffect } from 'react';
import { appUsers, cpUsers } from 'store';
import { useStore } from 'effector-react';
// import { declineAppUser } from 'apiProvider';

import './RegRequests.scss';

import RegRequestsTable from './RegRequestsTable';
import UserPanel from '../UserPanel';


const RegRequests = () => {
  const users = {
    appUsers: useStore(appUsers),
    cpUsers: useStore(cpUsers),
  };

  const [onReview, setOnReview] = useState(null);
  const [activeTab, switchTab] = useState('appUsers');

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
          user={onReview}
          withControls
        />
  );
};


export default RegRequests;
