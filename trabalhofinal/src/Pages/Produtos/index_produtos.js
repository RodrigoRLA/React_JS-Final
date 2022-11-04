import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiLocal } from "../../Services";

import { Button, Container, InfoUsuario } from "./style";

export const About = () => {

    const [produtos, setProdutos] = useState([])

    let { nome } = useParams()
    let navigate = useNavigate()

    function handleClick() {
        navigate("/")
    }

    const getProdutos = async () => {
        var produto = await apiLocal.get(`/produtos/{id}`)
        setProdutos(produto.data)
    }

    const getDescricao = async () => {
        var response = await apiLocal.get(`/produtos/{id}/descricao`)
        //console.log("Resposta das Categorias:", response.data);
    }

    useEffect(() => {
        getProdutos()
        getDescricao()
    }, [])

    console.log("log:", produtos);

    return (
        <Container>
            <h1> Tela Sobre</h1>
            <InfoUsuario>
                <h3 >Usuário logado:{nome}</h3>
            </InfoUsuario>
            <h2>Quem somos?</h2>
            <h3> Somos uma turma de react Js</h3>
            <Button cor="#C793e1" onClick={() => handleClick()}>Voltar para home</Button>

            {racas.map((res) => {
                return (
                    <>
                        <div>Nome do produto:{res?.nome}</div>
                        <div>Descrição:{res?.descricao}</div>
                        <br />
                    </>
                )
            })}

        </Container>
    )
}