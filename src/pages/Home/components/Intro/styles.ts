import styled from "styled-components";
import backgroundImg from '../../../../assets/Background.svg';

export const BackgroundContainer = styled.div`

    display: flex;
    flex-direction: column;

    height: 34rem;
    width: 100%;

    background: ${props => props.theme.background};
    background-image: url(${backgroundImg});
`

export const IntroContainer = styled.div`

    display: flex;
    justify-content: center;

    padding: 5.875rem 10rem;

    img{
        width: 29.75rem;
        height: 22.5rem;
    }
    
`

export const TitleContainer = styled.div`

    padding-right: 3.5rem;

    display: flex;
    flex-direction: column;
    

    h1 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 3rem;
        color: ${props => props.theme["base-title"]};
        line-height: 3.9rem;
        margin-bottom: 1rem;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.625rem;
        color: ${props => props.theme["base-subtitle"]};
        
    }

`

export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 4.125rem;
`

export const InfoLabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    margin-bottom: 1.25rem;
    
    span{
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }    
`

export const baseIcon = styled.div`
    height: 2rem;
    width: 2rem;
    border-radius: 9999px;
    color: ${props => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.75rem;
    margin-top: ;
    
`

export const ShoppingCartIcon = styled(baseIcon)`
    background: ${props => props.theme["yellow-dark"]};
`
export const PackageIcon = styled(baseIcon)`
    background: ${props => props.theme["base-text"]};
`
export const TimerIcon = styled(baseIcon)`
    background: ${props => props.theme.yellow};
`
export const CoffeeIcon = styled(baseIcon)`
    background: ${props => props.theme.purple};
`