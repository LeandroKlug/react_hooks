import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  //componentDidUpdate - executa sempre
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //componentDidMount - executa uma vez
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  //componentDidMount([com dependencia]) - executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('Contador mudou para', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
      <button onClick={() => setCounter(counter - 1)}>Diminuir</button>
    </div>
  );
}

export default App;
