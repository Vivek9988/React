import { useState, useEffect, useCallback } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [first, setfirst] = useState(0)

  

  
const vivek =useCallback(() => {
    //console.log("Button clicked");
    //console.log(count)

    
  }, [count]);

  // useEffect(() => {
  //  console.log("hello vidhi didi how are you and what are doing this i")
  // }, [first])
  


  useEffect(() => {
   vivek();

    console.log("hello i am useCallback"+  first)
  }, [count])
  

  return (
    <div>
      <h1>Count: {count}--{first}</h1>
      <h1>Count Second: {first}</h1>
      <button onClick={() => setCount(count + 1)}> Count{count}</button>
      <button onClick={() => setfirst(first + 1)}> first{first}</button>
      {/* {console.log(count)}
      {console.log(first)} */}
    </div>
  );
}

export default ExampleComponent;
