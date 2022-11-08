import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../../Context/data.js";
import { api } from "../../Services/index";

import {
    ButtonCard, Card, Cat, ContainerContent, ContainerP, ContainerTitle, Title
} from "../Produtos/style_produtos";

export const Hardware = () => {

    const [produtos, setProdutos] = useState()

    const ctx = useContext(Contexto)

    const getProdutos = async () => {
        var produto = await api.get(`/produto/all`)
        setProdutos(produto.data)
        console.log(produto.data);
    }

    useEffect(() => {
        getProdutos()
    }, [])

    ctx?.setProdutos(produtos)

    // console.log("log:", produtos);

    return (
        
        <ContainerP>
        <ContainerTitle>
            <Title> Hardwares </Title>
        </ContainerTitle>
        <Cat>
        <Link to={"/hardware"}>
					<span>Hardwares</span>
				</Link>
				<Link to={"/perifericos"}>
					<span>Periféricos</span>
				</Link>
				<Link to={"/notebook"}>
					<span>Notebooks</span>
				</Link>
        </Cat>
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
    
        </ContainerP>
       
  
    )
}