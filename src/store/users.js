import { createStore, createEffect } from 'effector';

import { getAllAppUsers, getAllCpUsers } from 'apiProvider';

const getAppUsers = createEffect();

const getCpUsers = createEffect();

getAppUsers.use(async () => {
  const res = await getAllAppUsers();
  return res;
});

getCpUsers.use(async () => {
  const res = await getAllCpUsers();
  return res;
});

const defaultState = [];

const appUsers = createStore(defaultState)
  .on(getAppUsers.done, (state, { result }) => [...state, ...result]);

const cpUsers = createStore(defaultState)
  .on(getCpUsers.done, (state, { result }) => [...state, ...result]);

getCpUsers();

getAppUsers();

export {
  appUsers,
  cpUsers,
  getAppUsers,
  getCpUsers,
};
