import React, { useState } from 'react'
import MyUseState from './components/MyUseState'
import MyUseEffect from './components/MyUseEffect'
const App = () => {
  
  return (
    //Using Fragments to encapsulate multiple divs since function can RETURN only one div

    <>
      {/* NOTE : Always try writing the Component names starting with CAPITAL LETTERS */}
      {/* Comment Out the HOOK Component that you dotn wanna try out. PLease dont use all the Components 
          at the same time 😅 */}
      {/* <MyUseState/> */}
      <MyUseEffect />
    </>
  )
}

export default App
