import { createStore, createEvent } from 'effector';

const updateOperators = createEvent();

const defaultState = [
  {
    id: 1,
    firstName: 'Марина',
    lastName: 'Иванова',
  },
  {
    id: 2,
    firstName: 'Арсений',
    lastName: 'Петров',
  },
  {
    id: 3,
    firstName: 'Егор',
    lastName: 'Кузнецов',
  },
];

const operators = createStore(defaultState)
  .on(updateOperators, (oldOperators, newOperators) => [...newOperators]);

export { operators, updateOperators };
