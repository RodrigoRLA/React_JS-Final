import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../../Context/data.js";
import { api } from "../../Services/index";

import { BarraLateral, ButtonCard, Card, Cat, ContainerB, ContainerContent, ContainerP, ContainerTitle, Title } from "./style_produtos";

export const Produtos = () => {

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
            <Title> Conheça os nossos Produtos! </Title><br/>
        </ContainerTitle>
        <ContainerB>
        <Cat>
            <BarraLateral>
        <Link to={"/hardware"}>
					<span>Hardwares</span><br/>
				</Link>
				<Link to={"/perifericos"}>
					<span>Periféricos</span><br/>
				</Link>
				<Link to={"/notebook"}>
					<span>Notebooks</span><br/>
				</Link>
                </BarraLateral>
        </Cat>
        <ContainerContent>
            {produtos?.map((res, index) => {
               
                return ( 
                    
                        <Card key={index} >
                            
                                <img src={res.imagemUrl} width="180px" height="120px" alt="imagem"/>
                                <div style={{fontSize: "1.3rem"}}>{res?.nome}</div>

                                <ButtonCard >
                                    R${res?.valorUnitario}
                                </ButtonCard>
                           
                        </Card>
                )
            })}

            </ContainerContent>
          </ContainerB>
        </ContainerP>
  
    )
}

