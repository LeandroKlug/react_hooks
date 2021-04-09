import { createContext, useContext, useReducer, useRef } from 'react';
import P from 'prop-types';
import './App.css';

// actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
export const globalState = {
  title: 'O titulo do contexto',
  body: 'O corpo do contexto',
  counter: 'O',
};

// reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar titulo');
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };
  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

// index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();
  return (
    <>
      <p onClick={() => context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </p>
      <input type="text" ref={inputRef} />
    </>
  );
};

// App.jsx
function App() {
  return (
    <AppContext>
      <div className="App">
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
