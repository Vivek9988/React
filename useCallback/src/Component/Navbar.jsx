import React from 'react'
import { memo } from 'react'

const Navbar = ({ adjective, getAdjective }) => {
    console.log("nevbar is render")
  return (
    <div>
      i am a {adjective}{getAdjective} nevbar
    </div>
  )
}

export default memo(Navbar)
