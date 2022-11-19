import React, { useContext} from 'react'
import { DecContext } from '../context/DecContext';

const DecComp= () => {
 const {dec, decrease}= useContext(DecContext);
 
  return (
    <div>
     <h1>Decrease Counter</h1>
     
     <button onClick={decrease}> Decrease count</button>
     <h1>{dec}</h1>
     
    </div>
  )
}

export default DecComp;