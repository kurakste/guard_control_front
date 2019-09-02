import { createStore, createEvent } from 'effector';

const onConnect = createEvent();
const onDisconnect = createEvent();

const defaultState = false;

const status = createStore(defaultState)
  .on(onConnect, () => true)
  .on(onDisconnect, () => false);

export { status, onConnect, onDisconnect };
