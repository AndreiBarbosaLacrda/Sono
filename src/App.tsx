import { useState } from 'react';
import './index.css';
import './theme.css';

export function App() {
  // TypeScript garante que o estado seja sempre número
  const [count, setCount] = useState<number>(0);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => setCount(count - 1);
  const resetar = () => setCount(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Meu Primeiro App de React</h1>
        <p>Contador: <strong>{count}</strong></p>

        <div className="buttons">
          <button onClick={decrementar}>-</button>
          <button onClick={incrementar}>+</button>
          <button onClick={resetar}>Reset</button>
        </div>

        <p className="info">
          Feito por <strong>{ 'Andrei BL '}</strong> • 3º ano E.M. SENAC - Distrito Criativo
        </p>
      </header>
    </div>
  );
}