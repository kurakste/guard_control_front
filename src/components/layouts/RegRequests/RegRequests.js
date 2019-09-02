import React, { useState } from 'react';
import { users } from 'store';
import { useStore } from 'effector-react';

import './RegRequests.scss';

import RegRequestsTable from './RegRequestsTable';
import UserPanel from '../UserPanel';


const RegRequests = () => {
  const usersFromStore = useStore(users);
  const [onReview, setOnReview] = useState(null);

  const onRegCheck = (id) => {
    const userOnReview = usersFromStore.filter(user => user.id === id)[0];
    setOnReview(userOnReview);
  };

  const submitUser = () => {
    console.log(`${onReview.lastName} подтверждён`);
    setOnReview(null);
  };

  const declineUser = () => {
    console.log(`${onReview.lastName} не подтверждён`);
    setOnReview(null);
  };

  const rejectUser = () => {
    console.log(`${onReview.lastName} отклонён`);
  };
  return (
    !onReview
      ? <RegRequestsTable onClick={onRegCheck} />
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
