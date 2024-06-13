import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './Component/Login'
import About from './Component/About'
import User from './Component/User'


function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></> 
    },
    {
      path:"/login",
      element: <> <Navbar /><Login /></>


    }, {
      path: "/about",
      element: <> <Navbar /><About /></>


    }, {
      path: "/user/:userName",
      element: <> <Navbar /><User /></>


    }
    
  ])

  return (
    <>
      <RouterProvider router={ router} >
        <Navbar></Navbar>
      </RouterProvider>
      {/* <Navbar></Navbar> */}

      
      
    </>
  )
}

export default App
