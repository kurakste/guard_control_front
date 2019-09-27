import { createStore, createEvent } from 'effector';

const getAllAppUsers = createEvent();
const getAllCpUsers = createEvent();
const defaultState = [];

const appUsers = createStore(defaultState)
  .on(getAllAppUsers, (oldAppUsers, newAppUsers) => [...newAppUsers]);

const cpUsers = createStore(defaultState)
  .on(getAllCpUsers, (oldCpUsers, newAppUsers) => [...newAppUsers]);

export {
  appUsers,
  cpUsers,
  getAllAppUsers,
  getAllCpUsers,
};
