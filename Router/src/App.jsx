import { useState } from 'react'
import Home from './Component/Home'
import Login from './Component/Login'
import About from './Component/About'
import Contact from './Component/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Navbar from './Component/NAvbar'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar /><Home /></>
    },  
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/https://www.google.com/",
      element: <><Navbar /><About/></>
    },
    {
      path :"/contact",
      element: <><Navbar /><Contact /></>
    },
    

  ])

  return (
    <>
    
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
