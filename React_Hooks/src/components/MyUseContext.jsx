
import React, {createContext} from 'react'

import ChildUseContext from './ChildUseContext';


// UseContext Hook is used to manage global data in in React Application. 
// Its usually used when you need PASS down the context or any data to deeper child components.
// Creating CONTEXT requires 3 STEPS: 
// 1. Creating the Context // 2. Providing Context // 3. Consuming the Context


export const LoginContext = createContext();
const MyUseContext = () => {
  return (
    <div>
        <LoginContext.Provider value={true}>
            <ChildUseContext />
        </LoginContext.Provider>
    </div>
  )
}

export default MyUseContext
