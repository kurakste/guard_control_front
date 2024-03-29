/* eslint-disable no-shadow */
import { createStore, createEvent } from 'effector';

function deleteUserFromArray(arr, user) {
  const newUsers = [...arr];
  const index = newUsers.findIndex((userToCheck) => userToCheck.id === user.id);
  newUsers.splice(index, 1);
  return newUsers;
}

const getAllAppUsers = createEvent();
const getAllCpUsers = createEvent();
const cpUserAdded = createEvent();
const appUserAdded = createEvent();
const cpUserDeclined = createEvent();
const appUserDeclined = createEvent();

const defaultState = [];

const appUsers = createStore(defaultState)
  .on(getAllAppUsers, (oldAppUsers, appUsers) => [...appUsers.filter(user => user.role === 35)])
  .on(appUserAdded, (oldAppUsers, newAppUser) => [...oldAppUsers, newAppUser]);
const cpUsers = createStore(defaultState)
  .on(getAllCpUsers, (oldCpUsers, cpUsers) => [...cpUsers.filter(user => user.role === 36)])
  .on(cpUserAdded, (oldCpUsers, newCpUser) => [...oldCpUsers, newCpUser]);

const newAppUsers = createStore(defaultState)
  .on(getAllAppUsers, (oldAppUsers, newAppUsers) => [...newAppUsers.filter(user => user.role === 31)])
  .on(appUserAdded, (oldAppUsers, newAppUser) => deleteUserFromArray(oldAppUsers, newAppUser))
  .on(appUserDeclined, (oldAppUsers, newAppUser) => deleteUserFromArray(oldAppUsers, newAppUser));

const newCpUsers = createStore(defaultState)
  .on(getAllCpUsers, (oldCpUsers, newCpUsers) => [...newCpUsers.filter(user => user.role === 32)])
  .on(cpUserAdded, (oldCpUsers, newCpUsers) => deleteUserFromArray(oldCpUsers, newCpUsers))
  .on(cpUserDeclined, (oldCpUsers, newCpUsers) => deleteUserFromArray(oldCpUsers, newCpUsers));

export {
  appUsers,
  cpUsers,
  newAppUsers,
  newCpUsers,
  getAllAppUsers,
  getAllCpUsers,
  appUserAdded,
  cpUserAdded,
  cpUserDeclined,
  appUserDeclined,
};

// cpUserAdded
