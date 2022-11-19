import { createContext, useState} from "react";

export const  DecContext= createContext();

const  DecContextProvider=(props)=>{

    const[dec ,setDec]= useState(0);
   
    
    const decrease=()=>{
        setDec(dec-1);
    }
    
    return(
        <DecContext.Provider value={{dec,decrease}}>
          
         {props.children}

        </ DecContext.Provider>
    )
  

}

export default DecContextProvider;