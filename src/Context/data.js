import { createContext, useState } from "react";

export const contexto = createContext({});

export const  Contexto = ({ children }) => {

    const [produto, setProduto] = useState([])
    
  return (
    <Contexto.Provider
      value={{

        produto, setProduto
      }}
    >
      {children}
    </Contexto.Provider>
  );
};