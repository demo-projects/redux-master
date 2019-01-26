/**
 * Takes an array of middlewareFactories
 * Returns a function that accept create store
 * and return new create store with the upgraded dispatch
 */
export function applyMiddleware(middlewareFactories) {
  return function enhancer(createStore) {
    return function newCreateStore(reducer, initialState) {
      const store = createStore(reducer, initialState);
      let dispatch = store.dispatch;
      middlewareFactories.forEach(factory => {
        dispatch = factory(store)(dispatch);
      });
      store.dispatch = dispatch;
      return store;
    }
  }
}