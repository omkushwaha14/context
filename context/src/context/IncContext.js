import { createContext, useState} from "react";

export const IncContext= createContext();

const IncContextProvider=(props)=>{

    const[inc ,setInc]= useState(0);
   
    const increase=()=>{
        setInc(inc+1);
    }

    return(
        <IncContext.Provider value={{inc, increase}}>
          
         {props.children}

        </IncContext.Provider>
    )
  

}

export default IncContextProvider;