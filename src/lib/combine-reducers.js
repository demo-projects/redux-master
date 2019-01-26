/**
 * Take an object that map keys
 * to reducer functions, and return
 * a new reducer function that calls all of them to construct the state
 */
export function combineReducers(reducersMap) {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducersMap) {
      if (reducersMap.hasOwnProperty(key)) {
        newState[key] = reducersMap[key](state[key], action);
      }
    }
    return newState;
  }
}
