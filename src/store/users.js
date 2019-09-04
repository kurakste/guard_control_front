import { createStore, createEffect } from 'effector';

import { getAllAppUsers, getAllCpUsers } from 'apiProvider';

const getAppUsers = createEffect();

const getCpUsers = createEffect();

getAppUsers.use(async () => {
  const res = await getAllAppUsers();
  console.log(res);
  return res;
});

getCpUsers.use(async () => {
  const res = await getAllCpUsers();
  console.log(res);
  return res;
});

const defaultState = [];

const appUsers = createStore(defaultState)
  .on(getAppUsers.done, (state, { result }) => [...result]);

const cpUsers = createStore(defaultState)
  .on(getCpUsers.done, (state, { result }) => [...result]);

getCpUsers();

getAppUsers();

export {
  appUsers,
  cpUsers,
  getAppUsers,
  getCpUsers,
};
