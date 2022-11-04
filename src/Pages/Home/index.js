import React, {useState, useEffect} from "react";
import { api } from "../../Services";
import styles from "./Home.module.css";
import { ContainerContent } from "./style";


export const Home = () => {

    const [produtos, setProdutos] = useState([])

    const getProdutos = async () => {
        var response = await api.get(`/produto/all`)
        setProdutos(response.data)
    }

    useEffect (() => {
        getProdutos()
    }, [])

    return(
        <div className={styles.home_container}>
            <h1>Home</h1>
            <ContainerContent>    
                {produtos.map((res) => {
                    return(
                        <Card>
                            <div>{res?.nome}</div>
                            <div>R$ {res?.valorUnitario}</div>
                        </Card>
                    )
                })}
            </ContainerContent>
        </div>
    )
}