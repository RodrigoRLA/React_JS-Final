import React, { useState } from "react";

export const DataContext = React.createContext()



export const Contexto = props => {

    const [produto, setProduto] = useState([])

   
    return (
        <DataContext.Provider value={{ produto, setProduto }}>
            {props.children}
        </DataContext.Provider>
    )
}