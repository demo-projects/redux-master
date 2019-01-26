import {ACTION_TYPES} from "../actions/types.js";

export const logger = store => dispatch => action => {
  if(action.type === ACTION_TYPES.STORE) {
    console.group(`%c ${action.type}`, 'color: red');
      console.group(action.meta.action);
        console.log('Payload', action.payload);
        console.log('Meta', action.meta);
      console.groupEnd();
    console.log('Previous state', store.getState());
    dispatch(action);
    console.log('Next state', store.getState());
    console.groupEnd();
  } else {
    console.log(`${action.type}: ${action.meta.action}`);
    dispatch(action)
  }
};