import React, { useEffect } from "react";
import { useState } from "react";
const MyUseEffect = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(5);

  const [time, setTime] = useState(0);

    // UseEffect HOOK used to perform sideEffects in our COMPONENTS :
    // Its use cases are : Fetching data from API // Updating DOM - Document & Window
    // Timer Fucntion : setInterval & setTimeOut 


  // UseEffect Hook accepts 2 components : 1st -> callback , 2nd -> dependencies
  //1st callback function : Its a function in which we write our sideEffect Logic (WAHT TO RUN)
  //2nd dependencies Array : Its an optional argument which takes an array of state variables.(WHEN TO RUN)

  //We can control the renderin with the help of dependencies
  // 3-ways of writing useEffect : 1 -> useEffeect w/o dependencies, 2 -> useEffect with empty dependencies
  //                                  3 -> useEffect with dependencies

  //1st UseEffect w/o array, this makes the useEffect run every time the entire component render on any change.
  //   useEffect(()=>{
  //     document.title = `${count} new messages`;
  //   });

  //2nd UseEffect with Empty array, this make the useEffect run only once when the page renders at the beginning
  // useEffect(()=>{
  //     document.title = `${count} new messages`;
  //   },[]);

  //3rd UseEffect with State VAriable In dependency array, this makes the useEffect valid for only the given state variable
  // useEffect(()=>{
  //     document.title = `${otherCount} new messages`;
  //   },[otherCount]);

  useEffect(() => {
    const timer = setInterval(() => setTime(time + 1), 1000);

    //We need to cleanUP the previous state variable after unmouting ny useEffect bt the setInterval uses the prev state again n again
    // Thus clearInterval is used to CLEAN after UNMOUNTING

    return()=>{
        clearInterval(timer);
    }

    //NOTE : Here after the Initial Render of UesEffect onLoad, the CLEANUP (in RETURN) gets executed first
    //       since it cleansup first the MOUNTS again using useEffect


  });   

  //   function incrementCount(){
  //     setCount(count+1)
  //   }

  // console.log(count);
  return (
    <div>
      {/* <input type="text" onChange={(e)=>(e.target.value)} /> */}
      


      {/* UnComment the below Count when Learning UseEffect Types */}
      {/*<h1>I am a Counter {count}</h1>
      <button onClick={() => setCount(count + 1)}>COUNT + 1</button>
      <h1>I am a OtherCounter {otherCount}</h1>
      <button onClick={() => setOtherCount(otherCount + 5)}>COUNT + 5</button>*/}

      <h1>{time} in seconds</h1>
    </div>
  );
};

export default MyUseEffect;
