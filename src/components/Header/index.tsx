import { CartButton, HeaderContainer, LocationSpan } from "./styles";
import CoffeeDeliveryLogo from '../../assets/Logo.svg';

import { MapPin, ShoppingCart } from 'phosphor-react'


export function Header() {
    return (
        <HeaderContainer>
            <img src={CoffeeDeliveryLogo} alt="" />

            <nav>
                <LocationSpan>
                    <MapPin size={22} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </LocationSpan>
                <CartButton>
                    <ShoppingCart size={22} weight="fill" />
                </CartButton>
            </nav>
        </HeaderContainer>
    )
}