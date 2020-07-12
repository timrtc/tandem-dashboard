import React, { createContext, useEffect, useReducer } from 'react';
import { appReducer, initialState } from 'lib/store/reducer';
import { ActionType, AppState } from 'lib/common';

interface ContextProps {
  state: AppState;
  dispatch: (action: ActionType) => void;
}

const store = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
});

const { Provider } = store;

interface DataSetResponse {
  data: number[];
}

/**
 * Provides access to global state management.
 */
const AppProvider: React.FC = props => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // initialize the data set and handle future updates.
  useEffect(() => {
    fetch(state.url)
      .then<DataSetResponse>(res => res.json())
      .then(results => {
        dispatch({ type: 'SET_DATA', data: results.data });
      });
  }, [state.url]);

  return <Provider value={{ state, dispatch }}>{props.children}</Provider>;
};

export { store, AppProvider };
