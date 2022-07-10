import React, { createContext, useContext, useReducer } from 'react';
import { useSubTree } from '../hooks/useSubTree';
import { initialState, reducer } from '../reducer/reducer';

// Context to save GUI state data in global state
export const DataContext = createContext({
  state: { actions: [], ids: new Map() },
  dispatch: () => {},
});

export const Provider = children => {
  const { getSubTree } = useSubTree();

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      <PrintDataButton />
      {children ? getSubTree(children, dispatch) : null}
    </DataContext.Provider>
  );
};

// Button to test functionality in console (log saved state information)
export const PrintDataButton = () => {
  const { state } = useContext(DataContext);

  return (
    <button
      type="button"
      style={{
        position: 'absolute',
        right: 10,
        top: 50,
        width: '100px',
        height: '100px',
      }}
      onClick={() => {
        console.log('current action data', state.actions);
        console.log('current component ids', state.ids);
      }}
    >
      Print Data to Console
    </button>
  );
};
