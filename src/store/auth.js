/* global localStorage */
import { createStore, createEvent } from 'effector';

const onAuth = createEvent();
const onLogout = createEvent();
const onError = createEvent();

const defaultState = {
  isAuthed: false,
  token: '',
  error: '',
};

const auth = createStore(defaultState)
  .on(onAuth, (oldAuth, newAuth) => ({ isAuthed: true, token: newAuth.token }))
  .on(onLogout, () => {
    localStorage.clear();
    return defaultState;
  })
  .on(onError, (oldAuth, payload) => ({ ...oldAuth, error: payload }));

export {
  auth,
  onAuth,
  onLogout,
  onError,
};
