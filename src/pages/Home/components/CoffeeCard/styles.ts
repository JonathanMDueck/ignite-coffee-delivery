import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    height: 19.375rem;
    width: 16rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 6px 36px;

    background: ${props => props.theme["base-card"]};

    margin-bottom: 2.5rem;
    margin-right: 2rem; 

    img{
        margin-top: calc(0px - 1rem - 3px);
    }

    h2{
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        font-size: 1.25rem;

        margin-top: 1rem;
        color: ${props => props.theme["base-subtitle"]};
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        color: ${props => props.theme["base-label"]};
        text-align: center;

        padding: 0.5rem 1.25rem 0 1.25rem;
    }
`

export const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const Tag = styled.div`
    background: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 0.8125rem;

    padding: 0.25rem 0.5rem;
    border-radius: 9999px;

    margin-top: 0.75rem;
    margin-right: 0.25rem;
    
`

export const BuyContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2.0625rem;

    
`
export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    color: ${props => props.theme["base-text"]};

    p{
        display: flex;
        align-items: center;
        

        
    }
    span{
            font-family: 'Baloo 2', cursive;
            font-weight: 800;
            font-size: 1.5rem;
        }
`
