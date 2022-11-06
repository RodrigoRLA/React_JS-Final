import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { api } from "../../Services";
import styles from "./Home.module.css";
import { ContainerContent, Card, ContainerBemVindo, ContainerCategorias, CardCategorias, CardHardware } from "./style";


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
        < >
            <ContainerBemVindo>
            {/* <h1>Home</h1> */}
            <img src="https://besthqwallpapers.com/Uploads/20-4-2020/129303/thumb2-chip-microcircuit-capacitors-3d-motherboard-programming.jpg" width="100%" height="500rem" />
            </ContainerBemVindo>
            
            <h1>Categorias</h1>

            <ContainerCategorias>
                <CardCategorias>
                    <Link to={"/hardware"}>
                        <img src="https://www.gamespot.com/a/uploads/screen_kubrick/1551/15511094/3667472-gaming-pc-build-2020--how-to-build-a-gaming-pc-from-scratch-promothumb2.jpg" width="100%" height="250rem" />
                        <div>Hardware</div>
                    </Link>
                 </CardCategorias>
                 <CardCategorias>
                    <Link to={"/notebook"}>
                        <img src="https://images.kabum.com.br/produtos/fotos/264621/notebook-lenovo-ultrafino-ideapad-ryzen-5-5500u-8gb-256gb-ssd-15-6-full-hd-linux-cinza-82mfs00100_1637242641_original.jpg" width="100%" height="250rem" />
                        <div>Notebook</div>
                    </Link>
                 </CardCategorias>
                 <CardCategorias>
                    <Link to={"/perifericos"}>
                        <img src="https://i0.wp.com/www.portaldonerd.com.br/wp-content/uploads/2018/09/Blackwidow-Elite-2018-Setup-Shoot-Chroma-Media-Control-Kraken-TE-Spatial-Sound-Gholiathus-Chroma-Mamba-Wireless-Desktop-3.jpg" width="100%" height="250rem" />
                    </Link>
                        <div>Periféricos</div>
                 </CardCategorias>
            </ContainerCategorias>

            <h1>Destaques</h1>

            <ContainerContent>    
                {produtos.map((res) => {
                    return(
                        <Card>
                            <img src={res?.imagemUrl} width="180px" height="110px" />
                            <div>{res?.nome}</div>
                            <div>R$ {res?.valorUnitario}</div>
                        </Card>
                        
                    )
                })}
                {/* <Card>
                    <img src={produtos[0].imagemUrl} width="180px" height="110px" />
                    <div>{produtos[0].nome}</div>
                    <div>R$ {produtos[0].valorUnitario}</div>
                </Card>
                <Card>
                    <img src={produtos[1].imagemUrl} width="180px" height="110px" />
                    <div>{produtos[1].nome}</div>
                    <div>R$ {produtos[1].valorUnitario}</div>
                </Card>
                <Card>
                    <img src={produtos[2].imagemUrl} width="180px" height="110px" />
                    <div>{produtos[2].nome}</div>
                    <div>R$ {produtos[2].valorUnitario}</div>
                </Card>
                <Card>
                    <img src={produtos[3].imagemUrl} width="180px" height="110px" />
                    <div>{produtos[3].nome}</div>
                    <div>R$ {produtos[3].valorUnitario}</div>
                </Card> */}
            </ContainerContent>
        </>
    )
}