import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
    return (
        <>
            <ul className='vivek'>
                <li>one</li>
                <li>two</li>
                <li>three</li>
                <div className="vivek1">
                    <li className='hero'>{props.click}</li>
                </div>
            </ul>
        </>
    )
}

export default Navbar
