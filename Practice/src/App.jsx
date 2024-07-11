import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(9);
  let a = 5;
  let vivek = () => {
    a = a + 1;
    console.log(a);
  };

  const handleClick = () => {
    setCount(count + 1);
    vivek();
  };

  return (
    <>
      <button onClick={handleClick}>{count}</button>
      <button onClick={vivek}>hello {a}</button>
    </>
  );
}

export default App;
