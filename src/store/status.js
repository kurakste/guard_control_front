import { createStore, createEvent } from 'effector';

const onConnect = createEvent();
const onDisconnect = createEvent();

const defaultState = 'disconnected';

const status = createStore(defaultState)
  .on(onConnect, () => 'connected')
  .on(onDisconnect, () => 'disconnecting');

export {
  status,
  onConnect,
  onDisconnect,
};
