import React, { useState, useEffect } from 'react';
import { appUsers, cpUsers } from 'store';
import { useStore } from 'effector-react';
// import { declineAppUser } from 'apiProvider';

import './RegRequests.scss';

import RegRequestsTable from './RegRequestsTable';
import UserPanel from '../UserPanel';


const RegRequests = () => {
  const appUsersFromStore = useStore(appUsers);
  const cpUsersFromStore = useStore(cpUsers);

  const [onReview, setOnReview] = useState(null);
  const [users, setUsers] = useState(appUsersFromStore);
  const [activeTab, switchTab] = useState('appUsers');

  useEffect(() => {
    if (activeTab === 'appUsers') {
      setUsers(appUsersFromStore);
    } else {
      setUsers(cpUsersFromStore);
    }
  }, [activeTab, appUsersFromStore, cpUsersFromStore]);


  const onRegCheck = (id) => {
    const userOnReview = users.filter(user => user.id === id)[0];
    setOnReview(userOnReview);
  };

  const submitUser = () => {
    console.log(`${onReview.lastName} подтверждён`);
    setOnReview(null);
  };

  const declineUser = (id) => {
    console.log(`${onReview.lastName} не подтверждён`);
    // declineAppUser(id); // test
    setOnReview(null);
  };

  const rejectUser = () => {
    console.log(`${onReview.lastName} отклонён`);
  };
  return (
    !onReview
      ? <RegRequestsTable
          onClick={onRegCheck}
          users={users}
          switchTab={switchTab}
          active={activeTab}
        />
      : <UserPanel
          user={onReview}
          withControls
          submitUser={submitUser}
          declineUser={declineUser}
          rejectUser={rejectUser}
        />
  );
};


export default RegRequests;
