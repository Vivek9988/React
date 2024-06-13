import React from 'react'
import Component from './Component'

const Button = (props) => {
  return (
    <div>
      <button ><span><Component vivek={props.vivek}></Component></span>I am a button</button>
    </div>
  )
}

export default Button
