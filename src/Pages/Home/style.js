import styled from "styled-components";

export const ContainerContent = styled.div`
padding-top: 1rem;
padding-bottom: 1rem;
gap: 0.5rem;
display: grid;
grid-template-columns: repeat(5, 1fr);
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
width: 10rem;
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