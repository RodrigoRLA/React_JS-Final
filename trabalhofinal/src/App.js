import React from "react";
import { Contexto } from "./Context/index_data";
import { Root } from "./Routes/index_rotas.js";


export const App = () => {

  return (
    <Contexto>
      <Root />
    </Contexto>
      
    
  )
}