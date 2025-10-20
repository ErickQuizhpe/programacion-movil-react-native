import { useState } from "react";

export const useCounter = () => {

    const [count, setCount] = useState(1);

    const increaseBy = (value:number)=> {
        setCount(Math.max(count + value,0));
    }
    
  return {
    //Propiedades que quiero exponer
    count,

    //Acciones que quiero exponer
    increaseBy,
  };
}
