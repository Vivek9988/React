import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [xyx, setxyx] = useState(0)

  
  
  
  // run on every render
  // useEffect(() => {
  //   alert("hey bhai how are you")
  // })

  // run on only first render
  // useEffect(() => {
  //   alert("hey bhai how are you")
  // }, [])

  // // run on certain value
  
  useEffect(() => {
    //alert("hey bhai how are you");
    const vivek=()=>{
      console.log("vivek")
      console.log("shenha")
      console.log("vaibhav")
    }
    vivek()
  }, [xyx])

  useEffect(() => {
    //alert("hey bhai how are you");
    const vivek = () => {
      console.log("vivek")
      console.log("vidhi")
      console.log("sweta")
    }
    vivek()
  }, [count])



  return (
    <>
    <button onClick={()=>setxyx((xyz)=>xyz+1)}>hello bhai</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
