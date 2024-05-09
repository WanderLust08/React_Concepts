import React,{useContext} from 'react'


// Importing the created Context from Parent Component in the Child Component
import { LoginContext } from './MyUseContext'


const ChildUseContext = () => {

    // The below lines uses the imported CONTEXT. This greateky reduces the effort of pasing down teh Props into DEEPER COMPONENTS
    const login = useContext(LoginContext)
    console.log(login)
  return (
    <div>
      <h1>ChildUseContext</h1>
    </div>
  )
}

export default ChildUseContext
