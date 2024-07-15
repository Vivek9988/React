import React  from 'react'
import Button from './Button'
import { counterContext } from '../Context/Context'
import { useContext } from 'react'


const Navbar = () => {
    const vount = useContext(counterContext)

    return (
        <>
       <div>
        Navbar {vount}
     </div>
     <Button />
        </>
    )
}

export default Navbar
