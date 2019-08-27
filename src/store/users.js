import { createStore, createEffect } from 'effector';

import { getAllUsers } from 'apiProvider';

const getUsers = createEffect();

getUsers.use(async () => {
  const res = await getAllUsers();
  return res;
});

getUsers.done.watch(({ result, params }) => {
  console.log(params);
  console.log(result);
});

/* здесь так же можно обрабатывать отказы

getUsers.fail.watch(({ error, params }) => {
  console.error(params);
  console.error(error);
});

*/

const defaultState = [];

const users = createStore(defaultState)
  .on(getUsers.done, (state, { result }) => [...state, ...result]);

getUsers();

export default users;
