import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 1rem;
    color: #141e30;
    border: 2px solid  #243b55;
    border-radius: 0.4rem;
    margin: 0 1rem;
    padding: 0.25rem 1rem;
    transition: 0.5s all ease-out;
    &:hover{
        background-color: #141e00;
        color: #FFF;
    }
`

export const Container = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    background: #243b55;
`
export const Card =styled.div`	
    border-radius: 1rem;
    box-shadow: 7px 7px 13px 0px rgba(50, 50,50, 0.22);
    padding: 2rem;
    margin: 1rem;
    width: 10rem;
    height: 15rem;
    justify-self: center;
    font-size: 0.75;
    font-weight: 350;
    transition: all 0.35 ease-out;
    &:hover{
        transform: scale(1.1);
        color: #ffbb33;
        font-size: 0.9rem;
    }
`

export const ContainerContent = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap: 0.5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media(max-width: 1512px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: 1050px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 680px){
        grid-template-columns: repeat(1, 1fr);
    }
    
`
export const ContainerTitle = styled.div`

    font-size: 1.25rem;
    font-weight: 300;
`

export const Title = styled.div`
 font-size: 4rem;

`
export const ButtonCard = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 1rem;
    color: #141e30;
    border: 2px solid  #243b55;
    border-radius: 0.4rem;
    margin: 0 1rem;
    padding: 0.25rem 1rem;
    transition: 0.5s all ease-out;
    &:hover{
        background-color: #141e00;
        color: #ffbb33;
    }
`