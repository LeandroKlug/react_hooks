import { useState, createContext } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

export const AppContext = (props) => {
  const [contextState, setState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setState }}>
      {/* eslint-disable-next-line */}
      {props.children}
    </GlobalContext.Provider>
  );
};
