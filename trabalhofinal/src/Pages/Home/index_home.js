import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/data";

import { Button } from "../Produtos/style";

export const Home = () => {

    const { dados, handleSetNome } = useContext(DataContext)



    return (
        <>
            <h1> Tela home</h1>
            Nome:
            <input type="text" placeholder="Digite seu nome" value={dados.nome || ''} onChange={((e) => handleSetNome(e))} />
            <Link to={`/quemsomos/${dados.nome}`}>
                <Button cor="red">Ir para pagina quem somos</Button>
            </Link>
        </>
    )
}