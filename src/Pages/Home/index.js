import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../Services";
import { Card, CardCategorias, ContainerBemVindo, ContainerCategorias, ContainerContent } from "./style";


export const Home = () => {

    const [produtos, setProdutos] = useState([])

    const getProdutos = async () => {
        var response = await api.get(`/produto/all`)
        setProdutos(response.data)
    }
    
    useEffect (() => {
        getProdutos()
     
    }, [])
    

    // const novoArray = []

    // for(let i = 0; i <= 7; i++) {
    //   novoArray.push({
    //     produtoId: productsCart[i].id,
    //     quantidade: productsCart[i].quantidade
    //   })
    // }

    return(
        < >
            <ContainerBemVindo>
            {/* <h1>Home</h1> */}
            <img src="https://besthqwallpapers.com/Uploads/20-4-2020/129303/thumb2-chip-microcircuit-capacitors-3d-motherboard-programming.jpg" alt= "img1" width="100%" height="500rem" />
            </ContainerBemVindo>
            
      

            <ContainerCategorias>
                <CardCategorias>
                    <Link to={"/hardware"}>
                        <img src="https://www.gamespot.com/a/uploads/screen_kubrick/1551/15511094/3667472-gaming-pc-build-2020--how-to-build-a-gaming-pc-from-scratch-promothumb2.jpg" alt= "img1" width="100%" height="350rem" />
                    </Link>
                        <div>Hardware</div>
                 </CardCategorias>
                 <CardCategorias>
                    <Link to={"/notebook"}>
                        <img src="https://i.ibb.co/D1dGy4p/teste-1.jpg" alt= "img1" width="100%" height="350rem" />
                    </Link>
                        <div>Notebook</div>
                 </CardCategorias>
                 <CardCategorias>
                    <Link to={"/perifericos"}>
                        <img src="https://i0.wp.com/www.portaldonerd.com.br/wp-content/uploads/2018/09/Blackwidow-Elite-2018-Setup-Shoot-Chroma-Media-Control-Kraken-TE-Spatial-Sound-Gholiathus-Chroma-Mamba-Wireless-Desktop-3.jpg" alt= "img1" width="100%" height="350rem" />
                    </Link>
                        <div>Periféricos</div>
                 </CardCategorias>
            </ContainerCategorias>

            <h1>Destaques</h1>

            <ContainerContent>    
                { produtos?.map((res, index)  => {
                    if (index <= 2  ) {
                    return(
 
                        <Card key={index}>
                            
                            <img src={res?.imagemUrl} alt= "img1" width="180px" height="110px" /> 
                            <div>{res?.nome}</div>
                            <div>R$ {res?.valorUnitario}</div>
                            
                        </Card>
                        
                    )
                    }else return null
                })}
               
            </ContainerContent>
        </>
    )
}