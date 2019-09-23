
import { createStore, createEvent } from 'effector';

const onError = createEvent();

const defaultState = {
  error: '',
};

const errors = createStore(defaultState)
  .on(onError, (oldAuth, payload) => ({ ...oldAuth, error: payload }));

export {
  onError,
  errors,
};
