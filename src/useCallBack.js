import P from 'prop-types';
import './App.css';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho renderizado');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCouter = useCallback((num) => {
    // setCounter(counter + num);
    setCounter((c) => c + num);
  }, []);

  console.log('Pai renderizado');

  // //componentDidUpdate - executa sempre
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // //componentDidMount - executa uma vez
  // useEffect(() => {
  //   console.log('componentDidMount');
  // }, []);

  // //componentDidMount([com dependencia]) - executa toda vez que a dependencia mudar
  // useEffect(() => {
  //   console.log('Contador mudou para', counter);
  // }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      {useMemo(() => {
        return <Button incrementButton={incrementCouter} />;
      }, [incrementCouter])}
    </div>
  );
}

export default App;
