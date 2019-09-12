import { createStore, createEvent } from 'effector';

const getAllAlarms = createEvent();
const updateAlarm = createEvent();

const defaultState = [];

const alarms = createStore(defaultState)
  .on(getAllAlarms, (oldAlarms, newAlarms) => [...newAlarms])
  .on(updateAlarm, (oldAlarms, updatedAlarm) => {
    const index = oldAlarms.indexOf(alarm => alarm.id === updatedAlarm.id);
    const newAlarms = [...oldAlarms].slice(index, 1, updatedAlarm);
    console.log(oldAlarms);
    return newAlarms;
  });

export { alarms, getAllAlarms, updateAlarm };
