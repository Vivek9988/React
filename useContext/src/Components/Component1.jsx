import React,{useContext} from 'react'
import { counterContext } from '../Context/Context'

const Component1 = () => {
  const hello=useContext(counterContext)
  return (
    <div>
      Component1 --{hello}
    </div>
  )
}

export default Component1
