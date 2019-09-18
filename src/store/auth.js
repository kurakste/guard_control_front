import { createStore, createEvent } from 'effector';

const onAuth = createEvent();
const onLogout = createEvent();

const defaultState = {
  isAuthed: false,
  token: '',
};

const auth = createStore(defaultState)
  .on(onAuth, (oldAuth, newAuth) => ({ isAuthed: true, token: newAuth.token }))
  .on(onLogout, () => defaultState);

export {
  auth,
  onAuth,
  onLogout,
};
