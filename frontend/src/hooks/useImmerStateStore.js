import { useMemo, useState } from 'react';
import Immer from 'immer';

// Immer manages immutability for us
const useImmerStateStore = (initialState, actions) => {
  const [state, setState] = useState(initialState);

  const store = useMemo(
    () => ({
      actions: Object.keys(actions).reduce((acc, key) => {
        acc[key] = (...params) => actions[key](store, ...params);
        return acc;
      }, {}),
    }),
    [actions]
  );

  store.state = state;
  store.setState = (action) => setState(Immer(store.state, action));

  return store;
};

export default useImmerStateStore;
