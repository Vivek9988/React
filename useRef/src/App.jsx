import { useState,useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
      const a= useRef(0);
      const ref = useRef()

  let counter = 15

  const addValue = () => {            // it will persist the value
    // console.log("value addaded", Math.random());
    // counter = counter + 1;
    // console.log(counter)
  }

  useEffect(()=>{                 // so useeffect will not persist the value but the function will
    //  a.current =a.current+1;

    // console.log(`hello i am endering ${a.current}`);
    // ref.current.style.backgroundColor="red"
    counter = counter + 1;
    console.log(counter)

  });
   
  //  const button1 = ()=>{
  //   a =a+1;
  //   console.log(a)
  //  }


  return (
    <>
      
     
      <div className="card">
        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        {/* <button onClick={button1}>{a}</button> */}
        <button onClick={addValue}></button>
      </div>
     
    </>
  )
}

export default App
