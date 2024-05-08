import React from 'react'
import { useState } from 'react';
const MyUseState = () => {
    // Two State variables working separately
  // const [count,setCount] = useState(0);
  // const [name,setName] = useState("");

  //In order to work with Only one state variabel we can create Object state variable
  const [details,setDetails] = useState({counter:0, name:""});

  function incrementCount(){
    // Note the below function does not initialize the setname simultaneously 
    // setDetails({counter:details.counter+1})

    // We need to use prev keyword inorder to get the previous state of teh object conating name as well
    setDetails((prev)=>({
      ...prev,
      counter:prev.counter+1,
    }))
  }

    console.log(details)
  return (
    <div>
          <input type="text" onChange={(e)=>(e.target.value)} />
    <h1>{details.name}, I am a Counter {details.counter}</h1>
    <button onClick={incrementCount}>COUNT + 1</button>
    </div>
  )
}

export default MyUseState

