import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Vivek")
  
  const handle=()=>{
    alert("hello i am aleart");

  }
  const handle2=()=>{
    alert("i am on mouse over")
  }
  const onHandle = (e) => {
    setName(e.target.value)
  }

  return (
    <>
    <div className="button">
      <button onClick={handle}>click me</button>
    </div>
    {/* <div className="red" onMouseOver={handle2}>Hey i am red</div> */}
      <input type="text" value={name} onChange={onHandle} />
     
    </>
  )
}

export default App
