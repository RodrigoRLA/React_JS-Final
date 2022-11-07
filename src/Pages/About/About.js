import React from "react";
import { ContainerSobre, Card } from "./style";

export const About = () => {

    return (
        <>
        <ContainerSobre>
            <h1>Sobre nós</h1>

            <p>Bem vindo a Lojinha do seu zé, fundada em Novembro de 2022, a lojinha do seu Zé surgiu como resultado do projeto final da disciplina de desenvolvimento web, desenvolvido pelo grupo 05. Somos um e-commerce no ramo de tecnologia com os melhores produtos do mercado. Desde sua criação, a empresa é formada por histórias e conquistas de um time obcecado por agilidade, qualidade de atendimento, velocidade de entrega e respeito pelo consumidor.</p>

            <p>Com preços imbatíveis e mais de 20 mil produtos em seu catálogo, a Lojinha do Seu Zé está sempre à frente e traz em primeira mão os melhores lançamentos do mercado mundial. São mais de 8 milhões de pessoas atendidas e entregas realizadas em todas as regiões do país, totalizando mais de 5.000 cidades.</p>

            <p>O e-commerce é um dos sites mais acessados do país e lidera o ranking das lojas virtuais mais recomendadas pelos consumidores brasileiros, no segmento de tecnologia e games*, com os principais índices de avaliação e selos de qualidade da internet.</p>

            <Card>
                <div>Missão</div>
                <p>Inspirar e trannsformar a vida das pessoas através da tecnologia</p>
            </Card>
            <Card>
                <div>Visão</div>
                <p>A melhor e mais inovadora experiência de compra do varejo tecnologico</p>
            </Card>
            <Card>
                <div>Valores</div>
                <p>Espirito de equipe, inspiração e foco</p>
            </Card>
        </ContainerSobre>
        </>
    )
}