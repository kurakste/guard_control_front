import { createStore, createEvent } from 'effector';

const getAllAlarms = createEvent();
const updateAlarm = createEvent();
const addAlarm = createEvent();

const defaultState = [];

const alarms = createStore(defaultState)
  .on(getAllAlarms, (oldAlarms, newAlarms) => [...newAlarms])
  .on(addAlarm, (oldAlarms, newAlarm) => [...oldAlarms, newAlarm])
  .on(updateAlarm, (oldAlarms, updatedAlarm) => {
    console.log(oldAlarms, updatedAlarm);
    const index = oldAlarms.findIndex(alarm => alarm.id === updatedAlarm.id);
    const newAlarms = [...oldAlarms];
    if (updatedAlarm.status === 30 || updatedAlarm.status === 40 || updatedAlarm.status === 45) {
      newAlarms.splice(index, 1);
    } else {
      newAlarms.splice(index, 1, updatedAlarm);
    }
    console.log(newAlarms);
    return newAlarms;
  });

export {
  alarms,
  getAllAlarms,
  updateAlarm,
  addAlarm,
};
