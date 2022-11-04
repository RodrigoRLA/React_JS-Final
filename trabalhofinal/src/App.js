import React from "react";
import { Contexto } from "./Context/data";
import { Root } from "./Routes";


export const App = () => {

  return (
    <Contexto>
      <Root />
    </Contexto>
  )
}