/* eslint-disable no-shadow */
import { createStore, createEvent } from 'effector';

const getAllAppUsers = createEvent();
const getAllCpUsers = createEvent();
const cpUserAdded = createEvent();
const appUserAdded = createEvent();

const defaultState = [];

const appUsers = createStore(defaultState)
  .on(getAllAppUsers, (oldAppUsers, appUsers) => [...appUsers.filter(user => user.role === 35)])
  .on(appUserAdded, (oldAppUsers, newAppUser) => [...oldAppUsers, newAppUser]);
const cpUsers = createStore(defaultState)
  .on(getAllCpUsers, (oldCpUsers, cpUsers) => [...cpUsers.filter(user => user.role === 36)])
  .on(cpUserAdded, (oldCpUsers, newCpUser) => [...oldCpUsers, newCpUser]);

const newAppUsers = createStore(defaultState)
  .on(getAllAppUsers, (oldAppUsers, newAppUsers) => [...newAppUsers.filter(user => user.role === 31)]);

const newCpUsers = createStore(defaultState)
  .on(getAllCpUsers, (oldCpUsers, newCpUsers) => [...newCpUsers.filter(user => user.role === 32)]);

  export {
  appUsers,
  cpUsers,
  newAppUsers,
  newCpUsers,
  getAllAppUsers,
  getAllCpUsers,
  appUserAdded,
  cpUserAdded,
};
