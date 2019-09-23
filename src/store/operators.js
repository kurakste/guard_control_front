import { createStore, createEvent } from 'effector';

const updateOperators = createEvent();
const addOperator = createEvent();
const deleteOperator = createEvent();

const defaultState = [];

const operators = createStore(defaultState)
  .on(updateOperators, (oldOperators, newOperators) => [...newOperators])
  .on(addOperator, (oldOperators, newOperator) => [...oldOperators, newOperator])
  .on(deleteOperator, (oldOperators, deletedOperator) => [...oldOperators].filter(operator => operator !== deletedOperator));
export {
  operators,
  updateOperators,
  addOperator,
  deleteOperator,
};
