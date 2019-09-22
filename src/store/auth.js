/* global localStorage */
import { createStore, createEvent } from 'effector';

const onAuth = createEvent();
const onLogout = createEvent();

const defaultState = {
  isAuthed: false,
  token: '',
  error: '',
  user: {},
};

const auth = createStore(defaultState)
  .on(onAuth, (oldAuth, newAuth) => ({ isAuthed: true, token: newAuth.token, user: newAuth.user }))
  .on(onLogout, () => {
    localStorage.clear();
    return defaultState;
  });

export {
  auth,
  onAuth,
  onLogout,
};
