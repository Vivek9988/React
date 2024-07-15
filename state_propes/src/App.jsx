import {  useState } from 'react'
import Navbar  from './Component/Navbar'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      
      <Navbar click={count} />
      <div className="card">
        <button className='btn' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
