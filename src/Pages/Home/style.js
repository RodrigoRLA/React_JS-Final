import styled from "styled-components";

export const ContainerBemVindo = styled.div`
background-color: red;
/* padding: 2rem; */
width: 98.9vw;
display: flex;
/* justify-self: center; */
font-size: 0.75rem;
font-weight: 350;
`

export const ContainerContent = styled.div`
padding-top: 1rem;
padding-bottom: 1rem;
gap: 0.5rem;
display: grid;
grid-template-columns: repeat(4, 1fr);
@media (max-width: 1512px) {
    grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
}
cursor: pointer;
`

export const Card = styled.div`
border-radius: 1rem;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
padding: 2rem;
margin: 1rem;
width: 15rem;
justify-self: center;
font-size: 0.75rem;
font-weight: 350;
transition: all 0.3s ease-out;
&:hover {
    transform: scale(1.1);
    color: #cf8ba3;
    font-size: 0.9rem;
    }
`

export const ContainerCategorias = styled.div`
padding-top: 1rem;
padding-bottom: 1rem;
gap: 0.5rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
@media (max-width: 1512px) {
    grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
}
cursor: pointer;
`

export const CardCategorias = styled.div`
display: block;
/* border-radius: 1rem; */
/* box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22); */
/* padding: 2rem; */
/* margin: 1rem; */
width: 37rem;
justify-self: center;
font-size: 1.50rem;
font-weight: 350;
transition: all 0.3s ease-out;
&:hover {
    transform: scale(1.05);
    color: #ffbb33;
    font-size: 1.75rem;
    }
`

// export const CardNotebook = styled.div`
// background-image: url("https://www.cursosdeinformaticabasica.com.br/wp-content/uploads/2019/07/hardware.jpg" );
// background-size: cover;
// border-radius: 1rem;
// box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
// padding: 2rem;
// margin: 1rem;
// width: 27rem;
// justify-self: center;
// font-size: 0.75rem;
// font-weight: 350;
// transition: all 0.3s ease-out;
// &:hover {
//     transform: scale(1.1);
//     color: #cf8ba3;
//     font-size: 0.9rem;
//     }
// `

// export const CardPeriféricos = styled.div`
// background-image: url("https://www.cursosdeinformaticabasica.com.br/wp-content/uploads/2019/07/hardware.jpg" );
// background-size: cover;
// border-radius: 1rem;
// box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
// padding: 2rem;
// margin: 1rem;
// width: 27rem;
// justify-self: center;
// font-size: 0.75rem;
// font-weight: 350;
// transition: all 0.3s ease-out;
// &:hover {
//     transform: scale(1.1);
//     color: #cf8ba3;
//     font-size: 0.9rem;
//     }
// `