import React, { useContext, useReducer } from 'react';

type Action = { type: 'increment' } | { type: 'decrement' };
type State = number;
type Dispatch = React.Dispatch<Action>;

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
  }
}

const [state, dispatch] = useReducer(reducer, 0);

const DispatchContext = React.createContext<Dispatch>(null);

<DispatchContext.Provider
  value={dispatch}
></DispatchContext.Provider>;

const d = useContext(DispatchContext);

d({ type: 'decrement' });

type M = { f: 'hi' | 'bye' };

const m = React.useMemo<M>(() => ({ f: 'hi' }), []);
