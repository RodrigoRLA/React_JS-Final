import React, { useState } from "react";



Nota: trocar dados

export const estadoContexto = {

    nome: "Luciano"

}

export const DataContext = React.createContext(null)



export const Contexto = (props) => {

    const [dados, setDados] = useState(estadoContexto)

    function handleSetNome(e) {
        setDados({ nome: e.target.value })
    }

    return (
        <DataContext.Provider value={{ dados, handleSetNome }}>
            {props.children}
        </DataContext.Provider>
    )
}