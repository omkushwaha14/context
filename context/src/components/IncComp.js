import React, { useContext} from 'react'
import { IncContext } from '../context/IncContext';
 

const IncComp= () => {
 const {inc, increase}= useContext(IncContext);
 
  

  return (
    <div>
     <h1>Increase Counter</h1>
     <button onClick={increase}> increase count</button>
     <h1>{inc}</h1>
    </div>
  )
}

export default IncComp;