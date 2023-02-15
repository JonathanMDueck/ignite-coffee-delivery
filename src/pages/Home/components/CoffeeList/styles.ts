import styled from "styled-components";

export const Title = styled.h1`

        padding: 2rem 10rem;
        
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 2rem;

        margin-bottom: 3.375rem;

        color: ${props => props.theme["base-subtitle"]}
`

export const CoffeeListContainer = styled.div`

    padding: 3.375rem 10rem;

    display: grid;

    grid-template-columns: 25% 25% 25% 25%;

`

