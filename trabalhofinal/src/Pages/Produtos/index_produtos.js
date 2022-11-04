import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../../Context/index_data.js";
import { apiLocal } from "../../Services/index_services";

import {
    Button, ButtonCard, Card, Container, ContainerContent, ContainerTitle, Title
} from "./style_produtos";

export const Produtos = () => {

    const [produtos, setProdutos] = useState()

    const ctx = useContext(Contexto)

    let navigate = useNavigate()

    function handleClick() {
        navigate("/")
    }

    const getProdutos = async () => {
        var produto = await apiLocal.get(`/produto/all`)
        setProdutos(produto.data)
        console.log(produto.data);
    }

    useEffect(() => {
        getProdutos()
    }, [])

    ctx?.setProdutos(produtos)

    // console.log("log:", produtos);

    return (
        <Container>
        <ContainerTitle>
            <Title> Conheça os nossos Produtos! </Title>
        </ContainerTitle>
        <ContainerContent>
            {produtos?.map((res, index) => {
                return (
                    
                        <Card key={index} >
                            
                                <img src={res.imagemUrl} width="180px" height="120px" alt="imagem"/>
                                <div style={{fontSize: "1.3rem"}}>{res?.nome}</div>

                                <ButtonCard >
                                    {res?.valorUnitario}
                                </ButtonCard>
                                {/* <p>Descrição:{res?.descricao}</p> */}
                           
                        </Card>
                ) 
            })}
            </ContainerContent>
                
           
            <Button onClick={() => handleClick()}>Voltar para home</Button>
        </Container>
  
    )
}



