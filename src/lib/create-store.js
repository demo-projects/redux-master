export function createStore(reducer, initialState = {}, enhancer) {

  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, initialState);
  }

  let state = initialState;
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    const index = listeners.push(listener);
    return () => listeners.splice(index, 1);
  }


  dispatch({type: '@@INIT'});
  return {getState, dispatch, subscribe};
}
