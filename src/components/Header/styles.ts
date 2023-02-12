import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 10rem;

    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`

export const LocationSpan = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;

    margin-right: 0.75rem;

    padding: 0.5rem;

    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme.purple};
    border-radius: 6px;

    span{
        color: ${props => props.theme["purple-dark"]};
        margin: 0.25rem;
    }

`
export const CartButton = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.375rem;
    width: 2.375rem;

    border: none;
    border-radius: 6px;

    background: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
`